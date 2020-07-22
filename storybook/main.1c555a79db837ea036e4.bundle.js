(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(module,__webpack_exports__,__webpack_require__){"use strict";var Tone=__webpack_require__(173),react=__webpack_require__(1),react_default=__webpack_require__.n(react),lodash_range=__webpack_require__(119),lodash_range_default=__webpack_require__.n(lodash_range);function set(array,pos,item){var newArray=array.slice(0);return newArray[pos]=item,newArray}var note=__webpack_require__(47),makeTuning=function(text){return text.split(" ").map(note.a).reverse()},tunings={standard:makeTuning("E2 A2 D3 G3 B3 E4"),"rondeña":makeTuning("D2 A2 D3 F♯3 B3 E4"),dadgad:makeTuning("D2 A2 D3 G3 A3 D4"),ukelele:makeTuning("G4 C4 E4 A4")};function useSound(samples,fretting,tuning,muted){void 0===tuning&&(tuning=tunings.standard);var _a=Object(react.useState)(!1),loaded=_a[0],setLoaded=_a[1],_b=Object(react.useState)(),synth=_b[0],setSynth=_b[1],_c=Object(react.useState)(tuning.map((function(){return!1}))),playing=_c[0],setPlaying=_c[1];Object(react.useEffect)((function(){if(!muted){var synth_1=new Tone.Sampler(samples,(function(){return setLoaded(!0)})).toMaster();return setSynth(synth_1),function(){synth_1.dispose()}}}),[muted]);var play=function(string,when){void 0===when&&(when="+0"),loaded&&!muted&&synth&&fretting[string]>=0&&(setPlaying((function(playing){return set(playing,string,!0)})),setTimeout((function(){return setPlaying((function(playing){return set(playing,string,!1)}))}),3e3),synth.triggerAttackRelease(Object(Tone.Frequency)(tuning[string]+fretting[string],"midi").toFrequency(),4,when))};return{play:play,strum:function(up){lodash_range_default()(tuning.length).forEach((function(i){var string=up?i:tuning.length-i-1;play(string,"+"+.05*i)}))},playing:playing}}var lodash_min=__webpack_require__(281),lodash_min_default=__webpack_require__.n(lodash_min),node_modules_scroll=__webpack_require__(120),scroll_default=__webpack_require__.n(node_modules_scroll),classnames=__webpack_require__(282),classnames_default=__webpack_require__.n(classnames);__webpack_require__(669);function getRenderFingerSpn(tuning,key){return function(string,fret){var _a=Object(note.b)(tuning[string]+fret,key),name=_a.name,accidental=_a.accidental,octave=_a.octave;return react_default.a.createElement("span",null,name,accidental,react_default.a.createElement("sub",null,octave))}}function getRenderFingerRelative(tuning,root){return function(string,fret){return react_default.a.createElement(react_default.a.Fragment,null,Object(note.d)(tuning[string]+fret,root))}}function Guitar(props){var _a=props.strings,strings=void 0===_a?[]:_a,_b=props.fitFretting,fitFretting=void 0!==_b&&_b,_c=props.frets,frets=void 0===_c?{from:0,amount:22}:_c,_d=props.lefty,lefty=void 0!==_d&&_d,renderFinger=props.renderFinger,fretsNodeRef=Object(react.useRef)(null),fretNodesRef=Object(react.useRef)({});return Object(react.useEffect)((function(){var fretsNode=fretsNodeRef.current;if(fretsNode){var toFret=lodash_min_default()(strings.map((function(fret){return fret})).filter((function(fret){return fret>0})))||1,fretNode=fretNodesRef.current[toFret];fitFretting&&fretNode&&(lefty?fretNode.offsetLeft>0?scroll_default.a.left(fretsNode,fretsNode.scrollWidth-fretNode.offsetLeft):scroll_default.a.left(fretsNode,fretNode.offsetLeft-fretsNode.offsetWidth+fretNode.offsetWidth):scroll_default.a.left(fretsNode,fretNode.offsetLeft))}}),[fretsNodeRef,fretNodesRef,strings]),react_default.a.createElement("div",{className:classnames_default()("guitar",{lefty:lefty},props.className)},react_default.a.createElement("ol",{className:"frets",ref:fretsNodeRef},lodash_range_default()(frets.from,frets.from+frets.amount+1).map((function(fret){return react_default.a.createElement("li",{className:0===fret?"nut":void 0,key:fret,ref:function(node){return fretNodesRef.current[fret]=node}},react_default.a.createElement("ol",{className:"strings"},strings.map((function(currentFret,string){return react_default.a.createElement("li",{key:string,onMouseEnter:function(){var _a;return currentFret>=0&&(null===(_a=props.onPlay)||void 0===_a?void 0:_a.call(props,string))}},react_default.a.createElement("label",null,react_default.a.createElement("input",{disabled:!props.onChange,type:"checkbox",checked:currentFret===fret,onChange:function(){var _a;return null===(_a=props.onChange)||void 0===_a?void 0:_a.call(props,set(strings,string,0===fret&&0===strings[string]?-1:strings[string]===fret?0:fret))}}),react_default.a.createElement("span",{className:"finger"},null==renderFinger?void 0:renderFinger(string,fret))))}))),0!==fret&&react_default.a.createElement("span",{className:"counter"},fret))}))))}__webpack_require__.d(__webpack_exports__,"c",(function(){return getRenderFingerSpn})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getRenderFingerRelative})),__webpack_require__.d(__webpack_exports__,"a",(function(){return Guitar})),__webpack_require__.d(__webpack_exports__,"e",(function(){return useSound})),__webpack_require__.d(__webpack_exports__,"d",(function(){return tunings}))},121:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/E2.60d1bd4d.mp3"},122:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/D3.a01e799c.mp3"},123:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/G3.1fe79ca6.mp3"},124:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/E4.ac1dc3ab.mp3"},284:function(module,exports,__webpack_require__){__webpack_require__(285),__webpack_require__(430),module.exports=__webpack_require__(431)},354:function(module,exports){},431:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(118);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(665)],module)}.call(this,__webpack_require__(214)(module))},47:function(module,__webpack_exports__,__webpack_require__){"use strict";var mod=function(n,m){return(m+n%m)%m};__webpack_require__.d(__webpack_exports__,"b",(function(){return describe})),__webpack_require__.d(__webpack_exports__,"c",(function(){return note_name})),__webpack_require__.d(__webpack_exports__,"d",(function(){return toRelativeText}));var scales=["C , C♯, D , D♯, E , F , F♯, G , G♯, A , A♯, B ","D♭, ? , E♭, ? , F , G♭, ? , A♭, ? , B♭, ? , C ","D , ? , E , ? , F♯, G , ? , A , ? , B , ? , C♯","E♭, ? , F , ? , G , A♭, ? , B♭, ? , C , ? , D ","E , ? , F♯, ? , G♯, A , ? , B , ? , C♯, ? , D♯","F , ? , G , ? , A , B♭, ? , C , ? , D , ? , E ","F♯, ? , G♯, ? , A♯, B , ? , C♯, ? , D♯, ? , F ","G , ? , A , ? , B , C , ? , D , ? , E , ? , F♯","A♭, ? , B♭, ? , C , D♭, ? , E♭, ? , F , ? , G ","A , ? , B , ? , C♯, D , ? , E , ? , F♯, ? , G♯","B♭, ? , C , ? , D , E♭, ? , F , ? , G , ? , A ","B , ? , C♯, ? , D♯, E , ? , F♯, ? , G♯, ? , A♯"].map((function(s){return s.split(", ").map((function(s){return s.trim()}))})),noteRegex=/^([A-Z])(♯|♭)?(-)?(\d+)?$/,describe=function(value,key){void 0===key&&(key=0);var fullName=note_name(value,key);return{name:fullName[0],accidental:fullName.length>=2?fullName.substring(1):null,octave:Math.floor((value-12)/12)}},note_name=function(note,key){void 0===key&&(key=0);var name=scales[key][mod(note-key,12)];return"?"===name?scales[key][mod(note+1-key,12)]+"♭/"+scales[key][mod(note-1-key,12)]+"♯":name},toRelativeText=function(note,key){return void 0===key&&(key=0),["1","2m","2","3m","3","4","5dim","5","5aug","6","7m","7"][mod(note-key,12)]};__webpack_exports__.a=function(text){var match=text.match(noteRegex);if(match){var letter=match[1],accidental=match[2],minus=!!match[3],octave=match[4]?(minus?-1:1)*parseInt(match[4],10):-1,offset=scales[0].indexOf(letter);return accidental&&("♯"===accidental?offset++:"♭"===accidental&&offset--),offset+12*(octave+1)}return NaN}},665:function(module,exports,__webpack_require__){var map={"./index.stories.tsx":666};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=665},666:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(12),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(118),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(56),_src_music_note__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(47),lodash__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(283),_storybook_addons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(30),_resources_E2_mp3__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(121),_resources_E2_mp3__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_resources_E2_mp3__WEBPACK_IMPORTED_MODULE_7__),_resources_D3_mp3__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(122),_resources_D3_mp3__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_resources_D3_mp3__WEBPACK_IMPORTED_MODULE_8__),_resources_G3_mp3__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(123),_resources_G3_mp3__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_resources_G3_mp3__WEBPACK_IMPORTED_MODULE_9__),_resources_E4_mp3__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(124),_resources_E4_mp3__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_resources_E4_mp3__WEBPACK_IMPORTED_MODULE_10__),__assign=function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},withSourceLoader=__webpack_require__(277).withSource,__STORY__=(__webpack_require__(277).addSource,"import React from 'react'\nimport Guitar, {\n  useSound,\n  tunings,\n  getRenderFingerRelative,\n  getRenderFingerSpn\n} from '../src'\nimport { storiesOf } from '@storybook/react'\nimport { withKnobs, number, boolean, select } from '@storybook/addon-knobs'\nimport { name } from '../src/music/note'\nimport { range } from 'lodash'\nimport { useState } from '@storybook/addons'\nimport E2 from '../resources/E2.mp3'\nimport D3 from '../resources/D3.mp3'\nimport G3 from '../resources/G3.mp3'\nimport E4 from '../resources/E4.mp3'\n\nstoriesOf('Guitar', module)\n  .addDecorator(withKnobs)\n  .add('advanced', () => {\n    const notes = range(12).reduce(\n      (acc, note) => ({ ...acc, [name(note)]: note }),\n      {} as {\n        [K: string]: number\n      }\n    )\n    const root = select('Root', notes, notes['C'])\n    const renderFingerFunctions = {\n      'Scientific Pitch Notation': getRenderFingerSpn(tunings.standard, root),\n      'Relative to Root': getRenderFingerRelative(tunings.standard, root)\n    }\n    const [strings, setStrings] = useState([0, 0, 0, 0, 0, 0])\n    const { play } = useSound({ E2, D3, G3, E4 }, strings)\n    return (\n      <Guitar\n        lefty={boolean('Lefty', false)}\n        frets={{\n          from: number('From fret', 0),\n          amount: number('Frets', 22)\n        }}\n        strings={strings}\n        renderFinger={\n          renderFingerFunctions[\n            select<keyof typeof renderFingerFunctions>(\n              'Notes',\n              ['Scientific Pitch Notation', 'Relative to Root'],\n              'Scientific Pitch Notation'\n            )\n          ]\n        }\n        onChange={setStrings}\n        onPlay={play}\n      />\n    )\n  })\n  .add('with fixed A minor', () => <Guitar strings={[0, 1, 2, 2, 0, -1]} />)\n  .add('with fixed A minor and sound', () => {\n    const fretting = [0, 1, 2, 2, 0, -1]\n    const { play } = useSound({ E2, D3, G3, E4 }, fretting)\n    return <Guitar strings={fretting} onPlay={play} />\n  })\n  .add('editable', () => {\n    const [strings, setStrings] = useState([0, 0, 0, 0, 0, 0])\n    return <Guitar strings={strings} onChange={setStrings} />\n  })\n  .add('without strings', () => <Guitar />)\n  .add('ukelele', () => {\n    const [strings, setStrings] = useState([0, 0, 0, 0])\n    const { play } = useSound({ E2, D3, G3, E4 }, strings, tunings.ukelele)\n    return (\n      <Guitar\n        strings={strings}\n        onPlay={play}\n        renderFinger={getRenderFingerSpn(tunings.ukelele)}\n        onChange={setStrings}\n      />\n    )\n  })\n"),__ADDS_MAP__={"guitar--ukelele":{startLoc:{col:7,line:67},endLoc:{col:3,line:78},startBody:{col:18,line:67},endBody:{col:3,line:78}},"guitar--without-strings":{startLoc:{col:7,line:66},endLoc:{col:42,line:66},startBody:{col:26,line:66},endBody:{col:42,line:66}},"guitar--editable":{startLoc:{col:7,line:62},endLoc:{col:3,line:65},startBody:{col:19,line:62},endBody:{col:3,line:65}},"guitar--with-fixed-a-minor-and-sound":{startLoc:{col:7,line:57},endLoc:{col:3,line:61},startBody:{col:39,line:57},endBody:{col:3,line:61}},"guitar--with-fixed-a-minor":{startLoc:{col:7,line:56},endLoc:{col:75,line:56},startBody:{col:29,line:56},endBody:{col:75,line:56}},"guitar--advanced":{startLoc:{col:7,line:20},endLoc:{col:3,line:55},startBody:{col:19,line:20},endBody:{col:3,line:55}}};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Guitar",module).addParameters({storySource:{source:__STORY__,locationsMap:__ADDS_MAP__}}).addDecorator(withSourceLoader(__STORY__,__ADDS_MAP__,"/index.stories.tsx",[],{},"/home/runner/work/react-guitar/react-guitar/packages/react-guitar/stories",{})).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs).add("advanced",(function(){var notes=Object(lodash__WEBPACK_IMPORTED_MODULE_5__.range)(12).reduce((function(acc,note){var _a;return __assign(__assign({},acc),((_a={})[Object(_src_music_note__WEBPACK_IMPORTED_MODULE_4__.c)(note)]=note,_a))}),{}),root=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Root",notes,notes.C),renderFingerFunctions={"Scientific Pitch Notation":Object(_src__WEBPACK_IMPORTED_MODULE_1__.c)(_src__WEBPACK_IMPORTED_MODULE_1__.d.standard,root),"Relative to Root":Object(_src__WEBPACK_IMPORTED_MODULE_1__.b)(_src__WEBPACK_IMPORTED_MODULE_1__.d.standard,root)},_a=Object(_storybook_addons__WEBPACK_IMPORTED_MODULE_6__.useState)([0,0,0,0,0,0]),strings=_a[0],setStrings=_a[1],play=Object(_src__WEBPACK_IMPORTED_MODULE_1__.e)({E2:_resources_E2_mp3__WEBPACK_IMPORTED_MODULE_7___default.a,D3:_resources_D3_mp3__WEBPACK_IMPORTED_MODULE_8___default.a,G3:_resources_G3_mp3__WEBPACK_IMPORTED_MODULE_9___default.a,E4:_resources_E4_mp3__WEBPACK_IMPORTED_MODULE_10___default.a},strings).play;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{lefty:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Lefty",!1),frets:{from:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("From fret",0),amount:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Frets",22)},strings:strings,renderFinger:renderFingerFunctions[Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Notes",["Scientific Pitch Notation","Relative to Root"],"Scientific Pitch Notation")],onChange:setStrings,onPlay:play})})).add("with fixed A minor",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{strings:[0,1,2,2,0,-1]})})).add("with fixed A minor and sound",(function(){var fretting=[0,1,2,2,0,-1],play=Object(_src__WEBPACK_IMPORTED_MODULE_1__.e)({E2:_resources_E2_mp3__WEBPACK_IMPORTED_MODULE_7___default.a,D3:_resources_D3_mp3__WEBPACK_IMPORTED_MODULE_8___default.a,G3:_resources_G3_mp3__WEBPACK_IMPORTED_MODULE_9___default.a,E4:_resources_E4_mp3__WEBPACK_IMPORTED_MODULE_10___default.a},fretting).play;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{strings:fretting,onPlay:play})})).add("editable",(function(){var _a=Object(_storybook_addons__WEBPACK_IMPORTED_MODULE_6__.useState)([0,0,0,0,0,0]),strings=_a[0],setStrings=_a[1];return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{strings:strings,onChange:setStrings})})).add("without strings",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,null)})).add("ukelele",(function(){var _a=Object(_storybook_addons__WEBPACK_IMPORTED_MODULE_6__.useState)([0,0,0,0]),strings=_a[0],setStrings=_a[1],play=Object(_src__WEBPACK_IMPORTED_MODULE_1__.e)({E2:_resources_E2_mp3__WEBPACK_IMPORTED_MODULE_7___default.a,D3:_resources_D3_mp3__WEBPACK_IMPORTED_MODULE_8___default.a,G3:_resources_G3_mp3__WEBPACK_IMPORTED_MODULE_9___default.a,E4:_resources_E4_mp3__WEBPACK_IMPORTED_MODULE_10___default.a},strings,_src__WEBPACK_IMPORTED_MODULE_1__.d.ukelele).play;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.a,{strings:strings,onPlay:play,renderFinger:Object(_src__WEBPACK_IMPORTED_MODULE_1__.c)(_src__WEBPACK_IMPORTED_MODULE_1__.d.ukelele),onChange:setStrings})}))}.call(this,__webpack_require__(214)(module))},669:function(module,exports,__webpack_require__){var api=__webpack_require__(670),content=__webpack_require__(671);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},671:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(672)(!1)).push([module.i,'.frets{position:relative;white-space:nowrap;overflow-y:auto}.frets > li{width:10em;background:#9e6429;display:inline-flex;flex-direction:row-reverse;position:relative;border-top:solid .5em #333;border-bottom:solid 2em #333;vertical-align:top}.frets > li.nut{width:7em;background:#fffacd;flex-shrink:0;z-index:1;border-top:solid .5em #333;border-bottom:solid 2em #333;box-shadow:4px 0 2px -3px #333}.lefty .frets > li.nut{box-shadow:-4px 0 2px -3px #333}.frets > li:not(.nut)::before{content:"";background:#daa520;box-shadow:0 0 7px -1px #333;position:absolute;top:0;bottom:0;width:.3em;display:inline-block}.frets > li .counter{width:100%;height:6%;position:absolute;bottom:-1.5em;font-weight:bold;text-align:center;color:#606c76}.strings{width:100%;display:flex;flex-direction:column;height:20em}.strings > li{z-index:1;margin:0;position:relative;display:flex;flex-grow:1;align-items:center;justify-content:center}.strings > li::after{content:"";background-color:#f3f3f3;width:100%;height:.6em;position:absolute;left:0;border-bottom:solid .1em #555}.strings > li label{font-size:1em;position:absolute;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;z-index:2;margin:0}.strings > li:hover input:not(:disabled) + .finger,.strings > li input:focus:not(:disabled) + .finger{opacity:.5}.strings > li input:not(:disabled){height:100%;width:100%}.strings > li input:not(:disabled),.strings > li input:not(:disabled) + .finger{cursor:pointer}.strings > li input{position:absolute;opacity:0}.strings > li input:checked + .finger{opacity:1 !important}.strings > li input:focus:not(:disabled) + .finger{box-shadow:0 0 0 .2em #333}.strings > li .finger{transition:opacity ease-in-out .1s;background:#fff;width:5em;padding:0;height:2.3333333333em;border-radius:100px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);line-height:2.3333333333em;text-align:center;font-weight:bold;opacity:0;color:#606c76}.guitar{font-family:"Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;position:relative;box-sizing:border-box;display:inline-block;max-width:100%;display:inline-flex}.guitar.lefty{direction:rtl}.guitar.lefty .nut{box-shadow:-4px 0 2px -3px #333}.guitar *{box-sizing:border-box}.guitar ol,.guitar li{margin:0;padding:0;list-style:none}',""])}},[[284,1,2]]]);
//# sourceMappingURL=main.1c555a79db837ea036e4.bundle.js.map