(()=>{"use strict";var e={485:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),r=n.n(o),s=n(645),i=n.n(s)()(r());i.push([e.id,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  font: bold 20px "Courier";\n}\n#main {\n  width: 360px;\n  height: 420px;\n  margin: 100px auto;\n  border: 10px solid black;\n  border-radius: 40px;\n  background-color: #b7d4a8;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: space-around;\n}\n#main #stage {\n  width: 304px;\n  height: 304px;\n  border: 2px solid black;\n  position: relative;\n}\n#main #stage #snake > div {\n  width: 10px;\n  height: 10px;\n  background-color: #000;\n  border: 1px solid #b7d4a8;\n  position: absolute;\n}\n#main #stage #food {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  left: 40px;\n  top: 50px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-content: space-between;\n}\n#main #stage #food > div {\n  width: 4px;\n  height: 4px;\n  background-color: #000;\n  transform: rotate(45deg);\n}\n#main #score-panel {\n  width: 300px;\n  display: flex;\n  justify-content: space-between;\n}\n',""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,s){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var s={},i=[],a=0;a<e.length;a++){var c=e[a],d=o.base?c[0]+o.base:c[0],l=s[d]||0,h="".concat(d," ").concat(l);s[d]=l+1;var p=n(h),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var f=r(u,o);o.byIndex=a,t.splice(a,0,{identifier:h,updater:f,references:1})}i.push(h)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var s=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<s.length;i++){var a=n(s[i]);t[a].references--}for(var c=o(e,r),d=0;d<s.length;d++){var l=n(s[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}s=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={id:o,exports:{}};return e[o](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),s=n(569),i=n.n(s),a=n(565),c=n.n(a),d=n(216),l=n.n(d),h=n(589),p=n.n(h),u=n(485),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;class v{constructor(){this.e=document.getElementById("snake"),this.head=document.querySelector("#snake > div"),this.bodies=this.e.getElementsByTagName("div")}get X(){return this.head.offsetLeft}get Y(){return this.head.offsetTop}set X(e){if(this.X!==e){if(e<0||e>290)throw new Error("撞墙了，游戏结束");this.moveBody(),this.head.style.left=e+"px"}}set Y(e){if(this.Y!==e){if(e<0||e>290)throw new Error("撞墙了，游戏结束");this.moveBody(),this.head.style.top=e+"px"}}addBody(){this.e.insertAdjacentHTML("beforeend","<div></div>")}moveBody(){for(let e=this.bodies.length-1;e>0;e--){let t=this.bodies[e-1].offsetLeft,n=this.bodies[e-1].offsetTop;this.bodies[e].style.left=t+"px",this.bodies[e].style.top=n+"px"}}}class m{constructor(e=10){this.score=0,this.level=1,this.scoreSpan=document.getElementById("score"),this.levelSpan=document.getElementById("level"),this.maxLevel=e}addScore(){this.scoreSpan.innerHTML=++this.score+"",this.score%10==0&&this.addLevel()}addLevel(){this.level<=this.maxLevel&&(this.levelSpan.innerHTML=++this.level+"")}}class y{constructor(){this.element=document.getElementById("food")}get X(){return this.element.offsetLeft}get Y(){return this.element.offsetTop}change(){let e=10*Math.round(29*Math.random()),t=10*Math.round(29*Math.random());this.element.style.left=e+"px",this.element.style.top=t+"px"}}new class{constructor(){this.direction="Right",this.isLive=!0,this.snake=new v,this.scorePanel=new m,this.food=new y,this.init()}init(){document.addEventListener("keydown",this.keyDownHandle.bind(this)),this.run()}keyDownHandle(e){this.direction=e.key}run(){let e=this.snake.X,t=this.snake.Y;switch(this.direction){case"ArrowUp":case"Up":t-=10;break;case"ArrowDown":case"Down":t+=10;break;case"ArrowLeft":case"Left":e-=10;break;case"ArrowRight":case"Right":e+=10}this.checkEat(e,t);try{this.snake.X=e,this.snake.Y=t}catch(e){alert(e.message),this.isLive=!1}this.isLive&&setTimeout(this.run.bind(this),300-30*(this.scorePanel.level-1))}checkEat(e,t){e===this.food.X&&t===this.food.Y&&(this.food.change(),this.scorePanel.addScore(),this.snake.addBody())}}})()})();