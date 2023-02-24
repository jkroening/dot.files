var e,t={7507:(e,t,n)=>{(()=>{var t={2989:e=>{e.exports=function(e,t){return Array.prototype.slice.call(e,t)}},4184:(e,t)=>{var n;!function(){var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var s=r.apply(null,n);s&&e.push(s)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)o.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},8514:(e,t,n)=>{var o=n(6115);e.exports=function(e,t,n){e&&o((function(){e.apply(n||null,t||[])}))}},5229:(e,t,n)=>{var o=n(2989),r=n(8514);e.exports=function(e,t){var n=t||{},i={};return void 0===e&&(e={}),e.on=function(t,n){return i[t]?i[t].push(n):i[t]=[n],e},e.once=function(t,n){return n._once=!0,e.on(t,n),e},e.off=function(t,n){var o=arguments.length;if(1===o)delete i[t];else if(0===o)i={};else{var r=i[t];if(!r)return e;r.splice(r.indexOf(n),1)}return e},e.emit=function(){var t=o(arguments);return e.emitterSnapshot(t.shift()).apply(this,t)},e.emitterSnapshot=function(t){var s=(i[t]||[]).slice(0);return function(){var i=o(arguments),a=this||e;if("error"===t&&!1!==n.throws&&!s.length)throw 1===i.length?i[0]:i;return s.forEach((function(o){n.async?r(o,i,a):o.apply(a,i),o._once&&e.off(t,o)})),e}},e}},3285:(e,t,n)=>{n(8691),e.exports=n(4579).Array.isArray},6981:(e,t,n)=>{n(2699),e.exports=n(4579).Object.assign},5627:(e,t,n)=>{n(6760);var o=n(4579).Object;e.exports=function(e,t){return o.create(e,t)}},7965:(e,t,n)=>{n(520),e.exports=n(4579).Object.entries},8613:(e,t,n)=>{n(961),e.exports=n(4579).Object.keys},433:(e,t,n)=>{n(9349),e.exports=n(4579).Object.setPrototypeOf},5663:e=>{e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},2159:(e,t,n)=>{var o=n(6727);e.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},7428:(e,t,n)=>{var o=n(7932),r=n(8728),i=n(6531);e.exports=function(e){return function(t,n,s){var a,l=o(t),c=r(l.length),d=i(s,c);if(e&&n!=n){for(;c>d;)if((a=l[d++])!=a)return!0}else for(;c>d;d++)if((e||d in l)&&l[d]===n)return e||d||0;return!e&&-1}}},2894:e=>{var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},4579:e=>{var t=e.exports={version:"2.6.12"};"number"==typeof __e&&(__e=t)},9216:(e,t,n)=>{var o=n(5663);e.exports=function(e,t,n){if(o(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,o){return e.call(t,n,o)};case 3:return function(n,o,r){return e.call(t,n,o,r)}}return function(){return e.apply(t,arguments)}}},8333:e=>{e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},9666:(e,t,n)=>{e.exports=!n(7929)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},7467:(e,t,n)=>{var o=n(6727),r=n(3938).document,i=o(r)&&o(r.createElement);e.exports=function(e){return i?r.createElement(e):{}}},3338:e=>{e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},3856:(e,t,n)=>{var o=n(3938),r=n(4579),i=n(9216),s=n(1818),a=n(7069),l="prototype",c=function(e,t,n){var d,u,h,p=e&c.F,f=e&c.G,m=e&c.S,g=e&c.P,b=e&c.B,v=e&c.W,y=f?r:r[t]||(r[t]={}),w=y[l],x=f?o:m?o[t]:(o[t]||{})[l];for(d in f&&(n=t),n)(u=!p&&x&&void 0!==x[d])&&a(y,d)||(h=u?x[d]:n[d],y[d]=f&&"function"!=typeof x[d]?n[d]:b&&u?i(h,o):v&&x[d]==h?function(e){var t=function(t,n,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,o)}return e.apply(this,arguments)};return t[l]=e[l],t}(h):g&&"function"==typeof h?i(Function.call,h):h,g&&((y.virtual||(y.virtual={}))[d]=h,e&c.R&&w&&!w[d]&&s(w,d,h)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},7929:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},3938:e=>{var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},7069:e=>{var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},1818:(e,t,n)=>{var o=n(4743),r=n(3101);e.exports=n(9666)?function(e,t,n){return o.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}},4881:(e,t,n)=>{var o=n(3938).document;e.exports=o&&o.documentElement},3758:(e,t,n)=>{e.exports=!n(9666)&&!n(7929)((function(){return 7!=Object.defineProperty(n(7467)("div"),"a",{get:function(){return 7}}).a}))},799:(e,t,n)=>{var o=n(2894);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==o(e)?e.split(""):Object(e)}},1421:(e,t,n)=>{var o=n(2894);e.exports=Array.isArray||function(e){return"Array"==o(e)}},6727:e=>{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},6227:e=>{e.exports=!0},8082:(e,t,n)=>{var o=n(9666),r=n(6162),i=n(8195),s=n(6274),a=n(6530),l=n(799),c=Object.assign;e.exports=!c||n(7929)((function(){var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach((function(e){t[e]=e})),7!=c({},e)[n]||Object.keys(c({},t)).join("")!=o}))?function(e,t){for(var n=a(e),c=arguments.length,d=1,u=i.f,h=s.f;c>d;)for(var p,f=l(arguments[d++]),m=u?r(f).concat(u(f)):r(f),g=m.length,b=0;g>b;)p=m[b++],o&&!h.call(f,p)||(n[p]=f[p]);return n}:c},526:(e,t,n)=>{var o=n(2159),r=n(7856),i=n(3338),s=n(8989)("IE_PROTO"),a=function(){},l="prototype",c=function(){var e,t=n(7467)("iframe"),o=i.length;for(t.style.display="none",n(4881).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),c=e.F;o--;)delete c[l][i[o]];return c()};e.exports=Object.create||function(e,t){var n;return null!==e?(a[l]=o(e),n=new a,a[l]=null,n[s]=e):n=c(),void 0===t?n:r(n,t)}},4743:(e,t,n)=>{var o=n(2159),r=n(3758),i=n(3206),s=Object.defineProperty;t.f=n(9666)?Object.defineProperty:function(e,t,n){if(o(e),t=i(t,!0),o(n),r)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},7856:(e,t,n)=>{var o=n(4743),r=n(2159),i=n(6162);e.exports=n(9666)?Object.defineProperties:function(e,t){r(e);for(var n,s=i(t),a=s.length,l=0;a>l;)o.f(e,n=s[l++],t[n]);return e}},6183:(e,t,n)=>{var o=n(6274),r=n(3101),i=n(7932),s=n(3206),a=n(7069),l=n(3758),c=Object.getOwnPropertyDescriptor;t.f=n(9666)?c:function(e,t){if(e=i(e),t=s(t,!0),l)try{return c(e,t)}catch(e){}if(a(e,t))return r(!o.f.call(e,t),e[t])}},8195:(e,t)=>{t.f=Object.getOwnPropertySymbols},2963:(e,t,n)=>{var o=n(7069),r=n(7932),i=n(7428)(!1),s=n(8989)("IE_PROTO");e.exports=function(e,t){var n,a=r(e),l=0,c=[];for(n in a)n!=s&&o(a,n)&&c.push(n);for(;t.length>l;)o(a,n=t[l++])&&(~i(c,n)||c.push(n));return c}},6162:(e,t,n)=>{var o=n(2963),r=n(3338);e.exports=Object.keys||function(e){return o(e,r)}},6274:(e,t)=>{t.f={}.propertyIsEnumerable},2584:(e,t,n)=>{var o=n(3856),r=n(4579),i=n(7929);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],s={};s[e]=t(n),o(o.S+o.F*i((function(){n(1)})),"Object",s)}},2050:(e,t,n)=>{var o=n(9666),r=n(6162),i=n(7932),s=n(6274).f;e.exports=function(e){return function(t){for(var n,a=i(t),l=r(a),c=l.length,d=0,u=[];c>d;)n=l[d++],o&&!s.call(a,n)||u.push(e?[n,a[n]]:a[n]);return u}}},3101:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},2906:(e,t,n)=>{var o=n(6727),r=n(2159),i=function(e,t){if(r(e),!o(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,o){try{(o=n(9216)(Function.call,n(6183).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:o(e,n),e}}({},!1):void 0),check:i}},8989:(e,t,n)=>{var o=n(250)("keys"),r=n(5730);e.exports=function(e){return o[e]||(o[e]=r(e))}},250:(e,t,n)=>{var o=n(4579),r=n(3938),i="__core-js_shared__",s=r[i]||(r[i]={});(e.exports=function(e,t){return s[e]||(s[e]=void 0!==t?t:{})})("versions",[]).push({version:o.version,mode:n(6227)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},6531:(e,t,n)=>{var o=n(1052),r=Math.max,i=Math.min;e.exports=function(e,t){return(e=o(e))<0?r(e+t,0):i(e,t)}},1052:e=>{var t=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:t)(e)}},7932:(e,t,n)=>{var o=n(799),r=n(8333);e.exports=function(e){return o(r(e))}},8728:(e,t,n)=>{var o=n(1052),r=Math.min;e.exports=function(e){return e>0?r(o(e),9007199254740991):0}},6530:(e,t,n)=>{var o=n(8333);e.exports=function(e){return Object(o(e))}},3206:(e,t,n)=>{var o=n(6727);e.exports=function(e,t){if(!o(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!o(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},5730:e=>{var t=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+n).toString(36))}},8691:(e,t,n)=>{var o=n(3856);o(o.S,"Array",{isArray:n(1421)})},2699:(e,t,n)=>{var o=n(3856);o(o.S+o.F,"Object",{assign:n(8082)})},6760:(e,t,n)=>{var o=n(3856);o(o.S,"Object",{create:n(526)})},961:(e,t,n)=>{var o=n(6530),r=n(6162);n(2584)("keys",(function(){return function(e){return r(o(e))}}))},9349:(e,t,n)=>{var o=n(3856);o(o.S,"Object",{setPrototypeOf:n(2906).set})},520:(e,t,n)=>{var o=n(3856),r=n(2050)(!0);o(o.S,"Object",{entries:function(e){return r(e)}})},1808:(e,t,n)=>{var o=n(9638),r=n(4874),i=n.g.document,s=function(e,t,n,o){return e.addEventListener(t,n,o)},a=function(e,t,n,o){return e.removeEventListener(t,n,o)},l=[];function c(e,t,n){var o=function(e,t,n){var o,r;for(o=0;o<l.length;o++)if((r=l[o]).element===e&&r.type===t&&r.fn===n)return o}(e,t,n);if(o){var r=l[o].wrapper;return l.splice(o,1),r}}n.g.addEventListener||(s=function(e,t,o){return e.attachEvent("on"+t,function(e,t,o){var r=c(e,t,o)||function(e,t,o){return function(t){var r=t||n.g.event;r.target=r.target||r.srcElement,r.preventDefault=r.preventDefault||function(){r.returnValue=!1},r.stopPropagation=r.stopPropagation||function(){r.cancelBubble=!0},r.which=r.which||r.keyCode,o.call(e,r)}}(e,0,o);return l.push({wrapper:r,element:e,type:t,fn:o}),r}(e,t,o))},a=function(e,t,n){var o=c(e,t,n);if(o)return e.detachEvent("on"+t,o)}),e.exports={add:s,remove:a,fabricate:function(e,t,n){var s=-1===r.indexOf(t)?new o(t,{detail:n}):function(){var e;return i.createEvent?(e=i.createEvent("Event")).initEvent(t,!0,!0):i.createEventObject&&(e=i.createEventObject()),e}();e.dispatchEvent?e.dispatchEvent(s):e.fireEvent("on"+t,s)}}},4874:(e,t,n)=>{var o=[],r="",i=/^on/;for(r in n.g)i.test(r)&&o.push(r.slice(2));e.exports=o},9638:(e,t,n)=>{var o=n.g.CustomEvent;e.exports=function(){try{var e=new o("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?o:"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}},3249:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=void 0;var r=function(){};o(n(139)).default&&(r=document.addEventListener?function(e,t,n,o){return e.removeEventListener(t,n,o||!1)}:document.attachEvent?function(e,t,n){return e.detachEvent("on"+t,n)}:void 0);var i=r;t.default=i,e.exports=t.default},1416:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=void 0;var r=function(){};o(n(139)).default&&(r=document.addEventListener?function(e,t,n,o){return e.addEventListener(t,n,o||!1)}:document.attachEvent?function(e,t,n){return e.attachEvent("on"+t,(function(t){(t=t||window.event).target=t.target||t.srcElement,t.currentTarget=e,n.call(e,t)}))}:void 0);var i=r;t.default=i,e.exports=t.default},9981:(e,t)=>{t.__esModule=!0,t.default=function(e){return e&&e.ownerDocument||document},e.exports=t.default},1629:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=void 0;var r=o(n(139)).default?function(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):i(e,t)}:i;function i(e,t){if(t)do{if(t===e)return!0}while(t=t.parentNode);return!1}t.default=r,e.exports=t.default},7624:(e,t)=>{t.__esModule=!0,t.default=function(e){return e===e.window?e:9===e.nodeType&&(e.defaultView||e.parentWindow)},e.exports=t.default},2565:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e){var t=(0,s.default)(e),n=(0,i.default)(t),o=t&&t.documentElement,a={top:0,left:0,height:0,width:0};if(t)return(0,r.default)(o,e)?(void 0!==e.getBoundingClientRect&&(a=e.getBoundingClientRect()),{top:a.top+(n.pageYOffset||o.scrollTop)-(o.clientTop||0),left:a.left+(n.pageXOffset||o.scrollLeft)-(o.clientLeft||0),width:(null==a.width?e.offsetWidth:a.width)||0,height:(null==a.height?e.offsetHeight:a.height)||0}):a};var r=o(n(1629)),i=o(n(7624)),s=o(n(9981));e.exports=t.default},2939:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e){for(var t=(0,r.default)(e),n=e&&e.offsetParent;n&&"html"!==s(e)&&"static"===(0,i.default)(n,"position");)n=n.offsetParent;return n||t.documentElement};var r=o(n(9981)),i=o(n(162));function s(e){return e.nodeName&&e.nodeName.toLowerCase()}e.exports=t.default},7265:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e,t){var n,o={top:0,left:0};return"fixed"===(0,c.default)(e,"position")?n=e.getBoundingClientRect():(t=t||(0,s.default)(e),n=(0,i.default)(e),"html"!==function(e){return e.nodeName&&e.nodeName.toLowerCase()}(t)&&(o=(0,i.default)(t)),o.top+=parseInt((0,c.default)(t,"borderTopWidth"),10)-(0,a.default)(t)||0,o.left+=parseInt((0,c.default)(t,"borderLeftWidth"),10)-(0,l.default)(t)||0),(0,r.default)({},n,{top:n.top-o.top-(parseInt((0,c.default)(e,"marginTop"),10)||0),left:n.left-o.left-(parseInt((0,c.default)(e,"marginLeft"),10)||0)})};var r=o(n(434)),i=o(n(2565)),s=o(n(2939)),a=o(n(504)),l=o(n(5770)),c=o(n(162));e.exports=t.default},5770:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e,t){var n=(0,r.default)(e);if(void 0===t)return n?"pageXOffset"in n?n.pageXOffset:n.document.documentElement.scrollLeft:e.scrollLeft;n?n.scrollTo(t,"pageYOffset"in n?n.pageYOffset:n.document.documentElement.scrollTop):e.scrollLeft=t};var r=o(n(7624));e.exports=t.default},504:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e,t){var n=(0,r.default)(e);if(void 0===t)return n?"pageYOffset"in n?n.pageYOffset:n.document.documentElement.scrollTop:e.scrollTop;n?n.scrollTo("pageXOffset"in n?n.pageXOffset:n.document.documentElement.scrollLeft,t):e.scrollTop=t};var r=o(n(7624));e.exports=t.default},7023:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e){if(!e)throw new TypeError("No Element passed to `getComputedStyle()`");var t=e.ownerDocument;return"defaultView"in t?t.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):window.getComputedStyle(e,null):{getPropertyValue:function(t){var n=e.style;"float"==(t=(0,r.default)(t))&&(t="styleFloat");var o=e.currentStyle[t]||null;if(null==o&&n&&n[t]&&(o=n[t]),s.test(o)&&!i.test(t)){var a=n.left,l=e.runtimeStyle,c=l&&l.left;c&&(l.left=e.currentStyle.left),n.left="fontSize"===t?"1em":o,o=n.pixelLeft+"px",n.left=a,c&&(l.left=c)}return o}}};var r=o(n(3497)),i=/^(top|right|bottom|left)$/,s=/^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;e.exports=t.default},162:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e,t,n){var o="",d="",u=t;if("string"==typeof t){if(void 0===n)return e.style[(0,r.default)(t)]||(0,s.default)(e).getPropertyValue((0,i.default)(t));(u={})[t]=n}Object.keys(u).forEach((function(t){var n=u[t];n||0===n?(0,c.default)(t)?d+=t+"("+n+") ":o+=(0,i.default)(t)+": "+n+";":(0,a.default)(e,(0,i.default)(t))})),d&&(o+=l.transform+": "+d+";"),e.style.cssText+=";"+o};var r=o(n(3497)),i=o(n(4403)),s=o(n(7023)),a=o(n(1760)),l=n(702),c=o(n(3293));e.exports=t.default},1760:(e,t)=>{t.__esModule=!0,t.default=function(e,t){return"removeProperty"in e.style?e.style.removeProperty(t):e.style.removeAttribute(t)},e.exports=t.default},3293:(e,t)=>{t.__esModule=!0,t.default=function(e){return!(!e||!n.test(e))};var n=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;e.exports=t.default},702:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var r,i,s,a,l,c,d,u,h,p,f,m=o(n(139)),g="transform";if(t.transform=g,t.animationEnd=s,t.transitionEnd=i,t.transitionDelay=d,t.transitionTiming=c,t.transitionDuration=l,t.transitionProperty=a,t.animationDelay=f,t.animationTiming=p,t.animationDuration=h,t.animationName=u,m.default){var b=function(){for(var e,t,n=document.createElement("div").style,o={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},r=Object.keys(o),i="",s=0;s<r.length;s++){var a=r[s];if(a+"TransitionProperty"in n){i="-"+a.toLowerCase(),e=o[a]("TransitionEnd"),t=o[a]("AnimationEnd");break}}return!e&&"transitionProperty"in n&&(e="transitionend"),!t&&"animationName"in n&&(t="animationend"),n=null,{animationEnd:t,transitionEnd:e,prefix:i}}();r=b.prefix,t.transitionEnd=i=b.transitionEnd,t.animationEnd=s=b.animationEnd,t.transform=g=r+"-"+g,t.transitionProperty=a=r+"-transition-property",t.transitionDuration=l=r+"-transition-duration",t.transitionDelay=d=r+"-transition-delay",t.transitionTiming=c=r+"-transition-timing-function",t.animationName=u=r+"-animation-name",t.animationDuration=h=r+"-animation-duration",t.animationTiming=p=r+"-animation-delay",t.animationDelay=f=r+"-animation-timing-function"}var v={transform:g,end:i,property:a,timing:c,delay:d,duration:l};t.default=v},1908:(e,t)=>{t.__esModule=!0,t.default=function(e){return e.replace(n,(function(e,t){return t.toUpperCase()}))};var n=/-(.)/g;e.exports=t.default},3497:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e){return(0,r.default)(e.replace(i,"ms-"))};var r=o(n(1908)),i=/^-ms-/;e.exports=t.default},1185:(e,t)=>{t.__esModule=!0,t.default=function(e){return e.replace(n,"-$1").toLowerCase()};var n=/([A-Z])/g;e.exports=t.default},4403:(e,t,n)=>{var o=n(4836);t.__esModule=!0,t.default=function(e){return(0,r.default)(e).replace(i,"-ms-")};var r=o(n(1185)),i=/^ms-/;e.exports=t.default},139:(e,t)=>{t.__esModule=!0,t.default=void 0;var n=!("undefined"==typeof window||!window.document||!window.document.createElement);t.default=n,e.exports=t.default},9425:e=>{var t={},n="(?:^|\\s)",o="(?:\\s|$)";function r(e){var r=t[e];return r?r.lastIndex=0:t[e]=r=new RegExp(n+e+o,"g"),r}e.exports={add:function(e,t){var n=e.className;n.length?r(t).test(n)||(e.className+=" "+t):e.className=t},rm:function(e,t){e.className=e.className.replace(r(t)," ").trim()}}},7137:(e,t,n)=>{var o=n(5229),r=n(1808),i=n(9425),s=document,a=s.documentElement;function l(e,t,o,i){n.g.navigator.pointerEnabled?r[t](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[o],i):n.g.navigator.msPointerEnabled?r[t](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[o],i):(r[t](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[o],i),r[t](e,o,i))}function c(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;return void 0!==t?1&t?1:2&t?3:4&t?2:0:void 0}function d(e,t){return void 0!==n.g[t]?n.g[t]:a.clientHeight?a[e]:s.body[e]}function u(e,t,n){var o,r=e||{},i=r.className;return r.className+=" gu-hide",o=s.elementFromPoint(t,n),r.className=i,o}function h(){return!1}function p(){return!0}function f(e){return e.width||e.right-e.left}function m(e){return e.height||e.bottom-e.top}function g(e){return e.parentNode===s?null:e.parentNode}function b(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||v(e)}function v(e){return!!e&&"false"!==e.contentEditable&&("true"===e.contentEditable||v(g(e)))}function y(e){return e.nextElementSibling||function(){var t=e;do{t=t.nextSibling}while(t&&1!==t.nodeType);return t}()}function w(e,t){var n=function(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}(t),o={pageX:"clientX",pageY:"clientY"};return e in o&&!(e in n)&&o[e]in n&&(e=o[e]),n[e]}e.exports=function(e,t){var n,v,x,C,S,k,T,R,_,E,O;1===arguments.length&&!1===Array.isArray(e)&&(t=e,e=[]);var I,M=null,P=t||{};void 0===P.moves&&(P.moves=p),void 0===P.accepts&&(P.accepts=p),void 0===P.invalid&&(P.invalid=function(){return!1}),void 0===P.containers&&(P.containers=e||[]),void 0===P.isContainer&&(P.isContainer=h),void 0===P.copy&&(P.copy=!1),void 0===P.copySortSource&&(P.copySortSource=!1),void 0===P.revertOnSpill&&(P.revertOnSpill=!1),void 0===P.removeOnSpill&&(P.removeOnSpill=!1),void 0===P.direction&&(P.direction="vertical"),void 0===P.ignoreInputTextSelection&&(P.ignoreInputTextSelection=!0),void 0===P.mirrorContainer&&(P.mirrorContainer=s.body);var z=o({containers:P.containers,start:function(e){var t=F(e);t&&G(t)},end:W,cancel:q,remove:Z,destroy:function(){A(!0),U({})},canMove:function(e){return!!F(e)},dragging:!1});return!0===P.removeOnSpill&&z.on("over",(function(e){i.rm(e,"gu-hide")})).on("out",(function(e){z.dragging&&i.add(e,"gu-hide")})),A(),z;function $(e){return-1!==z.containers.indexOf(e)||P.isContainer(e)}function A(e){var t=e?"remove":"add";l(a,t,"mousedown",H),l(a,t,"mouseup",U)}function D(e){l(a,e?"remove":"add","mousemove",B)}function N(e){var t=e?"remove":"add";r[t](a,"selectstart",L),r[t](a,"click",L)}function L(e){I&&e.preventDefault()}function H(e){if(k=e.clientX,T=e.clientY,1===c(e)&&!e.metaKey&&!e.ctrlKey){var t=e.target,n=F(t);n&&(I=n,D(),"mousedown"===e.type&&(b(t)?t.focus():e.preventDefault()))}}function B(e){if(I)if(0!==c(e)){if(void 0===e.clientX||e.clientX!==k||void 0===e.clientY||e.clientY!==T){if(P.ignoreInputTextSelection){var t=w("clientX",e),o=w("clientY",e);if(b(s.elementFromPoint(t,o)))return}var r=I;D(!0),N(),W(),G(r);var u,h={left:(u=x.getBoundingClientRect()).left+d("scrollLeft","pageXOffset"),top:u.top+d("scrollTop","pageYOffset")};C=w("pageX",e)-h.left,S=w("pageY",e)-h.top,i.add(E||x,"gu-transit"),function(){if(!n){var e=x.getBoundingClientRect();(n=x.cloneNode(!0)).style.width=f(e)+"px",n.style.height=m(e)+"px",i.rm(n,"gu-transit"),i.add(n,"gu-mirror"),P.mirrorContainer.appendChild(n),l(a,"add","mousemove",Q),i.add(P.mirrorContainer,"gu-unselectable"),z.emit("cloned",n,x,"mirror")}}(),Q(e)}}else U({})}function F(e){if(!(z.dragging&&n||$(e))){for(var t=e;g(e)&&!1===$(g(e));){if(P.invalid(e,t))return;if(!(e=g(e)))return}var o=g(e);if(o&&!P.invalid(e,t)&&P.moves(e,o,t,y(e)))return{item:e,source:o}}}function G(e){var t,n;t=e.item,n=e.source,("boolean"==typeof P.copy?P.copy:P.copy(t,n))&&(E=e.item.cloneNode(!0),z.emit("cloned",E,e.item,"copy")),v=e.source,x=e.item,R=_=y(e.item),z.dragging=!0,z.emit("drag",x,v)}function W(){if(z.dragging){var e=E||x;V(e,g(e))}}function j(){I=!1,D(!0),N(!0)}function U(e){if(j(),z.dragging){var t=E||x,o=w("clientX",e),r=w("clientY",e),i=X(u(n,o,r),o,r);i&&(E&&P.copySortSource||!E||i!==v)?V(t,i):P.removeOnSpill?Z():q()}}function V(e,t){var n=g(e);E&&P.copySortSource&&t===v&&n.removeChild(x),Y(t)?z.emit("cancel",e,v,v):z.emit("drop",e,t,v,_),K()}function Z(){if(z.dragging){var e=E||x,t=g(e);t&&t.removeChild(e),z.emit(E?"cancel":"remove",e,t,v),K()}}function q(e){if(z.dragging){var t=arguments.length>0?e:P.revertOnSpill,n=E||x,o=g(n),r=Y(o);!1===r&&t&&(E?o&&o.removeChild(E):v.insertBefore(n,R)),r||t?z.emit("cancel",n,v,v):z.emit("drop",n,o,v,_),K()}}function K(){var e=E||x;j(),n&&(i.rm(P.mirrorContainer,"gu-unselectable"),l(a,"remove","mousemove",Q),g(n).removeChild(n),n=null),e&&i.rm(e,"gu-transit"),O&&clearTimeout(O),z.dragging=!1,M&&z.emit("out",e,M,v),z.emit("dragend",e),v=x=E=R=_=O=M=null}function Y(e,t){var o;return o=void 0!==t?t:n?_:y(E||x),e===v&&o===R}function X(e,t,n){for(var o=e;o&&!r();)o=g(o);return o;function r(){if(!1===$(o))return!1;var r=J(o,e),i=ee(o,r,t,n);return!!Y(o,i)||P.accepts(x,o,v,i)}}function Q(e){if(n){e.preventDefault();var t=w("clientX",e),o=w("clientY",e),r=t-C,i=o-S;n.style.left=r+"px",n.style.top=i+"px";var s=E||x,a=u(n,t,o),l=X(a,t,o),c=null!==l&&l!==M;(c||null===l)&&(M&&f("out"),M=l,c&&f("over"));var d=g(s);if(l!==v||!E||P.copySortSource){var h,p=J(l,a);if(null!==p)h=ee(l,p,t,o);else{if(!0!==P.revertOnSpill||E)return void(E&&d&&d.removeChild(s));h=R,l=v}(null===h&&c||h!==s&&h!==y(s))&&(_=h,l.insertBefore(s,h),z.emit("shadow",s,l,v))}else d&&d.removeChild(s)}function f(e){z.emit(e,s,M,v)}}function J(e,t){for(var n=t;n!==e&&g(n)!==e;)n=g(n);return n===a?null:n}function ee(e,t,n,o){var r="horizontal"===P.direction,i=t!==e?function(){var e=t.getBoundingClientRect();return s(r?n>e.left+f(e)/2:o>e.top+m(e)/2)}():function(){var t,i,s,a=e.children.length;for(t=0;t<a;t++){if(s=(i=e.children[t]).getBoundingClientRect(),r&&s.left+s.width/2>n)return i;if(!r&&s.top+s.height/2>o)return i}return null}();return i;function s(e){return e?y(t):t}}}},3316:e=>{function t(e,t,n,o){var r,i=null==(r=o)||"number"==typeof r||"boolean"==typeof r?o:n(o),s=t.get(i);return void 0===s&&(s=e.call(this,o),t.set(i,s)),s}function n(e,t,n){var o=Array.prototype.slice.call(arguments,3),r=n(o),i=t.get(r);return void 0===i&&(i=e.apply(this,o),t.set(r,i)),i}function o(e,t,n,o,r){return n.bind(t,e,o,r)}function r(e,r){return o(e,this,1===e.length?t:n,r.cache.create(),r.serializer)}function i(){return JSON.stringify(arguments)}function s(){this.cache=Object.create(null)}s.prototype.has=function(e){return e in this.cache},s.prototype.get=function(e){return this.cache[e]},s.prototype.set=function(e,t){this.cache[e]=t};var a={create:function(){return new s}};e.exports=function(e,t){var n=t&&t.cache?t.cache:a,o=t&&t.serializer?t.serializer:i;return(t&&t.strategy?t.strategy:r)(e,{cache:n,serializer:o})},e.exports.strategies={variadic:function(e,t){return o(e,this,n,t.cache.create(),t.serializer)},monadic:function(e,n){return o(e,this,t,n.cache.create(),n.serializer)}}},1143:e=>{e.exports=function(e,t,n,o,r,i,s,a){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,r,i,s,a],d=0;(l=new Error(t.replace(/%s/g,(function(){return c[d++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},7418:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var i,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))n.call(i,c)&&(a[c]=i[c]);if(t){s=t(i);for(var d=0;d<s.length;d++)o.call(i,s[d])&&(a[s[d]]=i[s[d]])}}return a}},621:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=s(n(6689)),i=s(n(2613));function s(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.default)((function(e,t,n,i,s){var a=e[t],l=void 0===a?"undefined":o(a);return r.default.isValidElement(a)?new Error("Invalid "+i+" `"+s+"` of type ReactElement supplied to `"+n+"`, expected a ReactComponent or a DOMElement. You can usually obtain a ReactComponent or DOMElement from a ReactElement by attaching a ref to it."):"object"===l&&"function"==typeof a.render||1===a.nodeType?null:new Error("Invalid "+i+" `"+s+"` of value `"+a+"` supplied to `"+n+"`, expected a ReactComponent or a DOMElement.")})),e.exports=t.default},8853:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=s(n(6689)),r=n(9864),i=s(n(2613));function s(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.default)((function(e,t,n,i,s){var a=e[t];return o.default.isValidElement(a)?new Error("Invalid "+i+" `"+s+"` of type ReactElement supplied to `"+n+"`,expected an element type (a string , component class, or function component)."):(0,r.isValidElementType)(a)?null:new Error("Invalid "+i+" `"+s+"` of value `"+a+"` supplied to `"+n+"`, expected an element type (a string , component class, or function component).")})),e.exports=t.default},5638:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n,o,r,i){var s=o||"<<anonymous>>",a=i||n;if(null==t[n])return new Error("The "+r+" `"+a+"` is required to make `"+s+"` accessible for users of assistive technologies such as screen readers.");for(var l=arguments.length,c=Array(l>5?l-5:0),d=5;d<l;d++)c[d-5]=arguments[d];return e.apply(void 0,[t,n,o,r,i].concat(c))}},e.exports=t.default},2613:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,o,r,i,s){var a=r||"<<anonymous>>",l=s||o;if(null==n[o])return t?new Error("Required "+i+" `"+l+"` was not specified in `"+a+"`."):null;for(var c=arguments.length,d=Array(c>6?c-6:0),u=6;u<c;u++)d[u-6]=arguments[u];return e.apply(void 0,[n,o,a,i,l].concat(d))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},2703:(e,t,n)=>{var o=n(414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,s){if(s!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},5697:(e,t,n)=>{e.exports=n(2703)()},414:e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},977:(e,t,n)=>{var o=n(7137),r=n(2989);e.exports=function(){return o.apply(this,r(arguments)).on("cloned",(function(t){e(t),r(t.getElementsByTagName("*")).forEach(e)}));function e(e){e.removeAttribute("data-reactid")}}},9590:e=>{var t="undefined"!=typeof Element,n="function"==typeof Map,o="function"==typeof Set,r="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,s){if(e===s)return!0;if(e&&s&&"object"==typeof e&&"object"==typeof s){if(e.constructor!==s.constructor)return!1;var a,l,c,d;if(Array.isArray(e)){if((a=e.length)!=s.length)return!1;for(l=a;0!=l--;)if(!i(e[l],s[l]))return!1;return!0}if(n&&e instanceof Map&&s instanceof Map){if(e.size!==s.size)return!1;for(d=e.entries();!(l=d.next()).done;)if(!s.has(l.value[0]))return!1;for(d=e.entries();!(l=d.next()).done;)if(!i(l.value[1],s.get(l.value[0])))return!1;return!0}if(o&&e instanceof Set&&s instanceof Set){if(e.size!==s.size)return!1;for(d=e.entries();!(l=d.next()).done;)if(!s.has(l.value[0]))return!1;return!0}if(r&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(s)){if((a=e.length)!=s.length)return!1;for(l=a;0!=l--;)if(e[l]!==s[l])return!1;return!0}if(e.constructor===RegExp)return e.source===s.source&&e.flags===s.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===s.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===s.toString();if((a=(c=Object.keys(e)).length)!==Object.keys(s).length)return!1;for(l=a;0!=l--;)if(!Object.prototype.hasOwnProperty.call(s,c[l]))return!1;if(t&&e instanceof Element)return!1;for(l=a;0!=l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!e.$$typeof)&&!i(e[c[l]],s[c[l]]))return!1;return!0}return e!=e&&s!=s}e.exports=function(e,t){try{return i(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return!1;throw e}}},9921:(e,t)=>{var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,r=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.async_mode"):60111,u=n?Symbol.for("react.concurrent_mode"):60111,h=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,f=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,y=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case d:case u:case i:case a:case s:case p:return e;default:switch(e=e&&e.$$typeof){case c:case h:case g:case m:case l:return e;default:return t}}case r:return t}}}function C(e){return x(e)===u}t.AsyncMode=d,t.ConcurrentMode=u,t.ContextConsumer=c,t.ContextProvider=l,t.Element=o,t.ForwardRef=h,t.Fragment=i,t.Lazy=g,t.Memo=m,t.Portal=r,t.Profiler=a,t.StrictMode=s,t.Suspense=p,t.isAsyncMode=function(e){return C(e)||x(e)===d},t.isConcurrentMode=C,t.isContextConsumer=function(e){return x(e)===c},t.isContextProvider=function(e){return x(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return x(e)===h},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===g},t.isMemo=function(e){return x(e)===m},t.isPortal=function(e){return x(e)===r},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===s},t.isSuspense=function(e){return x(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===u||e===a||e===s||e===p||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===l||e.$$typeof===c||e.$$typeof===h||e.$$typeof===v||e.$$typeof===y||e.$$typeof===w||e.$$typeof===b)},t.typeOf=x},9864:(e,t,n)=>{e.exports=n(9921)},6871:(e,t,n)=>{function o(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function r(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function i(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function s(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,s=null,a=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?s="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(s="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?a="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(a="UNSAFE_componentWillUpdate"),null!==n||null!==s||null!==a){var l=e.displayName||e.name,c="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==s?"\n  "+s:"")+(null!==a?"\n  "+a:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=o,t.componentWillReceiveProps=r),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=i;var d=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;d.call(this,e,t,o)}}return e}n.r(t),n.d(t,{polyfill:()=>s}),o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},7281:(e,t,n)=>{t.__esModule=!0;var o=c(n(5697)),r=c(n(621)),i=c(n(6689)),s=c(n(6405)),a=c(n(3464)),l=c(n(290));function c(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function t(){var n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,c=Array(r),u=0;u<r;u++)c[u]=arguments[u];return n=o=d(this,e.call.apply(e,[this].concat(c))),o._mountOverlayTarget=function(){o._overlayTarget||(o._overlayTarget=document.createElement("div"),o._portalContainerNode=(0,a.default)(o.props.container,(0,l.default)(o).body),o._portalContainerNode.appendChild(o._overlayTarget))},o._unmountOverlayTarget=function(){o._overlayTarget&&(o._portalContainerNode.removeChild(o._overlayTarget),o._overlayTarget=null),o._portalContainerNode=null},o._renderOverlay=function(){var e=o.props.children?i.default.Children.only(o.props.children):null;if(null!==e){o._mountOverlayTarget();var t=!o._overlayInstance;o._overlayInstance=s.default.unstable_renderSubtreeIntoContainer(o,e,o._overlayTarget,(function(){t&&o.props.onRendered&&o.props.onRendered()}))}else o._unrenderOverlay(),o._unmountOverlayTarget()},o._unrenderOverlay=function(){o._overlayTarget&&(s.default.unmountComponentAtNode(o._overlayTarget),o._overlayInstance=null)},o.getMountNode=function(){return o._overlayTarget},d(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._isMounted=!0,this._renderOverlay()},t.prototype.componentDidUpdate=function(){this._renderOverlay()},t.prototype.componentWillReceiveProps=function(e){this._overlayTarget&&e.container!==this.props.container&&(this._portalContainerNode.removeChild(this._overlayTarget),this._portalContainerNode=(0,a.default)(e.container,(0,l.default)(this).body),this._portalContainerNode.appendChild(this._overlayTarget))},t.prototype.componentWillUnmount=function(){this._isMounted=!1,this._unrenderOverlay(),this._unmountOverlayTarget()},t.prototype.render=function(){return null},t}(i.default.Component);u.displayName="Portal",u.propTypes={container:o.default.oneOfType([r.default,o.default.func]),onRendered:o.default.func},t.default=u,e.exports=t.default},2856:(e,t,n)=>{t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=d(n(5697)),i=d(n(8853)),s=d(n(6689)),a=d(n(5425)),l=d(n(7487)),c=d(n(2395));function d(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n,o));return r.handleHidden=function(){var e;r.setState({exited:!0}),r.props.onExited&&(e=r.props).onExited.apply(e,arguments)},r.state={exited:!n.show},r.onHiddenListener=r.handleHidden.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillReceiveProps=function(e){e.show?this.setState({exited:!1}):e.transition||this.setState({exited:!0})},t.prototype.render=function(){var e=this.props,t=e.container,n=e.containerPadding,o=e.target,r=e.placement,i=e.shouldUpdatePosition,d=e.rootClose,u=e.children,h=e.transition,p=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["container","containerPadding","target","placement","shouldUpdatePosition","rootClose","children","transition"]);if(!(p.show||h&&!this.state.exited))return null;var f=u;if(f=s.default.createElement(l.default,{container:t,containerPadding:n,target:o,placement:r,shouldUpdatePosition:i},f),h){var m=p.onExit,g=p.onExiting,b=p.onEnter,v=p.onEntering,y=p.onEntered;f=s.default.createElement(h,{in:p.show,appear:!0,onExit:m,onExiting:g,onExited:this.onHiddenListener,onEnter:b,onEntering:v,onEntered:y},f)}return d&&(f=s.default.createElement(c.default,{onRootClose:p.onHide},f)),s.default.createElement(a.default,{container:t},f)},t}(s.default.Component);u.propTypes=o({},a.default.propTypes,l.default.propTypes,{show:r.default.bool,rootClose:r.default.bool,onHide:function(e){var t=r.default.func;e.rootClose&&(t=t.isRequired);for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return t.apply(void 0,[e].concat(o))},transition:i.default,onEnter:r.default.func,onEntering:r.default.func,onEntered:r.default.func,onExit:r.default.func,onExiting:r.default.func,onExited:r.default.func}),t.default=u,e.exports=t.default},5425:(e,t,n)=>{t.__esModule=!0;var o=d(n(5697)),r=d(n(621)),i=d(n(6689)),s=d(n(6405)),a=d(n(3464)),l=d(n(290)),c=d(n(7281));function d(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(e){function t(){var n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return n=o=u(this,e.call.apply(e,[this].concat(i))),o.setContainer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.props;o._portalContainerNode=(0,a.default)(e.container,(0,l.default)(o).body)},o.getMountNode=function(){return o._portalContainerNode},u(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.setContainer(),this.forceUpdate(this.props.onRendered)},t.prototype.componentWillReceiveProps=function(e){e.container!==this.props.container&&this.setContainer(e)},t.prototype.componentWillUnmount=function(){this._portalContainerNode=null},t.prototype.render=function(){return this.props.children&&this._portalContainerNode?s.default.createPortal(this.props.children,this._portalContainerNode):null},t}(i.default.Component);h.displayName="Portal",h.propTypes={container:o.default.oneOfType([r.default,o.default.func]),onRendered:o.default.func},t.default=s.default.createPortal?h:c.default,e.exports=t.default},7487:(e,t,n)=>{t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=p(n(4184)),i=p(n(5697)),s=p(n(621)),a=n(6689),l=p(a),c=p(n(6405)),d=p(n(7603)),u=p(n(3464)),h=p(n(290));function p(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}var m=function(e){function t(n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n,o));return r.getTarget=function(){var e=r.props.target,t="function"==typeof e?e():e;return t&&c.default.findDOMNode(t)||null},r.maybeUpdatePosition=function(e){var t=r.getTarget();(r.props.shouldUpdatePosition||t!==r._lastTarget||e)&&r.updatePosition(t)},r.state={positionLeft:0,positionTop:0,arrowOffsetLeft:null,arrowOffsetTop:null},r._needsFlush=!1,r._lastTarget=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.updatePosition(this.getTarget())},t.prototype.componentWillReceiveProps=function(){this._needsFlush=!0},t.prototype.componentDidUpdate=function(e){this._needsFlush&&(this._needsFlush=!1,this.maybeUpdatePosition(this.props.placement!==e.placement))},t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,i=f(e,["children","className"]),s=this.state,c=s.positionLeft,d=s.positionTop,u=f(s,["positionLeft","positionTop"]);delete i.target,delete i.container,delete i.containerPadding,delete i.shouldUpdatePosition;var h=l.default.Children.only(t);return(0,a.cloneElement)(h,o({},i,u,{positionLeft:c,positionTop:d,className:(0,r.default)(n,h.props.className),style:o({},h.props.style,{left:c,top:d})}))},t.prototype.updatePosition=function(e){if(this._lastTarget=e,e){var t=c.default.findDOMNode(this),n=(0,u.default)(this.props.container,(0,h.default)(this).body);this.setState((0,d.default)(this.props.placement,t,e,n,this.props.containerPadding))}else this.setState({positionLeft:0,positionTop:0,arrowOffsetLeft:null,arrowOffsetTop:null})},t}(l.default.Component);m.propTypes={target:i.default.oneOfType([s.default,i.default.func]),container:i.default.oneOfType([s.default,i.default.func]),containerPadding:i.default.number,placement:i.default.oneOf(["top","right","bottom","left"]),shouldUpdatePosition:i.default.bool},m.displayName="Position",m.defaultProps={containerPadding:0,placement:"right",shouldUpdatePosition:!1},t.default=m,e.exports=t.default},2395:(e,t,n)=>{t.__esModule=!0;var o=c(n(1629)),r=c(n(5697)),i=c(n(6689)),s=c(n(6405)),a=c(n(6616)),l=c(n(290));function c(e){return e&&e.__esModule?e:{default:e}}var d=27,u=function(e){function t(n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n,r));return i.addEventListeners=function(){var e=i.props.event,t=(0,l.default)(i);i.documentMouseCaptureListener=(0,a.default)(t,e,i.handleMouseCapture,!0),i.documentMouseListener=(0,a.default)(t,e,i.handleMouse),i.documentKeyupListener=(0,a.default)(t,"keyup",i.handleKeyUp)},i.removeEventListeners=function(){i.documentMouseCaptureListener&&i.documentMouseCaptureListener.remove(),i.documentMouseListener&&i.documentMouseListener.remove(),i.documentKeyupListener&&i.documentKeyupListener.remove()},i.handleMouseCapture=function(e){var t;i.preventMouseRootClose=!!((t=e).metaKey||t.altKey||t.ctrlKey||t.shiftKey)||!function(e){return 0===e.button}(e)||(0,o.default)(s.default.findDOMNode(i),e.target)},i.handleMouse=function(e){!i.preventMouseRootClose&&i.props.onRootClose&&i.props.onRootClose(e)},i.handleKeyUp=function(e){e.keyCode===d&&i.props.onRootClose&&i.props.onRootClose(e)},i.preventMouseRootClose=!1,i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.props.disabled||this.addEventListeners()},t.prototype.componentDidUpdate=function(e){!this.props.disabled&&e.disabled?this.addEventListeners():this.props.disabled&&!e.disabled&&this.removeEventListeners()},t.prototype.componentWillUnmount=function(){this.props.disabled||this.removeEventListeners()},t.prototype.render=function(){return this.props.children},t}(i.default.Component);u.displayName="RootCloseWrapper",u.propTypes={onRootClose:r.default.func,children:r.default.element,disabled:r.default.bool,event:r.default.oneOf(["click","mousedown"])},u.defaultProps={event:"click"},t.default=u,e.exports=t.default},6616:(e,t,n)=>{t.__esModule=!0,t.default=function(e,t,n,i){return(0,o.default)(e,t,n,i),{remove:function(){(0,r.default)(e,t,n,i)}}};var o=i(n(1416)),r=i(n(3249));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},7603:(e,t,n)=>{t.__esModule=!0,t.default=function(e,t,n,i,s){var a="BODY"===i.tagName?(0,o.default)(n):(0,r.default)(n,i),c=(0,o.default)(t),d=c.height,u=c.width,h=void 0,p=void 0,f=void 0,m=void 0;if("left"===e||"right"===e){p=a.top+(a.height-d)/2,h="left"===e?a.left-u:a.left+a.width;var g=function(e,t,n,o){var r=l(n),i=r.scroll,s=r.height,a=e-o-i,c=e+o-i+t;return a<0?-a:c>s?s-c:0}(p,d,i,s);p+=g,m=50*(1-2*g/d)+"%",f=void 0}else{if("top"!==e&&"bottom"!==e)throw new Error('calcOverlayPosition(): No such placement of "'+e+'" found.');h=a.left+(a.width-u)/2,p="top"===e?a.top-d:a.top+a.height;var b=function(e,t,n,o){var r=l(n).width,i=e-o,s=e+o+t;return i<0?-i:s>r?r-s:0}(h,u,i,s);h+=b,f=50*(1-2*b/u)+"%",m=void 0}return{positionLeft:h,positionTop:p,arrowOffsetLeft:f,arrowOffsetTop:m}};var o=a(n(2565)),r=a(n(7265)),i=a(n(504)),s=a(n(290));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=void 0,n=void 0,r=void 0;if("BODY"===e.tagName)t=window.innerWidth,n=window.innerHeight,r=(0,i.default)((0,s.default)(e).documentElement)||(0,i.default)(e);else{var a=(0,o.default)(e);t=a.width,n=a.height,r=(0,i.default)(e)}return{width:t,height:n,scroll:r}}e.exports=t.default},3464:(e,t,n)=>{t.__esModule=!0,t.default=function(e,t){return e="function"==typeof e?e():e,r.default.findDOMNode(e)||t};var o,r=(o=n(6405))&&o.__esModule?o:{default:o};e.exports=t.default},290:(e,t,n)=>{t.__esModule=!0,t.default=function(e){return(0,r.default)(o.default.findDOMNode(e))};var o=i(n(6405)),r=i(n(9981));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},3524:(e,t,n)=>{var o,r=n(6689),i=(o=r)&&"object"==typeof o&&"default"in o?o.default:o;function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(o){if("function"!=typeof o)throw new Error("Expected WrappedComponent to be a React component.");var l,c=[];function d(){l=e(c.map((function(e){return e.props}))),u.canUseDOM?t(l):n&&(l=n(l))}var u=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.peek=function(){return l},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,c=[],e};var s=r.prototype;return s.UNSAFE_componentWillMount=function(){c.push(this),d()},s.componentDidUpdate=function(){d()},s.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),d()},s.render=function(){return i.createElement(o,this.props)},r}(r.PureComponent);return s(u,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(o)+")"),s(u,"canUseDOM",a),u}}},644:(e,t,n)=>{t.ZP=t.cn=t.d0=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n(5697)),r=a(n(6689)),i=a(n(6405)),s=n(6871);function a(e){return e&&e.__esModule?e:{default:e}}n(4726);var l="unmounted",c="exited",d="entering";t.d0=d;var u="entered";t.cn=u;var h="exiting",p=function(e){var t,n;function o(t,n){var o;o=e.call(this,t,n)||this;var r,i=n.transitionGroup,s=i&&!i.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?s?(r=c,o.appearStatus=d):r=u:r=t.unmountOnExit||t.mountOnEnter?l:c,o.state={status:r},o.nextCallback=null,o}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=o.prototype;return s.getChildContext=function(){return{transitionGroup:null}},o.getDerivedStateFromProps=function(e,t){return e.in&&t.status===l?{status:c}:null},s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==d&&n!==u&&(t=d):n!==d&&n!==u||(t=h)}this.updateStatus(!1,t)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var e,t,n,o=this.props.timeout;return e=t=n=o,null!=o&&"number"!=typeof o&&(e=o.exit,t=o.enter,n=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:n}},s.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=i.default.findDOMNode(this);t===d?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===c&&this.setState({status:l})},s.performEnter=function(e,t){var n=this,o=this.props.enter,r=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,i=this.getTimeouts(),s=r?i.appear:i.enter;t||o?(this.props.onEnter(e,r),this.safeSetState({status:d},(function(){n.props.onEntering(e,r),n.onTransitionEnd(e,s,(function(){n.safeSetState({status:u},(function(){n.props.onEntered(e,r)}))}))}))):this.safeSetState({status:u},(function(){n.props.onEntered(e)}))},s.performExit=function(e){var t=this,n=this.props.exit,o=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:h},(function(){t.props.onExiting(e),t.onTransitionEnd(e,o.exit,(function(){t.safeSetState({status:c},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:c},(function(){t.props.onExited(e)}))},s.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},s.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},s.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var o=null==t&&!this.props.addEndListener;e&&!o?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},s.render=function(){var e=this.state.status;if(e===l)return null;var t=this.props,n=t.children,o=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(t,["children"]);if(delete o.in,delete o.mountOnEnter,delete o.unmountOnExit,delete o.appear,delete o.enter,delete o.exit,delete o.timeout,delete o.addEndListener,delete o.onEnter,delete o.onEntering,delete o.onEntered,delete o.onExit,delete o.onExiting,delete o.onExited,"function"==typeof n)return n(e,o);var i=r.default.Children.only(n);return r.default.cloneElement(i,o)},o}(r.default.Component);function f(){}p.contextTypes={transitionGroup:o.object},p.childContextTypes={transitionGroup:function(){}},p.propTypes={},p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:f,onEntering:f,onEntered:f,onExit:f,onExiting:f,onExited:f},p.UNMOUNTED=0,p.EXITED=1,p.ENTERING=2,p.ENTERED=3,p.EXITING=4;var m=(0,s.polyfill)(p);t.ZP=m},4726:(e,t,n)=>{var o;t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0,(o=n(5697))&&o.__esModule,t.timeoutsShape=null,t.classNamesShape=null},6115:e=>{var t;t="function"==typeof setImmediate?function(e){setImmediate(e)}:function(e){setTimeout(e,0)},e.exports=t},670:e=>{e.exports=function(){}},6689:e=>{e.exports=n(2735)},6405:e=>{e.exports=n(2788)},8149:(e,t,n)=>{e.exports=n(3285)},8428:(e,t,n)=>{e.exports=n(6981)},5940:(e,t,n)=>{e.exports=n(5627)},3562:(e,t,n)=>{e.exports=n(7965)},6243:(e,t,n)=>{e.exports=n(8613)},2863:(e,t,n)=>{e.exports=n(433)},434:e=>{function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4836:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{r.r(i),r.d(i,{commitNodeType:()=>fe,default:()=>Ca,mergeNodeType:()=>ge,stashNodeType:()=>ve});var e={};r.r(e),r.d(e,{types:()=>Rs});var t,n=r(6689),o=r.n(n),s=r(5697),a=r.n(s),l=r(3524),c=r.n(l),d=r(9590),u=r.n(d),h=r(7418),p=r.n(h),f="bodyAttributes",m="htmlAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},b=(Object.keys(g).map((function(e){return g[e]})),"charset"),v="cssText",y="href",w="innerHTML",x="itemprop",C="rel",S={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},k=Object.keys(S).reduce((function(e,t){return e[S[t]]=t,e}),{}),T=[g.NOSCRIPT,g.SCRIPT,g.STYLE],R="data-react-helmet",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},O=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},M=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},P=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},z=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},$=function(e){var t=H(e,g.TITLE),n=H(e,"titleTemplate");if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var o=H(e,"defaultTitle");return t||o||void 0},A=function(e){return H(e,"onChangeClientState")||function(){}},D=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return I({},e,t)}),{})},N=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var o=Object.keys(n),r=0;r<o.length;r++){var i=o[r].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},L=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&j("Helmet: "+e+' should be of type "Array". Instead found type "'+_(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),s=0;s<i.length;s++){var a=i[s],l=a.toLowerCase();-1===t.indexOf(l)||n===C&&"canonical"===e[n].toLowerCase()||l===C&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(a)||a!==w&&a!==v&&a!==x||(n=a)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][c]&&(r[n][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),s=0;s<i.length;s++){var a=i[s],l=p()({},o[a],r[a]);o[a]=l}return e}),[]).reverse()},H=function(e,t){for(var n=e.length-1;n>=0;n--){var o=e[n];if(o.hasOwnProperty(t))return o[t]}return null},B=(t=Date.now(),function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout((function(){B(e)}),0)}),F=function(e){return clearTimeout(e)},G="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||B:r.g.requestAnimationFrame||B,W="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||F:r.g.cancelAnimationFrame||F,j=function(e){return console&&"function"==typeof console.warn&&void 0},U=null,V=function(e,t){var n=e.baseTag,o=e.bodyAttributes,r=e.htmlAttributes,i=e.linkTags,s=e.metaTags,a=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,d=e.styleTags,u=e.title,h=e.titleAttributes;K(g.BODY,o),K(g.HTML,r),q(u,h);var p={baseTag:Y(g.BASE,n),linkTags:Y(g.LINK,i),metaTags:Y(g.META,s),noscriptTags:Y(g.NOSCRIPT,a),scriptTags:Y(g.SCRIPT,c),styleTags:Y(g.STYLE,d)},f={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,o=t.oldTags;n.length&&(f[e]=n),o.length&&(m[e]=p[e].oldTags)})),t&&t(),l(e,f,m)},Z=function(e){return Array.isArray(e)?e.join(""):e},q=function(e,t){void 0!==e&&document.title!==e&&(document.title=Z(e)),K(g.TITLE,t)},K=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var o=n.getAttribute(R),r=o?o.split(","):[],i=[].concat(r),s=Object.keys(t),a=0;a<s.length;a++){var l=s[a],c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),-1===r.indexOf(l)&&r.push(l);var d=i.indexOf(l);-1!==d&&i.splice(d,1)}for(var u=i.length-1;u>=0;u--)n.removeAttribute(i[u]);r.length===i.length?n.removeAttribute(R):n.getAttribute(R)!==s.join(",")&&n.setAttribute(R,s.join(","))}},Y=function(e,t){var n=document.head||document.querySelector(g.HEAD),o=n.querySelectorAll(e+"["+R+"]"),r=Array.prototype.slice.call(o),i=[],s=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var o in t)if(t.hasOwnProperty(o))if(o===w)n.innerHTML=t.innerHTML;else if(o===v)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var a=void 0===t[o]?"":t[o];n.setAttribute(o,a)}n.setAttribute(R,"true"),r.some((function(e,t){return s=t,n.isEqualNode(e)}))?r.splice(s,1):i.push(n)})),r.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:r,newTags:i}},X=function(e){return Object.keys(e).reduce((function(t,n){var o=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+o:o}),"")},Q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[S[n]||n]=e[n],t}),t)},J=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[R]=!0,i=Q(n,r),[o().createElement(g.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,o){var r=X(n),i=Z(t);return r?"<"+e+" "+R+'="true" '+r+">"+z(i,o)+"</"+e+">":"<"+e+" "+R+'="true">'+z(i,o)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case f:case m:return{toComponent:function(){return Q(t)},toString:function(){return X(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[R]=!0,r);return Object.keys(t).forEach((function(e){var n=S[e]||e;if(n===w||n===v){var o=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:o}}else i[n]=t[e]})),o().createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,o){var r=Object.keys(o).filter((function(e){return!(e===w||e===v)})).reduce((function(e,t){var r=void 0===o[t]?t:t+'="'+z(o[t],n)+'"';return e?e+" "+r:r}),""),i=o.innerHTML||o.cssText||"",s=-1===T.indexOf(e);return t+"<"+e+" "+R+'="true" '+r+(s?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},ee=function(e){var t=e.baseTag,n=e.bodyAttributes,o=e.encode,r=e.htmlAttributes,i=e.linkTags,s=e.metaTags,a=e.noscriptTags,l=e.scriptTags,c=e.styleTags,d=e.title,u=void 0===d?"":d,h=e.titleAttributes;return{base:J(g.BASE,t,o),bodyAttributes:J(f,n,o),htmlAttributes:J(m,r,o),link:J(g.LINK,i,o),meta:J(g.META,s,o),noscript:J(g.NOSCRIPT,a,o),script:J(g.SCRIPT,l,o),style:J(g.STYLE,c,o),title:J(g.TITLE,{title:u,titleAttributes:h},o)}},te=function(e){var t,n;return n=t=function(t){function n(){return E(this,n),P(this,t.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),n.prototype.shouldComponentUpdate=function(e){return!u()(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,r=e.newChildProps,i=e.nestedChildren;return I({},o,((t={})[n.type]=[].concat(o[n.type]||[],[I({},r,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,r=e.newProps,i=e.newChildProps,s=e.nestedChildren;switch(o.type){case g.TITLE:return I({},r,((t={})[o.type]=s,t.titleAttributes=I({},i),t));case g.BODY:return I({},r,{bodyAttributes:I({},i)});case g.HTML:return I({},r,{htmlAttributes:I({},i)})}return I({},r,((n={})[o.type]=I({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=I({},t);return Object.keys(e).forEach((function(t){var o;n=I({},n,((o={})[t]=e[t],o))})),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o().Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[k[n]||n]=e[n],t}),t)}(M(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:s,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=M(t,["children"]),i=I({},r);return n&&(i=this.mapChildrenToProps(n,i)),o().createElement(e,i)},O(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(o().Component),t.propTypes={base:a().object,bodyAttributes:a().object,children:a().oneOfType([a().arrayOf(a().node),a().node]),defaultTitle:a().string,defer:a().bool,encodeSpecialCharacters:a().bool,htmlAttributes:a().object,link:a().arrayOf(a().object),meta:a().arrayOf(a().object),noscript:a().arrayOf(a().object),onChangeClientState:a().func,script:a().arrayOf(a().object),style:a().arrayOf(a().object),title:a().string,titleAttributes:a().object,titleTemplate:a().string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=ee({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n}(c()((function(e){return{baseTag:N([y,"target"],e),bodyAttributes:D(f,e),defer:H(e,"defer"),encode:H(e,"encodeSpecialCharacters"),htmlAttributes:D(m,e),linkTags:L(g.LINK,[C,y],e),metaTags:L(g.META,["name",b,"http-equiv","property",x],e),noscriptTags:L(g.NOSCRIPT,[w],e),onChangeClientState:A(e),scriptTags:L(g.SCRIPT,["src",w],e),styleTags:L(g.STYLE,[v],e),title:$(e),titleAttributes:D("titleAttributes",e)}}),(function(e){U&&W(U),e.defer?U=G((function(){V(e,(function(){U=null}))})):(V(e),U=null)}),ee)((function(){return null})));te.renderStatic=te.rewind;const ne=te;var oe=r(4184),re=r.n(oe);const ie=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,se=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,ae=new Map;let le;const ce=["th","st","nd","rd"];function de(e){const t=e%100;return`${e}${ce[(t-20)%10]??ce[t]??ce[0]}`}const ue={"--graph-row-height":"22px","--font-default":"'Open Sans', Arial, sans-serif !important","--font-monospace":"'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace","--font-size":"62.5%","--fs-1":"1rem","--fs-2":"1.2rem","--fs-3":"1.4rem","--fs-4":"1.6rem","--fs-5":"1.8rem","--fs-6":"2rem","--fs-7":"2.4rem","--button-xs-padding-y":".15rem","--button-xs-padding-x":".25rem","--button-small-padding-y":".25rem","--button-small-padding-x":".5rem","--button-medium-padding-y":".5rem","--button-medium-padding-x":".75rem","--button-large-padding-y":"1rem","--button-large-padding-x":"1.25rem","--button-radius":".2rem","--input-radius":"3px","--about-modal-bg-color":"#e2e4e9","--about-modal-width":"650px","--label__purple-color-f25":"rgba(197,23,182,0.25)","--registration-modal-width":"400px","--file-history-header-height":"35px","--shop-modal-width":"95vw","--shop-modal-height":"95vh","--scrollable-scrollbar-thickness":"14px","--mini-commit-col-left-width":"30px","--mini-commit-col-middle-padding":"6px","--mini-commit-col-right-width":"56px","--fuzzy-finder-repo-color":"rgba(46,206,157,0.1)","--fuzzy-finder-checkout-color":"rgba(6,105,247,0.1)","--fuzzy-finder-history-color":"rgba(197,23,182,0.1)","--handle-width":"7px","--shadow-color":"rgba(0,0,0,0.4)","--graph-color-5-f10":"rgba(205,1,1,0.1)","--graph-color-6-f10":"rgba(242,93,46,0.1)","--graph-color-7-f10":"rgba(242,202,51,0.1)","--graph-color-8-f10":"rgba(123,217,56,0.1)","--graph-color-9-f10":"rgba(46,206,157,0.1)","--graph-color-0-f10":"rgba(21,160,191,0.1)","--graph-color-1-f10":"rgba(6,105,247,0.1)","--graph-color-2-f10":"rgba(142,0,194,0.1)","--graph-color-3-f10":"rgba(197,23,182,0.1)","--graph-color-4-f10":"rgba(217,1,113,0.1)","--graph-color-5-f50":"rgba(205,1,1,0.5)","--graph-color-6-f50":"rgba(242,93,46,0.5)","--graph-color-7-f50":"rgba(242,202,51,0.5)","--graph-color-8-f50":"rgba(123,217,56,0.5)","--graph-color-9-f50":"rgba(46,206,157,0.5)","--graph-color-0-f50":"rgba(21,160,191,0.5)","--graph-color-1-f50":"rgba(6,105,247,0.5)","--graph-color-2-f50":"rgba(142,0,194,0.5)","--graph-color-3-f50":"rgba(197,23,182,0.5)","--graph-color-4-f50":"rgba(217,1,113,0.5)","--axo-orange":"#e75225","--axo-ink":"#141422","--axo-cream":"#f9efc1","--axo-yellow":"#d8c13a","--info-bar-height":"26px","--left-panel-header-height":"60px","--toolbar-height":"48px","--toolbar-border":"1px","--toolbar-item-height":"calc(var(--toolbar-height, 0px) - var(--toolbar-border, 1px))","--expand-detail-panel-transition":"flex-grow 250ms ease-in-out","--conflict-left-color":"rgba(21,160,191,0.25)","--conflict-right-color":"rgba(242,202,51,0.25)","--conflict-output-color":"rgba(197,23,182,0.25)","--graph-color-5-bg50":"#751012","--graph-color-6-bg50":"#873e29","--graph-color-7-bg50":"#87742b","--graph-color-8-bg50":"#4c7c2e","--graph-color-9-bg50":"#257660","--graph-color-0-bg50":"#195f71","--graph-color-1-bg50":"#11448d","--graph-color-2-bg50":"#550f73","--graph-color-3-bg50":"#711b6d","--graph-color-4-bg50":"#7b104a","--graph-color-5-bg45":"#6c1114","--graph-color-6-bg45":"#7c3a28","--graph-color-7-bg45":"#7c6b2a","--graph-color-8-bg45":"#47722c","--graph-color-9-bg45":"#246d5a","--graph-color-0-bg45":"#195969","--graph-color-1-bg45":"#124082","--graph-color-2-bg45":"#4f116b","--graph-color-3-bg45":"#681b65","--graph-color-4-bg45":"#711146","--graph-color-5-bg25":"#48171b","--graph-color-6-bg25":"#522e26","--graph-color-7-bg25":"#524927","--graph-color-8-bg25":"#344d28","--graph-color-9-bg25":"#214a42","--graph-color-0-bg25":"#1a3f4a","--graph-color-1-bg25":"#173158","--graph-color-2-bg25":"#39174b","--graph-color-3-bg25":"#461c48","--graph-color-4-bg25":"#4b1737","--graph-color-5-bg15":"#371a1e","--graph-color-6-bg15":"#3c2725","--graph-color-7-bg15":"#3c3825","--graph-color-8-bg15":"#2a3a26","--graph-color-9-bg15":"#1f3835","--graph-color-0-bg15":"#1b323a","--graph-color-1-bg15":"#192943","--graph-color-2-bg15":"#2d1a3b","--graph-color-3-bg15":"#351d39","--graph-color-4-bg15":"#381a2f","--semi-bold":"500","--bold":"600","--num-columns-supported":"10","--column-0-color":"#15a0bf","--column-1-color":"#0669f7","--column-2-color":"#8e00c2","--column-3-color":"#c517b6","--column-4-color":"#d90171","--column-5-color":"#cd0101","--column-6-color":"#f25d2e","--column-7-color":"#f2ca33","--column-8-color":"#7bd938","--column-9-color":"#2ece9d","--red":"#D9413D","--orange":"#DE9B43","--yellow":"#ECB91C","--green":"#5CB85C","--blue":"#4D88FF","--ltblue":"#5bc0de","--app__bg0":"#1C1E23","--toolbar__bg0":"rgb(42,45,52)","--toolbar__bg1":"rgb(51,55,63)","--toolbar__bg2":"rgb(65,70,80)","--panel__bg0":"rgb(39,42,49)","--panel__bg1":"rgb(50,54,63)","--panel__bg2":"rgb(61,66,77)","--input__bg":"rgba(0,0,0,0.2)","--input-bg-warn-color":"rgba(222,155,67,0.6)","--panel-border":"rgb(19,20,24)","--section-border":"rgba(255,255,255,0.08)","--subtle-border":"rgba(255,255,255,0.04)","--modal-overlay-color":"rgba(0,0,0,.5)","--graph-color-0":"#15a0bf","--graph-color-1":"#0669f7","--graph-color-2":"#8e00c2","--graph-color-3":"#c517b6","--graph-color-4":"#d90171","--graph-color-5":"#cd0101","--graph-color-6":"#f25d2e","--graph-color-7":"#f2ca33","--graph-color-8":"#7bd938","--graph-color-9":"#2ece9d","--text-selected":"#FFFFFF","--text-selected-row":"#FFFFFF","--text-dimmed":"rgba(255,255,255,0.2)","--text-dimmed-selected":"rgba(255,255,255,0.5)","--text-normal":"rgba(255,255,255,0.75)","--text-secondary":"rgba(255,255,255,0.6)","--text-disabled":"rgba(255,255,255,0.4)","--text-accent":"#93A9EC","--text-inverse":"#222222","--text-bright":"#FFFFFF","--btn-text":"rgba(255,255,255,0.75)","--btn-text-hover":"#FFFFFF","--default-border":"rgba(255,255,255,0.75)","--default-bg":"transparent","--default-hover":"transparent","--default-border-hover":"#FFFFFF","--primary-border":"#4D88FF","--primary-bg":"rgba(77,136,255,0.2)","--primary-hover":"rgba(77,136,255,0.6)","--success-border":"#5CB85C","--success-bg":"rgba(92,184,92,0.2)","--success-hover":"rgba(92,184,92,0.6)","--warning-border":"#DE9B43","--warning-bg":"rgba(222,155,67,0.2)","--warning-hover":"rgba(222,155,67,0.6)","--danger-border":"#D9413D","--danger-bg":"rgba(217,65,61,0.2)","--danger-hover":"rgba(217,65,61,0.6)","--hover-row":"rgba(77,136,255,0.1)","--hover-row-border":"none","--danger-row":"rgba(217,65,61,0.6)","--selected-row":"rgba(77,136,255,0.2)","--selected-row-border":"none","--warning-row":"rgba(222,155,67,0.6)","--droppable":"rgba(236,185,28,0.3)","--drop-target":"rgba(92,184,92,0.5)","--input--disabled":"rgba(0,0,0,0.1)","--link-color":"#40c5ec","--link-color-bright":"#40c5ec","--form-control-focus":"#4D88FF","--scroll-thumb-border":"#1C1E23","--scroll-thumb-bg":"rgb(65,70,80)","--scroll-thumb-bg-light":"rgb(111,119,136)","--wip-status":"rgba(77,136,255,0.4)","--card__bg":"rgb(61,66,77)","--card-shadow":"rgba(0,0,0,.2)","--statusbar__warning-bg":"#87742b","--label__yellow-color":"#f2ca33","--label__light-blue-color":"#15a0bf","--label__purple-color":"#c517b6","--filtering":"rgba(77,136,255,0.5)","--soloing":"rgba(222,155,67,0.5)","--checked-out":"rgba(92,184,92,0.3)","--soloed":"rgba(222,155,67,0.3)","--filter-match":"rgba(77,136,255,0.5)","--clone__progress":"rgba(77,136,255,0.7)","--toolbar__prompt":"rgba(77,136,255,0.2)","--verified":"rgba(92,184,92,0.3)","--unverified":"rgba(255,255,255,0.1)","--drop-sort-border":"#5CB85C","--terminal__repo-name-color":"turquoise","--terminal__repo-branch-color":"violet","--terminal__repo-tag-color":"lightcoral","--terminal__repo-upstream-color":"yellowgreen","--terminal__background":"#000000","--terminal__cursor":"#FFFFFF","--terminal__cursorAccent":"#000000","--terminal__foreground":"#FFFFFF","--terminal__selection":"#304676","--terminal__black":"#000000","--terminal__red":"#F24A4A","--terminal__green":"#0DBC79","--terminal__yellow":"#E5E510","--terminal__blue":"#4A98EE","--terminal__magenta":"#E063E0","--terminal__cyan":"#11A8CD","--terminal__white":"#E5E5E5","--terminal__brightBlack":"#686868","--terminal__brightRed":"#FF5656","--terminal__brightGreen":"#23D18B","--terminal__brightYellow":"#F5F543","--terminal__brightBlue":"#51A4FF","--terminal__brightMagenta":"#D670D6","--terminal__brightCyan":"#29B8DB","--terminal__brightWhite":"#E5E5E5","--code-bg":"#1C1E23","--code-foreground":"rgba(255,255,255,0.75)","--code-blame-color-0":"#15a0bf","--code-blame-color-1":"#0669f7","--code-blame-color-2":"#8e00c2","--code-blame-color-3":"#c517b6","--code-blame-color-4":"#d90171","--code-blame-color-5":"#cd0101","--code-blame-color-6":"#f25d2e","--code-blame-color-7":"#f2ca33","--code-blame-color-8":"#7bd938","--code-blame-color-9":"#2ece9d","--added-line":"rgba(92,184,92,0.2)","--deleted-line":"rgba(217,65,61,0.2)","--modified-line":"rgba(0,0,0,0.25)","--conflict-info-color":"#15a0bf","--conflict-left-border-color":"#15a0bf","--conflict-right-border-color":"#f2ca33","--conflict-output-border-color":"#c517b6"};function he(e){return`--column-${e}-color`}function pe(e={}){const t={};return Object.keys(e).forEach((n=>{n.includes("--graph-color-")||n.match(/^--column-\d+-color$/)?CSS.supports("color",e[n])&&(t[n]=e[n]):t[n]=e[n]})),function(e={}){return{...ue,...e}}(t)}const fe="commit-node",me="merge-conflict-node",ge="merge-node",be="unsupported-rebase-warning-node",ve="stash-node",ye="work-dir-changes";var we=(e=>(e.RowEntry="rowEntry",e.Tooltip="tooltip",e))(we||{}),xe=r(6243);function Ce(e,t){if(null==e)return{};var n,o,r={},i=xe(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}var Se=r(5940),ke=r(2863);function Te(e,t){return Te=ke?ke.bind():function(e,t){return e.__proto__=t,e},Te(e,t)}function Re(e,t){e.prototype=Se(t.prototype),e.prototype.constructor=e,Te(e,t)}var _e=r(8428);function Ee(){return Ee=_e?_e.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ee.apply(this,arguments)}var Oe,Ie=r(2856),Me=r.n(Ie),Pe=r(8853),ze=r.n(Pe),$e=r(644),Ae={in:a().bool,mountOnEnter:a().bool,unmountOnExit:a().bool,appear:a().bool,timeout:a().number,onEnter:a().func,onEntering:a().func,onEntered:a().func,onExit:a().func,onExiting:a().func,onExited:a().func},De=((Oe={})[$e.d0]="in",Oe[$e.cn]="in",Oe),Ne=function(e){function t(){return e.apply(this,arguments)||this}return Re(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.children,r=Ce(e,["className","children"]);return o().createElement($e.ZP,r,(function(e,r){return o().cloneElement(n,Ee({},r,{className:re()("fade",t,n.props.className,De[e])}))}))},t}(o().Component);Ne.propTypes=Ae,Ne.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1};const Le=Ne;var He=Ee({},Me().propTypes,{show:a().bool,rootClose:a().bool,onHide:a().func,animation:a().oneOfType([a().bool,ze()]),onEnter:a().func,onEntering:a().func,onEntered:a().func,onExit:a().func,onExiting:a().func,onExited:a().func,placement:a().oneOf(["top","right","bottom","left"])}),Be={animation:Le,rootClose:!1,show:!1,placement:"right"},Fe=function(e){function t(){return e.apply(this,arguments)||this}return Re(t,e),t.prototype.render=function(){var e,t=this.props,r=t.animation,i=t.children,s=Ce(t,["animation","children"]),a=!0===r?Le:r||null;return e=a?i:(0,n.cloneElement)(i,{className:re()(i.props.className,"in")}),o().createElement(Me(),Ee({},s,{transition:a}),e)},t}(o().Component);Fe.propTypes=He,Fe.defaultProps=Be;const Ge=Fe;var We=r(5638),je=r.n(We),Ue=r(3562),Ve=r.n(Ue),Ze=r(1143),qe=r.n(Ze),Ke={large:"lg",medium:"md",small:"sm",xsmall:"xs",lg:"lg",md:"md",sm:"sm",xs:"xs"};function Ye(e){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return"function"==typeof n[n.length-1]?e.apply(void 0,n):function(t){return e.apply(void 0,n.concat([t]))}}}function Xe(e,t){var n=(e.bsClass||"").trim();return null==n&&qe()(!1),n+(t?"-"+t:"")}var Qe=Ye((function(e,t){var n=t.propTypes||(t.propTypes={}),o=t.defaultProps||(t.defaultProps={});return n.bsClass=a().string,o.bsClass=e,t}));function Je(e){var t,n=((t={})[Xe(e)]=!0,t);return e.bsSize&&(n[Xe(e,Ke[e.bsSize]||e.bsSize)]=!0),e.bsStyle&&(n[Xe(e,e.bsStyle)]=!0),n}function et(e){return{bsClass:e.bsClass,bsSize:e.bsSize,bsStyle:e.bsStyle,bsRole:e.bsRole}}function tt(e){var t={};return Ve()(e).forEach((function(e){var n=e[0],o=e[1];(function(e){return"bsClass"===e||"bsSize"===e||"bsStyle"===e||"bsRole"===e})(n)||(t[n]=o)})),[et(e),t]}Ye((function(e,t,n){"string"!=typeof t&&(n=t,t=void 0);var o=n.STYLES||[],r=n.propTypes||{};e.forEach((function(e){-1===o.indexOf(e)&&o.push(e)}));var i=a().oneOf(o);return n.STYLES=o,i._values=o,n.propTypes=Ee({},r,{bsStyle:i}),void 0!==t&&((n.defaultProps||(n.defaultProps={})).bsStyle=t),n})),Ye((function(e,t,n){"string"!=typeof t&&(n=t,t=void 0);var o=n.SIZES||[],r=n.propTypes||{};e.forEach((function(e){-1===o.indexOf(e)&&o.push(e)}));var i=[];o.forEach((function(e){var t=Ke[e];t&&t!==e&&i.push(t),i.push(e)}));var s=a().oneOf(i);return s._values=i,n.SIZES=o,n.propTypes=Ee({},r,{bsSize:s}),void 0!==t&&(n.defaultProps||(n.defaultProps={}),n.defaultProps.bsSize=t),n}));var nt={id:je()(a().oneOfType([a().string,a().number])),placement:a().oneOf(["top","right","bottom","left"]),positionTop:a().oneOfType([a().number,a().string]),positionLeft:a().oneOfType([a().number,a().string]),arrowOffsetTop:a().oneOfType([a().number,a().string]),arrowOffsetLeft:a().oneOfType([a().number,a().string]),title:a().node},ot=function(e){function t(){return e.apply(this,arguments)||this}return Re(t,e),t.prototype.render=function(){var e,t=this.props,n=t.placement,r=t.positionTop,i=t.positionLeft,s=t.arrowOffsetTop,a=t.arrowOffsetLeft,l=t.title,c=t.className,d=t.style,u=t.children,h=tt(Ce(t,["placement","positionTop","positionLeft","arrowOffsetTop","arrowOffsetLeft","title","className","style","children"])),p=h[0],f=h[1],m=Ee({},Je(p),((e={})[n]=!0,e)),g=Ee({display:"block",top:r,left:i},d),b={top:s,left:a};return o().createElement("div",Ee({},f,{role:"tooltip",className:re()(c,m),style:g}),o().createElement("div",{className:"arrow",style:b}),l&&o().createElement("h3",{className:Xe(p,"title")},l),o().createElement("div",{className:Xe(p,"content")},u))},t}(o().Component);ot.propTypes=nt,ot.defaultProps={placement:"right"};const rt=Qe("popover",ot);var it,st=(it=function(e,t){return it=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},it(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}it(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),at=function(){return at=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},at.apply(this,arguments)},lt={top:{width:"100%",height:"10px",top:"-5px",left:"0px",cursor:"row-resize"},right:{width:"10px",height:"100%",top:"0px",right:"-5px",cursor:"col-resize"},bottom:{width:"100%",height:"10px",bottom:"-5px",left:"0px",cursor:"row-resize"},left:{width:"10px",height:"100%",top:"0px",left:"-5px",cursor:"col-resize"},topRight:{width:"20px",height:"20px",position:"absolute",right:"-10px",top:"-10px",cursor:"ne-resize"},bottomRight:{width:"20px",height:"20px",position:"absolute",right:"-10px",bottom:"-10px",cursor:"se-resize"},bottomLeft:{width:"20px",height:"20px",position:"absolute",left:"-10px",bottom:"-10px",cursor:"sw-resize"},topLeft:{width:"20px",height:"20px",position:"absolute",left:"-10px",top:"-10px",cursor:"nw-resize"}},ct=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onMouseDown=function(e){t.props.onResizeStart(e,t.props.direction)},t.onTouchStart=function(e){t.props.onResizeStart(e,t.props.direction)},t}return st(t,e),t.prototype.render=function(){return n.createElement("div",{className:this.props.className||"",style:at(at({position:"absolute",userSelect:"none"},lt[this.props.direction]),this.props.replaceStyles||{}),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart},this.props.children)},t}(n.PureComponent),dt=r(3316),ut=r.n(dt),ht=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),pt=function(){return pt=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},pt.apply(this,arguments)},ft={width:"auto",height:"auto"},mt=ut()((function(e,t,n){return Math.max(Math.min(e,n),t)})),gt=ut()((function(e,t){return Math.round(e/t)*t})),bt=ut()((function(e,t){return new RegExp(e,"i").test(t)})),vt=function(e){return Boolean(e.touches&&e.touches.length)},yt=ut()((function(e,t,n){void 0===n&&(n=0);var o=t.reduce((function(n,o,r){return Math.abs(o-e)<Math.abs(t[n]-e)?r:n}),0),r=Math.abs(t[o]-e);return 0===n||r<n?t[o]:e})),wt=ut()((function(e,t){return e.substr(e.length-t.length,t.length)===t})),xt=ut()((function(e){return"auto"===(e=e.toString())||wt(e,"px")||wt(e,"%")||wt(e,"vh")||wt(e,"vw")||wt(e,"vmax")||wt(e,"vmin")?e:e+"px"})),Ct=function(e,t,n,o){if(e&&"string"==typeof e){if(wt(e,"px"))return Number(e.replace("px",""));if(wt(e,"%"))return t*(Number(e.replace("%",""))/100);if(wt(e,"vw"))return n*(Number(e.replace("vw",""))/100);if(wt(e,"vh"))return o*(Number(e.replace("vh",""))/100)}return e},St=ut()((function(e,t,n,o,r,i,s){return o=Ct(o,e.width,t,n),r=Ct(r,e.height,t,n),i=Ct(i,e.width,t,n),s=Ct(s,e.height,t,n),{maxWidth:void 0===o?void 0:Number(o),maxHeight:void 0===r?void 0:Number(r),minWidth:void 0===i?void 0:Number(i),minHeight:void 0===s?void 0:Number(s)}})),kt=["as","style","className","grid","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],Tt="__resizable_base__",Rt=function(e){function t(t){var n=e.call(this,t)||this;return n.ratio=1,n.resizable=null,n.parentLeft=0,n.parentTop=0,n.resizableLeft=0,n.resizableRight=0,n.resizableTop=0,n.resizableBottom=0,n.targetLeft=0,n.targetTop=0,n.appendBase=function(){if(!n.resizable||!n.window)return null;var e=n.parentNode;if(!e)return null;var t=n.window.document.createElement("div");return t.style.width="100%",t.style.height="100%",t.style.position="absolute",t.style.transform="scale(0, 0)",t.style.left="0",t.style.flex="0",t.classList?t.classList.add(Tt):t.className+=Tt,e.appendChild(t),t},n.removeBase=function(e){var t=n.parentNode;t&&t.removeChild(e)},n.ref=function(e){e&&(n.resizable=e)},n.state={isResizing:!1,width:void 0===(n.propsSize&&n.propsSize.width)?"auto":n.propsSize&&n.propsSize.width,height:void 0===(n.propsSize&&n.propsSize.height)?"auto":n.propsSize&&n.propsSize.height,direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},n.onResizeStart=n.onResizeStart.bind(n),n.onMouseMove=n.onMouseMove.bind(n),n.onMouseUp=n.onMouseUp.bind(n),n}return ht(t,e),Object.defineProperty(t.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"window",{get:function(){return this.resizable&&this.resizable.ownerDocument?this.resizable.ownerDocument.defaultView:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||ft},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){var e=0,t=0;if(this.resizable&&this.window){var n=this.resizable.offsetWidth,o=this.resizable.offsetHeight,r=this.resizable.style.position;"relative"!==r&&(this.resizable.style.position="relative"),e="auto"!==this.resizable.style.width?this.resizable.offsetWidth:n,t="auto"!==this.resizable.style.height?this.resizable.offsetHeight:o,this.resizable.style.position=r}return{width:e,height:t}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"sizeStyle",{get:function(){var e=this,t=this.props.size,n=function(t){if(void 0===e.state[t]||"auto"===e.state[t])return"auto";if(e.propsSize&&e.propsSize[t]&&wt(e.propsSize[t].toString(),"%")){if(wt(e.state[t].toString(),"%"))return e.state[t].toString();var n=e.getParentSize();return Number(e.state[t].toString().replace("px",""))/n[t]*100+"%"}return xt(e.state[t])};return{width:t&&void 0!==t.width&&!this.state.isResizing?xt(t.width):n("width"),height:t&&void 0!==t.height&&!this.state.isResizing?xt(t.height):n("height")}},enumerable:!1,configurable:!0}),t.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var e=this.appendBase();if(!e)return{width:0,height:0};var t=!1,n=this.parentNode.style.flexWrap;"wrap"!==n&&(t=!0,this.parentNode.style.flexWrap="wrap"),e.style.position="relative",e.style.minWidth="100%";var o={width:e.offsetWidth,height:e.offsetHeight};return t&&(this.parentNode.style.flexWrap=n),this.removeBase(e),o},t.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},t.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},t.prototype.componentDidMount=function(){if(this.resizable&&this.window){var e=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:"auto"!==e.flexBasis?e.flexBasis:void 0})}},t.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},t.prototype.createSizeForCssProperty=function(e,t){var n=this.propsSize&&this.propsSize[t];return"auto"!==this.state[t]||this.state.original[t]!==e||void 0!==n&&"auto"!==n?e:"auto"},t.prototype.calculateNewMaxFromBoundary=function(e,t){var n,o,r=this.props.boundsByDirection,i=this.state.direction,s=r&&bt("left",i),a=r&&bt("top",i);if("parent"===this.props.bounds){var l=this.parentNode;l&&(n=s?this.resizableRight-this.parentLeft:l.offsetWidth+(this.parentLeft-this.resizableLeft),o=a?this.resizableBottom-this.parentTop:l.offsetHeight+(this.parentTop-this.resizableTop))}else"window"===this.props.bounds?this.window&&(n=s?this.resizableRight:this.window.innerWidth-this.resizableLeft,o=a?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(n=s?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),o=a?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return n&&Number.isFinite(n)&&(e=e&&e<n?e:n),o&&Number.isFinite(o)&&(t=t&&t<o?t:o),{maxWidth:e,maxHeight:t}},t.prototype.calculateNewSizeFromDirection=function(e,t){var n=this.props.scale||1,o=this.props.resizeRatio||1,r=this.state,i=r.direction,s=r.original,a=this.props,l=a.lockAspectRatio,c=a.lockAspectRatioExtraHeight,d=a.lockAspectRatioExtraWidth,u=s.width,h=s.height,p=c||0,f=d||0;return bt("right",i)&&(u=s.width+(e-s.x)*o/n,l&&(h=(u-f)/this.ratio+p)),bt("left",i)&&(u=s.width-(e-s.x)*o/n,l&&(h=(u-f)/this.ratio+p)),bt("bottom",i)&&(h=s.height+(t-s.y)*o/n,l&&(u=(h-p)*this.ratio+f)),bt("top",i)&&(h=s.height-(t-s.y)*o/n,l&&(u=(h-p)*this.ratio+f)),{newWidth:u,newHeight:h}},t.prototype.calculateNewSizeFromAspectRatio=function(e,t,n,o){var r=this.props,i=r.lockAspectRatio,s=r.lockAspectRatioExtraHeight,a=r.lockAspectRatioExtraWidth,l=void 0===o.width?10:o.width,c=void 0===n.width||n.width<0?e:n.width,d=void 0===o.height?10:o.height,u=void 0===n.height||n.height<0?t:n.height,h=s||0,p=a||0;if(i){var f=(d-h)*this.ratio+p,m=(u-h)*this.ratio+p,g=(l-p)/this.ratio+h,b=(c-p)/this.ratio+h,v=Math.max(l,f),y=Math.min(c,m),w=Math.max(d,g),x=Math.min(u,b);e=mt(e,v,y),t=mt(t,w,x)}else e=mt(e,l,c),t=mt(t,d,u);return{newWidth:e,newHeight:t}},t.prototype.setBoundingClientRect=function(){if("parent"===this.props.bounds){var e=this.parentNode;if(e){var t=e.getBoundingClientRect();this.parentLeft=t.left,this.parentTop=t.top}}if(this.props.bounds&&"string"!=typeof this.props.bounds){var n=this.props.bounds.getBoundingClientRect();this.targetLeft=n.left,this.targetTop=n.top}if(this.resizable){var o=this.resizable.getBoundingClientRect(),r=o.left,i=o.top,s=o.right,a=o.bottom;this.resizableLeft=r,this.resizableRight=s,this.resizableTop=i,this.resizableBottom=a}},t.prototype.onResizeStart=function(e,t){if(this.resizable&&this.window){var n,o=0,r=0;if(e.nativeEvent&&function(e){return Boolean((e.clientX||0===e.clientX)&&(e.clientY||0===e.clientY))}(e.nativeEvent)?(o=e.nativeEvent.clientX,r=e.nativeEvent.clientY):e.nativeEvent&&vt(e.nativeEvent)&&(o=e.nativeEvent.touches[0].clientX,r=e.nativeEvent.touches[0].clientY),this.props.onResizeStart&&this.resizable&&!1===this.props.onResizeStart(e,t,this.resizable))return;this.props.size&&(void 0!==this.props.size.height&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),void 0!==this.props.size.width&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio="number"==typeof this.props.lockAspectRatio?this.props.lockAspectRatio:this.size.width/this.size.height;var i=this.window.getComputedStyle(this.resizable);if("auto"!==i.flexBasis){var s=this.parentNode;if(s){var a=this.window.getComputedStyle(s).flexDirection;this.flexDir=a.startsWith("row")?"row":"column",n=i.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var l={original:{x:o,y:r,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:pt(pt({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(e.target).cursor||"auto"}),direction:t,flexBasis:n};this.setState(l)}},t.prototype.onMouseMove=function(e){if(this.state.isResizing&&this.resizable&&this.window){if(this.window.TouchEvent&&vt(e))try{e.preventDefault(),e.stopPropagation()}catch(e){}var t=this.props,n=t.maxWidth,o=t.maxHeight,r=t.minWidth,i=t.minHeight,s=vt(e)?e.touches[0].clientX:e.clientX,a=vt(e)?e.touches[0].clientY:e.clientY,l=this.state,c=l.direction,d=l.original,u=l.width,h=l.height,p=this.getParentSize(),f=St(p,this.window.innerWidth,this.window.innerHeight,n,o,r,i);n=f.maxWidth,o=f.maxHeight,r=f.minWidth,i=f.minHeight;var m=this.calculateNewSizeFromDirection(s,a),g=m.newHeight,b=m.newWidth,v=this.calculateNewMaxFromBoundary(n,o),y=this.calculateNewSizeFromAspectRatio(b,g,{width:v.maxWidth,height:v.maxHeight},{width:r,height:i});if(b=y.newWidth,g=y.newHeight,this.props.grid){var w=gt(b,this.props.grid[0]),x=gt(g,this.props.grid[1]),C=this.props.snapGap||0;b=0===C||Math.abs(w-b)<=C?w:b,g=0===C||Math.abs(x-g)<=C?x:g}this.props.snap&&this.props.snap.x&&(b=yt(b,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(g=yt(g,this.props.snap.y,this.props.snapGap));var S={width:b-d.width,height:g-d.height};u&&"string"==typeof u&&(wt(u,"%")?b=b/p.width*100+"%":wt(u,"vw")?b=b/this.window.innerWidth*100+"vw":wt(u,"vh")&&(b=b/this.window.innerHeight*100+"vh")),h&&"string"==typeof h&&(wt(h,"%")?g=g/p.height*100+"%":wt(h,"vw")?g=g/this.window.innerWidth*100+"vw":wt(h,"vh")&&(g=g/this.window.innerHeight*100+"vh"));var k={width:this.createSizeForCssProperty(b,"width"),height:this.createSizeForCssProperty(g,"height")};"row"===this.flexDir?k.flexBasis=k.width:"column"===this.flexDir&&(k.flexBasis=k.height),this.setState(k),this.props.onResize&&this.props.onResize(e,c,this.resizable,S)}},t.prototype.onMouseUp=function(e){var t=this.state,n=t.isResizing,o=t.direction,r=t.original;if(n&&this.resizable){var i={width:this.size.width-r.width,height:this.size.height-r.height};this.props.onResizeStop&&this.props.onResizeStop(e,o,this.resizable,i),this.props.size&&this.setState(this.props.size),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:pt(pt({},this.state.backgroundStyle),{cursor:"auto"})})}},t.prototype.updateSize=function(e){this.setState({width:e.width,height:e.height})},t.prototype.renderResizer=function(){var e=this,t=this.props,o=t.enable,r=t.handleStyles,i=t.handleClasses,s=t.handleWrapperStyle,a=t.handleWrapperClass,l=t.handleComponent;if(!o)return null;var c=Object.keys(o).map((function(t){return!1!==o[t]?n.createElement(ct,{key:t,direction:t,onResizeStart:e.onResizeStart,replaceStyles:r&&r[t],className:i&&i[t]},l&&l[t]?l[t]:null):null}));return n.createElement("div",{className:a,style:s},c)},t.prototype.render=function(){var e=this,t=Object.keys(this.props).reduce((function(t,n){return-1!==kt.indexOf(n)||(t[n]=e.props[n]),t}),{}),o=pt(pt(pt({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(o.flexBasis=this.state.flexBasis);var r=this.props.as||"div";return n.createElement(r,pt({ref:this.ref,style:o,className:this.props.className},t),this.state.isResizing&&n.createElement("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer())},t.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},t}(n.PureComponent);function _t(e,t,n){return(e=e<=n?e:n)>=t?e:t}const Et={top:!1,right:!1,bottom:!1,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},Ot={min:0,max:1/0},It=({height:e,heightConstraints:t,width:n,widthConstraints:o})=>({height:_t(e,t.min,t.max),width:_t(n,o.min,o.max)}),Mt=({enable:e,height:t,heightConstraints:n,resizeEdge:o,width:r=0,widthConstraints:i})=>({...It({height:t,widthConstraints:i,heightConstraints:n,width:r}),enable:void 0===e||e,horizontal:"left"===o||"right"===o,initialHeight:t,initialWidth:r,resizing:!1,isMouseWheeling:!1,vertical:"top"===o||"bottom"===o});class Pt extends o().PureComponent{static defaultProps={className:"",enable:!0,heightConstraints:Ot,resizeContentClassName:"",resizeHandleClassName:"",style:{},wrapperStyle:{},translate:()=>"",wrapChildrenInDivContainer:!0,widthConstraints:Ot};onWheelTimeOut;isMouseWheeling=!1;constructor(e){super(e),this.state=Mt(e)}componentWillReceiveProps(e){const{onResizeFromPropChange:t}=this.props,{height:n,resizing:o,width:r}=this.state,{onResizeFromPropChange:i}=e;if(o)return;const s=Mt(e);this.setState(s);const{height:a,width:l}=s,c=i||t;!c||a===n&&l===r||c({height:a,width:l,originalHeight:n,originalWidth:r})}_onResize=(e,t,n,{height:o,width:r})=>{const{onResize:i}=this.props,{height:s,horizontal:a,vertical:l,width:c}=this.state,{height:d,width:u}=(({deltaWidth:e,deltaHeight:t},{heightConstraints:n,widthConstraints:o},{initialHeight:r,initialWidth:i})=>It({height:r+t,heightConstraints:n,width:i+e,widthConstraints:o}))({deltaWidth:r,deltaHeight:o},this.props,this.state),h=a&&u!==c,p=l&&d!==s;(h||p)&&(this.setState({height:p?d:s,width:h?u:c,isMouseWheeling:!1}),i&&i({height:p?d:void 0,width:h?u:void 0}))};_onResizeStart=e=>{e.preventDefault(),e.stopPropagation();const{onResizeStart:t}=this.props,{height:n,horizontal:o,vertical:r,width:i}=this.state;this.setState({resizing:!0}),t&&t({height:r?n:void 0,width:o?i:void 0})};_onResizeEnd=()=>{const{onResizeEnd:e}=this.props,{height:t,horizontal:n,vertical:o,width:r,initialWidth:i,initialHeight:s}=this.state;this.setState({initialWidth:r,initialHeight:t,resizing:!1}),i===r&&s===t||e&&e({width:n?r:void 0,height:o?t:void 0})};_onWheel=()=>{this.isMouseWheeling||(this.isMouseWheeling=!0,this.setState({isMouseWheeling:!0})),clearTimeout(this.onWheelTimeOut),this.onWheelTimeOut=setTimeout((()=>{this.isMouseWheeling=!1,this.setState({isMouseWheeling:!1})}),10)};render(){const{children:e,className:t,handleStyles:n,resizeContentClassName:r,resizeEdge:i,resizeHandleClassName:s,style:a,translate:l,heightConstraints:c,wrapChildrenInDivContainer:d,widthConstraints:u}=this.props,{enable:h,height:p,horizontal:f,resizing:m,vertical:g,width:b,isMouseWheeling:v}=this.state,{display:y,...w}=a,{min:x,max:C}=u,{min:S,max:k}=c,T={...this.props.wrapperStyle};f&&(T.width=b,T.minWidth=b),g&&(T.height=p,T.minHeight=p);const R=re()("resizable",t,{resizing:m}),_=re()("contents",r,`resize-edge-${i}`,{horizontal:f,vertical:g}),E=re()(i,s,"resizable-handle",{horizontal:f,vertical:g}),O=o().createElement("span",{title:l("ResizePanel")});return o().createElement("div",{"data-testid":"resizable",onWheel:this._onWheel,style:{...T,display:y}},o().createElement(Rt,{className:R,"data-testid":"resizable-core",enable:{...Et,[i]:!v&&h},handleClasses:{[i]:E},handleComponent:{[i]:O},handleStyles:n,maxHeight:g?k:void 0,maxWidth:f?C:void 0,minHeight:g?S:void 0,minWidth:f?x:void 0,onResize:this._onResize,onResizeStart:this._onResizeStart,onResizeStop:this._onResizeEnd,size:{height:g?p:"100%",width:f?b:"100%"},style:w},d?o().createElement("div",{className:_,style:{userSelect:"none"}},e):e))}}const zt=28,$t=50*zt,At=2,Dt=28,Nt=3,Lt=3,Ht=zt,Bt=22,Ft=3,Gt=11,Wt=22-2*At,jt=28+Dt,Ut=5,Vt=10,Zt=15,qt="timelineMessage",Kt="ref",Yt="graph",Xt="message",Qt="author",Jt="datetime",en="sha",tn="changes";var nn=(e=>(e.LocalBranches="localBranches",e.RemoteBranches="remoteBranches",e.Selection="selection",e.Head="head",e.Upstream="upstream",e.Highlights="highlights",e.Stashes="stashes",e.Tags="tags",e))(nn||{});const on={block:{type:"block",baseHeight:1*zt,minHeight:5,maxHeight:20},fullLine:{type:"fullLine",baseHeight:.5*zt,minHeight:2,maxHeight:4},thinLine:{type:"thinLine",baseHeight:.25*zt,minHeight:1,maxHeight:2}},rn={stashes:{type:"stashes",colorCssKey:"--color-graph-scroll-marker-stashes",lanes:[0],shape:"block"},tags:{type:"tags",colorCssKey:"--color-graph-scroll-marker-tags",lanes:[2],shape:"block"},remoteBranches:{type:"remoteBranches",colorCssKey:"--color-graph-scroll-marker-remote-branches",lanes:[2],shape:"block"},localBranches:{type:"localBranches",colorCssKey:"--color-graph-scroll-marker-local-branches",lanes:[0],shape:"block"},highlights:{type:"highlights",colorCssKey:"--color-graph-scroll-marker-highlights",lanes:[1],shape:"block"},upstream:{type:"upstream",colorCssKey:"--color-graph-scroll-marker-upstream",lanes:[1,2],shape:"block"},head:{type:"head",colorCssKey:"--color-graph-scroll-marker-head",lanes:[0,1],shape:"block"},selection:{type:"selection",colorCssKey:"--color-graph-scroll-marker-selection",lanes:[0,1,2],shape:"fullLine"}},sn={[Qt]:{headerLabelUntranslated:"GraphHeader-CommitAuthor",isCustomizable:!0,listId:"commit-author-zone",minimumWidth:50},[Jt]:{headerLabelUntranslated:"GraphHeader-CommitDateTime",isCustomizable:!0,listId:"commit-date-time-zone",minimumWidth:50},[Xt]:{headerLabelUntranslated:"GraphHeader-CommitMessage",isCustomizable:!1,listId:"commit-message-zone",minimumWidth:50},[en]:{headerLabelUntranslated:"GraphHeader-CommitSha",isCustomizable:!0,listId:"commit-sha-zone",minimumWidth:50},[Yt]:{headerLabelUntranslated:"GraphHeader-CommitGraph",isCustomizable:!1,listId:"commit-zone",minimumWidth:jt},[Kt]:{headerLabelUntranslated:"GraphHeader-BranchTag",isCustomizable:!1,listId:"ref-zone",minimumWidth:100},[tn]:{headerLabelUntranslated:"GraphHeader-Changes",isCustomizable:!0,listId:"changes-zone",minimumWidth:50}},an=23,ln=6,cn=4,dn=11,un=6,hn={added:0,deleted:0,modified:0},pn="pullRequest",fn="upstream",mn=[pn,fn],gn={HEAD:"head",REMOTE:"remote",TAG:"tag"},bn=e=>{let t;return(...n)=>{t&&cancelAnimationFrame(t),t=requestAnimationFrame((()=>{e(...n)}))}};function vn(e){return e?"string"==typeof e?e:JSON.stringify(e):null}function yn(e){const{length:t}=e;if(0===t)return{min:0,max:0};if(1===t)return{min:0,max:e[0]};e.sort(((e,t)=>e-t));const n=e[0],o=e[Math.floor(.25*t)],r=e[Math.floor(.5*t)],i=e[Math.floor(.75*t)],s=e[t-1],a=i-o;return{min:Math.max(n,r-1.5*a),max:Math.min(s,r+1.5*a)}}function wn(e,t,n,o){const{id:r}=e;return!r||null===t||null===t?.[r]||o&&null===t?.[r]?.[o]?null:t&&r in t?o&&!t[r]?.[o]?(n(r,[o]),null):o?t?.[r]?.[o]:t?.[r]:(n(r,mn),null)}function xn(e,t){if(t.id)return t.id;const n=t.owner||"";return e===gn.REMOTE?`${e}/${n}/${t.name}`:`${e}/${t.name}`}function Cn(e){return xn(e.refType,e)}function Sn(e,t=0){for(let n=e.length-1;n>=t;n-=1){const t=e[n];if(t.currentWidth>t.minimumWidth)return t}}function kn(e,t=0){if(e.length){for(let n=t;n<e.length;n+=1){const t=e[n],o=t.maximumWidth?Math.min(t.maximumWidth,t.preferredWidth||1/0):t.preferredWidth;if(o&&t.currentWidth<o)return t}return e[e.length-1]}}function Tn(e,t){let n=0;for(let o=0;o<e.length;o+=1){const r=e[o];t&&r.type===t||(n+=r.currentWidth)}return n}const Rn=(e,t)=>e===t[t.length-1].type;function _n(e,t,n){return _t(n,e.minimumWidth||0,e.maximumWidth&&!Rn(e.type,t)?e.maximumWidth||0:Number.MAX_VALUE)}function En(e,t){return t.find((({type:t})=>t===e))}function On(e,t){return t.findIndex((({type:t})=>t===e))}function In(e,t,n){let o=0,r=0;const i=On(e,t);if(i>-1){const e=function(e,t=0){let n=0;for(let o=t;o<e.length;o+=1)n+=e[o].minimumWidth;return n}(t,i+1),s=function(e,t=e.length-1){let n=0;for(let o=0;o<=t;o+=1)n+=e[o].currentWidth;return n}(t,i-1),a=t[i].maximumWidth||Number.MAX_VALUE,l=Math.min(a,n-e-s);o=t[i].minimumWidth,r=l}return{min:o,max:r}}function Mn(e){return(e?.heads||[]).some((e=>e.isCurrentHead))}function Pn(e){return!!e&&Object.values(e).some((e=>e>0))}function zn(e){return 1===Object.keys(e).length}function $n(e,t){return!0===e[t]&&zn(e)}function An(e,t){const{heads:n,tags:o,remotes:r}=e.hasRefs?e:e.childRefs,i=n?n.map((e=>({...e,refType:gn.HEAD}))):[],s=o?o.map((e=>({...e,refType:gn.TAG}))):[];return[...i,...r?r.map((e=>({...e,fullName:t&&e.owner?`${e.owner}/${e.name}`:e.name,refType:gn.REMOTE}))):[],...s]}function Dn(e){const t=[];let n;for(let o=0;o<e.length;o+=1){let r=!1;n=e[o].fullName||e[o].name;for(let i=0;i<t.length;i+=1)if(t[i].length>0&&t[i][0].name===n){e[o].refType===gn.HEAD?t[i].unshift(e[o]):t[i].push(e[o]),r=!0;break}r||t.push([e[o]])}return t}class Nn{props;constructor(e){this.props=e}getActiveGraphZone(e){const t=En(e,this.props.graphZones);return!t||t.isHidden?void 0:t}getGraphRefGroupForRow(e){const t=this.getRow(e);return t?An(t,this.props.showRemoteNamesOnRefs):[]}getGraphRefGroupsByNameForRow(e){const t=this.getGraphRefGroupForRow(e);return t?Dn(t):[]}getRow(e){if(!(e<0||e>this.props.processedRows.length-1))return this.props.processedRows[e]}getZoneWidth(e){return function(e,t){return En(e,t)?.currentWidth||sn[e].minimumWidth}(e,this.props.graphZones)}isDateTimeZoneActive(){return!!this.getActiveGraphZone(Jt)}isFirstRow(e){return 0===e}isHighlighted(e){if(this.props.processedRows[e]&&this.props.highlightedShas){const t=this.props.processedRows[e]?.sha;return this.props.highlightedShas[t]||!1}return!1}isHovering(e){return!(!this.props.isContainerWindowFocused||!this.props.processedRows[e])&&this.props.currentlyHoveredCommitSha===this.props.processedRows[e]?.sha}isLastColumn(e){return Rn(e,this.props.graphZones)}getSelectedRefGroupByName(){if(zn(this.props.isSelectedBySha)){const e=Object.keys(this.props.isSelectedBySha),t=this.props.processedGraphRowBySha[e[0]];if(t)return Dn(An(t,this.props.showRemoteNamesOnRefs))}return[]}isMissingHoveredRefGroup(e){if(!this.props.isContainerWindowFocused||this.props.highlightedShas)return!1;const t=this.getRow(e);if(!t)return!1;let n=[];if(this.props.dimRowsOfSelectedCommit){const e=this.getSelectedRefGroupByName();if(!e.length)return!1;n=e[0]}else{const{hoveredRefGroup:e}=this.props;if(!e||!e.length)return!1;n=e}const{name:o,refType:r}=n[0],i=r===gn.TAG,s=t.tags.length>0&&!t.heads.length&&!t.remotes.length,{heads:a,tags:l,remotes:c}=!t.hasRefs||s&&!i?t.childRefs:t;return!(a.length||c.length||l.length)||!a.some((e=>e.name===o&&n.some((e=>e.refType===gn.HEAD))))&&!c.some((e=>e.name===o&&n.some((t=>t.refType===gn.REMOTE&&t.owner===e.owner))))&&!l.some((e=>e.name===o&&n.some((e=>e.refType===gn.TAG))))}isSelected(e){const t=this.getRow(e)?.sha;return!!t&&!0===this.props.isSelectedBySha[t]}isSingleSelected(e){const t=this.getRow(e)?.sha;return!!t&&$n(this.props.isSelectedBySha,t)}hasTimeline(e){return!!this.props.processedRows[e]?.timeLineEntry&&!this.isDateTimeZoneActive()&&!this.isFirstRow(e)}rowContainsCurrentHeadRef(e){return Mn(e)}}function Ln(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Hn=r(8149),Bn=r.n(Hn),Fn=r(1629),Gn=r.n(Fn),Wn=r(6405),jn=r.n(Wn);r(670);const Un=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];e.apply(this,o),t.apply(this,o)}}),null)};function Vn(e,t){return Bn()(t)?t.indexOf(e)>=0:e===t}var Zn=a().oneOf(["click","hover","focus"]),qn=Ee({},Ge.propTypes,{trigger:a().oneOfType([Zn,a().arrayOf(Zn)]),delay:a().number,delayShow:a().number,delayHide:a().number,defaultOverlayShown:a().bool,overlay:a().node.isRequired,onBlur:a().func,onClick:a().func,onFocus:a().func,onMouseOut:a().func,onMouseOver:a().func,target:a().oneOf([null]),onHide:a().oneOf([null]),show:a().oneOf([null])}),Kn=function(e){function t(t,n){var o;return(o=e.call(this,t,n)||this).handleToggle=o.handleToggle.bind(Ln(Ln(o))),o.handleDelayedShow=o.handleDelayedShow.bind(Ln(Ln(o))),o.handleDelayedHide=o.handleDelayedHide.bind(Ln(Ln(o))),o.handleHide=o.handleHide.bind(Ln(Ln(o))),o.handleMouseOver=function(e){return o.handleMouseOverOut(o.handleDelayedShow,e,"fromElement")},o.handleMouseOut=function(e){return o.handleMouseOverOut(o.handleDelayedHide,e,"toElement")},o._mountNode=null,o.state={show:t.defaultOverlayShown},o}Re(t,e);var r=t.prototype;return r.componentDidMount=function(){this._mountNode=document.createElement("div"),this.renderOverlay()},r.componentDidUpdate=function(){this.renderOverlay()},r.componentWillUnmount=function(){jn().unmountComponentAtNode(this._mountNode),this._mountNode=null,clearTimeout(this._hoverShowDelay),clearTimeout(this._hoverHideDelay)},r.handleDelayedHide=function(){var e=this;if(null!=this._hoverShowDelay)return clearTimeout(this._hoverShowDelay),void(this._hoverShowDelay=null);if(this.state.show&&null==this._hoverHideDelay){var t=null!=this.props.delayHide?this.props.delayHide:this.props.delay;t?this._hoverHideDelay=setTimeout((function(){e._hoverHideDelay=null,e.hide()}),t):this.hide()}},r.handleDelayedShow=function(){var e=this;if(null!=this._hoverHideDelay)return clearTimeout(this._hoverHideDelay),void(this._hoverHideDelay=null);if(!this.state.show&&null==this._hoverShowDelay){var t=null!=this.props.delayShow?this.props.delayShow:this.props.delay;t?this._hoverShowDelay=setTimeout((function(){e._hoverShowDelay=null,e.show()}),t):this.show()}},r.handleHide=function(){this.hide()},r.handleMouseOverOut=function(e,t,n){var o=t.currentTarget,r=t.relatedTarget||t.nativeEvent[n];r&&r===o||Gn()(o,r)||e(t)},r.handleToggle=function(){this.state.show?this.hide():this.show()},r.hide=function(){this.setState({show:!1})},r.makeOverlay=function(e,t){return o().createElement(Ge,Ee({},t,{show:this.state.show,onHide:this.handleHide,target:this}),e)},r.show=function(){this.setState({show:!0})},r.renderOverlay=function(){jn().unstable_renderSubtreeIntoContainer(this,this._overlay,this._mountNode)},r.render=function(){var e=this.props,t=e.trigger,r=e.overlay,i=e.children,s=e.onBlur,a=e.onClick,l=e.onFocus,c=e.onMouseOut,d=e.onMouseOver,u=Ce(e,["trigger","overlay","children","onBlur","onClick","onFocus","onMouseOut","onMouseOver"]);delete u.delay,delete u.delayShow,delete u.delayHide,delete u.defaultOverlayShown;var h=o().Children.only(i),p=h.props,f={};return this.state.show&&(f["aria-describedby"]=r.props.id),f.onClick=Un(p.onClick,a),Vn("click",t)&&(f.onClick=Un(f.onClick,this.handleToggle)),Vn("hover",t)&&(f.onMouseOver=Un(p.onMouseOver,d,this.handleMouseOver),f.onMouseOut=Un(p.onMouseOut,c,this.handleMouseOut)),Vn("focus",t)&&(f.onFocus=Un(p.onFocus,l,this.handleDelayedShow),f.onBlur=Un(p.onBlur,s,this.handleDelayedHide)),this._overlay=this.makeOverlay(r,u),(0,n.cloneElement)(h,f)},t}(o().Component);Kn.propTypes=qn,Kn.defaultProps={defaultOverlayShown:!1,trigger:["hover","focus"]};const Yn=Kn;var Xn={id:je()(a().oneOfType([a().string,a().number])),placement:a().oneOf(["top","right","bottom","left"]),positionTop:a().oneOfType([a().number,a().string]),positionLeft:a().oneOfType([a().number,a().string]),arrowOffsetTop:a().oneOfType([a().number,a().string]),arrowOffsetLeft:a().oneOfType([a().number,a().string])},Qn=function(e){function t(){return e.apply(this,arguments)||this}return Re(t,e),t.prototype.render=function(){var e,t=this.props,n=t.placement,r=t.positionTop,i=t.positionLeft,s=t.arrowOffsetTop,a=t.arrowOffsetLeft,l=t.className,c=t.style,d=t.children,u=tt(Ce(t,["placement","positionTop","positionLeft","arrowOffsetTop","arrowOffsetLeft","className","style","children"])),h=u[0],p=u[1],f=Ee({},Je(h),((e={})[n]=!0,e)),m=Ee({top:r,left:i},c),g={top:s,left:a};return o().createElement("div",Ee({},p,{role:"tooltip",className:re()(l,f),style:m}),o().createElement("div",{className:Xe(h,"arrow"),style:g}),o().createElement("div",{className:Xe(h,"inner")},d))},t}(o().Component);Qn.propTypes=Xn,Qn.defaultProps={placement:"right"};const Jn=Qe("tooltip",Qn);var eo=function({classes:e=[],context:t,divStyle:n,height:r,size:i,url:s,width:a}){const l={...n,background:`url(${s}) 0% 0% / ${i}px no-repeat`,height:r||i,width:a||i},c=["avatar","content-box",...e].join(" ").trim();return o().createElement("div",{className:c,"data-test-class":"avatar","data-vscode-context":vn(t),style:l})};function to(e){switch(e){case"github":return"GitHub";case"githubEnterprise":return"GitHub Enterprise";case"gitlab":return"GitLab";case"gitlabSelfHosted":return"GitLab Self-Hosted";case"azureDevops":return"Azure DevOps";case"bitbucket":return"Bitbucket";case"bitbucketServer":return"Bitbucket Server";default:return e}}const no=(e,t,n)=>e?((e,t)=>o().createElement("span",{className:"ref-avatar mr1"},o().createElement(eo,{context:t,size:14,url:e})))(e,n):t;function oo({icon:e,tooltipClassName:t="",tooltipId:n,tooltipText:r}){return r&&n?o().createElement(Yn,{overlay:o().createElement(Jn,{className:re()("bs-tooltip",t),id:n},r),placement:"top",trigger:["hover","focus"]},e):o().createElement(o().Fragment,null," ",e," ")}function ro({hostingServiceType:e,icon:t,id:n,title:r}){return o().createElement(oo,{icon:t,tooltipClassName:"wide pull-left",tooltipId:`pr-tooltip-${e}-${n}`,tooltipText:r&&""!==r.trim()?`#${n}: ${r}\nDouble-click to open pull request on ${to(e)}`:""})}function io({icon:e,type:t,upstream:n,tooltipText:r}){return o().createElement(oo,{icon:e,tooltipClassName:"wide pull-left",tooltipId:`upstream-indicator-tooltip-${t}-${n}`,tooltipText:r})}function so({avatarUrl:e,context:t,icon:n,tooltipText:r}){return o().createElement(oo,{icon:no(e,n,t),tooltipId:`remote-icon-${r||"tooltipText"}`,tooltipText:r})}var ao=function({name:e}){return o().createElement("span",{className:"ref-name truncate",style:{height:18}},e)};function lo(e,t,n,r,i,s){const a=wn(r,e,t,pn);if(!a||0===a.length)return null;const l=a,c=[];for(let e=0;e<l.length;e+=1){const t=l[e],{context:a,hostingServiceType:d,id:u,title:h}=t,p={refId:r.id,type:pn,data:t},f=o().createElement("span",{className:re()("mr1","ref-pull-request"),"data-vscode-context":vn(a),onClick:e=>i(e,p),onDoubleClick:e=>s(e,p)},n("pull-request"));c.push(o().createElement(ro,{hostingServiceType:d,icon:f,id:u,title:h}))}return c}function co(e,t,n,r,i,s){const a=wn(r,e,t,fn);if(!a||0===a.ahead&&0===a.behind)return null;const l=a,c={refId:r.id,type:fn,data:l},d=l.ahead>0,u=l.behind>0,h=l.context;if(d||u){const e=d?`${l.ahead>99?"99+":l.ahead}`:"",t=u?`${l.behind>99?"99+":l.behind}`:"",r=`${l.owner}/${l.name}`;let a,p;return u&&d?(a=`${t} ${l.behind>1?"commits":"commit"} behind and ${e} ${l.ahead>1?"commits":"commit"} ahead of ${r}\nDouble-click to pull changes`,p="ahead-behind"):u?(a=`${t} ${l.behind>1?"commits":"commit"} behind ${r}\nDouble-click to pull changes`,p="behind"):d&&(a=`${e} ${l.ahead>1?"commits":"commit"} ahead of ${r}\nDouble-click to push changes`,p="ahead"),o().createElement(io,{icon:o().createElement("div",{className:"ref-upstream","data-vscode-context":vn(h),onClick:e=>i(e,c),onDoubleClick:e=>s(e,c)},u?o().createElement(o().Fragment,null,o().createElement("span",{className:"ref-upstream-behind"},t),n("upstream-behind")):null,d?o().createElement(o().Fragment,null,o().createElement("span",{className:"ref-upstream-ahead"},e),n("upstream-ahead")):null),tooltipText:a,type:p,upstream:r})}return null}function uo(e,t,n,r=0){const{refType:i,name:s}=t;let a,l,c="";switch(i){case gn.REMOTE:l=gn.REMOTE,a=t.avatarUrl,c=t.owner||"";break;case gn.TAG:l=gn.TAG,c=s||"";break;case gn.HEAD:default:l=gn.HEAD,c=n("Ref-Local")}const d=t.context||void 0,u=o().createElement("span",{className:re()("mr1"),"data-vscode-context":vn(d)},e(l));return o().createElement(so,{avatarUrl:a||"",context:d,icon:u,key:`ref-icon-${r}-${i}-${s}`,tooltipText:c})}function ho(e,t,n){let o,r=!1,i=!1,s=!1;for(const a of e){if(a.refType===gn.HEAD)return n?a.contextGroup||t:a.context;a.refType===gn.REMOTE&&("origin"===a.owner?(r=!0,o=n?a.contextGroup||t:a.context):r||"upstream"!==a.owner?r||i||(s=!0,o=n?a.contextGroup||t:a.context):(i=!0,o=n?a.contextGroup||t:a.context)),r||i||s||(o=n?a.contextGroup||t:a.context)}return o}class po extends o().PureComponent{onContextMenu=e=>{const{onContextMenu:t,refGroup:n,sha:o}=this.props;t(e,n,o)};onClick=e=>{const{onClick:t,refGroup:n,sha:o}=this.props;t(e,n,o)};onClickMetadata=(e,t)=>{e.stopPropagation();const{onClick:n,refGroup:o,sha:r}=this.props;n(e,o,r,t)};onDoubleClick=e=>{const{onDoubleClick:t,refGroup:n,sha:o}=this.props;t(e,n,o)};onDoubleClickMetadata=(e,t)=>{e.stopPropagation();const{onDoubleClick:n,refGroup:o,sha:r}=this.props;n(e,o,r,t)};render(){const{hasActive:e,hasRefs:t,getExternalIcon:n,groupIsHovered:r,isInUnsupportedRebase:i,isRefGroupIncluded:s,onMissingRefMetadata:a,refGroup:l,refGroupContext:c,refMetadata:d,onHovered:u,onHideRefClick:h,sha:p,enabledRefMetadataTypes:f,translate:m}=this.props,g=re()("ref-node-wrapper","flex"),b=re()("ref-node","flex","items-center","p1",{"has-active":e,"dim-ref":!t&&r,"is-active":e}),v=l.length?l[0].fullName||l[0].name:"",y=o().createElement(ao,{name:v}),w=[],x=[];let C=null;for(let e=0;e<l.length;e+=1){if(w.push(uo(n,l[e],m,e)),f.includes(pn)&&l[e].refType===gn.REMOTE){const t=lo(d,a,n,l[e],this.onClickMetadata,this.onDoubleClickMetadata);t&&x.push(...t)}f.includes(fn)&&l[e].refType===gn.HEAD&&(C=co(d,a,n,l[e],this.onClickMetadata,this.onDoubleClickMetadata))}const S=[...w,...x],k=l.some((e=>e.refType===gn.HEAD&&e.isCurrentHead)),T=!e||r&&!k?null:o().createElement(oo,{icon:o().createElement("span",{className:re()("mr1")},n("check")),tooltipId:"ref-icon-current",tooltipText:m("Ref-Current")}),R=ho(l,c),_=ho(l,c,!0),E=k||!r||s?null:o().createElement(oo,{icon:o().createElement("span",{className:re()("mr1","button"),onClick:e=>h(e,l,p)},n("hide")),tooltipId:`ref-node-toggle-visibility-btn-${v}`,tooltipText:m("Hide")});return o().createElement("span",{className:g,"data-vscode-context":vn(_),style:{minWidth:0,marginLeft:3,marginRight:3}},o().createElement("span",{className:b,"data-test-class":"ref-node-span","data-vscode-context":vn(R),onClick:this.onClick,onContextMenu:i?void 0:this.onContextMenu,onDoubleClick:i?void 0:this.onDoubleClick,onMouseEnter:e=>u(e,l,p),style:{height:22,minWidth:"100%"}},T,o().createElement("span",{className:"flex items-center"},S),y,C,o().createElement("span",{className:"flex ml-auto"},E)))}}class fo extends o().Component{constructor(e){super(e),this.state={showPopoverMenu:!1,refPopoverMenuTarget:void 0}}onHiddenRefsClick=e=>{const{showPopoverMenu:t}=this.state;this.setState({showPopoverMenu:!t,refPopoverMenuTarget:t?e.target:void 0})};onShowRefNodes=(e,t,n)=>{this.props.onToggleRefNodesShown(e,t,n),0===Object.keys(this.props.excludeRefsById).length&&this.onHiddenRefsClick(e)};compareGraphRefOpts(e,t){return e.name<t.name?-1:e.name>t.name?1:e.name===t.name&&e.type===gn.REMOTE?-1:0}render(){const{enableResizer:e,getExternalIcon:t,graphWidth:n,graphZones:r,graphZoneType:i,excludeRefsById:s,includeOnlyRefsById:a,isDraggable:l,onHover:c,onResize:d,onResizeEnd:u,onResizeFromPropChange:h,onResizeStart:p,onUnhover:f,showRemoteNamesOnRefs:m,translate:g}=this.props,{showPopoverMenu:b,refPopoverMenuTarget:v}=this.state,y=En(i,r);if(!y)return null;const w=Rn(i,r);let x=null,C=null;if(i===Kt){const e=Object.entries(s),n=Object.values(a),r=n.length>0,i=r&&n.some((e=>e.type===gn.TAG)),l=e.filter((e=>e[1].type===gn.TAG&&(!r||!i)||!a[e[0]]));l.length>0&&(C=l.sort(((e,t)=>this.compareGraphRefOpts(e[1],t[1]))).map(((e,n)=>{const r=e[0],i=e[1];s[r].id=r;const a={name:i.name,refType:i.type,owner:i.owner,avatarUrl:i.avatarUrl},l=!m&&"*"!==a.name||a.refType!==gn.REMOTE?a.name:`${a.owner}/${a.name}`;return o().createElement("li",{id:r,key:r,onClick:e=>this.onShowRefNodes(e,[s[r]],!0)},uo(t,a,g,n),o().createElement("span",{className:"text-ellipsis"},l))})),x=o().createElement("div",{className:re()("right","text-normal","button",b?"active":null)},o().createElement(oo,{icon:o().createElement("span",{onClick:this.onHiddenRefsClick},t("hide")),tooltipId:"header-ref-node-hidden-refs-btn",tooltipText:g("GraphHeader-HiddenRefs-btn")})))}const S=`${i}-header`,k=o().createElement("div",{onMouseEnter:c,onMouseLeave:f},x,o().createElement(Ge,{container:this,onHide:b?this.onHiddenRefsClick:void 0,placement:b?"bottom":void 0,rootClose:b,show:b,target:v},o().createElement(rt,{id:"opts-popover",style:{display:b?"block":"none"}},o().createElement("ul",null,C))),o().createElement("div",{className:"text-ellipsis font-monospace text-disabled"},o().createElement("span",{className:"ml1 fs-1"},g(y.headerLabelUntranslated)))),T=re()("panel-bg0","graph-header",{"is-draggable":l});return w?o().createElement("div",{className:T,id:S,key:S,style:{minWidth:y.currentWidth-4,transform:"translate3d(0, 0, 0)",zIndex:2}},k):o().createElement("div",{className:T,id:S,key:S,style:{display:"flex",minWidth:y.currentWidth,transform:"translate3d(0, 0, 0)",width:y.currentWidth,zIndex:2}},o().createElement(Pt,{className:T,enable:e,handleStyles:{right:{right:0}},height:22,onResize:d?e=>d(y,e):void 0,onResizeEnd:u?e=>u(y,e):void 0,onResizeFromPropChange:h?e=>h(y,e):void 0,onResizeStart:p?e=>p(y,e):void 0,resizeContentClassName:"z1",resizeEdge:"right",resizeHandleClassName:"z2 border-right",style:{display:"flex"},translate:g,width:y.currentWidth,widthConstraints:In(i,r,n)},k))}}const mo=fo;var go=r(977),bo=r.n(go);const vo="dnd-container";class yo extends o().PureComponent{dndDrake;childReactElementsById={};constructor(e){super(e),this.loadChildrenReactElements(this.props.children)}componentDidMount(){this.dndDrake&&this.dndDrake.on("drop",this.onDrop)}componentWillReceiveProps(e){this.props.children!==e.children&&this.loadChildrenReactElements(e.children)}componentWillUnmount(){this.dndDrake&&this.dndDrake.destroy()}onDrop=(e,t,n,o)=>{if(this.props.onDrop&&e.id){const t=this.sanitizeId(e.id),n=o&&o.id?this.sanitizeId(o.id):null,r=this.childReactElementsById[t],i=n?this.childReactElementsById[n]:null;r&&this.props.onDrop(r,i)}};isContainerCallback=e=>!!e?.classList.contains(vo);movesCallback=e=>!!e?.id&&this.isDraggable(e.id);acceptsCallback=(e,t,n,o)=>!!e?.id&&this.isDroppable(e.id,o?.id);invalidCallBack=()=>!1;dndDecorator=e=>{if(e){const t={isContainer:this.isContainerCallback,moves:this.movesCallback,accepts:this.acceptsCallback,invalid:this.invalidCallBack,direction:this.props.direction||"horizontal",copy:!1,copySortSource:!1,revertOnSpill:!1,removeOnSpill:!1,ignoreInputTextSelection:!0};this.dndDrake=bo()([e],t)}};loadChildrenReactElements(e){this.childReactElementsById={},e&&(e instanceof Array?e.forEach((e=>{o().isValidElement(e)&&this.addChildReactElement(e)})):o().isValidElement(e)&&this.addChildReactElement(e))}addChildReactElement(e){const t=e.props.id;t&&(this.childReactElementsById[this.sanitizeId(t)]=e)}sanitizeId(e){return e.trim().toLowerCase().replace(/-/g,"").replace(/_/g,"")}isDraggable(e){if(this.props.isDraggable){const t=this.sanitizeId(e),n=this.childReactElementsById[t];return!!n&&this.props.isDraggable(n)}return!1}isDroppable(e,t){if(this.props.isDroppable){const n=this.sanitizeId(e),o=t?this.sanitizeId(t):null,r=this.childReactElementsById[n],i=o?this.childReactElementsById[o]:null;if(r)return this.props.isDroppable(r,i)}return!1}render(){const{children:e,className:t}=this.props,n=re()(vo,t);return o().createElement("div",{className:n,ref:this.dndDecorator},e)}}var wo=yo;class xo extends o().PureComponent{canDrag=!1;isDraggable=e=>this.canDrag&&e.props.isDraggable;isDroppable=(e,t)=>e.props.graphZoneType!==t?.props?.graphZoneType&&(!t||t.props.isDroppable);onDrop=(e,t)=>{this.props.onColumnReOrdered&&this.props.onColumnReOrdered(e.props.graphZoneType,t?t.props.graphZoneType:null)};onZoneHover=()=>{this.canDrag=!0};onZoneUnHover=()=>{this.canDrag=!1};render(){const{context:e,enableResizer:t,getExternalIcon:n,excludeRefsById:r,includeOnlyRefsById:i,onPopupGraphHeaderContextMenu:s,onGraphZoneResize:a,onGraphZoneResizeEnd:l,onGraphZoneResizeFromPropChange:c,onToggleRefNodesShown:d,graphZones:u,repoPath:h,showRemoteNamesOnRefs:p,translate:f,width:m,height:g}=this.props,b=o().createElement("div",{className:"panel-bg0",style:{height:22,marginBottom:2,marginLeft:-7,minWidth:11}});return o().createElement("div",{className:"graph-header flex","data-vscode-context":vn(e),onContextMenu:s?()=>s(m):void 0,style:{height:22,marginBottom:2}},b,o().createElement(wo,{className:"flex",direction:"horizontal",isDraggable:this.isDraggable,isDroppable:this.isDroppable,onDrop:this.onDrop},u.map((e=>o().createElement(mo,{enableResizer:t,excludeRefsById:r,getExternalIcon:n,graphHeight:g,graphWidth:m,graphZones:u,graphZoneType:e.type,id:`${e.type}Header`,includeOnlyRefsById:i,isDraggable:e.isCustomizable,isDroppable:e.isCustomizable,key:`${e.type}Header`,onHover:this.onZoneHover,onResize:a,onResizeEnd:l,onResizeFromPropChange:c,onToggleRefNodesShown:d,onUnhover:this.onZoneUnHover,repoPath:h,showRemoteNamesOnRefs:p,translate:f})))))}}var Co=xo;function So(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ko(e){return ko="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ko(e)}function To(e){var t=function(e,t){if("object"!==ko(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==ko(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===ko(t)?t:String(t)}function Ro(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,To(o.key),o)}}function _o(e,t,n){return t&&Ro(e.prototype,t),n&&Ro(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Eo(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Oo(e,t){if(t&&("object"===ko(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Eo(e)}function Io(e){return Io=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Io(e)}function Mo(e,t){return Mo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Mo(e,t)}function Po(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Mo(e,t)}function zo(e,t,n){return(t=To(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $o=r(6871);function Ao(){return Ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ao.apply(this,arguments)}function Do(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Do(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}const No=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=Do(e))&&(o&&(o+=" "),o+=t);return o};function Lo(e){var t=e.cellCount,n=e.cellSize,o=e.computeMetadataCallback,r=e.computeMetadataCallbackProps,i=e.nextCellsCount,s=e.nextCellSize,a=e.nextScrollToIndex,l=e.scrollToIndex,c=e.updateScrollOffsetForScrollToIndex;t===i&&("number"!=typeof n&&"number"!=typeof s||n===s)||(o(r),l>=0&&l===a&&c())}function Ho(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Bo=function(){function e(t){var n=t.cellCount,o=t.cellSizeGetter,r=t.estimatedCellSize;So(this,e),zo(this,"_cellSizeAndPositionData",{}),zo(this,"_lastMeasuredIndex",-1),zo(this,"_lastBatchedIndex",-1),zo(this,"_cellCount",void 0),zo(this,"_cellSizeGetter",void 0),zo(this,"_estimatedCellSize",void 0),this._cellSizeGetter=o,this._cellCount=n,this._estimatedCellSize=r}return _o(e,[{key:"areOffsetsAdjusted",value:function(){return!1}},{key:"configure",value:function(e){var t=e.cellCount,n=e.estimatedCellSize,o=e.cellSizeGetter;this._cellCount=t,this._estimatedCellSize=n,this._cellSizeGetter=o}},{key:"getCellCount",value:function(){return this._cellCount}},{key:"getEstimatedCellSize",value:function(){return this._estimatedCellSize}},{key:"getLastMeasuredIndex",value:function(){return this._lastMeasuredIndex}},{key:"getOffsetAdjustment",value:function(){return 0}},{key:"getSizeAndPositionOfCell",value:function(e){if(e<0||e>=this._cellCount)throw Error("Requested index ".concat(e," is outside of range 0..").concat(this._cellCount));if(e>this._lastMeasuredIndex)for(var t=this.getSizeAndPositionOfLastMeasuredCell(),n=t.offset+t.size,o=this._lastMeasuredIndex+1;o<=e;o++){var r=this._cellSizeGetter({index:o});if(void 0===r||isNaN(r))throw Error("Invalid size returned for cell ".concat(o," of value ").concat(r));null===r?(this._cellSizeAndPositionData[o]={offset:n,size:0},this._lastBatchedIndex=e):(this._cellSizeAndPositionData[o]={offset:n,size:r},n+=r,this._lastMeasuredIndex=e)}return this._cellSizeAndPositionData[e]}},{key:"getSizeAndPositionOfLastMeasuredCell",value:function(){return this._lastMeasuredIndex>=0?this._cellSizeAndPositionData[this._lastMeasuredIndex]:{offset:0,size:0}}},{key:"getTotalSize",value:function(){var e=this.getSizeAndPositionOfLastMeasuredCell();return e.offset+e.size+(this._cellCount-this._lastMeasuredIndex-1)*this._estimatedCellSize}},{key:"getUpdatedOffsetForIndex",value:function(e){var t=e.align,n=void 0===t?"auto":t,o=e.containerSize,r=e.currentOffset,i=e.targetIndex;if(o<=0)return 0;var s,a=this.getSizeAndPositionOfCell(i),l=a.offset,c=l-o+a.size;switch(n){case"start":s=l;break;case"end":s=c;break;case"center":s=l-(o-a.size)/2;break;default:s=Math.max(c,Math.min(l,r))}var d=this.getTotalSize();return Math.max(0,Math.min(d-o,s))}},{key:"getVisibleCellRange",value:function(e){var t=e.containerSize,n=e.offset;if(0===this.getTotalSize())return{};var o=n+t,r=this._findNearestCell(n),i=this.getSizeAndPositionOfCell(r);n=i.offset+i.size;for(var s=r;n<o&&s<this._cellCount-1;)s++,n+=this.getSizeAndPositionOfCell(s).size;return{start:r,stop:s}}},{key:"resetCell",value:function(e){this._lastMeasuredIndex=Math.min(this._lastMeasuredIndex,e-1)}},{key:"_binarySearch",value:function(e,t,n){for(;t<=e;){var o=t+Math.floor((e-t)/2),r=this.getSizeAndPositionOfCell(o).offset;if(r===n)return o;r<n?t=o+1:r>n&&(e=o-1)}return t>0?t-1:0}},{key:"_exponentialSearch",value:function(e,t){for(var n=1;e<this._cellCount&&this.getSizeAndPositionOfCell(e).offset<t;)e+=n,n*=2;return this._binarySearch(Math.min(e,this._cellCount-1),Math.floor(e/2),t)}},{key:"_findNearestCell",value:function(e){if(isNaN(e))throw Error("Invalid offset ".concat(e," specified"));e=Math.max(0,e);var t=this.getSizeAndPositionOfLastMeasuredCell(),n=Math.max(0,this._lastMeasuredIndex);return t.offset>=e?this._binarySearch(n,0,e):this._exponentialSearch(n,e)}}]),e}(),Fo=function(){return"undefined"!=typeof window&&window.chrome?16777100:15e5},Go=function(){function e(t){var n=t.maxScrollSize,o=void 0===n?Fo():n,r=Ho(t,["maxScrollSize"]);So(this,e),zo(this,"_cellSizeAndPositionManager",void 0),zo(this,"_maxScrollSize",void 0),this._cellSizeAndPositionManager=new Bo(r),this._maxScrollSize=o}return _o(e,[{key:"areOffsetsAdjusted",value:function(){return this._cellSizeAndPositionManager.getTotalSize()>this._maxScrollSize}},{key:"configure",value:function(e){this._cellSizeAndPositionManager.configure(e)}},{key:"getCellCount",value:function(){return this._cellSizeAndPositionManager.getCellCount()}},{key:"getEstimatedCellSize",value:function(){return this._cellSizeAndPositionManager.getEstimatedCellSize()}},{key:"getLastMeasuredIndex",value:function(){return this._cellSizeAndPositionManager.getLastMeasuredIndex()}},{key:"getOffsetAdjustment",value:function(e){var t=e.containerSize,n=e.offset,o=this._cellSizeAndPositionManager.getTotalSize(),r=this.getTotalSize(),i=this._getOffsetPercentage({containerSize:t,offset:n,totalSize:r});return Math.round(i*(r-o))}},{key:"getSizeAndPositionOfCell",value:function(e){return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(e)}},{key:"getSizeAndPositionOfLastMeasuredCell",value:function(){return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell()}},{key:"getTotalSize",value:function(){return Math.min(this._maxScrollSize,this._cellSizeAndPositionManager.getTotalSize())}},{key:"getUpdatedOffsetForIndex",value:function(e){var t=e.align,n=void 0===t?"auto":t,o=e.containerSize,r=e.currentOffset,i=e.targetIndex;r=this._safeOffsetToOffset({containerSize:o,offset:r});var s=this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({align:n,containerSize:o,currentOffset:r,targetIndex:i});return this._offsetToSafeOffset({containerSize:o,offset:s})}},{key:"getVisibleCellRange",value:function(e){var t=e.containerSize,n=e.offset;return n=this._safeOffsetToOffset({containerSize:t,offset:n}),this._cellSizeAndPositionManager.getVisibleCellRange({containerSize:t,offset:n})}},{key:"resetCell",value:function(e){this._cellSizeAndPositionManager.resetCell(e)}},{key:"_getOffsetPercentage",value:function(e){var t=e.containerSize,n=e.offset,o=e.totalSize;return o<=t?0:n/(o-t)}},{key:"_offsetToSafeOffset",value:function(e){var t=e.containerSize,n=e.offset,o=this._cellSizeAndPositionManager.getTotalSize(),r=this.getTotalSize();if(o===r)return n;var i=this._getOffsetPercentage({containerSize:t,offset:n,totalSize:o});return Math.round(i*(r-t))}},{key:"_safeOffsetToOffset",value:function(e){var t=e.containerSize,n=e.offset,o=this._cellSizeAndPositionManager.getTotalSize(),r=this.getTotalSize();if(o===r)return n;var i=this._getOffsetPercentage({containerSize:t,offset:n,totalSize:r});return Math.round(i*(o-t))}}]),e}();function Wo(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t={};return function(n){var o=n.callback,r=n.indices,i=Object.keys(r),s=!e||i.every((function(e){var t=r[e];return Array.isArray(t)?t.length>0:t>=0})),a=i.length!==Object.keys(t).length||i.some((function(e){var n=t[e],o=r[e];return Array.isArray(o)?n.join(",")!==o.join(","):n!==o}));t=r,s&&a&&o(r)}}var jo=-1,Uo=1;function Vo(e){var t=e.cellSize,n=e.cellSizeAndPositionManager,o=e.previousCellsCount,r=e.previousCellSize,i=e.previousScrollToAlignment,s=e.previousScrollToIndex,a=e.previousSize,l=e.scrollOffset,c=e.scrollToAlignment,d=e.scrollToIndex,u=e.size,h=e.sizeJustIncreasedFromZero,p=e.updateScrollIndexCallback,f=n.getCellCount(),m=d>=0&&d<f;m&&(u!==a||h||!r||"number"==typeof t&&t!==r||c!==i||d!==s)?p(d):!m&&f>0&&(u<a||f<o)&&l>n.getTotalSize()-u&&p(f-1)}const Zo=!("undefined"==typeof window||!window.document||!window.document.createElement);var qo,Ko;function Yo(e){if((!qo&&0!==qo||e)&&Zo){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),qo=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return qo}var Xo,Qo,Jo=(Ko="undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).requestAnimationFrame||Ko.webkitRequestAnimationFrame||Ko.mozRequestAnimationFrame||Ko.oRequestAnimationFrame||Ko.msRequestAnimationFrame||function(e){return Ko.setTimeout(e,1e3/60)},er=Ko.cancelAnimationFrame||Ko.webkitCancelAnimationFrame||Ko.mozCancelAnimationFrame||Ko.oCancelAnimationFrame||Ko.msCancelAnimationFrame||function(e){Ko.clearTimeout(e)},tr=Jo,nr=er,or=function(e){return nr(e.id)},rr=function(e,t){var n;Promise.resolve().then((function(){n=Date.now()}));var o={id:tr((function r(){Date.now()-n>=t?e.call():o.id=tr(r)}))};return o};function ir(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function sr(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ir(n,!0).forEach((function(t){zo(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ir(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ar="requested",lr=(Qo=Xo=function(e){function t(e){var n;So(this,t),zo(Eo(n=Oo(this,Io(t).call(this,e))),"_onGridRenderedMemoizer",Wo()),zo(Eo(n),"_onScrollMemoizer",Wo(!1)),zo(Eo(n),"_deferredInvalidateColumnIndex",null),zo(Eo(n),"_deferredInvalidateRowIndex",null),zo(Eo(n),"_recomputeScrollLeftFlag",!1),zo(Eo(n),"_recomputeScrollTopFlag",!1),zo(Eo(n),"_horizontalScrollBarSize",0),zo(Eo(n),"_verticalScrollBarSize",0),zo(Eo(n),"_scrollbarPresenceChanged",!1),zo(Eo(n),"_scrollingContainer",void 0),zo(Eo(n),"_childrenToDisplay",void 0),zo(Eo(n),"_columnStartIndex",void 0),zo(Eo(n),"_columnStopIndex",void 0),zo(Eo(n),"_rowStartIndex",void 0),zo(Eo(n),"_rowStopIndex",void 0),zo(Eo(n),"_renderedColumnStartIndex",0),zo(Eo(n),"_renderedColumnStopIndex",0),zo(Eo(n),"_renderedRowStartIndex",0),zo(Eo(n),"_renderedRowStopIndex",0),zo(Eo(n),"_initialScrollTop",void 0),zo(Eo(n),"_initialScrollLeft",void 0),zo(Eo(n),"_disablePointerEventsTimeoutId",void 0),zo(Eo(n),"_styleCache",{}),zo(Eo(n),"_cellCache",{}),zo(Eo(n),"_debounceScrollEndedCallback",(function(){n._disablePointerEventsTimeoutId=null,n.setState({isScrolling:!1,needToResetStyleCache:!1})})),zo(Eo(n),"_invokeOnGridRenderedHelper",(function(){var e=n.props.onSectionRendered;n._onGridRenderedMemoizer({callback:e,indices:{columnOverscanStartIndex:n._columnStartIndex,columnOverscanStopIndex:n._columnStopIndex,columnStartIndex:n._renderedColumnStartIndex,columnStopIndex:n._renderedColumnStopIndex,rowOverscanStartIndex:n._rowStartIndex,rowOverscanStopIndex:n._rowStopIndex,rowStartIndex:n._renderedRowStartIndex,rowStopIndex:n._renderedRowStopIndex}})})),zo(Eo(n),"_onWheel",(function(e){var t=e.deltaX,o=e.deltaY;n.handleWheelEvent({deltaX:t,deltaY:o})})),zo(Eo(n),"_setScrollingContainerRef",(function(e){e&&(e.removeEventListener("wheel",n.preventDefault),e.addEventListener("wheel",n.preventDefault,{passive:!1})),n._scrollingContainer=e})),zo(Eo(n),"_onScroll",(function(e){e.target===n._scrollingContainer&&n.handleScrollEvent(e.target)}));var o=new Go({cellCount:e.columnCount,cellSizeGetter:function(n){return t._wrapSizeGetter(e.columnWidth)(n)},estimatedCellSize:t._getEstimatedColumnSize(e)}),r=new Go({cellCount:e.rowCount,cellSizeGetter:function(n){return t._wrapSizeGetter(e.rowHeight)(n)},estimatedCellSize:t._getEstimatedRowSize(e)});return n.state={instanceProps:{columnSizeAndPositionManager:o,rowSizeAndPositionManager:r,prevColumnWidth:e.columnWidth,prevRowHeight:e.rowHeight,prevColumnCount:e.columnCount,prevRowCount:e.rowCount,prevIsScrolling:!0===e.isScrolling,prevScrollToColumn:e.scrollToColumn,prevScrollToRow:e.scrollToRow,scrollbarSize:0,scrollbarSizeMeasured:!1},isScrolling:!1,scrollDirectionHorizontal:Uo,scrollDirectionVertical:Uo,scrollLeft:0,scrollTop:0,scrollPositionChangeReason:null,needToResetStyleCache:!1},e.scrollToRow>0&&(n._initialScrollTop=n._getCalculatedScrollTop(e,n.state)),e.scrollToColumn>0&&(n._initialScrollLeft=n._getCalculatedScrollLeft(e,n.state)),n}return Po(t,e),_o(t,[{key:"getOffsetForCell",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.alignment,n=void 0===t?this.props.scrollToAlignment:t,o=e.columnIndex,r=void 0===o?this.props.scrollToColumn:o,i=e.rowIndex,s=void 0===i?this.props.scrollToRow:i,a=sr({},this.props,{scrollToAlignment:n,scrollToColumn:r,scrollToRow:s});return{scrollLeft:this._getCalculatedScrollLeft(a),scrollTop:this._getCalculatedScrollTop(a)}}},{key:"getTotalRowsHeight",value:function(){return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize()}},{key:"getTotalColumnsWidth",value:function(){return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize()}},{key:"handleScrollEvent",value:function(e){var t=e.scrollLeft,n=void 0===t?0:t,o=e.scrollTop,r=void 0===o?0:o;if(!(r<0)){this._debounceScrollEnded();var i=this.props,s=i.autoHeight,a=i.autoWidth,l=i.height,c=i.width,d=this.state.instanceProps,u=d.scrollbarSize,h=d.rowSizeAndPositionManager.getTotalSize(),p=d.columnSizeAndPositionManager.getTotalSize(),f=Math.min(Math.max(0,p-c+u),n),m=Math.min(Math.max(0,h-l+u),r);if(this.state.scrollLeft!==f||this.state.scrollTop!==m){var g={isScrolling:!0,scrollDirectionHorizontal:f!==this.state.scrollLeft?f>this.state.scrollLeft?Uo:jo:this.state.scrollDirectionHorizontal,scrollDirectionVertical:m!==this.state.scrollTop?m>this.state.scrollTop?Uo:jo:this.state.scrollDirectionVertical,scrollPositionChangeReason:"observed"};s||(g.scrollTop=m),a||(g.scrollLeft=f),g.needToResetStyleCache=!1,this.setState(g)}this._invokeOnScrollMemoizer({scrollLeft:f,scrollTop:m,totalColumnsWidth:p,totalRowsHeight:h})}}},{key:"preventDefault",value:function(e){e.preventDefault()}},{key:"handleWheelEvent",value:function(e){var t=e.deltaX,n=e.deltaY;this._debounceScrollEnded();var o=this.props,r=o.autoHeight,i=o.autoWidth,s=o.height,a=o.width,l=this.state.instanceProps.scrollbarSize,c=this.state.instanceProps.rowSizeAndPositionManager.getTotalSize(),d=this.state.instanceProps.columnSizeAndPositionManager.getTotalSize(),u=Math.min(Math.max(0,d-a+l),Math.max(0,this._scrollingContainer.scrollLeft+t)),h=Math.min(Math.max(0,c-s+l),Math.max(0,this._scrollingContainer.scrollTop+n));if(this.state.scrollLeft!==u||this.state.scrollTop!==h){var p={isScrolling:!0,scrollDirectionHorizontal:u!==this.state.scrollLeft?u>this.state.scrollLeft?Uo:jo:this.state.scrollDirectionHorizontal,scrollDirectionVertical:h!==this.state.scrollTop?h>this.state.scrollTop?Uo:jo:this.state.scrollDirectionVertical,scrollPositionChangeReason:ar};r||(p.scrollTop=h),i||(p.scrollLeft=u),p.needToResetStyleCache=!1,this.setState(p)}this._invokeOnScrollMemoizer({scrollLeft:u,scrollTop:h,totalColumnsWidth:d,totalRowsHeight:c})}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.columnIndex,n=e.rowIndex;this._deferredInvalidateColumnIndex="number"==typeof this._deferredInvalidateColumnIndex?Math.min(this._deferredInvalidateColumnIndex,t):t,this._deferredInvalidateRowIndex="number"==typeof this._deferredInvalidateRowIndex?Math.min(this._deferredInvalidateRowIndex,n):n}},{key:"measureAllCells",value:function(){var e=this.props,t=e.columnCount,n=e.rowCount,o=this.state.instanceProps;o.columnSizeAndPositionManager.getSizeAndPositionOfCell(t-1),o.rowSizeAndPositionManager.getSizeAndPositionOfCell(n-1)}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,n=void 0===t?0:t,o=e.rowIndex,r=void 0===o?0:o,i=this.props,s=i.scrollToColumn,a=i.scrollToRow,l=this.state.instanceProps;l.columnSizeAndPositionManager.resetCell(n),l.rowSizeAndPositionManager.resetCell(r),this._recomputeScrollLeftFlag=s>=0&&(this.state.scrollDirectionHorizontal===Uo?n<=s:n>=s),this._recomputeScrollTopFlag=a>=0&&(this.state.scrollDirectionVertical===Uo?r<=a:r>=a),this._styleCache={},this._cellCache={},this.forceUpdate()}},{key:"scrollToCell",value:function(e){var t=e.columnIndex,n=e.rowIndex,o=this.props,r=o.columnCount,i=o.onScrollToTargetCausedUpdate,s=this.state,a=s.scrollLeft,l=s.scrollTop,c=this.props,d=this.state,u=void 0,h=void 0;if(r>1&&void 0!==t){var p=this._updateScrollLeftForScrollToColumn(sr({},c,{scrollToColumn:t}),d,!0);p&&"number"==typeof p.scrollLeft&&p.scrollLeft>=0&&(u=p.scrollLeft)}if(void 0!==n){var f=this._updateScrollTopForScrollToRow(sr({},c,{scrollToRow:n}),d,!0);f&&"number"==typeof f.scrollTop&&f.scrollTop>=0&&(h=f.scrollTop)}if(i&&("number"==typeof u||"number"==typeof h)){var m="number"!=typeof u?u:a,g="number"!=typeof h?h:l;i({clientHeight:c.height,clientWidth:c.width,scrollHeight:this.getTotalRowsHeight(),scrollLeft:m,scrollTop:g,scrollWidth:this.getTotalColumnsWidth()})}}},{key:"componentDidMount",value:function(){var e=this.props,n=e.getScrollbarSize,o=e.height,r=e.scrollLeft,i=e.scrollToColumn,s=e.scrollTop,a=e.scrollToRow,l=e.width,c=this.state.instanceProps;if(this._initialScrollTop=0,this._initialScrollLeft=0,this._handleInvalidatedGridSize(),c.scrollbarSizeMeasured||this.setState((function(e){var t=sr({},e,{needToResetStyleCache:!1});return t.instanceProps.scrollbarSize=n(),t.instanceProps.scrollbarSizeMeasured=!0,t})),"number"==typeof r&&r>=0||"number"==typeof s&&s>=0){var d=t._getScrollToPositionStateUpdate({prevState:this.state,scrollLeft:r,scrollTop:s});d&&(d.needToResetStyleCache=!1,this.setState(d))}this._scrollingContainer&&(this._scrollingContainer.scrollLeft!==this.state.scrollLeft&&(this._scrollingContainer.scrollLeft=this.state.scrollLeft),this._scrollingContainer.scrollTop!==this.state.scrollTop&&(this._scrollingContainer.scrollTop=this.state.scrollTop));var u=o>0&&l>0;i>=0&&u&&this._updateScrollLeftForScrollToColumn(),a>=0&&u&&this._updateScrollTopForScrollToRow(),this._invokeOnGridRenderedHelper(),this._invokeOnScrollMemoizer({scrollLeft:r||0,scrollTop:s||0,totalColumnsWidth:c.columnSizeAndPositionManager.getTotalSize(),totalRowsHeight:c.rowSizeAndPositionManager.getTotalSize()}),this._maybeCallOnScrollbarPresenceChange()}},{key:"componentDidUpdate",value:function(e,t){var n=this,o=this.props,r=o.autoHeight,i=o.autoWidth,s=o.columnCount,a=o.height,l=o.rowCount,c=o.scrollToAlignment,d=o.scrollToColumn,u=o.scrollToRow,h=o.width,p=this.state,f=p.scrollLeft,m=p.scrollPositionChangeReason,g=p.scrollTop,b=p.instanceProps;this._handleInvalidatedGridSize();var v=s>0&&0===e.columnCount||l>0&&0===e.rowCount;m===ar&&(!i&&f>=0&&(f!==this._scrollingContainer.scrollLeft||v)&&(this._scrollingContainer.scrollLeft=f),!r&&g>=0&&(g!==this._scrollingContainer.scrollTop||v)&&(this._scrollingContainer.scrollTop=g));var y=(0===e.width||0===e.height)&&a>0&&h>0;if(this._recomputeScrollLeftFlag?(this._recomputeScrollLeftFlag=!1,this._updateScrollLeftForScrollToColumn(this.props)):Vo({cellSizeAndPositionManager:b.columnSizeAndPositionManager,previousCellsCount:e.columnCount,previousCellSize:e.columnWidth,previousScrollToAlignment:e.scrollToAlignment,previousScrollToIndex:e.scrollToColumn,previousSize:e.width,scrollOffset:f,scrollToAlignment:c,scrollToIndex:d,size:h,sizeJustIncreasedFromZero:y,updateScrollIndexCallback:function(){return n._updateScrollLeftForScrollToColumn(n.props)}}),this._recomputeScrollTopFlag?(this._recomputeScrollTopFlag=!1,this._updateScrollTopForScrollToRow(this.props)):Vo({cellSizeAndPositionManager:b.rowSizeAndPositionManager,previousCellsCount:e.rowCount,previousCellSize:e.rowHeight,previousScrollToAlignment:e.scrollToAlignment,previousScrollToIndex:e.scrollToRow,previousSize:e.height,scrollOffset:g,scrollToAlignment:c,scrollToIndex:u,size:a,sizeJustIncreasedFromZero:y,updateScrollIndexCallback:function(){return n._updateScrollTopForScrollToRow(n.props)}}),this._invokeOnGridRenderedHelper(),f!==t.scrollLeft||g!==t.scrollTop){var w=b.rowSizeAndPositionManager.getTotalSize(),x=b.columnSizeAndPositionManager.getTotalSize();this._invokeOnScrollMemoizer({scrollLeft:f,scrollTop:g,totalColumnsWidth:x,totalRowsHeight:w})}this._maybeCallOnScrollbarPresenceChange()}},{key:"componentWillUnmount",value:function(){this._scrollingContainer&&this._scrollingContainer.removeEventListener("wheel",this.preventDefault),this._disablePointerEventsTimeoutId&&or(this._disablePointerEventsTimeoutId)}},{key:"render",value:function(){var e=this.props,t=e.autoContainerWidth,o=e.autoHeight,r=e.autoWidth,i=e.className,s=e.containerProps,a=e.containerRole,l=e.containerStyle,c=e.height,d=e.id,u=e.noContentRenderer,h=e.role,p=e.style,f=e.tabIndex,m=e.width,g=this.state,b=g.instanceProps,v=g.needToResetStyleCache,y=this._isScrolling(),w={boxSizing:"border-box",direction:"ltr",height:o?"auto":c,position:"relative",width:r?"auto":m,WebkitOverflowScrolling:"touch",willChange:"transform"};v&&(this._styleCache={}),this.state.isScrolling||this._resetStyleCache(),this._calculateChildrenToRender(this.props,this.state);var x=b.columnSizeAndPositionManager.getTotalSize(),C=b.rowSizeAndPositionManager.getTotalSize(),S=C>c?b.scrollbarSize:0,k=x>m?b.scrollbarSize:0;k===this._horizontalScrollBarSize&&S===this._verticalScrollBarSize||(this._horizontalScrollBarSize=k,this._verticalScrollBarSize=S,this._scrollbarPresenceChanged=!0),w.overflowX=x+S<=m?"hidden":"auto",w.overflowY=C+k<=c?"hidden":"auto";var T=this._childrenToDisplay,R=0===T.length&&c>0&&m>0;return n.createElement("div",Ao({ref:this._setScrollingContainerRef},s,{"aria-label":this.props["aria-label"],"aria-readonly":this.props["aria-readonly"],className:No("ReactVirtualized__Grid",i),id:d,onScroll:this._onScroll,onWheel:this._onWheel,role:h,style:sr({},w,{},p),tabIndex:f}),T.length>0&&n.createElement("div",{className:"ReactVirtualized__Grid__innerScrollContainer",role:a,style:sr({width:t?"auto":x,height:C,maxWidth:x,maxHeight:C,overflow:"hidden",pointerEvents:y?"none":"",position:"relative"},l)},T),R&&u())}},{key:"_calculateChildrenToRender",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,n=e.cellRenderer,o=e.cellRangeRenderer,r=e.columnCount,i=e.deferredMeasurementCache,s=e.height,a=e.overscanColumnCount,l=e.overscanIndicesGetter,c=e.overscanRowCount,d=e.rowCount,u=e.width,h=e.isScrollingOptOut,p=t.scrollDirectionHorizontal,f=t.scrollDirectionVertical,m=t.instanceProps,g=this._initialScrollTop>0?this._initialScrollTop:t.scrollTop,b=this._initialScrollLeft>0?this._initialScrollLeft:t.scrollLeft,v=this._isScrolling(e,t);if(this._childrenToDisplay=[],s>0&&u>0){var y=m.columnSizeAndPositionManager.getVisibleCellRange({containerSize:u,offset:b}),w=m.rowSizeAndPositionManager.getVisibleCellRange({containerSize:s,offset:g}),x=m.columnSizeAndPositionManager.getOffsetAdjustment({containerSize:u,offset:b}),C=m.rowSizeAndPositionManager.getOffsetAdjustment({containerSize:s,offset:g});this._renderedColumnStartIndex=y.start,this._renderedColumnStopIndex=y.stop,this._renderedRowStartIndex=w.start,this._renderedRowStopIndex=w.stop;var S=l({direction:"horizontal",cellCount:r,overscanCellsCount:a,scrollDirection:p,startIndex:"number"==typeof y.start?y.start:0,stopIndex:"number"==typeof y.stop?y.stop:-1}),k=l({direction:"vertical",cellCount:d,overscanCellsCount:c,scrollDirection:f,startIndex:"number"==typeof w.start?w.start:0,stopIndex:"number"==typeof w.stop?w.stop:-1}),T=S.overscanStartIndex,R=S.overscanStopIndex,_=k.overscanStartIndex,E=k.overscanStopIndex;if(i){if(!i.hasFixedHeight())for(var O=_;O<=E;O++)if(!i.has(O,0)){T=0,R=r-1;break}if(!i.hasFixedWidth())for(var I=T;I<=R;I++)if(!i.has(0,I)){_=0,E=d-1;break}}this._childrenToDisplay=o({cellCache:this._cellCache,cellRenderer:n,columnSizeAndPositionManager:m.columnSizeAndPositionManager,columnStartIndex:T,columnStopIndex:R,deferredMeasurementCache:i,horizontalOffsetAdjustment:x,isScrolling:v,isScrollingOptOut:h,parent:this,rowSizeAndPositionManager:m.rowSizeAndPositionManager,rowStartIndex:_,rowStopIndex:E,scrollLeft:b,scrollTop:g,styleCache:this._styleCache,verticalOffsetAdjustment:C,visibleColumnIndices:y,visibleRowIndices:w}),this._columnStartIndex=T,this._columnStopIndex=R,this._rowStartIndex=_,this._rowStopIndex=E}}},{key:"_debounceScrollEnded",value:function(){var e=this.props.scrollingResetTimeInterval;this._disablePointerEventsTimeoutId&&or(this._disablePointerEventsTimeoutId),this._disablePointerEventsTimeoutId=rr(this._debounceScrollEndedCallback,e)}},{key:"_handleInvalidatedGridSize",value:function(){if("number"==typeof this._deferredInvalidateColumnIndex&&"number"==typeof this._deferredInvalidateRowIndex){var e=this._deferredInvalidateColumnIndex,t=this._deferredInvalidateRowIndex;this._deferredInvalidateColumnIndex=null,this._deferredInvalidateRowIndex=null,this.recomputeGridSize({columnIndex:e,rowIndex:t})}}},{key:"_invokeOnScrollMemoizer",value:function(e){var t=this,n=e.scrollLeft,o=e.scrollTop,r=e.totalColumnsWidth,i=e.totalRowsHeight;this._onScrollMemoizer({callback:function(e){var n=e.scrollLeft,o=e.scrollTop,s=t.props,a=s.height;(0,s.onScroll)({clientHeight:a,clientWidth:s.width,scrollHeight:i,scrollLeft:n,scrollTop:o,scrollWidth:r})},indices:{scrollLeft:n,scrollTop:o}})}},{key:"_isScrolling",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;return Object.hasOwnProperty.call(e,"isScrolling")?Boolean(e.isScrolling):Boolean(t.isScrolling)}},{key:"_maybeCallOnScrollbarPresenceChange",value:function(){if(this._scrollbarPresenceChanged){var e=this.props.onScrollbarPresenceChange;this._scrollbarPresenceChanged=!1,e({horizontal:this._horizontalScrollBarSize>0,size:this.state.instanceProps.scrollbarSize,vertical:this._verticalScrollBarSize>0})}}},{key:"scrollToPosition",value:function(e){var n=e.scrollLeft,o=e.scrollTop,r=t._getScrollToPositionStateUpdate({prevState:this.state,scrollLeft:n,scrollTop:o});r&&(r.needToResetStyleCache=!1,this.setState(r))}},{key:"_getCalculatedScrollLeft",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;return t._getCalculatedScrollLeft(e,n)}},{key:"_updateScrollLeftForScrollToColumn",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t._getScrollLeftForScrollToColumnStateUpdate(e,n);if(r)return r.needToResetStyleCache=!1,this.setState(r),e.onScrollToTargetCausedUpdate&&!o&&e.onScrollToTargetCausedUpdate({clientHeight:e.height,clientWidth:e.width,scrollHeight:this.getTotalRowsHeight(),scrollLeft:r.scrollLeft,scrollTop:r.scrollTop,scrollWidth:this.getTotalColumnsWidth()}),r}},{key:"_getCalculatedScrollTop",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state;return t._getCalculatedScrollTop(e,n)}},{key:"_resetStyleCache",value:function(){var e=this._styleCache,t=this._cellCache,n=this.props.isScrollingOptOut;this._cellCache={},this._styleCache={};for(var o=this._rowStartIndex;o<=this._rowStopIndex;o++)for(var r=this._columnStartIndex;r<=this._columnStopIndex;r++){var i="".concat(o,"-").concat(r);this._styleCache[i]=e[i],n&&(this._cellCache[i]=t[i])}}},{key:"_updateScrollTopForScrollToRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t._getScrollTopForScrollToRowStateUpdate(e,n);if(r)return r.needToResetStyleCache=!1,this.setState(r),e.onScrollToTargetCausedUpdate&&!o&&e.onScrollToTargetCausedUpdate({clientHeight:e.height,clientWidth:e.width,scrollHeight:this.getTotalRowsHeight(),scrollLeft:r.scrollLeft,scrollTop:r.scrollTop,scrollWidth:this.getTotalColumnsWidth()}),r}}],[{key:"getDerivedStateFromProps",value:function(e,n){var o={};0===e.columnCount&&0!==n.scrollLeft||0===e.rowCount&&0!==n.scrollTop?(o.scrollLeft=0,o.scrollTop=0):(e.scrollLeft!==n.scrollLeft&&e.scrollToColumn<0||e.scrollTop!==n.scrollTop&&e.scrollToRow<0)&&Object.assign(o,t._getScrollToPositionStateUpdate({prevState:n,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}));var r,i,s=n.instanceProps;return o.needToResetStyleCache=!1,e.columnWidth===s.prevColumnWidth&&e.rowHeight===s.prevRowHeight||(o.needToResetStyleCache=!0),s.columnSizeAndPositionManager.configure({cellCount:e.columnCount,estimatedCellSize:t._getEstimatedColumnSize(e),cellSizeGetter:t._wrapSizeGetter(e.columnWidth)}),s.rowSizeAndPositionManager.configure({cellCount:e.rowCount,estimatedCellSize:t._getEstimatedRowSize(e),cellSizeGetter:t._wrapSizeGetter(e.rowHeight)}),0!==s.prevColumnCount&&0!==s.prevRowCount||(s.prevColumnCount=0,s.prevRowCount=0),e.autoHeight&&!1===e.isScrolling&&!0===s.prevIsScrolling&&Object.assign(o,{isScrolling:!1}),Lo({cellCount:s.prevColumnCount,cellSize:"number"==typeof s.prevColumnWidth?s.prevColumnWidth:null,computeMetadataCallback:function(){return s.columnSizeAndPositionManager.resetCell(0)},computeMetadataCallbackProps:e,nextCellsCount:e.columnCount,nextCellSize:"number"==typeof e.columnWidth?e.columnWidth:null,nextScrollToIndex:e.scrollToColumn,scrollToIndex:s.prevScrollToColumn,updateScrollOffsetForScrollToIndex:function(){r=t._getScrollLeftForScrollToColumnStateUpdate(e,n)}}),Lo({cellCount:s.prevRowCount,cellSize:"number"==typeof s.prevRowHeight?s.prevRowHeight:null,computeMetadataCallback:function(){return s.rowSizeAndPositionManager.resetCell(0)},computeMetadataCallbackProps:e,nextCellsCount:e.rowCount,nextCellSize:"number"==typeof e.rowHeight?e.rowHeight:null,nextScrollToIndex:e.scrollToRow,scrollToIndex:s.prevScrollToRow,updateScrollOffsetForScrollToIndex:function(){i=t._getScrollTopForScrollToRowStateUpdate(e,n)}}),s.prevColumnCount=e.columnCount,s.prevColumnWidth=e.columnWidth,s.prevIsScrolling=!0===e.isScrolling,s.prevRowCount=e.rowCount,s.prevRowHeight=e.rowHeight,s.prevScrollToColumn=e.scrollToColumn,s.prevScrollToRow=e.scrollToRow,s.scrollbarSize=e.getScrollbarSize(),void 0===s.scrollbarSize?(s.scrollbarSizeMeasured=!1,s.scrollbarSize=0):s.scrollbarSizeMeasured=!0,o.instanceProps=s,sr({},o,{},r,{},i)}},{key:"_getEstimatedColumnSize",value:function(e){return"number"==typeof e.columnWidth?e.columnWidth:e.estimatedColumnSize}},{key:"_getEstimatedRowSize",value:function(e){return"number"==typeof e.rowHeight?e.rowHeight:e.estimatedRowSize}},{key:"_getScrollToPositionStateUpdate",value:function(e){var t=e.prevState,n=e.scrollLeft,o=e.scrollTop,r={scrollPositionChangeReason:ar};return"number"==typeof n&&n>=0&&(r.scrollDirectionHorizontal=n>t.scrollLeft?Uo:jo,r.scrollLeft=n),"number"==typeof o&&o>=0&&(r.scrollDirectionVertical=o>t.scrollTop?Uo:jo,r.scrollTop=o),"number"==typeof n&&n>=0&&n!==t.scrollLeft||"number"==typeof o&&o>=0&&o!==t.scrollTop?r:{}}},{key:"_wrapSizeGetter",value:function(e){return"function"==typeof e?e:function(){return e}}},{key:"_getCalculatedScrollLeft",value:function(e,t){var n=e.columnCount,o=e.height,r=e.scrollToAlignment,i=e.scrollToColumn,s=e.width,a=t.scrollLeft,l=t.instanceProps;if(n>0){var c=n-1,d=i<0?c:Math.min(c,i),u=l.rowSizeAndPositionManager.getTotalSize(),h=l.scrollbarSizeMeasured&&u>o?l.scrollbarSize:0;return l.columnSizeAndPositionManager.getUpdatedOffsetForIndex({align:r,containerSize:s-h,currentOffset:a,targetIndex:d})}return 0}},{key:"_getScrollLeftForScrollToColumnStateUpdate",value:function(e,n){var o=n.scrollLeft,r=t._getCalculatedScrollLeft(e,n);return"number"==typeof r&&r>=0&&o!==r?t._getScrollToPositionStateUpdate({prevState:n,scrollLeft:r,scrollTop:-1}):{}}},{key:"_getCalculatedScrollTop",value:function(e,t){var n=e.height,o=e.rowCount,r=e.scrollToAlignment,i=e.scrollToRow,s=e.width,a=t.scrollTop,l=t.instanceProps;if(o>0){var c=o-1,d=i<0?c:Math.min(c,i),u=l.columnSizeAndPositionManager.getTotalSize(),h=l.scrollbarSizeMeasured&&u>s?l.scrollbarSize:0;return l.rowSizeAndPositionManager.getUpdatedOffsetForIndex({align:r,containerSize:n-h,currentOffset:a,targetIndex:d})}return 0}},{key:"_getScrollTopForScrollToRowStateUpdate",value:function(e,n){var o=n.scrollTop,r=t._getCalculatedScrollTop(e,n);return"number"==typeof r&&r>=0&&o!==r?t._getScrollToPositionStateUpdate({prevState:n,scrollLeft:-1,scrollTop:r}):{}}}]),t}(n.PureComponent),zo(Xo,"propTypes",null),Qo);zo(lr,"defaultProps",{"aria-label":"grid","aria-readonly":!0,autoContainerWidth:!1,autoHeight:!1,autoWidth:!1,cellRangeRenderer:function(e){for(var t=e.cellCache,n=e.cellRenderer,o=e.columnSizeAndPositionManager,r=e.columnStartIndex,i=e.columnStopIndex,s=e.deferredMeasurementCache,a=e.horizontalOffsetAdjustment,l=e.isScrolling,c=e.isScrollingOptOut,d=e.parent,u=e.rowSizeAndPositionManager,h=e.rowStartIndex,p=e.rowStopIndex,f=e.styleCache,m=e.verticalOffsetAdjustment,g=e.visibleColumnIndices,b=e.visibleRowIndices,v=[],y=o.areOffsetsAdjusted()||u.areOffsetsAdjusted(),w=!l&&!y,x=h;x<=p;x++)for(var C=u.getSizeAndPositionOfCell(x),S=r;S<=i;S++){var k=o.getSizeAndPositionOfCell(S),T=S>=g.start&&S<=g.stop&&x>=b.start&&x<=b.stop,R="".concat(x,"-").concat(S),_=void 0;w&&f[R]?_=f[R]:s&&!s.has(x,S)?_={height:"auto",left:0,position:"absolute",top:0,width:"auto"}:(_={height:C.size,left:k.offset+a,position:"absolute",top:C.offset+m,width:k.size},f[R]=_);var E={columnIndex:S,isScrolling:l,isVisible:T,key:R,parent:d,rowIndex:x,style:_},O=void 0;!c&&!l||a||m?O=n(E):(t[R]||(t[R]=n(E)),O=t[R]),null!=O&&!1!==O&&v.push(O)}return v},containerRole:"rowgroup",containerStyle:{},estimatedColumnSize:100,estimatedRowSize:30,getScrollbarSize:Yo,noContentRenderer:function(){return null},onScroll:function(){},onScrollbarPresenceChange:function(){},onSectionRendered:function(){},overscanColumnCount:0,overscanIndicesGetter:function(e){var t=e.cellCount,n=e.overscanCellsCount,o=e.scrollDirection,r=e.startIndex,i=e.stopIndex;return o===Uo?{overscanStartIndex:Math.max(0,r),overscanStopIndex:Math.min(t-1,i+n)}:{overscanStartIndex:Math.max(0,r-n),overscanStopIndex:Math.min(t-1,i)}},overscanRowCount:10,role:"grid",scrollingResetTimeInterval:150,scrollToAlignment:"auto",scrollToColumn:-1,scrollToRow:-1,style:{},tabIndex:0,isScrollingOptOut:!1}),(0,$o.polyfill)(lr);const cr=lr;var dr,ur,hr=1;function pr(e){var t=e.cellCount,n=e.overscanCellsCount,o=e.scrollDirection,r=e.startIndex,i=e.stopIndex;return n=Math.max(1,n),o===hr?{overscanStartIndex:Math.max(0,r-1),overscanStopIndex:Math.min(t-1,i+n)}:{overscanStartIndex:Math.max(0,r-n),overscanStopIndex:Math.min(t-1,i+1)}}function fr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var mr,gr,br=(ur=dr=function(e){function t(){var e,n;So(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return zo(Eo(n=Oo(this,(e=Io(t)).call.apply(e,[this].concat(r)))),"state",{scrollToColumn:0,scrollToRow:0,instanceProps:{prevScrollToColumn:0,prevScrollToRow:0}}),zo(Eo(n),"_columnStartIndex",0),zo(Eo(n),"_columnStopIndex",0),zo(Eo(n),"_rowStartIndex",0),zo(Eo(n),"_rowStopIndex",0),zo(Eo(n),"_onKeyDown",(function(e){var t=n.props,o=t.columnCount,r=t.disabled,i=t.mode,s=t.rowCount;if(!r){var a=n._getScrollState(),l=a.scrollToColumn,c=a.scrollToRow,d=n._getScrollState(),u=d.scrollToColumn,h=d.scrollToRow;switch(e.key){case"ArrowDown":h="cells"===i?Math.min(h+1,s-1):Math.min(n._rowStopIndex+1,s-1);break;case"ArrowLeft":u="cells"===i?Math.max(u-1,0):Math.max(n._columnStartIndex-1,0);break;case"ArrowRight":u="cells"===i?Math.min(u+1,o-1):Math.min(n._columnStopIndex+1,o-1);break;case"ArrowUp":h="cells"===i?Math.max(h-1,0):Math.max(n._rowStartIndex-1,0)}u===l&&h===c||(e.preventDefault(),n._updateScrollState({scrollToColumn:u,scrollToRow:h}))}})),zo(Eo(n),"_onSectionRendered",(function(e){var t=e.columnStartIndex,o=e.columnStopIndex,r=e.rowStartIndex,i=e.rowStopIndex;n._columnStartIndex=t,n._columnStopIndex=o,n._rowStartIndex=r,n._rowStopIndex=i})),n}return Po(t,e),_o(t,[{key:"setScrollIndexes",value:function(e){var t=e.scrollToColumn,n=e.scrollToRow;this.setState({scrollToRow:n,scrollToColumn:t})}},{key:"render",value:function(){var e=this.props,t=e.className,o=e.children,r=this._getScrollState(),i=r.scrollToColumn,s=r.scrollToRow;return n.createElement("div",{className:t,onKeyDown:this._onKeyDown},o({onSectionRendered:this._onSectionRendered,scrollToColumn:i,scrollToRow:s}))}},{key:"_getScrollState",value:function(){return this.props.isControlled?this.props:this.state}},{key:"_updateScrollState",value:function(e){var t=e.scrollToColumn,n=e.scrollToRow,o=this.props,r=o.isControlled,i=o.onScrollToChange;"function"==typeof i&&i({scrollToColumn:t,scrollToRow:n}),r||this.setState({scrollToColumn:t,scrollToRow:n})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.isControlled?{}:e.scrollToColumn!==t.instanceProps.prevScrollToColumn||e.scrollToRow!==t.instanceProps.prevScrollToRow?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fr(n,!0).forEach((function(t){zo(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fr(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{scrollToColumn:e.scrollToColumn,scrollToRow:e.scrollToRow,instanceProps:{prevScrollToColumn:e.scrollToColumn,prevScrollToRow:e.scrollToRow}}):{}}}]),t}(n.PureComponent),zo(dr,"propTypes",null),ur);function vr(e,t){var n,o=void 0!==(n=void 0!==t?t:"undefined"!=typeof window?window:"undefined"!=typeof self?self:r.g).document&&n.document.attachEvent;if(!o){var i=function(){var e=n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||function(e){return n.setTimeout(e,20)};return function(t){return e(t)}}(),s=function(){var e=n.cancelAnimationFrame||n.mozCancelAnimationFrame||n.webkitCancelAnimationFrame||n.clearTimeout;return function(t){return e(t)}}(),a=function(e){var t=e.__resizeTriggers__,n=t.firstElementChild,o=t.lastElementChild,r=n.firstElementChild;o.scrollLeft=o.scrollWidth,o.scrollTop=o.scrollHeight,r.style.width=n.offsetWidth+1+"px",r.style.height=n.offsetHeight+1+"px",n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight},l=function(e){if(!(e.target.className&&"function"==typeof e.target.className.indexOf&&e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var t=this;a(this),this.__resizeRAF__&&s(this.__resizeRAF__),this.__resizeRAF__=i((function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(n){n.call(t,e)})))}))}},c=!1,d="",u="animationstart",h="Webkit Moz O ms".split(" "),p="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),f=n.document.createElement("fakeelement");if(void 0!==f.style.animationName&&(c=!0),!1===c)for(var m=0;m<h.length;m++)if(void 0!==f.style[h[m]+"AnimationName"]){d="-"+h[m].toLowerCase()+"-",u=p[m],c=!0;break}var g="resizeanim",b="@"+d+"keyframes "+g+" { from { opacity: 0; } to { opacity: 0; } } ",v=d+"animation: 1ms "+g+"; "}return{addResizeListener:function(t,r){if(o)t.attachEvent("onresize",r);else{if(!t.__resizeTriggers__){var i=t.ownerDocument,s=n.getComputedStyle(t);s&&"static"==s.position&&(t.style.position="relative"),function(t){if(!t.getElementById("detectElementResize")){var n=(b||"")+".resize-triggers { "+(v||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',o=t.head||t.getElementsByTagName("head")[0],r=t.createElement("style");r.id="detectElementResize",r.type="text/css",null!=e&&r.setAttribute("nonce",e),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(t.createTextNode(n)),o.appendChild(r)}}(i),t.__resizeLast__={},t.__resizeListeners__=[],(t.__resizeTriggers__=i.createElement("div")).className="resize-triggers";var c='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';if(window.trustedTypes){var d=trustedTypes.createPolicy("react-virtualized-auto-sizer",{createHTML:function(){return c}});t.__resizeTriggers__.innerHTML=d.createHTML("")}else t.__resizeTriggers__.innerHTML=c;t.appendChild(t.__resizeTriggers__),a(t),t.addEventListener("scroll",l,!0),u&&(t.__resizeTriggers__.__animationListener__=function(e){e.animationName==g&&a(t)},t.__resizeTriggers__.addEventListener(u,t.__resizeTriggers__.__animationListener__))}t.__resizeListeners__.push(r)}},removeResizeListener:function(e,t){if(o)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",l,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(u,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(e){}}}}}function yr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function wr(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?yr(n,!0).forEach((function(t){zo(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yr(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}zo(br,"defaultProps",{disabled:!1,isControlled:!1,mode:"edges",scrollToColumn:0,scrollToRow:0}),(0,$o.polyfill)(br);var xr=(gr=mr=function(e){function t(){var e,n;So(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return zo(Eo(n=Oo(this,(e=Io(t)).call.apply(e,[this].concat(r)))),"state",{height:n.props.defaultHeight||0,width:n.props.defaultWidth||0}),zo(Eo(n),"_parentNode",void 0),zo(Eo(n),"_autoSizer",void 0),zo(Eo(n),"_window",void 0),zo(Eo(n),"_detectElementResize",void 0),zo(Eo(n),"_onResize",(function(){var e=n.props,t=e.disableHeight,o=e.disableWidth,r=e.onResize;if(n._parentNode){var i=n._parentNode.offsetHeight||0,s=n._parentNode.offsetWidth||0,a=(n._window||window).getComputedStyle(n._parentNode)||{},l=parseInt(a.paddingLeft,10)||0,c=parseInt(a.paddingRight,10)||0,d=parseInt(a.paddingTop,10)||0,u=parseInt(a.paddingBottom,10)||0,h=i-d-u,p=s-l-c;(!t&&n.state.height!==h||!o&&n.state.width!==p)&&(n.setState({height:i-d-u,width:s-l-c}),r({height:i,width:s}))}})),zo(Eo(n),"_setRef",(function(e){n._autoSizer=e})),n}return Po(t,e),_o(t,[{key:"componentDidMount",value:function(){var e=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._window=this._autoSizer.parentNode.ownerDocument.defaultView,this._detectElementResize=vr(e,this._window),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var e=this.props,t=e.children,o=e.className,r=e.disableHeight,i=e.disableWidth,s=e.style,a=this.state,l=a.height,c=a.width,d={overflow:"visible"},u={};return r||(d.height=0,u.height=l),i||(d.width=0,u.width=c),n.createElement("div",{className:o,ref:this._setRef,style:wr({},d,{},s)},t(u))}}]),t}(n.Component),zo(mr,"propTypes",null),gr);zo(xr,"defaultProps",{onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}});var Cr,Sr,kr=(Sr=Cr=function(e){function t(){var e,n;So(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return zo(Eo(n=Oo(this,(e=Io(t)).call.apply(e,[this].concat(r)))),"_child",void 0),zo(Eo(n),"_measure",(function(){var e=n.props,t=e.cache,o=e.columnIndex,r=void 0===o?0:o,i=e.parent,s=e.rowIndex,a=void 0===s?n.props.index||0:s,l=n._getCellMeasurements(),c=l.height,d=l.width;c===t.getHeight(a,r)&&d===t.getWidth(a,r)||(t.set(a,r,d,c),i&&"function"==typeof i.recomputeGridSize&&i.recomputeGridSize({columnIndex:r,rowIndex:a}))})),zo(Eo(n),"_registerChild",(function(e){e&&Element,n._child=e,e&&n._maybeMeasureCell()})),n}return Po(t,e),_o(t,[{key:"componentDidMount",value:function(){this._maybeMeasureCell()}},{key:"componentDidUpdate",value:function(){this._maybeMeasureCell()}},{key:"render",value:function(){var e=this.props.children;return"function"==typeof e?e({measure:this._measure,registerChild:this._registerChild}):e}},{key:"_getCellMeasurements",value:function(){var e=this.props.cache,t=this._child||(0,Wn.findDOMNode)(this);if(t&&t.ownerDocument&&t.ownerDocument.defaultView&&t instanceof t.ownerDocument.defaultView.HTMLElement){var n=t.style.width,o=t.style.height;e.hasFixedWidth()||(t.style.width="auto"),e.hasFixedHeight()||(t.style.height="auto");var r=Math.ceil(t.offsetHeight),i=Math.ceil(t.offsetWidth);return n&&(t.style.width=n),o&&(t.style.height=o),{height:r,width:i}}return{height:0,width:0}}},{key:"_maybeMeasureCell",value:function(){var e=this.props,t=e.cache,n=e.columnIndex,o=void 0===n?0:n,r=e.parent,i=e.rowIndex,s=void 0===i?this.props.index||0:i;if(!t.has(s,o)){var a=this._getCellMeasurements(),l=a.height,c=a.width;t.set(s,o,c,l),r&&"function"==typeof r.invalidateCellSizeAfterRender&&r.invalidateCellSizeAfterRender({columnIndex:o,rowIndex:s})}}}]),t}(n.PureComponent),zo(Cr,"propTypes",null),Sr);function Tr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Rr(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Tr(n,!0).forEach((function(t){zo(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tr(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}zo(kr,"__internalCellMeasurerFlag",!1);var _r={OBSERVED:"observed",REQUESTED:"requested"},Er=function(e){function t(){var e,n;So(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return zo(Eo(n=Oo(this,(e=Io(t)).call.apply(e,[this].concat(r)))),"state",{isScrolling:!1,scrollLeft:0,scrollTop:0}),zo(Eo(n),"_calculateSizeAndPositionDataOnNextUpdate",!1),zo(Eo(n),"_onSectionRenderedMemoizer",Wo()),zo(Eo(n),"_onScrollMemoizer",Wo(!1)),zo(Eo(n),"_invokeOnSectionRenderedHelper",(function(){var e=n.props,t=e.cellLayoutManager,o=e.onSectionRendered;n._onSectionRenderedMemoizer({callback:o,indices:{indices:t.getLastRenderedIndices()}})})),zo(Eo(n),"_setScrollingContainerRef",(function(e){n._scrollingContainer=e})),zo(Eo(n),"_updateScrollPositionForScrollToCell",(function(){var e=n.props,t=e.cellLayoutManager,o=e.height,r=e.scrollToAlignment,i=e.scrollToCell,s=e.width,a=n.state,l=a.scrollLeft,c=a.scrollTop;if(i>=0){var d=t.getScrollPositionForCell({align:r,cellIndex:i,height:o,scrollLeft:l,scrollTop:c,width:s});d.scrollLeft===l&&d.scrollTop===c||n._setScrollPosition(d)}})),zo(Eo(n),"_onScroll",(function(e){if(e.target===n._scrollingContainer){n._enablePointerEventsAfterDelay();var t=n.props,o=t.cellLayoutManager,r=t.height,i=t.isScrollingChange,s=t.width,a=n._scrollbarSize,l=o.getTotalSize(),c=l.height,d=l.width,u=Math.max(0,Math.min(d-s+a,e.target.scrollLeft)),h=Math.max(0,Math.min(c-r+a,e.target.scrollTop));if(n.state.scrollLeft!==u||n.state.scrollTop!==h){var p=e.cancelable?_r.OBSERVED:_r.REQUESTED;n.state.isScrolling||i(!0),n.setState({isScrolling:!0,scrollLeft:u,scrollPositionChangeReason:p,scrollTop:h})}n._invokeOnScrollMemoizer({scrollLeft:u,scrollTop:h,totalWidth:d,totalHeight:c})}})),n._scrollbarSize=Yo(),void 0===n._scrollbarSize?(n._scrollbarSizeMeasured=!1,n._scrollbarSize=0):n._scrollbarSizeMeasured=!0,n}return Po(t,e),_o(t,[{key:"recomputeCellSizesAndPositions",value:function(){this._calculateSizeAndPositionDataOnNextUpdate=!0,this.forceUpdate()}},{key:"componentDidMount",value:function(){var e=this.props,t=e.cellLayoutManager,n=e.scrollLeft,o=e.scrollToCell,r=e.scrollTop;this._scrollbarSizeMeasured||(this._scrollbarSize=Yo(),this._scrollbarSizeMeasured=!0,this.setState({})),o>=0?this._updateScrollPositionForScrollToCell():(n>=0||r>=0)&&this._setScrollPosition({scrollLeft:n,scrollTop:r}),this._invokeOnSectionRenderedHelper();var i=t.getTotalSize(),s=i.height,a=i.width;this._invokeOnScrollMemoizer({scrollLeft:n||0,scrollTop:r||0,totalHeight:s,totalWidth:a})}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,o=n.height,r=n.scrollToAlignment,i=n.scrollToCell,s=n.width,a=this.state,l=a.scrollLeft,c=a.scrollPositionChangeReason,d=a.scrollTop;c===_r.REQUESTED&&(l>=0&&l!==t.scrollLeft&&l!==this._scrollingContainer.scrollLeft&&(this._scrollingContainer.scrollLeft=l),d>=0&&d!==t.scrollTop&&d!==this._scrollingContainer.scrollTop&&(this._scrollingContainer.scrollTop=d)),o===e.height&&r===e.scrollToAlignment&&i===e.scrollToCell&&s===e.width||this._updateScrollPositionForScrollToCell(),this._invokeOnSectionRenderedHelper()}},{key:"componentWillUnmount",value:function(){this._disablePointerEventsTimeoutId&&clearTimeout(this._disablePointerEventsTimeoutId)}},{key:"render",value:function(){var e=this.props,t=e.autoHeight,o=e.cellCount,r=e.cellLayoutManager,i=e.className,s=e.height,a=e.horizontalOverscanSize,l=e.id,c=e.noContentRenderer,d=e.style,u=e.verticalOverscanSize,h=e.width,p=this.state,f=p.isScrolling,m=p.scrollLeft,g=p.scrollTop;(this._lastRenderedCellCount!==o||this._lastRenderedCellLayoutManager!==r||this._calculateSizeAndPositionDataOnNextUpdate)&&(this._lastRenderedCellCount=o,this._lastRenderedCellLayoutManager=r,this._calculateSizeAndPositionDataOnNextUpdate=!1,r.calculateSizeAndPositionData());var b=r.getTotalSize(),v=b.height,y=b.width,w=Math.max(0,m-a),x=Math.max(0,g-u),C=Math.min(y,m+h+a),S=Math.min(v,g+s+u),k=s>0&&h>0?r.cellRenderers({height:S-x,isScrolling:f,width:C-w,x:w,y:x}):[],T={boxSizing:"border-box",direction:"ltr",height:t?"auto":s,position:"relative",WebkitOverflowScrolling:"touch",width:h,willChange:"transform"},R=v>s?this._scrollbarSize:0,_=y>h?this._scrollbarSize:0;return T.overflowX=y+R<=h?"hidden":"auto",T.overflowY=v+_<=s?"hidden":"auto",n.createElement("div",{ref:this._setScrollingContainerRef,"aria-label":this.props["aria-label"],className:No("ReactVirtualized__Collection",i),id:l,onScroll:this._onScroll,role:"grid",style:Rr({},T,{},d),tabIndex:0},o>0&&n.createElement("div",{className:"ReactVirtualized__Collection__innerScrollContainer",style:{height:v,maxHeight:v,maxWidth:y,overflow:"hidden",pointerEvents:f?"none":"",width:y}},k),0===o&&c())}},{key:"_enablePointerEventsAfterDelay",value:function(){var e=this;this._disablePointerEventsTimeoutId&&clearTimeout(this._disablePointerEventsTimeoutId),this._disablePointerEventsTimeoutId=setTimeout((function(){(0,e.props.isScrollingChange)(!1),e._disablePointerEventsTimeoutId=null,e.setState({isScrolling:!1})}),150)}},{key:"_invokeOnScrollMemoizer",value:function(e){var t=this,n=e.scrollLeft,o=e.scrollTop,r=e.totalHeight,i=e.totalWidth;this._onScrollMemoizer({callback:function(e){var n=e.scrollLeft,o=e.scrollTop,s=t.props,a=s.height;(0,s.onScroll)({clientHeight:a,clientWidth:s.width,scrollHeight:r,scrollLeft:n,scrollTop:o,scrollWidth:i})},indices:{scrollLeft:n,scrollTop:o}})}},{key:"_setScrollPosition",value:function(e){var t=e.scrollLeft,n=e.scrollTop,o={scrollPositionChangeReason:_r.REQUESTED};t>=0&&(o.scrollLeft=t),n>=0&&(o.scrollTop=n),(t>=0&&t!==this.state.scrollLeft||n>=0&&n!==this.state.scrollTop)&&this.setState(o)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return 0!==e.cellCount||0===t.scrollLeft&&0===t.scrollTop?e.scrollLeft!==t.scrollLeft||e.scrollTop!==t.scrollTop?{scrollLeft:null!=e.scrollLeft?e.scrollLeft:t.scrollLeft,scrollTop:null!=e.scrollTop?e.scrollTop:t.scrollTop,scrollPositionChangeReason:_r.REQUESTED}:null:{scrollLeft:0,scrollTop:0,scrollPositionChangeReason:_r.REQUESTED}}}]),t}(n.PureComponent);zo(Er,"defaultProps",{"aria-label":"grid",horizontalOverscanSize:0,noContentRenderer:function(){return null},onScroll:function(){return null},onSectionRendered:function(){return null},scrollToAlignment:"auto",scrollToCell:-1,style:{},verticalOverscanSize:0}),Er.propTypes={},(0,$o.polyfill)(Er);const Or=Er;var Ir=function(){function e(t){var n=t.height,o=t.width,r=t.x,i=t.y;So(this,e),this.height=n,this.width=o,this.x=r,this.y=i,this._indexMap={},this._indices=[]}return _o(e,[{key:"addCellIndex",value:function(e){var t=e.index;this._indexMap[t]||(this._indexMap[t]=!0,this._indices.push(t))}},{key:"getCellIndices",value:function(){return this._indices}},{key:"toString",value:function(){return"".concat(this.x,",").concat(this.y," ").concat(this.width,"x").concat(this.height)}}]),e}(),Mr=100,Pr=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mr;So(this,e),this._sectionSize=t,this._cellMetadata=[],this._sections={}}return _o(e,[{key:"getCellIndices",value:function(e){var t=e.height,n=e.width,o=e.x,r=e.y,i={};return this.getSections({height:t,width:n,x:o,y:r}).forEach((function(e){return e.getCellIndices().forEach((function(e){i[e]=e}))})),Object.keys(i).map((function(e){return i[e]}))}},{key:"getCellMetadata",value:function(e){var t=e.index;return this._cellMetadata[t]}},{key:"getSections",value:function(e){for(var t=e.height,n=e.width,o=e.x,r=e.y,i=Math.floor(o/this._sectionSize),s=Math.floor((o+n-1)/this._sectionSize),a=Math.floor(r/this._sectionSize),l=Math.floor((r+t-1)/this._sectionSize),c=[],d=i;d<=s;d++)for(var u=a;u<=l;u++){var h="".concat(d,".").concat(u);this._sections[h]||(this._sections[h]=new Ir({height:this._sectionSize,width:this._sectionSize,x:d*this._sectionSize,y:u*this._sectionSize})),c.push(this._sections[h])}return c}},{key:"getTotalSectionCount",value:function(){return Object.keys(this._sections).length}},{key:"toString",value:function(){var e=this;return Object.keys(this._sections).map((function(t){return e._sections[t].toString()}))}},{key:"registerCell",value:function(e){var t=e.cellMetadatum,n=e.index;this._cellMetadata[n]=t,this.getSections(t).forEach((function(e){return e.addCellIndex({index:n})}))}}]),e}();function zr(e){var t=e.align,n=void 0===t?"auto":t,o=e.cellOffset,r=e.cellSize,i=e.containerSize,s=e.currentOffset,a=o,l=a-i+r;switch(n){case"start":return a;case"end":return l;case"center":return a-(i-r)/2;default:return Math.max(l,Math.min(a,s))}}var $r=function(e){function t(e,n){var o;return So(this,t),(o=Oo(this,Io(t).call(this,e,n)))._cellMetadata=[],o._lastRenderedCellIndices=[],o._cellCache=[],o._isScrollingChange=o._isScrollingChange.bind(Eo(o)),o._setCollectionViewRef=o._setCollectionViewRef.bind(Eo(o)),o}return Po(t,e),_o(t,[{key:"forceUpdate",value:function(){void 0!==this._collectionView&&this._collectionView.forceUpdate()}},{key:"recomputeCellSizesAndPositions",value:function(){this._cellCache=[],this._collectionView.recomputeCellSizesAndPositions()}},{key:"render",value:function(){var e=Ao({},this.props);return n.createElement(Or,Ao({cellLayoutManager:this,isScrollingChange:this._isScrollingChange,ref:this._setCollectionViewRef},e))}},{key:"calculateSizeAndPositionData",value:function(){var e=this.props,t=function(e){for(var t=e.cellCount,n=e.cellSizeAndPositionGetter,o=[],r=new Pr(e.sectionSize),i=0,s=0,a=0;a<t;a++){var l=n({index:a});if(null==l.height||isNaN(l.height)||null==l.width||isNaN(l.width)||null==l.x||isNaN(l.x)||null==l.y||isNaN(l.y))throw Error("Invalid metadata returned for cell ".concat(a,":\n        x:").concat(l.x,", y:").concat(l.y,", width:").concat(l.width,", height:").concat(l.height));i=Math.max(i,l.y+l.height),s=Math.max(s,l.x+l.width),o[a]=l,r.registerCell({cellMetadatum:l,index:a})}return{cellMetadata:o,height:i,sectionManager:r,width:s}}({cellCount:e.cellCount,cellSizeAndPositionGetter:e.cellSizeAndPositionGetter,sectionSize:e.sectionSize});this._cellMetadata=t.cellMetadata,this._sectionManager=t.sectionManager,this._height=t.height,this._width=t.width}},{key:"getLastRenderedIndices",value:function(){return this._lastRenderedCellIndices}},{key:"getScrollPositionForCell",value:function(e){var t=e.align,n=e.cellIndex,o=e.height,r=e.scrollLeft,i=e.scrollTop,s=e.width,a=this.props.cellCount;if(n>=0&&n<a){var l=this._cellMetadata[n];r=zr({align:t,cellOffset:l.x,cellSize:l.width,containerSize:s,currentOffset:r,targetIndex:n}),i=zr({align:t,cellOffset:l.y,cellSize:l.height,containerSize:o,currentOffset:i,targetIndex:n})}return{scrollLeft:r,scrollTop:i}}},{key:"getTotalSize",value:function(){return{height:this._height,width:this._width}}},{key:"cellRenderers",value:function(e){var t=this,n=e.height,o=e.isScrolling,r=e.width,i=e.x,s=e.y,a=this.props,l=a.cellGroupRenderer,c=a.cellRenderer;return this._lastRenderedCellIndices=this._sectionManager.getCellIndices({height:n,width:r,x:i,y:s}),l({cellCache:this._cellCache,cellRenderer:c,cellSizeAndPositionGetter:function(e){var n=e.index;return t._sectionManager.getCellMetadata({index:n})},indices:this._lastRenderedCellIndices,isScrolling:o})}},{key:"_isScrollingChange",value:function(e){e||(this._cellCache=[])}},{key:"_setCollectionViewRef",value:function(e){this._collectionView=e}}]),t}(n.PureComponent);function Ar(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function Dr(e,t){if(e){if("string"==typeof e)return Ar(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ar(e,t):void 0}}zo($r,"defaultProps",{"aria-label":"grid",cellGroupRenderer:function(e){var t=e.cellCache,n=e.cellRenderer,o=e.cellSizeAndPositionGetter,r=e.indices,i=e.isScrolling;return r.map((function(e){var r=o({index:e}),s={index:e,isScrolling:i,key:e,style:{height:r.height,left:r.x,position:"absolute",top:r.y,width:r.width}};return i?(e in t||(t[e]=n(s)),t[e]):n(s)})).filter((function(e){return!!e}))}}),$r.propTypes={},(function(e){function t(e,n){var o;return So(this,t),(o=Oo(this,Io(t).call(this,e,n)))._registerChild=o._registerChild.bind(Eo(o)),o}return Po(t,e),_o(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.columnMaxWidth,o=t.columnMinWidth,r=t.columnCount,i=t.width;n===e.columnMaxWidth&&o===e.columnMinWidth&&r===e.columnCount&&i===e.width||this._registeredChild&&this._registeredChild.recomputeGridSize()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.columnMaxWidth,o=e.columnMinWidth,r=e.columnCount,i=e.width,s=o||1,a=n?Math.min(n,i):i,l=i/r;return l=Math.max(s,l),l=Math.min(a,l),l=Math.floor(l),t({adjustedWidth:Math.min(i,l*r),columnWidth:l,getColumnWidth:function(){return l},registerChild:this._registerChild})}},{key:"_registerChild",value:function(e){if(e&&"function"!=typeof e.recomputeGridSize)throw Error("Unexpected child type registered; only Grid/MultiGrid children are supported.");this._registeredChild=e,this._registeredChild&&this._registeredChild.recomputeGridSize()}}]),t}(n.PureComponent)).propTypes={};var Nr=function(e){function t(e,n){var o;return So(this,t),(o=Oo(this,Io(t).call(this,e,n)))._loadMoreRowsMemoizer=Wo(),o._onRowsRendered=o._onRowsRendered.bind(Eo(o)),o._registerChild=o._registerChild.bind(Eo(o)),o}return Po(t,e),_o(t,[{key:"resetLoadMoreRowsCache",value:function(e){this._loadMoreRowsMemoizer=Wo(),e&&this._doStuff(this._lastRenderedStartIndex,this._lastRenderedStopIndex)}},{key:"render",value:function(){return(0,this.props.children)({onRowsRendered:this._onRowsRendered,registerChild:this._registerChild})}},{key:"_loadUnloadedRanges",value:function(e){var t=this,n=this.props.loadMoreRows;e.forEach((function(e){var o=n(e);o&&o.then((function(){var n;(n={lastRenderedStartIndex:t._lastRenderedStartIndex,lastRenderedStopIndex:t._lastRenderedStopIndex,startIndex:e.startIndex,stopIndex:e.stopIndex}).startIndex>n.lastRenderedStopIndex||n.stopIndex<n.lastRenderedStartIndex||t._registeredChild&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n="function"==typeof e.recomputeGridSize?e.recomputeGridSize:e.recomputeRowHeights;n?n.call(e,t):e.forceUpdate()}(t._registeredChild,t._lastRenderedStartIndex)}))}))}},{key:"_onRowsRendered",value:function(e){var t=e.startIndex,n=e.stopIndex;this._lastRenderedStartIndex=t,this._lastRenderedStopIndex=n,this._doStuff(t,n)}},{key:"_doStuff",value:function(e,t){var n,o=this,r=this.props,i=r.isRowLoaded,s=r.minimumBatchSize,a=r.rowCount,l=r.threshold,c=function(e){for(var t=e.isRowLoaded,n=e.minimumBatchSize,o=e.rowCount,r=e.stopIndex,i=[],s=null,a=null,l=e.startIndex;l<=r;l++)t({index:l})?null!==a&&(i.push({startIndex:s,stopIndex:a}),s=a=null):(a=l,null===s&&(s=l));if(null!==a){for(var c=Math.min(Math.max(a,s+n-1),o-1),d=a+1;d<=c&&!t({index:d});d++)a=d;i.push({startIndex:s,stopIndex:a})}if(i.length)for(var u=i[0];u.stopIndex-u.startIndex+1<n&&u.startIndex>0;){var h=u.startIndex-1;if(t({index:h}))break;u.startIndex=h}return i}({isRowLoaded:i,minimumBatchSize:s,rowCount:a,startIndex:Math.max(0,e-l),stopIndex:Math.min(a-1,t+l)}),d=(n=[]).concat.apply(n,function(e){return function(e){if(Array.isArray(e))return Ar(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Dr(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(c.map((function(e){return[e.startIndex,e.stopIndex]}))));this._loadMoreRowsMemoizer({callback:function(){o._loadUnloadedRanges(c)},indices:{squashedUnloadedRanges:d}})}},{key:"_registerChild",value:function(e){this._registeredChild=e}}]),t}(n.PureComponent);zo(Nr,"defaultProps",{minimumBatchSize:10,rowCount:0,threshold:15}),Nr.propTypes={};var Lr,Hr,Br=(Hr=Lr=function(e){function t(){var e,n;So(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return zo(Eo(n=Oo(this,(e=Io(t)).call.apply(e,[this].concat(r)))),"Grid",void 0),zo(Eo(n),"_cellRenderer",(function(e){var t=e.parent,o=e.rowIndex,r=e.style,i=e.isScrolling,s=e.isVisible,a=e.key,l=n.props.rowRenderer,c=Object.getOwnPropertyDescriptor(r,"width");return c&&c.writable&&(r.width="100%"),l({index:o,style:r,isScrolling:i,isVisible:s,key:a,parent:t})})),zo(Eo(n),"_setRef",(function(e){n.Grid=e})),zo(Eo(n),"_onScroll",(function(e){var t=e.clientHeight,o=e.scrollHeight,r=e.scrollTop;(0,n.props.onScroll)({clientHeight:t,scrollHeight:o,scrollTop:r})})),zo(Eo(n),"_onScrollToRowCausedUpdate",(function(e){var t=e.clientHeight,o=e.scrollHeight,r=e.scrollTop;(0,n.props.onScrollToRowCausedUpdate)({clientHeight:t,scrollHeight:o,scrollTop:r})})),zo(Eo(n),"_onSectionRendered",(function(e){var t=e.rowOverscanStartIndex,o=e.rowOverscanStopIndex,r=e.rowStartIndex,i=e.rowStopIndex;(0,n.props.onRowsRendered)({overscanStartIndex:t,overscanStopIndex:o,startIndex:r,stopIndex:i})})),n}return Po(t,e),_o(t,[{key:"forceUpdateGrid",value:function(){this.Grid&&this.Grid.forceUpdate()}},{key:"getOffsetForRow",value:function(e){var t=e.alignment,n=e.index;return this.Grid?this.Grid.getOffsetForCell({alignment:t,rowIndex:n,columnIndex:0}).scrollTop:0}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.columnIndex,n=e.rowIndex;this.Grid&&this.Grid.invalidateCellSizeAfterRender({rowIndex:n,columnIndex:t})}},{key:"measureAllRows",value:function(){this.Grid&&this.Grid.measureAllCells()}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,n=void 0===t?0:t,o=e.rowIndex,r=void 0===o?0:o;this.Grid&&this.Grid.recomputeGridSize({rowIndex:r,columnIndex:n})}},{key:"recomputeRowHeights",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.recomputeGridSize({rowIndex:e,columnIndex:0})}},{key:"scrollToPosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToPosition({scrollTop:e})}},{key:"scrollToRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToCell({columnIndex:0,rowIndex:e})}},{key:"render",value:function(){var e=this.props,t=e.className,o=e.noRowsRenderer,r=e.scrollToIndex,i=e.width,s=No("ReactVirtualized__List",t);return n.createElement(cr,Ao({},this.props,{autoContainerWidth:!0,cellRenderer:this._cellRenderer,className:s,columnWidth:i,columnCount:1,noContentRenderer:o,onScroll:this._onScroll,onScrollToTargetCausedUpdate:this._onScrollToRowCausedUpdate,onSectionRendered:this._onSectionRendered,ref:this._setRef,scrollToRow:r}))}}]),t}(n.PureComponent),zo(Lr,"propTypes",null),Hr);zo(Br,"defaultProps",{autoHeight:!1,estimatedRowSize:30,onScroll:function(){},onScrollToRowCausedUpdate:function(){},noRowsRenderer:function(){return null},onRowsRendered:function(){},overscanIndicesGetter:pr,overscanRowCount:10,scrollToAlignment:"auto",scrollToIndex:-1,style:{}});const Fr=function(e,t,n,o,r){return"function"==typeof n?function(e,t,n,o,r){for(var i=n+1;t<=n;){var s=t+n>>>1;r(e[s],o)>=0?(i=s,n=s-1):t=s+1}return i}(e,void 0===o?0:0|o,void 0===r?e.length-1:0|r,t,n):function(e,t,n,o){for(var r=n+1;t<=n;){var i=t+n>>>1;e[i]>=o?(r=i,n=i-1):t=i+1}return r}(e,void 0===n?0:0|n,void 0===o?e.length-1:0|o,t)};var Gr=0,Wr=1;function jr(e,t,n,o,r){this.mid=e,this.left=t,this.right=n,this.leftPoints=o,this.rightPoints=r,this.count=(t?t.count:0)+(n?n.count:0)+o.length}var Ur=jr.prototype;function Vr(e,t){e.mid=t.mid,e.left=t.left,e.right=t.right,e.leftPoints=t.leftPoints,e.rightPoints=t.rightPoints,e.count=t.count}function Zr(e,t){var n=ni(t);e.mid=n.mid,e.left=n.left,e.right=n.right,e.leftPoints=n.leftPoints,e.rightPoints=n.rightPoints,e.count=n.count}function qr(e,t){var n=e.intervals([]);n.push(t),Zr(e,n)}function Kr(e,t){var n=e.intervals([]),o=n.indexOf(t);return o<0?Gr:(n.splice(o,1),Zr(e,n),Wr)}function Yr(e,t,n){for(var o=0;o<e.length&&e[o][0]<=t;++o){var r=n(e[o]);if(r)return r}}function Xr(e,t,n){for(var o=e.length-1;o>=0&&e[o][1]>=t;--o){var r=n(e[o]);if(r)return r}}function Qr(e,t){for(var n=0;n<e.length;++n){var o=t(e[n]);if(o)return o}}function Jr(e,t){return e-t}function ei(e,t){return e[0]-t[0]||e[1]-t[1]}function ti(e,t){return e[1]-t[1]||e[0]-t[0]}function ni(e){if(0===e.length)return null;for(var t=[],n=0;n<e.length;++n)t.push(e[n][0],e[n][1]);t.sort(Jr);var o=t[t.length>>1],r=[],i=[],s=[];for(n=0;n<e.length;++n){var a=e[n];a[1]<o?r.push(a):o<a[0]?i.push(a):s.push(a)}var l=s,c=s.slice();return l.sort(ei),c.sort(ti),new jr(o,ni(r),ni(i),l,c)}function oi(e){this.root=e}Ur.intervals=function(e){return e.push.apply(e,this.leftPoints),this.left&&this.left.intervals(e),this.right&&this.right.intervals(e),e},Ur.insert=function(e){var t=this.count-this.leftPoints.length;if(this.count+=1,e[1]<this.mid)this.left?4*(this.left.count+1)>3*(t+1)?qr(this,e):this.left.insert(e):this.left=ni([e]);else if(e[0]>this.mid)this.right?4*(this.right.count+1)>3*(t+1)?qr(this,e):this.right.insert(e):this.right=ni([e]);else{var n=Fr(this.leftPoints,e,ei),o=Fr(this.rightPoints,e,ti);this.leftPoints.splice(n,0,e),this.rightPoints.splice(o,0,e)}},Ur.remove=function(e){var t=this.count-this.leftPoints;if(e[1]<this.mid)return this.left?4*(this.right?this.right.count:0)>3*(t-1)?Kr(this,e):2===(i=this.left.remove(e))?(this.left=null,this.count-=1,Wr):(i===Wr&&(this.count-=1),i):Gr;if(e[0]>this.mid)return this.right?4*(this.left?this.left.count:0)>3*(t-1)?Kr(this,e):2===(i=this.right.remove(e))?(this.right=null,this.count-=1,Wr):(i===Wr&&(this.count-=1),i):Gr;if(1===this.count)return this.leftPoints[0]===e?2:Gr;if(1===this.leftPoints.length&&this.leftPoints[0]===e){if(this.left&&this.right){for(var n=this,o=this.left;o.right;)n=o,o=o.right;if(n===this)o.right=this.right;else{var r=this.left,i=this.right;n.count-=o.count,n.right=o.left,o.left=r,o.right=i}Vr(this,o),this.count=(this.left?this.left.count:0)+(this.right?this.right.count:0)+this.leftPoints.length}else this.left?Vr(this,this.left):Vr(this,this.right);return Wr}for(r=Fr(this.leftPoints,e,ei);r<this.leftPoints.length&&this.leftPoints[r][0]===e[0];++r)if(this.leftPoints[r]===e)for(this.count-=1,this.leftPoints.splice(r,1),i=Fr(this.rightPoints,e,ti);i<this.rightPoints.length&&this.rightPoints[i][1]===e[1];++i)if(this.rightPoints[i]===e)return this.rightPoints.splice(i,1),Wr;return Gr},Ur.queryPoint=function(e,t){return e<this.mid?this.left&&(n=this.left.queryPoint(e,t))?n:Yr(this.leftPoints,e,t):e>this.mid?this.right&&(n=this.right.queryPoint(e,t))?n:Xr(this.rightPoints,e,t):Qr(this.leftPoints,t);var n},Ur.queryInterval=function(e,t,n){var o;return e<this.mid&&this.left&&(o=this.left.queryInterval(e,t,n))||t>this.mid&&this.right&&(o=this.right.queryInterval(e,t,n))?o:t<this.mid?Yr(this.leftPoints,t,n):e>this.mid?Xr(this.rightPoints,e,n):Qr(this.leftPoints,n)};var ri=oi.prototype;ri.insert=function(e){this.root?this.root.insert(e):this.root=new jr(e[0],null,null,[e],[e])},ri.remove=function(e){if(this.root){var t=this.root.remove(e);return 2===t&&(this.root=null),t!==Gr}return!1},ri.queryPoint=function(e,t){if(this.root)return this.root.queryPoint(e,t)},ri.queryInterval=function(e,t,n){if(e<=t&&this.root)return this.root.queryInterval(e,t,n)},Object.defineProperty(ri,"count",{get:function(){return this.root?this.root.count:0}}),Object.defineProperty(ri,"intervals",{get:function(){return this.root?this.root.intervals([]):[]}});var ii,si,ai=function(){function e(){So(this,e),zo(this,"_columnSizeMap",{}),zo(this,"_intervalTree",new oi(null)),zo(this,"_leftMap",{})}return _o(e,[{key:"estimateTotalHeight",value:function(e,t,n){var o=e-this.count;return this.tallestColumnSize+Math.ceil(o/t)*n}},{key:"range",value:function(e,t,n){var o=this;this._intervalTree.queryInterval(e,e+t,(function(e){var t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i,s,a=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(o=i.call(n)).done)&&(a.push(o.value),a.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{if(!l&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw r}}return a}}(e,t)||Dr(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,3),r=t[0],i=(t[1],t[2]);return n(i,o._leftMap[i],r)}))}},{key:"setPosition",value:function(e,t,n,o){this._intervalTree.insert([n,n+o,e]),this._leftMap[e]=t;var r=this._columnSizeMap,i=r[t];r[t]=void 0===i?n+o:Math.max(i,n+o)}},{key:"count",get:function(){return this._intervalTree.count}},{key:"shortestColumnSize",get:function(){var e=this._columnSizeMap,t=0;for(var n in e){var o=e[n];t=0===t?o:Math.min(t,o)}return t}},{key:"tallestColumnSize",get:function(){var e=this._columnSizeMap,t=0;for(var n in e){var o=e[n];t=Math.max(t,o)}return t}}]),e}();function li(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function ci(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?li(n,!0).forEach((function(t){zo(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):li(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var di=(si=ii=function(e){function t(){var e,n;So(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return zo(Eo(n=Oo(this,(e=Io(t)).call.apply(e,[this].concat(r)))),"state",{isScrolling:!1,scrollTop:0}),zo(Eo(n),"_debounceResetIsScrollingId",void 0),zo(Eo(n),"_invalidateOnUpdateStartIndex",null),zo(Eo(n),"_invalidateOnUpdateStopIndex",null),zo(Eo(n),"_positionCache",new ai),zo(Eo(n),"_startIndex",null),zo(Eo(n),"_startIndexMemoized",null),zo(Eo(n),"_stopIndex",null),zo(Eo(n),"_stopIndexMemoized",null),zo(Eo(n),"_debounceResetIsScrollingCallback",(function(){n.setState({isScrolling:!1})})),zo(Eo(n),"_setScrollingContainerRef",(function(e){n._scrollingContainer=e})),zo(Eo(n),"_onScroll",(function(e){var t=n.props.height,o=e.currentTarget.scrollTop,r=Math.min(Math.max(0,n._getEstimatedTotalHeight()-t),o);o===r&&(n._debounceResetIsScrolling(),n.state.scrollTop!==r&&n.setState({isScrolling:!0,scrollTop:r}))})),n}return Po(t,e),_o(t,[{key:"clearCellPositions",value:function(){this._positionCache=new ai,this.forceUpdate()}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.rowIndex;null===this._invalidateOnUpdateStartIndex?(this._invalidateOnUpdateStartIndex=t,this._invalidateOnUpdateStopIndex=t):(this._invalidateOnUpdateStartIndex=Math.min(this._invalidateOnUpdateStartIndex,t),this._invalidateOnUpdateStopIndex=Math.max(this._invalidateOnUpdateStopIndex,t))}},{key:"recomputeCellPositions",value:function(){var e=this._positionCache.count-1;this._positionCache=new ai,this._populatePositionCache(0,e),this.forceUpdate()}},{key:"componentDidMount",value:function(){this._checkInvalidateOnUpdate(),this._invokeOnScrollCallback(),this._invokeOnCellsRenderedCallback()}},{key:"componentDidUpdate",value:function(e,t){this._checkInvalidateOnUpdate(),this._invokeOnScrollCallback(),this._invokeOnCellsRenderedCallback(),this.props.scrollTop!==e.scrollTop&&this._debounceResetIsScrolling()}},{key:"componentWillUnmount",value:function(){this._debounceResetIsScrollingId&&or(this._debounceResetIsScrollingId)}},{key:"render",value:function(){var e,t=this,o=this.props,r=o.autoHeight,i=o.cellCount,s=o.cellMeasurerCache,a=o.cellRenderer,l=o.className,c=o.height,d=o.id,u=o.keyMapper,h=o.overscanByPixels,p=o.role,f=o.style,m=o.tabIndex,g=o.width,b=o.rowDirection,v=this.state,y=v.isScrolling,w=v.scrollTop,x=[],C=this._getEstimatedTotalHeight(),S=this._positionCache.shortestColumnSize,k=this._positionCache.count,T=0;if(this._positionCache.range(Math.max(0,w-h),c+2*h,(function(n,o,r){var i;void 0===e?(T=n,e=n):(T=Math.min(T,n),e=Math.max(e,n)),x.push(a({index:n,isScrolling:y,key:u(n),parent:t,style:(i={height:s.getHeight(n)},zo(i,"ltr"===b?"left":"right",o),zo(i,"position","absolute"),zo(i,"top",r),zo(i,"width",s.getWidth(n)),i)}))})),S<w+c+h&&k<i)for(var R=Math.min(i-k,Math.ceil((w+c+h-S)/s.defaultHeight*g/s.defaultWidth)),_=k;_<k+R;_++)e=_,x.push(a({index:_,isScrolling:y,key:u(_),parent:this,style:{width:s.getWidth(_)}}));return this._startIndex=T,this._stopIndex=e,n.createElement("div",{ref:this._setScrollingContainerRef,"aria-label":this.props["aria-label"],className:No("ReactVirtualized__Masonry",l),id:d,onScroll:this._onScroll,role:p,style:ci({boxSizing:"border-box",direction:"ltr",height:r?"auto":c,overflowX:"hidden",overflowY:C<c?"hidden":"auto",position:"relative",width:g,WebkitOverflowScrolling:"touch",willChange:"transform"},f),tabIndex:m},n.createElement("div",{className:"ReactVirtualized__Masonry__innerScrollContainer",style:{width:"100%",height:C,maxWidth:"100%",maxHeight:C,overflow:"hidden",pointerEvents:y?"none":"",position:"relative"}},x))}},{key:"_checkInvalidateOnUpdate",value:function(){if("number"==typeof this._invalidateOnUpdateStartIndex){var e=this._invalidateOnUpdateStartIndex,t=this._invalidateOnUpdateStopIndex;this._invalidateOnUpdateStartIndex=null,this._invalidateOnUpdateStopIndex=null,this._populatePositionCache(e,t),this.forceUpdate()}}},{key:"_debounceResetIsScrolling",value:function(){var e=this.props.scrollingResetTimeInterval;this._debounceResetIsScrollingId&&or(this._debounceResetIsScrollingId),this._debounceResetIsScrollingId=rr(this._debounceResetIsScrollingCallback,e)}},{key:"_getEstimatedTotalHeight",value:function(){var e=this.props,t=e.cellCount,n=e.cellMeasurerCache,o=e.width,r=Math.max(1,Math.floor(o/n.defaultWidth));return this._positionCache.estimateTotalHeight(t,r,n.defaultHeight)}},{key:"_invokeOnScrollCallback",value:function(){var e=this.props,t=e.height,n=e.onScroll,o=this.state.scrollTop;this._onScrollMemoized!==o&&(n({clientHeight:t,scrollHeight:this._getEstimatedTotalHeight(),scrollTop:o}),this._onScrollMemoized=o)}},{key:"_invokeOnCellsRenderedCallback",value:function(){this._startIndexMemoized===this._startIndex&&this._stopIndexMemoized===this._stopIndex||((0,this.props.onCellsRendered)({startIndex:this._startIndex,stopIndex:this._stopIndex}),this._startIndexMemoized=this._startIndex,this._stopIndexMemoized=this._stopIndex)}},{key:"_populatePositionCache",value:function(e,t){for(var n=this.props,o=n.cellMeasurerCache,r=n.cellPositioner,i=e;i<=t;i++){var s=r(i),a=s.left,l=s.top;this._positionCache.setPosition(i,a,l,o.getHeight(i))}}}],[{key:"getDerivedStateFromProps",value:function(e,t){return void 0!==e.scrollTop&&t.scrollTop!==e.scrollTop?{isScrolling:!0,scrollTop:e.scrollTop}:null}}]),t}(n.PureComponent),zo(ii,"propTypes",null),si);function ui(){}zo(di,"defaultProps",{autoHeight:!1,keyMapper:function(e){return e},onCellsRendered:ui,onScroll:ui,overscanByPixels:20,role:"grid",scrollingResetTimeInterval:150,style:{},tabIndex:0,rowDirection:"ltr"}),(0,$o.polyfill)(di);var hi=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};So(this,e),zo(this,"_cellMeasurerCache",void 0),zo(this,"_columnIndexOffset",void 0),zo(this,"_rowIndexOffset",void 0),zo(this,"columnWidth",(function(e){var n=e.index;t._cellMeasurerCache.columnWidth({index:n+t._columnIndexOffset})})),zo(this,"rowHeight",(function(e){var n=e.index;t._cellMeasurerCache.rowHeight({index:n+t._rowIndexOffset})}));var o=n.cellMeasurerCache,r=n.columnIndexOffset,i=void 0===r?0:r,s=n.rowIndexOffset,a=void 0===s?0:s;this._cellMeasurerCache=o,this._columnIndexOffset=i,this._rowIndexOffset=a}return _o(e,[{key:"clear",value:function(e,t){this._cellMeasurerCache.clear(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"clearAll",value:function(){this._cellMeasurerCache.clearAll()}},{key:"hasFixedHeight",value:function(){return this._cellMeasurerCache.hasFixedHeight()}},{key:"hasFixedWidth",value:function(){return this._cellMeasurerCache.hasFixedWidth()}},{key:"getHeight",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._cellMeasurerCache.getHeight(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"getWidth",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._cellMeasurerCache.getWidth(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"has",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this._cellMeasurerCache.has(e+this._rowIndexOffset,t+this._columnIndexOffset)}},{key:"set",value:function(e,t,n,o){this._cellMeasurerCache.set(e+this._rowIndexOffset,t+this._columnIndexOffset,n,o)}},{key:"defaultHeight",get:function(){return this._cellMeasurerCache.defaultHeight}},{key:"defaultWidth",get:function(){return this._cellMeasurerCache.defaultWidth}}]),e}();function pi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function fi(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pi(n,!0).forEach((function(t){zo(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pi(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var mi=20,gi=function(e){function t(e,o){var r;So(this,t),zo(Eo(r=Oo(this,Io(t).call(this,e,o))),"state",{scrollLeft:0,scrollTop:0,scrollbarSize:0,showHorizontalScrollbar:!1,showVerticalScrollbar:!1}),zo(Eo(r),"_deferredInvalidateColumnIndex",null),zo(Eo(r),"_deferredInvalidateRowIndex",null),zo(Eo(r),"_bottomLeftGridRef",(function(e){r._bottomLeftGrid=e})),zo(Eo(r),"_bottomRightGridRef",(function(e){r._bottomRightGrid=e})),zo(Eo(r),"_cellRendererBottomLeftGrid",(function(e){var t=e.rowIndex,o=Ho(e,["rowIndex"]),i=r.props,s=i.cellRenderer,a=i.fixedRowCount;return t===i.rowCount-a?n.createElement("div",{key:o.key,style:fi({},o.style,{height:mi})}):s(fi({},o,{parent:Eo(r),rowIndex:t+a}))})),zo(Eo(r),"_cellRendererBottomRightGrid",(function(e){var t=e.columnIndex,n=e.rowIndex,o=Ho(e,["columnIndex","rowIndex"]),i=r.props,s=i.cellRenderer,a=i.fixedColumnCount,l=i.fixedRowCount;return s(fi({},o,{columnIndex:t+a,parent:Eo(r),rowIndex:n+l}))})),zo(Eo(r),"_cellRendererTopRightGrid",(function(e){var t=e.columnIndex,o=Ho(e,["columnIndex"]),i=r.props,s=i.cellRenderer,a=i.columnCount,l=i.fixedColumnCount;return t===a-l?n.createElement("div",{key:o.key,style:fi({},o.style,{width:mi})}):s(fi({},o,{columnIndex:t+l,parent:Eo(r)}))})),zo(Eo(r),"_columnWidthRightGrid",(function(e){var t=e.index,n=r.props,o=n.columnCount,i=n.fixedColumnCount,s=n.columnWidth,a=r.state,l=a.scrollbarSize;return a.showHorizontalScrollbar&&t===o-i?l:"function"==typeof s?s({index:t+i}):s})),zo(Eo(r),"_onScroll",(function(e){var t=e.scrollLeft,n=e.scrollTop;r.setState({scrollLeft:t,scrollTop:n});var o=r.props.onScroll;o&&o(e)})),zo(Eo(r),"_onScrollbarPresenceChange",(function(e){var t=e.horizontal,n=e.size,o=e.vertical,i=r.state,s=i.showHorizontalScrollbar,a=i.showVerticalScrollbar;if(t!==s||o!==a){r.setState({scrollbarSize:n,showHorizontalScrollbar:t,showVerticalScrollbar:o});var l=r.props.onScrollbarPresenceChange;"function"==typeof l&&l({horizontal:t,size:n,vertical:o})}})),zo(Eo(r),"_onScrollLeft",(function(e){var t=e.scrollLeft;r._onScroll({scrollLeft:t,scrollTop:r.state.scrollTop})})),zo(Eo(r),"_onScrollTop",(function(e){var t=e.scrollTop;r._onScroll({scrollTop:t,scrollLeft:r.state.scrollLeft})})),zo(Eo(r),"_rowHeightBottomGrid",(function(e){var t=e.index,n=r.props,o=n.fixedRowCount,i=n.rowCount,s=n.rowHeight,a=r.state,l=a.scrollbarSize;return a.showVerticalScrollbar&&t===i-o?l:"function"==typeof s?s({index:t+o}):s})),zo(Eo(r),"_topLeftGridRef",(function(e){r._topLeftGrid=e})),zo(Eo(r),"_topRightGridRef",(function(e){r._topRightGrid=e}));var i=e.deferredMeasurementCache,s=e.fixedColumnCount,a=e.fixedRowCount;return r._maybeCalculateCachedStyles(!0),i&&(r._deferredMeasurementCacheBottomLeftGrid=a>0?new hi({cellMeasurerCache:i,columnIndexOffset:0,rowIndexOffset:a}):i,r._deferredMeasurementCacheBottomRightGrid=s>0||a>0?new hi({cellMeasurerCache:i,columnIndexOffset:s,rowIndexOffset:a}):i,r._deferredMeasurementCacheTopRightGrid=s>0?new hi({cellMeasurerCache:i,columnIndexOffset:s,rowIndexOffset:0}):i),r}return Po(t,e),_o(t,[{key:"forceUpdateGrids",value:function(){this._bottomLeftGrid&&this._bottomLeftGrid.forceUpdate(),this._bottomRightGrid&&this._bottomRightGrid.forceUpdate(),this._topLeftGrid&&this._topLeftGrid.forceUpdate(),this._topRightGrid&&this._topRightGrid.forceUpdate()}},{key:"invalidateCellSizeAfterRender",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,n=void 0===t?0:t,o=e.rowIndex,r=void 0===o?0:o;this._deferredInvalidateColumnIndex="number"==typeof this._deferredInvalidateColumnIndex?Math.min(this._deferredInvalidateColumnIndex,n):n,this._deferredInvalidateRowIndex="number"==typeof this._deferredInvalidateRowIndex?Math.min(this._deferredInvalidateRowIndex,r):r}},{key:"measureAllCells",value:function(){this._bottomLeftGrid&&this._bottomLeftGrid.measureAllCells(),this._bottomRightGrid&&this._bottomRightGrid.measureAllCells(),this._topLeftGrid&&this._topLeftGrid.measureAllCells(),this._topRightGrid&&this._topRightGrid.measureAllCells()}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,n=void 0===t?0:t,o=e.rowIndex,r=void 0===o?0:o,i=this.props,s=i.fixedColumnCount,a=i.fixedRowCount,l=Math.max(0,n-s),c=Math.max(0,r-a);this._bottomLeftGrid&&this._bottomLeftGrid.recomputeGridSize({columnIndex:n,rowIndex:c}),this._bottomRightGrid&&this._bottomRightGrid.recomputeGridSize({columnIndex:l,rowIndex:c}),this._topLeftGrid&&this._topLeftGrid.recomputeGridSize({columnIndex:n,rowIndex:r}),this._topRightGrid&&this._topRightGrid.recomputeGridSize({columnIndex:l,rowIndex:r}),this._leftGridWidth=null,this._topGridHeight=null,this._maybeCalculateCachedStyles(!0)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.scrollLeft,n=e.scrollTop;if(t>0||n>0){var o={};t>0&&(o.scrollLeft=t),n>0&&(o.scrollTop=n),this.setState(o)}this._handleInvalidatedGridSize()}},{key:"componentDidUpdate",value:function(){this._handleInvalidatedGridSize()}},{key:"render",value:function(){var e=this.props,t=e.onScroll,o=e.onSectionRendered,r=(e.onScrollbarPresenceChange,e.scrollLeft,e.scrollToColumn),i=(e.scrollTop,e.scrollToRow),s=Ho(e,["onScroll","onSectionRendered","onScrollbarPresenceChange","scrollLeft","scrollToColumn","scrollTop","scrollToRow"]);if(this._prepareForRender(),0===this.props.width||0===this.props.height)return null;var a=this.state,l=a.scrollLeft,c=a.scrollTop;return n.createElement("div",{style:this._containerOuterStyle},n.createElement("div",{style:this._containerTopStyle},this._renderTopLeftGrid(s),this._renderTopRightGrid(fi({},s,{onScroll:t,scrollLeft:l}))),n.createElement("div",{style:this._containerBottomStyle},this._renderBottomLeftGrid(fi({},s,{onScroll:t,scrollTop:c})),this._renderBottomRightGrid(fi({},s,{onScroll:t,onSectionRendered:o,scrollLeft:l,scrollToColumn:r,scrollToRow:i,scrollTop:c}))))}},{key:"_getBottomGridHeight",value:function(e){return e.height-this._getTopGridHeight(e)}},{key:"_getLeftGridWidth",value:function(e){var t=e.fixedColumnCount,n=e.columnWidth;if(null==this._leftGridWidth)if("function"==typeof n){for(var o=0,r=0;r<t;r++)o+=n({index:r});this._leftGridWidth=o}else this._leftGridWidth=n*t;return this._leftGridWidth}},{key:"_getRightGridWidth",value:function(e){return e.width-this._getLeftGridWidth(e)}},{key:"_getTopGridHeight",value:function(e){var t=e.fixedRowCount,n=e.rowHeight;if(null==this._topGridHeight)if("function"==typeof n){for(var o=0,r=0;r<t;r++)o+=n({index:r});this._topGridHeight=o}else this._topGridHeight=n*t;return this._topGridHeight}},{key:"_handleInvalidatedGridSize",value:function(){if("number"==typeof this._deferredInvalidateColumnIndex){var e=this._deferredInvalidateColumnIndex,t=this._deferredInvalidateRowIndex;this._deferredInvalidateColumnIndex=null,this._deferredInvalidateRowIndex=null,this.recomputeGridSize({columnIndex:e,rowIndex:t}),this.forceUpdate()}}},{key:"_maybeCalculateCachedStyles",value:function(e){var t=this.props,n=t.columnWidth,o=t.enableFixedColumnScroll,r=t.enableFixedRowScroll,i=t.height,s=t.fixedColumnCount,a=t.fixedRowCount,l=t.rowHeight,c=t.style,d=t.styleBottomLeftGrid,u=t.styleBottomRightGrid,h=t.styleTopLeftGrid,p=t.styleTopRightGrid,f=t.width,m=e||i!==this._lastRenderedHeight||f!==this._lastRenderedWidth,g=e||n!==this._lastRenderedColumnWidth||s!==this._lastRenderedFixedColumnCount,b=e||a!==this._lastRenderedFixedRowCount||l!==this._lastRenderedRowHeight;(e||m||c!==this._lastRenderedStyle)&&(this._containerOuterStyle=fi({height:i,overflow:"visible",width:f},c)),(e||m||b)&&(this._containerTopStyle={height:this._getTopGridHeight(this.props),position:"relative",width:f},this._containerBottomStyle={height:i-this._getTopGridHeight(this.props),overflow:"visible",position:"relative",width:f}),(e||d!==this._lastRenderedStyleBottomLeftGrid)&&(this._bottomLeftGridStyle=fi({left:0,overflowX:"hidden",overflowY:o?"auto":"hidden",position:"absolute"},d)),(e||g||u!==this._lastRenderedStyleBottomRightGrid)&&(this._bottomRightGridStyle=fi({left:this._getLeftGridWidth(this.props),position:"absolute"},u)),(e||h!==this._lastRenderedStyleTopLeftGrid)&&(this._topLeftGridStyle=fi({left:0,overflowX:"hidden",overflowY:"hidden",position:"absolute",top:0},h)),(e||g||p!==this._lastRenderedStyleTopRightGrid)&&(this._topRightGridStyle=fi({left:this._getLeftGridWidth(this.props),overflowX:r?"auto":"hidden",overflowY:"hidden",position:"absolute",top:0},p)),this._lastRenderedColumnWidth=n,this._lastRenderedFixedColumnCount=s,this._lastRenderedFixedRowCount=a,this._lastRenderedHeight=i,this._lastRenderedRowHeight=l,this._lastRenderedStyle=c,this._lastRenderedStyleBottomLeftGrid=d,this._lastRenderedStyleBottomRightGrid=u,this._lastRenderedStyleTopLeftGrid=h,this._lastRenderedStyleTopRightGrid=p,this._lastRenderedWidth=f}},{key:"_prepareForRender",value:function(){this._lastRenderedColumnWidth===this.props.columnWidth&&this._lastRenderedFixedColumnCount===this.props.fixedColumnCount||(this._leftGridWidth=null),this._lastRenderedFixedRowCount===this.props.fixedRowCount&&this._lastRenderedRowHeight===this.props.rowHeight||(this._topGridHeight=null),this._maybeCalculateCachedStyles(),this._lastRenderedColumnWidth=this.props.columnWidth,this._lastRenderedFixedColumnCount=this.props.fixedColumnCount,this._lastRenderedFixedRowCount=this.props.fixedRowCount,this._lastRenderedRowHeight=this.props.rowHeight}},{key:"_renderBottomLeftGrid",value:function(e){var t=e.enableFixedColumnScroll,o=e.fixedColumnCount,r=e.fixedRowCount,i=e.rowCount,s=e.hideBottomLeftGridScrollbar,a=this.state.showVerticalScrollbar;if(!o)return null;var l=a?1:0,c=this._getBottomGridHeight(e),d=this._getLeftGridWidth(e),u=this.state.showVerticalScrollbar?this.state.scrollbarSize:0,h=s?d+u:d,p=n.createElement(cr,Ao({},e,{cellRenderer:this._cellRendererBottomLeftGrid,className:this.props.classNameBottomLeftGrid,columnCount:o,deferredMeasurementCache:this._deferredMeasurementCacheBottomLeftGrid,height:c,onScroll:t?this._onScrollTop:void 0,ref:this._bottomLeftGridRef,rowCount:Math.max(0,i-r)+l,rowHeight:this._rowHeightBottomGrid,style:this._bottomLeftGridStyle,tabIndex:null,width:h}));return s?n.createElement("div",{className:"BottomLeftGrid_ScrollWrapper",style:fi({},this._bottomLeftGridStyle,{height:c,width:d,overflowY:"hidden"})},p):p}},{key:"_renderBottomRightGrid",value:function(e){var t=e.columnCount,o=e.fixedColumnCount,r=e.fixedRowCount,i=e.rowCount,s=e.scrollToColumn,a=e.scrollToRow;return n.createElement(cr,Ao({},e,{cellRenderer:this._cellRendererBottomRightGrid,className:this.props.classNameBottomRightGrid,columnCount:Math.max(0,t-o),columnWidth:this._columnWidthRightGrid,deferredMeasurementCache:this._deferredMeasurementCacheBottomRightGrid,height:this._getBottomGridHeight(e),onScroll:this._onScroll,onScrollbarPresenceChange:this._onScrollbarPresenceChange,ref:this._bottomRightGridRef,rowCount:Math.max(0,i-r),rowHeight:this._rowHeightBottomGrid,scrollToColumn:s-o,scrollToRow:a-r,style:this._bottomRightGridStyle,width:this._getRightGridWidth(e)}))}},{key:"_renderTopLeftGrid",value:function(e){var t=e.fixedColumnCount,o=e.fixedRowCount;return t&&o?n.createElement(cr,Ao({},e,{className:this.props.classNameTopLeftGrid,columnCount:t,height:this._getTopGridHeight(e),ref:this._topLeftGridRef,rowCount:o,style:this._topLeftGridStyle,tabIndex:null,width:this._getLeftGridWidth(e)})):null}},{key:"_renderTopRightGrid",value:function(e){var t=e.columnCount,o=e.enableFixedRowScroll,r=e.fixedColumnCount,i=e.fixedRowCount,s=e.scrollLeft,a=e.hideTopRightGridScrollbar,l=this.state,c=l.showHorizontalScrollbar,d=l.scrollbarSize;if(!i)return null;var u=c?1:0,h=this._getTopGridHeight(e),p=this._getRightGridWidth(e),f=c?d:0,m=h,g=this._topRightGridStyle;a&&(m=h+f,g=fi({},this._topRightGridStyle,{left:0}));var b=n.createElement(cr,Ao({},e,{cellRenderer:this._cellRendererTopRightGrid,className:this.props.classNameTopRightGrid,columnCount:Math.max(0,t-r)+u,columnWidth:this._columnWidthRightGrid,deferredMeasurementCache:this._deferredMeasurementCacheTopRightGrid,height:m,onScroll:o?this._onScrollLeft:void 0,ref:this._topRightGridRef,rowCount:i,scrollLeft:s,style:g,tabIndex:null,width:p}));return a?n.createElement("div",{className:"TopRightGrid_ScrollWrapper",style:fi({},this._topRightGridStyle,{height:h,width:p,overflowX:"hidden"})},b):b}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.scrollLeft!==t.scrollLeft||e.scrollTop!==t.scrollTop?{scrollLeft:null!=e.scrollLeft&&e.scrollLeft>=0?e.scrollLeft:t.scrollLeft,scrollTop:null!=e.scrollTop&&e.scrollTop>=0?e.scrollTop:t.scrollTop}:null}}]),t}(n.PureComponent);function bi(e){var t=e.className,o=e.columns,r=e.style;return n.createElement("div",{className:t,role:"row",style:r},o)}zo(gi,"defaultProps",{classNameBottomLeftGrid:"",classNameBottomRightGrid:"",classNameTopLeftGrid:"",classNameTopRightGrid:"",enableFixedColumnScroll:!1,enableFixedRowScroll:!1,fixedColumnCount:0,fixedRowCount:0,scrollToColumn:-1,scrollToRow:-1,style:{},styleBottomLeftGrid:{},styleBottomRightGrid:{},styleTopLeftGrid:{},styleTopRightGrid:{},hideTopRightGridScrollbar:!1,hideBottomLeftGridScrollbar:!1}),gi.propTypes={},(0,$o.polyfill)(gi),(function(e){function t(e,n){var o;return So(this,t),(o=Oo(this,Io(t).call(this,e,n))).state={clientHeight:0,clientWidth:0,scrollHeight:0,scrollLeft:0,scrollTop:0,scrollWidth:0},o._onScroll=o._onScroll.bind(Eo(o)),o}return Po(t,e),_o(t,[{key:"render",value:function(){var e=this.props.children,t=this.state,n=t.clientHeight,o=t.clientWidth,r=t.scrollHeight,i=t.scrollLeft,s=t.scrollTop,a=t.scrollWidth;return e({clientHeight:n,clientWidth:o,onScroll:this._onScroll,scrollHeight:r,scrollLeft:i,scrollTop:s,scrollWidth:a})}},{key:"_onScroll",value:function(e){var t=e.clientHeight,n=e.clientWidth,o=e.scrollHeight,r=e.scrollLeft,i=e.scrollTop,s=e.scrollWidth;this.setState({clientHeight:t,clientWidth:n,scrollHeight:o,scrollLeft:r,scrollTop:i,scrollWidth:s})}}]),t}(n.PureComponent)).propTypes={},bi.propTypes=null;const vi={ASC:"ASC",DESC:"DESC"};function yi(e){var t=e.sortDirection,o=No("ReactVirtualized__Table__sortableHeaderIcon",{"ReactVirtualized__Table__sortableHeaderIcon--ASC":t===vi.ASC,"ReactVirtualized__Table__sortableHeaderIcon--DESC":t===vi.DESC});return n.createElement("svg",{className:o,width:18,height:18,viewBox:"0 0 24 24"},t===vi.ASC?n.createElement("path",{d:"M7 14l5-5 5 5z"}):n.createElement("path",{d:"M7 10l5 5 5-5z"}),n.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}function wi(e){var t=e.dataKey,o=e.label,r=e.sortBy,i=e.sortDirection,s=r===t,a=[n.createElement("span",{className:"ReactVirtualized__Table__headerTruncatedText",key:"label",title:"string"==typeof o?o:null},o)];return s&&a.push(n.createElement(yi,{key:"SortIndicator",sortDirection:i})),a}function xi(e){var t=e.className,o=e.columns,r=e.index,i=e.key,s=e.onRowClick,a=e.onRowDoubleClick,l=e.onRowMouseOut,c=e.onRowMouseOver,d=e.onRowRightClick,u=e.rowData,h=e.style,p={"aria-rowindex":r+1};return(s||a||l||c||d)&&(p["aria-label"]="row",p.tabIndex=0,s&&(p.onClick=function(e){return s({event:e,index:r,rowData:u})}),a&&(p.onDoubleClick=function(e){return a({event:e,index:r,rowData:u})}),l&&(p.onMouseOut=function(e){return l({event:e,index:r,rowData:u})}),c&&(p.onMouseOver=function(e){return c({event:e,index:r,rowData:u})}),d&&(p.onContextMenu=function(e){return d({event:e,index:r,rowData:u})})),n.createElement("div",Ao({},p,{className:t,key:i,role:"row",style:h}),o)}yi.propTypes={},wi.propTypes=null,xi.propTypes=null;var Ci=function(e){function t(){return So(this,t),Oo(this,Io(t).apply(this,arguments))}return Po(t,e),t}(n.Component);function Si(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function ki(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Si(n,!0).forEach((function(t){zo(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Si(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}zo(Ci,"defaultProps",{cellDataGetter:function(e){var t=e.dataKey,n=e.rowData;return"function"==typeof n.get?n.get(t):n[t]},cellRenderer:function(e){var t=e.cellData;return null==t?"":String(t)},defaultSortDirection:vi.ASC,flexGrow:0,flexShrink:1,headerRenderer:wi,style:{}}),Ci.propTypes={};var Ti=function(e){function t(e){var n;return So(this,t),(n=Oo(this,Io(t).call(this,e))).state={scrollbarWidth:0},n._createColumn=n._createColumn.bind(Eo(n)),n._createRow=n._createRow.bind(Eo(n)),n._onScroll=n._onScroll.bind(Eo(n)),n._onSectionRendered=n._onSectionRendered.bind(Eo(n)),n._setRef=n._setRef.bind(Eo(n)),n}return Po(t,e),_o(t,[{key:"forceUpdateGrid",value:function(){this.Grid&&this.Grid.forceUpdate()}},{key:"getOffsetForRow",value:function(e){var t=e.alignment,n=e.index;return this.Grid?this.Grid.getOffsetForCell({alignment:t,rowIndex:n}).scrollTop:0}},{key:"invalidateCellSizeAfterRender",value:function(e){var t=e.columnIndex,n=e.rowIndex;this.Grid&&this.Grid.invalidateCellSizeAfterRender({rowIndex:n,columnIndex:t})}},{key:"measureAllRows",value:function(){this.Grid&&this.Grid.measureAllCells()}},{key:"recomputeGridSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.columnIndex,n=void 0===t?0:t,o=e.rowIndex,r=void 0===o?0:o;this.Grid&&this.Grid.recomputeGridSize({rowIndex:r,columnIndex:n})}},{key:"recomputeRowHeights",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.recomputeGridSize({rowIndex:e})}},{key:"scrollToPosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToPosition({scrollTop:e})}},{key:"scrollToRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.Grid&&this.Grid.scrollToCell({columnIndex:0,rowIndex:e})}},{key:"getScrollbarWidth",value:function(){if(this.Grid){var e=(0,Wn.findDOMNode)(this.Grid),t=e.clientWidth||0;return(e.offsetWidth||0)-t}return 0}},{key:"componentDidMount",value:function(){this._setScrollbarWidth()}},{key:"componentDidUpdate",value:function(){this._setScrollbarWidth()}},{key:"render",value:function(){var e=this,t=this.props,o=t.children,r=t.className,i=t.disableHeader,s=t.gridClassName,a=t.gridStyle,l=t.headerHeight,c=t.headerRowRenderer,d=t.height,u=t.id,h=t.noRowsRenderer,p=t.rowClassName,f=t.rowStyle,m=t.scrollToIndex,g=t.style,b=t.width,v=this.state.scrollbarWidth,y=i?d:d-l,w="function"==typeof p?p({index:-1}):p,x="function"==typeof f?f({index:-1}):f;return this._cachedColumnStyles=[],n.Children.toArray(o).forEach((function(t,n){var o=e._getFlexStyleForColumn(t,t.props.style);e._cachedColumnStyles[n]=ki({overflow:"hidden"},o)})),n.createElement("div",{"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-colcount":n.Children.toArray(o).length,"aria-rowcount":this.props.rowCount,className:No("ReactVirtualized__Table",r),id:u,role:"grid",style:g},!i&&c({className:No("ReactVirtualized__Table__headerRow",w),columns:this._getHeaderColumns(),style:ki({height:l,overflow:"hidden",paddingRight:v,width:b},x)}),n.createElement(cr,Ao({},this.props,{"aria-readonly":null,autoContainerWidth:!0,className:No("ReactVirtualized__Table__Grid",s),cellRenderer:this._createRow,columnWidth:b,columnCount:1,height:y,id:void 0,noContentRenderer:h,onScroll:this._onScroll,onSectionRendered:this._onSectionRendered,ref:this._setRef,role:"rowgroup",scrollbarWidth:v,scrollToRow:m,style:ki({},a,{overflowX:"hidden"})})))}},{key:"_createColumn",value:function(e){var t=e.column,o=e.columnIndex,r=e.isScrolling,i=e.parent,s=e.rowData,a=e.rowIndex,l=this.props.onColumnClick,c=t.props,d=c.cellDataGetter,u=c.cellRenderer,h=c.className,p=c.columnData,f=c.dataKey,m=c.id,g=u({cellData:d({columnData:p,dataKey:f,rowData:s}),columnData:p,columnIndex:o,dataKey:f,isScrolling:r,parent:i,rowData:s,rowIndex:a}),b=this._cachedColumnStyles[o],v="string"==typeof g?g:null;return n.createElement("div",{"aria-colindex":o+1,"aria-describedby":m,className:No("ReactVirtualized__Table__rowColumn",h),key:"Row"+a+"-Col"+o,onClick:function(e){l&&l({columnData:p,dataKey:f,event:e})},role:"gridcell",style:b,title:v},g)}},{key:"_createHeader",value:function(e){var t,o,r,i,s,a=e.column,l=e.index,c=this.props,d=c.headerClassName,u=c.headerStyle,h=c.onHeaderClick,p=c.sort,f=c.sortBy,m=c.sortDirection,g=a.props,b=g.columnData,v=g.dataKey,y=g.defaultSortDirection,w=g.disableSort,x=g.headerRenderer,C=g.id,S=g.label,k=!w&&p,T=No("ReactVirtualized__Table__headerColumn",d,a.props.headerClassName,{ReactVirtualized__Table__sortableHeaderColumn:k}),R=this._getFlexStyleForColumn(a,ki({},u,{},a.props.headerStyle)),_=x({columnData:b,dataKey:v,disableSort:w,label:S,sortBy:f,sortDirection:m});if(k||h){var E=f!==v?y:m===vi.DESC?vi.ASC:vi.DESC,O=function(e){k&&p({defaultSortDirection:y,event:e,sortBy:v,sortDirection:E}),h&&h({columnData:b,dataKey:v,event:e})};s=a.props["aria-label"]||S||v,i="none",r=0,t=O,o=function(e){"Enter"!==e.key&&" "!==e.key||O(e)}}return f===v&&(i=m===vi.ASC?"ascending":"descending"),n.createElement("div",{"aria-label":s,"aria-sort":i,className:T,id:C,key:"Header-Col"+l,onClick:t,onKeyDown:o,role:"columnheader",style:R,tabIndex:r},_)}},{key:"_createRow",value:function(e){var t=this,o=e.rowIndex,r=e.isScrolling,i=e.key,s=e.parent,a=e.style,l=this.props,c=l.children,d=l.onRowClick,u=l.onRowDoubleClick,h=l.onRowRightClick,p=l.onRowMouseOver,f=l.onRowMouseOut,m=l.rowClassName,g=l.rowGetter,b=l.rowRenderer,v=l.rowStyle,y=this.state.scrollbarWidth,w="function"==typeof m?m({index:o}):m,x="function"==typeof v?v({index:o}):v,C=g({index:o}),S=n.Children.toArray(c).map((function(e,n){return t._createColumn({column:e,columnIndex:n,isScrolling:r,parent:s,rowData:C,rowIndex:o,scrollbarWidth:y})})),k=No("ReactVirtualized__Table__row",w),T=ki({},a,{height:this._getRowHeight(o),overflow:"hidden",paddingRight:y},x);return b({className:k,columns:S,index:o,isScrolling:r,key:i,onRowClick:d,onRowDoubleClick:u,onRowRightClick:h,onRowMouseOver:p,onRowMouseOut:f,rowData:C,style:T})}},{key:"_getFlexStyleForColumn",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="".concat(e.props.flexGrow," ").concat(e.props.flexShrink," ").concat(e.props.width,"px"),o=ki({},t,{flex:n,msFlex:n,WebkitFlex:n});return e.props.maxWidth&&(o.maxWidth=e.props.maxWidth),e.props.minWidth&&(o.minWidth=e.props.minWidth),o}},{key:"_getHeaderColumns",value:function(){var e=this,t=this.props,o=t.children;return(t.disableHeader?[]:n.Children.toArray(o)).map((function(t,n){return e._createHeader({column:t,index:n})}))}},{key:"_getRowHeight",value:function(e){var t=this.props.rowHeight;return"function"==typeof t?t({index:e}):t}},{key:"_onScroll",value:function(e){var t=e.clientHeight,n=e.scrollHeight,o=e.scrollTop;(0,this.props.onScroll)({clientHeight:t,scrollHeight:n,scrollTop:o})}},{key:"_onSectionRendered",value:function(e){var t=e.rowOverscanStartIndex,n=e.rowOverscanStopIndex,o=e.rowStartIndex,r=e.rowStopIndex;(0,this.props.onRowsRendered)({overscanStartIndex:t,overscanStopIndex:n,startIndex:o,stopIndex:r})}},{key:"_setRef",value:function(e){this.Grid=e}},{key:"_setScrollbarWidth",value:function(){var e=this.getScrollbarWidth();this.setState({scrollbarWidth:e})}}]),t}(n.PureComponent);zo(Ti,"defaultProps",{disableHeader:!1,estimatedRowSize:30,headerHeight:0,headerStyle:{},noRowsRenderer:function(){return null},onRowsRendered:function(){return null},onScroll:function(){return null},overscanIndicesGetter:pr,overscanRowCount:10,rowRenderer:xi,headerRowRenderer:bi,rowStyle:{},scrollToAlignment:"auto",scrollToIndex:-1,style:{}}),Ti.propTypes={};var Ri=[],_i=null,Ei=null;function Oi(){Ei&&(Ei=null,document.body&&null!=_i&&(document.body.style.pointerEvents=_i),_i=null)}function Ii(){Oi(),Ri.forEach((function(e){return e.__resetIsScrolling()}))}function Mi(e){e.currentTarget===window&&null==_i&&document.body&&(_i=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),function(){Ei&&or(Ei);var e=0;Ri.forEach((function(t){e=Math.max(e,t.props.scrollingResetTimeInterval)})),Ei=rr(Ii,e)}(),Ri.forEach((function(t){t.props.scrollElement===e.currentTarget&&t.__handleWindowScrollEvent()}))}function Pi(e,t){Ri.some((function(e){return e.props.scrollElement===t}))||t.addEventListener("scroll",Mi),Ri.push(e)}function zi(e,t){(Ri=Ri.filter((function(t){return t!==e}))).length||(t.removeEventListener("scroll",Mi),Ei&&(or(Ei),Oi()))}var $i,Ai,Di=function(e){return e===window},Ni=function(e){return e.getBoundingClientRect()};function Li(e,t){if(e){if(Di(e)){var n=window,o=n.innerHeight,r=n.innerWidth;return{height:"number"==typeof o?o:0,width:"number"==typeof r?r:0}}return Ni(e)}return{height:t.serverHeight,width:t.serverWidth}}function Hi(e){return Di(e)&&document.documentElement?{top:"scrollY"in window?window.scrollY:document.documentElement.scrollTop,left:"scrollX"in window?window.scrollX:document.documentElement.scrollLeft}:{top:e.scrollTop,left:e.scrollLeft}}function Bi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var Fi=function(){return"undefined"!=typeof window?window:void 0},Gi=(Ai=$i=function(e){function t(){var e,n;So(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return zo(Eo(n=Oo(this,(e=Io(t)).call.apply(e,[this].concat(r)))),"_window",Fi()),zo(Eo(n),"_isMounted",!1),zo(Eo(n),"_positionFromTop",0),zo(Eo(n),"_positionFromLeft",0),zo(Eo(n),"_detectElementResize",void 0),zo(Eo(n),"_child",void 0),zo(Eo(n),"state",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Bi(n,!0).forEach((function(t){zo(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bi(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Li(n.props.scrollElement,n.props),{isScrolling:!1,scrollLeft:0,scrollTop:0})),zo(Eo(n),"_registerChild",(function(e){e&&Element,n._child=e,n.updatePosition()})),zo(Eo(n),"_onChildScroll",(function(e){var t=e.scrollTop;if(n.state.scrollTop!==t){var o=n.props.scrollElement;o&&("function"==typeof o.scrollTo?o.scrollTo(0,t+n._positionFromTop):o.scrollTop=t+n._positionFromTop)}})),zo(Eo(n),"_registerResizeListener",(function(e){e===window?window.addEventListener("resize",n._onResize,!1):n._detectElementResize.addResizeListener(e,n._onResize)})),zo(Eo(n),"_unregisterResizeListener",(function(e){e===window?window.removeEventListener("resize",n._onResize,!1):e&&n._detectElementResize.removeResizeListener(e,n._onResize)})),zo(Eo(n),"_onResize",(function(){n.updatePosition()})),zo(Eo(n),"__handleWindowScrollEvent",(function(){if(n._isMounted){var e=n.props.onScroll,t=n.props.scrollElement;if(t){var o=Hi(t),r=Math.max(0,o.left-n._positionFromLeft),i=Math.max(0,o.top-n._positionFromTop);n.setState({isScrolling:!0,scrollLeft:r,scrollTop:i}),e({scrollLeft:r,scrollTop:i})}}})),zo(Eo(n),"__resetIsScrolling",(function(){n.setState({isScrolling:!1})})),n}return Po(t,e),_o(t,[{key:"updatePosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.scrollElement,t=this.props.onResize,n=this.state,o=n.height,r=n.width,i=this._child||Wn.findDOMNode(this);if(i instanceof Element&&e){var s=function(e,t){if(Di(t)&&document.documentElement){var n=document.documentElement,o=Ni(e),r=Ni(n);return{top:o.top-r.top,left:o.left-r.left}}var i=Hi(t),s=Ni(e),a=Ni(t);return{top:s.top+i.top-a.top,left:s.left+i.left-a.left}}(i,e);this._positionFromTop=s.top,this._positionFromLeft=s.left}var a=Li(e,this.props);o===a.height&&r===a.width||(this.setState({height:a.height,width:a.width}),t({height:a.height,width:a.width}))}},{key:"componentDidMount",value:function(){var e=this.props.scrollElement;this._detectElementResize=vr(),this.updatePosition(e),e&&(Pi(this,e),this._registerResizeListener(e)),this._isMounted=!0}},{key:"componentDidUpdate",value:function(e,t){var n=this.props.scrollElement,o=e.scrollElement;o!==n&&null!=o&&null!=n&&(this.updatePosition(n),zi(this,o),Pi(this,n),this._unregisterResizeListener(o),this._registerResizeListener(n))}},{key:"componentWillUnmount",value:function(){var e=this.props.scrollElement;e&&(zi(this,e),this._unregisterResizeListener(e)),this._isMounted=!1}},{key:"render",value:function(){var e=this.props.children,t=this.state,n=t.isScrolling,o=t.scrollTop,r=t.scrollLeft,i=t.height,s=t.width;return e({onChildScroll:this._onChildScroll,registerChild:this._registerChild,height:i,isScrolling:n,scrollLeft:r,scrollTop:o,width:s})}}]),t}(n.PureComponent),zo($i,"propTypes",null),Ai);zo(Gi,"defaultProps",{onResize:function(){},onScroll:function(){},scrollingResetTimeInterval:150,scrollElement:Fi(),serverHeight:0,serverWidth:0});var Wi=function({children:e,className:t,height:n,heightAdjustment:r,graphZoneType:i,scrollTop:s,style:a}){const l=sn[i].listId,c=document.getElementById(l),d=c?.scrollHeight||0;let u=n-28;void 0!==s&&(u=Number(a.top)-s,c&&d-n-s<0&&(u=n-r-28));const h={top:u,zIndex:2},p=o().createElement("span",{className:"absolute",style:h},e);return o().createElement("div",{className:t,style:a},c?jn().createPortal(p,document.getElementById("graph-container")):p)};function ji({inline:e,getExternalIcon:t,message:n,size:r=100,useSimpleSpinner:i}){const s=re()("loading-spinner",{"inline-block":e,ml2:e,"shrink-0":e}),a=re()("spinner","mr1",{"inline-block":e}),l={height:r,width:r},c=re()("message",{"inline-block":e,mx2:e}),d=i?o().createElement("span",{className:a,style:l},t("loading")):o().createElement("div",{className:a,style:l},o().createElement("img",{className:"ring outer",src:"../../../images/spinner-outer-ring.svg",style:l}),o().createElement("img",{className:"ring inner",src:"../../../images/spinner-inner-ring.svg",style:l}),o().createElement("img",{className:"bg-img",src:"../../../images/spinner-kraken.svg",style:l}));return o().createElement("div",{className:s},d,n&&o().createElement("div",{className:c},n))}class Ui extends o().Component{render(){const{cssVariables:e,currentCommits:t,graphZoneType:n,hasMoreCommits:r,height:i,getExternalIcon:s,isLoadingRows:a,scrollTop:l,style:c,translate:d,zoneContentWidth:u,zoneWidth:h}=this.props,p=parseInt(e["--scrollable-scrollbar-thickness"].trim(),10),f=Number.isNaN(p)?0:p,m=u>h?f:0,g=o().createElement(ji,{className:"loading-spinner",getExternalIcon:s,size:20,useSimpleSpinner:!0}),b=0!==(t>0?t:0)||r?null:o().createElement(o().Fragment,null,d("Graph-NoCommits")),v=o().createElement("div",{className:"graph-adjust-commit-count p1"},a?o().createElement("div",{className:"flex items-center"},o().createElement("span",{style:{paddingRight:"5px"}},g)):b);return o().createElement(Wi,{graphZoneType:n,height:i,heightAdjustment:m,scrollTop:l,style:c},v)}}var Vi=Ui;function Zi({rowCount:e,cellRenderersByIds:t,columnIndex:n,cssVariables:r,enableResizer:i,getExternalIcon:s,getKeyForCell:a,graphHeight:l,graphWidth:c,graphZoneType:d,graphZones:u,hasMoreCommits:h,isLoadingRows:p,onResize:f,onResizeEnd:m,onResizeFromPropChange:g,onScroll:b,onScrollToRowCausedUpdate:v,onZoneEnter:y,scrollLeft:w,scrollToAlignment:x,scrollToIndex:C,scrollTop:S,smartCellRangeRenderer:k,translate:T}){const R=En(d,u);if(!R)return null;const _=Rn(d,u),E=En(Yt,u),O=E?E.contentWidth:0,I=E?E.currentWidth:0,M=d===Yt?re()("graph-panel","horizontal_scrollbar","react-virtualized-list"):re()("graph-panel","react-virtualized-list",d===Kt?"z3":null,_?"vertical_scrollbar":null,{"pad-for-horizontal-scrollbar":!!O&&O>I}),P=d===Yt?{position:"static"}:void 0,z=e=>b(d,e,c,l,h),$=h||p||0===e,A=e+($?1:0),D=(i,u,f,m,g,b,y)=>o().createElement(cr,{autoContainerWidth:!0,cellRangeRenderer:k,cellRenderer:c=>((i,c)=>{if(c.rowIndex>e-1)return $&&0===n?o().createElement(Vi,{cssVariables:r,currentCommits:e-1,getExternalIcon:s,graphZoneType:d,hasMoreCommits:h,height:l,isLoadingRows:p,key:a(c.rowIndex),scrollTop:S,style:c.style,translate:T,zoneContentWidth:O||0,zoneWidth:I}):void 0;const u={...c,style:{...c.style}};qt===i&&(u.style.top=Number(c.style.top)-S);const f=t[i];return f?f(u):void 0})(i,c),className:f,columnCount:1,columnWidth:y,containerStyle:m,height:l,id:u,isScrolling:!1,key:u,onScroll:z,onScrollToTargetCausedUpdate:v?e=>v(d,e,c,l,h):void 0,overscanRowCount:0,rowCount:A,rowHeight:zt,scrollLeft:w,scrollToAlignment:x,scrollTop:S,scrollToRow:C,style:g,tabIndex:null,width:b}),N=D(R.type,R.listId,M,P,{position:"absolute"},R.currentWidth,R.type===Yt&&e>0?R.contentWidth||0:R.currentWidth),L=_?D(qt,"timeline-column","graph-panel react-virtualized-list timeline-column",{overflow:"visible",zIndex:3},{position:"absolute",right:0,overflow:"visible",zIndex:3},1,1):void 0,H=o().createElement("div",{onMouseEnter:y},N,L);return _?H:o().createElement(Pt,{enable:i,height:l,id:`${d}Column`,key:`${d}Column`,onResize:f?e=>f(R,e):void 0,onResizeEnd:m?e=>m(R,e):void 0,onResizeFromPropChange:g?e=>g(R,e):void 0,resizeContentClassName:"z1",resizeEdge:"right",resizeHandleClassName:"z1",width:R.currentWidth,widthConstraints:In(d,u,c)},H)}function qi(e,t,n){const o=t*zt,{shape:r}=rn[e],i=on[r];if(!i)return{height:0,offset:0};const{baseHeight:s,minHeight:a,maxHeight:l}=i;let c=s*(n/o);void 0!==a&&c<a&&(c=a),void 0!==l&&c>l&&(c=l);const d=zt*(n/o);return{height:c,offset:c>=d?0:(d-c)/2}}function Ki(e,t,n){return e*zt/(n*zt)*t}class Yi extends o().PureComponent{canvas;componentDidMount(){this.updateCanvas()}componentWillReceiveProps(e){e.markerRowIndices===this.props.markerRowIndices&&e.totalRows===this.props.totalRows&&e.viewportHeight===this.props.viewportHeight&&e.viewportWidth===this.props.viewportWidth&&e.markerColors===this.props.markerColors&&e.enabledScrollMarkerTypes===this.props.enabledScrollMarkerTypes&&e.scrollWidth===this.props.scrollWidth||this.updateCanvas(e)}updateCanvas(e){const{enabledScrollMarkerTypes:t,viewportHeight:n,markerRowIndices:o,markerColors:r,scrollWidth:i,totalRows:s}=e||this.props,a=this.canvas.getContext("2d");a.canvas.width=i&&!Number.isNaN(i)?i:14,a.canvas.height=n;const l=(i&&!Number.isNaN(i)?i:14)/3;a.clearRect(0,0,a.canvas.width,a.canvas.height);for(const[e,i]of Object.entries(rn)){if(!t.includes(e))continue;const c=o[e]||[],d=r[e],u=i.lanes;d&&c.length&&(a.fillStyle=d,c.forEach((t=>{const{height:o,offset:r}=qi(e,s,n);u.length&&a.fillRect(u[0]*l,Ki(t,n,s)+r-.5*o,l*u.length,o)})))}}render(){const{scrollWidth:e,viewportWidth:t}=this.props,n=e&&!Number.isNaN(e)?e:14;return o().createElement("div",{style:{pointerEvents:"none",position:"absolute",left:t-n,zIndex:9999}},o().createElement("canvas",{ref:e=>{this.canvas=e}}))}}const Xi={"Graph-IsLoadingRows":"Loading...","Graph-NoCommits":"No commits","Graph-WorkInProgress":"Work in progress","GraphHeader-BranchTag":"BRANCH / TAG","GraphHeader-Changes":"CHANGES","GraphHeader-CommitAuthor":"AUTHOR","GraphHeader-CommitDateTime":"COMMIT DATE / TIME","GraphHeader-CommitGraph":"GRAPH","GraphHeader-CommitMessage":"COMMIT MESSAGE","GraphHeader-CommitSha":"SHA","GraphHeader-EditColumns":"Add/Remove Columns","GraphHeader-HiddenRefs-btn":"Hidden Branches / Tags","OptionalGraphZone-CommitAuthor":"Author","OptionalGraphZone-CommitDateTime":"Date / Time","OptionalGraphZone-CommitSha":"Sha","Ref-Current":"current","Ref-Local":"local","Timeline-1HourAgo":"1 hour ago","Timeline-NHoursAgo":"{0} hours ago","Timeline-Yesterday":"yesterday","Timeline-NDaysAgo":"{0} days ago","Timeline-1WeekAgo":"a week ago","Timeline-NWeeksAgo":"{0} weeks ago","Timeline-1MonthAgo":"a month ago","Timeline-NMonthsAgo":"{0} months ago","Timeline-1YearAgo":"a year ago","Timeline-NYearsAgo":"{0} years ago","Timeline-NPlusYearsAgo":"{0}+ years ago",ResizePanel:"Resize Panel",Hide:"Hide",Show:"Show"},Qi=e=>!(e===fe||e===ge),Ji=/^.*(:?\n){0,2}/m,es=/^co-authored-by:\s*([^\s<>]+(?:\s+[^\s<>]+)*)\s*<([^<>]+)>/gim,ts={};function ns(e){let t=ts[e];return t||(t=Dt+e*Bt+Bt/2,ts[e]=t,t)}const os={d:"d",fill:"fill","shape-rendering":"shapeRendering","stroke-linejoin":"strokeLinejoin","stroke-width":"strokeWidth","stroke-dasharray":"strokeDasharray",stroke:"stroke",x1:"x1",x2:"x2",y1:"y1",y2:"y2"};function rs(e,t){let n="<"+e;const o=Object.entries(os);for(let e=0;e<o.length;e+=1){const[r,i]=o[e],s=t[i];s&&(n=n+" "+r+'="'+s+'"')}return n+" />"}function is(e){return rs("line",e)}function ss(e,t){return{fill:"none",shapeRendering:"auto",strokeLinejoin:"round",strokeWidth:At,strokeDasharray:Qi(e)?2:0,stroke:t}}function as(e,t,n){return e+"_"+t+"_"+(n||"+")}function ls(e,t){return e+"_"+(t||"+")}const cs={0:1,90:0,180:-1,270:0},ds={0:0,90:1,180:0,270:-1},us=Gt-Ft,hs=" A "+us+" "+us+" 0 0 0 ";function ps(e,t,n){const o=cs[n],r=ds[n];return{x:e-Gt*o,xOffset:-o*Ft,y:t+Gt*r,yOffset:r*Ft}}const fs={};var ms=function(e,t,n,o,r,i){const s=ss(o,e);return s.d=function(e,t,n,o){const r=e+"_"+t+"_"+n+"_"+o;let i=fs[r];if(i)return i;const s=ps(e,t,o),a=ps(e,t,n);return i="M "+s.x+" "+s.y+(a.xOffset?" H "+(s.x+a.xOffset):" V "+(s.y+a.yOffset))+hs+(a.x+s.xOffset)+" "+(a.y+s.yOffset)+(s.xOffset?" H "+a.x:" V "+a.y),fs[r]=i,i}(r,i,n,t),rs("path",s)};let gs={};function bs(e,t,n,o){const r=as(e,t,n);let i=gs[r];return i||(i=function(e,t){return e===t}(t,e)?function(e,t,n){const o=ss(n,e);return o.x1=ns(t),o.x2=ns(t),o.y1=Ht/2,o.y2=Ht,is(o)}(o[e],t,n):function(e,t,n,o){const r=ss(o,e),i={...r};i.x1=ns(n),i.x2=ns(n),i.y1=Ht-Nt,i.y2=Ht;const s={...r};return s.x1=ns(n<t?n:n-1)+Bt/2,s.x2=ns(t),s.y1=Ht/2,s.y2=Ht/2,"<g>"+ms(e,t<n?180:270,t<n?270:0,o,ns(n)+(t<n?-Bt/2:Bt/2),Ht-Nt)+is(i)+is(s)+"</g>"}(o[e],t,e,n),gs[r]=i,i)}let vs={};function ys(e,t,n,o){const r=as(e,t,n);let i=vs[r];return i||(i=function(e,t){return e===t}(t,e)?function(e,t,n){const o=ss(n,e);return o.x1=ns(t),o.x2=ns(t),o.y1=0,o.y2=Ht/2,is(o)}(o[e],t,n):function(e,t,n,o){const r=ss(o,e),i={...r};i.x1=ns(n),i.x2=ns(n),i.y1=0,i.y2=Lt;const s={...r};return s.x1=ns(n<t?n:n-1)+Bt/2,s.x2=ns(t),s.y1=Ht/2,s.y2=Ht/2,"<g>"+is(i)+ms(e,t>n?0:90,t>n?90:180,o,ns(n)+(t<n?-Bt/2:Bt/2),Lt)+is(s)+"</g>"}(o[e],t,e,n),vs[r]=i,i)}let ws={};function xs(e,t,n){const o=ls(e,t);let r=ws[o];if(r)return r;const i=ns(e),s=ss(t,n[e]);return s.x1=i,s.x2=i,s.y1=0,s.y2=Ht,r=is(s),ws[o]=r,r}let Cs={};const Ss=re()("absolute","top-0","right-0","bottom-0","left-0","height-1","time-line"),ks=re()(Ss,"z2");var Ts=function({z2:e}){return o().createElement("div",{className:e?ks:Ss})};const Rs={ADDED:"added",DELETED:"deleted",MODIFIED:"modified"};class _s extends o().Component{render(){const{fileDiffType:e,getExternalIcon:t}=this.props;if(!e)return null;const n=(e=>{switch(e){case Rs.ADDED:return"added";case Rs.MODIFIED:return"modified";case Rs.DELETED:return"deleted";default:return""}})(e),r=(e=>{switch(e){case Rs.ADDED:return"color-green";case Rs.MODIFIED:return"color-orange";case Rs.DELETED:return"color-red";default:return null}})(e),i=(e=>{switch(e){case Rs.ADDED:return"added";case Rs.MODIFIED:return"modified";case Rs.DELETED:return"deleted";default:return null}})(e),s=re()("fs-1",r,"mr1");return o().createElement("span",{className:s,title:i},t(n))}}var Es=_s;const{ADDED:Os,DELETED:Is,MODIFIED:Ms}=Rs,Ps={[Os]:"CommitDiffSection-NFilesAdded",[Is]:"CommitDiffSection-NFilesDeleted",[Ms]:"CommitDiffSection-NFilesModified"};var zs=function({count:e,diffType:t,getExternalIcon:n,fileNodeListStyle:r,translate:i}){const s=r?e:i(Ps[t],e);let a,l;return r&&(a={fontSize:12,marginRight:6},l={fontSize:12,margin:"0px 3px 0px 0px"}),o().createElement("span",{className:"tiny-files-readout",style:a},o().createElement(Es,{fileDiffType:t,getExternalIcon:n,style:l}),o().createElement("span",{className:"tiny-files-readout-text"},s))},$s=function({diffStats:t,fileNodeListStyle:n,getExternalIcon:r,translate:i}){const{types:s}=e;if(!t)return o().createElement("span",null);if(!Object.values(t).some((e=>Boolean(e))))return o().createElement("span",null);const a=t.modified?o().createElement(zs,{count:t.modified,diffType:s.MODIFIED,fileNodeListStyle:!0,getExternalIcon:r,translate:i}):null,l=t.added?o().createElement(zs,{count:t.added,diffType:s.ADDED,fileNodeListStyle:!0,getExternalIcon:r,translate:i}):null,c=t.deleted?o().createElement(zs,{count:t.deleted,diffType:s.DELETED,fileNodeListStyle:!0,getExternalIcon:r,translate:i}):null,d=n?{marginLeft:10}:null;return o().createElement("span",{className:"summary",style:d},a,l,c)};const As=o().createElement("div",{className:"color-strip height-100",style:{width:2}}),Ds={},Ns={};class Ls extends o().PureComponent{render(){const{clearCurrentlyHoveredGraphCommit:e,children:t,column:n,context:r,currentlyHoveredCommitSha:i,dimRowsOfSelectedCommit:s,getExternalIcon:a,graphZoneType:l,highlightRowsOnRefHover:c,isDimmedMergeCommitRow:d,isHighlighted:u,isHovering:h,isInUnsupportedRebase:p,isMissingHoveredRefGroup:f,isSelected:m,numGraphColumns:g,onContextMenu:b,onClickCommit:v,onDoubleClickCommit:y,rowContext:w,sha:x,showColorStrip:C,showConflictIcon:S,showTimeline:k,setAsCurrentlyHoveredGraphCommit:T,style:R,title:_,translate:E,type:O,workDirStats:I}=this.props,M=function(e,t){const n=e+t.toString();let o=Ds[n];return o||(o=re()("graph-row-wrapper","grow-3","height-100","graph-zone-column","min-width-0","pb3","pointer","pt3","relative",e,{"is-hovering":t}),Ds[n]=o,o)}(O,h),P=function(e,t,n,o,r,i=!1,s=!1,a=!1,l=!1){const c=e+t+o.toString()+n.toString()+i.toString()+s.toString()+a.toString()+l.toString()+r;let d=Ns[c];return d||(d=re()("column-"+(t%r+1),"graph-row","height-100-percent","flex",e,{"is-selected":o},{"is-highlighted":n},{"dimmed-row":l&&!n||i&&(s||a)}),Ns[c]=d,d)}(O,n,u,m,g,f,c,s,d),z=k?o().createElement(Ts,null):null,$=O===ye&&void 0!==I&&Object.keys(I).length>0,A=$&&o().createElement($s,{diffStats:I,getExternalIcon:a,translate:E});return o().createElement("div",{className:M,"data-vscode-context":vn(w),onContextMenu:p?void 0:e=>b(e,l,x),onDoubleClick:e=>y(e,l,x),onMouseDown:e=>v(e,l,x),onMouseEnter:e=>T(e,l,x,i),onMouseLeave:t=>e(t,l,x,i),style:R},z,o().createElement("div",{className:P,"data-vscode-context":vn(r)},C?As:null,S?o().createElement("span",{className:re()("ml2")},a("warning")):null,o().createElement("span",{className:re()("graph-zone",$?"has-work-dir":"width-100","flex-1"),style:{lineHeight:"22px"},title:_},t),A))}}function Hs(e){const{constraints:{max:t,min:n},stats:{additions:r,deletions:i},isLastColumn:s,scrollWidth:a,zoneWidth:l}=e,c=r+i,d=Math.max(n,Math.min(t,c)),u=s?a+Zt:Zt,h=Math.max(Vt,d/t*l-u);return o().createElement("div",{className:"changes-zone changes-bar",style:{width:h}},r?o().createElement("div",{className:re()("changes-sub-bar","added",i?null:"last-bar"),style:{width:r/c*100+"%"}}):null,i?o().createElement("div",{className:"changes-sub-bar deleted last-bar",style:{width:i/c*100+"%"}}):null)}var Bs=(e,t)=>{const{processedRows:n,rowStatsConstraints:r,translate:i,getExternalIcon:s,highlightRowsOnRefHover:a,isInUnsupportedRebase:l,numGraphColumns:c,clearCurrentlyHoveredGraphCommit:d,currentlyHoveredCommitSha:u,dimMergeCommits:h,dimRowsOfSelectedCommit:p,onCommitContextMenu:f,onClickCommit:m,onDoubleClickCommit:g,setAsCurrentlyHoveredGraphCommit:b,cssVariables:v,graphZones:y}=e,w=new Nn(e);return({rowIndex:e,style:x})=>{const C=t(e),S=w.getZoneWidth(tn),k=n[e],{sha:T,stats:R,type:_,contexts:E}=k,O=E?.stats||void 0,I=E?.row||void 0;let M=[R?.files?`${R.files} files changed`:"",R?.additions?`${R.additions} lines added`:"",R?.deletions?`${R.deletions} lines deleted`:""].filter(Boolean).join(", ");M=_!==ye?M:"";const P=parseInt(v["---scrollable-scrollbar-thickness"],10);return o().createElement(Ls,{clearCurrentlyHoveredGraphCommit:d,column:k.column,context:O,currentlyHoveredCommitSha:u,dimRowsOfSelectedCommit:p,getExternalIcon:s,graphZoneType:tn,highlightRowsOnRefHover:a,isDimmedMergeCommitRow:_===ge&&h,isHighlighted:w.isHighlighted(e),isHovering:w.isHovering(e),isInUnsupportedRebase:l,isMissingHoveredRefGroup:w.isMissingHoveredRefGroup(e),isSelected:w.isSelected(e),key:C,numGraphColumns:c,onClickCommit:m,onContextMenu:f,onDoubleClickCommit:g,rowContext:I,setAsCurrentlyHoveredGraphCommit:b,sha:T,showTimeline:w.hasTimeline(e),style:x,title:M,translate:i,type:_},R&&_!==ye?o().createElement(Hs,{constraints:r,isLastColumn:Rn(tn,y),scrollWidth:P&&!Number.isNaN(P)?P:14,stats:R,zoneWidth:S}):null)}};function Fs(e){const t=(e||"").trim().toUpperCase();if(0===t.length)return"?";const n=t.split(" ");return 1===n.length?n[0][0]:n.length>1?n[0][0]+n[n.length-1][0]:"?"}function Gs(e,t){return e&&t?`${e} <${t}>`:e||t||""}var Ws=(e,t)=>{const{clearCurrentlyHoveredGraphCommit:n,currentlyHoveredCommitSha:r,dimMergeCommits:i,dimRowsOfSelectedCommit:s,getExternalIcon:a,highlightRowsOnRefHover:l,processedRows:c,isInUnsupportedRebase:d,onCommitContextMenu:u,onClickCommit:h,onDoubleClickCommit:p,numGraphColumns:f,setAsCurrentlyHoveredGraphCommit:m,translate:g}=e,b=new Nn(e);return({rowIndex:e,style:v})=>{const y=t(e),w=c[e],{author:x,email:C,sha:S,type:k,contexts:T}=w,R=k!==ye?x:void 0,_=k!==ye?Gs(x,C):void 0,E=T?.author||void 0,O=T?.row||void 0;return o().createElement(Ls,{clearCurrentlyHoveredGraphCommit:n,column:w.column,context:E,currentlyHoveredCommitSha:r,dimRowsOfSelectedCommit:s,getExternalIcon:a,graphZoneType:Qt,highlightRowsOnRefHover:l,isDimmedMergeCommitRow:k===ge&&i,isHighlighted:b.isHighlighted(e),isHovering:b.isHovering(e),isInUnsupportedRebase:d,isMissingHoveredRefGroup:b.isMissingHoveredRefGroup(e),isSelected:b.isSelected(e),key:y,numGraphColumns:f,onClickCommit:h,onContextMenu:u,onDoubleClickCommit:p,rowContext:O,setAsCurrentlyHoveredGraphCommit:m,sha:S,showTimeline:b.hasTimeline(e),style:v,title:_,translate:g,type:k},R)}},js=(e,t)=>{const{processedRows:n,translate:r,getExternalIcon:i,highlightRowsOnRefHover:s,isInUnsupportedRebase:a,numGraphColumns:l,formatCommitDateTime:c,clearCurrentlyHoveredGraphCommit:d,dimMergeCommits:u,dimRowsOfSelectedCommit:h,currentlyHoveredCommitSha:p,onCommitContextMenu:f,onClickCommit:m,onDoubleClickCommit:g,setAsCurrentlyHoveredGraphCommit:b}=e,v=new Nn(e);return({rowIndex:e,style:y})=>{const w=t(e),x=n[e],{date:C,sha:S,type:k,contexts:T}=x,R=C&&k!==ye?c(C,we.RowEntry):void 0,_=C&&k!==ye?c(C,we.Tooltip):void 0,E=T?.date||void 0,O=T?.row||void 0;return o().createElement(Ls,{clearCurrentlyHoveredGraphCommit:d,column:x.column,context:E,currentlyHoveredCommitSha:p,dimRowsOfSelectedCommit:h,getExternalIcon:i,graphZoneType:Jt,highlightRowsOnRefHover:s,isDimmedMergeCommitRow:k===ge&&u,isHighlighted:v.isHighlighted(e),isHovering:v.isHovering(e),isInUnsupportedRebase:a,isMissingHoveredRefGroup:v.isMissingHoveredRefGroup(e),isSelected:v.isSelected(e),key:w,numGraphColumns:l,onClickCommit:m,onContextMenu:f,onDoubleClickCommit:g,rowContext:O,setAsCurrentlyHoveredGraphCommit:b,sha:S,showTimeline:!1,style:y,title:_,translate:r,type:k},R)}},Us=(e,t)=>{const{dimMergeCommits:n,dimRowsOfSelectedCommit:r,processedRows:i,translate:s,getExternalIcon:a,highlightRowsOnRefHover:l,isInUnsupportedRebase:c,numGraphColumns:d,workDirStats:u,clearCurrentlyHoveredGraphCommit:h,currentlyHoveredCommitSha:p,onCommitContextMenu:f,onClickCommit:m,onDoubleClickCommit:g,setAsCurrentlyHoveredGraphCommit:b}=e,v=new Nn(e);return({rowIndex:e,style:y})=>{const w=t(e),x=i[e],{sha:C,type:S,contexts:k}=x,T=S===ye?s("Graph-WorkInProgress"):x.message,R=S===ye?s("Graph-WorkInProgress"):x.messageInline,_=k?.message||void 0,E=k?.row||void 0;return o().createElement(Ls,{clearCurrentlyHoveredGraphCommit:h,column:x.column,context:_,currentlyHoveredCommitSha:p,dimRowsOfSelectedCommit:r,getExternalIcon:a,graphZoneType:Xt,highlightRowsOnRefHover:l,isDimmedMergeCommitRow:S===ge&&n,isHighlighted:v.isHighlighted(e),isHovering:v.isHovering(e),isInUnsupportedRebase:c,isMissingHoveredRefGroup:v.isMissingHoveredRefGroup(e),isSelected:v.isSelected(e),key:w,numGraphColumns:d,onClickCommit:m,onContextMenu:f,onDoubleClickCommit:g,rowContext:E,setAsCurrentlyHoveredGraphCommit:b,sha:C,showColorStrip:!0,showConflictIcon:S===me||S===be,showTimeline:v.hasTimeline(e),style:y,title:T,translate:s,type:S,workDirStats:u},R)}},Vs=(e,t)=>{const{processedRows:n,translate:r,getExternalIcon:i,highlightRowsOnRefHover:s,isInUnsupportedRebase:a,numGraphColumns:l,clearCurrentlyHoveredGraphCommit:c,currentlyHoveredCommitSha:d,dimMergeCommits:u,dimRowsOfSelectedCommit:h,onCommitContextMenu:p,onClickCommit:f,onDoubleClickCommit:m,setAsCurrentlyHoveredGraphCommit:g,shaLength:b}=e,v=new Nn(e);return({rowIndex:e,style:y})=>{const w=t(e),x=n[e],{sha:C,type:S,contexts:k}=x,T=((e,t=6)=>e?e.substring(0,t):"")(C,b),R=k?.sha||void 0,_=k?.row||void 0;return o().createElement(Ls,{clearCurrentlyHoveredGraphCommit:c,column:x.column,context:R,currentlyHoveredCommitSha:d,dimRowsOfSelectedCommit:h,getExternalIcon:i,graphZoneType:en,highlightRowsOnRefHover:s,isDimmedMergeCommitRow:S===ge&&u,isHighlighted:v.isHighlighted(e),isHovering:v.isHovering(e),isInUnsupportedRebase:a,isMissingHoveredRefGroup:v.isMissingHoveredRefGroup(e),isSelected:v.isSelected(e),key:w,numGraphColumns:l,onClickCommit:f,onContextMenu:p,onDoubleClickCommit:m,rowContext:_,setAsCurrentlyHoveredGraphCommit:g,sha:C,showTimeline:v.hasTimeline(e),style:y,translate:r,type:S},S!==ye?o().createElement("span",{className:"font-monospace pointer",title:T},T):null)}},Zs=function({style:e,children:t,column:n,numGraphColumns:r,onMouseEnter:i,onMouseLeave:s}){const a=e?.top||0;return o().createElement("div",{className:re()("ref-zone","column-"+(n%r+1))},o().createElement("ul",{onMouseEnter:i,onMouseLeave:s,style:{...e,top:a-11,position:"absolute",listStyle:"none",padding:0,zIndex:1}},t))},qs=function({enabledRefMetadataTypes:e,column:t,context:n,getTargetRef:r,hasActive:i,hasRefs:s,getExternalIcon:a,includeOnlyRefsById:l,includeOnlyRemotesByName:c,isHovered:d,isInUnsupportedRebase:u,numGraphColumns:h,onMissingRefMetadata:p,refGroupContexts:f,refGroupsByName:m,refMetadata:g,refNodeHovered:b,sha:v,showContextMenuForGroupedRef:y,onClickRef:w,onDoubleClickRef:x,onToggleRefNodesShown:C,translate:S}){const k=(e,t,n)=>{const o=[];for(let e=0;e<t.length;e+=1){const n=t[e];o.push({id:Cn(n),name:n.name,type:n.refType,owner:n.owner,avatarUrl:n.avatarUrl})}C(e,o,!1,n)},T=d?m:[m[0]],R=Object.values(l),_=R.length>0&&R.some((e=>e.type===gn.TAG)),E=T.map((t=>{const n=f?.[t[0].name]||void 0,r=t.some((e=>{const t=Cn(e);switch(e.refType){case gn.TAG:return _&&Boolean(l[t]);case gn.REMOTE:return Boolean(l[t])||e.owner&&c[e.owner];default:return Boolean(l[t])}})),h=o().createElement(po,{enabledRefMetadataTypes:e,getExternalIcon:a,groupIsHovered:d,hasActive:i,hasRefs:s,isInUnsupportedRebase:u,isRefGroupIncluded:r,key:`ref-node-${t[0].fullName||t[0].name}`,onClick:w,onContextMenu:y,onDoubleClick:x,onHideRefClick:k,onHovered:b,onMissingRefMetadata:p,refGroup:t,refGroupContext:n,refMetadata:g,sha:v,translate:S});return d?o().createElement("li",{key:h.key},h):h}));return d?o().createElement("div",{"data-vscode-context":vn(n),style:{height:100,position:"relative"}},o().createElement(Ge,{placement:"right",show:d,target:r},o().createElement(Zs,{column:t,numGraphColumns:h},E))):o().createElement("span",{"data-vscode-context":vn(n),style:{minWidth:0}},E)};function Ks({hasRefs:e,isActiveSha:t,left:n,type:r,width:i}){const s=re()("ref-line","z4",{"is-active":t});return e&&function(e){return[fe,ge,me].includes(e)}(r)?o().createElement("hr",{className:s,style:{left:n,width:i}}):null}var Ys=Ks;function Xs({hasRefs:e,isActiveSha:t,nodeOffset:n,type:r}){return o().createElement(Ks,{hasRefs:e,isActiveSha:t,left:0,type:r,width:n+(r===ge?Ut:0)})}var Qs=function({hasActive:e,overflowCount:t}){return o().createElement("span",{className:re()("overflow-count ml1",{"is-active":e}),"data-test-class":"overflow-count"},"+",t)};const Js={};class ea extends o().PureComponent{refPopoverTarget;isContextMenuShown=!1;static defaultProps={style:{}};componentWillReceiveProps(e){this.props.hasRefs||!this.props.isSingleSelected||e.isSingleSelected||this.props.hoveredRefZoneSha!==this.props.sha||(this.props.refZoneUnhovered(),this.props.hoveredRefGroup&&this.props.refNodeUnhovered(void 0,this.props.hoveredRefGroup,this.props.sha))}getRefPopoverTarget=()=>this.refPopoverTarget;onCustomToggleRefNodesShown=(e,t,n,o)=>{this.props.onToggleRefNodesShown(e,t,n,o),this.props.refZoneUnhovered()};render(){const{enabledRefMetadataTypes:e,column:t,context:n,showGhostRefsOnRowHover:r,hasActive:i,hasRefs:s,hasTimeline:a,hoveredRefGroup:l,hoveredRefZoneSha:c,getExternalIcon:d,includeOnlyRefsById:u,includeOnlyRemotesByName:h,isContainerWindowFocused:p,isInUnsupportedRebase:f,numGraphColumns:m,onClickRef:g,onDoubleClickRef:b,onMissingRefMetadata:v,refGroupContexts:y,refGroupsByName:w,refMetadata:x,refNodeHovered:C,refNodeUnhovered:S,refZoneHovered:k,refZoneUnhovered:T,sha:R,showContextMenuForGroupedRef:_,style:E,translate:O,type:I,width:M}=this.props,P=c===R&&p,z={minWidth:M,width:M},$={...E,...z},A=a?o().createElement(Ts,null):null,D=w.length,N=e=>{k(R),D?C(e,w[0],R):l&&S(e,l,R)},L=e=>{p&&this.isContextMenuShown?this.isContextMenuShown=!1:(T(),l&&S(e,l,R))},H=function(e,t,n,o,r,i){const s=e+t+n.toString()+o.toString()+r+i.toString();let a=Js[s];return a||(a=re()("column-"+(t%r+1),"flex","pb3","pt3","ref-zone","relative",e,{"dim-ref":i,"has-active":o,z6:n,z1:!n}),Js[s]=a,a)}(I,t,P,i,m,D>0&&!s&&r);if(!D)return o().createElement("div",{className:H,onMouseEnter:N,onWheel:L,style:$},A);const B=z,F=D-1,G=F>0&&!P?o().createElement(Qs,{hasActive:i,overflowCount:F}):null;return o().createElement("div",{className:H,onMouseEnter:N,onMouseLeave:L,onWheel:L,style:$},o().createElement("div",{ref:e=>this.refPopoverTarget=e}),A,o().createElement("div",{className:"flex",style:B},o().createElement(qs,{column:t,context:n,enabledRefMetadataTypes:e,getExternalIcon:d,getTargetRef:this.getRefPopoverTarget,hasActive:i,hasRefs:s,includeOnlyRefsById:u,includeOnlyRemotesByName:h,isHovered:P,isInUnsupportedRebase:f,numGraphColumns:m,onClickRef:g,onDoubleClickRef:b,onMissingRefMetadata:v,onToggleRefNodesShown:this.onCustomToggleRefNodesShown,refGroupContexts:y,refGroupsByName:w,refMetadata:x,refNodeHovered:C,sha:R,showContextMenuForGroupedRef:(e,t,n)=>{N(e),this.isContextMenuShown=!0,_(e,t,n)},translate:O}),G),s?o().createElement("div",{className:"absolute left-0 flex z1",style:z},o().createElement(Ys,{hasRefs:!0,isActiveSha:i,left:2,type:I,width:"100%"})):null)}}var ta=(e,t)=>{const{enabledRefMetadataTypes:n,showGhostRefsOnRowHover:r,onDoubleClickRef:i,processedRows:s,includeOnlyRefsById:a,includeOnlyRemotesByName:l,isContainerWindowFocused:c,isInUnsupportedRebase:d,getExternalIcon:u,hoveredRefGroup:h,hoveredRefZoneSha:p,numGraphColumns:f,onClickRef:m,onMissingRefMetadata:g,onShowContextMenuForGroupedRef:b,onRefNodeHovered:v,onRefNodeUnhovered:y,onRefZoneHovered:w,onRefZoneUnhovered:x,onToggleRefNodesShown:C,refMetadataById:S,translate:k}=e,T=new Nn(e);return({rowIndex:e,style:R})=>{const _=t(e),E=s[e],O=T.getZoneWidth(Kt),I=T.isHovering(e),{sha:M,type:P,hasRefs:z,contexts:$}=E,A=$?.ref||void 0,D=$?.refGroups||void 0,N=T.isSingleSelected(e),L=(r||z)&&(z||I||N)?T.getGraphRefGroupsByNameForRow(e):[];return o().createElement(ea,{column:E.column,context:A,enabledRefMetadataTypes:n,getExternalIcon:u,hasActive:T.rowContainsCurrentHeadRef(E),hasRefs:z||!1,hasTimeline:T.hasTimeline(e),hoveredRefGroup:h,hoveredRefZoneSha:p,includeOnlyRefsById:a,includeOnlyRemotesByName:l,isContainerWindowFocused:c,isInUnsupportedRebase:d,isSingleSelected:N,key:_,numGraphColumns:f,onClickRef:m,onDoubleClickRef:i,onMissingRefMetadata:g,onToggleRefNodesShown:C,refGroupContexts:D,refGroupsByName:L,refMetadata:S,refNodeHovered:v,refNodeUnhovered:y,refZoneHovered:w,refZoneUnhovered:x,sha:M,showContextMenuForGroupedRef:b,showGhostRefsOnRowHover:r,style:R,translate:k,type:P,width:O})}};function na({className:e,marginLeft:t}){return o().createElement("div",{className:re()("app-bg0","absolute","left-0","right-0","bottom-0","top-0","pt3","pb3",e),style:{marginLeft:t}},o().createElement("div",{className:"commit-bg-color height-100-percent width-100-percent"}))}const oa=e=>Dt+Bt*e+11;function ra({column:e}){return o().createElement(na,{className:"z1",marginLeft:oa(e)})}function ia(){return o().createElement(na,{marginLeft:0})}function sa(e){switch(e){case 48:return 0;case 49:return 1;case 50:return 2;case 51:return 3;case 52:return 4;case 53:return 5;case 54:return 6;case 55:return 7;case 56:return 8;case 57:return 9;case 97:case 65:return 10;case 98:case 66:return 11;case 99:case 67:return 12;case 100:case 68:return 13;case 101:case 69:return 14;case 102:case 70:return 15}return 0}function aa(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function la(e){const t=e.h/360,{s:n,l:o,a:r}=e;let i,s,a;if(0===n)i=s=a=o;else{const e=o<.5?o*(1+n):o+n-o*n,r=2*o-e;i=aa(r,e,t+1/3),s=aa(r,e,t),a=aa(r,e,t-1/3)}return{type:"rgba",r:Math.round(255*i),g:Math.round(255*s),b:Math.round(255*a),a:r}}const ca=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function da(e){if(0===(e=e.trim()).length)return null;if(35===e.charCodeAt(0))return function(e){const t=(e=e.trim()).length;if(0===t)return null;if(35!==e.charCodeAt(0))return null;if(7===t)return{type:"rgba",r:16*sa(e.charCodeAt(1))+sa(e.charCodeAt(2)),g:16*sa(e.charCodeAt(3))+sa(e.charCodeAt(4)),b:16*sa(e.charCodeAt(5))+sa(e.charCodeAt(6)),a:1};if(9===t)return{type:"rgba",r:16*sa(e.charCodeAt(1))+sa(e.charCodeAt(2)),g:16*sa(e.charCodeAt(3))+sa(e.charCodeAt(4)),b:16*sa(e.charCodeAt(5))+sa(e.charCodeAt(6)),a:(16*sa(e.charCodeAt(7))+sa(e.charCodeAt(8)))/255};if(4===t){const t=sa(e.charCodeAt(1)),n=sa(e.charCodeAt(2)),o=sa(e.charCodeAt(3));return{type:"rgba",r:16*t+t,g:16*n+n,b:16*o+o,a:1}}if(5===t){const t=sa(e.charCodeAt(1)),n=sa(e.charCodeAt(2)),o=sa(e.charCodeAt(3)),r=sa(e.charCodeAt(4));return{type:"rgba",r:16*t+t,g:16*n+n,b:16*o+o,a:(16*r+r)/255}}return null}(e);const t=ca.exec(e);if(null==t)return null;const n=t[1];let o;switch(n){case"rgb":case"hsl":o=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":o=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}return"hsl"===n||"hsla"===n?la({h:o[0],s:o[1],l:o[2],a:o[3]}):{type:"rgba",r:o[0],g:o[1],b:o[2],a:o[3]}}class ua extends o().Component{overlayTriggerRef;constructor(e){super(e),this.state={tooltipText:""}}componentDidUpdate(e,t){this.overlayTriggerRef&&this.state.tooltipText!==t.tooltipText&&this.overlayTriggerRef.show()}getMaybeDefaultAvatar=(e,t)=>{const{authorInitials:n,classes:r,column:i,context:s,cssVariables:a,divStyle:l,fontSize:c,minWidth:d,size:u,title:h=""}=this.props,p=void 0!==i&&a[he(i)]||"#199489",f=(e=>{return"hsla"===(t=da(e)).type&&(t=la(t)),(299*t.r+587*t.g+114*t.b)/1e3<128?"#FFFFFF":"#000000";var t})(p.trim()),m={alignItems:"center",backgroundColor:p,backgroundSize:u,color:f,display:"flex",fontSize:c+"px",fontWeight:"bold",height:e,justifyContent:"center",minWidth:d,width:t,...l},g=["avatar","gravatar","rad2",...r||[]].join(" ").trim();return o().createElement("div",{className:g,"data-vscode-context":vn(s),style:m,title:h},n?n.toUpperCase():"")};ensureTooltipText=()=>{const{tooltip:e}=this.props;this.setState({tooltipText:"function"==typeof e?e():e})};setOverlayTriggerRef=e=>{this.overlayTriggerRef=e};render(){const{tooltipText:e}=this.state,{avatarUrl:t,classes:n,context:r,divStyle:i,height:s,minWidth:a,size:l,title:c="",tooltip:d,useAuthorInitialsForAvatars:u,width:h}=this.props,p=s||l,f=h||l;let m;if(u||!t)m=this.getMaybeDefaultAvatar(p,f);else{const e={height:p,width:f,backgroundImage:`url('${t}')`,backgroundSize:l,minWidth:a,...i},s=["avatar","gravatar","rad2",...n||[]].join(" ").trim();m=o().createElement("div",{className:s,"data-test-class":"avatar","data-vscode-context":vn(r),style:e,title:c})}return d?o().createElement(Yn,{delayShow:250,key:e,onEnter:this.ensureTooltipText,overlay:o().createElement(Jn,{id:"graph-gravatar-tooltip"},e),placement:"top",ref:this.setOverlayTriggerRef,trigger:["hover","focus"]},m):m}}class ha extends o().PureComponent{render(){const{authorEmail:e,authorName:t,getExternalIcon:n,left:r,opacity:i,type:s}=this.props;return(t||e)&&s===fe?(({authorEmail:e,authorInitials:t,authorName:n,avatarUrl:r,column:i,context:s,cssVariables:a,left:l,message:c,opacity:d,type:u,useAuthorInitialsForAvatars:h})=>o().createElement(ua,{authorInitials:t,avatarUrl:r,classes:["node",`${u}`,"z6"],column:i,context:s,cssVariables:a,divStyle:{left:l,opacity:d},fontSize:10,height:22,size:Wt,tooltip:()=>{const t=n&&""!==n.trim()&&"Unknown"!==n?Gs(n,e):e,o=function(e){const t=[];for(let n=es.exec(e);null!==n;n=es.exec(e)){const[,e,o]=n;t.push({name:e,email:o})}return t}(function(e,t="\n"){return e.replace("\n"===t?Ji:new RegExp(`^.*(:?${t}){0,2}`,"m"),"")}(c||""));let r="";if(0===o.length)r=t;else{o.unshift({email:e,name:n});for(let e=0;e<o.length;e+=1){const t=o[e];r+=Gs(t.name,t.email),e<o.length-1&&(r+=", ")}}return r},useAuthorInitialsForAvatars:h,width:22}))(this.props):s===ge||s===me||s===be?((e,t,n,r,i)=>{const s={height:12,left:n+5,opacity:r},a=re()("node",i,"z6"),l=o().createElement(Jn,{id:"graph-merge-node-tooltip"},Gs(t,e));return o().createElement(Yn,{delayShow:250,overlay:l,placement:"bottom",trigger:["hover","focus"]},o().createElement("div",{className:a,"data-test-class":"tree-row-commit-node",style:s}))})(e,t,r,i,s):((e,t,n,r,i)=>{const s={height:22,left:n,opacity:r},a=re()("node",i,"z6");return o().createElement("div",{className:a,"data-test-class":"tree-row-commit-node",style:s},i===ve?e("stash"):null)})(n,0,r,i,s)}}class pa extends o().Component{render(){const{columnColorByColumn:e,edgeColumnMax:t,edges:n,nodeColumn:r}=this.props,i=function(e,t,n,o){const r=function(e,t,n){let o="";for(let r=0;r<=t;r++){const{passThrough:t,starting:i,ending:s}=e[r]||{};o=o+"_"+as(r,n,i?.type),o=o+"_"+as(r,n,s?.type),o=o+"_"+ls(r,t?.type)}return o}(e,t,n);let i=Cs[r];if(i)return i;let s="";for(let r=0;r<=t;r+=1){const t=e[r];if(!t)continue;const{passThrough:i,starting:a,ending:l}=t;s+=a?bs(r,n,a.type,o):"",s+=i?xs(r,i.type,o):"",s+=l?ys(r,n,l.type,o):""}return i='url(\'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><g>'+s+"</g></svg>')",Cs[r]=i,i}(n,t,r,e);return o().createElement("div",{className:"absolute top-0 right-0 bottom-0 left-0 z2",style:{background:i}})}}var fa=pa;function ma({boxShadowAlpha:e,boxShadowLeft:t,children:n,className:r="",left:i,width:s}){return o().createElement("div",{className:re()("absolute","top-0","bottom-0","z3",r),style:{boxShadow:`${t}px 5px 10px rgba(0, 0, 0, ${e})`,left:i,width:s}},n)}function ga({boxShadowAlpha:e,hasTimeline:t,scrollLeft:n,width:r}){return o().createElement(ma,{boxShadowAlpha:e,boxShadowLeft:5,className:"app-bg0 left-0",left:n,width:r},t?o().createElement(Ts,{z2:!0}):null)}function ba({boxShadowAlpha:e,commitZoneWidth:t,hasTimeline:n,scrollLeft:r,width:i}){return o().createElement(ma,{boxShadowAlpha:e,boxShadowLeft:-5,left:r+t-i,width:i},n?o().createElement(Ts,{z2:!0}):null,o().createElement(ia,null))}class va extends o().PureComponent{render(){const{authorEmail:e,authorName:t,avatarContext:n,avatarUrl:r,clearCurrentlyHoveredGraphCommit:i,column:s,columnColorByColumn:a,commitZoneWidth:l,cssVariables:c,currentlyHoveredCommitSha:d,edgeColumnMax:u,edges:h,hasRefs:p,hasTimeline:f,getExternalIcon:m,isActiveSha:g,isInUnsupportedRebase:b,isSelected:v,leftGutterBoxShadowAlpha:y,leftGutterWidth:w,message:x,nodeOffset:C,nodeOpacity:S,numGraphColumns:k,onContextMenu:T,onClickCommit:R,onDoubleClickCommit:_,rightGutterBoxShadowAlpha:E,rightGutterWidth:O,rowContext:I,scrollLeft:M,setAsCurrentlyHoveredGraphCommit:P,sha:z,style:$,type:A,useAuthorInitialsForAvatars:D,zoneContext:N}=this.props,L=s%k+1,H=re()("relative","commit-zone","height-100-percent","pt3",A,`column-${L}`,{"is-selected":v,"has-active":g}),B=f?o().createElement(Ts,{z2:!0}):null,F=o().createElement("div",{className:H,"data-vscode-context":vn(N),onContextMenu:b?void 0:e=>T(e,Yt,z),onDoubleClick:e=>_(e,Yt,z),onMouseDown:e=>R(e,Yt,z),onMouseEnter:e=>P(e,Yt,z,d),onMouseLeave:e=>i(e,Yt,z,d),style:$},B,o().createElement(ga,{boxShadowAlpha:y,hasTimeline:f,scrollLeft:M,width:w}),o().createElement(Xs,{hasRefs:p,isActiveSha:g,nodeOffset:C,type:A}),o().createElement(ha,{authorEmail:e,authorInitials:Fs(t),authorName:t,avatarUrl:r,column:s,context:n,cssVariables:c,getExternalIcon:m,left:C,message:x,opacity:S,type:A,useAuthorInitialsForAvatars:D}),o().createElement(ra,{column:s}),o().createElement(fa,{columnColorByColumn:a,edgeColumnMax:u,edges:h,nodeColumn:s}),o().createElement(ba,{boxShadowAlpha:E,commitZoneWidth:l,hasTimeline:f,scrollLeft:M,width:O}));return I?o().createElement("div",{"data-vscode-context":vn(I)},F):F}}var ya=function(e,t){const{avatarUrlByEmail:n,onMissingAvatar:r,clearCurrentlyHoveredGraphCommit:i,columnColorByColumn:s,cssVariables:a,currentlyHoveredCommitSha:l,processedRows:c,getExternalIcon:d,isInUnsupportedRebase:u,leftGutterBoxShadowAlpha:h,leftGutterWidth:p,onCommitContextMenu:f,onClickCommit:m,onDoubleClickCommit:g,nodeOffsetByColumn:b,nodeOpacityByColumn:v,numGraphColumns:y,rightGutterBoxShadowAlpha:w,rightGutterWidth:x,setAsCurrentlyHoveredGraphCommit:C,scrollLeft:S,useAuthorInitialsForAvatars:k}=e,T=new Nn(e);return({rowIndex:e,style:R})=>{const _=t(e),E=c[e],O=T.getZoneWidth(Yt),{email:I,author:M,contexts:P,message:z,sha:$,type:A}=E,D=E.column,N=P?.graph||void 0,L=P?.avatar||void 0,H=P?.row||void 0;let B;return k||(B=n[I],B||r(I,$)),o().createElement(va,{authorEmail:I,authorName:M,avatarContext:L,avatarUrl:B,clearCurrentlyHoveredGraphCommit:i,column:D,columnColorByColumn:s,commitZoneWidth:O,cssVariables:a,currentlyHoveredCommitSha:l,edgeColumnMax:E.edgeColumnMaxes,edges:E.edges,getExternalIcon:d,hasRefs:E.hasRefs||!1,hasTimeline:T.hasTimeline(e),isActiveSha:T.rowContainsCurrentHeadRef(E),isInUnsupportedRebase:u,isSelected:T.isSelected(e),key:_,leftGutterBoxShadowAlpha:h,leftGutterWidth:p,message:z,nodeOffset:b[D],nodeOpacity:v[D],numGraphColumns:y,onClickCommit:m,onContextMenu:f,onDoubleClickCommit:g,rightGutterBoxShadowAlpha:w,rightGutterWidth:x,rowContext:H,scrollLeft:S,setAsCurrentlyHoveredGraphCommit:C,sha:$,style:R,type:A,useAuthorInitialsForAvatars:k,zoneContext:N})}},wa=(e,t)=>{const{translate:n,processedRows:r}=e,i=re()("graph-row-wrapper","grow-3","height-100","graph-zone-column","min-width-0","pb3","pointer","pt3","relative"),s=new Nn(e);return({rowIndex:e,style:a})=>{const l=t(e),c=re()("graph-row","height-100-percent","flex"),d=s.hasTimeline(e),u=r[e],h=u.contexts?.row||void 0,p=u.timeLineEntry?.label||"",f=u.timeLineEntry?.value||0,m=d?o().createElement(Ts,null):null,g=d?o().createElement("span",{className:"time-line-message-container"},o().createElement("span",{className:"time-line-message"},n(p,f))):null;return o().createElement("div",{className:i,"data-vscode-context":vn(h),key:l,style:a},m,o().createElement("div",{className:c,"data-vscode-context":vn(h)},g))}};class xa extends o().PureComponent{graphContainerRef=o().createRef();resizeObserver;isSelectedBySha={};processedGraphRowBySha={};childrenBySha={};scrollToSha;lastLazyLoadHeight=0;lastTopVisibleRowIndex=-1;lastBottomVisibleRowIndex=-1;maxColumns=0;orderedGraphRows=[];rowStatsConstraints={min:0,max:0};shouldFireShowMoreCommits=!0;columnsToFreeWhenFound={};reserverInfoBySha={};columnsUsed={};workDirStats=hn;excludeByType={};excludeRefsById={};includeOnlyRefsById={};excludeRemotesByName={};includeOnlyRemotesByName={};scrollLeft=0;scrollTop=0;graphHeight=585;graphWidth=804;graphZonesByType={};graphZoneOrdering=[Kt,Yt,Xt,Qt,tn,Jt,en];missingAvatarsTimer;pendingMissingAvatars={};requestedMissingAvatars={};missingRefsMetadataTimer;pendingMissingRefsMetadata={};requestedMissingRefsMetadata={};markerRowIndices={};timelinesInterval;constructor(e){super(e),this.resizeObserver=new ResizeObserver((e=>e.forEach((e=>this.onGraphResized(e.contentRect.width,e.contentRect.height))))),this.isSelectedBySha=this.props.isSelectedBySha||{},this.excludeByType=this.props.excludeByType||{},this.excludeRefsById=this.props.excludeRefsById||{},this.excludeRemotesByName=this.getExcludeRemotesByName(),this.includeOnlyRemotesByName=this.getIncludeOnlyRemotesByName(),this.includeOnlyRefsById=this.props.includeOnlyRefsById||{},this.workDirStats=this.props.workDirStats||this.workDirStats,this.processRows(this.props.graphRows),this.cleanupSelections(),this.updateMarkerRowIndices([nn.Selection,nn.Highlights]);const t=pe(this.props.cssVariables);this.state={avatarUrlByEmail:this.props.avatarUrlByEmail||{},contexts:this.props.contexts,cssVariablesWithDefaults:t,columnColorByColumn:this.getColumnColorByColumn(t),currentlyHoveredCommitSha:void 0,dimMergeCommits:this.props.dimMergeCommits||!1,dimRowsOfSelectedCommit:!1,highlightRowsOnRefHover:this.props.highlightRowsOnRefHover||!1,showGhostRefsOnRowHover:this.props.showGhostRefsOnRowHover||!1,showRemoteNamesOnRefs:this.props.showRemoteNamesOnRefs||!1,enabledRefMetadataTypes:this.props.enabledRefMetadataTypes||[],enabledScrollMarkerTypes:this.props.enabledScrollMarkerTypes||[],graphZones:this.initializeGraphZones(this.props.columnsSettings,this.graphZoneOrdering,580),hasMoreCommits:this.props.hasMoreCommits||!1,height:this.graphHeight,highlightedShas:this.props.highlightedShas,hoveredRefGroup:void 0,hoveredRefZoneSha:void 0,isContainerWindowFocused:void 0===this.props.isContainerWindowFocused||this.props.isContainerWindowFocused,isLoadingRows:this.props.isLoadingRows||!1,numGraphColumns:this.getNumGraphColumns(t),processedRows:[...this.orderedGraphRows],refMetadataById:this.props.refMetadataById,useAuthorInitialsForAvatars:this.props.useAuthorInitialsForAvatars||!1,scrollLeft:this.getScrollLeft(),scrollToAlignment:this.getScrollToAlignment(),scrollToIndex:this.getScrollToIndex(),scrollTop:this.getScrollTop(),shaLength:this.props.shaLength,themeOpacityFactor:this.props.themeOpacityFactor||1,width:this.graphWidth,workDirStats:this.workDirStats}}componentDidMount(){this.resizeObserver.observe(this.graphContainerRef.current),window.addEventListener("keydown",this.onWindowKeyDown),window.addEventListener("keyup",this.onWindowKeyUp),window.addEventListener("blur",this.onWindowBlur);const e=this.isSelectedBySha?this.getSelectedShas():[];e.length>0&&this.selectCommits(e,!1,!0)}componentWillReceiveProps(e){let t=!1,n=!1;if(this.props.highlightedShas!==e.highlightedShas){this.setState({highlightedShas:e.highlightedShas});const t=Object.keys(e.highlightedShas||{}).filter((t=>e.highlightedShas[t])),n=[];t.forEach((e=>{void 0!==this.processedGraphRowBySha[e]?.rowIndex&&n.push(this.processedGraphRowBySha[e].rowIndex)})),this.markerRowIndices={...this.markerRowIndices,[nn.Highlights]:n}}if(this.props.isSelectedBySha!==e.isSelectedBySha&&this.selectCommits(e.isSelectedBySha?Object.keys(e.isSelectedBySha):[],!1,!0),this.props.excludeByType!==e.excludeByType&&(this.excludeByType=e.excludeByType||{},e.graphRows?.length&&(n=!0)),this.props.excludeRefsById!==e.excludeRefsById&&(this.excludeRefsById=e.excludeRefsById||{},this.excludeRemotesByName=this.getExcludeRemotesByName(),e.graphRows?.length&&(n=!0)),this.props.includeOnlyRefsById!==e.includeOnlyRefsById&&(this.includeOnlyRefsById=e.includeOnlyRefsById||{},this.includeOnlyRemotesByName=this.getIncludeOnlyRemotesByName(),e.graphRows?.length&&(n=!0)),this.props.themeOpacityFactor!==e.themeOpacityFactor&&this.setState({themeOpacityFactor:e.themeOpacityFactor}),this.props.dimMergeCommits!==e.dimMergeCommits&&this.setState({dimMergeCommits:e.dimMergeCommits||!1}),this.props.highlightRowsOnRefHover!==e.highlightRowsOnRefHover&&this.setState({highlightRowsOnRefHover:e.highlightRowsOnRefHover||!1}),this.props.showGhostRefsOnRowHover!==e.showGhostRefsOnRowHover&&this.setState({showGhostRefsOnRowHover:e.showGhostRefsOnRowHover||!1}),this.props.showRemoteNamesOnRefs!==e.showRemoteNamesOnRefs&&this.setState({showRemoteNamesOnRefs:e.showRemoteNamesOnRefs||!1}),this.props.enabledRefMetadataTypes!==e.enabledRefMetadataTypes&&this.setState({enabledRefMetadataTypes:e.enabledRefMetadataTypes||[]}),this.props.enabledScrollMarkerTypes!==e.enabledScrollMarkerTypes&&this.setState({enabledScrollMarkerTypes:e.enabledScrollMarkerTypes||[]}),this.props.isContainerWindowFocused!==e.isContainerWindowFocused&&this.setState({dimRowsOfSelectedCommit:!1,isContainerWindowFocused:void 0===e.isContainerWindowFocused||e.isContainerWindowFocused}),this.props.graphRows!==e.graphRows||this.props.cssVariables!==e.cssVariables||n){this.cleanEdgeCaches();const o=pe(e.cssVariables);this.processRows(e.graphRows),this.setState({columnColorByColumn:this.getColumnColorByColumn(o),cssVariablesWithDefaults:o,numGraphColumns:this.getNumGraphColumns(o),processedRows:[...this.orderedGraphRows]}),this.updateCommitZoneContentWidthFromGraphRowsChange(),this.cleanupSelections(),t=!0,(e.graphRows?.length<this.props.graphRows?.length||n)&&(this.lastLazyLoadHeight=0)}if(this.props.useAuthorInitialsForAvatars!==e.useAuthorInitialsForAvatars&&this.setState({useAuthorInitialsForAvatars:e.useAuthorInitialsForAvatars}),this.props.shaLength!==e.shaLength&&this.setState({shaLength:e.shaLength}),this.props.hasMoreCommits!==e.hasMoreCommits&&this.setState({hasMoreCommits:e.hasMoreCommits||!1}),this.props.isLoadingRows!==e.isLoadingRows&&this.setState({isLoadingRows:e.isLoadingRows||!1}),this.props.workDirStats!==e.workDirStats&&(this.workDirStats=e.workDirStats||hn,!Pn(this.props.workDirStats)&&Pn(e.workDirStats)||Pn(this.props.workDirStats)&&!Pn(e.workDirStats)?(this.processRows(e.graphRows),this.setState({processedRows:[...this.orderedGraphRows],workDirStats:this.workDirStats})):this.setState({workDirStats:this.workDirStats})),this.props.avatarUrlByEmail!==e.avatarUrlByEmail&&(this.setState({avatarUrlByEmail:e.avatarUrlByEmail||{}}),this.requestedMissingAvatars={}),this.props.refMetadataById!==e.refMetadataById&&(this.setState({refMetadataById:e.refMetadataById}),this.requestedMissingRefsMetadata={}),this.props.columnsSettings!==e.columnsSettings&&e.columnsSettings&&(this.updateZonesFromSettings(e.columnsSettings),t=!0),this.props.contexts!==e.contexts&&this.setState({contexts:e.contexts}),t){const e=this.getOrderedActiveGraphZones();this.ensureZoneWidthsMatchGraphWidth(e,this.graphWidth),this.setState({graphZones:e})}}componentWillUnmount(){window.removeEventListener("keydown",this.onWindowKeyDown),window.removeEventListener("keyup",this.onWindowKeyUp),window.removeEventListener("blur",this.onWindowBlur),this.resizeObserver.disconnect()}onGraphVisibleRowsUpdatedThrottled=((e,t,n)=>{let o,r,i=!1,s=250;return(...t)=>{r=(new Date).getTime(),s=!o||r-o>s+20?20:250,i||(e(...t),o=(new Date).getTime(),i=!0,setTimeout((()=>{i=!1}),s))}})((()=>this.onGraphVisibleRowsUpdated()));onBlurWipNodeInput=e=>{this.props.onBlurWipNodeInput&&this.props.onBlurWipNodeInput(e)};onDoubleClickRef=(e,t,n,o)=>{this.props.onDoubleClickGraphRef&&this.props.onDoubleClickGraphRef(e,t,this.processedGraphRowBySha[n],o)};onFocusWipNodeInput=e=>{this.props.onFocusWipNodeInput&&this.props.onFocusWipNodeInput(e)};onCurrentlyHoveredGraphCommit=(e,t,n,o)=>{o!==n&&(this.props.onGraphRowHovered&&this.props.onGraphRowHovered(e,t,this.processedGraphRowBySha[n]),this.setState({currentlyHoveredCommitSha:n}))};onClearCurrentlyHoveredGraphCommit=(e,t,n,o)=>{o&&(this.props.onGraphRowUnhovered&&this.props.onGraphRowUnhovered(e,t,this.processedGraphRowBySha[n]),this.setState({currentlyHoveredCommitSha:void 0}))};onGraphColumnReOrdered=(e,t)=>{const n=this.graphZoneOrdering.indexOf(e);let o=t?this.graphZoneOrdering.indexOf(t):this.graphZoneOrdering.length-1;t&&n<o&&(o-=1),this.graphZoneOrdering.splice(n,1),this.graphZoneOrdering.splice(o,0,e);const r={};this.graphZoneOrdering.forEach(((e,t)=>{this.graphZonesByType[e].order=t,r[e]=this.getGraphColumnSettingFromZoneType(this.graphZonesByType[e])})),this.setState({graphZones:this.initializeGraphZones(r,this.graphZoneOrdering,this.graphWidth)}),this.props.onGraphColumnsReOrdered&&this.props.onGraphColumnsReOrdered(r)};onGraphZoneResize=bn(((e,t)=>{if(t&&t.width){const n=this.getOrderedActiveGraphZones();this.adjustResizedGraphZone(n,e,t,!1),this.setState({graphZones:n})}}));onGraphZoneResizeEnd=bn(((e,t)=>{if(t&&t.width){const n=this.getOrderedActiveGraphZones();this.adjustResizedGraphZone(n,e,t,!0),this.setState({graphZones:n})}this.props.onColumnResized&&this.props.onColumnResized(e.type,this.getGraphColumnSettingFromZoneType(this.graphZonesByType[e.type]))}));onPopupGraphHeaderContextMenu=()=>{};onMessageChange=e=>{this.props.onMessageChange&&this.props.onMessageChange(e)};onClickRef=(e,t,n,o)=>{this.props.onClickGraphRef&&this.props.onClickGraphRef(e,t,this.processedGraphRowBySha[n],o)};onClickCommit=(e,t,n)=>{if(0===e.button){const{enableMultiSelection:o}=this.props,r=this.isMacOSPlatform();if(o&&(!r&&e.ctrlKey||r&&e.metaKey)?this.selectCommits([n],!0,!1):o&&e.shiftKey||this.selectCommits([n],!1,!1),this.props.onClickGraphRow){const o=this.processedGraphRowBySha[n];this.props.onClickGraphRow(e,t,o)}}};onDoubleClickCommit=(e,t,n)=>{if(this.props.onDoubleClickGraphRow){const o=this.processedGraphRowBySha[n];this.props.onDoubleClickGraphRow(e,t,o)}};onWindowKeyUp=e=>{switch(e.keyCode){case 91:this.isMacOSPlatform()&&this.dimRowsOfSelectedCommit(!1);break;case 17:this.isMacOSPlatform()||this.dimRowsOfSelectedCommit(!1)}};onWindowBlur=()=>{this.dimRowsOfSelectedCommit(!1)};onWindowKeyDown=e=>{switch(e.keyCode){case 91:this.isMacOSPlatform()&&this.dimRowsOfSelectedCommit(!0);break;case 17:this.isMacOSPlatform()||this.dimRowsOfSelectedCommit(!0);break;default:this.state.dimRowsOfSelectedCommit&&this.dimRowsOfSelectedCommit(!1)}};onKeyDown=e=>{switch(e.keyCode){case 38:this.selectPrevious(e.shiftKey);break;case 40:this.selectNext(e.shiftKey)}};onRefNodeHovered=(e,t,n)=>{(!this.props.showGhostRefsOnRowHover||$n(this.isSelectedBySha,n)||this.processedGraphRowBySha[n]?.hasRefs)&&(this.props.onGraphRefNodeHovered&&this.props.onGraphRefNodeHovered(e,t,this.processedGraphRowBySha[n]),this.setState({hoveredRefGroup:[...t]}))};onRefNodeUnhovered=(e,t,n)=>{this.props.onGraphRefNodeUnhovered&&this.props.onGraphRefNodeUnhovered(e,t,this.processedGraphRowBySha[n]),this.setState({hoveredRefGroup:void 0})};onRefZoneHovered=e=>{this.setState({hoveredRefZoneSha:e})};onRefZoneUnhovered=()=>{this.setState({hoveredRefZoneSha:void 0})};onShowMoreCommits=()=>{this.props.onShowMoreCommits&&this.shouldFireShowMoreCommits&&(this.props.onShowMoreCommits(),this.shouldFireShowMoreCommits=!1,setTimeout((()=>{this.shouldFireShowMoreCommits=!0}),100))};onScrollForZone=(e,t,n,o,r)=>{if(this.setScroll(e,t),this.props.onScrollForZone&&this.props.onScrollForZone(e,t),!this.props.onShowMoreCommits||!r||!o||o<0||!this.scrollTop||this.scrollTop<0||!this.orderedGraphRows?.length)return;const i=this.scrollTop+o,s=this.orderedGraphRows.length*zt;i>s-$t&&i>this.lastLazyLoadHeight&&(this.lastLazyLoadHeight=Math.min(i,s-1),this.onShowMoreCommits())};onScrollToRowCausedUpdateForRefZone=(e,t)=>{this.setScroll(e,t),this.props.onScrollToRowCausedUpdateForRefZone&&this.props.onScrollToRowCausedUpdateForRefZone(e,t)};onCommitContextMenu=(e,t,n)=>{if(this.props.onRowContextMenu){const o=this.processedGraphRowBySha[n];this.props.onRowContextMenu(e,t,o)}};onRefContextMenu=(e,t,n)=>{if(this.props.onRefContextMenu){const o=this.processedGraphRowBySha[n];this.props.onRefContextMenu(e,t,o)}};onWipNodeInputWillUnmount=()=>{this.props.onWipNodeInputWillUnmount&&this.props.onWipNodeInputWillUnmount()};selectCommits(e,t,n){t||Object.keys(this.isSelectedBySha).forEach((t=>{e.includes(t)||delete this.isSelectedBySha[t]}));const o=this.processedGraphRowBySha?Object.keys(this.processedGraphRowBySha):[];if(e.forEach((e=>{o.includes(e)&&(this.isSelectedBySha[e]=!t||!this.isSelectedBySha[e]||!this.isSelectedBySha[e],this.isSelectedBySha[e]&&this.selectSha(e,n))})),this.props.onSelectGraphRows){const e=this.getSelectedShas().map((e=>this.processedGraphRowBySha[e]));this.props.onSelectGraphRows(e)}this.updateMarkerRowIndices([nn.Selection]),this.setState({processedRows:[...this.orderedGraphRows]})}getCommitZoneContentWidthBetweenGutters(){return this.getCurrentWidthByZone(Yt)-this.getLeftGutterWidth()-this.getRightGutterWidth()}getSelectedShas(){const e=[];return Object.keys(this.isSelectedBySha).forEach((t=>{this.isSelectedBySha[t]&&e.push(t)})),e}getExcludeRemotesByName(){const e={};return Object.values(this.excludeRefsById).forEach((t=>{t.type===gn.REMOTE&&t.owner&&"*"===t.name&&(e[t.owner]=!0)})),e}getIncludeOnlyRemotesByName(){const e={};return Object.values(this.includeOnlyRefsById).forEach((t=>{t.type===gn.REMOTE&&t.owner&&"*"===t.name&&(e[t.owner]=!0)})),e}clearScrollToIndex=()=>{setTimeout((()=>this.setState({scrollToIndex:void 0})),100)};getTopAndBottomVisibleRowIndex(){const{graphHeight:e,orderedGraphRows:t,scrollTop:n}=this,o=e||0;if(!o||!t||!t.length)return{top:-1,bottom:-1};const r=n/zt,i=r+((o-26)/zt-1);return{top:Math.max(Math.floor(r),0),bottom:Math.min(Math.ceil(i),t.length-1)}}getOffsetSha(e){const t=this.graphHeight||0,n=this.props.scrollRowPadding||0;if(!n||!t)return e;let o=n;if(o<=0)return e;const r=this.getTopAndBottomVisibleRowIndex(),i=r.top,s=r.bottom;if(-1===i||-1===s)return e;const a=Math.floor((s-i)/2);if(a<1)return e;o=Math.min(o,a);const l=this.orderedGraphRows.length,c=this.orderedGraphRows.findIndex((t=>t.sha===e));if(!c||!this.orderedGraphRows.length)return e;const d=s-o<c;return i+o>c?this.orderedGraphRows[Math.max(c-o,0)].sha||e:d&&this.orderedGraphRows[Math.min(c+o,l-1)].sha||e}selectSha(e,t=!1){const n=this.processedGraphRowBySha[e]?.column||0,o=this.getScrollLeft(),r=this.getCommitZoneContentWidthBetweenGutters(),i=this.getCurrentWidthByZone(Yt),s=this.getCommitZoneContentWidth(),a=n*Bt,l=o-Dt/3<=a,c=a<=o+r,d=Math.max(0,s-i),u=l&&c?o:_t(a-r/2,0,d);this.setScrollToSha(t?this.getOffsetSha(e):e,u),this.setState({scrollToAlignment:this.getScrollToAlignment(),scrollToIndex:this.getScrollToIndex()},this.clearScrollToIndex)}updateWidthByZone(e,t,n){const o=this.getOrderedActiveGraphZones(),r=this.graphZonesByType[t],i=_n(r,o,e);if(r.currentWidth=i,t===Yt){const e=Math.max(0,this.getCommitZoneContentWidth()-r.currentWidth);this.getScrollLeft()>e&&this.setScrollLeft(e)}n&&(r.preferredWidth=i)}updateCommitZoneContentWidthFromGraphRowsChange(){const e=this.graphZonesByType[Yt];if(!e.isHidden){const t=this.getOrderedActiveGraphZones(),n=this.getCommitZoneContentWidth();e.contentWidth=n,e.maximumWidth=n,e.currentWidth>n&&(e.currentWidth=_n(e,t,n)),this.setState({graphZones:t})}}getCurrentWidthByZone(e){const t=this.graphZonesByType[e];return t&&!t.isHidden?t.currentWidth:0}getCommitZoneContentWidth(){return(this.maxColumns||1)*Bt+2*Dt+6}getCommitZoneWidth(){if(this.graphZonesByType[Yt])return this.graphZonesByType[Yt].currentWidth;const{columnsSettings:e}=this.props;return e&&e[Yt]?e[Yt].width:sn[Yt].minimumWidth}getSingleColumnModeFactor(){const e=this.maxColumns,t=this.getCurrentWidthByZone(Yt);return 1===e?0:_t(1-(t-2*Dt-3)/Bt,0,1)}setScroll(e,t){null!=t.scrollTop&&this.setScrollTop(t.scrollTop),e===Yt&&null!=t.scrollLeft&&this.setScrollLeft(t.scrollLeft)}getNonAdjustedScrollLeft(){return this.scrollLeft}setScrollLeft(e){this.scrollLeft!==e&&(this.scrollLeft=e,this.setState({scrollLeft:e}))}getScrollLeft(){const e=this.getNonAdjustedScrollLeft();return this.getCommitZoneContentWidth()!==this.getCommitZoneWidth()?e:0}setScrollTop(e){this.scrollTop!==e&&(this.scrollTop=e,this.setState({scrollTop:e}),this.onGraphVisibleRowsUpdatedThrottled())}getScrollTop(){return this.scrollTop}getScrollToSha(){return this.scrollToSha}setScrollToSha(e,t){this.scrollToSha=e,this.setScrollLeft(t),this.onGraphVisibleRowsUpdated()}getScrollToIndex(){const e=this.getScrollToSha();return this.orderedGraphRows.findIndex((t=>t.sha===e))}getScrollToAlignment(){return"auto"}getMinNodeOffset(){const e=this.getScrollLeft(),t=this.getSingleColumnModeFactor();return(1-t)*(e+6)+t*(e+Dt)}getMaxNodeOffset(){const e=this.getCurrentWidthByZone(Yt),t=this.getScrollLeft(),n=this.getSingleColumnModeFactor();return(1-n)*(e+t+(3-Dt))+n*(t+Dt)}getAbsoluteNodeLeftByColumn(){const e={};for(let t=0;t<=this.maxColumns;t+=1)e[t]=Dt+Bt*t;return e}getNodeOffsetByColumn(){const e=this.getMinNodeOffset(),t=this.getMaxNodeOffset(),n=this.getAbsoluteNodeLeftByColumn(),o={};return Object.keys(n).forEach((r=>{const i=n[r];o[r]=_t(i,e,t)})),o}getMaxNodeLeft(){return this.getScrollLeft()+(this.getCurrentWidthByZone(Yt)-Bt-3)}getMinNodeLeft(){return this.getScrollLeft()+3+this.getSingleColumnModeFactor()*Dt}getRightGutterSlideOutFactor(){const e=this.getCurrentWidthByZone(Yt),t=this.getCommitZoneContentWidth(),n=this.getSingleColumnModeFactor();return _t((e-(t-(Dt+3)))/Bt,0,1)+n/2}getNodeOpacityByColumn(){const e=this.getMinNodeLeft(),t=this.getMaxNodeLeft(),n=this.getAbsoluteNodeLeftByColumn(),o=this.getRightGutterSlideOutFactor(),r=this.getSingleColumnModeFactor(),i={};return Object.keys(n).forEach((s=>{const a=n[s],l=a-(e-r*Dt),c=t+Bt-(a+Dt*(1-o)),d=Math.min(l,c);i[s]=.5+.5*Math.max(d/(Dt/2),r)})),i}getLeftGutterWidth(){const e=this.getSingleColumnModeFactor();return Dt+e*(Dt/2)}getRightGutterWidth(){return(1-this.getRightGutterSlideOutFactor())*Dt}getBoxShadowAlphaForGutter(e,t){return.4*(1-Math.max(e,t))}getLeftGutterBoxShadowAlpha(e){const t=this.getScrollLeft(),n=this.getSingleColumnModeFactor();return e*this.getBoxShadowAlphaForGutter(n,_t(1-t/Bt,0,1))}getRightGutterBoxShadowAlpha(e){const t=this.getSingleColumnModeFactor(),n=this.getRightGutterSlideOutFactor();return e*this.getBoxShadowAlphaForGutter(t,n)}updateMarkerRowIndices(e){const t={...this.markerRowIndices};if(e.forEach((e=>{t[e]=[]})),e.includes(nn.Selection)&&this.getSelectedShas().forEach((e=>{void 0!==this.processedGraphRowBySha[e]?.rowIndex&&t[nn.Selection].push(this.processedGraphRowBySha[e].rowIndex)})),e.includes(nn.Highlights)){const e=this.state?.highlightedShas||this.props.highlightedShas||{};Object.keys(e).forEach((e=>{void 0!==this.processedGraphRowBySha[e]?.rowIndex&&t[nn.Highlights].push(this.processedGraphRowBySha[e].rowIndex)}))}this.markerRowIndices=t}getMarkerColors(){const e=getComputedStyle(document.body),t={};return Object.values(rn).forEach((n=>{const o=e.getPropertyValue(n.colorCssKey);o&&(t[n.type]=o)})),t}initializeGraphZones(e,t,n){this.graphZonesByType={};const o=[];let r=0;for(t.forEach(((t,n)=>{const i=e?e[t]:void 0,s=sn[t],a=i&&i.width?i.width:s.minimumWidth,l={...s,type:t,currentWidth:a,preferredWidth:a,isHidden:i?.isHidden||!1,order:s.isCustomizable&&void 0!==i?.order?i?.order:n};i?.isHidden||(r+=l.currentWidth),t===Yt&&(l.contentWidth=this.getCommitZoneContentWidth(),this.maxColumns>0&&(l.maximumWidth=l.contentWidth)),this.graphZonesByType[t]=l,l?.isHidden||o.push(l)})),o.forEach((e=>{const t=_n(e,o,e.currentWidth);t!==e.currentWidth&&(r-=e.currentWidth,e.currentWidth=t,r+=t)}));r>n;){const e=Sn(o);if(!e)break;const t=e.currentWidth,i=r-n,s=Math.max(e.minimumWidth,t-i),a=t-s;this.graphZonesByType[e.type].currentWidth=s,r-=a}if(r<n){const e=t[t.length-1],r=n-Tn(o,e);this.graphZonesByType[e].currentWidth=r}return o}updateZonesFromSettings(e){let t=!1;this.graphZoneOrdering.forEach(((n,o)=>{const r=this.graphZonesByType[n],i=e?.[r.type];i&&(i.isHidden!==r.isHidden&&(t=!0,r.type!==tn||i.isHidden||this.updateRowStatsConstraints()),r.isHidden=i.isHidden,r.order=r.isCustomizable&&void 0!==i?.order?i?.order:o)})),t&&this.graphZoneOrdering.forEach((e=>{const t=this.graphZonesByType[e];t.currentWidth=t.minimumWidth}))}getEdgeColumnMaxes(e){let t=0;const n=this.processedGraphRowBySha[e]?.edges||{};return Object.keys(n).forEach((e=>{t=Math.max(t,parseInt(e,10))})),t}getEndingAndPassThroughEdgesByColumnFromPrevRow(e,t){const n={};let o,r,i,s;return Object.keys(t).forEach((a=>{o=t[a],r=o.passThrough,i=o.starting,s=r&&!Qi(r.type)?r:i&&!Qi(i.type)?i:r||i||void 0,s&&(s.parentSha===e.sha?n[a]={ending:s}:n[a]={passThrough:s})})),n}getFinalEdgeStateForGraphAndRow(e,t){const n=this.getEndingAndPassThroughEdgesByColumnFromPrevRow(e,t),o=this.getStartingEdgesByColumn(e);let r;return Object.keys(o).forEach((e=>{n[e]||(n[e]={ending:void 0,passThrough:void 0,starting:void 0}),r=n[e],r.starting=o[e]})),n}loadEdgesBySha(){this.maxColumns=0,this.orderedGraphRows.forEach(((e,t)=>{const n=this.orderedGraphRows[t-1],o=n&&this.processedGraphRowBySha[n.sha]?.edges?this.processedGraphRowBySha[n.sha].edges:{};this.processedGraphRowBySha[e.sha].edges=this.getFinalEdgeStateForGraphAndRow(e,o);const r=this.getEdgeColumnMaxes(e.sha);this.processedGraphRowBySha[e.sha].edgeColumnMaxes=r,r>this.maxColumns&&(this.maxColumns=r)}))}processRows(e){this.loadRowsbySha(e||[]),this.loadEdgesBySha()}getStartingEdgesByColumn(e){const t={},n=e.parents;if(n.length>0){const o=e.type,r=this.processedGraphRowBySha[e.sha]?.column;void 0!==r&&(t[r]={parentSha:n[0],type:o});for(let e=1;e<n.length;e+=1){const r=n[e],i=this.processedGraphRowBySha[r]?.column;void 0!==i&&(t[i]={parentSha:r,type:o})}}return t}formatCommitDateTimeCallback=(e,t)=>this.props.formatCommitDateTime?this.props.formatCommitDateTime(e,t):function(e,t,n,o=!0){const r=`${n??""}:${t=t??void 0}`;let i=ae.get(r);if(null==i){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=se.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:n}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:n||void 0}}const n={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(ie))if(null!=t)for(const e in t){const o=t[e];if(null!=o)switch(e){case"year":n.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:n.month="long";break;case 3:n.month="short";break;case 2:n.month="2-digit";break;case 1:n.month="numeric"}break;case"day":n.day="DD"===o?"2-digit":"numeric";break;case"weekday":switch(o.length){case 4:n.weekday="long";break;case 3:n.weekday="short";break;case 2:n.weekday="narrow"}break;case"hour":n.hour=2===o.length?"2-digit":"numeric",n.hour12="hh"===o||"h"===o;break;case"minute":n.minute=2===o.length?"2-digit":"numeric";break;case"second":n.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":n.fractionalSecondDigits=3;break;case"dayPeriod":n.dayPeriod="narrow",n.hour12=!0,n.hourCycle="h12";break;case"timeZoneName":n.timeZoneName=2===o.length?"long":"short"}}return n}(t);let s;s=null==n?le:"system"===n?void 0:[n],i=new Intl.DateTimeFormat(s,e),o&&ae.set(r,i)}if(null==t||se.test(t))return i.format(e);function s(e){const t=`${n??""}:time:${e}`;let r=ae.get(t);if(null==r){const i={localeMatcher:"best fit",timeStyle:e};let s;s=null==n?le:"system"===n?void 0:[n],r=new Intl.DateTimeFormat(s,i),o&&ae.set(t,r)}return r}const a=i.formatToParts(e);return t.replace(ie,((t,n,o,r,i,l,c,d,u,h,p,f,m,g,b)=>{if(null!=n)return n.substring(1,n.length-1);for(const t in b){const n=b[t];if(null==n)continue;const o=a.find((e=>e.type===t));return"Do"===n&&"day"===o?.type?de(Number(o.value)):"a"===n&&"dayPeriod"===o?.type?` ${(s("short").formatToParts(e).find((e=>"dayPeriod"===e.type))??o)?.value??""}`:o?.value??""}return""}))}(e,"short+short");translateCallback=(e,...t)=>this.props.translate?this.props.translate(e,...t):Xi[e]?function(e,t){if(0===t.length)return e;let n=e;return t.forEach(((e,t)=>{const o=new RegExp(`\\{${t}\\}`,"g");n=n.replace(o,e)})),n}(Xi[e],t):`${e}`;getIconCallback=e=>this.props.getExternalIcon?this.props.getExternalIcon(e):o().createElement("span",null);onMissingAvatar=(e,t)=>{this.props.onEmailsMissingAvatarUrls&&!this.requestedMissingAvatars[e]&&(this.pendingMissingAvatars[e]=t,this.missingAvatarsTimer&&(clearTimeout(this.missingAvatarsTimer),this.missingAvatarsTimer=void 0),this.missingAvatarsTimer=setTimeout((()=>{const e={...this.pendingMissingAvatars};this.pendingMissingAvatars={};const t=Object.keys(e);for(let e=0;e<t.length;e+=1)this.requestedMissingAvatars[t[e]]=!0;t.length>0&&this.props.onEmailsMissingAvatarUrls&&this.props.onEmailsMissingAvatarUrls(e)}),100))};onMissingRefMetadata=(e,t)=>{if(!this.props.onRefsMissingMetadata||this.requestedMissingRefsMetadata[e])return;const n=this.pendingMissingRefsMetadata[e]||[],o=t.filter((e=>!n.includes(e)));this.pendingMissingRefsMetadata[e]=[...n,...o],this.missingRefsMetadataTimer&&(clearTimeout(this.missingRefsMetadataTimer),this.missingRefsMetadataTimer=void 0),this.missingRefsMetadataTimer=setTimeout((()=>{const e={...this.pendingMissingRefsMetadata};this.pendingMissingRefsMetadata={};const t=Object.keys(e);for(let e=0;e<t.length;e+=1)this.requestedMissingRefsMetadata[t[e]]=!0;t.length>0&&this.props.onRefsMissingMetadata&&this.props.onRefsMissingMetadata(e)}),100)};selectNext(e){const t=this.getSelectedShas(),n=t.length>0?t[t.length-1]:null;let o;if(e&&n){const e=this.processedGraphRowBySha[n];e?.parents?.length&&(o=e.parents[0])}else{const e=n?this.orderedGraphRows.findIndex((e=>e.sha===n)):-1,t=Math.min(e+1,this.orderedGraphRows.length-1);o=this.orderedGraphRows[t]?.sha}o&&this.selectCommits([o],!1,!0)}selectPrevious(e){const t=this.getSelectedShas(),n=t.length>0?t[0]:null;let o;if(e&&n){const e=this.childrenBySha[n];if(e?.length)for(let t=0;t<e.length;t+=1)if(t===e.length-1)o=e[t];else if(this.processedGraphRowBySha[e[t]]?.type!==ve){o=e[t];break}}else{const e=n?this.orderedGraphRows.findIndex((e=>e.sha===n)):-1,t=Math.max(-1,e-1);o=this.orderedGraphRows[t]?.sha,t<0&&(o=this.orderedGraphRows[0]?.sha)}o&&this.selectCommits([o],!1,!0)}getAvailableColumnAndUseIt(){let e=0;for(;this.columnsUsed[e];)e+=1;return this.columnsUsed[e]=!0,e}getColumns(e){const t=e.parents||[],n=this.columnsToFreeWhenFound[e.sha];if(void 0!==n)for(let e=0;e<n.length;e+=1)delete this.columnsUsed[n[e]];let o=0;const r=this.reserverInfoBySha[e.sha];let i,s;r&&void 0!==r?.column?(o=r.column,delete this.reserverInfoBySha[e.sha]):o=this.getAvailableColumnAndUseIt();for(let n=0;n<t.length;n+=1)if(i=t[n],s=this.reserverInfoBySha[i],0===n&&void 0!==s?.column&&s?.column!==o){const t=this.columnsToFreeWhenFound[i]||[];s?.type===ve&&e.type!==ve&&r?.newestDate>s?.newestDate?(this.reserverInfoBySha[i]={type:e.type,newestDate:r?.newestDate,column:o},t.push(s.column)):t.push(o),this.columnsToFreeWhenFound[i]=t}else void 0===s?.column&&(this.reserverInfoBySha[i]={type:e.type,newestDate:r?.column===o?r?.newestDate:e.date,column:0===n?o:this.getAvailableColumnAndUseIt()});return o}getFilteredHeadsForGraphRow(e,t){return e.heads.filter((e=>t?void 0!==this.includeOnlyRefsById[xn(gn.HEAD,e)]:!this.excludeByType.heads&&void 0===this.excludeRefsById[xn(gn.HEAD,e)]))}getFilteredRemotesForGraphRow(e,t){return e.remotes.filter((e=>t?void 0!==this.includeOnlyRefsById[xn(gn.REMOTE,e)]||!e.owner||void 0!==this.includeOnlyRemotesByName[e.owner]:!(this.excludeByType.remotes||void 0!==this.excludeRefsById[xn(gn.REMOTE,e)]||e.owner&&void 0!==this.excludeRemotesByName[e.owner])))}getFilteredTagsForGraphRow(e,t,n){const o=t&&Object.values(this.includeOnlyRefsById).some((e=>e.type===gn.TAG)),r=t&&(this.getFilteredHeadsForGraphRow(e,t).length>0||this.getFilteredRemotesForGraphRow(e,t).length>0);return e.tags.filter((e=>o?void 0!==this.includeOnlyRefsById[xn(gn.TAG,e)]:!this.excludeByType.tags&&void 0===this.excludeRefsById[xn(gn.TAG,e)]&&(!t||r||n)))}loadRowsbySha(e){this.orderedGraphRows=[],this.processedGraphRowBySha={},this.childrenBySha={},this.reserverInfoBySha={},this.columnsToFreeWhenFound={},this.columnsUsed={};const t=new Map,n={},o=[],r=[],i=[],s=[],a=[],l=[],c={},d=[],u=void 0!==this.graphZonesByType[tn]&&!this.graphZonesByType[tn].isHidden;if(Pn(this.workDirStats)&&e.length>0&&e[0].type!==ye){const t=function(e){return e.find(Mn)?.sha||void 0}(e),n={sha:ye,parents:t?[t]:[],author:"",email:"",date:(new Date).getTime(),message:"",type:ye,heads:[],remotes:[],tags:[],childRefs:{heads:[],tags:[],remotes:[]}};this.workDirStats.context&&(n.contexts={row:this.workDirStats.context}),e.unshift(n)}else!Pn(this.workDirStats)&&e.length>0&&e[0].type===ye&&e.shift();const h=Object.keys(this.includeOnlyRefsById).length>0;e.forEach(((e,p)=>{const f=this.childrenBySha[e.sha]?.length>0,m=e.heads?.length>0?this.getFilteredHeadsForGraphRow(e,h):[],g=e.remotes?.length>0?this.getFilteredRemotesForGraphRow(e,h):[],b=e.tags?.length>0?this.getFilteredTagsForGraphRow(e,h,Boolean(c[e.sha]||f)):[],v=e.parents?.length>0?e.parents.filter((e=>!n[e])):[],y=m.length>0||g.length>0||b.length>0,w=m.length>0||g.length>0;if(e.type!==fe&&e.type!==ge||c[e.sha]){if(e.type===ve&&this.excludeByType.stashes&&(n[e.sha]=!0),!n[e.sha]&&v.length>0){let e;for(e of v)c[e]=!0}}else e.type!==fe&&e.type!==ge||c[e.sha]||y||f||(n[e.sha]=!0);const x=n[e.sha],C={...e,heads:m,remotes:g,tags:b,parents:v,column:x?0:this.getColumns(e),edgeColumnMaxes:0,edges:{},hasRefs:y,messageInline:e.message.replace(/\n+(?:\s+\n+)?/g," | "),childRefs:{heads:[],tags:[],remotes:[]}};if(!x){let n;const c=t.get(e.sha);c?.length&&(c.sort(((e,t)=>{if(e.parentIndexScore<t.parentIndexScore)return-1;if(e.parentIndexScore>t.parentIndexScore)return 1;if(e.parentIndexScore===t.parentIndexScore){if(e.rowEntered<t.rowEntered)return-1;if(e.rowEntered>t.rowEntered)return 1}return 0})),n=c[0],C.childRefs={heads:[...n?.heads||[]],remotes:[...n?.remotes||[]],tags:[...n?.tags||[]]},t.delete(e.sha));for(let o=0;o<v.length;o+=1){const r=v[o];this.childrenBySha[r]||(this.childrenBySha[r]=[]),this.childrenBySha[r].push(e.sha);let i=t.get(r);(w||n)&&void 0===i&&(i=[],t.set(r,i)),w?i?.unshift({sha:e.sha,parentIndexScore:o,rowEntered:p,heads:m,remotes:g,tags:b}):n&&i?.unshift({...n,parentIndexScore:o,rowEntered:p})}const h=this.orderedGraphRows.length;C.rowIndex=h,m.length>0&&(i.push(h),m.some((e=>e.isCurrentHead))&&o.push(h)),g.length>0&&(s.push(h),g.some((e=>e.current))&&r.push(h)),b.length>0&&a.push(h),e.type===ve&&l.push(h),this.orderedGraphRows.push(C),u&&C.stats&&d.push(C.stats.additions+C.stats.deletions)}this.processedGraphRowBySha[e.sha]=C})),this.markerRowIndices={...this.markerRowIndices,[nn.Head]:o,[nn.Upstream]:r,[nn.LocalBranches]:i,[nn.RemoteBranches]:s,[nn.Tags]:a,[nn.Stashes]:l},u&&(this.rowStatsConstraints=yn(d)),clearInterval(this.timelinesInterval),this.updateTimelines(),this.timelinesInterval=setInterval((()=>{this.clearTimelines(),this.updateTimelines(),this.setState({processedRows:[...this.orderedGraphRows]})}),9e5),this.onGraphVisibleRowsUpdated()}updateRowStatsConstraints(){const e=[];for(const t of this.orderedGraphRows)t.stats&&e.push(t.stats.additions+t.stats.deletions);this.rowStatsConstraints=yn(e)}updateTimelines(){const e=function(){const e=new Date,t={hour:[],day:[],week:[],month:[],year:[]};let n;for(n=1;n<=an;n+=1)t.hour.push({date:e.getTime()-36e5*n,label:1===n?"Timeline-1HourAgo":"Timeline-NHoursAgo",timeUnit:"hour",value:n});for(n=1;n<=ln;n+=1)t.day.push({date:e.getTime()-864e5*n,label:1===n?"Timeline-Yesterday":"Timeline-NDaysAgo",timeUnit:"day",value:n});for(n=1;n<=cn;n+=1)t.week.push({date:e.getTime()-6048e5*n,label:1===n?"Timeline-1WeekAgo":"Timeline-NWeeksAgo",timeUnit:"week",value:n});const o=new Date;for(o.setHours(0,0,0,0),n=1;n<=dn;n+=1)o.setMonth(o.getMonth()-1),o.setHours(0,0,0,0),t.month.push({date:o.getTime(),label:1===n?"Timeline-1MonthAgo":"Timeline-NMonthsAgo",timeUnit:"month",value:n});const r=new Date;for(r.setHours(0,0,0,0),n=1;n<=un;n+=1){let e;switch(r.setFullYear(r.getFullYear()-1),r.setHours(0,0,0,0),n){case 1:e="Timeline-1YearAgo";break;case un:e="Timeline-NPlusYearsAgo";break;default:e="Timeline-NYearsAgo"}t.year.push({date:r.getTime(),label:e,timeUnit:"year",value:n})}return t}();Object.values(e).forEach((e=>{e.forEach((e=>{const{date:t}=e,n=this.orderedGraphRows.find((e=>e.date<t));n&&this.processedGraphRowBySha[n.sha]&&(this.processedGraphRowBySha[n.sha].timeLineEntry=e)}))}))}clearTimelines(){Object.keys(this.processedGraphRowBySha).forEach((e=>{this.processedGraphRowBySha[e].timeLineEntry&&delete this.processedGraphRowBySha[e].timeLineEntry}))}cleanupSelections(){const e=Object.keys(this.isSelectedBySha);for(let t=0;t<e.length;t+=1){const n=e[t];this.processedGraphRowBySha[n]||delete this.isSelectedBySha[n]}}getColumnColorByColumn(e){const t=this.getNumGraphColumns(e),n=this.maxColumns>t?this.maxColumns:t,o={};for(let i=0;i<=n;i+=1)if(i<t){const t=e[he(i)];o[i]="rgba"===(r=da(t)).type?`rgba(${r.r}, ${r.g}, ${r.b}, ${Number(r.a.toFixed(2))})`:`hsla(${r.h}, ${(100*r.s).toFixed(2)}%, ${(100*r.l).toFixed(2)}%, ${Number(r.a.toFixed(2))})`}else{const e=o[i%t];o[i]=e}var r;return o}getNumGraphColumns(e){const t=e["--num-columns-supported"],n=Number.parseInt(t,10);return Number.isNaN(n)?10:n}ensureZoneWidthsMatchGraphWidth(e,t){const n=Tn(e);n>t&&this.shrinkZoneWidthsToFitWidth(e,t),n<t&&this.expandZoneWidthsToFitWidth(e,t)}shrinkZoneWidthsToFitWidth(e,t,n){let o=Tn(e);for(;o>t;){const r=Sn(e,n);if(!r)break;const i=Tn(e,r.type);if(i+r.currentWidth>t){const n=_n(r,e,t-i);this.updateWidthByZone(n,r.type)}o=Tn(e)}}getOrderedActiveGraphZones(){return this.graphZoneOrdering.sort(((e,t)=>this.graphZonesByType[e].order<this.graphZonesByType[t].order?-1:this.graphZonesByType[e].order>this.graphZonesByType[t].order?1:0)).filter((e=>!this.graphZonesByType[e].isHidden)).map((e=>this.graphZonesByType[e]))}expandZoneWidthsToFitWidth(e,t,n){let o=Tn(e);for(;o<t;){const r=kn(e,n);if(!r)break;const i=Tn(e,r.type),s=r.maximumWidth?Math.min(r.maximumWidth,r.preferredWidth||1/0):r.preferredWidth||0;if(i+r.currentWidth<t){let n=t-i;!Rn(r.type,e)&&n>s&&(n=s),n=_n(r,e,n),this.updateWidthByZone(n,r.type)}o=Tn(e)}}onGraphHeaderRowMouseDown=e=>{1===e.button&&e.preventDefault()};onToggleRefNodesShown=(e,t,n,o)=>{t.forEach((e=>{n&&this.excludeRefsById[e.id]?delete this.excludeRefsById[e.id]:n||(this.excludeRefsById[e.id]=e)})),this.excludeRemotesByName=this.getExcludeRemotesByName(),this.props.onToggleRefsVisibilityClick&&this.props.onToggleRefsVisibilityClick(e,t,n,o?this.processedGraphRowBySha[o]:void 0),this.processRows(this.props.graphRows),this.setState({processedRows:[...this.orderedGraphRows]})};cleanEdgeCaches(){Cs={},gs={},ws={},vs={}}onZoneEnter=(e,t,n,o)=>{t!==Kt&&(n&&o&&this.onRefNodeUnhovered(e,n,o),this.onRefZoneUnhovered())};adjustResizedGraphZone(e,t,n,o){if(n&&n.width){const r=t.currentWidth;this.updateWidthByZone(n.width,t.type,o);const i=On(t.type,e),s=this.graphZonesByType[t.type];r>s.currentWidth&&this.expandZoneWidthsToFitWidth(e,this.graphWidth,i+1),r<s.currentWidth&&this.shrinkZoneWidthsToFitWidth(e,this.graphWidth,i-1)}}dimRowsOfSelectedCommit(e){this.setState({dimRowsOfSelectedCommit:e})}onGraphContainerBlurred=(e,t,n)=>{t&&n&&this.onRefNodeUnhovered(e,t,n),this.onRefZoneUnhovered()};onGraphContainerMouseEnter=e=>{this.props.onGraphMouseEnter&&this.props.onGraphMouseEnter(e)};onGraphContainerMouseLeave=e=>{this.props.onGraphMouseLeave&&this.props.onGraphMouseLeave(e)};onGraphResized=bn(((e,t)=>{const n=Math.floor(t),o=Math.floor(e),r=n!==this.graphHeight,i=o!==this.graphWidth,s={};if(r&&(this.graphHeight=n,s.height=n),i){this.graphWidth=o;const e=this.getOrderedActiveGraphZones();this.ensureZoneWidthsMatchGraphWidth(e,this.graphWidth),s.width=this.graphWidth,s.graphZones=e}(r||i)&&(this.setState(s),r&&this.onGraphVisibleRowsUpdatedThrottled(),this.props.onGraphResized&&this.props.onGraphResized(this.graphWidth,this.graphHeight))}));onGraphVisibleRowsUpdated(){if(!this.props.onGraphVisibleRowsChanged||!this.orderedGraphRows||!this.orderedGraphRows.length)return;const{top:e,bottom:t}=this.getTopAndBottomVisibleRowIndex();-1===e||-1===t||e>=this.orderedGraphRows.length||t>=this.orderedGraphRows.length||e===this.lastTopVisibleRowIndex&&t===this.lastBottomVisibleRowIndex||(this.lastTopVisibleRowIndex=e,this.lastBottomVisibleRowIndex=t,this.props.onGraphVisibleRowsChanged&&this.props.onGraphVisibleRowsChanged(this.orderedGraphRows[e],this.orderedGraphRows[t]))}getCurrentPlatform(){return this.props.platform||"darwin"}isMacOSPlatform(){return"darwin"===this.getCurrentPlatform()}getGraphColumnSettingFromZoneType(e){return{width:e.preferredWidth||0,isHidden:e.isHidden,order:e.order}}decorateWithHelmet=(e,t,n)=>{const r=function(e){const t=e||ue;let n="";const o=Object.keys(t);n+="body {\n";for(const e of o)n+=`${e}: ${t[e]};\n`;return n+="}\n",n}(t);return o().createElement("div",{id:"graph-container-helmet"},o().createElement(ne,null,o().createElement("style",{nonce:n},r)),e)};render(){const{isInUnsupportedRebase:e,isCommitting:t,pendingCommitMessageSummary:n,repoPath:r,nonce:i}=this.props,{avatarUrlByEmail:s,columnColorByColumn:a,contexts:l,cssVariablesWithDefaults:c,currentlyHoveredCommitSha:d,dimMergeCommits:u,dimRowsOfSelectedCommit:h,highlightRowsOnRefHover:p,showGhostRefsOnRowHover:f,showRemoteNamesOnRefs:m,enabledRefMetadataTypes:g,enabledScrollMarkerTypes:b,graphZones:v,hasMoreCommits:y,height:w,highlightedShas:x,hoveredRefGroup:C,hoveredRefZoneSha:S,themeOpacityFactor:k,isContainerWindowFocused:T,isLoadingRows:R,numGraphColumns:_,processedRows:E,refMetadataById:O,useAuthorInitialsForAvatars:I,scrollToAlignment:M,scrollToIndex:P,scrollTop:z,scrollLeft:$,shaLength:A,width:D,workDirStats:N}=this.state,L=re()("flex","graph-container"),H=(B=E,e=>e===B.length?"SHOW_MORE_COMMITS":B[e].sha);var B;const F=(G=e=>H(e),({cellCache:e,cellRenderer:t,columnSizeAndPositionManager:n,columnStartIndex:o,columnStopIndex:r,deferredMeasurementCache:i,horizontalOffsetAdjustment:s,isScrolling:a,parent:l,rowSizeAndPositionManager:c,rowStartIndex:d,rowStopIndex:u,styleCache:h,verticalOffsetAdjustment:p,visibleColumnIndices:f,visibleRowIndices:m})=>{const g=[],b=e,v=n.areOffsetsAdjusted()||c.areOffsetsAdjusted(),y=!a&&!v;for(let e=d;e<=u;e+=1){const d=c.getSizeAndPositionOfCell(e);for(let c=o;c<=r;c+=1){const o=n.getSizeAndPositionOfCell(c),r=c>=f.start&&c<=f.stop&&e>=m.start&&e<=m.stop,u=`${e}-${c}`;let v;y&&h[u]?v=h[u]:i&&!i.has(e,c)?v={height:"auto",left:0,position:"absolute",top:0,width:"auto"}:(v={height:d.size,left:o.offset+s,position:"absolute",top:d.offset+p,width:o.size},h[u]=v);const w={columnIndex:c,isScrolling:a,isVisible:r,key:u,parent:l,rowIndex:e,style:v};let x;if(!a||s||p)x=t(w);else{const n=G(e);b[u]&&b[u].realKeyForCell===n||(b[u]={realKeyForCell:n,cell:t(w)}),x=b[u].cell}null!=x&&g.push(x)}}return g});var G;const W=this.getLeftGutterWidth(),j=this.getRightGutterWidth(),U=this.getRightGutterBoxShadowAlpha(k),V=this.getLeftGutterBoxShadowAlpha(k),Z=this.getNodeOffsetByColumn(),q=this.getNodeOpacityByColumn(),K=!C,Y={avatarUrlByEmail:s,dimMergeCommits:u,dimRowsOfSelectedCommit:h,highlightRowsOnRefHover:p,showGhostRefsOnRowHover:f,showRemoteNamesOnRefs:m,enabledRefMetadataTypes:g,isInUnsupportedRebase:e,isCommitting:t,isContainerWindowFocused:T,pendingCommitMessageSummary:n,workDirStats:N,repoPath:r,columnColorByColumn:a,currentlyHoveredCommitSha:d,cssVariables:c,graphZones:v,height:w,highlightedShas:x,hoveredRefGroup:C,hoveredRefZoneSha:S,includeOnlyRefsById:this.includeOnlyRefsById,includeOnlyRemotesByName:this.includeOnlyRemotesByName,isSelectedBySha:this.isSelectedBySha,leftGutterBoxShadowAlpha:V,leftGutterWidth:W,nodeOffsetByColumn:Z,nodeOpacityByColumn:q,nonce:i,numGraphColumns:_,processedRows:E,processedGraphRowBySha:this.processedGraphRowBySha,refMetadataById:O,rightGutterBoxShadowAlpha:U,rightGutterWidth:j,rowStatsConstraints:this.rowStatsConstraints,useAuthorInitialsForAvatars:I,scrollToAlignment:M,scrollLeft:$,scrollTop:z,shaLength:A,width:D,onMissingAvatar:this.onMissingAvatar,onMissingRefMetadata:this.onMissingRefMetadata,clearCurrentlyHoveredGraphCommit:this.onClearCurrentlyHoveredGraphCommit,setAsCurrentlyHoveredGraphCommit:this.onCurrentlyHoveredGraphCommit,onClickRef:this.onClickRef,onClickCommit:this.onClickCommit,onDoubleClickCommit:this.onDoubleClickCommit,onBlurWipNodeInput:this.onBlurWipNodeInput,onFocusWipNodeInput:this.onFocusWipNodeInput,onDoubleClickRef:this.onDoubleClickRef,onMessageChange:this.onMessageChange,onRefNodeHovered:this.onRefNodeHovered,onRefNodeUnhovered:this.onRefNodeUnhovered,onRefZoneHovered:this.onRefZoneHovered,onRefZoneUnhovered:this.onRefZoneUnhovered,onToggleRefNodesShown:this.onToggleRefNodesShown,onCommitContextMenu:this.onCommitContextMenu,onShowContextMenuForGroupedRef:this.onRefContextMenu,onWipNodeInputWillUnmount:this.onWipNodeInputWillUnmount,getExternalIcon:this.getIconCallback,formatCommitDateTime:this.formatCommitDateTimeCallback,translate:this.translateCallback},X={[Kt]:ta(Y,H),[Yt]:ya(Y,H),[Xt]:Us(Y,H),[Qt]:Ws(Y,H),[Jt]:js(Y,H),[en]:Vs(Y,H),[tn]:Bs(Y,H),[qt]:wa(Y,H)},Q=v.map(((e,t)=>o().createElement(Zi,{cellRenderersByIds:X,columnIndex:t,cssVariables:c,enableResizer:K,getExternalIcon:this.getIconCallback,getKeyForCell:H,graphHeight:w-26,graphWidth:D,graphZones:v,graphZoneType:e.type,hasMoreCommits:y,isLoadingRows:R,key:`${e.type}ColumnContainer`,onResize:this.onGraphZoneResize,onResizeEnd:this.onGraphZoneResizeEnd,onScroll:this.onScrollForZone,onScrollToRowCausedUpdate:e.type===Kt?this.onScrollToRowCausedUpdateForRefZone:void 0,onZoneEnter:t=>this.onZoneEnter(t,e.type,C,S),rowCount:E.length,scrollLeft:$,scrollToAlignment:e.type===Kt?M:void 0,scrollToIndex:e.type===Kt?P:void 0,scrollTop:z,smartCellRangeRenderer:F,translate:this.translateCallback}))),J=w-26,ee=this.orderedGraphRows.length*zt,te=o().createElement("div",{className:"graph-component","data-vscode-context":vn(l?.graph),onBlur:e=>this.onGraphContainerBlurred(e,C,S),onMouseEnter:this.onGraphContainerMouseEnter,onMouseLeave:this.onGraphContainerMouseLeave,ref:this.graphContainerRef,style:{height:"100%",width:"100%",position:"absolute"},tabIndex:-1},o().createElement(Co,{context:l?.header,enableResizer:K,excludeRefsById:this.excludeRefsById,getExternalIcon:this.getIconCallback,graphZones:v,height:w,includeOnlyRefsById:this.includeOnlyRefsById,onColumnReOrdered:this.onGraphColumnReOrdered,onGraphZoneResize:this.onGraphZoneResize,onGraphZoneResizeEnd:this.onGraphZoneResizeEnd,onPopupGraphHeaderContextMenu:this.onPopupGraphHeaderContextMenu,onToggleRefNodesShown:this.onToggleRefNodesShown,repoPath:r,showRemoteNamesOnRefs:m,translate:this.translateCallback,width:D}),o().createElement("div",{className:x?re()(L,"graph-highlighted"):L,id:"graph-container",onKeyDown:this.onKeyDown,onMouseDown:this.onGraphHeaderRowMouseDown,style:{height:w,width:D},tabIndex:-1},b.length?o().createElement(Yi,{enabledScrollMarkerTypes:b,markerColors:this.getMarkerColors(),markerRowIndices:this.markerRowIndices,scrollWidth:parseInt(c["---scrollable-scrollbar-thickness"],10),totalRows:this.orderedGraphRows.length,viewportHeight:J<ee?J:ee,viewportWidth:D}):null,Q));return this.decorateWithHelmet(te,c,i)}}var Ca=xa})(),e.exports=i})()},4516:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var i,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))n.call(i,c)&&(a[c]=i[c]);if(t){s=t(i);for(var d=0;d<s.length;d++)o.call(i,s[d])&&(a[s[d]]=i[s[d]])}}return a}},3975:(e,t,n)=>{var o=n(2735),r=n(4516),i=n(9146);function s(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=0;o<t;o++)n+="&args[]="+encodeURIComponent(arguments[o+1]);!function(e,t,n,o,r,i,s,a){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,r,i,s,a],c=0;(e=Error(t.replace(/%s/g,(function(){return l[c++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}function a(e,t,n,o,r,i,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(e){this.onError(e)}}o||s("227");var l=!1,c=null,d=!1,u=null,h={onError:function(e){l=!0,c=e}};function p(e,t,n,o,r,i,s,d,u){l=!1,c=null,a.apply(h,arguments)}var f=null,m={};function g(){if(f)for(var e in m){var t=m[e],n=f.indexOf(e);if(-1<n||s("96",e),!v[n])for(var o in t.extractEvents||s("97",e),v[n]=t,n=t.eventTypes){var r=void 0,i=n[o],a=t,l=o;y.hasOwnProperty(l)&&s("99",l),y[l]=i;var c=i.phasedRegistrationNames;if(c){for(r in c)c.hasOwnProperty(r)&&b(c[r],a,l);r=!0}else i.registrationName?(b(i.registrationName,a,l),r=!0):r=!1;r||s("98",o,e)}}}function b(e,t,n){w[e]&&s("100",e),w[e]=t,x[e]=t.eventTypes[n].dependencies}var v=[],y={},w={},x={},C=null,S=null,k=null;function T(e,t,n){var o=e.type||"unknown-event";e.currentTarget=k(n),function(e,t,n,o,r,i,a,h,f){if(p.apply(this,arguments),l){if(l){var m=c;l=!1,c=null}else s("198"),m=void 0;d||(d=!0,u=m)}}(o,t,void 0,e),e.currentTarget=null}function R(e,t){return null==t&&s("30"),null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function _(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}var E=null;function O(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var o=0;o<t.length&&!e.isPropagationStopped();o++)T(e,t[o],n[o]);else t&&T(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}var I={injectEventPluginOrder:function(e){f&&s("101"),f=Array.prototype.slice.call(e),g()},injectEventPluginsByName:function(e){var t,n=!1;for(t in e)if(e.hasOwnProperty(t)){var o=e[t];m.hasOwnProperty(t)&&m[t]===o||(m[t]&&s("102",t),m[t]=o,n=!0)}n&&g()}};function M(e,t){var n=e.stateNode;if(!n)return null;var o=C(n);if(!o)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":(o=!o.disabled)||(o=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!o;break e;default:e=!1}return e?null:(n&&"function"!=typeof n&&s("231",t,typeof n),n)}function P(e){if(null!==e&&(E=R(E,e)),e=E,E=null,e&&(_(e,O),E&&s("95"),d))throw e=u,d=!1,u=null,e}var z=Math.random().toString(36).slice(2),$="__reactInternalInstance$"+z,A="__reactEventHandlers$"+z;function D(e){if(e[$])return e[$];for(;!e[$];){if(!e.parentNode)return null;e=e.parentNode}return 5===(e=e[$]).tag||6===e.tag?e:null}function N(e){return!(e=e[$])||5!==e.tag&&6!==e.tag?null:e}function L(e){if(5===e.tag||6===e.tag)return e.stateNode;s("33")}function H(e){return e[A]||null}function B(e){do{e=e.return}while(e&&5!==e.tag);return e||null}function F(e,t,n){(t=M(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=R(n._dispatchListeners,t),n._dispatchInstances=R(n._dispatchInstances,e))}function G(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=B(t);for(t=n.length;0<t--;)F(n[t],"captured",e);for(t=0;t<n.length;t++)F(n[t],"bubbled",e)}}function W(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=M(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=R(n._dispatchListeners,t),n._dispatchInstances=R(n._dispatchInstances,e))}function j(e){e&&e.dispatchConfig.registrationName&&W(e._targetInst,null,e)}function U(e){_(e,G)}var V=!("undefined"==typeof window||!window.document||!window.document.createElement);function Z(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var q={animationend:Z("Animation","AnimationEnd"),animationiteration:Z("Animation","AnimationIteration"),animationstart:Z("Animation","AnimationStart"),transitionend:Z("Transition","TransitionEnd")},K={},Y={};function X(e){if(K[e])return K[e];if(!q[e])return e;var t,n=q[e];for(t in n)if(n.hasOwnProperty(t)&&t in Y)return K[e]=n[t];return e}V&&(Y=document.createElement("div").style,"AnimationEvent"in window||(delete q.animationend.animation,delete q.animationiteration.animation,delete q.animationstart.animation),"TransitionEvent"in window||delete q.transitionend.transition);var Q=X("animationend"),J=X("animationiteration"),ee=X("animationstart"),te=X("transitionend"),ne="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oe=null,re=null,ie=null;function se(){if(ie)return ie;var e,t,n=re,o=n.length,r="value"in oe?oe.value:oe.textContent,i=r.length;for(e=0;e<o&&n[e]===r[e];e++);var s=o-e;for(t=1;t<=s&&n[o-t]===r[i-t];t++);return ie=r.slice(e,1<t?1-t:void 0)}function ae(){return!0}function le(){return!1}function ce(e,t,n,o){for(var r in this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface)e.hasOwnProperty(r)&&((t=e[r])?this[r]=t(n):"target"===r?this.target=o:this[r]=n[r]);return this.isDefaultPrevented=(null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue)?ae:le,this.isPropagationStopped=le,this}function de(e,t,n,o){if(this.eventPool.length){var r=this.eventPool.pop();return this.call(r,e,t,n,o),r}return new this(e,t,n,o)}function ue(e){e instanceof this||s("279"),e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function he(e){e.eventPool=[],e.getPooled=de,e.release=ue}r(ce.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=ae)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=ae)},persist:function(){this.isPersistent=ae},isPersistent:le,destructor:function(){var e,t=this.constructor.Interface;for(e in t)this[e]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=le,this._dispatchInstances=this._dispatchListeners=null}}),ce.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},ce.extend=function(e){function t(){}function n(){return o.apply(this,arguments)}var o=this;t.prototype=o.prototype;var i=new t;return r(i,n.prototype),n.prototype=i,n.prototype.constructor=n,n.Interface=r({},o.Interface,e),n.extend=o.extend,he(n),n},he(ce);var pe=ce.extend({data:null}),fe=ce.extend({data:null}),me=[9,13,27,32],ge=V&&"CompositionEvent"in window,be=null;V&&"documentMode"in document&&(be=document.documentMode);var ve=V&&"TextEvent"in window&&!be,ye=V&&(!ge||be&&8<be&&11>=be),we=String.fromCharCode(32),xe={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Ce=!1;function Se(e,t){switch(e){case"keyup":return-1!==me.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function ke(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Te=!1;var Re={eventTypes:xe,extractEvents:function(e,t,n,o){var r=void 0,i=void 0;if(ge)e:{switch(e){case"compositionstart":r=xe.compositionStart;break e;case"compositionend":r=xe.compositionEnd;break e;case"compositionupdate":r=xe.compositionUpdate;break e}r=void 0}else Te?Se(e,n)&&(r=xe.compositionEnd):"keydown"===e&&229===n.keyCode&&(r=xe.compositionStart);return r?(ye&&"ko"!==n.locale&&(Te||r!==xe.compositionStart?r===xe.compositionEnd&&Te&&(i=se()):(re="value"in(oe=o)?oe.value:oe.textContent,Te=!0)),r=pe.getPooled(r,t,n,o),i?r.data=i:null!==(i=ke(n))&&(r.data=i),U(r),i=r):i=null,(e=ve?function(e,t){switch(e){case"compositionend":return ke(t);case"keypress":return 32!==t.which?null:(Ce=!0,we);case"textInput":return(e=t.data)===we&&Ce?null:e;default:return null}}(e,n):function(e,t){if(Te)return"compositionend"===e||!ge&&Se(e,t)?(e=se(),ie=re=oe=null,Te=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ye&&"ko"!==t.locale?null:t.data}}(e,n))?((t=fe.getPooled(xe.beforeInput,t,n,o)).data=e,U(t)):t=null,null===i?t:null===t?i:[i,t]}},_e=null,Ee=null,Oe=null;function Ie(e){if(e=S(e)){"function"!=typeof _e&&s("280");var t=C(e.stateNode);_e(e.stateNode,e.type,t)}}function Me(e){Ee?Oe?Oe.push(e):Oe=[e]:Ee=e}function Pe(){if(Ee){var e=Ee,t=Oe;if(Oe=Ee=null,Ie(e),t)for(e=0;e<t.length;e++)Ie(t[e])}}function ze(e,t){return e(t)}function $e(e,t,n){return e(t,n)}function Ae(){}var De=!1;function Ne(e,t){if(De)return e(t);De=!0;try{return ze(e,t)}finally{De=!1,(null!==Ee||null!==Oe)&&(Ae(),Pe())}}var Le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function He(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Le[e.type]:"textarea"===t}function Be(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function Fe(e){if(!V)return!1;var t=(e="on"+e)in document;return t||((t=document.createElement("div")).setAttribute(e,"return;"),t="function"==typeof t[e]),t}function Ge(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function We(e){e._valueTracker||(e._valueTracker=function(e){var t=Ge(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var r=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(e){o=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(e){o=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function je(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=Ge(e)?e.checked?"true":"false":e.value),(e=o)!==n&&(t.setValue(e),!0)}var Ue=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Ue.hasOwnProperty("ReactCurrentDispatcher")||(Ue.ReactCurrentDispatcher={current:null});var Ve=/^(.*)[\\\/]/,Ze="function"==typeof Symbol&&Symbol.for,qe=Ze?Symbol.for("react.element"):60103,Ke=Ze?Symbol.for("react.portal"):60106,Ye=Ze?Symbol.for("react.fragment"):60107,Xe=Ze?Symbol.for("react.strict_mode"):60108,Qe=Ze?Symbol.for("react.profiler"):60114,Je=Ze?Symbol.for("react.provider"):60109,et=Ze?Symbol.for("react.context"):60110,tt=Ze?Symbol.for("react.concurrent_mode"):60111,nt=Ze?Symbol.for("react.forward_ref"):60112,ot=Ze?Symbol.for("react.suspense"):60113,rt=Ze?Symbol.for("react.memo"):60115,it=Ze?Symbol.for("react.lazy"):60116,st="function"==typeof Symbol&&Symbol.iterator;function at(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=st&&e[st]||e["@@iterator"])?e:null}function lt(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case tt:return"ConcurrentMode";case Ye:return"Fragment";case Ke:return"Portal";case Qe:return"Profiler";case Xe:return"StrictMode";case ot:return"Suspense"}if("object"==typeof e)switch(e.$$typeof){case et:return"Context.Consumer";case Je:return"Context.Provider";case nt:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case rt:return lt(e.type);case it:if(e=1===e._status?e._result:null)return lt(e)}return null}function ct(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var o=e._debugOwner,r=e._debugSource,i=lt(e.type);n=null,o&&(n=lt(o.type)),o=i,i="",r?i=" (at "+r.fileName.replace(Ve,"")+":"+r.lineNumber+")":n&&(i=" (created by "+n+")"),n="\n    in "+(o||"Unknown")+i}t+=n,e=e.return}while(e);return t}var dt=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ut=Object.prototype.hasOwnProperty,ht={},pt={};function ft(e,t,n,o,r){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){mt[e]=new ft(e,0,!1,e,null)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];mt[t]=new ft(t,1,!1,e[1],null)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){mt[e]=new ft(e,2,!1,e.toLowerCase(),null)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){mt[e]=new ft(e,2,!1,e,null)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){mt[e]=new ft(e,3,!1,e.toLowerCase(),null)})),["checked","multiple","muted","selected"].forEach((function(e){mt[e]=new ft(e,3,!0,e,null)})),["capture","download"].forEach((function(e){mt[e]=new ft(e,4,!1,e,null)})),["cols","rows","size","span"].forEach((function(e){mt[e]=new ft(e,6,!1,e,null)})),["rowSpan","start"].forEach((function(e){mt[e]=new ft(e,5,!1,e.toLowerCase(),null)}));var gt=/[\-:]([a-z])/g;function bt(e){return e[1].toUpperCase()}function vt(e,t,n,o){var r=mt.hasOwnProperty(t)?mt[t]:null;(null!==r?0===r.type:!o&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,n,o){if(null==t||function(e,t,n,o){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!o&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,o))return!0;if(o)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,r,o)&&(n=null),o||null===r?function(e){return!!ut.call(pt,e)||!ut.call(ht,e)&&(dt.test(e)?pt[e]=!0:(ht[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=null===n?3!==r.type&&"":n:(t=r.attributeName,o=r.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(r=r.type)||4===r&&!0===n?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}function yt(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function wt(e,t){var n=t.checked;return r({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function xt(e,t){var n=null==t.defaultValue?"":t.defaultValue,o=null!=t.checked?t.checked:t.defaultChecked;n=yt(null!=t.value?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Ct(e,t){null!=(t=t.checked)&&vt(e,"checked",t,!1)}function St(e,t){Ct(e,t);var n=yt(t.value),o=t.type;if(null!=n)"number"===o?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===o||"reset"===o)return void e.removeAttribute("value");t.hasOwnProperty("value")?Tt(e,t.type,n):t.hasOwnProperty("defaultValue")&&Tt(e,t.type,yt(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function kt(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!("submit"!==o&&"reset"!==o||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!e.defaultChecked,e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function Tt(e,t,n){"number"===t&&e.ownerDocument.activeElement===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(gt,bt);mt[t]=new ft(t,1,!1,e,null)})),"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(gt,bt);mt[t]=new ft(t,1,!1,e,"http://www.w3.org/1999/xlink")})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(gt,bt);mt[t]=new ft(t,1,!1,e,"http://www.w3.org/XML/1998/namespace")})),["tabIndex","crossOrigin"].forEach((function(e){mt[e]=new ft(e,1,!1,e.toLowerCase(),null)}));var Rt={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function _t(e,t,n){return(e=ce.getPooled(Rt.change,e,t,n)).type="change",Me(n),U(e),e}var Et=null,Ot=null;function It(e){P(e)}function Mt(e){if(je(L(e)))return e}function Pt(e,t){if("change"===e)return t}var zt=!1;function $t(){Et&&(Et.detachEvent("onpropertychange",At),Ot=Et=null)}function At(e){"value"===e.propertyName&&Mt(Ot)&&Ne(It,e=_t(Ot,e,Be(e)))}function Dt(e,t,n){"focus"===e?($t(),Ot=n,(Et=t).attachEvent("onpropertychange",At)):"blur"===e&&$t()}function Nt(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Mt(Ot)}function Lt(e,t){if("click"===e)return Mt(t)}function Ht(e,t){if("input"===e||"change"===e)return Mt(t)}V&&(zt=Fe("input")&&(!document.documentMode||9<document.documentMode));var Bt={eventTypes:Rt,_isInputEventSupported:zt,extractEvents:function(e,t,n,o){var r=t?L(t):window,i=void 0,s=void 0,a=r.nodeName&&r.nodeName.toLowerCase();if("select"===a||"input"===a&&"file"===r.type?i=Pt:He(r)?zt?i=Ht:(i=Nt,s=Dt):(a=r.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===r.type||"radio"===r.type)&&(i=Lt),i&&(i=i(e,t)))return _t(i,n,o);s&&s(e,r,t),"blur"===e&&(e=r._wrapperState)&&e.controlled&&"number"===r.type&&Tt(r,"number",r.value)}},Ft=ce.extend({view:null,detail:null}),Gt={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wt(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Gt[e])&&!!t[e]}function jt(){return Wt}var Ut=0,Vt=0,Zt=!1,qt=!1,Kt=Ft.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:jt,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=Ut;return Ut=e.screenX,Zt?"mousemove"===e.type?e.screenX-t:0:(Zt=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=Vt;return Vt=e.screenY,qt?"mousemove"===e.type?e.screenY-t:0:(qt=!0,0)}}),Yt=Kt.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xt={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},Qt={eventTypes:Xt,extractEvents:function(e,t,n,o){var r="mouseover"===e||"pointerover"===e,i="mouseout"===e||"pointerout"===e;if(r&&(n.relatedTarget||n.fromElement)||!i&&!r)return null;if(r=o.window===o?o:(r=o.ownerDocument)?r.defaultView||r.parentWindow:window,i?(i=t,t=(t=n.relatedTarget||n.toElement)?D(t):null):i=null,i===t)return null;var s=void 0,a=void 0,l=void 0,c=void 0;"mouseout"===e||"mouseover"===e?(s=Kt,a=Xt.mouseLeave,l=Xt.mouseEnter,c="mouse"):"pointerout"!==e&&"pointerover"!==e||(s=Yt,a=Xt.pointerLeave,l=Xt.pointerEnter,c="pointer");var d=null==i?r:L(i);if(r=null==t?r:L(t),(e=s.getPooled(a,i,n,o)).type=c+"leave",e.target=d,e.relatedTarget=r,(n=s.getPooled(l,t,n,o)).type=c+"enter",n.target=r,n.relatedTarget=d,o=t,i&&o)e:{for(r=o,c=0,s=t=i;s;s=B(s))c++;for(s=0,l=r;l;l=B(l))s++;for(;0<c-s;)t=B(t),c--;for(;0<s-c;)r=B(r),s--;for(;c--;){if(t===r||t===r.alternate)break e;t=B(t),r=B(r)}t=null}else t=null;for(r=t,t=[];i&&i!==r&&(null===(c=i.alternate)||c!==r);)t.push(i),i=B(i);for(i=[];o&&o!==r&&(null===(c=o.alternate)||c!==r);)i.push(o),o=B(o);for(o=0;o<t.length;o++)W(t[o],"bubbled",e);for(o=i.length;0<o--;)W(i[o],"captured",n);return[e,n]}};function Jt(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t}var en=Object.prototype.hasOwnProperty;function tn(e,t){if(Jt(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++)if(!en.call(t,n[o])||!Jt(e[n[o]],t[n[o]]))return!1;return!0}function nn(e){var t=e;if(e.alternate)for(;t.return;)t=t.return;else{if(0!=(2&t.effectTag))return 1;for(;t.return;)if(0!=(2&(t=t.return).effectTag))return 1}return 3===t.tag?2:3}function on(e){2!==nn(e)&&s("188")}function rn(e){if(e=function(e){var t=e.alternate;if(!t)return 3===(t=nn(e))&&s("188"),1===t?null:e;for(var n=e,o=t;;){var r=n.return,i=r?r.alternate:null;if(!r||!i)break;if(r.child===i.child){for(var a=r.child;a;){if(a===n)return on(r),e;if(a===o)return on(r),t;a=a.sibling}s("188")}if(n.return!==o.return)n=r,o=i;else{a=!1;for(var l=r.child;l;){if(l===n){a=!0,n=r,o=i;break}if(l===o){a=!0,o=r,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,o=r;break}if(l===o){a=!0,o=i,n=r;break}l=l.sibling}a||s("189")}}n.alternate!==o&&s("190")}return 3!==n.tag&&s("188"),n.stateNode.current===n?e:t}(e),!e)return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}var sn=ce.extend({animationName:null,elapsedTime:null,pseudoElement:null}),an=ce.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ln=Ft.extend({relatedTarget:null});function cn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}var dn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},un={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hn=Ft.extend({key:function(e){if(e.key){var t=dn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=cn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?un[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:jt,charCode:function(e){return"keypress"===e.type?cn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?cn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),pn=Kt.extend({dataTransfer:null}),fn=Ft.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:jt}),mn=ce.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),gn=Kt.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),bn=[["abort","abort"],[Q,"animationEnd"],[J,"animationIteration"],[ee,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[te,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],vn={},yn={};function wn(e,t){var n=e[0],o="on"+((e=e[1])[0].toUpperCase()+e.slice(1));t={phasedRegistrationNames:{bubbled:o,captured:o+"Capture"},dependencies:[n],isInteractive:t},vn[e]=t,yn[n]=t}[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach((function(e){wn(e,!0)})),bn.forEach((function(e){wn(e,!1)}));var xn={eventTypes:vn,isInteractiveTopLevelEventType:function(e){return void 0!==(e=yn[e])&&!0===e.isInteractive},extractEvents:function(e,t,n,o){var r=yn[e];if(!r)return null;switch(e){case"keypress":if(0===cn(n))return null;case"keydown":case"keyup":e=hn;break;case"blur":case"focus":e=ln;break;case"click":if(2===n.button)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=Kt;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=pn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=fn;break;case Q:case J:case ee:e=sn;break;case te:e=mn;break;case"scroll":e=Ft;break;case"wheel":e=gn;break;case"copy":case"cut":case"paste":e=an;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=Yt;break;default:e=ce}return U(t=e.getPooled(r,t,n,o)),t}},Cn=xn.isInteractiveTopLevelEventType,Sn=[];function kn(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var o;for(o=n;o.return;)o=o.return;if(!(o=3!==o.tag?null:o.stateNode.containerInfo))break;e.ancestors.push(n),n=D(o)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var r=Be(e.nativeEvent);o=e.topLevelType;for(var i=e.nativeEvent,s=null,a=0;a<v.length;a++){var l=v[a];l&&(l=l.extractEvents(o,t,i,r))&&(s=R(s,l))}P(s)}}var Tn=!0;function Rn(e,t){if(!t)return null;var n=(Cn(e)?En:On).bind(null,e);t.addEventListener(e,n,!1)}function _n(e,t){if(!t)return null;var n=(Cn(e)?En:On).bind(null,e);t.addEventListener(e,n,!0)}function En(e,t){$e(On,e,t)}function On(e,t){if(Tn){var n=Be(t);if(null===(n=D(n))||"number"!=typeof n.tag||2===nn(n)||(n=null),Sn.length){var o=Sn.pop();o.topLevelType=e,o.nativeEvent=t,o.targetInst=n,e=o}else e={topLevelType:e,nativeEvent:t,targetInst:n,ancestors:[]};try{Ne(kn,e)}finally{e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>Sn.length&&Sn.push(e)}}}var In={},Mn=0,Pn="_reactListenersID"+(""+Math.random()).slice(2);function zn(e){return Object.prototype.hasOwnProperty.call(e,Pn)||(e[Pn]=Mn++,In[e[Pn]]={}),In[e[Pn]]}function $n(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function An(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dn(e,t){var n,o=An(e);for(e=0;o;){if(3===o.nodeType){if(n=e+o.textContent.length,e<=t&&n>=t)return{node:o,offset:t-e};e=n}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=An(o)}}function Nn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Nn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Ln(){for(var e=window,t=$n();t instanceof e.HTMLIFrameElement;){try{e=t.contentDocument.defaultView}catch(e){break}t=$n(e.document)}return t}function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function Bn(e){var t=Ln(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nn(n.ownerDocument.documentElement,n)){if(null!==o&&Hn(n))if(t=o.start,void 0===(e=o.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var r=n.textContent.length,i=Math.min(o.start,r);o=void 0===o.end?i:Math.min(o.end,r),!e.extend&&i>o&&(r=o,o=i,i=r),r=Dn(n,i);var s=Dn(n,o);r&&s&&(1!==e.rangeCount||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&((t=t.createRange()).setStart(r.node,r.offset),e.removeAllRanges(),i>o?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fn=V&&"documentMode"in document&&11>=document.documentMode,Gn={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Wn=null,jn=null,Un=null,Vn=!1;function Zn(e,t){var n=t.window===t?t.document:9===t.nodeType?t:t.ownerDocument;return Vn||null==Wn||Wn!==$n(n)?null:("selectionStart"in(n=Wn)&&Hn(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},Un&&tn(Un,n)?null:(Un=n,(e=ce.getPooled(Gn.select,jn,e,t)).type="select",e.target=Wn,U(e),e))}var qn={eventTypes:Gn,extractEvents:function(e,t,n,o){var r,i=o.window===o?o.document:9===o.nodeType?o:o.ownerDocument;if(!(r=!i)){e:{i=zn(i),r=x.onSelect;for(var s=0;s<r.length;s++){var a=r[s];if(!i.hasOwnProperty(a)||!i[a]){i=!1;break e}}i=!0}r=!i}if(r)return null;switch(i=t?L(t):window,e){case"focus":(He(i)||"true"===i.contentEditable)&&(Wn=i,jn=t,Un=null);break;case"blur":Un=jn=Wn=null;break;case"mousedown":Vn=!0;break;case"contextmenu":case"mouseup":case"dragend":return Vn=!1,Zn(n,o);case"selectionchange":if(Fn)break;case"keydown":case"keyup":return Zn(n,o)}return null}};function Kn(e,t){return e=r({children:void 0},t),(t=function(e){var t="";return o.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(t.children))&&(e.children=t),e}function Yn(e,t,n,o){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&o&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n)return e[r].selected=!0,void(o&&(e[r].defaultSelected=!0));null!==t||e[r].disabled||(t=e[r])}null!==t&&(t.selected=!0)}}function Xn(e,t){return null!=t.dangerouslySetInnerHTML&&s("91"),r({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qn(e,t){var n=t.value;null==n&&(n=t.defaultValue,null!=(t=t.children)&&(null!=n&&s("92"),Array.isArray(t)&&(1>=t.length||s("93"),t=t[0]),n=t),null==n&&(n="")),e._wrapperState={initialValue:yt(n)}}function Jn(e,t){var n=yt(t.value),o=yt(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=o&&(e.defaultValue=""+o)}function eo(e){var t=e.textContent;t===e._wrapperState.initialValue&&(e.value=t)}I.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),C=H,S=N,k=L,I.injectEventPluginsByName({SimpleEventPlugin:xn,EnterLeaveEventPlugin:Qt,ChangeEventPlugin:Bt,SelectEventPlugin:qn,BeforeInputEventPlugin:Re});var to={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function no(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oo(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?no(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ro,io=void 0,so=(ro=function(e,t){if(e.namespaceURI!==to.svg||"innerHTML"in e)e.innerHTML=t;else{for((io=io||document.createElement("div")).innerHTML="<svg>"+t+"</svg>",t=io.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,o){MSApp.execUnsafeLocalFunction((function(){return ro(e,t)}))}:ro);function ao(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var lo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},co=["Webkit","ms","Moz","O"];function uo(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||lo.hasOwnProperty(e)&&lo[e]?(""+t).trim():t+"px"}function ho(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var o=0===n.indexOf("--"),r=uo(n,t[n],o);"float"===n&&(n="cssFloat"),o?e.setProperty(n,r):e[n]=r}}Object.keys(lo).forEach((function(e){co.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),lo[t]=lo[e]}))}));var po=r({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fo(e,t){t&&(po[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML)&&s("137",e,""),null!=t.dangerouslySetInnerHTML&&(null!=t.children&&s("60"),"object"==typeof t.dangerouslySetInnerHTML&&"__html"in t.dangerouslySetInnerHTML||s("61")),null!=t.style&&"object"!=typeof t.style&&s("62",""))}function mo(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function go(e,t){var n=zn(e=9===e.nodeType||11===e.nodeType?e:e.ownerDocument);t=x[t];for(var o=0;o<t.length;o++){var r=t[o];if(!n.hasOwnProperty(r)||!n[r]){switch(r){case"scroll":_n("scroll",e);break;case"focus":case"blur":_n("focus",e),_n("blur",e),n.blur=!0,n.focus=!0;break;case"cancel":case"close":Fe(r)&&_n(r,e);break;case"invalid":case"submit":case"reset":break;default:-1===ne.indexOf(r)&&Rn(r,e)}n[r]=!0}}}function bo(){}var vo=null,yo=null;function wo(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function xo(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Co="function"==typeof setTimeout?setTimeout:void 0,So="function"==typeof clearTimeout?clearTimeout:void 0,ko=i.unstable_scheduleCallback,To=i.unstable_cancelCallback;function Ro(e){for(e=e.nextSibling;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e}function _o(e){for(e=e.firstChild;e&&1!==e.nodeType&&3!==e.nodeType;)e=e.nextSibling;return e}new Set;var Eo=[],Oo=-1;function Io(e){0>Oo||(e.current=Eo[Oo],Eo[Oo]=null,Oo--)}function Mo(e,t){Oo++,Eo[Oo]=e.current,e.current=t}var Po={},zo={current:Po},$o={current:!1},Ao=Po;function Do(e,t){var n=e.type.contextTypes;if(!n)return Po;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var r,i={};for(r in n)i[r]=t[r];return o&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function No(e){return null!=(e=e.childContextTypes)}function Lo(e){Io($o),Io(zo)}function Ho(e){Io($o),Io(zo)}function Bo(e,t,n){zo.current!==Po&&s("168"),Mo(zo,t),Mo($o,n)}function Fo(e,t,n){var o=e.stateNode;if(e=t.childContextTypes,"function"!=typeof o.getChildContext)return n;for(var i in o=o.getChildContext())i in e||s("108",lt(t)||"Unknown",i);return r({},n,o)}function Go(e){var t=e.stateNode;return t=t&&t.__reactInternalMemoizedMergedChildContext||Po,Ao=zo.current,Mo(zo,t),Mo($o,$o.current),!0}function Wo(e,t,n){var o=e.stateNode;o||s("169"),n?(t=Fo(e,t,Ao),o.__reactInternalMemoizedMergedChildContext=t,Io($o),Io(zo),Mo(zo,t)):Io($o),Mo($o,n)}var jo=null,Uo=null;function Vo(e){return function(t){try{return e(t)}catch(e){}}}function Zo(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.contextDependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function qo(e,t,n,o){return new Zo(e,t,n,o)}function Ko(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Yo(e,t){var n=e.alternate;return null===n?((n=qo(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,n.contextDependencies=e.contextDependencies,n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xo(e,t,n,o,r,i){var a=2;if(o=e,"function"==typeof e)Ko(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case Ye:return Qo(n.children,r,i,t);case tt:return Jo(n,3|r,i,t);case Xe:return Jo(n,2|r,i,t);case Qe:return(e=qo(12,n,t,4|r)).elementType=Qe,e.type=Qe,e.expirationTime=i,e;case ot:return(e=qo(13,n,t,r)).elementType=ot,e.type=ot,e.expirationTime=i,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case Je:a=10;break e;case et:a=9;break e;case nt:a=11;break e;case rt:a=14;break e;case it:a=16,o=null;break e}s("130",null==e?e:typeof e,"")}return(t=qo(a,n,t,r)).elementType=e,t.type=o,t.expirationTime=i,t}function Qo(e,t,n,o){return(e=qo(7,e,o,t)).expirationTime=n,e}function Jo(e,t,n,o){return e=qo(8,e,o,t),t=0==(1&t)?Xe:tt,e.elementType=t,e.type=t,e.expirationTime=n,e}function er(e,t,n){return(e=qo(6,e,null,t)).expirationTime=n,e}function tr(e,t,n){return(t=qo(4,null!==e.children?e.children:[],e.key,t)).expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nr(e,t){e.didError=!1;var n=e.earliestPendingTime;0===n?e.earliestPendingTime=e.latestPendingTime=t:n<t?e.earliestPendingTime=t:e.latestPendingTime>t&&(e.latestPendingTime=t),ir(t,e)}function or(e,t){e.didError=!1,e.latestPingedTime>=t&&(e.latestPingedTime=0);var n=e.earliestPendingTime,o=e.latestPendingTime;n===t?e.earliestPendingTime=o===t?e.latestPendingTime=0:o:o===t&&(e.latestPendingTime=n),n=e.earliestSuspendedTime,o=e.latestSuspendedTime,0===n?e.earliestSuspendedTime=e.latestSuspendedTime=t:n<t?e.earliestSuspendedTime=t:o>t&&(e.latestSuspendedTime=t),ir(t,e)}function rr(e,t){var n=e.earliestPendingTime;return n>t&&(t=n),(e=e.earliestSuspendedTime)>t&&(t=e),t}function ir(e,t){var n=t.earliestSuspendedTime,o=t.latestSuspendedTime,r=t.earliestPendingTime,i=t.latestPingedTime;0===(r=0!==r?r:i)&&(0===e||o<e)&&(r=o),0!==(e=r)&&n>e&&(e=n),t.nextExpirationTimeToWorkOn=r,t.expirationTime=e}function sr(e,t){if(e&&e.defaultProps)for(var n in t=r({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}var ar=(new o.Component).refs;function lr(e,t,n,o){n=null==(n=n(o,t=e.memoizedState))?t:r({},t,n),e.memoizedState=n,null!==(o=e.updateQueue)&&0===e.expirationTime&&(o.baseState=n)}var cr={isMounted:function(e){return!!(e=e._reactInternalFiber)&&2===nn(e)},enqueueSetState:function(e,t,n){e=e._reactInternalFiber;var o=_a(),r=Qi(o=Qs(o,e));r.payload=t,null!=n&&(r.callback=n),Vs(),es(e,r),na(e,o)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber;var o=_a(),r=Qi(o=Qs(o,e));r.tag=Vi,r.payload=t,null!=n&&(r.callback=n),Vs(),es(e,r),na(e,o)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var n=_a(),o=Qi(n=Qs(n,e));o.tag=Zi,null!=t&&(o.callback=t),Vs(),es(e,o),na(e,n)}};function dr(e,t,n,o,r,i,s){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(o,i,s):!t.prototype||!t.prototype.isPureReactComponent||(!tn(n,o)||!tn(r,i))}function ur(e,t,n){var o=!1,r=Po,i=t.contextType;return"object"==typeof i&&null!==i?i=ji(i):(r=No(t)?Ao:zo.current,i=(o=null!=(o=t.contextTypes))?Do(e,r):Po),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=cr,e.stateNode=t,t._reactInternalFiber=e,o&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),t}function hr(e,t,n,o){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,o),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&cr.enqueueReplaceState(t,t.state,null)}function pr(e,t,n,o){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs=ar;var i=t.contextType;"object"==typeof i&&null!==i?r.context=ji(i):(i=No(t)?Ao:zo.current,r.context=Do(e,i)),null!==(i=e.updateQueue)&&(rs(e,i,n,r,o),r.state=e.memoizedState),"function"==typeof(i=t.getDerivedStateFromProps)&&(lr(e,t,i,n),r.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof r.getSnapshotBeforeUpdate||"function"!=typeof r.UNSAFE_componentWillMount&&"function"!=typeof r.componentWillMount||(t=r.state,"function"==typeof r.componentWillMount&&r.componentWillMount(),"function"==typeof r.UNSAFE_componentWillMount&&r.UNSAFE_componentWillMount(),t!==r.state&&cr.enqueueReplaceState(r,r.state,null),null!==(i=e.updateQueue)&&(rs(e,i,n,r,o),r.state=e.memoizedState)),"function"==typeof r.componentDidMount&&(e.effectTag|=4)}var fr=Array.isArray;function mr(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){n=n._owner;var o=void 0;n&&(1!==n.tag&&s("309"),o=n.stateNode),o||s("147",e);var r=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===r?t.ref:(t=function(e){var t=o.refs;t===ar&&(t=o.refs={}),null===e?delete t[r]:t[r]=e},t._stringRef=r,t)}"string"!=typeof e&&s("284"),n._owner||s("290",e)}return e}function gr(e,t){"textarea"!==e.type&&s("31","[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t,"")}function br(e){function t(t,n){if(e){var o=t.lastEffect;null!==o?(o.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.effectTag=8}}function n(n,o){if(!e)return null;for(;null!==o;)t(n,o),o=o.sibling;return null}function o(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function r(e,t,n){return(e=Yo(e,t)).index=0,e.sibling=null,e}function i(t,n,o){return t.index=o,e?null!==(o=t.alternate)?(o=o.index)<n?(t.effectTag=2,n):o:(t.effectTag=2,n):n}function a(t){return e&&null===t.alternate&&(t.effectTag=2),t}function l(e,t,n,o){return null===t||6!==t.tag?((t=er(n,e.mode,o)).return=e,t):((t=r(t,n)).return=e,t)}function c(e,t,n,o){return null!==t&&t.elementType===n.type?((o=r(t,n.props)).ref=mr(e,t,n),o.return=e,o):((o=Xo(n.type,n.key,n.props,null,e.mode,o)).ref=mr(e,t,n),o.return=e,o)}function d(e,t,n,o){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=tr(n,e.mode,o)).return=e,t):((t=r(t,n.children||[])).return=e,t)}function u(e,t,n,o,i){return null===t||7!==t.tag?((t=Qo(n,e.mode,o,i)).return=e,t):((t=r(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t||"number"==typeof t)return(t=er(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case qe:return(n=Xo(t.type,t.key,t.props,null,e.mode,n)).ref=mr(e,null,t),n.return=e,n;case Ke:return(t=tr(t,e.mode,n)).return=e,t}if(fr(t)||at(t))return(t=Qo(t,e.mode,n,null)).return=e,t;gr(e,t)}return null}function p(e,t,n,o){var r=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==r?null:l(e,t,""+n,o);if("object"==typeof n&&null!==n){switch(n.$$typeof){case qe:return n.key===r?n.type===Ye?u(e,t,n.props.children,o,r):c(e,t,n,o):null;case Ke:return n.key===r?d(e,t,n,o):null}if(fr(n)||at(n))return null!==r?null:u(e,t,n,o,null);gr(e,n)}return null}function f(e,t,n,o,r){if("string"==typeof o||"number"==typeof o)return l(t,e=e.get(n)||null,""+o,r);if("object"==typeof o&&null!==o){switch(o.$$typeof){case qe:return e=e.get(null===o.key?n:o.key)||null,o.type===Ye?u(t,e,o.props.children,r,o.key):c(t,e,o,r);case Ke:return d(t,e=e.get(null===o.key?n:o.key)||null,o,r)}if(fr(o)||at(o))return u(t,e=e.get(n)||null,o,r,null);gr(t,o)}return null}function m(r,s,a,l){for(var c=null,d=null,u=s,m=s=0,g=null;null!==u&&m<a.length;m++){u.index>m?(g=u,u=null):g=u.sibling;var b=p(r,u,a[m],l);if(null===b){null===u&&(u=g);break}e&&u&&null===b.alternate&&t(r,u),s=i(b,s,m),null===d?c=b:d.sibling=b,d=b,u=g}if(m===a.length)return n(r,u),c;if(null===u){for(;m<a.length;m++)(u=h(r,a[m],l))&&(s=i(u,s,m),null===d?c=u:d.sibling=u,d=u);return c}for(u=o(r,u);m<a.length;m++)(g=f(u,r,m,a[m],l))&&(e&&null!==g.alternate&&u.delete(null===g.key?m:g.key),s=i(g,s,m),null===d?c=g:d.sibling=g,d=g);return e&&u.forEach((function(e){return t(r,e)})),c}function g(r,a,l,c){var d=at(l);"function"!=typeof d&&s("150"),null==(l=d.call(l))&&s("151");for(var u=d=null,m=a,g=a=0,b=null,v=l.next();null!==m&&!v.done;g++,v=l.next()){m.index>g?(b=m,m=null):b=m.sibling;var y=p(r,m,v.value,c);if(null===y){m||(m=b);break}e&&m&&null===y.alternate&&t(r,m),a=i(y,a,g),null===u?d=y:u.sibling=y,u=y,m=b}if(v.done)return n(r,m),d;if(null===m){for(;!v.done;g++,v=l.next())null!==(v=h(r,v.value,c))&&(a=i(v,a,g),null===u?d=v:u.sibling=v,u=v);return d}for(m=o(r,m);!v.done;g++,v=l.next())null!==(v=f(m,r,g,v.value,c))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),a=i(v,a,g),null===u?d=v:u.sibling=v,u=v);return e&&m.forEach((function(e){return t(r,e)})),d}return function(e,o,i,l){var c="object"==typeof i&&null!==i&&i.type===Ye&&null===i.key;c&&(i=i.props.children);var d="object"==typeof i&&null!==i;if(d)switch(i.$$typeof){case qe:e:{for(d=i.key,c=o;null!==c;){if(c.key===d){if(7===c.tag?i.type===Ye:c.elementType===i.type){n(e,c.sibling),(o=r(c,i.type===Ye?i.props.children:i.props)).ref=mr(e,c,i),o.return=e,e=o;break e}n(e,c);break}t(e,c),c=c.sibling}i.type===Ye?((o=Qo(i.props.children,e.mode,l,i.key)).return=e,e=o):((l=Xo(i.type,i.key,i.props,null,e.mode,l)).ref=mr(e,o,i),l.return=e,e=l)}return a(e);case Ke:e:{for(c=i.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===i.containerInfo&&o.stateNode.implementation===i.implementation){n(e,o.sibling),(o=r(o,i.children||[])).return=e,e=o;break e}n(e,o);break}t(e,o),o=o.sibling}(o=tr(i,e.mode,l)).return=e,e=o}return a(e)}if("string"==typeof i||"number"==typeof i)return i=""+i,null!==o&&6===o.tag?(n(e,o.sibling),(o=r(o,i)).return=e,e=o):(n(e,o),(o=er(i,e.mode,l)).return=e,e=o),a(e);if(fr(i))return m(e,o,i,l);if(at(i))return g(e,o,i,l);if(d&&gr(e,i),void 0===i&&!c)switch(e.tag){case 1:case 0:s("152",(l=e.type).displayName||l.name||"Component")}return n(e,o)}}var vr=br(!0),yr=br(!1),wr={},xr={current:wr},Cr={current:wr},Sr={current:wr};function kr(e){return e===wr&&s("174"),e}function Tr(e,t){Mo(Sr,t),Mo(Cr,e),Mo(xr,wr);var n=t.nodeType;switch(n){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:oo(null,"");break;default:t=oo(t=(n=8===n?t.parentNode:t).namespaceURI||null,n=n.tagName)}Io(xr),Mo(xr,t)}function Rr(e){Io(xr),Io(Cr),Io(Sr)}function _r(e){kr(Sr.current);var t=kr(xr.current),n=oo(t,e.type);t!==n&&(Mo(Cr,e),Mo(xr,n))}function Er(e){Cr.current===e&&(Io(xr),Io(Cr))}var Or=0,Ir=2,Mr=4,Pr=8,zr=16,$r=32,Ar=64,Dr=128,Nr=Ue.ReactCurrentDispatcher,Lr=0,Hr=null,Br=null,Fr=null,Gr=null,Wr=null,jr=null,Ur=0,Vr=null,Zr=0,qr=!1,Kr=null,Yr=0;function Xr(){s("307")}function Qr(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Jt(e[n],t[n]))return!1;return!0}function Jr(e,t,n,o,r,i){if(Lr=i,Hr=t,Fr=null!==e?e.memoizedState:null,Nr.current=null===Fr?hi:pi,t=n(o,r),qr){do{qr=!1,Yr+=1,Fr=null!==e?e.memoizedState:null,jr=Gr,Vr=Wr=Br=null,Nr.current=pi,t=n(o,r)}while(qr);Kr=null,Yr=0}return Nr.current=ui,(e=Hr).memoizedState=Gr,e.expirationTime=Ur,e.updateQueue=Vr,e.effectTag|=Zr,e=null!==Br&&null!==Br.next,Lr=0,jr=Wr=Gr=Fr=Br=Hr=null,Ur=0,Vr=null,Zr=0,e&&s("300"),t}function ei(){Nr.current=ui,Lr=0,jr=Wr=Gr=Fr=Br=Hr=null,Ur=0,Vr=null,Zr=0,qr=!1,Kr=null,Yr=0}function ti(){var e={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};return null===Wr?Gr=Wr=e:Wr=Wr.next=e,Wr}function ni(){if(null!==jr)jr=(Wr=jr).next,Fr=null!==(Br=Fr)?Br.next:null;else{null===Fr&&s("310");var e={memoizedState:(Br=Fr).memoizedState,baseState:Br.baseState,queue:Br.queue,baseUpdate:Br.baseUpdate,next:null};Wr=null===Wr?Gr=e:Wr.next=e,Fr=Br.next}return Wr}function oi(e,t){return"function"==typeof t?t(e):t}function ri(e){var t=ni(),n=t.queue;if(null===n&&s("311"),0<Yr){var o=n.dispatch;if(null!==Kr){var r=Kr.get(n);if(void 0!==r){Kr.delete(n);var i=t.memoizedState;do{i=e(i,r.action),r=r.next}while(null!==r);return Jt(i,t.memoizedState)||(ki=!0),t.memoizedState=i,t.baseUpdate===n.last&&(t.baseState=i),n.eagerReducer=e,n.eagerState=i,[i,o]}}return[t.memoizedState,o]}o=n.last;var a=t.baseUpdate;if(i=t.baseState,null!==a?(null!==o&&(o.next=null),o=a.next):o=null!==o?o.next:null,null!==o){var l=r=null,c=o,d=!1;do{var u=c.expirationTime;u<Lr?(d||(d=!0,l=a,r=i),u>Ur&&(Ur=u)):i=c.eagerReducer===e?c.eagerState:e(i,c.action),a=c,c=c.next}while(null!==c&&c!==o);d||(l=a,r=i),Jt(i,t.memoizedState)||(ki=!0),t.memoizedState=i,t.baseUpdate=l,t.baseState=r,n.eagerReducer=e,n.eagerState=i}return[t.memoizedState,n.dispatch]}function ii(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},null===Vr?(Vr={lastEffect:null}).lastEffect=e.next=e:null===(t=Vr.lastEffect)?Vr.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,Vr.lastEffect=e),e}function si(e,t,n,o){var r=ti();Zr|=e,r.memoizedState=ii(t,n,void 0,void 0===o?null:o)}function ai(e,t,n,o){var r=ni();o=void 0===o?null:o;var i=void 0;if(null!==Br){var s=Br.memoizedState;if(i=s.destroy,null!==o&&Qr(o,s.deps))return void ii(Or,n,i,o)}Zr|=e,r.memoizedState=ii(t,n,i,o)}function li(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function ci(){}function di(e,t,n){25>Yr||s("301");var o=e.alternate;if(e===Hr||null!==o&&o===Hr)if(qr=!0,e={expirationTime:Lr,action:n,eagerReducer:null,eagerState:null,next:null},null===Kr&&(Kr=new Map),void 0===(n=Kr.get(t)))Kr.set(t,e);else{for(t=n;null!==t.next;)t=t.next;t.next=e}else{Vs();var r=_a(),i={expirationTime:r=Qs(r,e),action:n,eagerReducer:null,eagerState:null,next:null},a=t.last;if(null===a)i.next=i;else{var l=a.next;null!==l&&(i.next=l),a.next=i}if(t.last=i,0===e.expirationTime&&(null===o||0===o.expirationTime)&&null!==(o=t.eagerReducer))try{var c=t.eagerState,d=o(c,n);if(i.eagerReducer=o,i.eagerState=d,Jt(d,c))return}catch(e){}na(e,r)}}var ui={readContext:ji,useCallback:Xr,useContext:Xr,useEffect:Xr,useImperativeHandle:Xr,useLayoutEffect:Xr,useMemo:Xr,useReducer:Xr,useRef:Xr,useState:Xr,useDebugValue:Xr},hi={readContext:ji,useCallback:function(e,t){return ti().memoizedState=[e,void 0===t?null:t],e},useContext:ji,useEffect:function(e,t){return si(516,Dr|Ar,e,t)},useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,si(4,Mr|$r,li.bind(null,t,e),n)},useLayoutEffect:function(e,t){return si(4,Mr|$r,e,t)},useMemo:function(e,t){var n=ti();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=ti();return t=void 0!==n?n(t):t,o.memoizedState=o.baseState=t,e=(e=o.queue={last:null,dispatch:null,eagerReducer:e,eagerState:t}).dispatch=di.bind(null,Hr,e),[o.memoizedState,e]},useRef:function(e){return e={current:e},ti().memoizedState=e},useState:function(e){var t=ti();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={last:null,dispatch:null,eagerReducer:oi,eagerState:e}).dispatch=di.bind(null,Hr,e),[t.memoizedState,e]},useDebugValue:ci},pi={readContext:ji,useCallback:function(e,t){var n=ni();t=void 0===t?null:t;var o=n.memoizedState;return null!==o&&null!==t&&Qr(t,o[1])?o[0]:(n.memoizedState=[e,t],e)},useContext:ji,useEffect:function(e,t){return ai(516,Dr|Ar,e,t)},useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,ai(4,Mr|$r,li.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ai(4,Mr|$r,e,t)},useMemo:function(e,t){var n=ni();t=void 0===t?null:t;var o=n.memoizedState;return null!==o&&null!==t&&Qr(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)},useReducer:ri,useRef:function(){return ni().memoizedState},useState:function(e){return ri(oi)},useDebugValue:ci},fi=null,mi=null,gi=!1;function bi(e,t){var n=qo(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function vi(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);default:return!1}}function yi(e){if(gi){var t=mi;if(t){var n=t;if(!vi(e,t)){if(!(t=Ro(n))||!vi(e,t))return e.effectTag|=2,gi=!1,void(fi=e);bi(fi,n)}fi=e,mi=_o(t)}else e.effectTag|=2,gi=!1,fi=e}}function wi(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&18!==e.tag;)e=e.return;fi=e}function xi(e){if(e!==fi)return!1;if(!gi)return wi(e),gi=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!xo(t,e.memoizedProps))for(t=mi;t;)bi(e,t),t=Ro(t);return wi(e),mi=fi?Ro(e.stateNode):null,!0}function Ci(){mi=fi=null,gi=!1}var Si=Ue.ReactCurrentOwner,ki=!1;function Ti(e,t,n,o){t.child=null===e?yr(t,null,n,o):vr(t,e.child,n,o)}function Ri(e,t,n,o,r){n=n.render;var i=t.ref;return Wi(t,r),o=Jr(e,t,n,o,i,r),null===e||ki?(t.effectTag|=1,Ti(e,t,o,r),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=r&&(e.expirationTime=0),Ai(e,t,r))}function _i(e,t,n,o,r,i){if(null===e){var s=n.type;return"function"!=typeof s||Ko(s)||void 0!==s.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Xo(n.type,null,o,null,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,Ei(e,t,s,o,r,i))}return s=e.child,r<i&&(r=s.memoizedProps,(n=null!==(n=n.compare)?n:tn)(r,o)&&e.ref===t.ref)?Ai(e,t,i):(t.effectTag|=1,(e=Yo(s,o)).ref=t.ref,e.return=t,t.child=e)}function Ei(e,t,n,o,r,i){return null!==e&&tn(e.memoizedProps,o)&&e.ref===t.ref&&(ki=!1,r<i)?Ai(e,t,i):Ii(e,t,n,o,i)}function Oi(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.effectTag|=128)}function Ii(e,t,n,o,r){var i=No(n)?Ao:zo.current;return i=Do(t,i),Wi(t,r),n=Jr(e,t,n,o,i,r),null===e||ki?(t.effectTag|=1,Ti(e,t,n,r),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=r&&(e.expirationTime=0),Ai(e,t,r))}function Mi(e,t,n,o,r){if(No(n)){var i=!0;Go(t)}else i=!1;if(Wi(t,r),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),ur(t,n,o),pr(t,n,o,r),o=!0;else if(null===e){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;"object"==typeof c&&null!==c?c=ji(c):c=Do(t,c=No(n)?Ao:zo.current);var d=n.getDerivedStateFromProps,u="function"==typeof d||"function"==typeof s.getSnapshotBeforeUpdate;u||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==o||l!==c)&&hr(t,s,o,c),Ki=!1;var h=t.memoizedState;l=s.state=h;var p=t.updateQueue;null!==p&&(rs(t,p,o,s,r),l=t.memoizedState),a!==o||h!==l||$o.current||Ki?("function"==typeof d&&(lr(t,n,d,o),l=t.memoizedState),(a=Ki||dr(t,n,a,o,h,l,c))?(u||"function"!=typeof s.UNSAFE_componentWillMount&&"function"!=typeof s.componentWillMount||("function"==typeof s.componentWillMount&&s.componentWillMount(),"function"==typeof s.UNSAFE_componentWillMount&&s.UNSAFE_componentWillMount()),"function"==typeof s.componentDidMount&&(t.effectTag|=4)):("function"==typeof s.componentDidMount&&(t.effectTag|=4),t.memoizedProps=o,t.memoizedState=l),s.props=o,s.state=l,s.context=c,o=a):("function"==typeof s.componentDidMount&&(t.effectTag|=4),o=!1)}else s=t.stateNode,a=t.memoizedProps,s.props=t.type===t.elementType?a:sr(t.type,a),l=s.context,"object"==typeof(c=n.contextType)&&null!==c?c=ji(c):c=Do(t,c=No(n)?Ao:zo.current),(u="function"==typeof(d=n.getDerivedStateFromProps)||"function"==typeof s.getSnapshotBeforeUpdate)||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==o||l!==c)&&hr(t,s,o,c),Ki=!1,l=t.memoizedState,h=s.state=l,null!==(p=t.updateQueue)&&(rs(t,p,o,s,r),h=t.memoizedState),a!==o||l!==h||$o.current||Ki?("function"==typeof d&&(lr(t,n,d,o),h=t.memoizedState),(d=Ki||dr(t,n,a,o,l,h,c))?(u||"function"!=typeof s.UNSAFE_componentWillUpdate&&"function"!=typeof s.componentWillUpdate||("function"==typeof s.componentWillUpdate&&s.componentWillUpdate(o,h,c),"function"==typeof s.UNSAFE_componentWillUpdate&&s.UNSAFE_componentWillUpdate(o,h,c)),"function"==typeof s.componentDidUpdate&&(t.effectTag|=4),"function"==typeof s.getSnapshotBeforeUpdate&&(t.effectTag|=256)):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=256),t.memoizedProps=o,t.memoizedState=h),s.props=o,s.state=h,s.context=c,o=d):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=256),o=!1);return Pi(e,t,n,o,i,r)}function Pi(e,t,n,o,r,i){Oi(e,t);var s=0!=(64&t.effectTag);if(!o&&!s)return r&&Wo(t,n,!1),Ai(e,t,i);o=t.stateNode,Si.current=t;var a=s&&"function"!=typeof n.getDerivedStateFromError?null:o.render();return t.effectTag|=1,null!==e&&s?(t.child=vr(t,e.child,null,i),t.child=vr(t,null,a,i)):Ti(e,t,a,i),t.memoizedState=o.state,r&&Wo(t,n,!0),t.child}function zi(e){var t=e.stateNode;t.pendingContext?Bo(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Bo(0,t.context,!1),Tr(e,t.containerInfo)}function $i(e,t,n){var o=t.mode,r=t.pendingProps,i=t.memoizedState;if(0==(64&t.effectTag)){i=null;var s=!1}else i={timedOutAt:null!==i?i.timedOutAt:0},s=!0,t.effectTag&=-65;if(null===e)if(s){var a=r.fallback;e=Qo(null,o,0,null),0==(1&t.mode)&&(e.child=null!==t.memoizedState?t.child.child:t.child),o=Qo(a,o,n,null),e.sibling=o,(n=e).return=o.return=t}else n=o=yr(t,null,r.children,n);else null!==e.memoizedState?(a=(o=e.child).sibling,s?(n=r.fallback,r=Yo(o,o.pendingProps),0==(1&t.mode)&&((s=null!==t.memoizedState?t.child.child:t.child)!==o.child&&(r.child=s)),o=r.sibling=Yo(a,n,a.expirationTime),n=r,r.childExpirationTime=0,n.return=o.return=t):n=o=vr(t,o.child,r.children,n)):(a=e.child,s?(s=r.fallback,(r=Qo(null,o,0,null)).child=a,0==(1&t.mode)&&(r.child=null!==t.memoizedState?t.child.child:t.child),(o=r.sibling=Qo(s,o,n,null)).effectTag|=2,n=r,r.childExpirationTime=0,n.return=o.return=t):o=n=vr(t,a,r.children,n)),t.stateNode=e.stateNode;return t.memoizedState=i,t.child=n,o}function Ai(e,t,n){if(null!==e&&(t.contextDependencies=e.contextDependencies),t.childExpirationTime<n)return null;if(null!==e&&t.child!==e.child&&s("153"),null!==t.child){for(n=Yo(e=t.child,e.pendingProps,e.expirationTime),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Yo(e,e.pendingProps,e.expirationTime)).return=t;n.sibling=null}return t.child}function Di(e,t,n){var o=t.expirationTime;if(null!==e){if(e.memoizedProps!==t.pendingProps||$o.current)ki=!0;else if(o<n){switch(ki=!1,t.tag){case 3:zi(t),Ci();break;case 5:_r(t);break;case 1:No(t.type)&&Go(t);break;case 4:Tr(t,t.stateNode.containerInfo);break;case 10:Fi(t,t.memoizedProps.value);break;case 13:if(null!==t.memoizedState)return 0!==(o=t.child.childExpirationTime)&&o>=n?$i(e,t,n):null!==(t=Ai(e,t,n))?t.sibling:null}return Ai(e,t,n)}}else ki=!1;switch(t.expirationTime=0,t.tag){case 2:o=t.elementType,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps;var r=Do(t,zo.current);if(Wi(t,n),r=Jr(null,t,o,e,r,n),t.effectTag|=1,"object"==typeof r&&null!==r&&"function"==typeof r.render&&void 0===r.$$typeof){if(t.tag=1,ei(),No(o)){var i=!0;Go(t)}else i=!1;t.memoizedState=null!==r.state&&void 0!==r.state?r.state:null;var a=o.getDerivedStateFromProps;"function"==typeof a&&lr(t,o,a,e),r.updater=cr,t.stateNode=r,r._reactInternalFiber=t,pr(t,o,e,n),t=Pi(null,t,o,!0,i,n)}else t.tag=0,Ti(null,t,r,n),t=t.child;return t;case 16:switch(r=t.elementType,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),i=t.pendingProps,e=function(e){var t=e._result;switch(e._status){case 1:return t;case 2:case 0:throw t;default:switch(e._status=0,(t=(t=e._ctor)()).then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)})),e._status){case 1:return e._result;case 2:throw e._result}throw e._result=t,t}}(r),t.type=e,r=t.tag=function(e){if("function"==typeof e)return Ko(e)?1:0;if(null!=e){if((e=e.$$typeof)===nt)return 11;if(e===rt)return 14}return 2}(e),i=sr(e,i),a=void 0,r){case 0:a=Ii(null,t,e,i,n);break;case 1:a=Mi(null,t,e,i,n);break;case 11:a=Ri(null,t,e,i,n);break;case 14:a=_i(null,t,e,sr(e.type,i),o,n);break;default:s("306",e,"")}return a;case 0:return o=t.type,r=t.pendingProps,Ii(e,t,o,r=t.elementType===o?r:sr(o,r),n);case 1:return o=t.type,r=t.pendingProps,Mi(e,t,o,r=t.elementType===o?r:sr(o,r),n);case 3:return zi(t),null===(o=t.updateQueue)&&s("282"),r=null!==(r=t.memoizedState)?r.element:null,rs(t,o,t.pendingProps,null,n),(o=t.memoizedState.element)===r?(Ci(),t=Ai(e,t,n)):(r=t.stateNode,(r=(null===e||null===e.child)&&r.hydrate)&&(mi=_o(t.stateNode.containerInfo),fi=t,r=gi=!0),r?(t.effectTag|=2,t.child=yr(t,null,o,n)):(Ti(e,t,o,n),Ci()),t=t.child),t;case 5:return _r(t),null===e&&yi(t),o=t.type,r=t.pendingProps,i=null!==e?e.memoizedProps:null,a=r.children,xo(o,r)?a=null:null!==i&&xo(o,i)&&(t.effectTag|=16),Oi(e,t),1!==n&&1&t.mode&&r.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(Ti(e,t,a,n),t=t.child),t;case 6:return null===e&&yi(t),null;case 13:return $i(e,t,n);case 4:return Tr(t,t.stateNode.containerInfo),o=t.pendingProps,null===e?t.child=vr(t,null,o,n):Ti(e,t,o,n),t.child;case 11:return o=t.type,r=t.pendingProps,Ri(e,t,o,r=t.elementType===o?r:sr(o,r),n);case 7:return Ti(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ti(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,r=t.pendingProps,a=t.memoizedProps,Fi(t,i=r.value),null!==a){var l=a.value;if(0===(i=Jt(l,i)?0:0|("function"==typeof o._calculateChangedBits?o._calculateChangedBits(l,i):1073741823))){if(a.children===r.children&&!$o.current){t=Ai(e,t,n);break e}}else for(null!==(l=t.child)&&(l.return=t);null!==l;){var c=l.contextDependencies;if(null!==c){a=l.child;for(var d=c.first;null!==d;){if(d.context===o&&0!=(d.observedBits&i)){1===l.tag&&((d=Qi(n)).tag=Zi,es(l,d)),l.expirationTime<n&&(l.expirationTime=n),null!==(d=l.alternate)&&d.expirationTime<n&&(d.expirationTime=n),d=n;for(var u=l.return;null!==u;){var h=u.alternate;if(u.childExpirationTime<d)u.childExpirationTime=d,null!==h&&h.childExpirationTime<d&&(h.childExpirationTime=d);else{if(!(null!==h&&h.childExpirationTime<d))break;h.childExpirationTime=d}u=u.return}c.expirationTime<n&&(c.expirationTime=n);break}d=d.next}}else a=10===l.tag&&l.type===t.type?null:l.child;if(null!==a)a.return=l;else for(a=l;null!==a;){if(a===t){a=null;break}if(null!==(l=a.sibling)){l.return=a.return,a=l;break}a=a.return}l=a}}Ti(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,o=(i=t.pendingProps).children,Wi(t,n),o=o(r=ji(r,i.unstable_observedBits)),t.effectTag|=1,Ti(e,t,o,n),t.child;case 14:return i=sr(r=t.type,t.pendingProps),_i(e,t,r,i=sr(r.type,i),o,n);case 15:return Ei(e,t,t.type,t.pendingProps,o,n);case 17:return o=t.type,r=t.pendingProps,r=t.elementType===o?r:sr(o,r),null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,No(o)?(e=!0,Go(t)):e=!1,Wi(t,n),ur(t,o,r),pr(t,o,r,n),Pi(null,t,o,!0,e,n)}s("156")}var Ni={current:null},Li=null,Hi=null,Bi=null;function Fi(e,t){var n=e.type._context;Mo(Ni,n._currentValue),n._currentValue=t}function Gi(e){var t=Ni.current;Io(Ni),e.type._context._currentValue=t}function Wi(e,t){Li=e,Bi=Hi=null;var n=e.contextDependencies;null!==n&&n.expirationTime>=t&&(ki=!0),e.contextDependencies=null}function ji(e,t){return Bi!==e&&!1!==t&&0!==t&&("number"==typeof t&&1073741823!==t||(Bi=e,t=1073741823),t={context:e,observedBits:t,next:null},null===Hi?(null===Li&&s("308"),Hi=t,Li.contextDependencies={first:t,expirationTime:0}):Hi=Hi.next=t),e._currentValue}var Ui=0,Vi=1,Zi=2,qi=3,Ki=!1;function Yi(e){return{baseState:e,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Xi(e){return{baseState:e.baseState,firstUpdate:e.firstUpdate,lastUpdate:e.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Qi(e){return{expirationTime:e,tag:Ui,payload:null,callback:null,next:null,nextEffect:null}}function Ji(e,t){null===e.lastUpdate?e.firstUpdate=e.lastUpdate=t:(e.lastUpdate.next=t,e.lastUpdate=t)}function es(e,t){var n=e.alternate;if(null===n){var o=e.updateQueue,r=null;null===o&&(o=e.updateQueue=Yi(e.memoizedState))}else o=e.updateQueue,r=n.updateQueue,null===o?null===r?(o=e.updateQueue=Yi(e.memoizedState),r=n.updateQueue=Yi(n.memoizedState)):o=e.updateQueue=Xi(r):null===r&&(r=n.updateQueue=Xi(o));null===r||o===r?Ji(o,t):null===o.lastUpdate||null===r.lastUpdate?(Ji(o,t),Ji(r,t)):(Ji(o,t),r.lastUpdate=t)}function ts(e,t){var n=e.updateQueue;null===(n=null===n?e.updateQueue=Yi(e.memoizedState):ns(e,n)).lastCapturedUpdate?n.firstCapturedUpdate=n.lastCapturedUpdate=t:(n.lastCapturedUpdate.next=t,n.lastCapturedUpdate=t)}function ns(e,t){var n=e.alternate;return null!==n&&t===n.updateQueue&&(t=e.updateQueue=Xi(t)),t}function os(e,t,n,o,i,s){switch(n.tag){case Vi:return"function"==typeof(e=n.payload)?e.call(s,o,i):e;case qi:e.effectTag=-2049&e.effectTag|64;case Ui:if(null==(i="function"==typeof(e=n.payload)?e.call(s,o,i):e))break;return r({},o,i);case Zi:Ki=!0}return o}function rs(e,t,n,o,r){Ki=!1;for(var i=(t=ns(e,t)).baseState,s=null,a=0,l=t.firstUpdate,c=i;null!==l;){var d=l.expirationTime;d<r?(null===s&&(s=l,i=c),a<d&&(a=d)):(c=os(e,0,l,c,n,o),null!==l.callback&&(e.effectTag|=32,l.nextEffect=null,null===t.lastEffect?t.firstEffect=t.lastEffect=l:(t.lastEffect.nextEffect=l,t.lastEffect=l))),l=l.next}for(d=null,l=t.firstCapturedUpdate;null!==l;){var u=l.expirationTime;u<r?(null===d&&(d=l,null===s&&(i=c)),a<u&&(a=u)):(c=os(e,0,l,c,n,o),null!==l.callback&&(e.effectTag|=32,l.nextEffect=null,null===t.lastCapturedEffect?t.firstCapturedEffect=t.lastCapturedEffect=l:(t.lastCapturedEffect.nextEffect=l,t.lastCapturedEffect=l))),l=l.next}null===s&&(t.lastUpdate=null),null===d?t.lastCapturedUpdate=null:e.effectTag|=32,null===s&&null===d&&(i=c),t.baseState=i,t.firstUpdate=s,t.firstCapturedUpdate=d,e.expirationTime=a,e.memoizedState=c}function is(e,t,n){null!==t.firstCapturedUpdate&&(null!==t.lastUpdate&&(t.lastUpdate.next=t.firstCapturedUpdate,t.lastUpdate=t.lastCapturedUpdate),t.firstCapturedUpdate=t.lastCapturedUpdate=null),ss(t.firstEffect,n),t.firstEffect=t.lastEffect=null,ss(t.firstCapturedEffect,n),t.firstCapturedEffect=t.lastCapturedEffect=null}function ss(e,t){for(;null!==e;){var n=e.callback;if(null!==n){e.callback=null;var o=t;"function"!=typeof n&&s("191",n),n.call(o)}e=e.nextEffect}}function as(e,t){return{value:e,source:t,stack:ct(t)}}function ls(e){e.effectTag|=4}var cs=void 0,ds=void 0,us=void 0,hs=void 0;cs=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ds=function(){},us=function(e,t,n,o,i){var s=e.memoizedProps;if(s!==o){var a=t.stateNode;switch(kr(xr.current),e=null,n){case"input":s=wt(a,s),o=wt(a,o),e=[];break;case"option":s=Kn(a,s),o=Kn(a,o),e=[];break;case"select":s=r({},s,{value:void 0}),o=r({},o,{value:void 0}),e=[];break;case"textarea":s=Xn(a,s),o=Xn(a,o),e=[];break;default:"function"!=typeof s.onClick&&"function"==typeof o.onClick&&(a.onclick=bo)}fo(n,o),a=n=void 0;var l=null;for(n in s)if(!o.hasOwnProperty(n)&&s.hasOwnProperty(n)&&null!=s[n])if("style"===n){var c=s[n];for(a in c)c.hasOwnProperty(a)&&(l||(l={}),l[a]="")}else"dangerouslySetInnerHTML"!==n&&"children"!==n&&"suppressContentEditableWarning"!==n&&"suppressHydrationWarning"!==n&&"autoFocus"!==n&&(w.hasOwnProperty(n)?e||(e=[]):(e=e||[]).push(n,null));for(n in o){var d=o[n];if(c=null!=s?s[n]:void 0,o.hasOwnProperty(n)&&d!==c&&(null!=d||null!=c))if("style"===n)if(c){for(a in c)!c.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(l||(l={}),l[a]="");for(a in d)d.hasOwnProperty(a)&&c[a]!==d[a]&&(l||(l={}),l[a]=d[a])}else l||(e||(e=[]),e.push(n,l)),l=d;else"dangerouslySetInnerHTML"===n?(d=d?d.__html:void 0,c=c?c.__html:void 0,null!=d&&c!==d&&(e=e||[]).push(n,""+d)):"children"===n?c===d||"string"!=typeof d&&"number"!=typeof d||(e=e||[]).push(n,""+d):"suppressContentEditableWarning"!==n&&"suppressHydrationWarning"!==n&&(w.hasOwnProperty(n)?(null!=d&&go(i,n),e||c===d||(e=[])):(e=e||[]).push(n,d))}l&&(e=e||[]).push("style",l),i=e,(t.updateQueue=i)&&ls(t)}},hs=function(e,t,n,o){n!==o&&ls(t)};var ps="function"==typeof WeakSet?WeakSet:Set;function fs(e,t){var n=t.source,o=t.stack;null===o&&null!==n&&(o=ct(n)),null!==n&&lt(n.type),t=t.value,null!==e&&1===e.tag&&lt(e.type)}function ms(e){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(t){Xs(e,t)}else t.current=null}function gs(e,t,n){if(null!==(n=null!==(n=n.updateQueue)?n.lastEffect:null)){var o=n=n.next;do{if((o.tag&e)!==Or){var r=o.destroy;o.destroy=void 0,void 0!==r&&r()}(o.tag&t)!==Or&&(r=o.create,o.destroy=r()),o=o.next}while(o!==n)}}function bs(e){switch("function"==typeof Uo&&Uo(e),e.tag){case 0:case 11:case 14:case 15:var t=e.updateQueue;if(null!==t&&null!==(t=t.lastEffect)){var n=t=t.next;do{var o=n.destroy;if(void 0!==o){var r=e;try{o()}catch(e){Xs(r,e)}}n=n.next}while(n!==t)}break;case 1:if(ms(e),"function"==typeof(t=e.stateNode).componentWillUnmount)try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(t){Xs(e,t)}break;case 5:ms(e);break;case 4:ws(e)}}function vs(e){return 5===e.tag||3===e.tag||4===e.tag}function ys(e){e:{for(var t=e.return;null!==t;){if(vs(t)){var n=t;break e}t=t.return}s("160"),n=void 0}var o=t=void 0;switch(n.tag){case 5:t=n.stateNode,o=!1;break;case 3:case 4:t=n.stateNode.containerInfo,o=!0;break;default:s("161")}16&n.effectTag&&(ao(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||vs(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag&&18!==n.tag;){if(2&n.effectTag)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.effectTag)){n=n.stateNode;break e}}for(var r=e;;){if(5===r.tag||6===r.tag)if(n)if(o){var i=t,a=r.stateNode,l=n;8===i.nodeType?i.parentNode.insertBefore(a,l):i.insertBefore(a,l)}else t.insertBefore(r.stateNode,n);else o?(a=t,l=r.stateNode,8===a.nodeType?(i=a.parentNode).insertBefore(l,a):(i=a).appendChild(l),null!=(a=a._reactRootContainer)||null!==i.onclick||(i.onclick=bo)):t.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===e)break;for(;null===r.sibling;){if(null===r.return||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}}function ws(e){for(var t=e,n=!1,o=void 0,r=void 0;;){if(!n){n=t.return;e:for(;;){switch(null===n&&s("160"),n.tag){case 5:o=n.stateNode,r=!1;break e;case 3:case 4:o=n.stateNode.containerInfo,r=!0;break e}n=n.return}n=!0}if(5===t.tag||6===t.tag){e:for(var i=t,a=i;;)if(bs(a),null!==a.child&&4!==a.tag)a.child.return=a,a=a.child;else{if(a===i)break;for(;null===a.sibling;){if(null===a.return||a.return===i)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}r?(i=o,a=t.stateNode,8===i.nodeType?i.parentNode.removeChild(a):i.removeChild(a)):o.removeChild(t.stateNode)}else if(4===t.tag){if(null!==t.child){o=t.stateNode.containerInfo,r=!0,t.child.return=t,t=t.child;continue}}else if(bs(t),null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return;4===(t=t.return).tag&&(n=!1)}t.sibling.return=t.return,t=t.sibling}}function xs(e,t){switch(t.tag){case 0:case 11:case 14:case 15:gs(Mr,Pr,t);break;case 1:case 3:case 12:case 17:break;case 5:var n=t.stateNode;if(null!=n){var o=t.memoizedProps;e=null!==e?e.memoizedProps:o;var r=t.type,i=t.updateQueue;t.updateQueue=null,null!==i&&function(e,t,n,o,r){e[A]=r,"input"===n&&"radio"===r.type&&null!=r.name&&Ct(e,r),mo(n,o),o=mo(n,r);for(var i=0;i<t.length;i+=2){var s=t[i],a=t[i+1];"style"===s?ho(e,a):"dangerouslySetInnerHTML"===s?so(e,a):"children"===s?ao(e,a):vt(e,s,a,o)}switch(n){case"input":St(e,r);break;case"textarea":Jn(e,r);break;case"select":t=e._wrapperState.wasMultiple,e._wrapperState.wasMultiple=!!r.multiple,null!=(n=r.value)?Yn(e,!!r.multiple,n,!1):t!==!!r.multiple&&(null!=r.defaultValue?Yn(e,!!r.multiple,r.defaultValue,!0):Yn(e,!!r.multiple,r.multiple?[]:"",!1))}}(n,i,r,e,o)}break;case 6:null===t.stateNode&&s("162"),t.stateNode.nodeValue=t.memoizedProps;break;case 13:if(n=t.memoizedState,o=void 0,e=t,null===n?o=!1:(o=!0,e=t.child,0===n.timedOutAt&&(n.timedOutAt=_a())),null!==e&&function(e,t){for(var n=e;;){if(5===n.tag){var o=n.stateNode;if(t)o.style.display="none";else{o=n.stateNode;var r=n.memoizedProps.style;r=null!=r&&r.hasOwnProperty("display")?r.display:null,o.style.display=uo("display",r)}}else if(6===n.tag)n.stateNode.nodeValue=t?"":n.memoizedProps;else{if(13===n.tag&&null!==n.memoizedState){(o=n.child.sibling).return=n,n=o;continue}if(null!==n.child){n.child.return=n,n=n.child;continue}}if(n===e)break;for(;null===n.sibling;){if(null===n.return||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}(e,o),null!==(n=t.updateQueue)){t.updateQueue=null;var a=t.stateNode;null===a&&(a=t.stateNode=new ps),n.forEach((function(e){var n=ea.bind(null,t,e);a.has(e)||(a.add(e),e.then(n,n))}))}break;default:s("163")}}var Cs="function"==typeof WeakMap?WeakMap:Map;function Ss(e,t,n){(n=Qi(n)).tag=qi,n.payload={element:null};var o=t.value;return n.callback=function(){Na(o),fs(e,t)},n}function ks(e,t,n){(n=Qi(n)).tag=qi;var o=e.type.getDerivedStateFromError;if("function"==typeof o){var r=t.value;n.payload=function(){return o(r)}}var i=e.stateNode;return null!==i&&"function"==typeof i.componentDidCatch&&(n.callback=function(){"function"!=typeof o&&(null===Bs?Bs=new Set([this]):Bs.add(this));var n=t.value,r=t.stack;fs(e,t),this.componentDidCatch(n,{componentStack:null!==r?r:""})}),n}function Ts(e){switch(e.tag){case 1:No(e.type)&&Lo();var t=e.effectTag;return 2048&t?(e.effectTag=-2049&t|64,e):null;case 3:return Rr(),Ho(),0!=(64&(t=e.effectTag))&&s("285"),e.effectTag=-2049&t|64,e;case 5:return Er(e),null;case 13:return 2048&(t=e.effectTag)?(e.effectTag=-2049&t|64,e):null;case 18:default:return null;case 4:return Rr(),null;case 10:return Gi(e),null}}var Rs=Ue.ReactCurrentDispatcher,_s=Ue.ReactCurrentOwner,Es=1073741822,Os=!1,Is=null,Ms=null,Ps=0,zs=-1,$s=!1,As=null,Ds=!1,Ns=null,Ls=null,Hs=null,Bs=null;function Fs(){if(null!==Is)for(var e=Is.return;null!==e;){var t=e;switch(t.tag){case 1:var n=t.type.childContextTypes;null!=n&&Lo();break;case 3:Rr(),Ho();break;case 5:Er(t);break;case 4:Rr();break;case 10:Gi(t)}e=e.return}Ms=null,Ps=0,zs=-1,$s=!1,Is=null}function Gs(){for(;null!==As;){var e=As.effectTag;if(16&e&&ao(As.stateNode,""),128&e){var t=As.alternate;null!==t&&(null!==(t=t.ref)&&("function"==typeof t?t(null):t.current=null))}switch(14&e){case 2:ys(As),As.effectTag&=-3;break;case 6:ys(As),As.effectTag&=-3,xs(As.alternate,As);break;case 4:xs(As.alternate,As);break;case 8:ws(e=As),e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,null!==(e=e.alternate)&&(e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null)}As=As.nextEffect}}function Ws(){for(;null!==As;){if(256&As.effectTag)e:{var e=As.alternate,t=As;switch(t.tag){case 0:case 11:case 15:gs(Ir,Or,t);break e;case 1:if(256&t.effectTag&&null!==e){var n=e.memoizedProps,o=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?n:sr(t.type,n),o),e.__reactInternalSnapshotBeforeUpdate=t}break e;case 3:case 5:case 6:case 4:case 17:break e;default:s("163")}}As=As.nextEffect}}function js(e,t){for(;null!==As;){var n=As.effectTag;if(36&n){var o=As.alternate,r=As,i=t;switch(r.tag){case 0:case 11:case 15:gs(zr,$r,r);break;case 1:var a=r.stateNode;if(4&r.effectTag)if(null===o)a.componentDidMount();else{var l=r.elementType===r.type?o.memoizedProps:sr(r.type,o.memoizedProps);a.componentDidUpdate(l,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}null!==(o=r.updateQueue)&&is(0,o,a);break;case 3:if(null!==(o=r.updateQueue)){if(a=null,null!==r.child)switch(r.child.tag){case 5:case 1:a=r.child.stateNode}is(0,o,a)}break;case 5:i=r.stateNode,null===o&&4&r.effectTag&&wo(r.type,r.memoizedProps)&&i.focus();break;case 6:case 4:case 12:case 13:case 17:break;default:s("163")}}128&n&&(null!==(r=As.ref)&&(i=As.stateNode,"function"==typeof r?r(i):r.current=i)),512&n&&(Ns=e),As=As.nextEffect}}function Us(e,t){Hs=Ls=Ns=null;var n=la;la=!0;do{if(512&t.effectTag){var o=!1,r=void 0;try{var i=t;gs(Dr,Or,i),gs(Or,Ar,i)}catch(e){o=!0,r=e}o&&Xs(t,r)}t=t.nextEffect}while(null!==t);la=n,0!==(n=e.expirationTime)&&Ea(e,n),fa||la||za(1073741823,!1)}function Vs(){null!==Ls&&To(Ls),null!==Hs&&Hs()}function Zs(e,t){Ds=Os=!0,e.current===t&&s("177");var n=e.pendingCommitExpirationTime;0===n&&s("261"),e.pendingCommitExpirationTime=0;var o=t.expirationTime,r=t.childExpirationTime;for(function(e,t){if(e.didError=!1,0===t)e.earliestPendingTime=0,e.latestPendingTime=0,e.earliestSuspendedTime=0,e.latestSuspendedTime=0,e.latestPingedTime=0;else{t<e.latestPingedTime&&(e.latestPingedTime=0);var n=e.latestPendingTime;0!==n&&(n>t?e.earliestPendingTime=e.latestPendingTime=0:e.earliestPendingTime>t&&(e.earliestPendingTime=e.latestPendingTime)),0===(n=e.earliestSuspendedTime)?nr(e,t):t<e.latestSuspendedTime?(e.earliestSuspendedTime=0,e.latestSuspendedTime=0,e.latestPingedTime=0,nr(e,t)):t>n&&nr(e,t)}ir(0,e)}(e,r>o?r:o),_s.current=null,o=void 0,1<t.effectTag?null!==t.lastEffect?(t.lastEffect.nextEffect=t,o=t.firstEffect):o=t:o=t.firstEffect,vo=Tn,yo=function(){var e=Ln();if(Hn(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{var n=(t=(t=e.ownerDocument)&&t.defaultView||window).getSelection&&t.getSelection();if(n&&0!==n.rangeCount){t=n.anchorNode;var o=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{t.nodeType,r.nodeType}catch(e){t=null;break e}var i=0,s=-1,a=-1,l=0,c=0,d=e,u=null;t:for(;;){for(var h;d!==t||0!==o&&3!==d.nodeType||(s=i+o),d!==r||0!==n&&3!==d.nodeType||(a=i+n),3===d.nodeType&&(i+=d.nodeValue.length),null!==(h=d.firstChild);)u=d,d=h;for(;;){if(d===e)break t;if(u===t&&++l===o&&(s=i),u===r&&++c===n&&(a=i),null!==(h=d.nextSibling))break;u=(d=u).parentNode}d=h}t=-1===s||-1===a?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;return{focusedElem:e,selectionRange:t}}(),Tn=!1,As=o;null!==As;){r=!1;var a=void 0;try{Ws()}catch(e){r=!0,a=e}r&&(null===As&&s("178"),Xs(As,a),null!==As&&(As=As.nextEffect))}for(As=o;null!==As;){r=!1,a=void 0;try{Gs()}catch(e){r=!0,a=e}r&&(null===As&&s("178"),Xs(As,a),null!==As&&(As=As.nextEffect))}for(Bn(yo),yo=null,Tn=!!vo,vo=null,e.current=t,As=o;null!==As;){r=!1,a=void 0;try{js(e,n)}catch(e){r=!0,a=e}r&&(null===As&&s("178"),Xs(As,a),null!==As&&(As=As.nextEffect))}if(null!==o&&null!==Ns){var l=Us.bind(null,e,o);Ls=i.unstable_runWithPriority(i.unstable_NormalPriority,(function(){return ko(l)})),Hs=l}Os=Ds=!1,"function"==typeof jo&&jo(t.stateNode),n=t.expirationTime,0===(t=(t=t.childExpirationTime)>n?t:n)&&(Bs=null),function(e,t){e.expirationTime=t,e.finishedWork=null}(e,t)}function qs(e){for(;;){var t=e.alternate,n=e.return,o=e.sibling;if(0==(1024&e.effectTag)){Is=e;e:{var i=t,a=Ps,l=(t=e).pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 18:break;case 1:case 17:No(t.type)&&Lo();break;case 3:Rr(),Ho(),(l=t.stateNode).pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),null!==i&&null!==i.child||(xi(t),t.effectTag&=-3),ds(t);break;case 5:Er(t);var c=kr(Sr.current);if(a=t.type,null!==i&&null!=t.stateNode)us(i,t,a,l,c),i.ref!==t.ref&&(t.effectTag|=128);else if(l){var d=kr(xr.current);if(xi(t)){i=(l=t).stateNode;var u=l.type,h=l.memoizedProps,p=c;switch(i[$]=l,i[A]=h,a=void 0,c=u){case"iframe":case"object":Rn("load",i);break;case"video":case"audio":for(u=0;u<ne.length;u++)Rn(ne[u],i);break;case"source":Rn("error",i);break;case"img":case"image":case"link":Rn("error",i),Rn("load",i);break;case"form":Rn("reset",i),Rn("submit",i);break;case"details":Rn("toggle",i);break;case"input":xt(i,h),Rn("invalid",i),go(p,"onChange");break;case"select":i._wrapperState={wasMultiple:!!h.multiple},Rn("invalid",i),go(p,"onChange");break;case"textarea":Qn(i,h),Rn("invalid",i),go(p,"onChange")}for(a in fo(c,h),u=null,h)h.hasOwnProperty(a)&&(d=h[a],"children"===a?"string"==typeof d?i.textContent!==d&&(u=["children",d]):"number"==typeof d&&i.textContent!==""+d&&(u=["children",""+d]):w.hasOwnProperty(a)&&null!=d&&go(p,a));switch(c){case"input":We(i),kt(i,h,!0);break;case"textarea":We(i),eo(i);break;case"select":case"option":break;default:"function"==typeof h.onClick&&(i.onclick=bo)}a=u,l.updateQueue=a,(l=null!==a)&&ls(t)}else{h=t,i=a,p=l,u=9===c.nodeType?c:c.ownerDocument,d===to.html&&(d=no(i)),d===to.html?"script"===i?((i=u.createElement("div")).innerHTML="<script><\/script>",u=i.removeChild(i.firstChild)):"string"==typeof p.is?u=u.createElement(i,{is:p.is}):(u=u.createElement(i),"select"===i&&p.multiple&&(u.multiple=!0)):u=u.createElementNS(d,i),(i=u)[$]=h,i[A]=l,cs(i,t,!1,!1),p=i;var f=c,m=mo(u=a,h=l);switch(u){case"iframe":case"object":Rn("load",p),c=h;break;case"video":case"audio":for(c=0;c<ne.length;c++)Rn(ne[c],p);c=h;break;case"source":Rn("error",p),c=h;break;case"img":case"image":case"link":Rn("error",p),Rn("load",p),c=h;break;case"form":Rn("reset",p),Rn("submit",p),c=h;break;case"details":Rn("toggle",p),c=h;break;case"input":xt(p,h),c=wt(p,h),Rn("invalid",p),go(f,"onChange");break;case"option":c=Kn(p,h);break;case"select":p._wrapperState={wasMultiple:!!h.multiple},c=r({},h,{value:void 0}),Rn("invalid",p),go(f,"onChange");break;case"textarea":Qn(p,h),c=Xn(p,h),Rn("invalid",p),go(f,"onChange");break;default:c=h}fo(u,c),d=void 0;var g=u,b=p,v=c;for(d in v)if(v.hasOwnProperty(d)){var y=v[d];"style"===d?ho(b,y):"dangerouslySetInnerHTML"===d?null!=(y=y?y.__html:void 0)&&so(b,y):"children"===d?"string"==typeof y?("textarea"!==g||""!==y)&&ao(b,y):"number"==typeof y&&ao(b,""+y):"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&"autoFocus"!==d&&(w.hasOwnProperty(d)?null!=y&&go(f,d):null!=y&&vt(b,d,y,m))}switch(u){case"input":We(p),kt(p,h,!1);break;case"textarea":We(p),eo(p);break;case"option":null!=h.value&&p.setAttribute("value",""+yt(h.value));break;case"select":(c=p).multiple=!!h.multiple,null!=(p=h.value)?Yn(c,!!h.multiple,p,!1):null!=h.defaultValue&&Yn(c,!!h.multiple,h.defaultValue,!0);break;default:"function"==typeof c.onClick&&(p.onclick=bo)}(l=wo(a,l))&&ls(t),t.stateNode=i}null!==t.ref&&(t.effectTag|=128)}else null===t.stateNode&&s("166");break;case 6:i&&null!=t.stateNode?hs(i,t,i.memoizedProps,l):("string"!=typeof l&&(null===t.stateNode&&s("166")),i=kr(Sr.current),kr(xr.current),xi(t)?(a=(l=t).stateNode,i=l.memoizedProps,a[$]=l,(l=a.nodeValue!==i)&&ls(t)):(a=t,(l=(9===i.nodeType?i:i.ownerDocument).createTextNode(l))[$]=t,a.stateNode=l));break;case 13:if(l=t.memoizedState,0!=(64&t.effectTag)){t.expirationTime=a,Is=t;break e}l=null!==l,a=null!==i&&null!==i.memoizedState,null!==i&&!l&&a&&(null!==(i=i.child.sibling)&&(null!==(c=t.firstEffect)?(t.firstEffect=i,i.nextEffect=c):(t.firstEffect=t.lastEffect=i,i.nextEffect=null),i.effectTag=8)),(l||a)&&(t.effectTag|=4);break;case 4:Rr(),ds(t);break;case 10:Gi(t);break;default:s("156")}Is=null}if(t=e,1===Ps||1!==t.childExpirationTime){for(l=0,a=t.child;null!==a;)(i=a.expirationTime)>l&&(l=i),(c=a.childExpirationTime)>l&&(l=c),a=a.sibling;t.childExpirationTime=l}if(null!==Is)return Is;null!==n&&0==(1024&n.effectTag)&&(null===n.firstEffect&&(n.firstEffect=e.firstEffect),null!==e.lastEffect&&(null!==n.lastEffect&&(n.lastEffect.nextEffect=e.firstEffect),n.lastEffect=e.lastEffect),1<e.effectTag&&(null!==n.lastEffect?n.lastEffect.nextEffect=e:n.firstEffect=e,n.lastEffect=e))}else{if(null!==(e=Ts(e)))return e.effectTag&=1023,e;null!==n&&(n.firstEffect=n.lastEffect=null,n.effectTag|=1024)}if(null!==o)return o;if(null===n)break;e=n}return null}function Ks(e){var t=Di(e.alternate,e,Ps);return e.memoizedProps=e.pendingProps,null===t&&(t=qs(e)),_s.current=null,t}function Ys(e,t){Os&&s("243"),Vs(),Os=!0;var n=Rs.current;Rs.current=ui;var o=e.nextExpirationTimeToWorkOn;o===Ps&&e===Ms&&null!==Is||(Fs(),Ps=o,Is=Yo((Ms=e).current,null),e.pendingCommitExpirationTime=0);for(var r=!1;;){try{if(t)for(;null!==Is&&!Ma();)Is=Ks(Is);else for(;null!==Is;)Is=Ks(Is)}catch(t){if(Bi=Hi=Li=null,ei(),null===Is)r=!0,Na(t);else{null===Is&&s("271");var i=Is,a=i.return;if(null!==a){e:{var l=e,c=a,d=i,u=t;if(a=Ps,d.effectTag|=1024,d.firstEffect=d.lastEffect=null,null!==u&&"object"==typeof u&&"function"==typeof u.then){var h=u;u=c;var p=-1,f=-1;do{if(13===u.tag){var m=u.alternate;if(null!==m&&null!==(m=m.memoizedState)){f=10*(1073741822-m.timedOutAt);break}"number"==typeof(m=u.pendingProps.maxDuration)&&(0>=m?p=0:(-1===p||m<p)&&(p=m))}u=u.return}while(null!==u);u=c;do{if((m=13===u.tag)&&(m=void 0!==u.memoizedProps.fallback&&null===u.memoizedState),m){if(null===(c=u.updateQueue)?((c=new Set).add(h),u.updateQueue=c):c.add(h),0==(1&u.mode)){u.effectTag|=64,d.effectTag&=-1957,1===d.tag&&(null===d.alternate?d.tag=17:((a=Qi(1073741823)).tag=Zi,es(d,a))),d.expirationTime=1073741823;break e}c=a;var g=(d=l).pingCache;null===g?(g=d.pingCache=new Cs,m=new Set,g.set(h,m)):void 0===(m=g.get(h))&&(m=new Set,g.set(h,m)),m.has(c)||(m.add(c),d=Js.bind(null,d,h,c),h.then(d,d)),-1===p?l=1073741823:(-1===f&&(f=10*(1073741822-rr(l,a))-5e3),l=f+p),0<=l&&zs<l&&(zs=l),u.effectTag|=2048,u.expirationTime=a;break e}u=u.return}while(null!==u);u=Error((lt(d.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+ct(d))}$s=!0,u=as(u,d),l=c;do{switch(l.tag){case 3:l.effectTag|=2048,l.expirationTime=a,ts(l,a=Ss(l,u,a));break e;case 1:if(p=u,f=l.type,d=l.stateNode,0==(64&l.effectTag)&&("function"==typeof f.getDerivedStateFromError||null!==d&&"function"==typeof d.componentDidCatch&&(null===Bs||!Bs.has(d)))){l.effectTag|=2048,l.expirationTime=a,ts(l,a=ks(l,p,a));break e}}l=l.return}while(null!==l)}Is=qs(i);continue}r=!0,Na(t)}}break}if(Os=!1,Rs.current=n,Bi=Hi=Li=null,ei(),r)Ms=null,e.finishedWork=null;else if(null!==Is)e.finishedWork=null;else{if(null===(n=e.current.alternate)&&s("281"),Ms=null,$s){if(r=e.latestPendingTime,i=e.latestSuspendedTime,a=e.latestPingedTime,0!==r&&r<o||0!==i&&i<o||0!==a&&a<o)return or(e,o),void Ta(e,n,o,e.expirationTime,-1);if(!e.didError&&t)return e.didError=!0,o=e.nextExpirationTimeToWorkOn=o,t=e.expirationTime=1073741823,void Ta(e,n,o,t,-1)}t&&-1!==zs?(or(e,o),(t=10*(1073741822-rr(e,o)))<zs&&(zs=t),t=10*(1073741822-_a()),t=zs-t,Ta(e,n,o,e.expirationTime,0>t?0:t)):(e.pendingCommitExpirationTime=o,e.finishedWork=n)}}function Xs(e,t){for(var n=e.return;null!==n;){switch(n.tag){case 1:var o=n.stateNode;if("function"==typeof n.type.getDerivedStateFromError||"function"==typeof o.componentDidCatch&&(null===Bs||!Bs.has(o)))return es(n,e=ks(n,e=as(t,e),1073741823)),void na(n,1073741823);break;case 3:return es(n,e=Ss(n,e=as(t,e),1073741823)),void na(n,1073741823)}n=n.return}3===e.tag&&(es(e,n=Ss(e,n=as(t,e),1073741823)),na(e,1073741823))}function Qs(e,t){var n=i.unstable_getCurrentPriorityLevel(),o=void 0;if(0==(1&t.mode))o=1073741823;else if(Os&&!Ds)o=Ps;else{switch(n){case i.unstable_ImmediatePriority:o=1073741823;break;case i.unstable_UserBlockingPriority:o=1073741822-10*(1+((1073741822-e+15)/10|0));break;case i.unstable_NormalPriority:o=1073741822-25*(1+((1073741822-e+500)/25|0));break;case i.unstable_LowPriority:case i.unstable_IdlePriority:o=1;break;default:s("313")}null!==Ms&&o===Ps&&--o}return n===i.unstable_UserBlockingPriority&&(0===ua||o<ua)&&(ua=o),o}function Js(e,t,n){var o=e.pingCache;null!==o&&o.delete(t),null!==Ms&&Ps===n?Ms=null:(t=e.earliestSuspendedTime,o=e.latestSuspendedTime,0!==t&&n<=t&&n>=o&&(e.didError=!1,(0===(t=e.latestPingedTime)||t>n)&&(e.latestPingedTime=n),ir(n,e),0!==(n=e.expirationTime)&&Ea(e,n)))}function ea(e,t){var n=e.stateNode;null!==n&&n.delete(t),null!==(e=ta(e,t=Qs(t=_a(),e)))&&(nr(e,t),0!==(t=e.expirationTime)&&Ea(e,t))}function ta(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;null!==n&&n.expirationTime<t&&(n.expirationTime=t);var o=e.return,r=null;if(null===o&&3===e.tag)r=e.stateNode;else for(;null!==o;){if(n=o.alternate,o.childExpirationTime<t&&(o.childExpirationTime=t),null!==n&&n.childExpirationTime<t&&(n.childExpirationTime=t),null===o.return&&3===o.tag){r=o.stateNode;break}o=o.return}return r}function na(e,t){null!==(e=ta(e,t))&&(!Os&&0!==Ps&&t>Ps&&Fs(),nr(e,t),Os&&!Ds&&Ms===e||Ea(e,e.expirationTime),xa>wa&&(xa=0,s("185")))}function oa(e,t,n,o,r){return i.unstable_runWithPriority(i.unstable_ImmediatePriority,(function(){return e(t,n,o,r)}))}var ra=null,ia=null,sa=0,aa=void 0,la=!1,ca=null,da=0,ua=0,ha=!1,pa=null,fa=!1,ma=!1,ga=null,ba=i.unstable_now(),va=1073741822-(ba/10|0),ya=va,wa=50,xa=0,Ca=null;function Sa(){va=1073741822-((i.unstable_now()-ba)/10|0)}function ka(e,t){if(0!==sa){if(t<sa)return;null!==aa&&i.unstable_cancelCallback(aa)}sa=t,e=i.unstable_now()-ba,aa=i.unstable_scheduleCallback(Pa,{timeout:10*(1073741822-t)-e})}function Ta(e,t,n,o,r){e.expirationTime=o,0!==r||Ma()?0<r&&(e.timeoutHandle=Co(Ra.bind(null,e,t,n),r)):(e.pendingCommitExpirationTime=n,e.finishedWork=t)}function Ra(e,t,n){e.pendingCommitExpirationTime=n,e.finishedWork=t,Sa(),ya=va,$a(e,n)}function _a(){return la||(Oa(),0!==da&&1!==da||(Sa(),ya=va)),ya}function Ea(e,t){null===e.nextScheduledRoot?(e.expirationTime=t,null===ia?(ra=ia=e,e.nextScheduledRoot=e):(ia=ia.nextScheduledRoot=e).nextScheduledRoot=ra):t>e.expirationTime&&(e.expirationTime=t),la||(fa?ma&&(ca=e,da=1073741823,Aa(e,1073741823,!1)):1073741823===t?za(1073741823,!1):ka(e,t))}function Oa(){var e=0,t=null;if(null!==ia)for(var n=ia,o=ra;null!==o;){var r=o.expirationTime;if(0===r){if((null===n||null===ia)&&s("244"),o===o.nextScheduledRoot){ra=ia=o.nextScheduledRoot=null;break}if(o===ra)ra=r=o.nextScheduledRoot,ia.nextScheduledRoot=r,o.nextScheduledRoot=null;else{if(o===ia){(ia=n).nextScheduledRoot=ra,o.nextScheduledRoot=null;break}n.nextScheduledRoot=o.nextScheduledRoot,o.nextScheduledRoot=null}o=n.nextScheduledRoot}else{if(r>e&&(e=r,t=o),o===ia)break;if(1073741823===e)break;n=o,o=o.nextScheduledRoot}}ca=t,da=e}var Ia=!1;function Ma(){return!!Ia||!!i.unstable_shouldYield()&&(Ia=!0)}function Pa(){try{if(!Ma()&&null!==ra){Sa();var e=ra;do{var t=e.expirationTime;0!==t&&va<=t&&(e.nextExpirationTimeToWorkOn=va),e=e.nextScheduledRoot}while(e!==ra)}za(0,!0)}finally{Ia=!1}}function za(e,t){if(Oa(),t)for(Sa(),ya=va;null!==ca&&0!==da&&e<=da&&!(Ia&&va>da);)Aa(ca,da,va>da),Oa(),Sa(),ya=va;else for(;null!==ca&&0!==da&&e<=da;)Aa(ca,da,!1),Oa();if(t&&(sa=0,aa=null),0!==da&&ka(ca,da),xa=0,Ca=null,null!==ga)for(e=ga,ga=null,t=0;t<e.length;t++){var n=e[t];try{n._onComplete()}catch(e){ha||(ha=!0,pa=e)}}if(ha)throw e=pa,pa=null,ha=!1,e}function $a(e,t){la&&s("253"),ca=e,da=t,Aa(e,t,!1),za(1073741823,!1)}function Aa(e,t,n){if(la&&s("245"),la=!0,n){var o=e.finishedWork;null!==o?Da(e,o,t):(e.finishedWork=null,-1!==(o=e.timeoutHandle)&&(e.timeoutHandle=-1,So(o)),Ys(e,n),null!==(o=e.finishedWork)&&(Ma()?e.finishedWork=o:Da(e,o,t)))}else null!==(o=e.finishedWork)?Da(e,o,t):(e.finishedWork=null,-1!==(o=e.timeoutHandle)&&(e.timeoutHandle=-1,So(o)),Ys(e,n),null!==(o=e.finishedWork)&&Da(e,o,t));la=!1}function Da(e,t,n){var o=e.firstBatch;if(null!==o&&o._expirationTime>=n&&(null===ga?ga=[o]:ga.push(o),o._defer))return e.finishedWork=t,void(e.expirationTime=0);e.finishedWork=null,e===Ca?xa++:(Ca=e,xa=0),i.unstable_runWithPriority(i.unstable_ImmediatePriority,(function(){Zs(e,t)}))}function Na(e){null===ca&&s("246"),ca.expirationTime=0,ha||(ha=!0,pa=e)}function La(e,t){var n=fa;fa=!0;try{return e(t)}finally{(fa=n)||la||za(1073741823,!1)}}function Ha(e,t){if(fa&&!ma){ma=!0;try{return e(t)}finally{ma=!1}}return e(t)}function Ba(e,t,n){fa||la||0===ua||(za(ua,!1),ua=0);var o=fa;fa=!0;try{return i.unstable_runWithPriority(i.unstable_UserBlockingPriority,(function(){return e(t,n)}))}finally{(fa=o)||la||za(1073741823,!1)}}function Fa(e,t,n,o,r){var i=t.current;e:if(n){t:{2===nn(n=n._reactInternalFiber)&&1===n.tag||s("170");var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(No(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(null!==a);s("171"),a=void 0}if(1===n.tag){var l=n.type;if(No(l)){n=Fo(n,l,a);break e}}n=a}else n=Po;return null===t.context?t.context=n:t.pendingContext=n,t=r,(r=Qi(o)).payload={element:e},null!==(t=void 0===t?null:t)&&(r.callback=t),Vs(),es(i,r),na(i,o),o}function Ga(e,t,n,o){var r=t.current;return Fa(e,t,n,r=Qs(_a(),r),o)}function Wa(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function ja(e){var t=1073741822-25*(1+((1073741822-_a()+500)/25|0));t>=Es&&(t=Es-1),this._expirationTime=Es=t,this._root=e,this._callbacks=this._next=null,this._hasChildren=this._didComplete=!1,this._children=null,this._defer=!0}function Ua(){this._callbacks=null,this._didCommit=!1,this._onCommit=this._onCommit.bind(this)}function Va(e,t,n){e={current:t=qo(3,null,null,t?3:0),containerInfo:e,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:n,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null},this._internalRoot=t.stateNode=e}function Za(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function qa(e,t,n,o,r){var i=n._reactRootContainer;if(i){if("function"==typeof r){var s=r;r=function(){var e=Wa(i._internalRoot);s.call(e)}}null!=e?i.legacy_renderSubtreeIntoContainer(e,t,r):i.render(t,r)}else{if(i=n._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Va(e,!1,t)}(n,o),"function"==typeof r){var a=r;r=function(){var e=Wa(i._internalRoot);a.call(e)}}Ha((function(){null!=e?i.legacy_renderSubtreeIntoContainer(e,t,r):i.render(t,r)}))}return Wa(i._internalRoot)}function Ka(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;return Za(t)||s("200"),function(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Ke,key:null==o?null:""+o,children:e,containerInfo:t,implementation:n}}(e,t,null,n)}_e=function(e,t,n){switch(t){case"input":if(St(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var r=H(o);r||s("90"),je(o),St(o,r)}}}break;case"textarea":Jn(e,n);break;case"select":null!=(t=n.value)&&Yn(e,!!n.multiple,t,!1)}},ja.prototype.render=function(e){this._defer||s("250"),this._hasChildren=!0,this._children=e;var t=this._root._internalRoot,n=this._expirationTime,o=new Ua;return Fa(e,t,null,n,o._onCommit),o},ja.prototype.then=function(e){if(this._didComplete)e();else{var t=this._callbacks;null===t&&(t=this._callbacks=[]),t.push(e)}},ja.prototype.commit=function(){var e=this._root._internalRoot,t=e.firstBatch;if(this._defer&&null!==t||s("251"),this._hasChildren){var n=this._expirationTime;if(t!==this){this._hasChildren&&(n=this._expirationTime=t._expirationTime,this.render(this._children));for(var o=null,r=t;r!==this;)o=r,r=r._next;null===o&&s("251"),o._next=r._next,this._next=t,e.firstBatch=this}this._defer=!1,$a(e,n),t=this._next,this._next=null,null!==(t=e.firstBatch=t)&&t._hasChildren&&t.render(t._children)}else this._next=null,this._defer=!1},ja.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var e=this._callbacks;if(null!==e)for(var t=0;t<e.length;t++)(0,e[t])()}},Ua.prototype.then=function(e){if(this._didCommit)e();else{var t=this._callbacks;null===t&&(t=this._callbacks=[]),t.push(e)}},Ua.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var e=this._callbacks;if(null!==e)for(var t=0;t<e.length;t++){var n=e[t];"function"!=typeof n&&s("191",n),n()}}},Va.prototype.render=function(e,t){var n=this._internalRoot,o=new Ua;return null!==(t=void 0===t?null:t)&&o.then(t),Ga(e,n,null,o._onCommit),o},Va.prototype.unmount=function(e){var t=this._internalRoot,n=new Ua;return null!==(e=void 0===e?null:e)&&n.then(e),Ga(null,t,null,n._onCommit),n},Va.prototype.legacy_renderSubtreeIntoContainer=function(e,t,n){var o=this._internalRoot,r=new Ua;return null!==(n=void 0===n?null:n)&&r.then(n),Ga(t,o,e,r._onCommit),r},Va.prototype.createBatch=function(){var e=new ja(this),t=e._expirationTime,n=this._internalRoot,o=n.firstBatch;if(null===o)n.firstBatch=e,e._next=null;else{for(n=null;null!==o&&o._expirationTime>=t;)n=o,o=o._next;e._next=o,null!==n&&(n._next=e)}return e},ze=La,$e=Ba,Ae=function(){la||0===ua||(za(ua,!1),ua=0)};var Ya={createPortal:Ka,findDOMNode:function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternalFiber;return void 0===t&&("function"==typeof e.render?s("188"):s("268",Object.keys(e))),e=null===(e=rn(t))?null:e.stateNode},hydrate:function(e,t,n){return Za(t)||s("200"),qa(null,e,t,!0,n)},render:function(e,t,n){return Za(t)||s("200"),qa(null,e,t,!1,n)},unstable_renderSubtreeIntoContainer:function(e,t,n,o){return Za(n)||s("200"),(null==e||void 0===e._reactInternalFiber)&&s("38"),qa(e,t,n,!1,o)},unmountComponentAtNode:function(e){return Za(e)||s("40"),!!e._reactRootContainer&&(Ha((function(){qa(null,null,e,!1,(function(){e._reactRootContainer=null}))})),!0)},unstable_createPortal:function(){return Ka.apply(void 0,arguments)},unstable_batchedUpdates:La,unstable_interactiveUpdates:Ba,flushSync:function(e,t){la&&s("187");var n=fa;fa=!0;try{return oa(e,t)}finally{fa=n,za(1073741823,!1)}},unstable_createRoot:function(e,t){return Za(e)||s("299","unstable_createRoot"),new Va(e,!0,null!=t&&!0===t.hydrate)},unstable_flushControlled:function(e){var t=fa;fa=!0;try{oa(e)}finally{(fa=t)||la||za(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[N,L,H,I.injectEventPluginsByName,y,U,function(e){_(e,j)},Me,Pe,On,P]}};!function(e){var t=e.findFiberByHostInstance;(function(e){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);jo=Vo((function(e){return t.onCommitFiberRoot(n,e)})),Uo=Vo((function(e){return t.onCommitFiberUnmount(n,e)}))}catch(e){}})(r({},e,{overrideProps:null,currentDispatcherRef:Ue.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=rn(e))?null:e.stateNode},findFiberByHostInstance:function(e){return t?t(e):null}}))}({findFiberByHostInstance:D,bundleType:0,version:"16.8.4",rendererPackageName:"react-dom"});var Xa={default:Ya},Qa=Xa&&Ya||Xa;e.exports=Qa.default||Qa},2788:(e,t,n)=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){}}(),e.exports=n(3975)},8447:(e,t,n)=>{var o=n(4516),r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,s=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,l=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,d=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,h=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=0;o<t;o++)n+="&args[]="+encodeURIComponent(arguments[o+1]);!function(e,t,n,o,r,i,s,a){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,r,i,s,a],c=0;(e=Error(t.replace(/%s/g,(function(){return l[c++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function x(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||y}function C(){}function S(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||y}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&v("85"),this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},C.prototype=x.prototype;var k=S.prototype=new C;k.constructor=S,o(k,x.prototype),k.isPureReactComponent=!0;var T={current:null},R={current:null},_=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var o=void 0,r={},s=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)_.call(t,o)&&!E.hasOwnProperty(o)&&(r[o]=t[o]);var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===r[o]&&(r[o]=l[o]);return{$$typeof:i,type:e,key:s,ref:a,props:r,_owner:R.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var M=/\/+/g,P=[];function z(e,t,n,o){if(P.length){var r=P.pop();return r.result=e,r.keyPrefix=t,r.func=n,r.context=o,r.count=0,r}return{result:e,keyPrefix:t,func:n,context:o,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function A(e,t,n,o){var r=typeof e;"undefined"!==r&&"boolean"!==r||(e=null);var a=!1;if(null===e)a=!0;else switch(r){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case i:case s:a=!0}}if(a)return n(o,e,""===t?"."+N(e,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var c=t+N(r=e[l],l);a+=A(r,c,n,o)}else if(null===e||"object"!=typeof e?c=null:c="function"==typeof(c=b&&e[b]||e["@@iterator"])?c:null,"function"==typeof c)for(e=c.call(e),l=0;!(r=e.next()).done;)a+=A(r=r.value,c=t+N(r,l++),n,o);else"object"===r&&v("31","[object Object]"===(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return a}function D(e,t,n){return null==e?0:A(e,"",t,n)}function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function H(e,t,n){var o=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?B(e,o,n,(function(e){return e})):null!=e&&(I(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(M,"$&/")+"/")+n)),o.push(e))}function B(e,t,n,o,r){var i="";null!=n&&(i=(""+n).replace(M,"$&/")+"/"),D(e,H,t=z(t,i,o,r)),$(t)}function F(){var e=T.current;return null===e&&v("307"),e}var G={Children:{map:function(e,t,n){if(null==e)return e;var o=[];return B(e,o,null,t,n),o},forEach:function(e,t,n){if(null==e)return e;D(e,L,t=z(null,null,t,n)),$(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return B(e,t,null,(function(e){return e})),t},only:function(e){return I(e)||v("143"),e}},createRef:function(){return{current:null}},Component:x,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:g,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,n){return F().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,n){return F().useReducer(e,t,n)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:a,StrictMode:l,Suspense:f,createElement:O,cloneElement:function(e,t,n){null==e&&v("267",e);var r=void 0,s=o({},e.props),a=e.key,l=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,c=R.current),void 0!==t.key&&(a=""+t.key);var d=void 0;for(r in e.type&&e.type.defaultProps&&(d=e.type.defaultProps),t)_.call(t,r)&&!E.hasOwnProperty(r)&&(s[r]=void 0===t[r]&&void 0!==d?d[r]:t[r])}if(1===(r=arguments.length-2))s.children=n;else if(1<r){d=Array(r);for(var u=0;u<r;u++)d[u]=arguments[u+2];s.children=d}return{$$typeof:i,type:e.type,key:a,ref:l,props:s,_owner:c}},createFactory:function(e){var t=O.bind(null,e);return t.type=e,t},isValidElement:I,version:"16.8.4",unstable_ConcurrentMode:h,unstable_Profiler:c,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:T,ReactCurrentOwner:R,assign:o}},W={default:G},j=W&&G||W;e.exports=j.default||j},2735:(e,t,n)=>{e.exports=n(8447)},9666:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=null,r=!1,i=3,s=-1,a=-1,l=!1,c=!1;function d(){if(!l){var e=o.expirationTime;c?k():c=!0,S(p,e)}}function u(){var e=o,t=o.next;if(o===t)o=null;else{var n=o.previous;o=n.next=t,t.previous=n}e.next=e.previous=null,n=e.callback,t=e.expirationTime,e=e.priorityLevel;var r=i,s=a;i=e,a=t;try{var l=n()}finally{i=r,a=s}if("function"==typeof l)if(l={callback:l,priorityLevel:e,expirationTime:t,next:null,previous:null},null===o)o=l.next=l.previous=l;else{n=null,e=o;do{if(e.expirationTime>=t){n=e;break}e=e.next}while(e!==o);null===n?n=o:n===o&&(o=l,d()),(t=n.previous).next=n.previous=l,l.next=n,l.previous=t}}function h(){if(-1===s&&null!==o&&1===o.priorityLevel){l=!0;try{do{u()}while(null!==o&&1===o.priorityLevel)}finally{l=!1,null!==o?d():c=!1}}}function p(e){l=!0;var n=r;r=e;try{if(e)for(;null!==o;){var i=t.unstable_now();if(!(o.expirationTime<=i))break;do{u()}while(null!==o&&o.expirationTime<=i)}else if(null!==o)do{u()}while(null!==o&&!T())}finally{l=!1,r=n,null!==o?d():c=!1,h()}}var f,m,g=Date,b="function"==typeof setTimeout?setTimeout:void 0,v="function"==typeof clearTimeout?clearTimeout:void 0,y="function"==typeof requestAnimationFrame?requestAnimationFrame:void 0,w="function"==typeof cancelAnimationFrame?cancelAnimationFrame:void 0;function x(e){f=y((function(t){v(m),e(t)})),m=b((function(){w(f),e(t.unstable_now())}),100)}if("object"==typeof performance&&"function"==typeof performance.now){var C=performance;t.unstable_now=function(){return C.now()}}else t.unstable_now=function(){return g.now()};var S,k,T,R=null;if("undefined"!=typeof window?R=window:void 0!==n.g&&(R=n.g),R&&R._schedMock){var _=R._schedMock;S=_[0],k=_[1],T=_[2],t.unstable_now=_[3]}else if("undefined"==typeof window||"function"!=typeof MessageChannel){var E=null,O=function(e){if(null!==E)try{E(e)}finally{E=null}};S=function(e){null!==E?setTimeout(S,0,e):(E=e,setTimeout(O,0,!1))},k=function(){E=null},T=function(){return!1}}else{var I=null,M=!1,P=-1,z=!1,$=!1,A=0,D=33,N=33;T=function(){return A<=t.unstable_now()};var L=new MessageChannel,H=L.port2;L.port1.onmessage=function(){M=!1;var e=I,n=P;I=null,P=-1;var o=t.unstable_now(),r=!1;if(0>=A-o){if(!(-1!==n&&n<=o))return z||(z=!0,x(B)),I=e,void(P=n);r=!0}if(null!==e){$=!0;try{e(r)}finally{$=!1}}};var B=function(e){if(null!==I){x(B);var t=e-A+N;t<N&&D<N?(8>t&&(t=8),N=t<D?D:t):D=t,A=e+N,M||(M=!0,H.postMessage(void 0))}else z=!1};S=function(e,t){I=e,P=t,$||0>t?H.postMessage(void 0):z||(z=!0,x(B))},k=function(){I=null,M=!1,P=-1}}t.unstable_ImmediatePriority=1,t.unstable_UserBlockingPriority=2,t.unstable_NormalPriority=3,t.unstable_IdlePriority=5,t.unstable_LowPriority=4,t.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var o=i,r=s;i=e,s=t.unstable_now();try{return n()}finally{i=o,s=r,h()}},t.unstable_next=function(e){switch(i){case 1:case 2:case 3:var n=3;break;default:n=i}var o=i,r=s;i=n,s=t.unstable_now();try{return e()}finally{i=o,s=r,h()}},t.unstable_scheduleCallback=function(e,n){var r=-1!==s?s:t.unstable_now();if("object"==typeof n&&null!==n&&"number"==typeof n.timeout)n=r+n.timeout;else switch(i){case 1:n=r+-1;break;case 2:n=r+250;break;case 5:n=r+1073741823;break;case 4:n=r+1e4;break;default:n=r+5e3}if(e={callback:e,priorityLevel:i,expirationTime:n,next:null,previous:null},null===o)o=e.next=e.previous=e,d();else{r=null;var a=o;do{if(a.expirationTime>n){r=a;break}a=a.next}while(a!==o);null===r?r=o:r===o&&(o=e,d()),(n=r.previous).next=r.previous=e,e.next=r,e.previous=n}return e},t.unstable_cancelCallback=function(e){var t=e.next;if(null!==t){if(t===e)o=null;else{e===o&&(o=t);var n=e.previous;n.next=t,t.previous=n}e.next=e.previous=null}},t.unstable_wrapCallback=function(e){var n=i;return function(){var o=i,r=s;i=n,s=t.unstable_now();try{return e.apply(this,arguments)}finally{i=o,s=r,h()}}},t.unstable_getCurrentPriorityLevel=function(){return i},t.unstable_shouldYield=function(){return!r&&(null!==o&&o.expirationTime<a||T())},t.unstable_continueExecution=function(){null!==o&&d()},t.unstable_pauseExecution=function(){},t.unstable_getFirstCallbackNode=function(){return o}},9146:(e,t,n)=>{e.exports=n(9666)}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>"feature-billboard.js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},o.l=(t,n,r,i)=>{if(e[t])e[t].push(n);else{var s,a;if(void 0!==r)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==t){s=d;break}}s||(a=!0,(s=document.createElement("script")).type="module",s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=t),e[t]=[n];var u=(n,o)=>{s.onerror=s.onload=null,clearTimeout(h);var r=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(o))),n)return n(o)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),a&&document.head.appendChild(s)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="#{root}/dist/webviews/",void 0!==o&&Object.defineProperty(o,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}}),(()=>{var e={786:0};o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(((n,o)=>r=e[t]=[n,o]));n.push(r[2]=i);var s=o.p+o.u(t),a=new Error;o.l(s,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,r[1](a)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,i,[s,a,l]=n,c=0;if(s.some((t=>0!==e[t]))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(l)l(o)}for(t&&t(n);c<s.length;c++)i=s[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r={};(()=>{o.d(r,{q:()=>Ed});var e=o(2735),t=o.n(e),n=o(2788);class i{constructor(e,t=!1){this.method=e,this.overwriteable=t}}class s extends i{}class a extends i{}function l(e,t,n){e.method===t.method&&n(t.params,e)}const c=new s("webview/ready"),d=new s("webview/focus");new s("command/execute"),new s("configuration/preview"),new s("configuration/update"),new a("configuration/didChange"),new a("configuration/didPreview"),new a("webview/didOpenAnchor");var u=(e=>(e.Upstream="upstream",e.PullRequest="pullRequest",e))(u||{}),h=(e=>(e.Selection="selection",e.Head="head",e.Highlights="highlights",e.LocalBranches="localBranches",e.RemoteBranches="remoteBranches",e.Stashes="stashes",e.Tags="tags",e.Upstream="upstream",e))(h||{});Object.values(u);var p=(e=>(e.RowEntry="rowEntry",e.Tooltip="tooltip",e))(p||{});const f=new s("graph/chooseRepository"),m=new s("graph/dimMergeCommits"),g=new s("graph/dismissBanner"),b=new s("graph/dblclick"),v=new s("graph/rows/ensure"),y=new s("graph/avatars/get"),w=new s("graph/refs/metadata/get"),x=new s("graph/rows/get"),C=new s("graph/search"),S=new s("graph/search/openInView"),k=new s("graph/columns/update"),T=new s("graph/refs/update/visibility"),R=new s("graph/fitlers/update/excludeType"),_=new s("graph/configuration/update"),E=new s("graph/fitlers/update/includeOnlyRefs"),O=new s("graph/selection/update"),I=new a("graph/didChange",!0),M=new a("graph/configuration/didChange",!0),P=new a("graph/subscription/didChange",!0),z=new a("graph/avatars/didChange",!0),$=new a("graph/refs/didChangeMetadata",!0),A=new a("graph/columns/didChange",!0),D=new a("graph/window/focus/didChange",!0),N=new a("graph/refs/didChangeVisibility",!0),L=new a("graph/rows/didChange"),H=new a("graph/selection/didChange",!0),B=new a("graph/workingTree/didChange",!0),F=new a("graph/rows/didEnsure"),G=new a("graph/didSearch",!0),W=new a("graph/didFetch",!0),j=500;var U=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(U||{}),V=(e=>(e.Off="off",e.Error="error",e.Warn="warn",e.Info="info",e.Debug="debug",e))(V||{});function Z(e,t){const n=e+t,o=t<0?n<0?0:n:n>255?255:n;return Math.round(o)}function q(e,t){return K(e,-t)}function K(e,t){const n=function(e){const t=de(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==n)return e;const[o,r,i,s]=n,a=255*t/100;return`rgba(${Z(o,a)}, ${Z(r,a)}, ${Z(i,a)}, ${s})`}function Y(e,t){const n=ie.from(e);return null==n?e:n.transparent(t/100).toString()}function X(e,t,n){const o=ie.from(e),r=ie.from(t);return null==o||null==r?e:o.mix(r,n/100).toString()}const Q=1e-7,J=20;function ee(e,t){const n=Math.pow(10,t);return Math.round(e*n)/n}class te{constructor(e,t,n,o=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,n)),this.a=ee(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class ne{constructor(e,t,n,o){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=ee(Math.max(Math.min(1,t),0),3),this.l=ee(Math.max(Math.min(1,n),0),3),this.a=ee(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,n=e.g/255,o=e.b/255,r=e.a,i=Math.max(t,n,o),s=Math.min(t,n,o);let a=0,l=0;const c=(s+i)/2,d=i-s;if(d>0){switch(l=Math.min(c<=.5?d/(2*c):d/(2-2*c),1),i){case t:a=(n-o)/d+(n<o?6:0);break;case n:a=(o-t)/d+2;break;case o:a=(t-n)/d+4}a*=60,a=Math.round(a)}return new ne(a,l,c,r)}static _hue2rgb(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}static toRGBA(e){const t=e.h/360,{s:n,l:o,a:r}=e;let i,s,a;if(0===n)i=s=a=o;else{const e=o<.5?o*(1+n):o+n-o*n,r=2*o-e;i=ne._hue2rgb(r,e,t+1/3),s=ne._hue2rgb(r,e,t),a=ne._hue2rgb(r,e,t-1/3)}return new te(Math.round(255*i),Math.round(255*s),Math.round(255*a),r)}}class oe{constructor(e,t,n,o){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=ee(Math.max(Math.min(1,t),0),3),this.v=ee(Math.max(Math.min(1,n),0),3),this.a=ee(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,n=e.g/255,o=e.b/255,r=Math.max(t,n,o),i=r-Math.min(t,n,o),s=0===r?0:i/r;let a;return a=0===i?0:r===t?((n-o)/i%6+6)%6:r===n?(o-t)/i+2:(t-n)/i+4,new oe(Math.round(60*a),s,r,e.a)}static toRGBA(e){const{h:t,s:n,v:o,a:r}=e,i=o*n,s=i*(1-Math.abs(t/60%2-1)),a=o-i;let[l,c,d]=[0,0,0];return t<60?(l=i,c=s):t<120?(l=s,c=i):t<180?(c=i,d=s):t<240?(c=s,d=i):t<300?(l=s,d=i):t<=360&&(l=i,d=s),l=Math.round(255*(l+a)),c=Math.round(255*(c+a)),d=Math.round(255*(d+a)),new te(l,c,d,r)}}const re=class{static from(e){return e instanceof re?e:de(e)||re.red}static fromCssVariable(e,t){return de(t.getPropertyValue(e).trim())||re.red}static fromHex(e){return ue(e)||re.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:ne.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:oe.fromRGBA(this.rgba)}constructor(e){if(!e)throw new Error("Color needs a value");if(e instanceof te)this.rgba=e;else if(e instanceof ne)this._hsla=e,this.rgba=ne.toRGBA(e);else{if(!(e instanceof oe))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=oe.toRGBA(e)}}equals(e){return null!=e&&(Boolean(e)&&te.equals(this.rgba,e.rgba)&&ne.equals(this.hsla,e.hsla)&&oe.equals(this.hsva,e.hsva))}getRelativeLuminance(){return ee(.2126*re._relativeLuminanceForComponent(this.rgba.r)+.7152*re._relativeLuminanceForComponent(this.rgba.g)+.0722*re._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new ie(new te(0,0,0,e.rgba.a));if(1===t)return new ie(new te(255,255,255,e.rgba.a));const n=e.getRelativeLuminance();let o=J;const r=(e,n)=>{const i=e.mix(n,.5),s=i.getRelativeLuminance();return Math.abs(t-s)<Q||!o--?i:s>t?r(e,i):r(i,n)},i=(n>t?r(ie.black,e):r(e,ie.white)).rgba;return new ie(new te(i.r,i.g,i.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),n=e.getRelativeLuminance();return t>n?(t+.05)/(n+.05):(n+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new re(new ne(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new re(new ne(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:n,b:o,a:r}=this.rgba;return new re(new te(t,n,o,r*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new re(new te(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,n=this.rgba.a,o=t.a,r=n+o*(1-n);if(r<1e-6)return re.transparent;const i=this.rgba.r*n/r+t.r*o*(1-n)/r,s=this.rgba.g*n/r+t.g*o*(1-n)/r,a=this.rgba.b*n/r+t.b*o*(1-n)/r;return new re(new te(i,s,a,r))}mix(e,t){return function(e,t,n){const o=e.rgba,r=t.rgba;return new ie(new te(o.r+n*(r.r-o.r),o.g+n*(r.g-o.g),o.b+n*(r.b-o.b),o.a+n*(r.a-o.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:n,b:o,a:r}=this.rgba;return new re(new te(e.rgba.r-r*(e.rgba.r-t),e.rgba.g-r*(e.rgba.g-n),e.rgba.b-r*(e.rgba.b-o),1))}flatten(...e){const t=e.reduceRight(((e,t)=>re._flatten(t,e)));return re._flatten(this,t)}static _flatten(e,t){const n=1-e.rgba.a;return new re(new te(n*t.rgba.r+e.rgba.a*e.rgba.r,n*t.rgba.g+e.rgba.a*e.rgba.g,n*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return le(e);return se(e)}(this)),this._toString}static getLighterColor(e,t,n){if(e.isLighterThan(t))return e;n=n||.5;const o=e.getRelativeLuminance(),r=t.getRelativeLuminance();return n=n*(r-o)/r,e.lighten(n)}static getDarkerColor(e,t,n){if(e.isDarkerThan(t))return e;n=n||.5;const o=e.getRelativeLuminance();return n=n*(o-t.getRelativeLuminance())/o,e.darken(n)}};let ie=re;function se(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function ae(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function le(e){return`#${ae(e.rgba.r)}${ae(e.rgba.g)}${ae(e.rgba.b)}`}ie.white=new re(new te(255,255,255,1)),ie.black=new re(new te(0,0,0,1)),ie.red=new re(new te(255,0,0,1)),ie.blue=new re(new te(0,0,255,1)),ie.green=new re(new te(0,255,0,1)),ie.cyan=new re(new te(0,255,255,1)),ie.lightgrey=new re(new te(211,211,211,1)),ie.transparent=new re(new te(0,0,0,0));const ce=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function de(e){if(0===e.length)return null;if(e.charCodeAt(0)===U.Hash)return ue(e);const t=ce.exec(e);if(null==t)return null;const n=t[1];let o;switch(n){case"rgb":case"hsl":o=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":o=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(n){case"rgb":case"rgba":return new ie(new te(o[0],o[1],o[2],o[3]));case"hsl":case"hsla":return new ie(new ne(o[0],o[1],o[2],o[3]))}return ie.red}function ue(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==U.Hash)return null;if(7===t){const t=16*he(e.charCodeAt(1))+he(e.charCodeAt(2)),n=16*he(e.charCodeAt(3))+he(e.charCodeAt(4)),o=16*he(e.charCodeAt(5))+he(e.charCodeAt(6));return new ie(new te(t,n,o,1))}if(9===t){const t=16*he(e.charCodeAt(1))+he(e.charCodeAt(2)),n=16*he(e.charCodeAt(3))+he(e.charCodeAt(4)),o=16*he(e.charCodeAt(5))+he(e.charCodeAt(6)),r=16*he(e.charCodeAt(7))+he(e.charCodeAt(8));return new ie(new te(t,n,o,r/255))}if(4===t){const t=he(e.charCodeAt(1)),n=he(e.charCodeAt(2)),o=he(e.charCodeAt(3));return new ie(new te(16*t+t,16*n+n,16*o+o))}if(5===t){const t=he(e.charCodeAt(1)),n=he(e.charCodeAt(2)),o=he(e.charCodeAt(3)),r=he(e.charCodeAt(4));return new ie(new te(16*t+t,16*n+n,16*o+o,(16*r+r)/255))}return null}function he(e){switch(e){case U.Digit0:return 0;case U.Digit1:return 1;case U.Digit2:return 2;case U.Digit3:return 3;case U.Digit4:return 4;case U.Digit5:return 5;case U.Digit6:return 6;case U.Digit7:return 7;case U.Digit8:return 8;case U.Digit9:return 9;case U.a:case U.A:return 10;case U.b:case U.B:return 11;case U.c:case U.C:return 12;case U.d:case U.D:return 13;case U.e:case U.E:return 14;case U.f:case U.F:return 15}return 0}const pe=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};const fe="object"==typeof global&&global&&global.Object===Object&&global;var me="object"==typeof self&&self&&self.Object===Object&&self;const ge=fe||me||Function("return this")();const be=function(){return ge.Date.now()};var ve=/\s/;const ye=function(e){for(var t=e.length;t--&&ve.test(e.charAt(t)););return t};var we=/^\s+/;const xe=function(e){return e?e.slice(0,ye(e)+1).replace(we,""):e};const Ce=ge.Symbol;var Se=Object.prototype,ke=Se.hasOwnProperty,Te=Se.toString,Re=Ce?Ce.toStringTag:void 0;const _e=function(e){var t=ke.call(e,Re),n=e[Re];try{e[Re]=void 0;var o=!0}catch(e){}var r=Te.call(e);return o&&(t?e[Re]=n:delete e[Re]),r};var Ee=Object.prototype.toString;const Oe=function(e){return Ee.call(e)};var Ie="[object Null]",Me="[object Undefined]",Pe=Ce?Ce.toStringTag:void 0;const ze=function(e){return null==e?void 0===e?Me:Ie:Pe&&Pe in Object(e)?_e(e):Oe(e)};const $e=function(e){return null!=e&&"object"==typeof e};var Ae="[object Symbol]";const De=function(e){return"symbol"==typeof e||$e(e)&&ze(e)==Ae};var Ne=NaN,Le=/^[-+]0x[0-9a-f]+$/i,He=/^0b[01]+$/i,Be=/^0o[0-7]+$/i,Fe=parseInt;const Ge=function(e){if("number"==typeof e)return e;if(De(e))return Ne;if(pe(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=pe(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=xe(e);var n=He.test(e);return n||Be.test(e)?Fe(e.slice(2),n?2:8):Le.test(e)?Ne:+e};var We="Expected a function",je=Math.max,Ue=Math.min;const Ve=function(e,t,n){var o,r,i,s,a,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError(We);function p(t){var n=o,i=r;return o=r=void 0,c=t,s=e.apply(i,n)}function f(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=i}function m(){var e=be();if(f(e))return g(e);a=setTimeout(m,function(e){var n=t-(e-l);return u?Ue(n,i-(e-c)):n}(e))}function g(e){return a=void 0,h&&o?p(e):(o=r=void 0,s)}function b(){var e=be(),n=f(e);if(o=arguments,r=this,l=e,n){if(void 0===a)return function(e){return c=e,a=setTimeout(m,t),d?p(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(m,t),p(l)}return void 0===a&&(a=setTimeout(m,t)),s}return t=Ge(t)||0,pe(n)&&(d=!!n.leading,i=(u="maxWait"in n)?je(Ge(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h),b.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=l=r=a=void 0},b.flush=function(){return void 0===a?s:g(be())},b};function Ze(e,t,n){const{track:o,...r}={track:!1,...n??{}};if(!0!==o)return Ve(e,t,r);let i=!1;const s=Ve((function(...t){return i=!1,e.apply(this,t)}),t,n),a=function(...e){return i=!0,s.apply(this,e)};return a.pending=function(){return i},a.cancel=function(){return s.cancel.apply(s)},a.flush=function(){return s.flush.apply(s)},a}const qe=",",Ke="",Ye="=",Xe="{",Qe="(",Je=")",et=/\(([\s\S]*)\)/,tt=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,nt=/\s?=.*$/;const ot="";const rt=new class{constructor(){this._isDebugging=!1,this.level=0,this._logLevel=V.Off}configure(e,t,n=!1){this.provider=e,this._isDebugging=n,this.logLevel=t}enabled(e){return this.level>=it(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=it(this._logLevel),e===V.Off?(this.output?.dispose?.(),this.output=void 0):this.output=this.output??this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let n;"string"==typeof e?n=e:(n=t.shift(),null!=e&&(n=`${e.prefix} ${n??ot}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${n??ot}${this.toLoggableParams(!0,t)}`)}error(e,t,...n){if(this.level<1&&!this.isDebugging)return;let o;if(o=null==t||"string"==typeof t?t:`${t.prefix} ${n.shift()??ot}`,null==o){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(o=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${o??ot}${this.toLoggableParams(!1,n)}\n${String(e)}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let n;"string"==typeof e?n=e:(n=t.shift(),null!=e&&(n=`${e.prefix} ${n??ot}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${n??ot}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let n;"string"==typeof e?n=e:(n=t.shift(),null!=e&&(n=`${e.prefix} ${n??ot}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${n??ot}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);const n=this.provider.toLoggable?.(e);if(null!=n)return n;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return ot;const n=t.map((e=>this.toLoggable(e))).join(", ");return 0!==n.length?` — ${n}`:ot}};function it(e){switch(e){case V.Off:return 0;case V.Error:return 1;case V.Warn:return 2;case V.Info:return 3;case V.Debug:return 4;default:return 0}}var st,at;(at=st||(st={})).on=function(e,t,n,o){let r=!1;if("string"==typeof e){const i=function(t){const o=t?.target?.closest(e);null!=o&&n(t,o)};return document.addEventListener(t,i,o??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(t,i,o??!0))}}}const i=function(e){n(e,this)};return e.addEventListener(t,i,o??!1),{dispose:()=>{r||(r=!0,e.removeEventListener(t,i,o??!1))}}},at.insertTemplate=function(e,t,n){const o=document.getElementById(e);if(t.replaceChildren(o?.content.cloneNode(!0)),t.className=o.className,null!=n?.visible){const e=t.querySelectorAll("[data-visible]");for(const t of e){const e=t.dataset.visible;e&&(n.visible[e]?t.style.display="initial":t.style.display="none")}}if(null!=n?.bindings){const e=t.querySelectorAll("[data-bind]");for(const t of e){const e=t.dataset.bind;if(!e)continue;const o=n.bindings[e];null!=o&&(t.textContent=String(o))}}},at.resetSlot=function(e){e.replaceChildren(),e.className=""};const lt=class{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,n)=>{null==this.listeners&&(this.listeners=new pt);const o=this.listeners.push(null==t?e:[e,t]),r={dispose:()=>{r.dispose=lt._noop,this._disposed||o()}};return Array.isArray(n)&&n.push(r),r}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new pt);for(let t=this.listeners.iterator(),n=t.next();!n.done;n=t.next())this._deliveryQueue.push([n.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let ct=lt;ct._noop=function(){};const dt={done:!0,value:void 0},ut=class{constructor(e){this.element=e,this.next=ut.Undefined,this.prev=ut.Undefined}};let ht=ut;ht.Undefined=new ut(void 0);class pt{constructor(){this._first=ht.Undefined,this._last=ht.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===ht.Undefined}clear(){this._first=ht.Undefined,this._last=ht.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const n=new ht(e);if(this._first===ht.Undefined)this._first=n,this._last=n;else if(t){const e=this._last;this._last=n,n.prev=e,e.next=n}else{const e=this._first;this._first=n,n.next=e,e.prev=n}this._size+=1;let o=!1;return()=>{o||(o=!0,this._remove(n))}}shift(){if(this._first===ht.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===ht.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==ht.Undefined&&e.next!==ht.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===ht.Undefined&&e.next===ht.Undefined?(this._first=ht.Undefined,this._last=ht.Undefined):e.next===ht.Undefined?(this._last=this._last.prev,this._last.next=ht.Undefined):e.prev===ht.Undefined&&(this._first=this._first.next,this._first.prev=ht.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===ht.Undefined?dt:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==ht.Undefined;t=t.next)e.push(t.element);return e}}const ft=new ct,mt=ft.event;const gt=2**30;let bt=0;function vt(){return bt===gt?bt=1:bt++,`webview:${bt}`}class yt{constructor(e){this.appName=e,this.state=window.bootstrap,window.bootstrap=void 0,rt.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},V.Off),this.log("ctor()"),this._api=acquireVsCodeApi();const t=[];null!=this.onThemeUpdated&&t.push(mt(this.onThemeUpdated,this)),t.push(function(){const e=e=>{const t=document.body,n=window.getComputedStyle(t),o=t.classList.contains("vscode-light")||t.classList.contains("vscode-high-contrast-light"),r=t.classList.contains("vscode-high-contrast")||t.classList.contains("vscode-high-contrast-light"),i=t.style;i.setProperty("--font-family",n.getPropertyValue("--vscode-font-family").trim()),i.setProperty("--font-size",n.getPropertyValue("--vscode-font-size").trim()),i.setProperty("--font-weight",n.getPropertyValue("--vscode-font-weight").trim()),i.setProperty("--editor-font-family",n.getPropertyValue("--vscode-editor-font-family").trim()),i.setProperty("--editor-font-size",n.getPropertyValue("--vscode-editor-font-size").trim()),i.setProperty("--editor-font-weight",n.getPropertyValue("--vscode-editor-font-weight").trim());const s=n.getPropertyValue("--vscode-editor-background").trim();let a=n.getPropertyValue("--vscode-editor-foreground").trim();a||(a=n.getPropertyValue("--vscode-foreground").trim());let l=s;i.setProperty("--color-background",l),i.setProperty("--color-background--lighten-05",K(l,5)),i.setProperty("--color-background--darken-05",q(l,5)),i.setProperty("--color-background--lighten-075",K(l,7.5)),i.setProperty("--color-background--darken-075",q(l,7.5)),i.setProperty("--color-background--lighten-10",K(l,10)),i.setProperty("--color-background--darken-10",q(l,10)),i.setProperty("--color-background--lighten-15",K(l,15)),i.setProperty("--color-background--darken-15",q(l,15)),i.setProperty("--color-background--lighten-30",K(l,30)),i.setProperty("--color-background--darken-30",q(l,30)),i.setProperty("--color-background--lighten-50",K(l,50)),i.setProperty("--color-background--darken-50",q(l,50)),l=n.getPropertyValue("--vscode-button-background").trim(),i.setProperty("--color-button-background",l),i.setProperty("--color-button-background--darken-30",q(l,30)),i.setProperty("--color-highlight",l),i.setProperty("--color-highlight--75",Y(l,75)),i.setProperty("--color-highlight--50",Y(l,50)),i.setProperty("--color-highlight--25",Y(l,25)),l=n.getPropertyValue("--vscode-button-secondaryBackground").trim(),i.setProperty("--color-button-secondary-background",l),i.setProperty("--color-button-secondary-background--darken-30",q(l,30)),l=n.getPropertyValue("--vscode-button-foreground").trim(),i.setProperty("--color-button-foreground",l),i.setProperty("--color-foreground",a),i.setProperty("--color-foreground--85",Y(a,85)),i.setProperty("--color-foreground--75",Y(a,75)),i.setProperty("--color-foreground--65",Y(a,65)),i.setProperty("--color-foreground--50",Y(a,50)),l=n.getPropertyValue("--vscode-focusBorder").trim(),i.setProperty("--color-focus-border",l),l=n.getPropertyValue("--vscode-textLink-foreground").trim(),i.setProperty("--color-link-foreground",l),i.setProperty("--color-link-foreground--darken-20",q(l,20)),i.setProperty("--color-link-foreground--lighten-20",K(l,20)),l=n.getPropertyValue("--vscode-sideBar-background").trim(),i.setProperty("--color-view-background",l||s),l=n.getPropertyValue("--vscode-sideBar-foreground").trim(),i.setProperty("--color-view-foreground",l||a),i.setProperty("--color-view-header-foreground",n.getPropertyValue("--vscode-sideBarSectionHeader-foreground").trim()||l||a),l=n.getPropertyValue("--vscode-editorHoverWidget-background").trim(),i.setProperty("--color-hover-background",l),l=n.getPropertyValue("--vscode-editorHoverWidget-border").trim(),i.setProperty("--color-hover-border",l),l=n.getPropertyValue("--vscode-editorHoverWidget-foreground").trim(),i.setProperty("--color-hover-foreground",l),l=n.getPropertyValue("--vscode-editorHoverWidget-statusBarBackground").trim(),i.setProperty("--color-hover-statusBarBackground",l),l=n.getPropertyValue("--vscode-inputValidation-infoBackground").trim(),i.setProperty("--color-alert-infoHoverBackground",o?q(l,5):K(l,5)),i.setProperty("--color-alert-infoBackground",l),l=n.getPropertyValue("--vscode-inputValidation-warningBackground").trim(),i.setProperty("--color-alert-warningHoverBackground",o?q(l,5):K(l,5)),i.setProperty("--color-alert-warningBackground",l),l=n.getPropertyValue("--vscode-inputValidation-errorBackground").trim(),i.setProperty("--color-alert-errorHoverBackground",o?q(l,5):K(l,5)),i.setProperty("--color-alert-errorBackground",l),l=o?q(s,5):K(s,5),i.setProperty("--color-alert-neutralHoverBackground",o?q(l,5):K(l,5)),i.setProperty("--color-alert-neutralBackground",l),i.setProperty("--color-alert-infoBorder","var(--vscode-inputValidation-infoBorder)"),i.setProperty("--color-alert-warningBorder","var(--vscode-inputValidation-warningBorder)"),i.setProperty("--color-alert-errorBorder","var(--vscode-inputValidation-errorBorder)"),i.setProperty("--color-alert-neutralBorder","var(--vscode-input-foreground)"),i.setProperty("--color-alert-foreground","var(--vscode-input-foreground)"),ft.fire({colors:{background:s,foreground:a},computedStyle:n,isLightTheme:o,isHighContrastTheme:r,isInitializing:null==e})};e();const t=new MutationObserver(e);return t.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>t.disconnect()}}()),requestAnimationFrame((()=>{this.log("ctor(): initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(st.on(window,"message",this.onMessageReceived.bind(this))),this.sendCommand(c,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(st.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}bind(){this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=Ze((e=>{this.sendCommand(d,e)}),150);this.bindDisposables.push(st.on(document,"focusin",(t=>{const n=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===n||(this._focused=!0,this._inputFocused=n,e({focused:!0,inputFocused:n}))})),st.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){rt.log(e,...t)}getState(){return this._api.getState()}sendCommand(e,t){const n=vt();this.log(`sendCommand(${n}): name=${e.method}`),this.postMessage({id:n,method:e.method,params:t})}async sendCommandWithCompletion(e,t,n){const o=vt();this.log(`sendCommandWithCompletion(${o}): name=${e.method}`);const r=new Promise(((e,t)=>{let r;const i=[st.on(window,"message",(t=>{l(n,t.data,(n=>{t.data.completionId===o&&(i.forEach((e=>e.dispose())),queueMicrotask((()=>e(n))))}))})),{dispose:function(){null!=r&&(clearTimeout(r),r=void 0)}}];r=setTimeout((()=>{r=void 0,i.forEach((e=>e.dispose())),t(new Error(`Timed out waiting for completion of ${n.method}`))}),6e4)}));return this.postMessage({id:o,method:e.method,params:t,completionId:o}),r}setState(e){this.state=e,null!=e&&this._api.setState(e)}postMessage(e){this._api.postMessage(e)}}var wt=o(7507),xt=o.n(wt);const Ct=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===Ct.trustedTypes&&(Ct.trustedTypes={createPolicy:(e,t)=>t});const St={configurable:!1,enumerable:!1,writable:!1};void 0===Ct.FAST&&Reflect.defineProperty(Ct,"FAST",Object.assign({value:Object.create(null)},St));const kt=Ct.FAST;if(void 0===kt.getById){const e=Object.create(null);Reflect.defineProperty(kt,"getById",Object.assign({value(t,n){let o=e[t];return void 0===o&&(o=n?e[t]=n():null),o}},St))}const Tt=Object.freeze([]);function Rt(){const e=new WeakMap;return function(t){let n=e.get(t);if(void 0===n){let o=Reflect.getPrototypeOf(t);for(;void 0===n&&null!==o;)n=e.get(o),o=Reflect.getPrototypeOf(o);n=void 0===n?[]:n.slice(0),e.set(t,n)}return n}}const _t=Ct.FAST.getById(1,(()=>{const e=[],t=[];function n(){if(t.length)throw t.shift()}function o(e){try{e.call()}catch(e){t.push(e),setTimeout(n,0)}}function r(){let t=0;for(;t<e.length;)if(o(e[t]),t++,t>1024){for(let n=0,o=e.length-t;n<o;n++)e[n]=e[n+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&Ct.requestAnimationFrame(r),e.push(t)},process:r})})),Et=Ct.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let Ot=Et;const It=`fast-${Math.random().toString(36).substring(2,8)}`,Mt=`${It}{`,Pt=`}${It}`,zt=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(Ot!==Et)throw new Error("The HTML policy can only be set once.");Ot=e},createHTML:e=>Ot.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(It),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${It}:`,"")),createInterpolationPlaceholder:e=>`${Mt}${e}${Pt}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${It}:${e}--\x3e`,queueUpdate:_t.enqueue,processUpdates:_t.process,nextUpdate:()=>new Promise(_t.enqueue),setAttribute(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)},setBooleanAttribute(e,t,n){n?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class $t{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else{-1===t.indexOf(e)&&t.push(e)}}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const n=t.indexOf(e);-1!==n&&t.splice(n,1)}}notify(e){const t=this.spillover,n=this.source;if(void 0===t){const t=this.sub1,o=this.sub2;void 0!==t&&t.handleChange(n,e),void 0!==o&&o.handleChange(n,e)}else for(let o=0,r=t.length;o<r;++o)t[o].handleChange(n,e)}}class At{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const n=this.subscribers[e];void 0!==n&&n.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var n;if(t){let n=this.subscribers[t];void 0===n&&(this.subscribers[t]=n=new $t(this.source)),n.subscribe(e)}else this.sourceSubscribers=null!==(n=this.sourceSubscribers)&&void 0!==n?n:new $t(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var n;if(t){const n=this.subscribers[t];void 0!==n&&n.unsubscribe(e)}else null===(n=this.sourceSubscribers)||void 0===n||n.unsubscribe(e)}}const Dt=kt.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,n=zt.queueUpdate;let o,r=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function i(e){let n=e.$fastController||t.get(e);return void 0===n&&(Array.isArray(e)?n=r(e):t.set(e,n=new At(e))),n}const s=Rt();class a{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==o&&o.watch(e,this.name),e[this.field]}setValue(e,t){const n=this.field,o=e[n];if(o!==t){e[n]=t;const r=e[this.callback];"function"==typeof r&&r.call(e,o,t),i(e).notify(this.name)}}}class l extends $t{constructor(e,t,n=!1){super(e,t),this.binding=e,this.isVolatileBinding=n,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const n=o;o=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const r=this.binding(e,t);return o=n,r}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const n=this.last,r=i(e),s=null===n?this.first:{};if(s.propertySource=e,s.propertyName=t,s.notifier=r,r.subscribe(this,t),null!==n){if(!this.needsRefresh){let t;o=void 0,t=n.propertySource[n.propertyName],o=this,e===t&&(this.needsRefresh=!0)}n.next=s}this.last=s}handleChange(){this.needsQueue&&(this.needsQueue=!1,n(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){r=e},getNotifier:i,track(e,t){void 0!==o&&o.watch(e,t)},trackVolatile(){void 0!==o&&(o.needsRefresh=!0)},notify(e,t){i(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new a(t)),s(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:s,binding(e,t,n=this.isVolatileBinding(e)){return new l(e,t,n)},isVolatileBinding:t=>e.test(t.toString())})}));function Nt(e,t){Dt.defineProperty(e,t)}function Lt(e,t,n){return Object.assign({},n,{get:function(){return Dt.trackVolatile(),n.get.apply(this)}})}const Ht=kt.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class Bt{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return Ht.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){Ht.set(e)}}Dt.defineProperty(Bt.prototype,"index"),Dt.defineProperty(Bt.prototype,"length");const Ft=Object.seal(new Bt);class Gt{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function Wt(e){return e.map((e=>e instanceof Gt?Wt(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function jt(e){return e.map((e=>e instanceof Gt?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}Gt.create=(()=>{if(zt.supportsAdoptedStyleSheets){const e=new Map;return t=>new Ut(t,e)}return e=>new Zt(e)})();class Ut extends Gt{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=jt(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=Wt(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let n=t.get(e);return void 0===n&&(n=new CSSStyleSheet,n.replaceSync(e),t.set(e,n)),n}))}return this._styleSheets}addStylesTo(e){e.adoptedStyleSheets=[...e.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(e)}removeStylesFrom(e){const t=this.styleSheets;e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e))),super.removeStylesFrom(e)}}let Vt=0;class Zt extends Gt{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=jt(e),this.styleSheets=Wt(e),this.styleClass="fast-style-class-"+ ++Vt}addStylesTo(e){const t=this.styleSheets,n=this.styleClass;e=this.normalizeTarget(e);for(let o=0;o<t.length;o++){const r=document.createElement("style");r.innerHTML=t[o],r.className=n,e.append(r)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let n=0,o=t.length;n<o;++n)e.removeChild(t[n]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const qt=Object.freeze({locate:Rt()}),Kt={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},Yt={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class Xt{constructor(e,t,n=t.toLowerCase(),o="reflect",r){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=n,this.mode=o,this.converter=r,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===o&&void 0===r&&(this.converter=Kt)}setValue(e,t){const n=e[this.fieldName],o=this.converter;void 0!==o&&(t=o.fromView(t)),n!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](n,t),e.$fastController.notify(this.name))}getValue(e){return Dt.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,n=this.guards;n.has(e)||"fromView"===t||zt.queueUpdate((()=>{n.add(e);const o=e[this.fieldName];switch(t){case"reflect":const t=this.converter;zt.setAttribute(e,this.attribute,void 0!==t?t.toView(o):o);break;case"boolean":zt.setBooleanAttribute(e,this.attribute,o)}n.delete(e)}))}static collect(e,...t){const n=[];t.push(qt.locate(e));for(let o=0,r=t.length;o<r;++o){const r=t[o];if(void 0!==r)for(let t=0,o=r.length;t<o;++t){const o=r[t];"string"==typeof o?n.push(new Xt(e,o)):n.push(new Xt(e,o.property,o.attribute,o.mode,o.converter))}}return n}}function Qt(e,t){let n;function o(e,t){arguments.length>1&&(n.property=t),qt.locate(e.constructor).push(n)}return arguments.length>1?(n={},void o(e,t)):(n=void 0===e?{}:e,o)}const Jt={mode:"open"},en={},tn=kt.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class nn{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const n=Xt.collect(e,t.attributes),o=new Array(n.length),r={},i={};for(let e=0,t=n.length;e<t;++e){const t=n[e];o[e]=t.attribute,r[t.name]=t,i[t.attribute]=t}this.attributes=n,this.observedAttributes=o,this.propertyLookup=r,this.attributeLookup=i,this.shadowOptions=void 0===t.shadowOptions?Jt:null===t.shadowOptions?void 0:Object.assign(Object.assign({},Jt),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?en:Object.assign(Object.assign({},en),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?Gt.create(t.styles):t.styles instanceof Gt?t.styles:Gt.create([t.styles])}get isDefined(){return!!tn.getByType(this.type)}define(e=customElements){const t=this.type;if(tn.register(this)){const e=this.attributes,n=t.prototype;for(let t=0,o=e.length;t<o;++t)Dt.defineProperty(n,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}nn.forType=tn.getByType;function on(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}Object.create;Object.create;const rn=new WeakMap,sn={bubbles:!0,composed:!0,cancelable:!0};function an(e){return e.shadowRoot||rn.get(e)||null}class ln extends At{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const n=t.shadowOptions;if(void 0!==n){const t=e.attachShadow(n);"closed"===n.mode&&rn.set(e,t)}const o=Dt.getAccessors(e);if(o.length>0){const t=this.boundObservables=Object.create(null);for(let n=0,r=o.length;n<r;++n){const r=o[n].name,i=e[r];void 0!==i&&(delete e[r],t[r]=i)}}}get isConnected(){return Dt.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,Dt.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=an(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const n=e.behaviors;e.addStylesTo(t),null!==n&&this.addBehaviors(n)}}removeStyles(e){const t=an(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const n=e.behaviors;e.removeStylesFrom(t),null!==n&&this.removeBehaviors(n)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),n=e.length,o=[];for(let r=0;r<n;++r){const n=e[r];t.has(n)?t.set(n,t.get(n)+1):(t.set(n,1),o.push(n))}if(this._isConnected){const e=this.element;for(let t=0;t<o.length;++t)o[t].bind(e,Ft)}}removeBehaviors(e,t=!1){const n=this.behaviors;if(null===n)return;const o=e.length,r=[];for(let i=0;i<o;++i){const o=e[i];if(n.has(o)){const e=n.get(o)-1;0===e||t?n.delete(o)&&r.push(o):n.set(o,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<r.length;++t)r[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,Ft);const t=this.behaviors;if(null!==t)for(const[n]of t)n.bind(e,Ft);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[n]of t)n.unbind(e)}}onAttributeChangedCallback(e,t,n){const o=this.definition.attributeLookup[e];void 0!==o&&o.onAttributeChangedCallback(this.element,n)}emit(e,t,n){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},sn),n)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const n=Object.keys(t);for(let o=0,r=n.length;o<r;++o){const r=n[o];e[r]=t[r]}this.boundObservables=null}const n=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():n.template&&(this._template=n.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():n.styles&&(this._styles=n.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,n=an(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||zt.removeChildNodes(n),e&&(this.view=e.render(t,n,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const n=nn.forType(e.constructor);if(void 0===n)throw new Error("Missing FASTElement definition.");return e.$fastController=new ln(e,n)}}function cn(e){return class extends e{constructor(){super(),ln.forCustomElement(this)}$emit(e,t,n){return this.$fastController.emit(e,t,n)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,n){this.$fastController.onAttributeChangedCallback(e,t,n)}}}const dn=Object.assign(cn(HTMLElement),{from:e=>cn(e),define:(e,t)=>new nn(e,t).define().type});function un(e){return function(t){new nn(t,e).define()}}const hn=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(n){Reflect.defineMetadata(e,t,n)}},Reflect.defineMetadata=function(e,t,n){let o=hn.get(n);void 0===o&&hn.set(n,o=new Map),o.set(e,t)},Reflect.getOwnMetadata=function(e,t){const n=hn.get(t);if(void 0!==n)return n.get(e)});class pn{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,Hn(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:n,key:o}=this;return this.container=this.key=void 0,n.registerResolver(o,new _n(o,e,t))}}function fn(e){const t=e.slice(),n=Object.keys(e),o=n.length;let r;for(let i=0;i<o;++i)r=n[i],Zn(r)||(t[r]=e[r]);return t}const mn=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new _n(e,1,e),transient:e=>new _n(e,2,e)}),gn=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:mn.singleton})}),bn=new Map;function vn(e){return t=>Reflect.getOwnMetadata(e,t)}let yn=null;const wn=Object.freeze({createContainer:e=>new Nn(null,Object.assign({},gn.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:wn.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(An,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||wn.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new Nn(e,Object.assign({},gn.default,t,{parentLocator:wn.findParentContainer})):yn||(yn=new Nn(null,Object.assign({},gn.default,t,{parentLocator:()=>null}))),getDesignParamtypes:vn("design:paramtypes"),getAnnotationParamtypes:vn("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=bn.get(e);if(void 0===t){const n=e.inject;if(void 0===n){const n=wn.getDesignParamtypes(e),o=wn.getAnnotationParamtypes(e);if(void 0===n)if(void 0===o){const n=Object.getPrototypeOf(e);t="function"==typeof n&&n!==Function.prototype?fn(wn.getDependencies(n)):[]}else t=fn(o);else if(void 0===o)t=fn(n);else{t=fn(n);let e,r=o.length;for(let n=0;n<r;++n)e=o[n],void 0!==e&&(t[n]=e);const i=Object.keys(o);let s;r=i.length;for(let e=0;e<r;++e)s=i[e],Zn(s)||(t[s]=o[s])}}else t=fn(n);bn.set(e,t)}return t},defineProperty(e,t,n,o=!1){const r=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[r];if(void 0===e){const i=this instanceof HTMLElement?wn.findResponsibleContainer(this):wn.getOrCreateDOMContainer();if(e=i.get(n),this[r]=e,o&&this instanceof dn){const o=this.$fastController,i=()=>{wn.findResponsibleContainer(this).get(n)!==this[r]&&(this[r]=e,o.notify(t))};o.subscribe({handleChange:i},"isConnected")}}return e}})},createInterface(e,t){const n="function"==typeof e?e:t,o="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||Wn,r="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),i=function(e,t,n){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${i.friendlyName}'`);if(t)wn.defineProperty(e,t,i,r);else{wn.getOrCreateAnnotationParamTypes(e)[n]=i}};return i.$isInterface=!0,i.friendlyName=o??"(anonymous)",null!=n&&(i.register=function(e,t){return n(new pn(e,null!=t?t:i))}),i.toString=function(){return`InterfaceSymbol<${i.friendlyName}>`},i},inject:(...e)=>function(t,n,o){if("number"==typeof o){const n=wn.getOrCreateAnnotationParamTypes(t),r=e[0];void 0!==r&&(n[o]=r)}else if(n)wn.defineProperty(t,n,e[0]);else{const n=o?wn.getOrCreateAnnotationParamTypes(o.value):wn.getOrCreateAnnotationParamTypes(t);let r;for(let t=0;t<e.length;++t)r=e[t],void 0!==r&&(n[t]=r)}},transient:e=>(e.register=function(t){return Bn.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,t=Sn)=>(e.register=function(t){return Bn.singleton(e,e).register(t)},e.registerInRequestor=t.scoped,e)}),xn=wn.createInterface("Container");function Cn(e){return function(t){const n=function(e,t,o){wn.inject(n)(e,t,o)};return n.$isResolver=!0,n.resolve=function(n,o){return e(t,n,o)},n}}wn.inject;const Sn={scoped:!1};kn=(e,t,n,o)=>n.getAll(e,o);var kn;Cn(((e,t,n)=>()=>n.get(e))),Cn(((e,t,n)=>n.has(e,!0)?n.get(e):void 0));function Tn(e,t,n){wn.inject(Tn)(e,t,n)}Tn.$isResolver=!0,Tn.resolve=()=>{};Cn(((e,t,n)=>{const o=Rn(e,t),r=new _n(e,0,o);return n.registerResolver(e,r),o})),Cn(((e,t,n)=>Rn(e,t)));function Rn(e,t){return t.getFactory(e).construct(t)}class _n{constructor(e,t,n){this.key=e,this.strategy=t,this.state=n,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const n=e.getFactory(this.state);if(null===n)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return n.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,n,o;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(o=null===(n=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===n?void 0:n.call(t,e))&&void 0!==o?o:null;default:return null}}}function En(e){return this.get(e)}function On(e,t){return t(e)}class In{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let n;return n=void 0===t?new this.Type(...this.dependencies.map(En,e)):new this.Type(...this.dependencies.map(En,e),...t),null==this.transformers?n:this.transformers.reduce(On,n)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const Mn={$isResolver:!0,resolve:(e,t)=>t};function Pn(e){return"function"==typeof e.register}function zn(e){return function(e){return Pn(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const $n=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),An="__DI_LOCATE_PARENT__",Dn=new Map;class Nn{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(xn,Mn),e instanceof Node&&e.addEventListener(An,(e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,n,o,r,i;const s=this.context;for(let a=0,l=e.length;a<l;++a)if(t=e[a],jn(t))if(Pn(t))t.register(this,s);else if(void 0!==t.prototype)Bn.singleton(t,t).register(this);else for(n=Object.keys(t),r=0,i=n.length;r<i;++r)o=t[n[r]],jn(o)&&(Pn(o)?o.register(this,s):this.register(o));return--this.registerDepth,this}registerResolver(e,t){Fn(e);const n=this.resolvers,o=n.get(e);return null==o?n.set(e,t):o instanceof _n&&4===o.strategy?o.state.push(t):n.set(e,new _n(e,4,[o,t])),t}registerTransformer(e,t){const n=this.getResolver(e);if(null==n)return!1;if(n.getFactory){const e=n.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(Fn(e),void 0!==e.resolve)return e;let n,o=this;for(;null!=o;){if(n=o.resolvers.get(e),null!=n)return n;if(null==o.parent){const n=zn(e)?this:o;return t?this.jitRegister(e,n):null}o=o.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if(Fn(e),e.$isResolver)return e.resolve(this,this);let t,n=this;for(;null!=n;){if(t=n.resolvers.get(e),null!=t)return t.resolve(n,this);if(null==n.parent){const o=zn(e)?this:n;return t=this.jitRegister(e,o),t.resolve(n,this)}n=n.parent}throw new Error(`Unable to resolve key: ${e}`)}getAll(e,t=!1){Fn(e);const n=this;let o,r=n;if(t){let t=Tt;for(;null!=r;)o=r.resolvers.get(e),null!=o&&(t=t.concat(Gn(o,r,n))),r=r.parent;return t}for(;null!=r;){if(o=r.resolvers.get(e),null!=o)return Gn(o,r,n);if(r=r.parent,null==r)return Tt}return Tt}getFactory(e){let t=Dn.get(e);if(void 0===t){if(Un(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Dn.set(e,t=new In(e,wn.getDependencies(e)))}return t}registerFactory(e,t){Dn.set(e,t)}createChild(e){return new Nn(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if($n.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(Pn(e)){const n=e.register(t);if(!(n instanceof Object)||null==n.resolve){const n=t.resolvers.get(e);if(null!=n)return n;throw new Error("A valid resolver was not returned from the static register method")}return n}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const n=this.config.defaultResolver(e,t);return t.resolvers.set(e,n),n}}}const Ln=new WeakMap;function Hn(e){return function(t,n,o){if(Ln.has(o))return Ln.get(o);const r=e(t,n,o);return Ln.set(o,r),r}}const Bn=Object.freeze({instance:(e,t)=>new _n(e,0,t),singleton:(e,t)=>new _n(e,1,t),transient:(e,t)=>new _n(e,2,t),callback:(e,t)=>new _n(e,3,t),cachedCallback:(e,t)=>new _n(e,3,Hn(t)),aliasTo:(e,t)=>new _n(t,5,e)});function Fn(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Gn(e,t,n){if(e instanceof _n&&4===e.strategy){const o=e.state;let r=o.length;const i=new Array(r);for(;r--;)i[r]=o[r].resolve(t,n);return i}return[e.resolve(t,n)]}const Wn="(anonymous)";function jn(e){return"object"==typeof e&&null!==e||"function"==typeof e}const Un=function(){const e=new WeakMap;let t=!1,n="",o=0;return function(r){return t=e.get(r),void 0===t&&(n=r.toString(),o=n.length,t=o>=29&&o<=100&&125===n.charCodeAt(o-1)&&n.charCodeAt(o-2)<=32&&93===n.charCodeAt(o-3)&&101===n.charCodeAt(o-4)&&100===n.charCodeAt(o-5)&&111===n.charCodeAt(o-6)&&99===n.charCodeAt(o-7)&&32===n.charCodeAt(o-8)&&101===n.charCodeAt(o-9)&&118===n.charCodeAt(o-10)&&105===n.charCodeAt(o-11)&&116===n.charCodeAt(o-12)&&97===n.charCodeAt(o-13)&&110===n.charCodeAt(o-14)&&88===n.charCodeAt(o-15),e.set(r,t)),t}}(),Vn={};function Zn(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=Vn[e];if(void 0!==t)return t;const n=e.length;if(0===n)return Vn[e]=!1;let o=0;for(let t=0;t<n;++t)if(o=e.charCodeAt(t),0===t&&48===o&&n>1||o<48||o>57)return Vn[e]=!1;return Vn[e]=!0}default:return!1}}function qn(e){return`${e.toLowerCase()}:presentation`}const Kn=new Map,Yn=Object.freeze({define(e,t,n){const o=qn(e);void 0===Kn.get(o)?Kn.set(o,t):Kn.set(o,!1),n.register(Bn.instance(o,t))},forTag(e,t){const n=qn(e),o=Kn.get(n);if(!1===o){return wn.findResponsibleContainer(t).get(n)}return o||null}});class Xn{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?Gt.create(t):t instanceof Gt?t:Gt.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class Qn extends dn{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=Yn.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new eo(this===Qn?class extends Qn{}:this,e,t)}}function Jn(e,t,n){return"function"==typeof e?e(t,n):e}on([Nt],Qn.prototype,"template",void 0),on([Nt],Qn.prototype,"styles",void 0);class eo{constructor(e,t,n){this.type=e,this.elementDefinition=t,this.overrideDefinition=n,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const n=this.definition,o=this.overrideDefinition,r=`${n.prefix||t.elementPrefix}-${n.baseName}`;t.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new Xn(Jn(n.template,e,n),Jn(n.styles,e,n));e.definePresentation(t);let r=Jn(n.shadowOptions,e,n);e.shadowRootMode&&(r?o.shadowOptions||(r.mode=e.shadowRootMode):null!==r&&(r={mode:e.shadowRootMode})),e.defineElement({elementOptions:Jn(n.elementOptions,e,n),shadowOptions:r,attributes:Jn(n.attributes,e,n)})}})}}const to=new Set(["children","localName","ref","style","className"]),no=Object.freeze(Object.create(null)),oo="_default",ro=new Map;function io(e){return e.events||(e.events={})}function so(e,t,n){return!to.has(n)}function ao(e,t){let n=[];return{wrap:function(o,r={}){var i,s;o instanceof eo&&(t?t.register(o):n.push(o),o=o.type);const a=ro.get(o);if(a){const e=a.get(null!==(i=r.name)&&void 0!==i?i:oo);if(e)return e}class l extends e.Component{constructor(){super(...arguments),this._element=null}_updateElement(e){const t=this._element;if(null===t)return;const n=this.props,o=e||no,i=io(r);for(const e in this._elementProps){const r=n[e],s=i[e];if(void 0===s)t[e]=r;else{const n=o[e];if(r===n)continue;void 0!==n&&t.removeEventListener(s,n),void 0!==r&&t.addEventListener(s,r)}}}componentDidMount(){this._updateElement()}componentDidUpdate(e){this._updateElement(e)}render(){const t=this.props.__forwardedRef;void 0!==this._ref&&this._userRef===t||(this._ref=e=>{null===this._element&&(this._element=e),null!==t&&function(e,t){"function"==typeof e?e(t):e.current=t}(t,e),this._userRef=t});const n={ref:this._ref},i=this._elementProps={},s=function(e,t){if(!t.keys)if(t.properties)t.keys=new Set(t.properties.concat(Object.keys(io(t))));else{const n=new Set(Object.keys(io(t))),o=Dt.getAccessors(e.prototype);if(o.length>0)for(const e of o)so(0,0,e.name)&&n.add(e.name);else for(const t in e.prototype)!(t in HTMLElement.prototype)&&so(0,0,t)&&n.add(t);t.keys=n}return t.keys}(o,r),a=this.props;for(const e in a){const t=a[e];s.has(e)?i[e]=t:n["className"===e?"class":e]=t}return e.createElement(function(e,t){if(!t.name){const n=nn.forType(e);if(!n)throw new Error("React wrappers must wrap a FASTElement or be configured with a name.");t.name=n.name}return t.name}(o,r),n)}}const c=e.forwardRef(((t,n)=>e.createElement(l,Object.assign(Object.assign({},t),{__forwardedRef:n}),null==t?void 0:t.children)));return ro.has(o)||ro.set(o,new Map),ro.get(o).set(null!==(s=r.name)&&void 0!==s?s:oo,c),c},registry:{register(e,...t){n.forEach((n=>n.register(e,...t))),n=[]}}}}class lo extends Qn{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}}on([Qt({attribute:"fill"})],lo.prototype,"fill",void 0),on([Qt({attribute:"color"})],lo.prototype,"color",void 0),on([Qt({mode:"boolean"})],lo.prototype,"circular",void 0);class co{constructor(){this.targetIndex=0}}class uo extends co{constructor(){super(...arguments),this.createPlaceholder=zt.createInterpolationPlaceholder}}class ho extends co{constructor(e,t,n){super(),this.name=e,this.behavior=t,this.options=n}createPlaceholder(e){return zt.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function po(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=Dt.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function fo(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function mo(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function go(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function bo(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function vo(e){zt.setAttribute(this.target,this.targetName,e)}function yo(e){zt.setBooleanAttribute(this.target,this.targetName,e)}function wo(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function xo(e){this.target[this.targetName]=e}function Co(e){const t=this.classVersions||Object.create(null),n=this.target;let o=this.version||0;if(null!=e&&e.length){const r=e.split(/\s+/);for(let e=0,i=r.length;e<i;++e){const i=r[e];""!==i&&(t[i]=o,n.classList.add(i))}}if(this.classVersions=t,this.version=o+1,0!==o){o-=1;for(const e in t)t[e]===o&&n.classList.remove(e)}}class So extends uo{constructor(e){super(),this.binding=e,this.bind=po,this.unbind=mo,this.updateTarget=vo,this.isBindingVolatile=Dt.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=xo,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,n)=>zt.createHTML(e(t,n))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=yo;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=fo,this.unbind=bo;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=Co)}}targetAtContent(){this.updateTarget=wo,this.unbind=go}createBehavior(e){return new ko(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class ko{constructor(e,t,n,o,r,i,s){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=n,this.bind=o,this.unbind=r,this.updateTarget=i,this.targetName=s}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){Bt.setEvent(e);const t=this.binding(this.source,this.context);Bt.setEvent(null),!0!==t&&e.preventDefault()}}let To=null;class Ro{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){To=this}static borrow(e){const t=To||new Ro;return t.directives=e,t.reset(),To=null,t}}function _o(e){if(1===e.length)return e[0];let t;const n=e.length,o=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),r=new So(((e,t)=>{let r="";for(let i=0;i<n;++i)r+=o[i](e,t);return r}));return r.targetName=t,r}const Eo=Pt.length;function Oo(e,t){const n=t.split(Mt);if(1===n.length)return null;const o=[];for(let t=0,r=n.length;t<r;++t){const r=n[t],i=r.indexOf(Pt);let s;if(-1===i)s=r;else{const t=parseInt(r.substring(0,i));o.push(e.directives[t]),s=r.substring(i+Eo)}""!==s&&o.push(s)}return o}function Io(e,t,n=!1){const o=t.attributes;for(let r=0,i=o.length;r<i;++r){const s=o[r],a=s.value,l=Oo(e,a);let c=null;null===l?n&&(c=new So((()=>a)),c.targetName=s.name):c=_o(l),null!==c&&(t.removeAttributeNode(s),r--,i--,e.addFactory(c))}}function Mo(e,t,n){const o=Oo(e,t.textContent);if(null!==o){let r=t;for(let i=0,s=o.length;i<s;++i){const s=o[i],a=0===i?t:r.parentNode.insertBefore(document.createTextNode(""),r.nextSibling);"string"==typeof s?a.textContent=s:(a.textContent=" ",e.captureContentBinding(s)),r=a,e.targetIndex++,a!==t&&n.nextNode()}e.targetIndex--}}const Po=document.createRange();class zo{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const n=e.parentNode;let o,r=this.firstChild;for(;r!==t;)o=r.nextSibling,n.insertBefore(r,e),r=o;n.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let n,o=this.firstChild;for(;o!==t;)n=o.nextSibling,e.appendChild(o),o=n;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let n,o=this.firstChild;for(;o!==t;)n=o.nextSibling,e.removeChild(o),o=n;e.removeChild(t);const r=this.behaviors,i=this.source;for(let e=0,t=r.length;e<t;++e)r[e].unbind(i)}bind(e,t){const n=this.behaviors;if(this.source!==e)if(null!==this.source){const o=this.source;this.source=e,this.context=t;for(let r=0,i=n.length;r<i;++r){const i=n[r];i.unbind(o),i.bind(e,t)}}else{this.source=e,this.context=t;for(let o=0,r=n.length;o<r;++o)n[o].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let n=0,o=e.length;n<o;++n)e[n].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){Po.setStartBefore(e[0].firstChild),Po.setEndAfter(e[e.length-1].lastChild),Po.deleteContents();for(let t=0,n=e.length;t<n;++t){const n=e[t],o=n.behaviors,r=n.source;for(let e=0,t=o.length;e<t;++e)o[e].unbind(r)}}}}class $o{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=zt.createHTML(t);const n=e.content.firstElementChild;null!==n&&"TEMPLATE"===n.tagName&&(e=n)}else e=t;const n=function(e,t){const n=e.content;document.adoptNode(n);const o=Ro.borrow(t);Io(o,e,!0);const r=o.behaviorFactories;o.reset();const i=zt.createTemplateWalker(n);let s;for(;s=i.nextNode();)switch(o.targetIndex++,s.nodeType){case 1:Io(o,s);break;case 3:Mo(o,s,i);break;case 8:zt.isMarker(s)&&o.addFactory(t[zt.extractDirectiveIndexFromMarker(s)])}let a=0;(zt.isMarker(n.firstChild)||1===n.childNodes.length&&t.length)&&(n.insertBefore(document.createComment(""),n.firstChild),a=-1);const l=o.behaviorFactories;return o.release(),{fragment:n,viewBehaviorFactories:l,hostBehaviorFactories:r,targetOffset:a}}(e,this.directives);this.fragment=n.fragment,this.viewBehaviorFactories=n.viewBehaviorFactories,this.hostBehaviorFactories=n.hostBehaviorFactories,this.targetOffset=n.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),n=this.viewBehaviorFactories,o=new Array(this.behaviorCount),r=zt.createTemplateWalker(t);let i=0,s=this.targetOffset,a=r.nextNode();for(let e=n.length;i<e;++i){const e=n[i],t=e.targetIndex;for(;null!==a;){if(s===t){o[i]=e.createBehavior(a);break}a=r.nextNode(),s++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let n=0,r=t.length;n<r;++n,++i)o[i]=t[n].createBehavior(e)}return new zo(t,o)}render(e,t,n){"string"==typeof t&&(t=document.getElementById(t)),void 0===n&&(n=t);const o=this.create(n);return o.bind(e,Ft),o.appendTo(t),o}}const Ao=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Do(e,...t){const n=[];let o="";for(let r=0,i=e.length-1;r<i;++r){const i=e[r];let s=t[r];if(o+=i,s instanceof $o){const e=s;s=()=>e}if("function"==typeof s&&(s=new So(s)),s instanceof uo){const e=Ao.exec(i);null!==e&&(s.targetName=e[2])}s instanceof co?(o+=s.createPlaceholder(n.length),n.push(s)):o+=s}return o+=e[e.length-1],new $o(o,n)}const No=(e,t)=>Do`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;class Lo{createCSS(){return""}createBehavior(){}}function Ho(e,t){const n=[];let o="";const r=[];for(let i=0,s=e.length-1;i<s;++i){o+=e[i];let s=t[i];if(s instanceof Lo){const e=s.createBehavior();s=s.createCSS(),e&&r.push(e)}s instanceof Gt||s instanceof CSSStyleSheet?(""!==o.trim()&&(n.push(o),o=""),n.push(s)):o+=s}return o+=e[e.length-1],""!==o.trim()&&n.push(o),{styles:n,behaviors:r}}function Bo(e,...t){const{styles:n,behaviors:o}=Ho(e,t),r=Gt.create(n);return o.length&&r.withBehaviors(...o),r}const Fo=":host([hidden]){display:none}";function Go(e){return`${Fo}:host{display:${e}}`}function Wo(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}const jo=document.createElement("div");class Uo{setProperty(e,t){zt.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){zt.queueUpdate((()=>this.target.removeProperty(e)))}}class Vo extends Uo{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class Zo extends Uo{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class qo{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),Dt.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),zt.queueUpdate((()=>{null!==this.target&&this.target.setProperty(e,t)}))}removeProperty(e){this.store.delete(e),zt.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(e)}))}handleChange(e,t){const{sheet:n}=this.style;if(n){const e=n.insertRule(":host{}",n.cssRules.length);this.target=n.cssRules[e].style}else this.target=null}}on([Nt],qo.prototype,"target",void 0);class Ko{constructor(e){this.target=e.style}setProperty(e,t){zt.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){zt.queueUpdate((()=>this.target.removeProperty(e)))}}class Yo{setProperty(e,t){Yo.properties[e]=t;for(const n of Yo.roots.values())Jo.getOrCreate(Yo.normalizeRoot(n)).setProperty(e,t)}removeProperty(e){delete Yo.properties[e];for(const t of Yo.roots.values())Jo.getOrCreate(Yo.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=Yo;if(!t.has(e)){t.add(e);const n=Jo.getOrCreate(this.normalizeRoot(e));for(const e in Yo.properties)n.setProperty(e,Yo.properties[e])}}static unregisterRoot(e){const{roots:t}=Yo;if(t.has(e)){t.delete(e);const n=Jo.getOrCreate(Yo.normalizeRoot(e));for(const e in Yo.properties)n.removeProperty(e)}}static normalizeRoot(e){return e===jo?document:e}}Yo.roots=new Set,Yo.properties={};const Xo=new WeakMap,Qo=zt.supportsAdoptedStyleSheets?class extends Uo{constructor(e){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(Gt.create([t]))}}:qo,Jo=Object.freeze({getOrCreate(e){if(Xo.has(e))return Xo.get(e);let t;return e===jo?t=new Yo:e instanceof Document?t=zt.supportsAdoptedStyleSheets?new Vo:new Zo:t=e instanceof dn?new Qo(e):new Ko(e),Xo.set(e,t),t}});class er extends Lo{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=er.uniqueId(),er.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new er({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return er.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=ir.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof er&&(t=this.alias(t)),ir.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),ir.existsFor(e)&&ir.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(jo,e),this}subscribe(e,t){const n=this.getOrCreateSubscriberSet(t);t&&!ir.existsFor(t)&&ir.getOrCreate(t),n.has(e)||n.add(e)}unsubscribe(e,t){const n=this.subscribers.get(t||this);n&&n.has(e)&&n.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach((e=>e.handleChange(t))),this.subscribers.has(e)&&this.subscribers.get(e).forEach((e=>e.handleChange(t)))}alias(e){return t=>e.getValueFor(t)}}er.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),er.tokensById=new Map;class tr{constructor(e,t,n){this.source=e,this.token=t,this.node=n,this.dependencies=new Set,this.observer=Dt.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,Ft))}}class nr{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),Dt.getNotifier(this).notify(e.id))}get(e){return Dt.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const or=new WeakMap,rr=new WeakMap;class ir{constructor(e){this.target=e,this.store=new nr,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const n=er.getTokenById(t);if(n&&(n.notify(this.target),er.isCSSDesignToken(n))){const t=this.parent,o=this.isReflecting(n);if(t){const r=t.get(n),i=e.get(n);r===i||o?r===i&&o&&this.stopReflectToCSS(n):this.reflectToCSS(n)}else o||this.reflectToCSS(n)}}},or.set(e,this),Dt.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof dn?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return or.get(e)||new ir(e)}static existsFor(e){return or.has(e)}static findParent(e){if(jo!==e.target){let t=Wo(e.target);for(;null!==t;){if(or.has(t))return or.get(t);t=Wo(t)}return ir.getOrCreate(jo)}return null}static findClosestAssignedNode(e,t){let n=t;do{if(n.has(e))return n;n=n.parent?n.parent:n.target!==jo?ir.getOrCreate(jo):null}while(null!==n);return null}get parent(){return rr.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const n=this.getRaw(e);return void 0!==n?(this.hydrate(e,n),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=ir.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){er.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),er.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=ir.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){if(this.parent){rr.get(this).removeChild(this)}}appendChild(e){e.parent&&rr.get(e).removeChild(e);const t=this.children.filter((t=>e.contains(t)));rr.set(e,this),this.children.push(e),t.forEach((t=>e.appendChild(t))),Dt.getNotifier(this.store).subscribe(e);for(const[t,n]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):n)}removeChild(e){const t=this.children.indexOf(e);return-1!==t&&this.children.splice(t,1),Dt.getNotifier(this.store).unsubscribe(e),e.parent===this&&rr.delete(e)}contains(e){return function(e,t){let n=t;for(;null!==n;){if(n===e)return!0;n=Wo(n)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),ir.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),ir.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const n=er.getTokenById(t);n&&this.hydrate(n,this.getRaw(n))}hydrate(e,t){if(!this.has(e)){const n=this.bindingObservers.get(e);er.isDerivedDesignTokenValue(t)?n?n.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(n&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const n=new tr(t,e,this);return this.bindingObservers.set(e,n),n}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}ir.cssCustomPropertyReflector=new class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:n}=e;this.add(t,n)}add(e,t){Jo.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(ir.getOrCreate(t).get(e)))}remove(e,t){Jo.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},on([Nt],ir.prototype,"children",void 0);const sr=Object.freeze({create:function(e){return er.from(e)},notifyConnection:e=>!(!e.isConnected||!ir.existsFor(e))&&(ir.getOrCreate(e).bind(),!0),notifyDisconnection:e=>!(e.isConnected||!ir.existsFor(e))&&(ir.getOrCreate(e).unbind(),!0),registerRoot(e=jo){Yo.registerRoot(e)},unregisterRoot(e=jo){Yo.unregisterRoot(e)}});function ar(e){const t=getComputedStyle(document.body),n=document.querySelector("body");if(n){const o=n.getAttribute("data-vscode-theme-kind");for(const[r,i]of e){let e=t.getPropertyValue(r).toString();if("vscode-high-contrast"===o)0===e.length&&i.name.includes("background")&&(e="transparent"),"button-icon-hover-background"===i.name&&(e="transparent");else if("vscode-high-contrast-light"===o){if(0===e.length&&i.name.includes("background"))switch(i.name){case"button-primary-hover-background":e="#0F4A85";break;case"button-secondary-hover-background":case"button-icon-hover-background":e="transparent"}}else"contrast-active-border"===i.name&&(e="transparent");i.setValueFor(n,e)}}}const lr=new Map;let cr=!1;function dr(e,t){const n=sr.create(e);if(t){if(t.includes("--fake-vscode-token")){t=`${t}-${"id"+Math.random().toString(16).slice(2)}`}lr.set(t,n)}return cr||(!function(e){window.addEventListener("load",(()=>{new MutationObserver((()=>{ar(e)})).observe(document.body,{attributes:!0,attributeFilter:["class"]}),ar(e)}))}(lr),cr=!0),n}const ur=dr("background","--vscode-editor-background").withDefault("#1e1e1e"),hr=dr("border-width").withDefault(1),pr=dr("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518"),fr=(dr("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df"),dr("corner-radius").withDefault(0)),mr=dr("design-unit").withDefault(4),gr=dr("disabled-opacity").withDefault(.4),br=dr("focus-border","--vscode-focusBorder").withDefault("#007fd4"),vr=dr("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"),yr=(dr("font-weight","--vscode-font-weight").withDefault("400"),dr("foreground","--vscode-foreground").withDefault("#cccccc")),wr=dr("input-height").withDefault("26"),xr=dr("input-min-width").withDefault("100px"),Cr=dr("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),Sr=dr("type-ramp-base-line-height").withDefault("normal"),kr=dr("type-ramp-minus1-font-size").withDefault("11px"),Tr=dr("type-ramp-minus1-line-height").withDefault("16px"),Rr=(dr("type-ramp-minus2-font-size").withDefault("9px"),dr("type-ramp-minus2-line-height").withDefault("16px"),dr("type-ramp-plus1-font-size").withDefault("16px"),dr("type-ramp-plus1-line-height").withDefault("24px"),dr("scrollbarWidth").withDefault("10px")),_r=dr("scrollbarHeight").withDefault("10px"),Er=dr("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),Or=dr("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),Ir=dr("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),Mr=dr("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),Pr=dr("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),zr=dr("button-border","--vscode-button-border").withDefault("transparent"),$r=dr("button-icon-background").withDefault("transparent"),Ar=dr("button-icon-corner-radius").withDefault("5px"),Dr=dr("button-icon-outline-offset").withDefault(0),Nr=dr("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),Lr=dr("button-icon-padding").withDefault("3px"),Hr=dr("button-primary-background","--vscode-button-background").withDefault("#0e639c"),Br=dr("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),Fr=dr("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),Gr=dr("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),Wr=dr("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),jr=dr("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),Ur=dr("button-padding-horizontal").withDefault("11px"),Vr=dr("button-padding-vertical").withDefault("4px"),Zr=dr("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),qr=dr("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),Kr=dr("checkbox-corner-radius").withDefault(3),Yr=(dr("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0"),dr("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771")),Xr=dr("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),Qr=dr("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),Jr=dr("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),ei=dr("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),ti=dr("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c"),ni=(dr("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0"),dr("dropdown-list-max-height").withDefault("200px")),oi=dr("input-background","--vscode-input-background").withDefault("#3c3c3c"),ri=dr("input-foreground","--vscode-input-foreground").withDefault("#cccccc"),ii=(dr("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc"),dr("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff")),si=dr("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),ai=dr("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),li=dr("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),ci=dr("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),di=dr("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799"),ui=(dr("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e"),dr("panel-view-border","--vscode-panel-border").withDefault("#80808059"),dr("tag-corner-radius").withDefault("2px"));const hi=class extends lo{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}}.compose({baseName:"badge",template:No,styles:(e,t)=>Bo`
	${Go("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${vr};
		font-size: ${kr};
		line-height: ${Tr};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${Mr};
		border: calc(${hr} * 1px) solid ${zr};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${Pr};
		display: flex;
		height: calc(${mr} * 4px);
		justify-content: center;
		min-width: calc(${mr} * 4px + 2px);
		min-height: calc(${mr} * 4px + 2px);
		padding: 3px 6px;
	}
`});class pi{}on([Qt({attribute:"aria-atomic"})],pi.prototype,"ariaAtomic",void 0),on([Qt({attribute:"aria-busy"})],pi.prototype,"ariaBusy",void 0),on([Qt({attribute:"aria-controls"})],pi.prototype,"ariaControls",void 0),on([Qt({attribute:"aria-current"})],pi.prototype,"ariaCurrent",void 0),on([Qt({attribute:"aria-describedby"})],pi.prototype,"ariaDescribedby",void 0),on([Qt({attribute:"aria-details"})],pi.prototype,"ariaDetails",void 0),on([Qt({attribute:"aria-disabled"})],pi.prototype,"ariaDisabled",void 0),on([Qt({attribute:"aria-errormessage"})],pi.prototype,"ariaErrormessage",void 0),on([Qt({attribute:"aria-flowto"})],pi.prototype,"ariaFlowto",void 0),on([Qt({attribute:"aria-haspopup"})],pi.prototype,"ariaHaspopup",void 0),on([Qt({attribute:"aria-hidden"})],pi.prototype,"ariaHidden",void 0),on([Qt({attribute:"aria-invalid"})],pi.prototype,"ariaInvalid",void 0),on([Qt({attribute:"aria-keyshortcuts"})],pi.prototype,"ariaKeyshortcuts",void 0),on([Qt({attribute:"aria-label"})],pi.prototype,"ariaLabel",void 0),on([Qt({attribute:"aria-labelledby"})],pi.prototype,"ariaLabelledby",void 0),on([Qt({attribute:"aria-live"})],pi.prototype,"ariaLive",void 0),on([Qt({attribute:"aria-owns"})],pi.prototype,"ariaOwns",void 0),on([Qt({attribute:"aria-relevant"})],pi.prototype,"ariaRelevant",void 0),on([Qt({attribute:"aria-roledescription"})],pi.prototype,"ariaRoledescription",void 0);class fi{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function mi(e){return new ho("fast-ref",fi,e)}class gi{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const bi=(e,t)=>Do`
    <span
        part="end"
        ${mi("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${mi("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,vi=(e,t)=>Do`
    <span
        part="start"
        ${mi("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${mi("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;Do`
    <span part="end" ${mi("endContainer")}>
        <slot
            name="end"
            ${mi("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,Do`
    <span part="start" ${mi("startContainer")}>
        <slot
            name="start"
            ${mi("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`;function yi(e,...t){const n=qt.locate(e);t.forEach((t=>{Object.getOwnPropertyNames(t.prototype).forEach((n=>{"constructor"!==n&&Object.defineProperty(e.prototype,n,Object.getOwnPropertyDescriptor(t.prototype,n))}));qt.locate(t).forEach((e=>n.push(e)))}))}var wi;!function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(wi||(wi={}));const xi="ArrowDown",Ci="ArrowLeft",Si="ArrowRight",ki="ArrowUp",Ti="Enter",Ri="Escape",_i="Home",Ei="End",Oi=" ",Ii="Tab",Mi={ArrowDown:xi,ArrowLeft:Ci,ArrowRight:Si,ArrowUp:ki},Pi="form-associated-proxy",zi="ElementInternals",$i=zi in window&&"setFormValue"in window[zi].prototype,Ai=new WeakMap;function Di(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return $i}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=e?t.concat(Array.from(e)):t;return Object.freeze(n)}return Tt}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),zt.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),zt.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!$i)return null;let e=Ai.get(this);return e||(e=this.attachInternals(),Ai.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,n){this.elementInternals?this.elementInternals.setValidity(e,t,n):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Pi),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Pi)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===Ti)if(this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return Qt({mode:"boolean"})(t.prototype,"disabled"),Qt({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),Qt({attribute:"current-value"})(t.prototype,"currentValue"),Qt(t.prototype,"name"),Qt({mode:"boolean"})(t.prototype,"required"),Nt(t.prototype,"value"),t}function Ni(e){class t extends(Di(e)){}class n extends t{constructor(...e){super(e),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==e&&this.$emit("change"),this.validate()}currentCheckedChanged(e,t){this.checked=this.currentChecked}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return Qt({attribute:"checked",mode:"boolean"})(n.prototype,"checkedAttribute"),Qt({attribute:"current-checked",converter:Kt})(n.prototype,"currentChecked"),Nt(n.prototype,"defaultChecked"),Nt(n.prototype,"checked"),n}class Li extends Qn{}class Hi extends(Di(Li)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Bi extends Hi{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.removeEventListener("click",this.handleClick)}))}}on([Qt({mode:"boolean"})],Bi.prototype,"autofocus",void 0),on([Qt({attribute:"form"})],Bi.prototype,"formId",void 0),on([Qt],Bi.prototype,"formaction",void 0),on([Qt],Bi.prototype,"formenctype",void 0),on([Qt],Bi.prototype,"formmethod",void 0),on([Qt({mode:"boolean"})],Bi.prototype,"formnovalidate",void 0),on([Qt],Bi.prototype,"formtarget",void 0),on([Qt],Bi.prototype,"type",void 0),on([Nt],Bi.prototype,"defaultSlottedContent",void 0);class Fi{}function Gi(e){return e?function(t,n,o){return 1===t.nodeType&&t.matches(e)}:function(e,t,n){return 1===e.nodeType}}on([Qt({attribute:"aria-expanded"})],Fi.prototype,"ariaExpanded",void 0),on([Qt({attribute:"aria-pressed"})],Fi.prototype,"ariaPressed",void 0),yi(Fi,pi),yi(Bi,gi,Fi);class Wi{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=Dt.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Tt),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class ji extends Wi{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Ui(e){return"string"==typeof e&&(e={property:e}),new ho("fast-slotted",ji,e)}function Vi(...e){return e.every((e=>e instanceof HTMLElement))}let Zi;const qi=function(){if("boolean"==typeof Zi)return Zi;if("undefined"==typeof window||!window.document||!window.document.createElement)return Zi=!1,Zi;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),Zi=!0}catch(e){Zi=!1}finally{document.head.removeChild(e)}return Zi}()?"focus-visible":"focus",Ki="not-allowed",Yi=Bo`
	${Go("inline-flex")} :host {
		outline: none;
		font-family: ${vr};
		font-size: ${Cr};
		line-height: ${Sr};
		color: ${Br};
		background: ${Hr};
		border-radius: 2px;
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${Vr} ${Ur};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${hr} * 1px) solid ${zr};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${Fr};
	}
	:host(:active) {
		background: ${Hr};
	}
	.control:${qi} {
		outline: calc(${hr} * 1px) solid ${br};
		outline-offset: calc(${hr} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${gr};
		background: ${Hr};
		cursor: ${Ki};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${mr} * 4px);
		height: calc(${mr} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,Xi=Bo`
	:host([appearance='primary']) {
		background: ${Hr};
		color: ${Br};
	}
	:host([appearance='primary']:hover) {
		background: ${Fr};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${Hr};
	}
	:host([appearance='primary']) .control:${qi} {
		outline: calc(${hr} * 1px) solid ${br};
		outline-offset: calc(${hr} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${Hr};
	}
`,Qi=Bo`
	:host([appearance='secondary']) {
		background: ${Gr};
		color: ${Wr};
	}
	:host([appearance='secondary']:hover) {
		background: ${jr};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${Gr};
	}
	:host([appearance='secondary']) .control:${qi} {
		outline: calc(${hr} * 1px) solid ${br};
		outline-offset: calc(${hr} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${Gr};
	}
`,Ji=Bo`
	:host([appearance='icon']) {
		background: ${$r};
		border-radius: ${Ar};
		color: ${yr};
	}
	:host([appearance='icon']:hover) {
		background: ${Nr};
		outline: 1px dotted ${pr};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${Lr};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${Nr};
	}
	:host([appearance='icon']) .control:${qi} {
		outline: calc(${hr} * 1px) solid ${br};
		outline-offset: ${Dr};
	}
	:host([appearance='icon'][disabled]) {
		background: ${$r};
	}
`;class es extends Bi{connectedCallback(){if(super.connectedCallback(),!this.appearance){const e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,n){if("appearance"===e&&"icon"===n){this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")}"aria-label"===e&&(this.ariaLabel=n),"disabled"===e&&(this.disabled=null!==n)}}on([Qt],es.prototype,"appearance",void 0);const ts=es.compose({baseName:"button",template:(e,t)=>Do`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${mi("control")}
    >
        ${vi(0,t)}
        <span class="content" part="content">
            <slot ${Ui("defaultSlottedContent")}></slot>
        </span>
        ${bi(0,t)}
    </button>
`,styles:(e,t)=>Bo`
	${Yi}
	${Xi}
	${Qi}
	${Ji}
`,shadowOptions:{delegatesFocus:!0}});class ns extends Qn{}class os extends(Ni(ns)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class rs extends os{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly&&e.key===Oi)this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked},this.clickHandler=e=>{this.disabled||this.readOnly||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}on([Qt({attribute:"readonly",mode:"boolean"})],rs.prototype,"readOnly",void 0),on([Nt],rs.prototype,"defaultSlottedNodes",void 0),on([Nt],rs.prototype,"indeterminate",void 0);const is=class extends rs{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}}.compose({baseName:"checkbox",template:(e,t)=>Do`
    <template
        role="checkbox"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        class="${e=>e.readOnly?"readonly":""} ${e=>e.checked?"checked":""} ${e=>e.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${t.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ui("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>Bo`
	${Go("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${mr} * 1px) 0;
		user-select: none;
		font-size: ${Cr};
		line-height: ${Sr};
	}
	.control {
		position: relative;
		width: calc(${mr} * 4px + 2px);
		height: calc(${mr} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${Kr} * 1px);
		border: calc(${hr} * 1px) solid ${qr};
		background: ${Zr};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${vr};
		color: ${yr};
		padding-inline-start: calc(${mr} * 2px + 2px);
		margin-inline-end: calc(${mr} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${yr};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${yr};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${Zr};
		border-color: ${qr};
	}
	:host(:enabled) .control:active {
		background: ${Zr};
		border-color: ${br};
	}
	:host(:${qi}) .control {
		border: calc(${hr} * 1px) solid ${br};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${Ki};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${gr};
	}
`,checkedIndicator:'\n\t\t<svg \n\t\t\tpart="checked-indicator"\n\t\t\tclass="checked-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"\n\t\t\t/>\n\t\t</svg>\n\t',indeterminateIndicator:'\n\t\t<div part="indeterminate-indicator" class="indeterminate-indicator"></div>\n\t'});function ss(e,t,n){return{index:e,removed:t,addedCount:n}}const as=0,ls=1,cs=2,ds=3;function us(e,t,n,o,r,i){let s=0,a=0;const l=Math.min(n-t,i-r);if(0===t&&0===r&&(s=function(e,t,n){for(let o=0;o<n;++o)if(e[o]!==t[o])return o;return n}(e,o,l)),n===e.length&&i===o.length&&(a=function(e,t,n){let o=e.length,r=t.length,i=0;for(;i<n&&e[--o]===t[--r];)i++;return i}(e,o,l-s)),r+=s,i-=a,(n-=a)-(t+=s)==0&&i-r==0)return Tt;if(t===n){const e=ss(t,[],0);for(;r<i;)e.removed.push(o[r++]);return[e]}if(r===i)return[ss(t,[],n-t)];const c=function(e){let t=e.length-1,n=e[0].length-1,o=e[t][n];const r=[];for(;t>0||n>0;){if(0===t){r.push(cs),n--;continue}if(0===n){r.push(ds),t--;continue}const i=e[t-1][n-1],s=e[t-1][n],a=e[t][n-1];let l;l=s<a?s<i?s:i:a<i?a:i,l===i?(i===o?r.push(as):(r.push(ls),o=i),t--,n--):l===s?(r.push(ds),t--,o=s):(r.push(cs),n--,o=a)}return r.reverse(),r}(function(e,t,n,o,r,i){const s=i-r+1,a=n-t+1,l=new Array(s);let c,d;for(let e=0;e<s;++e)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;++e)l[0][e]=e;for(let n=1;n<s;++n)for(let i=1;i<a;++i)e[t+i-1]===o[r+n-1]?l[n][i]=l[n-1][i-1]:(c=l[n-1][i]+1,d=l[n][i-1]+1,l[n][i]=c<d?c:d);return l}(e,t,n,o,r,i)),d=[];let u,h=t,p=r;for(let e=0;e<c.length;++e)switch(c[e]){case as:void 0!==u&&(d.push(u),u=void 0),h++,p++;break;case ls:void 0===u&&(u=ss(h,[],0)),u.addedCount++,h++,u.removed.push(o[p]),p++;break;case cs:void 0===u&&(u=ss(h,[],0)),u.addedCount++,h++;break;case ds:void 0===u&&(u=ss(h,[],0)),u.removed.push(o[p]),p++}return void 0!==u&&d.push(u),d}const hs=Array.prototype.push;function ps(e,t,n,o){const r=ss(t,n,o);let i=!1,s=0;for(let t=0;t<e.length;t++){const n=e[t];if(n.index+=s,i)continue;const o=(a=r.index,l=r.index+r.removed.length,c=n.index,d=n.index+n.addedCount,l<c||d<a?-1:l===c||d===a?0:a<c?l<d?l-c:d-c:d<l?d-a:l-a);if(o>=0){e.splice(t,1),t--,s-=n.addedCount-n.removed.length,r.addedCount+=n.addedCount-o;const a=r.removed.length+n.removed.length-o;if(r.addedCount||a){let e=n.removed;if(r.index<n.index){const t=r.removed.slice(0,n.index-r.index);hs.apply(t,e),e=t}if(r.index+r.removed.length>n.index+n.addedCount){const t=r.removed.slice(n.index+n.addedCount-r.index);hs.apply(e,t)}r.removed=e,n.index<r.index&&(r.index=n.index)}else i=!0}else if(r.index<n.index){i=!0,e.splice(t,0,r),t++;const o=r.addedCount-r.removed.length;n.index+=o,s+=o}}var a,l,c,d;i||e.push(r)}function fs(e,t){let n=[];const o=function(e){const t=[];for(let n=0,o=e.length;n<o;n++){const o=e[n];ps(t,o.index,o.removed,o.addedCount)}return t}(t);for(let t=0,r=o.length;t<r;++t){const r=o[t];1!==r.addedCount||1!==r.removed.length?n=n.concat(us(e,r.index,r.index+r.addedCount,r.removed,0,r.removed.length)):r.removed[0]!==e[r.index]&&n.push(r)}return n}let ms=!1;function gs(e,t){let n=e.index;const o=t.length;return n>o?n=o-e.addedCount:n<0&&(n=o+e.removed.length+n-e.addedCount),n<0&&(n=0),e.index=n,e}class bs extends $t{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){void 0===this.splices?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,zt.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,zt.queueUpdate(this))}flush(){const e=this.splices,t=this.oldCollection;if(void 0===e&&void 0===t)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const n=void 0===t?fs(this.source,e):us(this.source,0,this.source.length,t,0,t.length);this.notify(n)}}Object.freeze({positioning:!1,recycle:!0});function vs(e,t,n,o){e.bind(t[n],o)}function ys(e,t,n,o){const r=Object.create(o);r.index=n,r.length=t.length,e.bind(t[n],r)}class ws{constructor(e,t,n,o,r,i){this.location=e,this.itemsBinding=t,this.templateBinding=o,this.options=i,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=vs,this.itemsBindingObserver=Dt.binding(t,this,n),this.templateBindingObserver=Dt.binding(o,this,r),i.positioning&&(this.bindView=ys)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items)return void(this.items=Tt);const t=this.itemsObserver,n=this.itemsObserver=Dt.getNotifier(this.items),o=t!==n;o&&null!==t&&t.unsubscribe(this),(o||e)&&n.subscribe(this)}updateViews(e){const t=this.childContext,n=this.views,o=this.bindView,r=this.items,i=this.template,s=this.options.recycle,a=[];let l=0,c=0;for(let d=0,u=e.length;d<u;++d){const u=e[d],h=u.removed;let p=0,f=u.index;const m=f+u.addedCount,g=n.splice(u.index,h.length),b=c=a.length+g.length;for(;f<m;++f){const e=n[f],d=e?e.firstChild:this.location;let u;s&&c>0?(p<=b&&g.length>0?(u=g[p],p++):(u=a[l],l++),c--):u=i.create(),n.splice(f,0,u),o(u,r,f,t),u.insertBefore(d)}g[p]&&a.push(...g.slice(p))}for(let e=l,t=a.length;e<t;++e)a[e].dispose();if(this.options.positioning)for(let e=0,t=n.length;e<t;++e){const o=n[e].context;o.length=t,o.index=e}}refreshAllViews(e=!1){const t=this.items,n=this.childContext,o=this.template,r=this.location,i=this.bindView;let s=t.length,a=this.views,l=a.length;if(0!==s&&!e&&this.options.recycle||(zo.disposeContiguousBatch(a),l=0),0===l){this.views=a=new Array(s);for(let e=0;e<s;++e){const s=o.create();i(s,t,e,n),a[e]=s,s.insertBefore(r)}}else{let e=0;for(;e<s;++e)if(e<l){i(a[e],t,e,n)}else{const s=o.create();i(s,t,e,n),a.push(s),s.insertBefore(r)}const c=a.splice(e,l-e);for(e=0,s=c.length;e<s;++e)c[e].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,n=e.length;t<n;++t)e[t].unbind()}}class xs extends co{constructor(e,t,n){super(),this.itemsBinding=e,this.templateBinding=t,this.options=n,this.createPlaceholder=zt.createBlockPlaceholder,function(){if(ms)return;ms=!0,Dt.setArrayObserverFactory((e=>new bs(e)));const e=Array.prototype;if(e.$fastPatch)return;Reflect.defineProperty(e,"$fastPatch",{value:1,enumerable:!1});const t=e.pop,n=e.push,o=e.reverse,r=e.shift,i=e.sort,s=e.splice,a=e.unshift;e.pop=function(){const e=this.length>0,n=t.apply(this,arguments),o=this.$fastController;return void 0!==o&&e&&o.addSplice(ss(this.length,[n],0)),n},e.push=function(){const e=n.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(gs(ss(this.length-arguments.length,[],arguments.length),this)),e},e.reverse=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const n=o.apply(this,arguments);return void 0!==t&&t.reset(e),n},e.shift=function(){const e=this.length>0,t=r.apply(this,arguments),n=this.$fastController;return void 0!==n&&e&&n.addSplice(ss(0,[t],0)),t},e.sort=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const n=i.apply(this,arguments);return void 0!==t&&t.reset(e),n},e.splice=function(){const e=s.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(gs(ss(+arguments[0],e,arguments.length>2?arguments.length-2:0),this)),e},e.unshift=function(){const e=a.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(gs(ss(0,[],arguments.length),this)),e}}(),this.isItemsBindingVolatile=Dt.isVolatileBinding(e),this.isTemplateBindingVolatile=Dt.isVolatileBinding(t)}createBehavior(e){return new ws(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}const Cs="focus",Ss="focusin",ks="focusout",Ts="keydown",Rs="none",_s="default",Es="sticky",Os="default",Is="columnheader",Ms="rowheader",Ps="default",zs="header",$s="sticky-header";class As extends Qn{constructor(){super(),this.noTabbing=!1,this.generateHeader=_s,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,t,n)=>{if(0===this.rowElements.length)return this.focusRowIndex=0,void(this.focusColumnIndex=0);const o=Math.max(0,Math.min(this.rowElements.length-1,e)),r=this.rowElements[o].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),i=r[Math.max(0,Math.min(r.length-1,t))];n&&this.scrollHeight!==this.clientHeight&&(o<this.focusRowIndex&&this.scrollTop>0||o>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&i.scrollIntoView({block:"center",inline:"center"}),i.focus()},this.onChildListChange=(e,t)=>{e&&e.length&&(e.forEach((e=>{e.addedNodes.forEach((e=>{1===e.nodeType&&"row"===e.getAttribute("role")&&(e.columnDefinitions=this.columnDefinitions)}))})),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,zt.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(void 0===e){if(""===this.generatedGridTemplateColumns&&this.rowElements.length>0){const e=this.rowElements[0];this.generatedGridTemplateColumns=new Array(e.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach(((t,n)=>{const o=t;o.rowIndex=n,o.gridTemplateColumns=e,this.columnDefinitionsStale&&(o.columnDefinitions=this.columnDefinitions)})),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let t="";return e.forEach((e=>{t=`${t}${""===t?"":" "}1fr`})),t}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){null===this.columnDefinitions&&this.rowsData.length>0&&(this.columnDefinitions=As.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){null!==this.columnDefinitions?(this.generatedGridTemplateColumns=As.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())):this.generatedGridTemplateColumns=""}headerCellItemTemplateChanged(){this.$fastController.isConnected&&null!==this.generatedHeader&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),void 0===this.rowItemTemplate&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new xs((e=>e.rowsData),(e=>e.rowItemTemplate),{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(Cs,this.handleFocus),this.addEventListener(Ts,this.handleKeydown),this.addEventListener(ks,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),zt.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(Cs,this.handleFocus),this.removeEventListener(Ts,this.handleKeydown),this.removeEventListener(ks,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const t=e.target;this.focusRowIndex=this.rowElements.indexOf(t),this.focusColumnIndex=t.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){null!==e.relatedTarget&&this.contains(e.relatedTarget)||this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let t;const n=this.rowElements.length-1,o=this.offsetHeight+this.scrollTop,r=this.rowElements[n];switch(e.key){case ki:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case xi:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case"PageUp":if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(0===this.focusRowIndex)return void this.focusOnCell(0,this.focusColumnIndex,!1);for(t=this.focusRowIndex-1;t>=0;t--){const e=this.rowElements[t];if(e.offsetTop<this.scrollTop){this.scrollTop=e.offsetTop+e.clientHeight-this.clientHeight;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case"PageDown":if(e.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=n||r.offsetTop+r.offsetHeight<=o)return void this.focusOnCell(n,this.focusColumnIndex,!1);for(t=this.focusRowIndex+1;t<=n;t++){const e=this.rowElements[t];if(e.offsetTop+e.offsetHeight>o){let t=0;this.generateHeader===Es&&null!==this.generatedHeader&&(t=this.generatedHeader.clientHeight),this.scrollTop=e.offsetTop-t;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case _i:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case Ei:e.ctrlKey&&null!==this.columnDefinitions&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0))}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||!1===this.pendingFocusUpdate&&(this.pendingFocusUpdate=!0,zt.queueUpdate((()=>this.updateFocus())))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(null!==this.generatedHeader&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==Rs&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);return this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===Es?$s:zs,void(null===this.firstChild&&null===this.rowsPlaceholder||this.insertBefore(e,null!==this.firstChild?this.firstChild:this.rowsPlaceholder))}}}As.generateColumns=e=>Object.getOwnPropertyNames(e).map(((e,t)=>({columnDataKey:e,gridColumn:`${t}`}))),on([Qt({attribute:"no-tabbing",mode:"boolean"})],As.prototype,"noTabbing",void 0),on([Qt({attribute:"generate-header"})],As.prototype,"generateHeader",void 0),on([Qt({attribute:"grid-template-columns"})],As.prototype,"gridTemplateColumns",void 0),on([Nt],As.prototype,"rowsData",void 0),on([Nt],As.prototype,"columnDefinitions",void 0),on([Nt],As.prototype,"rowItemTemplate",void 0),on([Nt],As.prototype,"cellItemTemplate",void 0),on([Nt],As.prototype,"headerCellItemTemplate",void 0),on([Nt],As.prototype,"focusRowIndex",void 0),on([Nt],As.prototype,"focusColumnIndex",void 0),on([Nt],As.prototype,"defaultRowItemTemplate",void 0),on([Nt],As.prototype,"rowElementTag",void 0),on([Nt],As.prototype,"rowElements",void 0);class Ds extends Wi{constructor(e,t){super(e,t),this.observer=null,t.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function Ns(e){return"string"==typeof e&&(e={property:e}),new ho("fast-children",Ds,e)}class Ls extends Qn{constructor(){super(...arguments),this.rowType=Ps,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){null!==this.rowData&&this.isActiveRow&&(this.refocusOnLoad=!0)}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),null===this.cellsRepeatBehavior&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new xs((e=>e.columnDefinitions),(e=>e.activeCellItemTemplate),{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(ks,this.handleFocusout),this.addEventListener(Ts,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(ks,this.handleFocusout),this.removeEventListener(Ts,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let t=0;switch(e.key){case Ci:t=Math.max(0,this.focusColumnIndex-1),this.cellElements[t].focus(),e.preventDefault();break;case Si:t=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[t].focus(),e.preventDefault();break;case _i:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case Ei:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault())}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===Ps&&void 0!==this.cellItemTemplate?this.cellItemTemplate:this.rowType===Ps&&void 0===this.cellItemTemplate?this.defaultCellItemTemplate:void 0!==this.headerCellItemTemplate?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}on([Qt({attribute:"grid-template-columns"})],Ls.prototype,"gridTemplateColumns",void 0),on([Qt({attribute:"row-type"})],Ls.prototype,"rowType",void 0),on([Nt],Ls.prototype,"rowData",void 0),on([Nt],Ls.prototype,"columnDefinitions",void 0),on([Nt],Ls.prototype,"cellItemTemplate",void 0),on([Nt],Ls.prototype,"headerCellItemTemplate",void 0),on([Nt],Ls.prototype,"rowIndex",void 0),on([Nt],Ls.prototype,"isActiveRow",void 0),on([Nt],Ls.prototype,"activeCellItemTemplate",void 0),on([Nt],Ls.prototype,"defaultCellItemTemplate",void 0),on([Nt],Ls.prototype,"defaultHeaderCellItemTemplate",void 0),on([Nt],Ls.prototype,"cellElements",void 0);const Hs=Do`
    <template>
        ${e=>null===e.rowData||null===e.columnDefinition||null===e.columnDefinition.columnDataKey?null:e.rowData[e.columnDefinition.columnDataKey]}
    </template>
`,Bs=Do`
    <template>
        ${e=>null===e.columnDefinition?null:void 0===e.columnDefinition.title?e.columnDefinition.columnDataKey:e.columnDefinition.title}
    </template>
`;class Fs extends Qn{constructor(){super(...arguments),this.cellType=Os,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,t){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(Ss,this.handleFocusin),this.addEventListener(ks,this.handleFocusout),this.addEventListener(Ts,this.handleKeydown),this.style.gridColumn=`${void 0===(null===(e=this.columnDefinition)||void 0===e?void 0:e.gridColumn)?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Ss,this.handleFocusin),this.removeEventListener(ks,this.handleFocusout),this.removeEventListener(Ts,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){if(this.isActiveCell=!0,this.cellType===Is){if(null!==this.columnDefinition&&!0!==this.columnDefinition.headerCellInternalFocusQueue&&"function"==typeof this.columnDefinition.headerCellFocusTargetCallback){const e=this.columnDefinition.headerCellFocusTargetCallback(this);null!==e&&e.focus()}}else if(null!==this.columnDefinition&&!0!==this.columnDefinition.cellInternalFocusQueue&&"function"==typeof this.columnDefinition.cellFocusTargetCallback){const e=this.columnDefinition.cellFocusTargetCallback(this);null!==e&&e.focus()}this.$emit("cell-focused",this)}}handleFocusout(e){this===document.activeElement||this.contains(document.activeElement)||(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||null===this.columnDefinition||this.cellType===Os&&!0!==this.columnDefinition.cellInternalFocusQueue||this.cellType===Is&&!0!==this.columnDefinition.headerCellInternalFocusQueue))switch(e.key){case Ti:case"F2":if(this.contains(document.activeElement)&&document.activeElement!==this)return;if(this.cellType===Is){if(void 0!==this.columnDefinition.headerCellFocusTargetCallback){const t=this.columnDefinition.headerCellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}}else if(void 0!==this.columnDefinition.cellFocusTargetCallback){const t=this.columnDefinition.cellFocusTargetCallback(this);null!==t&&t.focus(),e.preventDefault()}break;case Ri:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault())}}updateCellView(){if(this.disconnectCellView(),null!==this.columnDefinition)switch(this.cellType){case Is:void 0!==this.columnDefinition.headerCellTemplate?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=Bs.render(this,this);break;case void 0:case Ms:case Os:void 0!==this.columnDefinition.cellTemplate?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=Hs.render(this,this)}}disconnectCellView(){null!==this.customCellView&&(this.customCellView.dispose(),this.customCellView=null)}}on([Qt({attribute:"cell-type"})],Fs.prototype,"cellType",void 0),on([Qt({attribute:"grid-column"})],Fs.prototype,"gridColumn",void 0),on([Nt],Fs.prototype,"rowData",void 0),on([Nt],Fs.prototype,"columnDefinition",void 0);const Gs=class extends As{connectedCallback(){super.connectedCallback();this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}}.compose({baseName:"data-grid",baseClass:As,template:(e,t)=>{const n=function(e){const t=e.tagFor(Ls);return Do`
    <${t}
        :rowData="${e=>e}"
        :cellItemTemplate="${(e,t)=>t.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(e,t)=>t.parent.headerCellItemTemplate}"
    ></${t}>
`}(e),o=e.tagFor(Ls);return Do`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>o}"
            :defaultRowItemTemplate="${n}"
            ${Ns({property:"rowElements",filter:Gi("[role=row]")})}
        >
            <slot></slot>
        </template>
    `},styles:(e,t)=>Bo`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`});const Ws=class extends Ls{}.compose({baseName:"data-grid-row",baseClass:Ls,template:(e,t)=>{const n=function(e){const t=e.tagFor(Fs);return Do`
    <${t}
        cell-type="${e=>e.isRowHeader?"rowheader":void 0}"
        grid-column="${(e,t)=>t.index+1}"
        :rowData="${(e,t)=>t.parent.rowData}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}(e),o=function(e){const t=e.tagFor(Fs);return Do`
    <${t}
        cell-type="columnheader"
        grid-column="${(e,t)=>t.index+1}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}(e);return Do`
        <template
            role="row"
            class="${e=>"default"!==e.rowType?e.rowType:""}"
            :defaultCellItemTemplate="${n}"
            :defaultHeaderCellItemTemplate="${o}"
            ${Ns({property:"cellElements",filter:Gi('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${Ui("slottedCellElements")}></slot>
        </template>
    `},styles:(e,t)=>Bo`
	:host {
		display: grid;
		padding: calc((${mr} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${ur};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${Qr};
		outline: 1px dotted ${pr};
		outline-offset: -1px;
	}
`});const js=class extends Fs{}.compose({baseName:"data-grid-cell",baseClass:Fs,template:(e,t)=>Do`
        <template
            tabindex="-1"
            role="${e=>e.cellType&&"default"!==e.cellType?e.cellType:"gridcell"}"
            class="
            ${e=>"columnheader"===e.cellType?"column-header":"rowheader"===e.cellType?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,styles:(e,t)=>Bo`
	:host {
		padding: calc(${mr} * 1px) calc(${mr} * 3px);
		color: ${yr};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${vr};
		font-size: ${Cr};
		line-height: ${Sr};
		font-weight: 400;
		border: solid calc(${hr} * 1px) transparent;
		border-radius: calc(${fr} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${qi}),
	:host(:focus),
	:host(:active) {
		background: ${Yr};
		border: solid calc(${hr} * 1px) ${br};
		color: ${Xr};
		outline: none;
	}
	:host(:${qi}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${Xr} !important;
	}
`}),Us="horizontal",Vs="separator";class Zs extends Qn{constructor(){super(...arguments),this.role=Vs,this.orientation=Us}}on([Qt],Zs.prototype,"role",void 0),on([Qt],Zs.prototype,"orientation",void 0);const qs=class extends Zs{}.compose({baseName:"divider",template:(e,t)=>Do`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`,styles:(e,t)=>Bo`
	${Go("block")} :host {
		border: none;
		border-top: calc(${hr} * 1px) solid ${Jr};
		box-sizing: content-box;
		height: 0;
		margin: calc(${mr} * 1px) 0;
		width: 100%;
	}
`});let Ks=0;function Ys(e=""){return`${e}${Ks++}`}function Xs(e){return Vi(e)&&("option"===e.getAttribute("role")||e instanceof HTMLOptionElement)}class Qs extends Qn{constructor(e,t,n,o){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),n&&(this.defaultSelected=n),o&&(this.selected=o),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){this.ariaChecked="boolean"!=typeof t?null:t?"true":"false"}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return null!==(e=this.value)&&void 0!==e?e:this.text}get text(){var e,t;return null!==(t=null===(e=this.textContent)||void 0===e?void 0:e.replace(/\s+/g," ").trim())&&void 0!==t?t:""}set value(e){const t=`${null!=e?e:""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),Dt.notify(this,"value")}get value(){var e;return Dt.track(this,"value"),null!==(e=this._value)&&void 0!==e?e:this.text}get form(){return this.proxy?this.proxy.form:null}}on([Nt],Qs.prototype,"checked",void 0),on([Nt],Qs.prototype,"content",void 0),on([Nt],Qs.prototype,"defaultSelected",void 0),on([Qt({mode:"boolean"})],Qs.prototype,"disabled",void 0),on([Qt({attribute:"selected",mode:"boolean"})],Qs.prototype,"selectedAttribute",void 0),on([Nt],Qs.prototype,"selected",void 0),on([Qt({attribute:"value",mode:"fromView"})],Qs.prototype,"initialValue",void 0);class Js{}on([Nt],Js.prototype,"ariaChecked",void 0),on([Nt],Js.prototype,"ariaPosInSet",void 0),on([Nt],Js.prototype,"ariaSelected",void 0),on([Nt],Js.prototype,"ariaSetSize",void 0),yi(Js,pi),yi(Qs,gi,Js);class ea extends Qn{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return null!==(e=this.selectedOptions[0])&&void 0!==e?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every((e=>e.disabled))}get length(){var e,t;return null!==(t=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==t?t:0}get options(){return Dt.track(this,"options"),this._options}set options(e){this._options=e,Dt.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&null!==e&&(e.focus(),requestAnimationFrame((()=>{e.scrollIntoView({block:"nearest"})})))}focusinHandler(e){this.shouldSkipFocus||e.target!==e.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter((e=>e.text.trim().match(t)))}getSelectableIndex(e=this.selectedIndex,t){const n=e>t?-1:e<t?1:0,o=e+n;let r=null;switch(n){case-1:r=this.options.reduceRight(((e,t,n)=>!e&&!t.disabled&&n<o?t:e),r);break;case 1:r=this.options.reduce(((e,t,n)=>!e&&!t.disabled&&n>o?t:e),r)}return this.options.indexOf(r)}handleChange(e,t){if("selected"===t)ea.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions()}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeaheadExpired=!0),ea.TYPE_AHEAD_TIMEOUT_MS),e.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case _i:e.shiftKey||(e.preventDefault(),this.selectFirstOption());break;case xi:e.shiftKey||(e.preventDefault(),this.selectNextOption());break;case ki:e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break;case Ei:e.preventDefault(),this.selectLastOption();break;case Ii:return this.focusAndScrollOptionIntoView(),!0;case Ti:case Ri:return!0;case Oi:if(this.typeaheadExpired)return!0;default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var n;if(this.hasSelectableOptions){if((null===(n=this.options[this.selectedIndex])||void 0===n?void 0:n.disabled)&&"number"==typeof e){const n=this.getSelectableIndex(e,t),o=n>-1?n:e;return this.selectedIndex=o,void(t===o&&this.selectedIndexChanged(t,o))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(e,t){var n;const o=t.filter(ea.slottedOptionFilter);null===(n=this.options)||void 0===n||n.forEach((e=>{const t=Dt.getNotifier(e);t.unsubscribe(this,"selected"),e.selected=o.includes(e),t.subscribe(this,"selected")}))}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>!e.disabled)))&&void 0!==t?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(e,t){let n=e.length;for(;n--;)if(t(e[n],n,e))return n;return-1}(this.options,(e=>!e.disabled)))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=null!==(t=null===(e=this.options)||void 0===e?void 0:e.findIndex((e=>e.defaultSelected)))&&void 0!==t?t:-1}setSelectedOptions(){var e,t,n;(null===(e=this.options)||void 0===e?void 0:e.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(n=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.id)&&void 0!==n?n:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce(((e,t)=>(Xs(t)&&e.push(t),e)),[]);const n=`${this.options.length}`;this.options.forEach(((e,t)=>{e.id||(e.id=Ys("option-")),e.ariaPosInSet=`${t+1}`,e.ariaSetSize=n})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches();if(e.length){const t=this.options.indexOf(e[0]);t>-1&&(this.selectedIndex=t)}this.typeaheadExpired=!1}}}ea.slottedOptionFilter=e=>Xs(e)&&!e.hidden,ea.TYPE_AHEAD_TIMEOUT_MS=1e3,on([Qt({mode:"boolean"})],ea.prototype,"disabled",void 0),on([Nt],ea.prototype,"selectedIndex",void 0),on([Nt],ea.prototype,"selectedOptions",void 0),on([Nt],ea.prototype,"slottedOptions",void 0),on([Nt],ea.prototype,"typeaheadBuffer",void 0);class ta{}function na(e,t,n=0){return[t,n]=[t,n].sort(((e,t)=>e-t)),t<=e&&e<n}on([Nt],ta.prototype,"ariaActiveDescendant",void 0),on([Nt],ta.prototype,"ariaDisabled",void 0),on([Nt],ta.prototype,"ariaExpanded",void 0),on([Nt],ta.prototype,"ariaMultiSelectable",void 0),yi(ta,pi),yi(ea,ta);class oa extends ea{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return null===(e=this.options)||void 0===e?void 0:e.filter((e=>e.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var n,o;this.ariaActiveDescendant=null!==(o=null===(n=this.options[t])||void 0===n?void 0:n.id)&&void 0!==o?o:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((e,t)=>{e.checked=na(t,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=na(t,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((e,t)=>{e.checked=na(t,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((e,t)=>{e.checked=na(t,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const n=null===(t=e.target)||void 0===t?void 0:t.closest("[role=option]");return n&&!n.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(n),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);this.shouldSkipFocus||e.target!==e.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:n}=e;switch(this.shouldSkipFocus=!1,t){case _i:return void this.checkFirstOption(n);case xi:return void this.checkNextOption(n);case ki:return void this.checkPreviousOption(n);case Ei:return void this.checkLastOption(n);case Ii:return this.focusAndScrollOptionIntoView(),!0;case Ri:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case Oi:if(e.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===t.length&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var n;this.ariaMultiSelectable=t?"true":null,null===(n=this.options)||void 0===n||n.forEach((e=>{e.checked=!t&&void 0})),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((e=>e.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(e,t){var n;const o=Math.max(0,parseInt(null!==(n=null==t?void 0:t.toFixed())&&void 0!==n?n:"",10));o!==t&&zt.queueUpdate((()=>{this.size=o}))}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter((e=>!e.disabled)),t=!e.every((e=>e.selected));e.forEach((e=>e.selected=t)),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(this.multiple){if(this.$fastController.isConnected){const e=this.getTypeaheadMatches(),t=this.options.indexOf(e[0]);t>-1&&(this.activeIndex=t,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(e,t)}uncheckAllOptions(e=!1){this.options.forEach((e=>e.checked=!this.multiple&&void 0)),e||(this.rangeStartIndex=-1)}}on([Nt],oa.prototype,"activeIndex",void 0),on([Qt({mode:"boolean"})],oa.prototype,"multiple",void 0),on([Qt({converter:Yt})],oa.prototype,"size",void 0);class ra extends oa{}class ia extends(Di(ra)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}const sa="above",aa="below";class la extends ia{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=Ys("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void zt.queueUpdate((()=>this.focus()));this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return Dt.track(this,"value"),this._value}set value(e){var t,n,o,r,i,s,a;const l=`${this._value}`;if(null===(t=this._options)||void 0===t?void 0:t.length){const t=this._options.findIndex((t=>t.value===e)),l=null!==(o=null===(n=this._options[this.selectedIndex])||void 0===n?void 0:n.value)&&void 0!==o?o:null,c=null!==(i=null===(r=this._options[t])||void 0===r?void 0:r.value)&&void 0!==i?i:null;-1!==t&&l===c||(e="",this.selectedIndex=t),e=null!==(a=null===(s=this.firstSelectedOption)||void 0===s?void 0:s.value)&&void 0!==a?a:e}l!==e&&(this._value=e,super.valueChanged(l,e),Dt.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,n;this.$fastController.isConnected&&(this.value=null!==(n=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.value)&&void 0!==n?n:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),t=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>t?sa:aa,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===sa?~~e.top:~~t}get displayValue(){var e,t;return Dt.track(this,"displayValue"),null!==(t=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.text)&&void 0!==t?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const n=e.relatedTarget;this.isSameNode(n)?this.focus():(null===(t=this.options)||void 0===t?void 0:t.includes(n))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),"value"===t&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach((e=>{Dt.getNotifier(e).unsubscribe(this,"value")})),super.slottedOptionsChanged(e,t),this.options.forEach((e=>{Dt.getNotifier(e).subscribe(this,"value")})),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=(null===(t=this.listbox)||void 0===t?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var n;super.selectedOptionsChanged(e,t),null===(n=this.options)||void 0===n||n.forEach(((e,t)=>{var n;const o=null===(n=this.proxy)||void 0===n?void 0:n.options.item(t);o&&(o.selected=e.selected)}))}setDefaultSelectedOption(){var e;const t=null!==(e=this.options)&&void 0!==e?e:Array.from(this.children).filter(ea.slottedOptionFilter),n=null==t?void 0:t.findIndex((e=>e.hasAttribute("selected")||e.selected||e.value===this.value));this.selectedIndex=-1===n?0:n}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach((e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)})))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case Oi:e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case _i:case Ei:e.preventDefault();break;case Ti:e.preventDefault(),this.open=!this.open;break;case Ri:this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break;case Ii:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return this.open||this.indexWhenOpened===this.selectedIndex||(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===xi||t===ki)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&Dt.notify(this,"displayValue")}}on([Qt({attribute:"open",mode:"boolean"})],la.prototype,"open",void 0),on([Lt],la.prototype,"collapsible",null),on([Nt],la.prototype,"control",void 0),on([Qt({attribute:"position"})],la.prototype,"positionAttribute",void 0),on([Nt],la.prototype,"position",void 0),on([Nt],la.prototype,"maxHeight",void 0);class ca{}function da(e,t){const n="function"==typeof t?t:()=>t;return(t,o)=>e(t,o)?n(t,o):null}on([Nt],ca.prototype,"ariaControls",void 0),yi(ca,ta),yi(la,gi,ca);const ua=class extends la{}.compose({baseName:"dropdown",template:(e,t)=>Do`
    <template
        class="${e=>[e.collapsible&&"collapsible",e.collapsible&&e.open&&"open",e.disabled&&"disabled",e.collapsible&&e.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-controls="${e=>e.ariaControls}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-haspopup="${e=>e.collapsible?"listbox":null}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        ?open="${e=>e.open}"
        role="combobox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @focusin="${(e,t)=>e.focusinHandler(t.event)}"
        @focusout="${(e,t)=>e.focusoutHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
    >
        ${da((e=>e.collapsible),Do`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${mi("control")}
                >
                    ${vi(0,t)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${e=>e.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${t.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${bi(0,t)}
                </div>
            `)}
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!!e.collapsible&&!e.open}"
            ${mi("listbox")}
        >
            <slot
                ${Ui({filter:ea.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>Bo`
	${Go("inline-flex")} :host {
		background: ${ei};
		box-sizing: border-box;
		color: ${yr};
		contain: contents;
		font-family: ${vr};
		height: calc(${wr} * 1px);
		position: relative;
		user-select: none;
		min-width: ${xr};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${hr} * 1px) solid ${ti};
		border-radius: calc(${fr} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${Cr};
		line-height: ${Sr};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${ei};
		border: calc(${hr} * 1px) solid ${br};
		border-radius: calc(${fr} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${ni};
		padding: 0 0 calc(${mr} * 1px) 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${qi}) .control {
		border-color: ${br};
	}
	:host(:not([disabled]):hover) {
		background: ${ei};
		border-color: ${ti};
	}
	:host(:${qi}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${Yr};
		border: calc(${hr} * 1px) solid ${br};
		color: ${Xr};
	}
	:host([disabled]) {
		cursor: ${Ki};
		opacity: ${gr};
	}
	:host([disabled]) .control {
		cursor: ${Ki};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${ei};
		color: ${yr};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${br};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${br};
	}
	:host([open][position='above']) .listbox,
	:host([open][position='below']) .control {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='above']) .control,
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${wr} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${wr} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${mr} * 4px);
		min-width: calc(${mr} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`,indicator:'\n\t\t<svg \n\t\t\tclass="select-indicator"\n\t\t\tpart="select-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"\n\t\t\t/>\n\t\t</svg>\n\t'});class ha extends Qn{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}on([Qt],ha.prototype,"download",void 0),on([Qt],ha.prototype,"href",void 0),on([Qt],ha.prototype,"hreflang",void 0),on([Qt],ha.prototype,"ping",void 0),on([Qt],ha.prototype,"referrerpolicy",void 0),on([Qt],ha.prototype,"rel",void 0),on([Qt],ha.prototype,"target",void 0),on([Qt],ha.prototype,"type",void 0),on([Nt],ha.prototype,"defaultSlottedContent",void 0);class pa{}on([Qt({attribute:"aria-expanded"})],pa.prototype,"ariaExpanded",void 0),yi(pa,pi),yi(ha,gi,pa);const fa=class extends ha{}.compose({baseName:"link",template:(e,t)=>Do`
    <a
        class="control"
        part="control"
        download="${e=>e.download}"
        href="${e=>e.href}"
        hreflang="${e=>e.hreflang}"
        ping="${e=>e.ping}"
        referrerpolicy="${e=>e.referrerpolicy}"
        rel="${e=>e.rel}"
        target="${e=>e.target}"
        type="${e=>e.type}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${mi("control")}
    >
        ${vi(0,t)}
        <span class="content" part="content">
            <slot ${Ui("defaultSlottedContent")}></slot>
        </span>
        ${bi(0,t)}
    </a>
`,styles:(e,t)=>Bo`
	${Go("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${si};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${vr};
		font-size: ${Cr};
		line-height: ${Sr};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${hr} * 1px) solid transparent;
		border-radius: calc(${fr} * 1px);
		box-sizing: border-box;
		color: inherit;
		cursor: inherit;
		fill: inherit;
		font-family: inherit;
		height: inherit;
		padding: 0;
		outline: none;
		text-decoration: none;
		word-break: break-word;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:hover) {
		color: ${ii};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${ii};
	}
	:host(:${qi}) .control,
	:host(:focus) .control {
		border: calc(${hr} * 1px) solid ${br};
	}
`,shadowOptions:{delegatesFocus:!0}});const ma=class extends Qs{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}}.compose({baseName:"option",template:(e,t)=>Do`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${vi(0,t)}
        <span class="content" part="content">
            <slot ${Ui("content")}></slot>
        </span>
        ${bi(0,t)}
    </template>
`,styles:(e,t)=>Bo`
	${Go("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${fr};
		border: calc(${hr} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${yr};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${Cr};
		line-height: ${Sr};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${mr} / 2) * 1px)
			calc((${mr} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${qi}) {
		border-color: ${br};
		background: ${Yr};
		color: ${yr};
	}
	:host([aria-selected='true']) {
		background: ${Yr};
		border: calc(${hr} * 1px) solid ${br};
		color: ${Xr};
	}
	:host(:active) {
		background: ${Yr};
		color: ${Xr};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${Yr};
		border: calc(${hr} * 1px) solid ${br};
		color: ${Xr};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${Yr};
		color: ${yr};
	}
	:host([disabled]) {
		cursor: ${Ki};
		opacity: ${gr};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`}),ga="horizontal";class ba extends Qn{constructor(){super(...arguments),this.orientation=ga,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>"true"===e.getAttribute("aria-disabled"),this.isFocusableElement=e=>!this.isDisabledElement(e),this.setTabs=()=>{const e="gridColumn",t="gridRow",n=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach(((o,r)=>{if("tab"===o.slot){const e=this.activeTabIndex===r&&this.isFocusableElement(o);this.activeindicator&&this.isFocusableElement(o)&&(this.showActiveIndicator=!0);const t=this.tabIds[r],n=this.tabpanelIds[r];o.setAttribute("id",t),o.setAttribute("aria-selected",e?"true":"false"),o.setAttribute("aria-controls",n),o.addEventListener("click",this.handleTabClick),o.addEventListener("keydown",this.handleTabKeyDown),o.setAttribute("tabindex",e?"0":"-1"),e&&(this.activetab=o)}o.style[e]="",o.style[t]="",o.style[n]=`${r+1}`,this.isHorizontal()?o.classList.remove("vertical"):o.classList.add("vertical")}))},this.setTabPanels=()=>{this.tabpanels.forEach(((e,t)=>{const n=this.tabIds[t],o=this.tabpanelIds[t];e.setAttribute("id",o),e.setAttribute("aria-labelledby",n),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")}))},this.handleTabClick=e=>{const t=e.currentTarget;1===t.nodeType&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case Ci:e.preventDefault(),this.adjustBackward(e);break;case Si:e.preventDefault(),this.adjustForward(e)}else switch(e.key){case ki:e.preventDefault(),this.adjustBackward(e);break;case xi:e.preventDefault(),this.adjustForward(e)}switch(e.key){case _i:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case Ei:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=e=>{const t=this.tabs;let n=0;for(n=this.activetab?t.indexOf(this.activetab)+1:1,n===t.length&&(n=0);n<t.length&&t.length>1;){if(this.isFocusableElement(t[n])){this.moveToTabByIndex(t,n);break}if(this.activetab&&n===t.indexOf(this.activetab))break;n+1>=t.length?n=0:n+=1}},this.adjustBackward=e=>{const t=this.tabs;let n=0;for(n=this.activetab?t.indexOf(this.activetab)-1:0,n=n<0?t.length-1:n;n>=0&&t.length>1;){if(this.isFocusableElement(t[n])){this.moveToTabByIndex(t,n);break}n-1<0?n=t.length-1:n-=1}},this.moveToTabByIndex=(e,t)=>{const n=e[t];this.activetab=n,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,n.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex((t=>t.id===e)),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`tab-${Ys()}`}))}getTabPanelIds(){return this.tabpanels.map((e=>{var t;return null!==(t=e.getAttribute("id"))&&void 0!==t?t:`panel-${Ys()}`}))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===ga}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",n=this.isHorizontal()?"offsetLeft":"offsetTop",o=this.activeIndicatorRef[n];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const r=this.activeIndicatorRef[n];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const i=r-o;this.activeIndicatorRef.style.transform=`${t}(${i}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(e){var t,n,o;this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=(t=0,n=this.tabs.length-1,(o=this.activeTabIndex+e)<t?n:o>n?t:o),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}on([Qt],ba.prototype,"orientation",void 0),on([Qt],ba.prototype,"activeid",void 0),on([Nt],ba.prototype,"tabs",void 0),on([Nt],ba.prototype,"tabpanels",void 0),on([Qt({mode:"boolean"})],ba.prototype,"activeindicator",void 0),on([Nt],ba.prototype,"activeIndicatorRef",void 0),on([Nt],ba.prototype,"showActiveIndicator",void 0),yi(ba,gi);class va extends Qn{}on([Qt({mode:"boolean"})],va.prototype,"disabled",void 0);class ya extends Qn{}const wa=class extends ba{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation=ga);this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}}.compose({baseName:"panels",template:(e,t)=>Do`
    <template class="${e=>e.orientation}">
        ${vi(0,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${Ui("tabs")}></slot>

            ${da((e=>e.showActiveIndicator),Do`
                    <div
                        ${mi("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${bi(0,t)}
        <div class="tabpanel">
            <slot name="tabpanel" part="tabpanel" ${Ui("tabpanels")}></slot>
        </div>
    </template>
`,styles:(e,t)=>Bo`
	${Go("grid")} :host {
		box-sizing: border-box;
		font-family: ${vr};
		font-size: ${Cr};
		line-height: ${Sr};
		color: ${yr};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${mr} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${mr} * 1px) calc(${mr} * 1px) 0;
		box-sizing: border-box;
	}
	.start,
	.end {
		align-self: center;
	}
	.activeIndicator {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
		height: calc((${mr} / 4) * 1px);
		justify-self: center;
		background: ${ci};
		margin: 0;
		border-radius: calc(${fr} * 1px);
	}
	.activeIndicatorTransition {
		transition: transform 0.01s linear;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
`});const xa=class extends va{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}}.compose({baseName:"panel-tab",template:(e,t)=>Do`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`,styles:(e,t)=>Bo`
	${Go("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${vr};
		font-size: ${Cr};
		line-height: ${Sr};
		height: calc(${mr} * 7px);
		padding: calc(${mr} * 1px) 0;
		color: ${di};
		fill: currentcolor;
		border-radius: calc(${fr} * 1px);
		border: solid calc(${hr} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${ci};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${ci};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${ci};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${ci};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${ci};
		fill: currentcolor;
	}
	:host(:${qi}) {
		outline: none;
		border: solid calc(${hr} * 1px) ${li};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${mr} * 2px);
	}
`});const Ca=class extends ya{}.compose({baseName:"panel-view",template:(e,t)=>Do`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:(e,t)=>Bo`
	${Go("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${hr} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${Cr};
		line-height: ${Sr};
		padding: 10px calc((${mr} + 2) * 1px);
	}
`});class Sa extends Qn{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e="number"==typeof this.min?this.min:0,t="number"==typeof this.max?this.max:100,n="number"==typeof this.value?this.value:0,o=t-e;this.percentComplete=0===o?0:Math.fround((n-e)/o*100)}}on([Qt({converter:Yt})],Sa.prototype,"value",void 0),on([Qt({converter:Yt})],Sa.prototype,"min",void 0),on([Qt({converter:Yt})],Sa.prototype,"max",void 0),on([Qt({mode:"boolean"})],Sa.prototype,"paused",void 0),on([Nt],Sa.prototype,"percentComplete",void 0);const ka=class extends Sa{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(e,t,n){"value"===e&&this.removeAttribute("value")}}.compose({baseName:"progress-ring",template:(e,t)=>Do`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${da((e=>"number"==typeof e.value),Do`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${e=>44*e.percentComplete/100}px ${44}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `)}
        ${da((e=>"number"!=typeof e.value),Do`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:(e,t)=>Bo`
	${Go("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${mr} * 7px);
		width: calc(${mr} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${mr} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${ai};
		stroke-width: calc(${mr} / 2 * 1px);
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
	}
	@keyframes spin-infinite {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`,indeterminateIndicator:'\n\t\t<svg class="progress" part="progress" viewBox="0 0 16 16">\n\t\t\t<circle\n\t\t\t\tclass="background"\n\t\t\t\tpart="background"\n\t\t\t\tcx="8px"\n\t\t\t\tcy="8px"\n\t\t\t\tr="7px"\n\t\t\t></circle>\n\t\t\t<circle\n\t\t\t\tclass="indeterminate-indicator-1"\n\t\t\t\tpart="indeterminate-indicator-1"\n\t\t\t\tcx="8px"\n\t\t\t\tcy="8px"\n\t\t\t\tr="7px"\n\t\t\t></circle>\n\t\t</svg>\n\t'});class Ta extends Qn{}class Ra extends(Ni(Ta)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class _a extends Ra{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(e.key!==Oi)return!0;this.checked||this.readOnly||(this.checked=!0)},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),"radiogroup"!==(null===(e=this.parentElement)||void 0===e?void 0:e.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(e){this.disabled||this.readOnly||this.checked||(this.checked=!0)}}on([Qt({attribute:"readonly",mode:"boolean"})],_a.prototype,"readOnly",void 0),on([Nt],_a.prototype,"name",void 0),on([Nt],_a.prototype,"defaultSlottedNodes",void 0);const Ea=class extends _a{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Radio")}}.compose({baseName:"radio",template:(e,t)=>Do`
    <template
        role="radio"
        class="${e=>e.checked?"checked":""} ${e=>e.readOnly?"readonly":""}"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @keypress="${(e,t)=>e.keypressHandler(t.event)}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ui("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:(e,t)=>Bo`
	${Go("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${Cr};
		line-height: ${Sr};
		margin: calc(${mr} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${Zr};
		border-radius: 999px;
		border: calc(${hr} * 1px) solid ${qr};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${mr} * 4px);
		position: relative;
		outline: none;
		width: calc(${mr} * 4px);
	}
	.label {
		color: ${yr};
		cursor: pointer;
		font-family: ${vr};
		margin-inline-end: calc(${mr} * 2px + 2px);
		padding-inline-start: calc(${mr} * 2px + 2px);
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.control,
	.checked-indicator {
		flex-shrink: 0;
	}
	.checked-indicator {
		background: ${yr};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${mr} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${Zr};
		border-color: ${qr};
	}
	:host(:not([disabled])) .control:active {
		background: ${Zr};
		border-color: ${br};
	}
	:host(:${qi}) .control {
		border: calc(${hr} * 1px) solid ${br};
	}
	:host([aria-checked='true']) .control {
		background: ${Zr};
		border: calc(${hr} * 1px) solid ${qr};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${Zr};
		border: calc(${hr} * 1px) solid ${qr};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${Zr};
		border: calc(${hr} * 1px) solid ${br};
	}
	:host([aria-checked="true"]:${qi}:not([disabled])) .control {
		border: calc(${hr} * 1px) solid ${br};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Ki};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${gr};
	}
`,checkedIndicator:'\n\t\t<div part="checked-indicator" class="checked-indicator"></div>\n\t'});var Oa;!function(e){e.ltr="ltr",e.rtl="rtl"}(Oa||(Oa={}));class Ia extends Qn{constructor(){super(...arguments),this.orientation=Us,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach((e=>{e!==t&&(e.checked=!1,this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"))})),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const n=e[t];this.isInsideToolbar||(n.setAttribute("tabindex","0"),n.readOnly?this.slottedRadioButtons.forEach((e=>{e!==n&&e.setAttribute("tabindex","-1")})):(n.checked=!0,this.selectedRadio=n)),this.focusedRadio=n,n.focus()},this.moveRightOffGroup=()=>{var e;null===(e=this.nextElementSibling)||void 0===e||e.focus()},this.moveLeftOffGroup=()=>{var e;null===(e=this.previousElementSibling)||void 0===e||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,n=e.target,o=null!==n?t.indexOf(n):0,r=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(0===r&&o===r||r===t.length-1&&r===o)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.selectedRadio&&e.setAttribute("tabindex","-1")})))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.focusedRadio&&e.setAttribute("tabindex","-1")})))),!0},this.clickHandler=e=>{const t=e.target;if(t){const e=this.slottedRadioButtons;t.checked||0===e.indexOf(t)?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,n)=>e===t.length&&this.isInsideToolbar&&n===Si,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===Ci,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let n=0;if(n=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(n,t,e.key))this.moveRightOffGroup();else for(n===t.length&&(n=0);n<t.length&&t.length>1;){if(!t[n].disabled){this.moveToRadioByIndex(t,n);break}if(this.focusedRadio&&n===t.indexOf(this.focusedRadio))break;if(n+1>=t.length){if(this.isInsideToolbar)break;n=0}else n+=1}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let n=0;if(n=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,n=n<0?t.length-1:n,this.shouldMoveOffGroupToTheLeft(t,e.key))this.moveLeftOffGroup();else for(;n>=0&&t.length>1;){if(!t[n].disabled){this.moveToRadioByIndex(t,n);break}if(this.focusedRadio&&n===t.indexOf(this.focusedRadio))break;n-1<0?n=t.length-1:n-=1}},this.keydownHandler=e=>{const t=e.key;if(t in Mi&&this.isInsideFoundationToolbar)return!0;switch(t){case Ti:this.checkFocusedRadio();break;case Si:case xi:this.direction===Oa.ltr?this.moveRight(e):this.moveLeft(e);break;case Ci:case ki:this.direction===Oa.ltr?this.moveLeft(e):this.moveRight(e);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1}))}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.disabled?e.disabled=!0:e.disabled=!1}))}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.setAttribute("name",this.name)}))}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)})),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return null!==(e=this.parentToolbar)&&void 0!==e&&e}get isInsideFoundationToolbar(){var e;return!!(null===(e=this.parentToolbar)||void 0===e?void 0:e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=(e=>{const t=e.closest("[dir]");return null!==t&&"rtl"===t.dir?Oa.rtl:Oa.ltr})(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach((e=>{e.removeEventListener("change",this.radioChangeHandler)}))}setupRadioButtons(){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=e?e.length:0;if(t>1){e[t-1].checked=!0}let n=!1;if(this.slottedRadioButtons.forEach((e=>{void 0!==this.name&&e.setAttribute("name",this.name),this.disabled&&(e.disabled=!0),this.readOnly&&(e.readOnly=!0),this.value&&this.value===e.value?(this.selectedRadio=e,this.focusedRadio=e,e.checked=!0,e.setAttribute("tabindex","0"),n=!0):(this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"),e.checked=!1),e.addEventListener("change",this.radioChangeHandler)})),void 0===this.value&&this.slottedRadioButtons.length>0){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=null!==e?e.length:0;if(t>0&&!n){const n=e[t-1];n.checked=!0,this.focusedRadio=n,n.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}on([Qt({attribute:"readonly",mode:"boolean"})],Ia.prototype,"readOnly",void 0),on([Qt({attribute:"disabled",mode:"boolean"})],Ia.prototype,"disabled",void 0),on([Qt],Ia.prototype,"name",void 0),on([Qt],Ia.prototype,"value",void 0),on([Qt],Ia.prototype,"orientation",void 0),on([Nt],Ia.prototype,"childItems",void 0),on([Nt],Ia.prototype,"slottedRadioButtons",void 0);const Ma=class extends Ia{connectedCallback(){super.connectedCallback();const e=this.querySelector("label");if(e){const t="radio-group-"+Math.random().toString(16).slice(2);e.setAttribute("id",t),this.setAttribute("aria-labelledby",t)}}}.compose({baseName:"radio-group",template:(e,t)=>Do`
    <template
        role="radiogroup"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @click="${(e,t)=>e.clickHandler(t.event)}"
        @keydown="${(e,t)=>e.keydownHandler(t.event)}"
        @focusout="${(e,t)=>e.focusOutHandler(t.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${e=>e.orientation===Us?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${Ui({property:"slottedRadioButtons",filter:Gi("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:(e,t)=>Bo`
	${Go("flex")} :host {
		align-items: flex-start;
		margin: calc(${mr} * 1px) 0;
		flex-direction: column;
	}
	.positioning-region {
		display: flex;
		flex-wrap: wrap;
	}
	:host([orientation='vertical']) .positioning-region {
		flex-direction: column;
	}
	:host([orientation='horizontal']) .positioning-region {
		flex-direction: row;
	}
	::slotted([slot='label']) {
		color: ${yr};
		font-size: ${Cr};
		margin: calc(${mr} * 1px) 0;
	}
`});const Pa=class extends lo{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}}.compose({baseName:"tag",template:No,styles:(e,t)=>Bo`
	${Go("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${vr};
		font-size: ${kr};
		line-height: ${Tr};
	}
	.control {
		background-color: ${Mr};
		border: calc(${hr} * 1px) solid ${zr};
		border-radius: ${ui};
		color: ${Pr};
		padding: calc(${mr} * 0.5px) calc(${mr} * 1px);
		text-transform: uppercase;
	}
`});class za extends Qn{}class $a extends(Di(za)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Aa="text";class Da extends $a{constructor(){super(...arguments),this.type=Aa}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&zt.queueUpdate((()=>{this.focus()}))}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}on([Qt({attribute:"readonly",mode:"boolean"})],Da.prototype,"readOnly",void 0),on([Qt({mode:"boolean"})],Da.prototype,"autofocus",void 0),on([Qt],Da.prototype,"placeholder",void 0),on([Qt],Da.prototype,"type",void 0),on([Qt],Da.prototype,"list",void 0),on([Qt({converter:Yt})],Da.prototype,"maxlength",void 0),on([Qt({converter:Yt})],Da.prototype,"minlength",void 0),on([Qt],Da.prototype,"pattern",void 0),on([Qt({converter:Yt})],Da.prototype,"size",void 0),on([Qt({mode:"boolean"})],Da.prototype,"spellcheck",void 0),on([Nt],Da.prototype,"defaultSlottedNodes",void 0);class Na{}yi(Na,pi),yi(Da,gi,Na);class La extends Qn{}class Ha extends(Di(La)){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const Ba="none";class Fa extends Ha{constructor(){super(...arguments),this.resize=Ba,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}on([Qt({mode:"boolean"})],Fa.prototype,"readOnly",void 0),on([Qt],Fa.prototype,"resize",void 0),on([Qt({mode:"boolean"})],Fa.prototype,"autofocus",void 0),on([Qt({attribute:"form"})],Fa.prototype,"formId",void 0),on([Qt],Fa.prototype,"list",void 0),on([Qt({converter:Yt})],Fa.prototype,"maxlength",void 0),on([Qt({converter:Yt})],Fa.prototype,"minlength",void 0),on([Qt],Fa.prototype,"name",void 0),on([Qt],Fa.prototype,"placeholder",void 0),on([Qt({converter:Yt,mode:"fromView"})],Fa.prototype,"cols",void 0),on([Qt({converter:Yt,mode:"fromView"})],Fa.prototype,"rows",void 0),on([Qt({mode:"boolean"})],Fa.prototype,"spellcheck",void 0),on([Nt],Fa.prototype,"defaultSlottedNodes",void 0),yi(Fa,Na);const Ga=class extends Fa{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text area")}}.compose({baseName:"text-area",template:(e,t)=>Do`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
            ${e=>e.resize!==Ba?`resize-${e.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ui("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${e=>e.autofocus}"
            cols="${e=>e.cols}"
            ?disabled="${e=>e.disabled}"
            form="${e=>e.form}"
            list="${e=>e.list}"
            maxlength="${e=>e.maxlength}"
            minlength="${e=>e.minlength}"
            name="${e=>e.name}"
            placeholder="${e=>e.placeholder}"
            ?readonly="${e=>e.readOnly}"
            ?required="${e=>e.required}"
            rows="${e=>e.rows}"
            ?spellcheck="${e=>e.spellcheck}"
            :value="${e=>e.value}"
            aria-atomic="${e=>e.ariaAtomic}"
            aria-busy="${e=>e.ariaBusy}"
            aria-controls="${e=>e.ariaControls}"
            aria-current="${e=>e.ariaCurrent}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-details="${e=>e.ariaDetails}"
            aria-disabled="${e=>e.ariaDisabled}"
            aria-errormessage="${e=>e.ariaErrormessage}"
            aria-flowto="${e=>e.ariaFlowto}"
            aria-haspopup="${e=>e.ariaHaspopup}"
            aria-hidden="${e=>e.ariaHidden}"
            aria-invalid="${e=>e.ariaInvalid}"
            aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
            aria-label="${e=>e.ariaLabel}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-live="${e=>e.ariaLive}"
            aria-owns="${e=>e.ariaOwns}"
            aria-relevant="${e=>e.ariaRelevant}"
            aria-roledescription="${e=>e.ariaRoledescription}"
            @input="${(e,t)=>e.handleTextInput()}"
            @change="${e=>e.handleChange()}"
            ${mi("control")}
        ></textarea>
    </template>
`,styles:(e,t)=>Bo`
	${Go("inline-block")} :host {
		font-family: ${vr};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${ri};
		background: ${oi};
		border-radius: calc(${fr} * 1px);
		border: calc(${hr} * 1px) solid ${ti};
		font: inherit;
		font-size: ${Cr};
		line-height: ${Sr};
		padding: calc(${mr} * 2px + 1px);
		width: 100%;
		min-width: ${xr};
		resize: none;
	}
	.control:hover:enabled {
		background: ${oi};
		border-color: ${ti};
	}
	.control:active:enabled {
		background: ${oi};
		border-color: ${br};
	}
	.control:hover,
	.control:${qi},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${Rr};
		height: ${_r};
	}
	.control::-webkit-scrollbar-corner {
		background: ${oi};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${Er};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${Or};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${Ir};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${br};
	}
	:host([resize='both']) .control {
		resize: both;
	}
	:host([resize='horizontal']) .control {
		resize: horizontal;
	}
	:host([resize='vertical']) .control {
		resize: vertical;
	}
	.label {
		display: block;
		color: ${yr};
		cursor: pointer;
		font-size: ${Cr};
		line-height: ${Sr};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Ki};
	}
	:host([disabled]) {
		opacity: ${gr};
	}
	:host([disabled]) .control {
		border-color: ${ti};
	}
`,shadowOptions:{delegatesFocus:!0}});function Wa(e,t,n){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}const ja=class extends Da{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}}.compose({baseName:"text-field",template:(e,t)=>Do`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${Ui({property:"defaultSlottedNodes",filter:Wa})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${vi(0,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${mi("control")}
            />
            ${bi(0,t)}
        </div>
    </template>
`,styles:(e,t)=>Bo`
	${Go("inline-block")} :host {
		font-family: ${vr};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${ri};
		background: ${oi};
		border-radius: calc(${fr} * 1px);
		border: calc(${hr} * 1px) solid ${ti};
		height: calc(${wr} * 1px);
		min-width: ${xr};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${mr} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${mr} * 2px + 1px);
		font-size: ${Cr};
		line-height: ${Sr};
	}
	.control:hover,
	.control:${qi},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${yr};
		cursor: pointer;
		font-size: ${Cr};
		line-height: ${Sr};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${mr} * 4px);
		height: calc(${mr} * 4px);
	}
	.start {
		margin-inline-start: calc(${mr} * 2px);
	}
	.end {
		margin-inline-end: calc(${mr} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${oi};
		border-color: ${ti};
	}
	:host(:active:not([disabled])) .root {
		background: ${oi};
		border-color: ${br};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${br};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Ki};
	}
	:host([disabled]) {
		opacity: ${gr};
	}
	:host([disabled]) .control {
		border-color: ${ti};
	}
`,shadowOptions:{delegatesFocus:!0}}),Ua=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Va=new Map,Za=new Map;let qa=null;const Ka=wn.createInterface((e=>e.cachedCallback((e=>(null===qa&&(qa=new Xa(null,e)),qa))))),Ya=Object.freeze({tagFor:e=>Za.get(e),responsibleFor(e){const t=e.$$designSystem$$;if(t)return t;return wn.findResponsibleContainer(e).get(Ka)},getOrCreate(e){if(!e)return null===qa&&(qa=wn.getOrCreateDOMContainer().get(Ka)),qa;const t=e.$$designSystem$$;if(t)return t;const n=wn.getOrCreateDOMContainer(e);if(n.has(Ka,!1))return n.get(Ka);{const t=new Xa(e,n);return n.register(Bn.instance(Ka,t)),t}}});class Xa{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Ua.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,n=[],o=this.disambiguate,r=this.shadowRootMode,i={elementPrefix:this.prefix,tryDefineElement(e,i,s){const a=function(e,t,n){return"string"==typeof e?{name:e,type:t,callback:n}:e}(e,i,s),{name:l,callback:c,baseClass:d}=a;let{type:u}=a,h=l,p=Va.get(h),f=!0;for(;p;){const e=o(h,u,p);switch(e){case Ua.ignoreDuplicate:return;case Ua.definitionCallbackOnly:f=!1,p=void 0;break;default:h=e,p=Va.get(h)}}f&&((Za.has(u)||u===Qn)&&(u=class extends u{}),Va.set(h,u),Za.set(u,h),d&&Za.set(d,h)),n.push(new Qa(t,h,u,r,c,f))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&sr.registerRoot(this.designTokenRoot)),t.registerWithContext(i,...e);for(const e of n)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class Qa{constructor(e,t,n,o,r,i){this.container=e,this.name=t,this.type=n,this.shadowRootMode=o,this.callback=r,this.willDefine=i,this.definition=null}definePresentation(e){Yn.define(this.name,e,this.container)}defineElement(e){this.definition=new nn(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return Ya.tagFor(e)}}const{wrap:Ja}=ao(e,Ya.getOrCreate(el).withPrefix("vscode"));var el;Ja(hi(),{name:"vscode-badge"}),Ja(ts(),{name:"vscode-button"});const tl=Ja(is(),{name:"vscode-checkbox",events:{onChange:"change"}}),nl=(Ja(Gs(),{name:"vscode-data-grid"}),Ja(js(),{name:"vscode-data-grid-cell"}),Ja(Ws(),{name:"vscode-data-grid-row"}),Ja(qs(),{name:"vscode-divider"}),Ja(ua(),{name:"vscode-dropdown",events:{onChange:"change"}}),Ja(fa(),{name:"vscode-link"}),Ja(ma(),{name:"vscode-option"}),Ja(wa(),{name:"vscode-panels",events:{onChange:"change"}}),Ja(xa(),{name:"vscode-panel-tab"}),Ja(Ca(),{name:"vscode-panel-view"}),Ja(ka(),{name:"vscode-progress-ring"}),Ja(Ea(),{name:"vscode-radio",events:{onChange:"change"}})),ol=Ja(Ma(),{name:"vscode-radio-group",events:{onChange:"change"}}),rl=(Ja(Pa(),{name:"vscode-tag"}),Ja(Ga(),{name:"vscode-text-area",events:{onChange:"change",onInput:"input"}}),Ja(ja(),{name:"vscode-text-field",events:{onChange:"change",onInput:"input"}}),navigator?.userAgentData?.platform),il=navigator.userAgent,sl="Linux"===rl||il.indexOf("Linux")>=0,al="macOS"===rl||il.indexOf("Macintosh")>=0,ll="Windows"===rl||il.indexOf("Windows")>=0;var cl=(e=>(e.Absolute="absolute",e.Relative="relative",e))(cl||{});var dl=(e=>(e.Private="private",e.Public="public",e.Local="local",e))(dl||{});const ul=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,hl=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,pl=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let fl;const ml=new Map;let gl,bl,vl;const yl=new Map;function wl(e,t){const n=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,o,r,i]of pl){const s=Math.abs(n);if(s>=o||1e3===o){if(t){if(null==fl&&(null!=vl?fl=vl.resolvedOptions().locale:null!=bl?fl=bl.resolvedOptions().locale:(vl=new Intl.RelativeTimeFormat(gl,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),fl=vl.resolvedOptions().locale)),"en"===fl||fl?.startsWith("en-")){return`${Math.round(s/r)}${i}`}return null==vl&&(vl=new Intl.RelativeTimeFormat(gl,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),vl.format(Math.round(n/r),e)}return null==bl&&(bl=new Intl.RelativeTimeFormat(gl,{localeMatcher:"best fit",numeric:"auto",style:"long"})),bl.format(Math.round(n/r),e)}}return""}function xl(e,t,n,o=!0){const r=`${n??""}:${t=t??void 0}`;let i=ml.get(r);if(null==i){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=hl.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:n}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:n||void 0}}const n={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(ul))if(null!=t)for(const e in t){const o=t[e];if(null!=o)switch(e){case"year":n.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:n.month="long";break;case 3:n.month="short";break;case 2:n.month="2-digit";break;case 1:n.month="numeric"}break;case"day":n.day="DD"===o?"2-digit":"numeric";break;case"weekday":switch(o.length){case 4:n.weekday="long";break;case 3:n.weekday="short";break;case 2:n.weekday="narrow"}break;case"hour":n.hour=2===o.length?"2-digit":"numeric",n.hour12="hh"===o||"h"===o;break;case"minute":n.minute=2===o.length?"2-digit":"numeric";break;case"second":n.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":n.fractionalSecondDigits=3;break;case"dayPeriod":n.dayPeriod="narrow",n.hour12=!0,n.hourCycle="h12";break;case"timeZoneName":n.timeZoneName=2===o.length?"long":"short"}}return n}(t);let s;s=null==n?gl:"system"===n?void 0:[n],i=new Intl.DateTimeFormat(s,e),o&&ml.set(r,i)}if(null==t||hl.test(t))return i.format(e);function s(e){const t=`${n??""}:time:${e}`;let r=ml.get(t);if(null==r){const i={localeMatcher:"best fit",timeStyle:e};let s;s=null==n?gl:"system"===n?void 0:[n],r=new Intl.DateTimeFormat(s,i),o&&ml.set(t,r)}return r}const a=i.formatToParts(e);return t.replace(ul,((t,n,o,r,i,l,c,d,u,h,p,f,m,g,b)=>{if(null!=n)return n.substring(1,n.length-1);for(const t in b){const n=b[t];if(null==n)continue;const o=a.find((e=>e.type===t));if("Do"===n&&"day"===o?.type)return Sl(Number(o.value));if("a"===n&&"dayPeriod"===o?.type){return` ${(s("short").formatToParts(e).find((e=>"dayPeriod"===e.type))??o)?.value??""}`}return o?.value??""}return""}))}const Cl=["th","st","nd","rd"];function Sl(e){const t=e%100;return`${e}${Cl[(t-20)%10]??Cl[t]??Cl[0]}`}function kl(e,t,n){null==t&&(t="decimal");const o=`${n??""}:${t}`;let r=yl.get(o);if(null==r){const e={localeMatcher:"best fit",style:t};let i;i=null==n?gl:"system"===n?void 0:[n],r=new Intl.NumberFormat(i,e),yl.set(o,r)}return r.format(e)}var Tl=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Free=0]="Free",e[e.FreeInPreviewTrial=1]="FreeInPreviewTrial",e[e.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",e[e.FreePlusInTrial=3]="FreePlusInTrial",e[e.FreePlusTrialExpired=4]="FreePlusTrialExpired",e[e.Paid=5]="Paid",e))(Tl||{});function Rl(e,t){return _l(e.plan.effective.expiresOn,t)}function _l(e,t){return null!=e?function(e,t,n){const o=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime());switch(n){case"days":return Math.floor(o/864e5);case"hours":return Math.floor(o/36e5);case"minutes":return Math.floor(o/6e4);case"seconds":return Math.floor(o/1e3);default:return o}}(Date.now(),new Date(e),t):void 0}function El(e){const t=.001*performance.now();let n=Math.floor(t),o=Math.floor(t%1*1e9);return void 0!==e&&(n-=e[0],o-=e[1],o<0&&(n--,o+=1e9)),[n,o]}const{fromCharCode:Ol}=String;new TextEncoder;new Intl.Collator(void 0,{sensitivity:"accent"});new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}).compare;function Il(e){const[t,n]=El(e);return 1e3*t+Math.floor(n/1e6)}Object.getPrototypeOf((async function(){})).constructor;function Ml(e,t,n){if(null==n)return`${t} ${e}${1===t?"":"s"}`;const o=1===t?e:n.plural??`${e}s`;return n.only?o:`${0===t?n.zero??t:n.format?.(t)??t}${n.infix??" "}${o}`}const{wrap:Pl}=ao(t()),zl=Bo`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`;var $l=Object.defineProperty,Al=Object.getOwnPropertyDescriptor;const Dl=Do`
	<template role="listbox">
		<slot></slot>
	</template>
`,Nl=Bo`
	${zl}

	:host {
		width: max-content;
		background-color: var(--vscode-menu-background);
		border: 1px solid var(--vscode-menu-border);
	}
`;let Ll=class extends dn{};Ll=((e,t,n,o)=>{for(var r,i=o>1?void 0:o?Al(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&$l(t,n,i),i})([un({name:"menu-list",template:Dl,styles:Nl})],Ll);var Hl=Object.defineProperty,Bl=Object.getOwnPropertyDescriptor,Fl=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?Bl(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&Hl(t,n,i),i};const Gl=Do`
	<template tabindex="${e=>e.isInteractive?"0":null}" ?disabled="${e=>e.disabled}">
		<slot></slot>
	</template>
`,Wl=Bo`
	${zl}

	:host {
		display: block;
		font-family: inherit;
		border: none;
		padding: 0 0.6rem;
		cursor: pointer;
		color: var(--vscode-menu-foreground);
		background-color: var(--vscode-menu-background);
		text-align: left;
		height: auto;
		line-height: 2.2rem;
	}

	:host([role='option']:hover) {
		color: var(--vscode-menu-selectionForeground);
		background-color: var(--vscode-menu-selectionBackground);
	}

	:host([disabled]) {
		pointer-events: none;
		cursor: default;
		opacity: 0.5;
	}

	:host([aria-selected='true']) {
		opacity: 1;
		color: var(--vscode-menu-selectionForeground);
		background-color: var(--vscode-menu-background);
	}
`;let jl=class extends dn{constructor(){super(...arguments),this.disabled=!1,this.role="option"}get isInteractive(){return!this.disabled&&"option"===this.role}};Fl([Qt({mode:"boolean"})],jl.prototype,"disabled",2),Fl([Qt],jl.prototype,"role",2),Fl([Lt],jl.prototype,"isInteractive",1),jl=Fl([un({name:"menu-item",template:Gl,styles:Wl})],jl);var Ul=Object.defineProperty,Vl=Object.getOwnPropertyDescriptor;const Zl=Do`
	<template>
		<slot></slot>
	</template>
`,ql=Bo`
	${zl}

	:host {
		display: block;
		text-transform: uppercase;
		font-size: 0.84em;
		line-height: 2.2rem;
		padding-left: 0.6rem;
		padding-right: 0.6rem;
		margin: 0px;
		color: var(--vscode-menu-foreground);
		opacity: 0.6;
	}
`;let Kl=class extends dn{};Kl=((e,t,n,o)=>{for(var r,i=o>1?void 0:o?Vl(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&Ul(t,n,i),i})([un({name:"menu-label",template:Zl,styles:ql})],Kl);var Yl=Object.defineProperty,Xl=Object.getOwnPropertyDescriptor;const Ql=Do``,Jl=Bo`
	${zl}

	:host {
		display: block;
		height: 0;
		margin: 0.6rem;
		border-top: 0.1rem solid var(--vscode-menu-separatorBackground);
	}
`;let ec=class extends dn{};ec=((e,t,n,o)=>{for(var r,i=o>1?void 0:o?Xl(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&Yl(t,n,i),i})([un({name:"menu-divider",template:Ql,styles:Jl})],ec);const tc=Pl(ec),nc=Pl(jl),oc=Pl(Kl),rc=Pl(Ll);function ic(...e){return e.some((e=>(e?.length??0)>0))}function sc(e){return t=>t.nodeType===e}var ac=Object.defineProperty,lc=Object.getOwnPropertyDescriptor,cc=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?lc(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&ac(t,n,i),i};const dc=Do`
	<template role="combobox">
		<slot ${Ui({property:"triggerNodes",filter:sc(Node.ELEMENT_NODE)})} name="trigger"></slot>
		<slot ${Ui({property:"contentNodes",filter:sc(Node.ELEMENT_NODE)})} name="content"></slot>
	</template>
`,uc=Bo`
	${zl}

	:host {
		position: relative;
	}

	slot[name='content']::slotted(*) {
		position: absolute;
		left: 0;
		top: 100%;
		z-index: 10000;
	}

	:host(:not([open])) slot[name='content']::slotted(*) {
		display: none;
	}
`;let hc=class extends dn{constructor(){super(...arguments),this.open=!1,this.isTrackingOutside=!1}get triggerNode(){if(ic(this.triggerNodes))return this.triggerNodes[0]}get contentNode(){if(ic(this.contentNodes))return this.contentNodes[0]}connectedCallback(){super.connectedCallback(),this.updateToggle(),this.addEventListener("click",this.handleToggle.bind(this),!1)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleToggle.bind(this),!1),this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerNode)&&(this.open=!this.open,this.updateToggle())}updateToggle(){null!=this.triggerNode&&(this.triggerNode.ariaExpanded=this.open.toString()),this.open&&(null!=this.contentNode&&window.requestAnimationFrame((()=>{this.contentNode?.focus()})),this.trackOutside())}handleDocumentEvent(e){if(!1===this.open)return;e.composedPath().includes(this)||(this.open=!1,this.disposeTrackOutside())}trackOutside(){if(this.isTrackingOutside||!this.open)return;this.isTrackingOutside=!0;const e=this.handleDocumentEvent.bind(this);document.addEventListener("click",e,!1),document.addEventListener("focusin",e,!1)}disposeTrackOutside(){if(!this.isTrackingOutside)return;this.isTrackingOutside=!1;const e=this.handleDocumentEvent.bind(this);document.removeEventListener("click",e,!1),window.removeEventListener("focusin",e,!1)}};cc([Qt({mode:"boolean"})],hc.prototype,"open",2),cc([Nt],hc.prototype,"triggerNodes",2),cc([Nt],hc.prototype,"contentNodes",2),cc([Lt],hc.prototype,"triggerNode",1),cc([Lt],hc.prototype,"contentNode",1),hc=cc([un({name:"pop-menu",template:dc,styles:uc})],hc);const pc=Pl(hc);var fc=Object.defineProperty,mc=Object.getOwnPropertyDescriptor,gc=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?mc(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&fc(t,n,i),i};const bc=Do`
	<template>
		<div class="top" ?hidden="${e=>!e.hasTopNodes}">
			<slot ${Ui("typeNodes")} name="type"></slot>
			<slot ${Ui("actionsNodes")} name="actions"></slot>
		</div>
		<div class="heading" ?hidden="${e=>!e.hasHeadingNodes}">
			<slot ${Ui("headingNodes")} name="heading"></slot>
		</div>
		<div class="content"><slot></slot></div>
		${da((e=>e.caret),Do`<span class="caret"></span>`)}
	</template>
`,vc=Bo`
	${zl}

	:host {
		position: absolute;
		width: var(--popover-width, 100%);
		max-width: var(--popover-max-width, 30rem);
		padding: 1.2rem 1.2rem 1.2rem;
		/* update with a standardized z-index */
		z-index: 10;

		background-color: var(--popover-bg);

		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	:host([caret]:not([placement~='bottom'])) {
		transform: translateY(0.8rem);
	}

	:host([caret][placement~='bottom']) {
		transform: translateY(-0.8rem);
	}

	.top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		opacity: 0.5;
		margin-top: -0.4rem;
	}

	.heading {
		font-weight: 600;
	}

	.caret {
		position: absolute;
		width: 0;
		height: 0;
		border-left: 0.8rem solid transparent;
		border-right: 0.8rem solid transparent;
		border-bottom: 0.8rem solid var(--popover-bg);
	}

	:host(:not([placement~='bottom'])) .caret {
		bottom: 100%;
	}

	:host([placement~='bottom']) .caret {
		top: 100%;
		transform: rotate(180deg);
	}

	:host(:not([placement~='end'])) .caret {
		left: 1.2rem;
	}

	:host([placement~='end']) .caret {
		right: 1.2rem;
	}
`;let yc=class extends dn{constructor(){super(...arguments),this.open=!1,this.caret=!0}get hasTopNodes(){return ic(this.typeNodes,this.actionsNodes)}get hasHeadingNodes(){return ic(this.headingNodes)}};gc([Qt({mode:"boolean"})],yc.prototype,"open",2),gc([Qt({mode:"boolean"})],yc.prototype,"caret",2),gc([Qt],yc.prototype,"placement",2),gc([Nt],yc.prototype,"typeNodes",2),gc([Nt],yc.prototype,"actionsNodes",2),gc([Nt],yc.prototype,"headingNodes",2),gc([Lt],yc.prototype,"hasTopNodes",1),gc([Lt],yc.prototype,"hasHeadingNodes",1),yc=gc([un({name:"pop-over",template:bc,styles:vc})],yc);const wc=Pl(yc),xc={toView:function(e){return e.toString()},fromView:function(e){return parseInt(e,10)}};var Cc=Object.defineProperty,Sc=Object.getOwnPropertyDescriptor,kc=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?Sc(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&Cc(t,n,i),i};const Tc=Bo`
	:host {
		font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
		display: inline-block;
		text-decoration: none;
		text-rendering: auto;
		text-align: center;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		color: inherit;
		vertical-align: text-bottom;
		letter-spacing: normal;
	}

	:host([icon='add']):before {
		content: '\\ea60';
	}
	:host([icon='plus']):before {
		content: '\\ea60';
	}
	:host([icon='gist-new']):before {
		content: '\\ea60';
	}
	:host([icon='repo-create']):before {
		content: '\\ea60';
	}
	:host([icon='lightbulb']):before {
		content: '\\ea61';
	}
	:host([icon='light-bulb']):before {
		content: '\\ea61';
	}
	:host([icon='repo']):before {
		content: '\\ea62';
	}
	:host([icon='repo-delete']):before {
		content: '\\ea62';
	}
	:host([icon='gist-fork']):before {
		content: '\\ea63';
	}
	:host([icon='repo-forked']):before {
		content: '\\ea63';
	}
	:host([icon='git-pull-request']):before {
		content: '\\ea64';
	}
	:host([icon='git-pull-request-abandoned']):before {
		content: '\\ea64';
	}
	:host([icon='record-keys']):before {
		content: '\\ea65';
	}
	:host([icon='keyboard']):before {
		content: '\\ea65';
	}
	:host([icon='tag']):before {
		content: '\\ea66';
	}
	:host([icon='tag-add']):before {
		content: '\\ea66';
	}
	:host([icon='tag-remove']):before {
		content: '\\ea66';
	}
	:host([icon='person']):before {
		content: '\\ea67';
	}
	:host([icon='person-follow']):before {
		content: '\\ea67';
	}
	:host([icon='person-outline']):before {
		content: '\\ea67';
	}
	:host([icon='person-filled']):before {
		content: '\\ea67';
	}
	:host([icon='git-branch']):before {
		content: '\\ea68';
	}
	:host([icon='git-branch-create']):before {
		content: '\\ea68';
	}
	:host([icon='git-branch-delete']):before {
		content: '\\ea68';
	}
	:host([icon='source-control']):before {
		content: '\\ea68';
	}
	:host([icon='mirror']):before {
		content: '\\ea69';
	}
	:host([icon='mirror-public']):before {
		content: '\\ea69';
	}
	:host([icon='star']):before {
		content: '\\ea6a';
	}
	:host([icon='star-add']):before {
		content: '\\ea6a';
	}
	:host([icon='star-delete']):before {
		content: '\\ea6a';
	}
	:host([icon='star-empty']):before {
		content: '\\ea6a';
	}
	:host([icon='comment']):before {
		content: '\\ea6b';
	}
	:host([icon='comment-add']):before {
		content: '\\ea6b';
	}
	:host([icon='alert']):before {
		content: '\\ea6c';
	}
	:host([icon='warning']):before {
		content: '\\ea6c';
	}
	:host([icon='search']):before {
		content: '\\ea6d';
	}
	:host([icon='search-save']):before {
		content: '\\ea6d';
	}
	:host([icon='log-out']):before {
		content: '\\ea6e';
	}
	:host([icon='sign-out']):before {
		content: '\\ea6e';
	}
	:host([icon='log-in']):before {
		content: '\\ea6f';
	}
	:host([icon='sign-in']):before {
		content: '\\ea6f';
	}
	:host([icon='eye']):before {
		content: '\\ea70';
	}
	:host([icon='eye-unwatch']):before {
		content: '\\ea70';
	}
	:host([icon='eye-watch']):before {
		content: '\\ea70';
	}
	:host([icon='circle-filled']):before {
		content: '\\ea71';
	}
	:host([icon='primitive-dot']):before {
		content: '\\ea71';
	}
	:host([icon='close-dirty']):before {
		content: '\\ea71';
	}
	:host([icon='debug-breakpoint']):before {
		content: '\\ea71';
	}
	:host([icon='debug-breakpoint-disabled']):before {
		content: '\\ea71';
	}
	:host([icon='debug-hint']):before {
		content: '\\ea71';
	}
	:host([icon='primitive-square']):before {
		content: '\\ea72';
	}
	:host([icon='edit']):before {
		content: '\\ea73';
	}
	:host([icon='pencil']):before {
		content: '\\ea73';
	}
	:host([icon='info']):before {
		content: '\\ea74';
	}
	:host([icon='issue-opened']):before {
		content: '\\ea74';
	}
	:host([icon='gist-private']):before {
		content: '\\ea75';
	}
	:host([icon='git-fork-private']):before {
		content: '\\ea75';
	}
	:host([icon='lock']):before {
		content: '\\ea75';
	}
	:host([icon='mirror-private']):before {
		content: '\\ea75';
	}
	:host([icon='close']):before {
		content: '\\ea76';
	}
	:host([icon='remove-close']):before {
		content: '\\ea76';
	}
	:host([icon='x']):before {
		content: '\\ea76';
	}
	:host([icon='repo-sync']):before {
		content: '\\ea77';
	}
	:host([icon='sync']):before {
		content: '\\ea77';
	}
	:host([icon='clone']):before {
		content: '\\ea78';
	}
	:host([icon='desktop-download']):before {
		content: '\\ea78';
	}
	:host([icon='beaker']):before {
		content: '\\ea79';
	}
	:host([icon='microscope']):before {
		content: '\\ea79';
	}
	:host([icon='vm']):before {
		content: '\\ea7a';
	}
	:host([icon='device-desktop']):before {
		content: '\\ea7a';
	}
	:host([icon='file']):before {
		content: '\\ea7b';
	}
	:host([icon='file-text']):before {
		content: '\\ea7b';
	}
	:host([icon='more']):before {
		content: '\\ea7c';
	}
	:host([icon='ellipsis']):before {
		content: '\\ea7c';
	}
	:host([icon='kebab-horizontal']):before {
		content: '\\ea7c';
	}
	:host([icon='mail-reply']):before {
		content: '\\ea7d';
	}
	:host([icon='reply']):before {
		content: '\\ea7d';
	}
	:host([icon='organization']):before {
		content: '\\ea7e';
	}
	:host([icon='organization-filled']):before {
		content: '\\ea7e';
	}
	:host([icon='organization-outline']):before {
		content: '\\ea7e';
	}
	:host([icon='new-file']):before {
		content: '\\ea7f';
	}
	:host([icon='file-add']):before {
		content: '\\ea7f';
	}
	:host([icon='new-folder']):before {
		content: '\\ea80';
	}
	:host([icon='file-directory-create']):before {
		content: '\\ea80';
	}
	:host([icon='trash']):before {
		content: '\\ea81';
	}
	:host([icon='trashcan']):before {
		content: '\\ea81';
	}
	:host([icon='history']):before {
		content: '\\ea82';
	}
	:host([icon='clock']):before {
		content: '\\ea82';
	}
	:host([icon='folder']):before {
		content: '\\ea83';
	}
	:host([icon='file-directory']):before {
		content: '\\ea83';
	}
	:host([icon='symbol-folder']):before {
		content: '\\ea83';
	}
	:host([icon='logo-github']):before {
		content: '\\ea84';
	}
	:host([icon='mark-github']):before {
		content: '\\ea84';
	}
	:host([icon='github']):before {
		content: '\\ea84';
	}
	:host([icon='terminal']):before {
		content: '\\ea85';
	}
	:host([icon='console']):before {
		content: '\\ea85';
	}
	:host([icon='repl']):before {
		content: '\\ea85';
	}
	:host([icon='zap']):before {
		content: '\\ea86';
	}
	:host([icon='symbol-event']):before {
		content: '\\ea86';
	}
	:host([icon='error']):before {
		content: '\\ea87';
	}
	:host([icon='stop']):before {
		content: '\\ea87';
	}
	:host([icon='variable']):before {
		content: '\\ea88';
	}
	:host([icon='symbol-variable']):before {
		content: '\\ea88';
	}
	:host([icon='array']):before {
		content: '\\ea8a';
	}
	:host([icon='symbol-array']):before {
		content: '\\ea8a';
	}
	:host([icon='symbol-module']):before {
		content: '\\ea8b';
	}
	:host([icon='symbol-package']):before {
		content: '\\ea8b';
	}
	:host([icon='symbol-namespace']):before {
		content: '\\ea8b';
	}
	:host([icon='symbol-object']):before {
		content: '\\ea8b';
	}
	:host([icon='symbol-method']):before {
		content: '\\ea8c';
	}
	:host([icon='symbol-function']):before {
		content: '\\ea8c';
	}
	:host([icon='symbol-constructor']):before {
		content: '\\ea8c';
	}
	:host([icon='symbol-boolean']):before {
		content: '\\ea8f';
	}
	:host([icon='symbol-null']):before {
		content: '\\ea8f';
	}
	:host([icon='symbol-numeric']):before {
		content: '\\ea90';
	}
	:host([icon='symbol-number']):before {
		content: '\\ea90';
	}
	:host([icon='symbol-structure']):before {
		content: '\\ea91';
	}
	:host([icon='symbol-struct']):before {
		content: '\\ea91';
	}
	:host([icon='symbol-parameter']):before {
		content: '\\ea92';
	}
	:host([icon='symbol-type-parameter']):before {
		content: '\\ea92';
	}
	:host([icon='symbol-key']):before {
		content: '\\ea93';
	}
	:host([icon='symbol-text']):before {
		content: '\\ea93';
	}
	:host([icon='symbol-reference']):before {
		content: '\\ea94';
	}
	:host([icon='go-to-file']):before {
		content: '\\ea94';
	}
	:host([icon='symbol-enum']):before {
		content: '\\ea95';
	}
	:host([icon='symbol-value']):before {
		content: '\\ea95';
	}
	:host([icon='symbol-ruler']):before {
		content: '\\ea96';
	}
	:host([icon='symbol-unit']):before {
		content: '\\ea96';
	}
	:host([icon='activate-breakpoints']):before {
		content: '\\ea97';
	}
	:host([icon='archive']):before {
		content: '\\ea98';
	}
	:host([icon='arrow-both']):before {
		content: '\\ea99';
	}
	:host([icon='arrow-down']):before {
		content: '\\ea9a';
	}
	:host([icon='arrow-left']):before {
		content: '\\ea9b';
	}
	:host([icon='arrow-right']):before {
		content: '\\ea9c';
	}
	:host([icon='arrow-small-down']):before {
		content: '\\ea9d';
	}
	:host([icon='arrow-small-left']):before {
		content: '\\ea9e';
	}
	:host([icon='arrow-small-right']):before {
		content: '\\ea9f';
	}
	:host([icon='arrow-small-up']):before {
		content: '\\eaa0';
	}
	:host([icon='arrow-up']):before {
		content: '\\eaa1';
	}
	:host([icon='bell']):before {
		content: '\\eaa2';
	}
	:host([icon='bold']):before {
		content: '\\eaa3';
	}
	:host([icon='book']):before {
		content: '\\eaa4';
	}
	:host([icon='bookmark']):before {
		content: '\\eaa5';
	}
	:host([icon='debug-breakpoint-conditional-unverified']):before {
		content: '\\eaa6';
	}
	:host([icon='debug-breakpoint-conditional']):before {
		content: '\\eaa7';
	}
	:host([icon='debug-breakpoint-conditional-disabled']):before {
		content: '\\eaa7';
	}
	:host([icon='debug-breakpoint-data-unverified']):before {
		content: '\\eaa8';
	}
	:host([icon='debug-breakpoint-data']):before {
		content: '\\eaa9';
	}
	:host([icon='debug-breakpoint-data-disabled']):before {
		content: '\\eaa9';
	}
	:host([icon='debug-breakpoint-log-unverified']):before {
		content: '\\eaaa';
	}
	:host([icon='debug-breakpoint-log']):before {
		content: '\\eaab';
	}
	:host([icon='debug-breakpoint-log-disabled']):before {
		content: '\\eaab';
	}
	:host([icon='briefcase']):before {
		content: '\\eaac';
	}
	:host([icon='broadcast']):before {
		content: '\\eaad';
	}
	:host([icon='browser']):before {
		content: '\\eaae';
	}
	:host([icon='bug']):before {
		content: '\\eaaf';
	}
	:host([icon='calendar']):before {
		content: '\\eab0';
	}
	:host([icon='case-sensitive']):before {
		content: '\\eab1';
	}
	:host([icon='check']):before {
		content: '\\eab2';
	}
	:host([icon='checklist']):before {
		content: '\\eab3';
	}
	:host([icon='chevron-down']):before {
		content: '\\eab4';
	}
	:host([icon='chevron-left']):before {
		content: '\\eab5';
	}
	:host([icon='chevron-right']):before {
		content: '\\eab6';
	}
	:host([icon='chevron-up']):before {
		content: '\\eab7';
	}
	:host([icon='chrome-close']):before {
		content: '\\eab8';
	}
	:host([icon='chrome-maximize']):before {
		content: '\\eab9';
	}
	:host([icon='chrome-minimize']):before {
		content: '\\eaba';
	}
	:host([icon='chrome-restore']):before {
		content: '\\eabb';
	}
	:host([icon='circle-outline']):before {
		content: '\\eabc';
	}
	:host([icon='debug-breakpoint-unverified']):before {
		content: '\\eabc';
	}
	:host([icon='circle-slash']):before {
		content: '\\eabd';
	}
	:host([icon='circuit-board']):before {
		content: '\\eabe';
	}
	:host([icon='clear-all']):before {
		content: '\\eabf';
	}
	:host([icon='clippy']):before {
		content: '\\eac0';
	}
	:host([icon='close-all']):before {
		content: '\\eac1';
	}
	:host([icon='cloud-download']):before {
		content: '\\eac2';
	}
	:host([icon='cloud-upload']):before {
		content: '\\eac3';
	}
	:host([icon='code']):before {
		content: '\\eac4';
	}
	:host([icon='collapse-all']):before {
		content: '\\eac5';
	}
	:host([icon='color-mode']):before {
		content: '\\eac6';
	}
	:host([icon='comment-discussion']):before {
		content: '\\eac7';
	}
	:host([icon='credit-card']):before {
		content: '\\eac9';
	}
	:host([icon='dash']):before {
		content: '\\eacc';
	}
	:host([icon='dashboard']):before {
		content: '\\eacd';
	}
	:host([icon='database']):before {
		content: '\\eace';
	}
	:host([icon='debug-continue']):before {
		content: '\\eacf';
	}
	:host([icon='debug-disconnect']):before {
		content: '\\ead0';
	}
	:host([icon='debug-pause']):before {
		content: '\\ead1';
	}
	:host([icon='debug-restart']):before {
		content: '\\ead2';
	}
	:host([icon='debug-start']):before {
		content: '\\ead3';
	}
	:host([icon='debug-step-into']):before {
		content: '\\ead4';
	}
	:host([icon='debug-step-out']):before {
		content: '\\ead5';
	}
	:host([icon='debug-step-over']):before {
		content: '\\ead6';
	}
	:host([icon='debug-stop']):before {
		content: '\\ead7';
	}
	:host([icon='debug']):before {
		content: '\\ead8';
	}
	:host([icon='device-camera-video']):before {
		content: '\\ead9';
	}
	:host([icon='device-camera']):before {
		content: '\\eada';
	}
	:host([icon='device-mobile']):before {
		content: '\\eadb';
	}
	:host([icon='diff-added']):before {
		content: '\\eadc';
	}
	:host([icon='diff-ignored']):before {
		content: '\\eadd';
	}
	:host([icon='diff-modified']):before {
		content: '\\eade';
	}
	:host([icon='diff-removed']):before {
		content: '\\eadf';
	}
	:host([icon='diff-renamed']):before {
		content: '\\eae0';
	}
	:host([icon='diff']):before {
		content: '\\eae1';
	}
	:host([icon='discard']):before {
		content: '\\eae2';
	}
	:host([icon='editor-layout']):before {
		content: '\\eae3';
	}
	:host([icon='empty-window']):before {
		content: '\\eae4';
	}
	:host([icon='exclude']):before {
		content: '\\eae5';
	}
	:host([icon='extensions']):before {
		content: '\\eae6';
	}
	:host([icon='eye-closed']):before {
		content: '\\eae7';
	}
	:host([icon='file-binary']):before {
		content: '\\eae8';
	}
	:host([icon='file-code']):before {
		content: '\\eae9';
	}
	:host([icon='file-media']):before {
		content: '\\eaea';
	}
	:host([icon='file-pdf']):before {
		content: '\\eaeb';
	}
	:host([icon='file-submodule']):before {
		content: '\\eaec';
	}
	:host([icon='file-symlink-directory']):before {
		content: '\\eaed';
	}
	:host([icon='file-symlink-file']):before {
		content: '\\eaee';
	}
	:host([icon='file-zip']):before {
		content: '\\eaef';
	}
	:host([icon='files']):before {
		content: '\\eaf0';
	}
	:host([icon='filter']):before {
		content: '\\eaf1';
	}
	:host([icon='flame']):before {
		content: '\\eaf2';
	}
	:host([icon='fold-down']):before {
		content: '\\eaf3';
	}
	:host([icon='fold-up']):before {
		content: '\\eaf4';
	}
	:host([icon='fold']):before {
		content: '\\eaf5';
	}
	:host([icon='folder-active']):before {
		content: '\\eaf6';
	}
	:host([icon='folder-opened']):before {
		content: '\\eaf7';
	}
	:host([icon='gear']):before {
		content: '\\eaf8';
	}
	:host([icon='gift']):before {
		content: '\\eaf9';
	}
	:host([icon='gist-secret']):before {
		content: '\\eafa';
	}
	:host([icon='gist']):before {
		content: '\\eafb';
	}
	:host([icon='git-commit']):before {
		content: '\\eafc';
	}
	:host([icon='git-compare']):before {
		content: '\\eafd';
	}
	:host([icon='compare-changes']):before {
		content: '\\eafd';
	}
	:host([icon='git-merge']):before {
		content: '\\eafe';
	}
	:host([icon='github-action']):before {
		content: '\\eaff';
	}
	:host([icon='github-alt']):before {
		content: '\\eb00';
	}
	:host([icon='globe']):before {
		content: '\\eb01';
	}
	:host([icon='grabber']):before {
		content: '\\eb02';
	}
	:host([icon='graph']):before {
		content: '\\eb03';
	}
	:host([icon='gripper']):before {
		content: '\\eb04';
	}
	:host([icon='heart']):before {
		content: '\\eb05';
	}
	:host([icon='home']):before {
		content: '\\eb06';
	}
	:host([icon='horizontal-rule']):before {
		content: '\\eb07';
	}
	:host([icon='hubot']):before {
		content: '\\eb08';
	}
	:host([icon='inbox']):before {
		content: '\\eb09';
	}
	:host([icon='issue-reopened']):before {
		content: '\\eb0b';
	}
	:host([icon='issues']):before {
		content: '\\eb0c';
	}
	:host([icon='italic']):before {
		content: '\\eb0d';
	}
	:host([icon='jersey']):before {
		content: '\\eb0e';
	}
	:host([icon='json']):before {
		content: '\\eb0f';
	}
	:host([icon='kebab-vertical']):before {
		content: '\\eb10';
	}
	:host([icon='key']):before {
		content: '\\eb11';
	}
	:host([icon='law']):before {
		content: '\\eb12';
	}
	:host([icon='lightbulb-autofix']):before {
		content: '\\eb13';
	}
	:host([icon='link-external']):before {
		content: '\\eb14';
	}
	:host([icon='link']):before {
		content: '\\eb15';
	}
	:host([icon='list-ordered']):before {
		content: '\\eb16';
	}
	:host([icon='list-unordered']):before {
		content: '\\eb17';
	}
	:host([icon='live-share']):before {
		content: '\\eb18';
	}
	:host([icon='loading']):before {
		content: '\\eb19';
	}
	:host([icon='location']):before {
		content: '\\eb1a';
	}
	:host([icon='mail-read']):before {
		content: '\\eb1b';
	}
	:host([icon='mail']):before {
		content: '\\eb1c';
	}
	:host([icon='markdown']):before {
		content: '\\eb1d';
	}
	:host([icon='megaphone']):before {
		content: '\\eb1e';
	}
	:host([icon='mention']):before {
		content: '\\eb1f';
	}
	:host([icon='milestone']):before {
		content: '\\eb20';
	}
	:host([icon='mortar-board']):before {
		content: '\\eb21';
	}
	:host([icon='move']):before {
		content: '\\eb22';
	}
	:host([icon='multiple-windows']):before {
		content: '\\eb23';
	}
	:host([icon='mute']):before {
		content: '\\eb24';
	}
	:host([icon='no-newline']):before {
		content: '\\eb25';
	}
	:host([icon='note']):before {
		content: '\\eb26';
	}
	:host([icon='octoface']):before {
		content: '\\eb27';
	}
	:host([icon='open-preview']):before {
		content: '\\eb28';
	}
	:host([icon='package']):before {
		content: '\\eb29';
	}
	:host([icon='paintcan']):before {
		content: '\\eb2a';
	}
	:host([icon='pin']):before {
		content: '\\eb2b';
	}
	:host([icon='play']):before {
		content: '\\eb2c';
	}
	:host([icon='run']):before {
		content: '\\eb2c';
	}
	:host([icon='plug']):before {
		content: '\\eb2d';
	}
	:host([icon='preserve-case']):before {
		content: '\\eb2e';
	}
	:host([icon='preview']):before {
		content: '\\eb2f';
	}
	:host([icon='project']):before {
		content: '\\eb30';
	}
	:host([icon='pulse']):before {
		content: '\\eb31';
	}
	:host([icon='question']):before {
		content: '\\eb32';
	}
	:host([icon='quote']):before {
		content: '\\eb33';
	}
	:host([icon='radio-tower']):before {
		content: '\\eb34';
	}
	:host([icon='reactions']):before {
		content: '\\eb35';
	}
	:host([icon='references']):before {
		content: '\\eb36';
	}
	:host([icon='refresh']):before {
		content: '\\eb37';
	}
	:host([icon='regex']):before {
		content: '\\eb38';
	}
	:host([icon='remote-explorer']):before {
		content: '\\eb39';
	}
	:host([icon='remote']):before {
		content: '\\eb3a';
	}
	:host([icon='remove']):before {
		content: '\\eb3b';
	}
	:host([icon='replace-all']):before {
		content: '\\eb3c';
	}
	:host([icon='replace']):before {
		content: '\\eb3d';
	}
	:host([icon='repo-clone']):before {
		content: '\\eb3e';
	}
	:host([icon='repo-force-push']):before {
		content: '\\eb3f';
	}
	:host([icon='repo-pull']):before {
		content: '\\eb40';
	}
	:host([icon='repo-push']):before {
		content: '\\eb41';
	}
	:host([icon='report']):before {
		content: '\\eb42';
	}
	:host([icon='request-changes']):before {
		content: '\\eb43';
	}
	:host([icon='rocket']):before {
		content: '\\eb44';
	}
	:host([icon='root-folder-opened']):before {
		content: '\\eb45';
	}
	:host([icon='root-folder']):before {
		content: '\\eb46';
	}
	:host([icon='rss']):before {
		content: '\\eb47';
	}
	:host([icon='ruby']):before {
		content: '\\eb48';
	}
	:host([icon='save-all']):before {
		content: '\\eb49';
	}
	:host([icon='save-as']):before {
		content: '\\eb4a';
	}
	:host([icon='save']):before {
		content: '\\eb4b';
	}
	:host([icon='screen-full']):before {
		content: '\\eb4c';
	}
	:host([icon='screen-normal']):before {
		content: '\\eb4d';
	}
	:host([icon='search-stop']):before {
		content: '\\eb4e';
	}
	:host([icon='server']):before {
		content: '\\eb50';
	}
	:host([icon='settings-gear']):before {
		content: '\\eb51';
	}
	:host([icon='settings']):before {
		content: '\\eb52';
	}
	:host([icon='shield']):before {
		content: '\\eb53';
	}
	:host([icon='smiley']):before {
		content: '\\eb54';
	}
	:host([icon='sort-precedence']):before {
		content: '\\eb55';
	}
	:host([icon='split-horizontal']):before {
		content: '\\eb56';
	}
	:host([icon='split-vertical']):before {
		content: '\\eb57';
	}
	:host([icon='squirrel']):before {
		content: '\\eb58';
	}
	:host([icon='star-full']):before {
		content: '\\eb59';
	}
	:host([icon='star-half']):before {
		content: '\\eb5a';
	}
	:host([icon='symbol-class']):before {
		content: '\\eb5b';
	}
	:host([icon='symbol-color']):before {
		content: '\\eb5c';
	}
	:host([icon='symbol-constant']):before {
		content: '\\eb5d';
	}
	:host([icon='symbol-enum-member']):before {
		content: '\\eb5e';
	}
	:host([icon='symbol-field']):before {
		content: '\\eb5f';
	}
	:host([icon='symbol-file']):before {
		content: '\\eb60';
	}
	:host([icon='symbol-interface']):before {
		content: '\\eb61';
	}
	:host([icon='symbol-keyword']):before {
		content: '\\eb62';
	}
	:host([icon='symbol-misc']):before {
		content: '\\eb63';
	}
	:host([icon='symbol-operator']):before {
		content: '\\eb64';
	}
	:host([icon='symbol-property']):before {
		content: '\\eb65';
	}
	:host([icon='wrench']):before {
		content: '\\eb65';
	}
	:host([icon='wrench-subaction']):before {
		content: '\\eb65';
	}
	:host([icon='symbol-snippet']):before {
		content: '\\eb66';
	}
	:host([icon='tasklist']):before {
		content: '\\eb67';
	}
	:host([icon='telescope']):before {
		content: '\\eb68';
	}
	:host([icon='text-size']):before {
		content: '\\eb69';
	}
	:host([icon='three-bars']):before {
		content: '\\eb6a';
	}
	:host([icon='thumbsdown']):before {
		content: '\\eb6b';
	}
	:host([icon='thumbsup']):before {
		content: '\\eb6c';
	}
	:host([icon='tools']):before {
		content: '\\eb6d';
	}
	:host([icon='triangle-down']):before {
		content: '\\eb6e';
	}
	:host([icon='triangle-left']):before {
		content: '\\eb6f';
	}
	:host([icon='triangle-right']):before {
		content: '\\eb70';
	}
	:host([icon='triangle-up']):before {
		content: '\\eb71';
	}
	:host([icon='twitter']):before {
		content: '\\eb72';
	}
	:host([icon='unfold']):before {
		content: '\\eb73';
	}
	:host([icon='unlock']):before {
		content: '\\eb74';
	}
	:host([icon='unmute']):before {
		content: '\\eb75';
	}
	:host([icon='unverified']):before {
		content: '\\eb76';
	}
	:host([icon='verified']):before {
		content: '\\eb77';
	}
	:host([icon='versions']):before {
		content: '\\eb78';
	}
	:host([icon='vm-active']):before {
		content: '\\eb79';
	}
	:host([icon='vm-outline']):before {
		content: '\\eb7a';
	}
	:host([icon='vm-running']):before {
		content: '\\eb7b';
	}
	:host([icon='watch']):before {
		content: '\\eb7c';
	}
	:host([icon='whitespace']):before {
		content: '\\eb7d';
	}
	:host([icon='whole-word']):before {
		content: '\\eb7e';
	}
	:host([icon='window']):before {
		content: '\\eb7f';
	}
	:host([icon='word-wrap']):before {
		content: '\\eb80';
	}
	:host([icon='zoom-in']):before {
		content: '\\eb81';
	}
	:host([icon='zoom-out']):before {
		content: '\\eb82';
	}
	:host([icon='list-filter']):before {
		content: '\\eb83';
	}
	:host([icon='list-flat']):before {
		content: '\\eb84';
	}
	:host([icon='list-selection']):before {
		content: '\\eb85';
	}
	:host([icon='selection']):before {
		content: '\\eb85';
	}
	:host([icon='list-tree']):before {
		content: '\\eb86';
	}
	:host([icon='debug-breakpoint-function-unverified']):before {
		content: '\\eb87';
	}
	:host([icon='debug-breakpoint-function']):before {
		content: '\\eb88';
	}
	:host([icon='debug-breakpoint-function-disabled']):before {
		content: '\\eb88';
	}
	:host([icon='debug-stackframe-active']):before {
		content: '\\eb89';
	}
	:host([icon='debug-stackframe-dot']):before {
		content: '\\eb8a';
	}
	:host([icon='debug-stackframe']):before {
		content: '\\eb8b';
	}
	:host([icon='debug-stackframe-focused']):before {
		content: '\\eb8b';
	}
	:host([icon='debug-breakpoint-unsupported']):before {
		content: '\\eb8c';
	}
	:host([icon='symbol-string']):before {
		content: '\\eb8d';
	}
	:host([icon='debug-reverse-continue']):before {
		content: '\\eb8e';
	}
	:host([icon='debug-step-back']):before {
		content: '\\eb8f';
	}
	:host([icon='debug-restart-frame']):before {
		content: '\\eb90';
	}
	:host([icon='debug-alt']):before {
		content: '\\eb91';
	}
	:host([icon='call-incoming']):before {
		content: '\\eb92';
	}
	:host([icon='call-outgoing']):before {
		content: '\\eb93';
	}
	:host([icon='menu']):before {
		content: '\\eb94';
	}
	:host([icon='expand-all']):before {
		content: '\\eb95';
	}
	:host([icon='feedback']):before {
		content: '\\eb96';
	}
	:host([icon='group-by-ref-type']):before {
		content: '\\eb97';
	}
	:host([icon='ungroup-by-ref-type']):before {
		content: '\\eb98';
	}
	:host([icon='account']):before {
		content: '\\eb99';
	}
	:host([icon='bell-dot']):before {
		content: '\\eb9a';
	}
	:host([icon='debug-console']):before {
		content: '\\eb9b';
	}
	:host([icon='library']):before {
		content: '\\eb9c';
	}
	:host([icon='output']):before {
		content: '\\eb9d';
	}
	:host([icon='run-all']):before {
		content: '\\eb9e';
	}
	:host([icon='sync-ignored']):before {
		content: '\\eb9f';
	}
	:host([icon='pinned']):before {
		content: '\\eba0';
	}
	:host([icon='github-inverted']):before {
		content: '\\eba1';
	}
	:host([icon='server-process']):before {
		content: '\\eba2';
	}
	:host([icon='server-environment']):before {
		content: '\\eba3';
	}
	:host([icon='pass']):before {
		content: '\\eba4';
	}
	:host([icon='issue-closed']):before {
		content: '\\eba4';
	}
	:host([icon='stop-circle']):before {
		content: '\\eba5';
	}
	:host([icon='play-circle']):before {
		content: '\\eba6';
	}
	:host([icon='record']):before {
		content: '\\eba7';
	}
	:host([icon='debug-alt-small']):before {
		content: '\\eba8';
	}
	:host([icon='vm-connect']):before {
		content: '\\eba9';
	}
	:host([icon='cloud']):before {
		content: '\\ebaa';
	}
	:host([icon='merge']):before {
		content: '\\ebab';
	}
	:host([icon='export']):before {
		content: '\\ebac';
	}
	:host([icon='graph-left']):before {
		content: '\\ebad';
	}
	:host([icon='magnet']):before {
		content: '\\ebae';
	}
	:host([icon='notebook']):before {
		content: '\\ebaf';
	}
	:host([icon='redo']):before {
		content: '\\ebb0';
	}
	:host([icon='check-all']):before {
		content: '\\ebb1';
	}
	:host([icon='pinned-dirty']):before {
		content: '\\ebb2';
	}
	:host([icon='pass-filled']):before {
		content: '\\ebb3';
	}
	:host([icon='circle-large-filled']):before {
		content: '\\ebb4';
	}
	:host([icon='circle-large-outline']):before {
		content: '\\ebb5';
	}
	:host([icon='combine']):before {
		content: '\\ebb6';
	}
	:host([icon='gather']):before {
		content: '\\ebb6';
	}
	:host([icon='table']):before {
		content: '\\ebb7';
	}
	:host([icon='variable-group']):before {
		content: '\\ebb8';
	}
	:host([icon='type-hierarchy']):before {
		content: '\\ebb9';
	}
	:host([icon='type-hierarchy-sub']):before {
		content: '\\ebba';
	}
	:host([icon='type-hierarchy-super']):before {
		content: '\\ebbb';
	}
	:host([icon='git-pull-request-create']):before {
		content: '\\ebbc';
	}
	:host([icon='run-above']):before {
		content: '\\ebbd';
	}
	:host([icon='run-below']):before {
		content: '\\ebbe';
	}
	:host([icon='notebook-template']):before {
		content: '\\ebbf';
	}
	:host([icon='debug-rerun']):before {
		content: '\\ebc0';
	}
	:host([icon='workspace-trusted']):before {
		content: '\\ebc1';
	}
	:host([icon='workspace-untrusted']):before {
		content: '\\ebc2';
	}
	:host([icon='workspace-unknown']):before {
		content: '\\ebc3';
	}
	:host([icon='terminal-cmd']):before {
		content: '\\ebc4';
	}
	:host([icon='terminal-debian']):before {
		content: '\\ebc5';
	}
	:host([icon='terminal-linux']):before {
		content: '\\ebc6';
	}
	:host([icon='terminal-powershell']):before {
		content: '\\ebc7';
	}
	:host([icon='terminal-tmux']):before {
		content: '\\ebc8';
	}
	:host([icon='terminal-ubuntu']):before {
		content: '\\ebc9';
	}
	:host([icon='terminal-bash']):before {
		content: '\\ebca';
	}
	:host([icon='arrow-swap']):before {
		content: '\\ebcb';
	}
	:host([icon='copy']):before {
		content: '\\ebcc';
	}
	:host([icon='person-add']):before {
		content: '\\ebcd';
	}
	:host([icon='filter-filled']):before {
		content: '\\ebce';
	}
	:host([icon='wand']):before {
		content: '\\ebcf';
	}
	:host([icon='debug-line-by-line']):before {
		content: '\\ebd0';
	}
	:host([icon='inspect']):before {
		content: '\\ebd1';
	}
	:host([icon='layers']):before {
		content: '\\ebd2';
	}
	:host([icon='layers-dot']):before {
		content: '\\ebd3';
	}
	:host([icon='layers-active']):before {
		content: '\\ebd4';
	}
	:host([icon='compass']):before {
		content: '\\ebd5';
	}
	:host([icon='compass-dot']):before {
		content: '\\ebd6';
	}
	:host([icon='compass-active']):before {
		content: '\\ebd7';
	}
	:host([icon='azure']):before {
		content: '\\ebd8';
	}
	:host([icon='issue-draft']):before {
		content: '\\ebd9';
	}
	:host([icon='git-pull-request-closed']):before {
		content: '\\ebda';
	}
	:host([icon='git-pull-request-draft']):before {
		content: '\\ebdb';
	}
	:host([icon='debug-all']):before {
		content: '\\ebdc';
	}
	:host([icon='debug-coverage']):before {
		content: '\\ebdd';
	}
	:host([icon='run-errors']):before {
		content: '\\ebde';
	}
	:host([icon='folder-library']):before {
		content: '\\ebdf';
	}
	:host([icon='debug-continue-small']):before {
		content: '\\ebe0';
	}
	:host([icon='beaker-stop']):before {
		content: '\\ebe1';
	}
	:host([icon='graph-line']):before {
		content: '\\ebe2';
	}
	:host([icon='graph-scatter']):before {
		content: '\\ebe3';
	}
	:host([icon='pie-chart']):before {
		content: '\\ebe4';
	}
	:host([icon='bracket']):before {
		content: '\\eb0f';
	}
	:host([icon='bracket-dot']):before {
		content: '\\ebe5';
	}
	:host([icon='bracket-error']):before {
		content: '\\ebe6';
	}
	:host([icon='lock-small']):before {
		content: '\\ebe7';
	}
	:host([icon='azure-devops']):before {
		content: '\\ebe8';
	}
	:host([icon='verified-filled']):before {
		content: '\\ebe9';
	}
	:host([icon='newline']):before {
		content: '\\ebea';
	}
	:host([icon='layout']):before {
		content: '\\ebeb';
	}
	:host([icon='layout-activitybar-left']):before {
		content: '\\ebec';
	}
	:host([icon='layout-activitybar-right']):before {
		content: '\\ebed';
	}
	:host([icon='layout-panel-left']):before {
		content: '\\ebee';
	}
	:host([icon='layout-panel-center']):before {
		content: '\\ebef';
	}
	:host([icon='layout-panel-justify']):before {
		content: '\\ebf0';
	}
	:host([icon='layout-panel-right']):before {
		content: '\\ebf1';
	}
	:host([icon='layout-panel']):before {
		content: '\\ebf2';
	}
	:host([icon='layout-sidebar-left']):before {
		content: '\\ebf3';
	}
	:host([icon='layout-sidebar-right']):before {
		content: '\\ebf4';
	}
	:host([icon='layout-statusbar']):before {
		content: '\\ebf5';
	}
	:host([icon='layout-menubar']):before {
		content: '\\ebf6';
	}
	:host([icon='layout-centered']):before {
		content: '\\ebf7';
	}
	:host([icon='target']):before {
		content: '\\ebf8';
	}
	:host([icon='gl-pinned-filled']):before {
		font-family: 'glicons';
		content: '\\f11c';
		/* TODO: see relative positioning needed in every use-case */
		position: relative;
		left: 1px;
	}
	:host([icon='gl-graph']):before {
		font-family: 'glicons';
		content: '\\f102';
	}
	:host([icon='gl-list-auto']):before {
		font-family: 'glicons';
		content: '\\f11a';
	}
	:host([icon='gl-clock']):before {
		font-family: 'glicons';
		content: '\\f11d';
	}

	@keyframes codicon-spin {
		100% {
			transform: rotate(360deg);
		}
	}

	:host([modifier='spin']) {
		/* Use steps to throttle FPS to reduce CPU usage */
		animation: codicon-spin 1.5s steps(30) infinite;
	}
	:host([icon='loading'][modifier='spin']) {
		/* Use steps to throttle FPS to reduce CPU usage */
		animation: codicon-spin 1.5s steps(30) infinite;

		/* custom speed & easing for loading icon */
		animation-duration: 1s !important;
		animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
	}
`;let Rc=class extends dn{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}sizeChanged(){this.style.setProperty("--code-icon-size",`${this.size}px`)}};kc([Qt],Rc.prototype,"icon",2),kc([Qt],Rc.prototype,"modifier",2),kc([Qt],Rc.prototype,"size",2),Rc=kc([un({name:"code-icon",styles:Tc})],Rc);var _c=Object.defineProperty,Ec=Object.getOwnPropertyDescriptor,Oc=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?Ec(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&_c(t,n,i),i};const Ic=Do`
	<template class="${e=>e.mode}${e=>e.active?" active":""}" role="progressbar">
		<div class="progress-bar"></div>
	</template>
`,Mc=Bo`
	* {
		box-sizing: border-box;
	}

	:host {
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 5;
		height: 2px;
		width: 100%;
		overflow: hidden;
	}

	.progress-bar {
		background-color: var(--vscode-progressBar-background);
		display: none;
		position: absolute;
		left: 0;
		width: 2%;
		height: 2px;
	}

	:host(.active) .progress-bar {
		display: inherit;
	}

	:host(.discrete) .progress-bar {
		left: 0;
		transition: width 0.1s linear;
	}

	:host(.discrete.done) .progress-bar {
		width: 100%;
	}

	:host(.infinite) .progress-bar {
		animation-name: progress;
		animation-duration: 4s;
		animation-iteration-count: infinite;
		animation-timing-function: steps(100);
		transform: translateZ(0);
	}

	@keyframes progress {
		0% {
			transform: translateX(0) scaleX(1);
		}

		50% {
			transform: translateX(2500%) scaleX(3);
		}

		to {
			transform: translateX(4900%) scaleX(1);
		}
	}
`;let Pc=class extends dn{constructor(){super(...arguments),this.mode="infinite",this.active=!1}};Oc([Qt({mode:"reflect"})],Pc.prototype,"mode",2),Oc([Qt({mode:"boolean"})],Pc.prototype,"active",2),Pc=Oc([un({name:"progress-indicator",template:Ic,styles:Mc})],Pc);var zc=Object.defineProperty,$c=Object.getOwnPropertyDescriptor,Ac=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?$c(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&zc(t,n,i),i};const Dc=/(?:^|(?<= ))(=:|message:|@:|author:|#:|commit:|\?:|file:|~:|change:)/gi,Nc=new Map([["=:","message:"],["message:","message:"],["@:","author:"],["author:","author:"],["#:","commit:"],["commit:","commit:"],["?:","file:"],["file:","file:"],["~:","change:"],["change:","change:"]]),Lc=Do`
	<template role="search">
		<label
			for="search"
			aria-controls="helper"
			aria-expanded="${e=>e.showHelp}"
			@click="${(e,t)=>e.handleShowHelper(t.event)}"
		>
			<code-icon icon="search" aria-label="${e=>e.label}" title="${e=>e.label}"></code-icon>
			<code-icon class="icon-small" icon="chevron-down" aria-hidden="true"></code-icon>
		</label>
		<div class="field">
			<input
				${mi("input")}
				id="search"
				part="search"
				class="${e=>e.showHelp?"has-helper":""}"
				type="text"
				spellcheck="false"
				placeholder="${e=>e.placeholder}"
				:value="${e=>e.value}"
				aria-valid="${e=>!e.errorMessage}"
				aria-describedby="${e=>""!==e.errorMessage||null!=e.helpType?"help-text":""}"
				@input="${(e,t)=>e.handleInput(t.event)}"
				@keydown="${(e,t)=>e.handleShortcutKeys(t.event)}"
				@keyup="${(e,t)=>e.handleKeyup(t.event)}"
				@click="${(e,t)=>e.handleInputClick(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			/>
			<div class="message" id="help-text" aria-live="polite">
				${da((e=>""!==e.errorMessage),Do`${e=>e.errorMessage}${e=>e.helpType?Do`<br />`:""}`)}
				${da((e=>"message:"===e.helpType),Do`<span
						>Message: use quotes to search for phrases, e.g. message:"Updates dependencies"</span
					>`)}
				${da((e=>"author:"===e.helpType),Do`<span>Author: use a user's account, e.g. author:eamodio</span>`)}
				${da((e=>"commit:"===e.helpType),Do`<span>Commit: use a full or short Commit SHA, e.g. commit:4ce3a</span>`)}
				${da((e=>"file:"===e.helpType),Do`<span
						>File: use a filename with extension, e.g. file:package.json, or a glob pattern, e.g.
						file:*graph*
					</span>`)}
				${da((e=>"change:"===e.helpType),Do`<span>Change: use a regex pattern, e.g. change:update&#92;(param</span>`)}
			</div>
		</div>
		<div class="controls">
			<button
				class="control${e=>e.value?"":" is-hidden"}"
				type="button"
				role="button"
				aria-label="Clear"
				title="Clear"
				@click="${(e,t)=>e.handleClear(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			>
				<code-icon icon="close"></code-icon>
			</button>
			<button
				class="control"
				type="button"
				role="checkbox"
				aria-label="Match All"
				title="Match All"
				aria-checked="${e=>e.matchAll}"
				@click="${(e,t)=>e.handleMatchAll(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			>
				<code-icon icon="whole-word"></code-icon>
			</button>
			<button
				class="control"
				type="button"
				role="checkbox"
				aria-label="Match Case${e=>e.matchCaseOverride&&!e.matchCase?" (always on without regular expressions)":""}"
				title="Match Case${e=>e.matchCaseOverride&&!e.matchCase?" (always on without regular expressions)":""}"
				?disabled="${e=>!e.matchRegex}"
				aria-checked="${e=>e.matchCaseOverride}"
				@click="${(e,t)=>e.handleMatchCase(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			>
				<code-icon icon="case-sensitive"></code-icon>
			</button>
			<button
				class="control"
				type="button"
				role="checkbox"
				aria-label="Use Regular Expression"
				title="Use Regular Expression"
				aria-checked="${e=>e.matchRegex}"
				@click="${(e,t)=>e.handleMatchRegex(t.event)}"
				@focus="${(e,t)=>e.handleFocus(t.event)}"
			>
				<code-icon icon="regex"></code-icon>
			</button>
		</div>
		<div class="helper" id="helper" tabindex="-1" ${mi("helper")}>
			<p class="helper-label">Search by</p>
			<button class="helper-button" type="button" @click="${(e,t)=>e.handleInsertToken("@me")}">
				My changes <small>@me</small>
			</button>
			<button class="helper-button" type="button" @click="${(e,t)=>e.handleInsertToken("message:")}">
				Message <small>message: or =:</small>
			</button>
			<button class="helper-button" type="button" @click="${(e,t)=>e.handleInsertToken("author:")}">
				Author <small>author: or @:</small>
			</button>
			<button class="helper-button" type="button" @click="${(e,t)=>e.handleInsertToken("commit:")}">
				Commit SHA <small>commit: or #:</small>
			</button>
			<button class="helper-button" type="button" @click="${(e,t)=>e.handleInsertToken("file:")}">
				File <small>file: or ?:</small>
			</button>
			<button class="helper-button" type="button" @click="${(e,t)=>e.handleInsertToken("change:")}">
				Change <small>change: or ~:</small>
			</button>
		</div>
	</template>
`,Hc=Bo`
	* {
		box-sizing: border-box;
	}

	:host {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: 0.4rem;
		position: relative;

		flex: auto 1 1;
	}

	label {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.2rem;
		width: 3.2rem;
		height: 2.4rem;
		color: var(--vscode-input-foreground);
		cursor: pointer;
	}
	label:hover {
		background-color: var(--vscode-input-background);
	}

	.icon-small {
		font-size: 1rem;
	}

	.field {
		position: relative;
		flex: auto 1 1;
	}

	input {
		width: 100%;
		height: 2.4rem;
		background-color: var(--vscode-input-background);
		color: var(--vscode-input-foreground);
		border: 1px solid var(--vscode-input-border);
		border-radius: 0.25rem;
		padding: 0 6.6rem 1px 0.4rem;
		font-family: inherit;
		font-size: inherit;
	}
	input:focus {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}
	input::placeholder {
		color: var(--vscode-input-placeholderForeground);
	}

	input::-webkit-search-cancel-button {
		display: none;
	}

	input[aria-describedby='help-text'] {
		border-color: var(--vscode-inputValidation-infoBorder);
	}
	input[aria-describedby='help-text']:focus {
		outline-color: var(--vscode-inputValidation-infoBorder);
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	input[aria-valid='false'] {
		border-color: var(--vscode-inputValidation-errorBorder);
	}
	input[aria-valid='false']:focus {
		outline-color: var(--vscode-inputValidation-errorBorder);
	}

	.message {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		padding: 0.4rem;
		transform: translateY(-0.1rem);
		z-index: 1000;
		background-color: var(--vscode-inputValidation-infoBackground);
		border: 1px solid var(--vscode-inputValidation-infoBorder);
		color: var(--vscode-input-foreground);
		font-size: 1.2rem;
		line-height: 1.4;
	}

	input[aria-valid='false'] + .message {
		background-color: var(--vscode-inputValidation-errorBackground);
		border-color: var(--vscode-inputValidation-errorBorder);
	}

	input:not([aria-describedby='help-text']:focus) + .message {
		display: none;
	}

	.controls {
		position: absolute;
		top: 0.2rem;
		right: 0.2rem;
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: 0.1rem;
	}

	button {
		padding: 0;
		color: var(--vscode-input-foreground);
		border: 1px solid transparent;
		background: none;
	}
	button:focus:not([disabled]) {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}
	button:not([disabled]) {
		cursor: pointer;
	}

	.control {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 2rem;
		height: 2rem;
		text-align: center;
		border-radius: 0.25rem;
	}
	.control:hover:not([disabled]):not([aria-checked='true']) {
		background-color: var(--vscode-inputOption-hoverBackground);
	}
	.control[disabled] {
		opacity: 0.5;
	}
	.control[disabled][aria-checked='true'] {
		opacity: 0.8;
	}
	.control[aria-checked='true'] {
		background-color: var(--vscode-inputOption-activeBackground);
		color: var(--vscode-inputOption-activeForeground);
		border-color: var(--vscode-inputOption-activeBorder);
	}

	.control.is-hidden {
		display: none;
	}

	.helper {
		display: none;
		position: absolute;
		top: 100%;
		left: 0;
		z-index: 5000;
		width: fit-content;
		background-color: var(--vscode-menu-background);
		border: 1px solid var(--vscode-menu-border);
		outline: none;
	}
	label[aria-expanded='true'] ~ .helper {
		display: block;
	}

	.helper-label {
		text-transform: uppercase;
		font-size: 0.84em;
		line-height: 2.2rem;
		padding-left: 0.6rem;
		padding-right: 0.6rem;
		margin: 0;
		opacity: 0.6;
	}

	.helper-button {
		display: block;
		width: 100%;
		padding-left: 0.6rem;
		padding-right: 0.6rem;
		line-height: 2.2rem;
		text-align: left;
		color: var(--vscode-menu-foreground);
	}
	.helper-button:hover {
		color: var(--vscode-menu-selectionForeground);
		background-color: var(--vscode-menu-selectionBackground);
	}
	.helper-button small {
		opacity: 0.5;
	}
`;let Bc=class extends dn{constructor(){super(...arguments),this.showHelp=!1,this.errorMessage="",this.label="Search",this.placeholder="Search...",this.value="",this.matchAll=!1,this.matchCase=!1,this.matchRegex=!0,this.debouncedUpdateHelpText=Ze(this.updateHelpText.bind(this),200),this.debouncedEmitSearch=Ze(this.emitSearch.bind(this),250),this.searchHistory=[],this.searchHistoryPos=0}get matchCaseOverride(){return!this.matchRegex||this.matchCase}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.handleDocumentClick.bind(this))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.handleDocumentClick.bind(this))}focus(e){this.input.focus(e)}handleDocumentClick(e){if(!1===this.showHelp)return;e.composedPath().includes(this)||(this.showHelp=!1)}handleFocus(e){this.showHelp=!1}handleClear(e){this.value="",this.debouncedEmitSearch()}updateHelpText(){if(null==this.input||""===this.value||!this.value.includes(":")||null==this.input.selectionStart)return void(this.helpType=void 0);const e=function(e,t,n){if(""===e||!e.includes(":")||null===t)return;const o=e.length,r=null===n?t:Math.max(t,n);if(r===o)return e;let i=0===r?"":e.substring(0,r);if(r<o-1){if(" "!==e.charAt(r)){const t=/^[^\s]+/gi.exec(e.substring(r));null!==t&&(i+=t[0])}}return i}(this.value,this.input.selectionStart,this.input.selectionEnd),t=e?function(e){const t=e.match(Dc);if(null===t)return;return Nc.get(t.pop())}(e):void 0;this.helpType=t}handleInputClick(e){this.debouncedUpdateHelpText()}handleInput(e){const t=e.target?.value;this.value=t,this.debouncedUpdateHelpText(),this.debouncedEmitSearch()}handleMatchAll(e){this.matchAll=!this.matchAll,this.debouncedEmitSearch()}handleMatchCase(e){this.matchCase=!this.matchCase,this.debouncedEmitSearch()}handleMatchRegex(e){this.matchRegex=!this.matchRegex,this.debouncedEmitSearch()}handleKeyup(e){this.debouncedUpdateHelpText()}handleShortcutKeys(e){if(!["Enter","ArrowUp","ArrowDown"].includes(e.key)||e.ctrlKey||e.metaKey||e.altKey)return!0;if(e.preventDefault(),"Enter"===e.key)e.shiftKey?this.$emit("previous"):this.$emit("next");else if(0!==this.searchHistory.length){const t="ArrowDown"===e.key?1:-1,n=this.searchHistoryPos+t;if(n>-1&&n<this.searchHistory.length){this.searchHistoryPos=n;const e=this.searchHistory[n];e!==this.value&&(this.value=e,this.debouncedUpdateHelpText(),this.debouncedEmitSearch())}}return!1}handleShowHelper(e){this.showHelp=!this.showHelp,this.showHelp&&window.requestAnimationFrame((()=>{this.helper.focus()}))}handleInsertToken(e){this.value+=`${this.value.length>0?" ":""}${e}`,window.requestAnimationFrame((()=>{this.debouncedUpdateHelpText(),"@me"===e&&this.debouncedEmitSearch(),this.input.focus()}))}emitSearch(){const e={query:this.value,matchAll:this.matchAll,matchCase:this.matchCase,matchRegex:this.matchRegex};this.$emit("change",e)}setCustomValidity(e=""){this.errorMessage=e}logSearch(e){const t=this.searchHistory.length-1;this.searchHistoryPos<t||this.searchHistory[t]===e.query||(this.searchHistory.push(e.query),this.searchHistoryPos=this.searchHistory.length-1)}};Ac([Nt],Bc.prototype,"showHelp",2),Ac([Nt],Bc.prototype,"errorMessage",2),Ac([Nt],Bc.prototype,"helpType",2),Ac([Qt],Bc.prototype,"label",2),Ac([Qt],Bc.prototype,"placeholder",2),Ac([Qt],Bc.prototype,"value",2),Ac([Qt({mode:"boolean"})],Bc.prototype,"matchAll",2),Ac([Qt({mode:"boolean"})],Bc.prototype,"matchCase",2),Ac([Qt({mode:"boolean"})],Bc.prototype,"matchRegex",2),Ac([Lt],Bc.prototype,"matchCaseOverride",1),Bc=Ac([un({name:"search-input",template:Lc,styles:Hc})],Bc);var Fc=Object.defineProperty,Gc=Object.getOwnPropertyDescriptor,Wc=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?Gc(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&Fc(t,n,i),i};const jc=Do`<template>
	<search-input
		${mi("searchInput")}
		id="search-input"
		:errorMessage="${e=>e.errorMessage}"
		label="${e=>e.label}"
		placeholder="${e=>e.placeholder}"
		matchAll="${e=>e.matchAll}"
		matchCase="${e=>e.matchCase}"
		matchRegex="${e=>e.matchRegex}"
		value="${e=>e.value}"
		@previous="${(e,t)=>{t.event.stopImmediatePropagation(),e.navigate("previous")}}"
		@next="${(e,t)=>{t.event.stopImmediatePropagation(),e.navigate("next")}}"
	></search-input>
	<div class="search-navigation" aria-label="Search navigation">
		<span class="count${e=>e.total<1&&e.valid&&e.resultsLoaded?" error":""}">
			${da((e=>e.searching),Do`<code-icon icon="loading" modifier="spin"></code-icon>`)}
			${da((e=>!e.searching&&e.total<1),Do`${e=>e.formattedLabel}`)}
			${da((e=>!e.searching&&e.total>0),Do`<span aria-current="step">${e=>e.step}</span> of
					<span
						class="${e=>e.resultsHidden?"sr-hidden":""}"
						title="${e=>e.resultsHidden?"Some search results are hidden or unable to be shown on the Commit Graph":""}"
						>${e=>e.total}${e=>e.more?"+":""}</span
					><span class="sr-only"> ${e=>e.formattedLabel}</span>`)}
		</span>
		<button
			type="button"
			class="button"
			?disabled="${e=>!e.hasResults}"
			@click="${(e,t)=>e.handlePrevious(t.event)}"
		>
			<code-icon
				icon="arrow-up"
				aria-label="Previous Match (Shift+Enter)
First Match (Shift+Click)"
				title="Previous Match (Shift+Enter)
First Match (Shift+Click)"
			></code-icon>
		</button>
		<button
			type="button"
			class="button"
			?disabled="${e=>!e.hasResults}"
			@click="${(e,t)=>e.handleNext(t.event)}"
		>
			<code-icon
				icon="arrow-down"
				aria-label="Next Match (Enter)
Last Match (Shift+Click)"
				title="Next Match (Enter)
Last Match (Shift+Click)"
			></code-icon>
		</button>
		<button
			type="button"
			class="button"
			?disabled="${e=>!e.hasResults}"
			@click="${(e,t)=>e.handleOpenInView(t.event)}"
		>
			<code-icon
				icon="link-external"
				aria-label="Show Results in Side Bar"
				title="Show Results in Side Bar"
			></code-icon>
		</button>
	</div>
	<progress-indicator active="${e=>e.searching}"></progress-indicator>
</template>`,Uc=Bo`
	:host {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: 0.8rem;
		color: var(--color-foreground);
		flex: auto 1 1;
		position: relative;
	}
	:host(:focus) {
		outline: 0;
	}
	progress-indicator {
		top: -4px;
	}

	.search-navigation {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		gap: 0.3rem;
		color: var(--color-foreground);
	}
	.search-navigation:focus {
		outline: 0;
	}

	.count {
		flex: none;
		margin-right: 0.4rem;
		font-size: 1.2rem;
		min-width: 10ch;
	}

	.count.error {
		color: var(--vscode-errorForeground);
	}

	.button {
		width: 2.4rem;
		height: 2.4rem;
		padding: 0;
		color: inherit;
		border: none;
		background: none;
		text-align: center;
	}
	.button[disabled] {
		color: var(--vscode-disabledForeground);
	}
	.button:focus {
		background-color: var(--vscode-toolbar-activeBackground);
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}
	.button:not([disabled]) {
		cursor: pointer;
	}
	.button:hover:not([disabled]) {
		color: var(--vscode-foreground);
		background-color: var(--vscode-toolbar-hoverBackground);
	}
	.button > code-icon[icon='arrow-up'] {
		transform: translateX(-0.1rem);
	}

	.sr-hidden {
		color: var(--vscode-errorForeground);
	}

	.sr-only {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
`;let Vc=class extends dn{constructor(){super(...arguments),this.errorMessage="",this.label="Search",this.placeholder='Search commits (↑↓ for history), e.g. "Updates dependencies" author:eamodio',this.value="",this.matchAll=!1,this.matchCase=!1,this.matchRegex=!0,this.total=0,this.step=0,this.more=!1,this.searching=!1,this.valid=!1,this.resultsHidden=!1,this.resultsLabel="result",this.resultsLoaded=!1}get formattedLabel(){return Ml(this.resultsLabel,this.total,{zero:"No"})}get hasResults(){return this.total>1}connectedCallback(){super.connectedCallback(),this._disposable=st.on(window,"keydown",(e=>this.handleShortcutKeys(e)))}disconnectedCallback(){super.disconnectedCallback(),this._disposable?.dispose()}focus(e){this.searchInput?.focus(e)}navigate(e){const t={direction:e};this.$emit("navigate",t)}logSearch(e){this.searchInput?.logSearch(e)}handleShortcutKeys(e){if(!e.altKey)return"F3"===e.key&&!e.ctrlKey&&!e.metaKey||"g"===e.key&&e.metaKey&&!e.ctrlKey&&al?(e.preventDefault(),e.stopImmediatePropagation(),void this.navigate(e.shiftKey?"previous":"next")):void("f"===e.key&&(e.metaKey&&!e.ctrlKey&&al||e.ctrlKey&&!al)&&(e.preventDefault(),e.stopImmediatePropagation(),this.focus()))}handlePrevious(e){e.stopImmediatePropagation(),this.navigate(e.shiftKey?"first":"previous")}handleNext(e){e.stopImmediatePropagation(),this.navigate(e.shiftKey?"last":"next")}handleOpenInView(e){e.stopImmediatePropagation(),this.$emit("openinview")}};Wc([Nt],Vc.prototype,"errorMessage",2),Wc([Qt],Vc.prototype,"label",2),Wc([Qt],Vc.prototype,"placeholder",2),Wc([Qt],Vc.prototype,"value",2),Wc([Qt({mode:"boolean"})],Vc.prototype,"matchAll",2),Wc([Qt({mode:"boolean"})],Vc.prototype,"matchCase",2),Wc([Qt({mode:"boolean"})],Vc.prototype,"matchRegex",2),Wc([Qt({converter:xc})],Vc.prototype,"total",2),Wc([Qt({converter:xc})],Vc.prototype,"step",2),Wc([Qt({mode:"boolean"})],Vc.prototype,"more",2),Wc([Qt({mode:"boolean"})],Vc.prototype,"searching",2),Wc([Qt({mode:"boolean"})],Vc.prototype,"valid",2),Wc([Qt({mode:"boolean"})],Vc.prototype,"resultsHidden",2),Wc([Qt],Vc.prototype,"resultsLabel",2),Wc([Qt({mode:"boolean"})],Vc.prototype,"resultsLoaded",2),Wc([Lt],Vc.prototype,"formattedLabel",1),Wc([Lt],Vc.prototype,"hasResults",1),Vc=Wc([un({name:"search-box",template:jc,styles:Uc})],Vc);const Zc=Pl(Vc,{events:{onChange:"change",onNavigate:"navigate",onOpenInView:"openinview"}});const qc=2**30,Kc=new Map;let Yc=0;function Xc(e){Kc.delete(e)}function Qc(){return Yc===qc&&(Yc=0),++Yc}class Jc extends Error{constructor(e,t){super(t),this.promise=e}}class ed extends Error{constructor(e){super(`AggregateError(${e.length})\n${e.map((e=>`\t${String(e)}`)).join("\n")}`),this.errors=e,Error.captureStackTrace?.(this,ed)}}const td="",nd=Symbol("logInstanceNameFn");function od(e){return function(e,t=!1){let n,o,r,i,s,a,l=0,c=!1,d=!1,u=!0;null!=e&&({args:n,condition:o,enter:r,exit:i,prefix:s,sanitize:a,logThreshold:l=0,scoped:c=!0,singleLine:d=!1,timed:u=!0}=e);l>0&&(d=!0,u=!0);u&&(c=!0);const h=t?rt.debug.bind(rt):rt.log.bind(rt),p=rt.warn.bind(rt);return(e,f,m)=>{let g,b;if("function"==typeof m.value?(g=m.value,b="value"):"function"==typeof m.get&&(g=m.get,b="get"),null==g||null==b)throw new Error("Not supported");const v=function(e){if("function"!=typeof e)throw new Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e);t=t.replace(tt,Ke)||t,t=t.slice(0,t.indexOf(Xe));let n=t.indexOf(Qe),o=t.indexOf(Je);n=n>=0?n+1:0,o=o>0?o:t.indexOf(Ye),t=t.slice(n,o),t=`(${t})`;const r=et.exec(t);return null!=r?r[1].split(qe).map((e=>e.trim().replace(nt,Ke))):[]}(g);m[b]=function(...m){const b=Qc();if(!rt.isDebugging&&!rt.enabled(V.Debug)&&(!rt.enabled(V.Info)||t)||null!=o&&!o(...m))return g.apply(this,m);let y;null!=this?(y=function(e){let t;if("function"==typeof e){if(null==e.prototype?.constructor)return e.name;t=e.prototype.constructor.name??ot}else t=e.constructor?.name??ot;const n=t.indexOf("_");return-1===n?t:t.substr(n+1)}(this),this.constructor?.[nd]&&(y=e.constructor[nd](this,y))):y=td;let w,x=`${c?`[${b.toString(16).padStart(5)}] `:td}${y?`${y}.`:td}${f}`;null!=s&&(x=s({id:b,instance:this,instanceName:y,name:f,prefix:x},...m)),c&&(w={scopeId:b,prefix:x},function(e,t){Kc.set(e,t)}(b,w));const C=null!=r?r(...m):td;let S;if(!1===n||0===m.length)S=td,d||h(`${x}${C}`);else{let e;S="";let o,r,i,s=-1;for(i of m){if(o=v[++s],e=n?.[s],null!=e){if("boolean"==typeof e)continue;if(S.length>0&&(S+=", "),"string"==typeof e){S+=e;continue}r=String(e(i))}else S.length>0&&(S+=", "),r=rt.toLoggable(i,a);S+=o?`${o}=${r}`:r}d||h(`${x}${C}${S&&(t||rt.enabled(V.Debug)||rt.isDebugging)?`(${S})`:td}`)}if(d||u||null!=i){const e=u?El():void 0,n=t=>{const n=void 0!==e?` • ${Il(e)} ms`:td;d?rt.error(t,`${x}${C}${S?`(${S})`:td}`,`failed${w?.exitDetails?w.exitDetails:td}${n}`):rt.error(t,x,`failed${w?.exitDetails?w.exitDetails:td}${n}`),c&&Xc(b)};let o;try{o=g.apply(this,m)}catch(e){throw n(e),e}const r=n=>{let o,r,s,a;if(null!=e?(o=Il(e),o>j?(r=p,s=` • ${o} ms (slow)`):(r=h,s=` • ${o} ms`)):(s=td,r=h),null!=i)try{a=i(n)}catch(e){a=`@log.exit error: ${e}`}else a="completed";d?(0===l||o>l)&&r(`${x}${C}${S&&(t||rt.enabled(V.Debug)||rt.isDebugging)?`(${S})`:td} ${a}${w?.exitDetails?w.exitDetails:td}${s}`):r(`${x}${S&&(t||rt.enabled(V.Debug)||rt.isDebugging)?`(${S})`:td} ${a}${w?.exitDetails?w.exitDetails:td}${s}`),c&&Xc(b)};if(null!=o&&((k=o)instanceof Promise||"function"==typeof k?.then)){o.then(r).catch(n)}else r(o);return o}var k;return g.apply(this,m)}}}(e,!0)}function*rd(e,t){for(const n of e)yield*t(n)}function id(e,t){for(const n of e)if(t(n))return!0;return!1}function*sd(...e){for(const t of e)for(const e of t)yield e}var ad=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,cd=(e,t,n,o)=>{for(var r,i=o>1?void 0:o?ld(t,n):t,s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o?r(t,n,i):r(i))||i);return o&&i&&ad(t,n,i),i};const dd=Do`<template>
	<div id="chart" ${mi("chart")}></div>
</template>`,ud=Bo`
	:host {
		display: flex;
		position: relative;
		width: 100%;
		min-height: 24px;
		height: 40px;
		background: var(--color-background);
	}

	#chart {
		height: 100%;
		width: 100%;
		overflow: hidden;
		position: initial !important;
	}

	.bb svg {
		font: 10px var(--font-family);
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		transform: translateX(2.5em) rotateY(180deg);
	}

	.bb-chart {
		width: 100%;
		height: 100%;
	}

	.bb-event-rect {
		height: calc(100% + 2px);
		transform: translateY(-5px);
	}

	/*-- Grid --*/
	.bb-grid {
		pointer-events: none;
	}

	.bb-xgrid-focus line {
		stroke: var(--color-graph-minimap-focusLine);
	}

	/*-- Line --*/
	.bb path,
	.bb line {
		fill: none;
	}

	/*-- Point --*/
	.bb-circle._expanded_ {
		fill: var(--color-background);
		opacity: 1 !important;
		fill-opacity: 1 !important;
		stroke-opacity: 1 !important;
		stroke-width: 1px;
	}

	.bb-selected-circle {
		fill: var(--color-background);
		opacity: 1 !important;
		fill-opacity: 1 !important;
		stroke-opacity: 1 !important;
		stroke-width: 2px;
	}

	/*-- Bar --*/
	.bb-bar {
		stroke-width: 0;
	}
	.bb-bar._expanded_ {
		fill-opacity: 0.75;
	}

	/*-- Regions --*/

	.bb-regions {
		pointer-events: none;
	}

	.bb-region > rect:not([x]) {
		display: none;
	}

	.bb-region.visible-area {
		fill: var(--color-graph-minimap-visibleAreaBackground);
		transform: translateY(-4px);
	}
	.bb-region.visible-area > rect {
		height: 100%;
	}

	.bb-region.marker-result {
		fill: var(--color-graph-minimap-marker-highlights);
		transform: translate(-1px, -4px);
		z-index: 10;
	}
	.bb-region.marker-result > rect {
		width: 2px;
		height: 100%;
	}

	.bb-region.marker-head {
		fill: var(--color-graph-minimap-marker-head);
		stroke: var(--color-graph-minimap-marker-head);
		transform: translate(-1px, -4px);
	}
	.bb-region.marker-head > rect {
		width: 1px;
		height: 100%;
	}

	.bb-region.marker-head-arrow-left {
		fill: var(--color-graph-minimap-marker-head);
		stroke: var(--color-graph-minimap-marker-head);
		transform: translate(-5px, -5px) skewX(45deg);
	}
	.bb-region.marker-head-arrow-left > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-head-arrow-right {
		fill: var(--color-graph-minimap-marker-head);
		stroke: var(--color-graph-minimap-marker-head);
		transform: translate(1px, -5px) skewX(-45deg);
	}
	.bb-region.marker-head-arrow-right > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-upstream {
		fill: var(--color-graph-minimap-marker-upstream);
		stroke: var(--color-graph-minimap-marker-upstream);
		transform: translate(-1px, -4px);
	}
	.bb-region.marker-upstream > rect {
		width: 1px;
		height: 100%;
	}

	.bb-region.marker-branch {
		fill: var(--color-graph-minimap-marker-local-branches);
		stroke: var(--color-graph-minimap-marker-local-branches);
		transform: translate(-2px, 32px);
	}
	.bb-region.marker-branch > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-remote {
		fill: var(--color-graph-minimap-marker-remote-branches);
		stroke: var(--color-graph-minimap-marker-remote-branches);
		transform: translate(-2px, 26px);
	}
	.bb-region.marker-remote > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-stash {
		fill: var(--color-graph-minimap-marker-stashes);
		stroke: var(--color-graph-minimap-marker-stashes);
		transform: translate(-2px, 32px);
	}
	.bb-region.marker-stash > rect {
		width: 3px;
		height: 3px;
	}

	.bb-region.marker-tag {
		fill: var(--color-graph-minimap-marker-tags);
		stroke: var(--color-graph-minimap-marker-tags);
		transform: translate(-2px, 26px);
	}
	.bb-region.marker-tag > rect {
		width: 3px;
		height: 3px;
	}

	/*-- Zoom region --*/
	/*
	:host-context(.vscode-dark) .bb-zoom-brush {
		fill: white;
		fill-opacity: 0.2;
	}
	:host-context(.vscode-light) .bb-zoom-brush {
		fill: black;
		fill-opacity: 0.1;
	}
	*/

	/*-- Brush --*/
	/*
	.bb-brush .extent {
		fill-opacity: 0.1;
	}
	*/

	/*-- Button --*/
	/*
	.bb-button {
		position: absolute;
		top: 2px;
		right: 0;

		color: var(--color-button-foreground);

		font-size: var(--font-size);
		font-family: var(--font-family);
	}
	.bb-button .bb-zoom-reset {
		display: inline-block;
		padding: 0.1rem 0.3rem;
		cursor: pointer;
		font-family: 'codicon';
		font-display: block;

		background-color: var(--color-button-background);

		border: 1px solid var(--color-button-background);
		border-radius: 3px;
	}
	*/

	/*-- Tooltip --*/
	.bb-tooltip-container {
		top: unset !important;
		z-index: 10;
		user-select: none;
		min-width: 300px;
	}

	.bb-tooltip {
		display: flex;
		flex-direction: column;
		padding: 0.5rem 1rem;
		background-color: var(--color-hover-background);
		color: var(--color-hover-foreground);
		border: 1px solid var(--color-hover-border);
		box-shadow: 0 2px 8px var(--vscode-widget-shadow);
		font-size: var(--font-size);
		opacity: 1;
		white-space: nowrap;
	}

	.bb-tooltip .header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 1rem;
	}

	.bb-tooltip .header--title {
		font-weight: 600;
	}

	.bb-tooltip .header--description {
		font-weight: normal;
		font-style: italic;
	}

	.bb-tooltip .changes {
		margin: 0.5rem 0;
	}

	.bb-tooltip .refs {
		display: flex;
		font-size: 12px;
		gap: 0.5rem;
		flex-direction: row;
		flex-wrap: wrap;
		margin: 0.5rem 0;
		max-width: fit-content;
	}
	.bb-tooltip .refs .branch {
		border-radius: 3px;
		padding: 0 4px;
		background-color: var(--color-graph-minimap-tip-branchBackground);
		border: 1px solid var(--color-graph-minimap-tip-branchBorder);
		color: var(--color-graph-minimap-tip-branchForeground);
	}
	.bb-tooltip .refs .branch.current {
		background-color: var(--color-graph-minimap-tip-headBackground);
		border: 1px solid var(--color-graph-minimap-tip-headBorder);
		color: var(--color-graph-minimap-tip-headForeground);
	}
	.bb-tooltip .refs .remote {
		border-radius: 3px;
		padding: 0 4px;
		background-color: var(--color-graph-minimap-tip-remoteBackground);
		border: 1px solid var(--color-graph-minimap-tip-remoteBorder);
		color: var(--color-graph-minimap-tip-remoteForeground);
	}
	.bb-tooltip .refs .remote.current {
		background-color: var(--color-graph-minimap-tip-upstreamBackground);
		border: 1px solid var(--color-graph-minimap-tip-upstreamBorder);
		color: var(--color-graph-minimap-tip-upstreamForeground);
	}
	.bb-tooltip .refs .stash {
		border-radius: 3px;
		padding: 0 4px;
		background-color: var(--color-graph-minimap-tip-stashBackground);
		border: 1px solid var(--color-graph-minimap-tip-stashBorder);
		color: var(--color-graph-minimap-tip-stashForeground);
	}
	.bb-tooltip .refs .tag {
		border-radius: 3px;
		padding: 0 4px;
		background-color: var(--color-graph-minimap-tip-tagBackground);
		border: 1px solid var(--color-graph-minimap-tip-tagBorder);
		color: var(--color-graph-minimap-tip-tagForeground);
	}
`,hd=["marker-result","marker-head-arrow-left","marker-head-arrow-right","marker-head","marker-upstream","marker-branch","marker-stash","marker-remote","marker-tag","visible-area"];let pd=class extends dn{activeDayChanged(){this.select(this.activeDay)}dataChanged(e,t,n){this._loadTimer&&(clearTimeout(this._loadTimer),this._loadTimer=void 0),n&&(this._regions=void 0,this._markerRegions=void 0),this._loadTimer=setTimeout((()=>this.loadChart()),150)}markersChanged(){this.dataChanged(void 0,void 0,!0)}searchResultsChanged(){this._chart?.regions.remove({classes:["marker-result"]}),null!=this.searchResults&&this._chart?.regions.add([...this.getSearchResultsRegions(this.searchResults)])}visibleDaysChanged(){this._chart?.regions.remove({classes:["visible-area"]}),null!=this.visibleDays&&this._chart?.regions.add(this.getVisibleAreaRegion(this.visibleDays))}connectedCallback(){super.connectedCallback(),this.dataChanged(void 0,void 0,!1)}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=void 0}getInternalChart(){return this._chart.internal}select(e,t=!1){if(null==e)return void this.unselect();const n=this.getData(e);if(null==n)return;const o=this.getInternalChart();if(o.showGridFocus([n]),!t){const{index:e}=n;this._chart.$.main.selectAll(`.bb-shape-${e}`).each((function(t){o.toggleShape?.(this,t,e)}))}}unselect(e,t=!1){if(t)this.getInternalChart().hideGridFocus();else if(null!=e){const t=this.getIndex(e);if(null==t)return;this._chart?.unselect(void 0,[t])}else this._chart?.unselect()}getData(e){return e=new Date(e).setHours(0,0,0,0),this._chart?.data()[0]?.values.find((t=>("number"==typeof t.x?t.x:t.x.getTime())===e))}getIndex(e){return this.getData(e)?.index}getMarkerRegions(){if(null==this._markerRegions)if(null!=this.markers){const e=rd(this.markers,(([e,t])=>rd(t,(t=>t.current&&"branch"===t.type?[{axis:"x",start:e,end:e,class:"marker-head"},{axis:"x",start:e,end:e,class:"marker-head-arrow-left"},{axis:"x",start:e,end:e,class:"marker-head-arrow-right"}]:[{axis:"x",start:e,end:e,class:t.current&&"remote"===t.type?"marker-upstream":`marker-${t.type}`}]))));this._markerRegions=e}else this._markerRegions=[];return this._markerRegions}getAllRegions(){if(null==this._regions){let e=this.getMarkerRegions();null!=this.visibleDays&&(e=sd([this.getVisibleAreaRegion(this.visibleDays)],e)),null!=this.searchResults&&(e=sd(e,this.getSearchResultsRegions(this.searchResults))),this._regions=[...e].sort(((e,t)=>hd.indexOf(t.class??"")-hd.indexOf(e.class??"")))}return this._regions}getSearchResultsRegions(e){return function*(e,t){for(const n of e)yield t(n)}(e.keys(),(e=>({axis:"x",start:e,end:e,class:"marker-result"})))}getVisibleAreaRegion(e){return{axis:"x",start:e.bottom,end:e.top,class:"visible-area"}}loadChart(){null==this._loading&&(this._loading=this.loadChartCore().then((()=>this._loading=void 0)))}async loadChartCore(){if(!this.data?.size)return this._chart?.destroy(),void(this._chart=void 0);const e=id(this.data.values(),(e=>null!=e?.activity)),t=[],n=[],r=this.data.keys(),i=r[Symbol.iterator]().next().value;const s=new Date,a=new Date(i);let l,c,d,u,h,p=0;const f=s;for(;f>=a;)l=fd(f),c=this.data.get(l),t.push(l),e?(d=c?.activity?.additions??0,h=c?.activity?.deletions??0,u=d+h):u=c?.commits??0,p=Math.max(p,u),n.push(u),f.setDate(f.getDate()-1);const m=this.getAllRegions(),g=[];let b=0,v=0;for(const e of n)0!==e&&(g.push(e),b+=e,v+=e**2);g.sort(((e,t)=>e-t));const y=g.length,w=b/y,x=Math.sqrt(v/y-w**2);let C=-1;for(let e=y-1;e>=0;e--)if(Math.abs((g[e]-w)/x)<=3){C=e;break}const S=g[Math.floor(.25*y)],k=g[Math.floor(.75*y)],T=g[y-1],R=k+3*(k-S),_=g[C],E=Math.floor(Math.min(T,R>T-R?_:R+(_-R)/2)+.1*R);if(null==this._chart){const{bb:r,selection:i,spline:s,zoom:a}=await o.e(490).then(o.bind(o,1893));this._chart=r.generate({bindto:this.chart,data:{x:"date",xSort:!1,axes:{activity:"y"},columns:[["date",...t],["activity",...n]],names:{activity:"Activity"},onclick:e=>{if("activity"!==e.id)return;const t=new Date(e.x),n=fd(t),o=this.searchResults?.get(n)?.sha??this.data?.get(n)?.sha;queueMicrotask((()=>{this.$emit("selected",{date:t,sha:o})}))},selection:{enabled:i(),grouped:!0,multiple:!1},colors:{activity:"var(--color-graph-minimap-line0)"},types:{activity:s()}},axis:{x:{show:!1,localtime:!0,type:"timeseries"},y:{min:0,max:E,show:!0,padding:{bottom:8}}},clipPath:!1,grid:{front:!1,focus:{show:!0}},legend:{show:!1},line:{point:!0,zerobased:!0},point:{show:!0,select:{r:5},focus:{only:!0,expand:{enabled:!0,r:3}},sensitivity:100},regions:m,resize:{auto:!0},spline:{interpolation:{type:"monotone-x"}},tooltip:{contents:(t,n,o,r)=>{const i=new Date(t[0].x),s=this.data?.get(fd(i)),a=this.markers?.get(fd(i));let l;a?.length&&(l=function(e,t){return e.reduce(((e,n)=>{const o=t(n),r=e.get(o);return void 0===r?e.set(o,[n]):r.push(n),e}),new Map)}(a,(e=>e.type)));const c=l?.get("stash")?.length??0;return`<div class="bb-tooltip">\n\t\t\t\t\t\t\t<div class="header">\n\t\t\t\t\t\t\t\t<span class="header--title">${xl(i,"MMMM Do, YYYY")}</span>\n\t\t\t\t\t\t\t\t<span class="header--description">(${d=wl(i),d.charAt(0).toUpperCase()+d.slice(1)})</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="changes">\n\t\t\t\t\t\t\t\t<span>${0===(s?.commits??0)?"No commits":`${Ml("commit",s?.commits??0,{format:e=>kl(e),zero:"No"})}, ${Ml("file",s?.commits??0,{format:e=>kl(e),zero:"No"})}${e?`, ${Ml("line",(s?.activity?.additions??0)+(s?.activity?.deletions??0),{format:e=>kl(e),zero:"No"})}`:""} changed`}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t${null!=l?`\n\t\t\t\t\t\t\t<div class="refs">\n\t\t\t\t\t\t\t\t${l?.get("branch")?.sort(((e,t)=>(e.current?-1:1)-(t.current?-1:1))).map((e=>`<span class="branch${e.current?" current":""}">${e.name}</span>`)).join("")??""}\n\t\t\t\t\t\t\t\t${l?.get("remote")?.sort(((e,t)=>(e.current?-1:1)-(t.current?-1:1)))?.map((e=>`<span class="remote${e.current?" current":""}">${e.name}</span>`)).join("")??""}\n\t\t\t\t\t\t\t\t${c?`<span class="stash">${Ml("stash",c,{plural:"stashes"})}</span>`:""}\n\t\t\t\t\t\t\t\t${l?.get("tag")?.map((e=>`<span class="tag">${e.name}</span>`)).join("")??""}\n\t\t\t\t\t\t\t</div>`:""}\n\t\t\t\t\t\t</div>`;var d},grouped:!0,position:(e,t,n,o,r)=>{const{x:i}=r,s=o.getBoundingClientRect();let a=s.right-i;return a+t>s.right&&(a=s.right-t),{top:0,left:a}}},transition:{duration:0},zoom:{enabled:a(),rescale:!1,type:"wheel",onzoom:Ze((()=>this.activeDayChanged()),250)},onafterinit:function(){this.$.main.selectAll(".bb-axis-x").node()?.remove();this.$.main.selectAll(".bb-axis-y").node()?.remove();const e=this.$.main.selectAll(".bb-grid").node();try{e?.removeAttribute("clip-path")}catch{}const t=this.$.main.selectAll(".bb-regions").node(),n=this.$.main.selectAll(".bb-chart").node();null!=t&&null!=n&&n.insertAdjacentElement("afterend",t)}})}else this._chart.load({columns:[["date",...t],["activity",...n]]}),this._chart.axis.max({y:E}),this._chart.regions(m);this.activeDayChanged()}};function fd(e){return new Date(e).setHours(0,0,0,0)}cd([Nt],pd.prototype,"activeDay",2),cd([od({singleLine:!0})],pd.prototype,"activeDayChanged",1),cd([Nt],pd.prototype,"data",2),cd([od({singleLine:!0})],pd.prototype,"dataChanged",1),cd([Nt],pd.prototype,"markers",2),cd([Nt],pd.prototype,"searchResults",2),cd([Nt],pd.prototype,"visibleDays",2),cd([od({singleLine:!0})],pd.prototype,"visibleDaysChanged",1),cd([od({singleLine:!0})],pd.prototype,"select",1),cd([od({singleLine:!0})],pd.prototype,"unselect",1),cd([od({singleLine:!0})],pd.prototype,"loadChartCore",1),pd=cd([un({name:"graph-minimap",template:dd,styles:ud})],pd);const md=Pl(pd,{events:{onSelected:"selected"}}),gd=e=>(t,n)=>function(e,t=cl.Absolute,n="short+short",o){switch(o){case p.Tooltip:return`${xl(e,n)} (${wl(e)})`;case p.RowEntry:default:return t===cl.Relative?wl(e):xl(e,n)}}(t,e?.dateStyle,e?.dateFormat,n),bd=(()=>{const t={};return["head","remote","tag","stash","check","loading","warning","added","modified","deleted","renamed","resolved","pull-request","show","hide"].forEach((n=>{t[n]=(0,e.createElement)("span",{className:`graph-icon icon--${n}`})})),["upstream-ahead","upstream-behind"].forEach((n=>{t[n]=(0,e.createElement)("span",{className:`graph-icon mini-icon icon--${n}`})})),t})(),vd=e=>bd[e],yd=(()=>{switch(ll?"web-windows":al?"web-macOS":sl?"web-linux":"web"){case"web-macOS":return"darwin";case"web-windows":return"win32";default:return"linux"}})();function wd({subscriber:n,nonce:o,state:r,onChooseRepository:i,onColumnsChange:s,onDimMergeCommits:a,onDoubleClickRef:l,onDoubleClickRow:c,onEnsureRowPromise:d,onMissingAvatars:u,onMissingRefsMetadata:p,onMoreRows:f,onRefsVisibilityChange:m,onSearch:g,onSearchPromise:b,onSearchOpenInView:v,onSelectionChange:y,onDismissBanner:w,onExcludeType:x,onIncludeOnlyRef:C,onUpdateGraphConfiguration:S}){const k=(0,e.useRef)(null),[T,R]=(0,e.useState)(r.rows??[]),[_,E]=(0,e.useState)(r.avatars),[O,I]=(0,e.useState)(r.refsMetadata),[F,j]=(0,e.useState)(r.repositories??[]),[U,V]=(0,e.useState)(F.find((e=>e.path===r.selectedRepository))),[Z,q]=(0,e.useState)(r.selectedRows),[K,Y]=(0,e.useState)(r.activeRow),[X,Q]=(0,e.useState)(r.activeDay),[J,ee]=(0,e.useState)(r.visibleDays),[te,ne]=(0,e.useState)(r.config),[oe,re]=(0,e.useState)(r.columns),[ie,se]=(0,e.useState)(r.excludeRefs),[ae,le]=(0,e.useState)(r.excludeTypes),[ce,de]=(0,e.useState)(r.includeOnlyRefs),[ue,he]=(0,e.useState)(r.context),[pe,fe]=(0,e.useState)(r.paging?.hasMore??!1),[me,ge]=(0,e.useState)(r.loading),[be,ve]=(0,e.useState)(r.theming),[ye,we]=(0,e.useState)(r.branchName),[xe,Ce]=(0,e.useState)(r.lastFetched),[Se,ke]=(0,e.useState)(r.windowFocused),[Te,Re]=(0,e.useState)(r.trialBanner),[_e,Ee]=(0,e.useState)(r.allowed??!1),[Oe,Ie]=(0,e.useState)(r.selectedRepositoryVisibility===dl.Private),[Me,Pe]=(0,e.useState)(r.subscription),ze=(0,e.useRef)(null),[$e,Ae]=(0,e.useState)(void 0),{results:De,resultsError:Ne}=Td(r),[Le,He]=(0,e.useState)(De),[Be,Fe]=(0,e.useState)(Ne),[Ge,We]=(0,e.useState)(!1),[je,Ue]=(0,e.useState)(!1),[Ve,Ze]=(0,e.useState)(r.workingTreeStats??{added:0,modified:0,deleted:0}),qe=(0,e.useRef)(void 0),Ke=(0,e.useRef)(new Set),Ye=(0,e.useRef)(new Set);function Xe(e,t,n){switch(n&&ve(e.theming),t){case"didChangeTheme":n||ve(e.theming);break;case z:E(e.avatars);break;case D:ke(e.windowFocused);break;case $:I(e.refsMetadata);break;case A:re(e.columns),he(e.context);break;case L:R(e.rows??[]),q(e.selectedRows),E(e.avatars),I(e.refsMetadata),fe(e.paging?.hasMore??!1),ge(e.loading);break;case G:{const{results:t,resultsError:n}=Td(e);Fe(n),He(t),q(e.selectedRows),Ue(!1);break}case M:ne(e.config);break;case H:q(e.selectedRows);break;case N:se(e.excludeRefs),le(e.excludeTypes),de(e.includeOnlyRefs);break;case P:Ee(e.allowed??!1),Pe(e.subscription);break;case B:Ze(e.workingTreeStats??{added:0,modified:0,deleted:0});break;case W:Ce(e.lastFetched);break;default:{Ee(e.allowed??!1),n||ve(e.theming),we(e.branchName),Ce(e.lastFetched),re(e.columns),R(e.rows??[]),Ze(e.workingTreeStats??{added:0,modified:0,deleted:0}),ne(e.config),q(e.selectedRows),se(e.excludeRefs),le(e.excludeTypes),de(e.includeOnlyRefs),he(e.context),E(e.avatars??{}),I(e.refsMetadata),fe(e.paging?.hasMore??!1),j(e.repositories??[]),V(F.find((t=>t.path===e.selectedRepository))),Ie(e.selectedRepositoryVisibility===dl.Private),Pe(e.subscription),Re(e.trialBanner??!0);const{results:t,resultsError:o}=Td(e);Fe(o),He(t),ge(e.loading);break}}}(0,e.useEffect)((()=>n?.(Xe)),[]),(0,e.useEffect)((()=>(window.addEventListener("keydown",et),()=>{window.removeEventListener("keydown",et)})),[K]);const Qe=(0,e.useMemo)((()=>{if(!te?.minimap)return;const e=new Map,t=new Map,n=te?.enabledMinimapMarkerTypes??[];let o,r,i,s,a,l,c,d,u,p,f={head:void 0,branch:void 0,remote:void 0,tag:void 0};for(let m=T.length-1;m>=0;m--)d=T[m],p=d.stats,o=Rd(d.date),o!==r&&(r=o,f={head:void 0,branch:void 0,remote:void 0,tag:void 0}),d.heads?.length&&(n.includes(h.Head)||n.includes(h.LocalBranches))&&(f.branch=d.sha,s=[],d.heads.forEach((e=>{e.isCurrentHead&&(f.head=d.sha),(n.includes(h.LocalBranches)||n.includes(h.Head)&&e.isCurrentHead)&&s.push({type:"branch",name:e.name,current:e.isCurrentHead&&n.includes(h.Head)})})),i=t.get(o),null==i?t.set(o,s):i.push(...s)),d.remotes?.length&&(n.includes(h.Upstream)||n.includes(h.RemoteBranches))&&(f.remote=d.sha,a=[],d.remotes.forEach((e=>{let t=!1;e.current&&(f.remote=d.sha,t=!0),(n.includes(h.RemoteBranches)||n.includes(h.Upstream)&&t)&&a.push({type:"remote",name:`${e.owner}/${e.name}`,current:t&&n.includes(h.Upstream)})})),i=t.get(o),null==i?t.set(o,a):i.push(...a)),"stash-node"===d.type&&n.includes(h.Stashes)&&(l={type:"stash",name:d.message},i=t.get(o),null==i?t.set(o,[l]):i.push(l)),d.tags?.length&&n.includes(h.Tags)&&(f.tag=d.sha,c=d.tags.map((e=>({type:"tag",name:e.name}))),i=t.get(o),null==i?t.set(o,c):i.push(...c)),u=e.get(o),null==u?(u=null!=p?{activity:{additions:p.additions,deletions:p.deletions},commits:1,files:p.files,sha:d.sha}:{commits:1,sha:d.sha},e.set(o,u)):(u.commits++,u.sha=f.head??f.branch??f.remote??f.tag??u.sha,null!=p&&(null==u.activity?u.activity={additions:p.additions,deletions:p.deletions}:(u.activity.additions+=p.additions,u.activity.deletions+=p.deletions),u.files=(u.files??0)+p.files));return{stats:e,markers:t}}),[T,te?.minimap,te?.enabledMinimapMarkerTypes]),Je=(0,e.useMemo)((()=>{if(!te?.minimap||!te.enabledMinimapMarkerTypes?.includes(h.Highlights))return;const e=new Map;if(null!=Le?.ids){let t,n,o,r;for([n,o]of Object.entries(Le.ids))t=Rd(o.date),r=e.get(t),null==r&&e.set(t,{type:"search-result",sha:n})}return e}),[Le,te?.minimap,te?.enabledMinimapMarkerTypes]),et=e=>{if("Enter"===e.key||" "===e.key){const t=kd(K??r.activeRow)?.id;if(null==t)return;const n=k.current?.graphContainerRef.current;if(!e.composedPath().some((e=>e===n)))return;const o=T.find((e=>e.sha===t));if(null==o)return;c?.(o,"Enter"!==e.key)}};(0,e.useEffect)((()=>{null==Be&&null!=Le&&0!==Le.count&&null!=$e&&ze.current?.logSearch($e)}),[Le]);const tt=(0,e.useMemo)((()=>{if(null==Le?.ids||!$e?.query)return 0;const e=kd(K)?.id;let t=e?Le.ids[e]?.i:void 0;return null==t&&([t]=xd(Le,$e,K)),t<1?1:t+1}),[K,Le]),nt=(0,e.useMemo)((()=>null==ce||0===Object.keys(ce).length),[ce]),ot=(0,e.useMemo)((()=>!nt||(!!te?.dimMergeCommits||null!=ae&&Object.values(ae).includes(!0))),[ae,nt,te?.dimMergeCommits]),rt=async e=>{if(null==d)return e;if(Ke.current.has(e))return e;if(Ye.current.has(e))return;let t=setTimeout((()=>{t=void 0,ge(!0)}),500);const n=await d(e,!1);if(null==t?ge(!1):clearTimeout(t),n?.id===e)return Ke.current.add(e),e;null!=n&&Ye.current.add(e)},it=e=>{const t=e.target,n=t.value;if(!["branch-all","branch-current"].includes(n)&&!["remotes","stashes","tags","mergeCommits"].includes(n))return;const o=t.checked;if("mergeCommits"===n)return void a?.(o);const r=n,i=ae?.[r];(null==i&&o||null!=i&&i!==o)&&(le({...ae,[r]:o}),x?.(r,o))};return t().createElement(t().Fragment,null,(()=>{if(null==Me||!Oe||_e&&!Te)return;let e,n,o="account",r="",i=0;switch([Tl.FreeInPreviewTrial,Tl.FreePlusInTrial].includes(Me.state)&&(i=Rl(Me,"days")??0),Me.state){case Tl.Free:case Tl.Paid:return;case Tl.FreeInPreviewTrial:o="calendar",r="neutral",e=t().createElement(t().Fragment,null,t().createElement("p",{className:"alert__title"},"GitLens Pro Trial"),t().createElement("p",{className:"alert__message"},"You have ",i<1?"less than one day":Ml("day",i)," left in your 3-day GitLens Pro trial. Don't worry if you need more time, you can extend your trial for an additional free 7-days of the Commit Graph and other"," ",t().createElement("a",{href:"command:gitlens.plus.learn"},"GitLens+ features")," on private repos."));break;case Tl.FreePlusInTrial:o="calendar",r="neutral",e=t().createElement(t().Fragment,null,t().createElement("p",{className:"alert__title"},"GitLens Pro Trial"),t().createElement("p",{className:"alert__message"},"You have ",i<1?"less than one day":Ml("day",i)," left in your GitLens Pro trial. Once your trial ends, you'll continue to have access to the Commit Graph and other"," ",t().createElement("a",{href:"command:gitlens.plus.learn"},"GitLens+ features")," on local and public repos, while upgrading to GitLens Pro gives you access on private repos."));break;case Tl.FreePreviewTrialExpired:o="warning",r="warning",e=t().createElement(t().Fragment,null,t().createElement("p",{className:"alert__title"},"Extend Your GitLens Pro Trial"),t().createElement("p",{className:"alert__message"},"Your free 3-day GitLens Pro trial has ended, extend your trial to get an additional free 7-days of the Commit Graph and other"," ",t().createElement("a",{href:"command:gitlens.plus.learn"},"GitLens+ features")," on private repos.")),n=t().createElement("a",{className:"alert-action",href:"command:gitlens.plus.loginOrSignUp"},"Extend Pro Trial");break;case Tl.FreePlusTrialExpired:o="warning",r="warning",e=t().createElement(t().Fragment,null,t().createElement("p",{className:"alert__title"},"GitLens Pro Trial Expired"),t().createElement("p",{className:"alert__message"},"Your GitLens Pro trial has ended, please upgrade to GitLens Pro to continue to use the Commit Graph and other ",t().createElement("a",{href:"command:gitlens.plus.learn"},"GitLens+ features")," on private repos.")),n=t().createElement("a",{className:"alert-action",href:"command:gitlens.plus.purchase"},"Upgrade to Pro");break;case Tl.VerificationRequired:o="unverified",r="warning",e=t().createElement(t().Fragment,null,t().createElement("p",{className:"alert__title"},"Please verify your email"),t().createElement("p",{className:"alert__message"},"Before you can use ",t().createElement("a",{href:"command:gitlens.plus.learn"},"GitLens+ features")," on private repos, please verify your email address.")),n=t().createElement(t().Fragment,null,t().createElement("a",{className:"alert-action",href:"command:gitlens.plus.resendVerification"},"Resend Verification Email"),t().createElement("a",{className:"alert-action",href:"command:gitlens.plus.validate"},"Refresh Verification Status"))}return t().createElement("section",{className:"graph-app__banners"},t().createElement("div",{className:"alert"+(""!==r?` alert--${r}`:"")},t().createElement("span",{className:`alert__icon codicon codicon-${o}`}),t().createElement("div",{className:"alert__content"},e,n&&t().createElement("div",{className:"alert__actions"},n)),_e&&t().createElement("button",{className:"alert__dismiss",type:"button",onClick:()=>(Re(!1),void w?.("trial"))},t().createElement("span",{className:"codicon codicon-chrome-close"}))))})(),t().createElement("header",{className:"titlebar graph-app__header"},t().createElement("div",{className:"titlebar__row titlebar__row--wrap"},t().createElement("div",{className:"titlebar__group titlebar__group--fixed"},t().createElement("button",{type:"button",className:"action-button",slot:"trigger",title:"Switch to Another Repository...",disabled:F.length<2,onClick:()=>{i?.()}},U?.formattedName??"none selected",F.length>1&&t().createElement("span",{className:"codicon codicon-chevron-down action-button__more","aria-hidden":"true"})),U&&t().createElement(t().Fragment,null,t().createElement("span",null,t().createElement("span",{className:"codicon codicon-chevron-right"})),t().createElement("a",{href:"command:gitlens.graph.switchToAnotherBranch",className:"action-button",title:"Switch to Another Branch..."},ye,t().createElement("span",{className:"codicon codicon-chevron-down action-button__more","aria-hidden":"true"})),t().createElement("span",null,t().createElement("span",{className:"codicon codicon-chevron-right"})),t().createElement("a",{href:"command:gitlens.graph.fetch",className:"action-button",title:"Fetch Repository"},t().createElement("span",{className:"codicon codicon-sync action-button__icon"})," Fetch"," ",xe&&t().createElement("small",null,"(Last fetched ",wl(new Date(xe)),")")))),t().createElement("div",{className:"titlebar__group titlebar__group--fixed"},r.debugging&&t().createElement("span",{className:"titlebar__group titlebar__debugging"},me&&t().createElement("span",{className:"icon--loading icon-modifier--spin"}),T.length>0&&t().createElement("span",null,"showing ",T.length," item",T.length?"s":"")),(()=>{if(!Me)return;let e,n=Me.plan.effective.name,o=!0;switch(Me.state){case Tl.Free:case Tl.FreePreviewTrialExpired:case Tl.FreePlusTrialExpired:o=!1,n="GitLens Free";break;case Tl.FreeInPreviewTrial:case Tl.FreePlusInTrial:{const t=Rl(Me,"days")??0;n="GitLens Pro (Trial)",e=`${t<1?"<1 day":Ml("day",t)} left`;break}case Tl.VerificationRequired:o=!1,n=`${n} (Unverified)`}return t().createElement("span",{className:"badge-container mr-loose"},t().createElement("span",{className:"badge is-help"},t().createElement("span",{className:"repo-access"+(o?" is-pro":"")},"✨")," ",n,e&&t().createElement(t().Fragment,null,"  ",t().createElement("small",null,e))),t().createElement(wc,{placement:"top end",className:"badge-popover"},o?"You have access to all GitLens and GitLens+ features on any repo.":"You have access to GitLens+ features on local & public repos, and all other GitLens features on any repo.",t().createElement("br",null),t().createElement("br",null),"✨ indicates GitLens+ features"))})(),t().createElement("a",{href:"https://github.com/gitkraken/vscode-gitlens/discussions/2158",title:"Commit Graph Feedback","aria-label":"Commit Graph Feedback",className:"action-button"},t().createElement("span",{className:"codicon codicon-feedback"})))),_e&&t().createElement("div",{className:"titlebar__row"},t().createElement("div",{className:"titlebar__group"},t().createElement(pc,null,t().createElement("button",{type:"button",className:"action-button",slot:"trigger",title:"Filter Graph"},t().createElement("span",{className:"codicon codicon-filter"+(ot?"-filled":"")}),ot&&t().createElement("span",{className:"action-button__indicator"}),t().createElement("span",{className:"codicon codicon-chevron-down action-button__more","aria-hidden":"true"})),t().createElement(rc,{slot:"content"},t().createElement(oc,null,"Filter options"),t().createElement(nc,{role:"none"},t().createElement(ol,{orientation:"vertical",value:nt&&!0!==U?.isVirtual?"branch-all":"branch-current",readOnly:!0===U?.isVirtual},!0!==U?.isVirtual&&t().createElement(nl,{name:"branching-toggle",value:"branch-all",onChange:e=>{const t=e.target,n=t.value,o=t.checked,r="branch-all"===n&&o;nt!==r&&C?.(r)}},"Show All Local Branches"),t().createElement(nl,{name:"branching-toggle",value:"branch-current"},"Show Current Branch Only"))),t().createElement(tc,null),!0!==U?.isVirtual&&t().createElement(t().Fragment,null,t().createElement(nc,{role:"none"},t().createElement(tl,{value:"remotes",onChange:it,defaultChecked:ae?.remotes??!1},"Hide Remote Branches")),t().createElement(nc,{role:"none"},t().createElement(tl,{value:"stashes",onChange:it,defaultChecked:ae?.stashes??!1},"Hide Stashes"))),t().createElement(nc,{role:"none"},t().createElement(tl,{value:"tags",onChange:it,defaultChecked:ae?.tags??!1},"Hide Tags")),t().createElement(tc,null),t().createElement(nc,{role:"none"},t().createElement(tl,{value:"mergeCommits",onChange:it,defaultChecked:te?.dimMergeCommits??!1},"Dim Merge Commit Rows")))),t().createElement("span",null,t().createElement("span",{className:"action-divider"})),t().createElement(Zc,{ref:ze,label:"Search Commits",step:tt,total:Le?.count??0,valid:Boolean($e?.query&&$e.query.length>2),more:Le?.paging?.hasMore??!1,searching:je,value:$e?.query??"",errorMessage:Be?.error??"",resultsHidden:Ge,resultsLoaded:null!=Le,onChange:e=>(e=>{const t=e.detail;Ae(t);const n=t.query.length>=3;He(void 0),Fe(void 0),We(!1),Ue(n),g?.(n?t:void 0)})(e),onNavigate:e=>(async e=>{if(null==Le)return;const t=e.detail?.direction??"next";let n,o,r,i=Le,s=i.count;"first"===t?(r=!1,n=0):"last"===t?(r=!1,n=-1):(r="next"===t,[n,o]=xd(i,$e,K,r));let a=0;for(;a<1e3;){if(a++,-1==n)if(r)if(null!=$e&&i?.paging?.hasMore){let e;Ue(!0);try{e=await(b?.($e,{more:!0}))}finally{Ue(!1)}null==e?.results||"error"in e.results?n=0:s<e.results.count?(i=e.results,n=s,s=i.count):n=0}else n=0;else if("last"===t&&null!=$e&&i?.paging?.hasMore){let e;Ue(!0);try{e=await(b?.($e,{limit:0,more:!0}))}finally{Ue(!1)}null==e?.results||"error"in e.results||(s<e.results.count&&(i=e.results,s=i.count),n=s)}else n=s-1;if(o=o??Sd(i,n),null!=o&&(o=await rt(o),null!=o))break;We(!0),n=Cd(n,r,i,$e)}null!=o&&queueMicrotask((()=>k.current?.selectCommits([o],!1,!0)))})(e),onOpenInView:()=>{null!=$e&&v?.($e)}}),t().createElement("span",null,t().createElement("span",{className:"action-divider"})),t().createElement("button",{type:"button",className:"action-button action-button--narrow",title:"Toggle Minimap (Experimental)","aria-label":"Toggle Minimap (Experimental)",onClick:e=>{S?.({minimap:!te?.minimap})}},t().createElement("span",{className:"codicon codicon-graph-line action-button__icon"})))),t().createElement("div",{className:"progress-container infinite"+(me?" active":""),role:"progressbar"},t().createElement("div",{className:"progress-bar"}))),te?.minimap&&t().createElement(md,{ref:qe,activeDay:X,data:Qe?.stats,markers:Qe?.markers,searchResults:Je,visibleDays:J,onSelected:e=>(e=>{let{sha:t}=e.detail;if(null==t){const n=e.detail.date?.getTime();if(null==n)return;t=T.reduce(((e,t)=>Math.abs(t.date-n)<Math.abs(e.date-n)?t:e)).sha}k.current?.selectCommits([t],!1,!0)})(e)}),t().createElement("main",{id:"main",className:"graph-app__main"+(_e?"":" is-gated"),"aria-hidden":!_e},!_e&&t().createElement("div",{className:"graph-app__cover"}),void 0!==U?t().createElement(t().Fragment,null,t().createElement(xt(),{ref:k,avatarUrlByEmail:_,columnsSettings:oe,contexts:ue,cssVariables:be?.cssVariables,dimMergeCommits:te?.dimMergeCommits,enabledRefMetadataTypes:te?.enabledRefMetadataTypes,enabledScrollMarkerTypes:te?.enabledScrollMarkerTypes,enableMultiSelection:te?.enableMultiSelection,excludeRefsById:ie,excludeByType:ae,formatCommitDateTime:gd(te),getExternalIcon:vd,graphRows:T,hasMoreCommits:pe,highlightedShas:Le?.ids,highlightRowsOnRefHover:te?.highlightRowsOnRefHover,includeOnlyRefsById:ce,scrollRowPadding:te?.scrollRowPadding,showGhostRefsOnRowHover:te?.showGhostRefsOnRowHover,showRemoteNamesOnRefs:te?.showRemoteNamesOnRefs,isContainerWindowFocused:Se,isLoadingRows:me,isSelectedBySha:Z,nonce:o,onColumnResized:(e,t)=>{t.width&&s?.({[e]:{width:t.width,isHidden:t.isHidden,order:t.order}})},onDoubleClickGraphRow:(e,t,n)=>{t!==wt.REF_ZONE_TYPE&&t!==wt.GRAPH_ZONE_TYPE&&c?.(n,!0)},onDoubleClickGraphRef:(e,t,n,o)=>{t.length>0&&l?.(t[0],o)},onGraphColumnsReOrdered:e=>{const t={};for(const[n,o]of Object.entries(e))t[n]={...o};s?.(t)},onGraphMouseLeave:qe.current?e=>{qe.current?.unselect(void 0,!0)}:void 0,onGraphRowHovered:qe.current?(e,t,n)=>{t!==wt.REF_ZONE_TYPE&&null!=qe.current&&qe.current?.select(n.date,!0)}:void 0,onSelectGraphRows:e=>{const t=e[0],n=null!=t?`${t.sha}|${t.date}`:void 0;r.activeRow=n,Y(n),Q(t?.date),y?.(e)},onToggleRefsVisibilityClick:(e,t,n)=>{m?.(t,n)},onEmailsMissingAvatarUrls:e=>{u?.(e)},onRefsMissingMetadata:e=>{p?.(e)},onShowMoreCommits:()=>{ge(!0),f?.()},onGraphVisibleRowsChanged:qe.current?(e,t)=>{ee({top:new Date(e.date).setHours(23,59,59,999),bottom:new Date(t.date).setHours(0,0,0,0)})}:void 0,platform:yd,refMetadataById:O,shaLength:te?.idLength,themeOpacityFactor:be?.themeOpacityFactor,useAuthorInitialsForAvatars:!te?.avatars,workDirStats:Ve})):t().createElement("p",null,"No repository is selected"),t().createElement("button",{className:"column-button",type:"button",role:"button","data-vscode-context":ue?.header||JSON.stringify({webviewItem:"gitlens:graph:columns"}),onClick:e=>{const t=e.nativeEvent,n=new MouseEvent("contextmenu",{bubbles:!0,clientX:t.clientX,clientY:t.clientY});t.target?.dispatchEvent(n),t.stopImmediatePropagation()}},t().createElement("span",{className:"codicon codicon-settings-gear columnsettings__icon","aria-label":"Column Settings"}))))}function xd(e,t,n,o=!0){if(null==e.ids)return[0,void 0];const r=kd(n),i=r?.id;if(null==i)return[0,void 0];let s,a,l;const c=e.ids[i];if(null!=c&&(s=c.i,a=i,l=s),null==s){const t=null!=r?.date?r.date+(o?1:-1):void 0;if(null==t)return[0,void 0];let n,i,c,d;for([i,{date:c,i:n}]of Object.entries(e.ids))o?c<t&&(null==d||c>d)&&(a=i,d=c,l=n):c>t&&(null==d||c<=d)&&(a=i,d=c,l=n);s=null==l?e.count-1:l+(o?-1:1)}return s=Cd(s,o,e,t),s===l?[s,a]:[s,void 0]}function Cd(e,t,n,o){return t?e<n.count-1?e++:e=null!=o&&n?.paging?.hasMore?-1:0:e>0?e--:e=null!=o&&n?.paging?.hasMore?-1:n.count-1,e}function Sd(e,t){const{ids:n}=e;for(const e in n)if(n[e].i===t)return e}function kd(e){if(null==e)return;const[t,n]=e.split("|");return{id:t,date:Number(n)}}function Td(e){let t,n;return null!=e.searchResults&&("error"in e.searchResults?n=e.searchResults:t=e.searchResults),{results:t,resultsError:n}}function Rd(e){return new Date(e).setHours(0,0,0,0)}const _d=new Map([["--vscode-gitlens-graphLane1Color","#15a0bf"],["--vscode-gitlens-graphLane2Color","#0669f7"],["--vscode-gitlens-graphLane3Color","#8e00c2"],["--vscode-gitlens-graphLane4Color","#c517b6"],["--vscode-gitlens-graphLane5Color","#d90171"],["--vscode-gitlens-graphLane6Color","#cd0101"],["--vscode-gitlens-graphLane7Color","#f25d2e"],["--vscode-gitlens-graphLane8Color","#f2ca33"],["--vscode-gitlens-graphLane9Color","#7bd938"],["--vscode-gitlens-graphLane10Color","#2ece9d"]]);class Ed extends yt{constructor(){super("GraphApp")}onBind(){const e=super.onBind?.()??[];this.log("onBind()"),this.ensureTheming(this.state);const o=document.getElementById("root");return null!=o&&((0,n.render)(t().createElement(wd,{nonce:this.state.nonce,state:this.state,subscriber:e=>this.registerEvents(e),onColumnsChange:Ze((e=>this.onColumnsChanged(e)),250),onDimMergeCommits:e=>this.onDimMergeCommits(e),onRefsVisibilityChange:(e,t)=>this.onRefsVisibilityChanged(e,t),onChooseRepository:Ze((()=>this.onChooseRepository()),250),onDoubleClickRef:(e,t)=>this.onDoubleClickRef(e,t),onDoubleClickRow:(e,t)=>this.onDoubleClickRow(e,t),onMissingAvatars:(...e)=>this.onGetMissingAvatars(...e),onMissingRefsMetadata:(...e)=>this.onGetMissingRefsMetadata(...e),onMoreRows:(...e)=>this.onGetMoreRows(...e),onSearch:Ze(((e,t)=>this.onSearch(e,t)),250),onSearchPromise:(...e)=>this.onSearchPromise(...e),onSearchOpenInView:(...e)=>this.onSearchOpenInView(...e),onSelectionChange:Ze((e=>this.onSelectionChanged(e)),250),onDismissBanner:e=>this.onDismissBanner(e),onEnsureRowPromise:this.onEnsureRowPromise.bind(this),onExcludeType:this.onExcludeType.bind(this),onIncludeOnlyRef:this.onIncludeOnlyRef.bind(this),onUpdateGraphConfiguration:this.onUpdateGraphConfiguration.bind(this)}),o),e.push({dispose:()=>(0,n.unmountComponentAtNode)(o)})),e}onMessageReceived(e){const t=e.data;switch(this.log(`onMessageReceived(${t.id}): name=${t.method}`),t.method){case I.method:l(I,t,((e,t)=>{this.setState({...this.state,...e.state},t)}));break;case W.method:l(W,t,((e,t)=>{this.state.lastFetched=e.lastFetched,this.setState(this.state,t)}));break;case z.method:l(z,t,((e,t)=>{this.state.avatars=e.avatars,this.setState(this.state,t)}));break;case D.method:l(D,t,((e,t)=>{this.state.windowFocused=e.focused,this.setState(this.state,t)}));break;case A.method:l(A,t,((e,t)=>{this.state.columns=e.columns,null!=e.context?null==this.state.context?this.state.context={header:e.context}:this.state.context.header=e.context:null!=this.state.context?.header&&(this.state.context.header=void 0),this.setState(this.state,t)}));break;case N.method:l(N,t,((e,t)=>{this.state.excludeRefs=e.excludeRefs,this.state.excludeTypes=e.excludeTypes,this.state.includeOnlyRefs=e.includeOnlyRefs,this.setState(this.state,t)}));break;case $.method:l($,t,((e,t)=>{this.state.refsMetadata=e.metadata,this.setState(this.state,t)}));break;case L.method:l(L,t,((e,n)=>{let o;if(e.rows.length&&null!=e.paging?.startingCursor&&null!=this.state.rows){const n=this.state.rows,r=n[n.length-1]?.sha;let i=n.length;const s=e.rows.length;if(this.log(`onMessageReceived(${t.id}:${t.method}): paging in ${s} rows into existing ${i} rows at ${e.paging.startingCursor} (last existing row: ${r})`),o=[],o.length=i+s,e.paging.startingCursor!==r){this.log(`onMessageReceived(${t.id}:${t.method}): searching for ${e.paging.startingCursor} in existing rows`);let r,a=0;for(r of n)if(o[a++]=r,r.sha===e.paging.startingCursor){this.log(`onMessageReceived(${t.id}:${t.method}): found ${e.paging.startingCursor} in existing rows`),i=a,i!==n.length&&(o.length=i+s);break}}else for(let e=0;e<i;e++)o[e]=n[e];for(let t=0;t<s;t++)o[i+t]=e.rows[t]}else this.log(`onMessageReceived(${t.id}:${t.method}): setting to ${e.rows.length} rows`),o=0===e.rows.length?this.state.rows:e.rows;this.state.avatars=e.avatars,void 0!==e.refsMetadata&&(this.state.refsMetadata=e.refsMetadata),this.state.rows=o,this.state.paging=e.paging,null!=e.selectedRows&&(this.state.selectedRows=e.selectedRows),this.state.loading=!1,this.setState(this.state,n)}));break;case G.method:l(G,t,((e,t)=>{this.state.searchResults=e.results,null!=e.selectedRows&&(this.state.selectedRows=e.selectedRows),this.setState(this.state,t)}));break;case H.method:l(H,t,((e,t)=>{this.state.selectedRows=e.selection,this.setState(this.state,t)}));break;case M.method:l(M,t,((e,t)=>{this.state.config=e.config,this.setState(this.state,t)}));break;case P.method:l(P,t,((e,t)=>{this.state.subscription=e.subscription,this.state.allowed=e.allowed,this.setState(this.state,t)}));break;case B.method:l(B,t,((e,t)=>{this.state.workingTreeStats=e.stats,this.setState(this.state,t)}));break;default:super.onMessageReceived?.(e)}}onThemeUpdated(e){const t=document.body.style;t.setProperty("--graph-theme-opacity-factor",e.isLightTheme?"0.5":"1"),t.setProperty("--color-graph-actionbar-background",e.isLightTheme?q(e.colors.background,5):K(e.colors.background,5)),t.setProperty("--color-graph-actionbar-selectedBackground",e.isLightTheme?q(e.colors.background,10):K(e.colors.background,10)),t.setProperty("--color-graph-background",e.isLightTheme?q(e.colors.background,5):K(e.colors.background,5)),t.setProperty("--color-graph-background2",e.isLightTheme?q(e.colors.background,10):K(e.colors.background,10));const n=e.computedStyle.getPropertyValue("--color-graph-text-selected-row").trim();t.setProperty("--color-graph-text-dimmed-selected",Y(n,50)),t.setProperty("--color-graph-text-dimmed",Y(e.colors.foreground,20)),t.setProperty("--color-graph-text-normal",Y(e.colors.foreground,85)),t.setProperty("--color-graph-text-secondary",Y(e.colors.foreground,65)),t.setProperty("--color-graph-text-disabled",Y(e.colors.foreground,50));const o=ie.from(e.colors.background),r=ie.from(e.colors.foreground),i=o.getRelativeLuminance(),s=r.getRelativeLuminance();let a=ie.fromCssVariable("--color-graph-minimap-visibleAreaBackground",e.computedStyle);t.setProperty("--color-graph-minimap-visibleAreaBackground",a.luminance((e=>{let t,n;s>i?(n=s,t=i):(t=s,n=i);return e/1*(n-t)+t})(e.isLightTheme?.6:.1)).toString()),e.isLightTheme||(a=ie.fromCssVariable("--color-graph-minimap-tip-headForeground",e.computedStyle),t.setProperty("--color-graph-minimap-tip-headForeground",a.opposite().toString()),a=ie.fromCssVariable("--color-graph-minimap-tip-upstreamForeground",e.computedStyle),t.setProperty("--color-graph-minimap-tip-upstreamForeground",a.opposite().toString()),a=ie.fromCssVariable("--color-graph-minimap-tip-branchForeground",e.computedStyle),t.setProperty("--color-graph-minimap-tip-branchForeground",a.opposite().toString())),e.isInitializing||(this.state.theming=void 0,this.setState(this.state,"didChangeTheme"))}setState(e,t){this.log("setState()");const n=this.ensureTheming(e);this.state=e,this.callback?.(this.state,t,n)}ensureTheming(e){return null==e.theming&&(e.theming=this.getGraphTheming(),!0)}getGraphTheming(){const e=window.getComputedStyle(document.body),t=e.getPropertyValue("--color-background"),n={};let o,r=0;for(const[i,s]of _d){o=e.getPropertyValue(i)||s,n[`--column-${r}-color`]=o,n[`--graph-color-${r}`]=o;for(const e of[15,25,45,50])n[`--graph-color-${r}-bg${e}`]=X(t,o,e);for(const e of[10,50])n[`--graph-color-${r}-f${e}`]=Y(o,e);r++}const i=document.body.classList.contains("vscode-high-contrast");return{cssVariables:{"--app__bg0":t,"--panel__bg0":e.getPropertyValue("--color-graph-background"),"--panel__bg1":e.getPropertyValue("--color-graph-background2"),"--section-border":e.getPropertyValue("--color-graph-background2"),"--selected-row":e.getPropertyValue("--color-graph-selected-row"),"--selected-row-border":i?`1px solid ${e.getPropertyValue("--color-graph-contrast-border")}`:"none","--hover-row":e.getPropertyValue("--color-graph-hover-row"),"--hover-row-border":i?`1px dashed ${e.getPropertyValue("--color-graph-contrast-border")}`:"none","--text-selected":e.getPropertyValue("--color-graph-text-selected"),"--text-selected-row":e.getPropertyValue("--color-graph-text-selected-row"),"--text-hovered":e.getPropertyValue("--color-graph-text-hovered"),"--text-dimmed-selected":e.getPropertyValue("--color-graph-text-dimmed-selected"),"--text-dimmed":e.getPropertyValue("--color-graph-text-dimmed"),"--text-normal":e.getPropertyValue("--color-graph-text-normal"),"--text-secondary":e.getPropertyValue("--color-graph-text-secondary"),"--text-disabled":e.getPropertyValue("--color-graph-text-disabled"),"--text-accent":e.getPropertyValue("--color-link-foreground"),"--text-inverse":e.getPropertyValue("--vscode-input-background"),"--text-bright":e.getPropertyValue("--vscode-input-background"),...n},themeOpacityFactor:parseInt(e.getPropertyValue("--graph-theme-opacity-factor"))||1}}onDismissBanner(e){this.sendCommand(g,{key:e})}onColumnsChanged(e){this.sendCommand(k,{config:e})}onRefsVisibilityChanged(e,t){this.sendCommand(T,{refs:e,visible:t})}onChooseRepository(){this.sendCommand(f,void 0)}onDimMergeCommits(e){this.sendCommand(m,{dim:e})}onDoubleClickRef(e,t){this.sendCommand(b,{type:"ref",ref:e,metadata:t})}onDoubleClickRow(e,t){this.sendCommand(b,{type:"row",row:{id:e.sha,type:e.type},preserveFocus:t})}onGetMissingAvatars(e){this.sendCommand(y,{emails:e})}onGetMissingRefsMetadata(e){this.sendCommand(w,{metadata:e})}onGetMoreRows(e){return this.sendCommand(x,{id:e})}onSearch(e,t){return null==e&&(this.state.searchResults=void 0),this.sendCommand(C,{search:e,limit:t?.limit})}async onSearchPromise(e,t){try{return await this.sendCommandWithCompletion(C,{search:e,limit:t?.limit,more:t?.more},G)}catch{return}}onSearchOpenInView(e){this.sendCommand(S,{search:e})}async onEnsureRowPromise(e,t){try{return await this.sendCommandWithCompletion(v,{id:e,select:t},F)}catch{return}}onExcludeType(e,t){this.sendCommand(R,{key:e,value:t})}onIncludeOnlyRef(e){this.sendCommand(E,e?{}:{refs:[{id:"HEAD",type:"head",name:"HEAD"}]})}onUpdateGraphConfiguration(e){this.sendCommand(_,{changes:e})}onSelectionChanged(e){const t=e.map((e=>({id:e.sha,type:e.type})));this.sendCommand(O,{selection:t})}registerEvents(e){return this.callback=e,()=>{this.callback=void 0}}}new Ed})();var i=r.q;export{i as GraphApp};