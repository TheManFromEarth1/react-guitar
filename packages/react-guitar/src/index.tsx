/** @jsx jsx */
import { jsx } from '@emotion/core'
import useSound from './hooks/sound'
import tunings from './util/tunings'
import { useRef, Fragment, useMemo, ReactElement } from 'react'
import useLayoutEffect from './hooks/layoutEffect'
import range from 'lodash.range'
import { set } from './util/arrays'
import classNames from 'classnames'
import { get, fromMidiSharps } from '@tonaljs/note'
import spanishTheme, { Theme } from './util/theme'
import getStyles from './styles'
import color from 'color'

export { useSound, tunings, spanishTheme, Theme }

export function getRenderFingerSpn(tuning: number[]) {
  return (string: number, fret: number) => {
    const { letter, acc, oct } = get(fromMidiSharps(tuning[string] + fret))
    return (
      <span>
        {letter}
        {acc === '#' ? '♯' : acc === 'b' ? '♭' : ''}
        <sub aria-label={`octave ${oct}`}>{oct}</sub>
      </span>
    )
  }
}

export function getRenderFingerRelative(tuning: number[], root: number) {
  const mod = (n: number, m: number) => (m + (n % m)) % m
  return (string: number, fret: number) => (
    <Fragment>
      {
        ['1', '2m', '2', '3m', '3', '4', '5dim', '5', '5aug', '6', '7m', '7'][
          mod(tuning[string] + fret - root, 12)
        ]
      }
    </Fragment>
  )
}

function Frets(props: {
  className?: string
  currentFret?: number
  frets: {
    from: number
    amount: number
  }
  children?: (fret: number) => ReactElement | ReactElement[] | null
  onMouseEnter?: () => void
}) {
  const { from, amount } = props.frets
  return (
    <div
      className={classNames(props.className, 'frets')}
      onMouseEnter={props.onMouseEnter}
    >
      {props.currentFret !== undefined && (
        <div
          className="fret mute"
          style={{ zIndex: props.currentFret === -1 ? 1 : undefined }}
        >
          {props.children?.(-1)}
        </div>
      )}
      {range(from, from + amount + 1).map(fret => (
        <div className={classNames('fret', { nut: fret === 0 })} key={fret}>
          {props.children?.(fret)}
        </div>
      ))}
    </div>
  )
}

export default function Guitar(props: {
  className?: string
  strings?: number[]
  frets?: {
    from: number
    amount: number
  }
  lefty?: boolean
  center?: boolean
  renderFinger?: (string: number, fret: number) => JSX.Element
  theme?: Theme
  playOnHover?: boolean
  onChange?: (strings: number[]) => void
  onPlay?: (string: number) => void
}) {
  const {
    strings = [],
    frets = { from: 0, amount: 22 },
    lefty = false,
    center = false,
    renderFinger,
    theme = spanishTheme,
    playOnHover
  } = props
  const styles = useMemo(() => getStyles(theme), [theme])
  const ref = useRef(null as HTMLDivElement | null)
  const releaseString = (string: number) => {
    const newFret = strings[string] === 0 ? -1 : 0
    ref.current
      ?.querySelector?.<HTMLInputElement>(
        `input[name="string-${string}"][value="${newFret}"]`
      )
      ?.focus()
    props.onChange?.(set(strings, string, newFret))
  }
  useLayoutEffect(() => {
    const fretsNode = ref.current
    if (center && fretsNode) {
      const children = fretsNode.querySelectorAll('.fret')
      const pressedFrets = strings.filter(fret => fret > 0)
      const minFret = Math.min.apply(Math, pressedFrets)
      const maxFret = Math.max.apply(Math, pressedFrets)
      const toFret = minFret + Math.floor((maxFret - minFret) / 2)
      const fretNode = children[toFret] as HTMLElement | undefined
      if (fretNode) {
        fretsNode.scrollLeft =
          fretNode.offsetLeft -
          fretsNode.offsetWidth / 2 +
          fretNode.offsetWidth / 2
      }
    }
  }, [ref, strings, center, lefty])
  return (
    <div
      ref={ref}
      css={styles}
      className={classNames('guitar', { lefty }, props.className)}
    >
      <div className="sr-only">
        This is a guitar with {strings.length} strings and {frets.amount} frets,
        starting from {frets.from}.
        {props.onChange && <span>You can tab between strings and frets.</span>}
        {props.onPlay && (
          <span>
            When a specific string is focused you can play it by pressing 'p'.
          </span>
        )}
      </div>
      <div className="sr-only" role="status">
        Current fretting: {strings.join(', ')}.
      </div>
      <div className="strings">
        <Frets className="fretboard" frets={frets}>
          {theme.fret.marker
            ? fret => <div className="marker">{theme.fret.marker?.(fret)}</div>
            : undefined}
        </Frets>
        {strings.map((currentFret, string) => (
          <Frets
            key={string}
            className="string"
            currentFret={currentFret}
            frets={frets}
            onMouseEnter={() => playOnHover && props.onPlay?.(string)}
          >
            {fret => (
              <label>
                <span className="sr-only" role="status">
                  String {string + 1}, fret {fret}.{' '}
                  {currentFret === -1 && 'This string is muted.'}
                </span>
                {fret >= 0 && (
                  <span
                    className="actual-string"
                    style={{
                      opacity: currentFret === -1 ? 0.2 : 1,
                      borderBottom: `solid 0.2em ${color(
                        theme.string.color(string)
                      ).darken(0.35)}`,
                      backgroundColor: theme.string.color(string)
                    }}
                  />
                )}
                <input
                  disabled={!props.onChange}
                  type="radio"
                  name={`string-${string}`}
                  value={fret}
                  checked={currentFret === fret}
                  onChange={e => {
                    props.onChange?.(set(strings, string, fret))
                    e.target.focus()
                  }}
                  onClick={() => fret === currentFret && releaseString(string)}
                  onKeyDown={e => {
                    switch (e.keyCode) {
                      case 80:
                        props.onPlay?.(string)
                        break
                      case 13:
                        releaseString(string)
                        e.preventDefault()
                    }
                  }}
                />
                <span className="finger">
                  {renderFinger?.(string, fret === -1 ? 0 : fret)}
                </span>
              </label>
            )}
          </Frets>
        ))}
      </div>
      <Frets className="frame" frets={frets}>
        {fret => (fret !== 0 ? <span className="counter">{fret}</span> : null)}
      </Frets>
    </div>
  )
}
