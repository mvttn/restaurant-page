(()=>{"use strict";var e={919:(e,n,t)=>{t.d(n,{A:()=>p});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),c=t(417),s=t.n(c),l=new URL(t(661),t.b),d=a()(o()),u=s()(l);d.push([e.id,`* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Signika Negative", Verdana, Geneva, Tahoma, sans-serif;\n}\n\n:root {\n  --light-font-color: rgb(230, 230, 230);\n  --secondary-color: rgb(254, 197, 52);\n  --primary-dark-color: rgb(21, 21, 21);\n  --secondary-dark-color: rgba(12, 12, 66, 0.5);\n}\n\nbody {\n  max-height: 100vh;\n  background-image: url(${u});\n  background-size: 200vh;\n}\n\nh1 {\n  font-size: 2rem;\n}\n\nh2 {\n  font-size: 3rem;\n}\n\nh1,\nh2 {\n  color: var(--light-font-color);\n}\n\nheader {\n  display: grid;\n  justify-content: center;\n  grid-template-columns: 1fr 2fr 1fr;\n  padding: 2rem;\n  margin-bottom: 5rem;\n  border-bottom: 3px solid var(--secondary-color);\n  background: linear-gradient(45deg, var(--primary-dark-color), var(--secondary-dark-color));\n}\n\n#book {\n  justify-self: center;\n  padding: 10px 60px;\n}\n\nnav {\n  justify-self: center;\n}\n\nbutton {\n  padding: 10px 20px;\n  border: 0;\n  background-color: inherit;\n  color: var(--light-font-color);\n  font-size: 18px;\n}\n\nbutton:hover {\n  opacity: 0.8;\n  transition: 0.3s;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#content > img {\n  width: 25rem;\n}\n\n#order-now,\n#book {\n  background-color: var(--secondary-color);\n  color: var(--primary-dark-color);\n}\n\n#order-now {\n  margin: 2rem;\n}\n\n#opening-hours {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 300px;\n  padding: 2rem;\n  margin: 2rem;\n  background: linear-gradient(90deg, var(--primary-dark-color), var(--secondary-dark-color));\n  line-height: 25px;\n}\n\n#opening-hours > h3 {\n  color: rgb(230, 230, 230);\n}\n\n#opening-hours > p {\n  color: rgb(200, 195, 195);\n}\n\n#about-section {\n  max-width: 500px;\n  color: var(--light-font-color);\n  line-height: 32px;\n}\n\n.selected {\n  color: rgb(200, 157, 50);\n}\n\n#menu-section {\n  max-height: 70vh;\n  overflow: scroll;\n}\n\n#menu-section::-webkit-scrollbar {\n  width: 5px;\n}\n\n#menu-section::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: var(--secondary-color);\n}\n\n#menu-section::-webkit-scrollbar-corner {\n  color: inherit;\n}\n\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 32rem;\n  padding: 2rem;\n  color: var(--light-font-color);\n  background: linear-gradient(90deg, var(--primary-dark-color), var(--secondary-dark-color));\n  text-align: center;\n  line-height: 24px;\n}\n\n.menu-item > h3,\n.menu-item > h4 {\n  color: var(--secondary-color);\n}\n\nhr {\n  background-color: var(--secondary-color);\n  color: var(--secondary-color);\n  width: 60%;\n  height: 2px;\n  border: none;\n  margin: 5px;\n}\n\n#about-section {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 2rem;\n  background: linear-gradient(90deg, var(--primary-dark-color), var(--secondary-dark-color));\n}\n\n#about-section > * {\n  padding: 1rem;\n}\n`,""]);const p=d},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),l=0;l<i.length;l++){var d=t(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},661:(e,n,t)=>{e.exports=t.p+"9dc1a24ea4d2f0d45953.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r={};(()=>{t.d(r,{Q:()=>v});const e=function(){const e=document.createElement("h2");e.textContent="K'S PIZZERIA",v.appendChild(e);const n=document.createElement("button");n.textContent="ORDER NOW",n.id="order-now",n.onclick=()=>{console.log("Order nOw!")},v.appendChild(n);const t=document.createElement("div");t.id="opening-hours",t.innerHTML="<h3>Opening Hours</h3>     <p>Monday : CLOSED</p>    <p>Tuesday : 3pm - 9pm</p>    <p>Wednesday : 3pm - 9pm</p>    <p>Thursday : 3pm - 11pm</p>    <p>Friday : 3pm - 11pm</p>    <p>Saturday : 3pm - 11pm</p>    <p>Sunday : 3pm - 11pm</p>",v.appendChild(t)};var n=t(72),o=t.n(n),i=t(825),a=t.n(i),c=t(659),s=t.n(c),l=t(56),d=t.n(l),u=t(540),p=t.n(u),m=t(113),f=t.n(m),h=t(919),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),o()(h.A,g),h.A&&h.A.locals&&h.A.locals;const v=document.querySelector("#content");e(),console.log("Hello this your restaurant");const b=document.querySelector("#home-btn"),y=document.querySelector("#menu-btn"),x=document.querySelector("#about-btn");b.addEventListener("click",(()=>{v.innerHTML="",b.classList.add("selected"),y.classList.remove("selected"),x.classList.remove("selected"),e()})),y.addEventListener("click",(()=>{v.innerHTML="",y.classList.add("selected"),b.classList.remove("selected"),x.classList.remove("selected"),function(){const e=document.createElement("div");e.id="menu-section",[{name:"Margherita",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",price:"$21"},{name:"Quattro Stagioni",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",price:"$24"},{name:"Diavola",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",price:"$20"},{name:"Parmigiana",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",price:"$19"},{name:"Capricciosa",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",price:"$19"},{name:"Prosciutto",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",price:"$19"}].forEach((n=>{const t=document.createElement("div");t.className="menu-item",t.innerHTML=`\n    <h3>${n.name}</h3>    <p>${n.description}</p>    <h4>${n.price}</h4>    <hr>`,e.appendChild(t)})),v.appendChild(e)}()})),x.addEventListener("click",(()=>{v.innerHTML="",x.classList.add("selected"),b.classList.remove("selected"),y.classList.remove("selected"),function(){const e=document.createElement("div");e.id="about-section",e.innerHTML="<h2>About</h2>    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores rerum incidunt     praesentium aspernatur sunt quod quae enim illo dolore? Alias, itaque asperiores? Natus,      ipsum labore nostrum perferendis quaerat placeat.Lorem ipsum dolor sit amet consectetur      adipisicing elit. Reprehenderit dolorem adipisci quisquam! Numquam, accusamus soluta dolor       ullam explicabo doloremque impedit sed? Perspiciatis consectetur sit ipsa accusamus illum,        laborum neque dignissimos.<p>",v.appendChild(e)}()}))})()})();