!function(){var t={757:function(t,e,n){t.exports=n(666)},91:function(t){"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},666:function(t){var e=function(t){"use strict";var e,n=Object.prototype,s=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},r=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",o=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,s){var i=e&&e.prototype instanceof v?e:v,r=Object.create(i.prototype),a=new j(s||[]);return r._invoke=function(t,e,n){var s=h;return function(i,r){if(s===g)throw new Error("Generator is already running");if(s===p){if("throw"===i)throw r;return S()}for(n.method=i,n.arg=r;;){var a=n.delegate;if(a){var o=L(a,n);if(o){if(o===f)continue;return o}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(s===h)throw s=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);s=g;var c=l(t,e,n);if("normal"===c.type){if(s=n.done?p:d,c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(s=p,n.method="throw",n.arg=c.arg)}}}(t,n,a),r}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",d="suspendedYield",g="executing",p="completed",f={};function v(){}function _(){}function m(){}var y={};c(y,r,(function(){return this}));var b=Object.getPrototypeOf,q=b&&b(b(E([])));q&&q!==n&&s.call(q,r)&&(y=q);var w=m.prototype=v.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(i,r,a,o){var c=l(t[i],t,r);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&s.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,o)}),(function(t){n("throw",t,a,o)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,o)}))}o(c.arg)}var i;this._invoke=function(t,s){function r(){return new e((function(e,i){n(t,s,e,i)}))}return i=i?i.then(r,r):r()}}function L(t,n){var s=t.iterator[n.method];if(s===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var i=l(s,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,f;var r=i.arg;return r?r.done?(n[t.resultName]=r.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,f):r:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function E(t){if(t){var n=t[r];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(s.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return _.prototype=m,c(w,"constructor",m),c(m,"constructor",_),_.displayName=c(m,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,o,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(k.prototype),c(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,s,i,r){void 0===r&&(r=Promise);var a=new k(u(e,n,s,i),r);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),c(w,o,"Generator"),c(w,r,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var s=e.pop();if(s in t)return n.value=s,n.done=!1,n}return n.done=!0,n}},t.values=E,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(M),!t)for(var n in this)"t"===n.charAt(0)&&s.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(s,i){return o.type="throw",o.arg=t,n.next=s,i&&(n.method="next",n.arg=e),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],o=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=s.call(a,"catchLoc"),u=s.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&s.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),M(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var s=n.completion;if("throw"===s.type){var i=s.arg;M(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,s){return this.delegate={iterator:E(t),resultName:n,nextLoc:s},"next"===this.method&&(this.arg=e),f}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},25:function(t,e,n){var s={"./0_home.svg":533,"./1_category.svg":712,"./2_score.svg":928};function i(t){var e=r(t);return n(e)}function r(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=r,t.exports=i,i.id=25},684:function(t,e,n){var s={"./0.jpg":579,"./1.jpg":42,"./10.jpg":393,"./11.jpg":860,"./2.jpg":720,"./3.jpg":63,"./4.jpg":816,"./5.jpg":671,"./6.jpg":870,"./7.jpg":963,"./8.jpg":225,"./9.jpg":229};function i(t){var e=r(t);return n(e)}function r(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=r,t.exports=i,i.id=684},130:function(t,e,n){"use strict";t.exports=n.p+"assets/icons/5e063b0bcdf5e7ea745c.svg"},333:function(t,e,n){"use strict";t.exports=n.p+"assets/icons/faa0d553aded653a5b06.svg"},875:function(t,e,n){"use strict";t.exports=n.p+"assets/icons/53ede9bb0c88ea9e0d0e.svg"},690:function(t,e,n){"use strict";t.exports=n.p+"assets/icons/22e8ed5e816eaeb0e0b8.svg"},302:function(t,e,n){"use strict";t.exports=n.p+"assets/icons/42c1a1d42b6c91d45372.svg"},533:function(t,e,n){"use strict";t.exports=n.p+"assets/icons/8e8a0eae11f17903dc60.svg"},712:function(t,e,n){"use strict";t.exports=n.p+"assets/icons/39393a896386685a8320.svg"},928:function(t,e,n){"use strict";t.exports=n.p+"assets/icons/915e21513bc9f77613b5.svg"},431:function(t,e,n){"use strict";t.exports=n.p+"assets/icons/ffae8548802169e81b8a.svg"},78:function(t,e,n){"use strict";t.exports=n.p+"assets/icons/34080f979dc913029dc0.svg"},52:function(t,e,n){"use strict";t.exports=n.p+"assets/icons/d04a74ab05578fe69d07.svg"},696:function(t,e,n){"use strict";t.exports=n.p+"assets/icons/a5a5964ebd03592e9648.svg"},65:function(t,e,n){"use strict";t.exports=n.p+"assets/icons/d1ac7e4610faa613660f.svg"},620:function(t,e,n){"use strict";t.exports=n.p+"assets/icons/e7ed27e16b122ad9aa41.svg"},771:function(t,e,n){"use strict";t.exports=n.p+"assets/icons/dce21aba0a7b22b7b697.svg"},413:function(t,e,n){"use strict";t.exports=n.p+"assets/icons/b6527503f66aaac66edd.svg"},579:function(t,e,n){"use strict";t.exports=n.p+"assets/img/34e0739b21ed7e919ee3.jpg"},42:function(t,e,n){"use strict";t.exports=n.p+"assets/img/0f007fea99bd84f93f91.jpg"},393:function(t,e,n){"use strict";t.exports=n.p+"assets/img/5df3396f38bee7cc4870.jpg"},860:function(t,e,n){"use strict";t.exports=n.p+"assets/img/671df23c446e48c8fd92.jpg"},720:function(t,e,n){"use strict";t.exports=n.p+"assets/img/0b658c0fa0e46b98b76a.jpg"},63:function(t,e,n){"use strict";t.exports=n.p+"assets/img/fed6fb7bcfe1749d22a6.jpg"},816:function(t,e,n){"use strict";t.exports=n.p+"assets/img/0c92456558a80b6e23ac.jpg"},671:function(t,e,n){"use strict";t.exports=n.p+"assets/img/d4dc1da3097c20235364.jpg"},870:function(t,e,n){"use strict";t.exports=n.p+"assets/img/e917ccf3d4aec6aa227a.jpg"},963:function(t,e,n){"use strict";t.exports=n.p+"assets/img/000f9ce1b25e31dce2b1.jpg"},225:function(t,e,n){"use strict";t.exports=n.p+"assets/img/6692d5d0487b3e1f839d.jpg"},229:function(t,e,n){"use strict";t.exports=n.p+"assets/img/3fdc39980e29bdfe1c16.jpg"}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,n),r.exports}n.m=t,n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var s=e.getElementsByTagName("script");s.length&&(t=s[s.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t}(),n.b=document.baseURI||self.location.href;var s={};!function(){"use strict";function t(t,e,n,s,i,r,a){try{var o=t[r](a),c=o.value}catch(t){return void n(t)}o.done?e(c):Promise.resolve(c).then(s,i)}function e(e){return function(){var n=this,s=arguments;return new Promise((function(i,r){var a=e.apply(n,s);function o(e){t(a,i,r,o,c,"next",e)}function c(e){t(a,i,r,o,c,"throw",e)}o(void 0)}))}}n.d(s,{t:function(){return rt}});var i=n(757),r=n.n(i),a=n(91),o=n.n(a),c=new URL(n(333),n.b),u=(o()(c),n(690)),l=function(){return'\n    <footer class="footer container">\n      <a class="footer__logo hover-opacity" href="https://rs.school/js/" target="rsschool">\n        <img class="footer__logo-img" src="'.concat(u,'" alt="logo-rs_school">\n      </a>\n\n      <a class="footer__dev-name hover-opacity" href="https://www.linkedin.com/in/aleksandr-alehno-889bb0213/" target="linkedin">\n        App developer: Aleksandr\n      </a>\n\n      <time class="footer__date">2022</time>\n    </footer>')},h=n(302),d=function(t){return rt.btnPath=t,'\n    <a class="set-btn hover-rotate" href="/#/settings">\n      <img src="'.concat(h,'" alt="setting btn">\n    </a>')},g=n(875),p={render:function(){return'\n    <div class="main-page page">\n      <header class="main-page__header header container">\n        '.concat(d(""),'\n      </header>\n\n      <main class="main container">\n        <img class="main__logo" src="').concat(g,'" alt="logo-img">\n\n        <div class="main__question">\n          <a class="main__question-btn hover-bg" href="/#/categories_artist">Artist quiz</a>\n          <a class="main__question-btn hover-bg" href="/#/categories_pictures">Pictures quiz</a>\n        </div>\n      </main>\n\n      ').concat(l(),"\n    </div>")}},f=n(620),v=function(t,e){return'\n    <a class="set-btn hover-rotate '.concat(e,'" href="/#/').concat(t,'">\n      <img src="').concat(f,'" alt="cross">\n    </a>')},_=n(771),m=n(413),y={render:function(){return'\n    <div class="settings-page page">\n      <header class="settings-page__header header container">\n        <h2 class="settings-page__header-title">Settings</h2>\n\n        '.concat(v(rt.btnPath,""),'\n      </header>\n      \n      <main class="settings container">\n        <div class="settings__content">\n          <div class="settings__volume">\n            <h3 class="settings__title">Volume</h3>\n            <input class="settings__volume-progress" type="range" value="35">\n            <div class="settings__volume-btn-wrap">\n              <button class="settings__volume-btn hover-opacity"><img src="').concat(_,'" alt="mute-button"></button>\n              <button class="settings__volume-btn hover-opacity"><img src="').concat(m,'" alt="sound-button"></button>\n            </div>\n          </div>\n\n          <div class="settings__time-game">\n            <h3 class="settings__title">Time game</h3>\n            <div class="settings__time-switcher">\n              <span class="settings__switch-on">On</span>\n              <label class="settings__switch-label">\n                <input class="settings__time-input" type="checkbox">\n                <span class="settings__time-slider"></span>\n              </label>\n            </div>\n          </div>\n\n          <div class="settings__time-answer">\n            <h3 class="settings__title">Time to answer</h3>\n            <div class="settings__answer-btn-wrap">\n              <button class="settings__answer-btn hover-opacity">&ndash;</button>\n              <input class="settings__answer-input" type="number" value="20" readonly>\n              <button class="settings__answer-btn hover-opacity">+</button>\n            </div>\n          </div>\n        </div>\n\n        <div class="settings__buttons">\n          <button class="settings__btn hover-opacity">Default</button>\n          <button class="settings__btn hover-opacity">Save</button>\n        </div>\n      </main>\n      \n      ').concat(l(),"\n    </div>")}},b=function(t,e,n){return'\n    <li class="category-item not-played">\n      <a class="category-item__link" href="/#/'.concat(n,"/").concat(t+1,'">\n        <div class="category-item__header">\n          <h4 class="category-item__title">Category-').concat(t+1,'</h4>\n          <div class="category-item__amount">\n            <span class="category-item__num">-</span>/<span class="category-item__num">-</span>\n          </div>\n        </div>\n  \n        <img class="category-item__img" src="').concat(e,'" alt="img-').concat(t,'">\n        <span class="category-item__play-again">Play again</span>\n      </a>\n    </li>\n    ')},q=n(130),w=function(){return'\n    <a class="header__logo" href="/#/">\n      <img class="header__logo-img" src="'.concat(q,'" alt="logo-category">\n    </a>\n    ')},x=function(t){return t<12?++t:t=""};function k(t,e){t.keys().forEach((function(n,s){return e[s]=t(n)}))}var L=[];k(n(25),L);var I=function(t,e){return'\n    <nav class="nav">\n      <ul class="nav__list">\n        <li class="nav__item">\n          <a class="nav__link hover-opacity" href="/#/">\n            <img class="nav__icon" src="'.concat(L[0],'" alt="icon">\n            Home\n          </a>\n        </li>\n        \n        <li class="nav__item">\n          <a class="nav__link ').concat(e[0],'" href="/#/').concat(rt.questionType,'">\n            <img class="nav__icon" src="').concat(L[1],'" alt="icon">\n            Categories\n          </a>\n        </li>\n        \n        <li class="nav__item">\n          <a class="nav__link ').concat(e[1],'" href="/#/').concat(t.resource,'/score">\n            <img class="nav__icon" src="').concat(L[2],'" alt="icon">\n            Score\n          </a>\n        </li>\n      </ul>\n    </nav>')},M=[];k(n(684),M);var j={render:function(t){rt.questionType=t.resource;var e=t.resource.split("_")[1];return'\n    <div class="category-page page">\n      <header class="header container">\n        '.concat(w(),"\n        ").concat(I(t,["nav__link--active","hover-opacity"]),"\n        ").concat(d(t.resource),'\n      </header>\n\n      <main class="category container">\n        <h2 class="category__title">Categories - ').concat(e,' quiz</h2>\n        <ul class="category__list">\n          ').concat(M.map((function(e,n){return b(n,e,t.resource)})).join("\n"),"\n        </ul>\n      </main>\n\n      ").concat(l(),"\n    </div>")}},E=function(){return'\n    <div class="time-indicator opacity">\n      <div class="time-indicator__progress">\n        <div class="time-indicator__progress-inner"></div>\n      </div>\n\n      <span class="time-indicator__time">0:20</span>\n    </div>'},S=function(){return'\n    <div class="questions-indicator questions-indicator--center">\n      '.concat(function(){for(var t="",e=0;e<10;e++)t+='<span class="questions-indicator__item"></span>';return t}(),"\n    </div>")},C=function(){return'\n    <div class="overlay question-overlay hidden" data-result="">\n      <div class="question-result">\n        <div class="question-result__img" data-result="">\n          <div class="question-result__indicator" data-result=""></div>\n        </div> \n        <h4 class="question-result__title" data-result="">title</h4>\n        <span class="question-result__author" data-result="">author</span>,\n        <span class="question-result__year" data-result="">year</span>\n        <button class="question-result__btn hover-opacity" data-result="">Next</button>\n      </div>\n    </div>\n    '},N=n(431),A=function(t){var e=x(+t.catNum);return'\n    <div class="overlay category-overlay hidden">\n      <div class="category-result">\n        <img class="category-result__img" src="'.concat(N,'" alt="icon"> \n        <h4 class="category-result__title">Congratulations!</h4>\n\n        <div class="category-result__num-wrap">\n          <span class="category-result__num"></span>/<span class="category-result__num"></span>\n        </div>\n        \n        <div class="category-result__btn-wrap">\n          <a class="category-result__btn" href="/#/').concat(t.resource,'">Home</a>\n          <a class="category-result__btn" href="/#/').concat(t.resource,"/").concat(e,'">Next Quiz</a>\n        </div>\n      </div>\n    </div>\n    ')},P=n(52),O=function(t){var e=x(+t.catNum);return'\n    <div class="overlay category-overlay hidden">\n      <div class="category-result">\n        <img class="category-result__img-grand" src="'.concat(P,'" alt="icon"> \n        <span class="category-result__subtitle-grand">Grand result</span>\n        <h4 class="category-result__title-grand">Congratulations!</h4>\n        <a class="category-result__btn-grand" href="/#/').concat(t.resource,"/").concat(e,'">Next</a> \n      </div>\n    </div>\n    ')},R=n(78),F=function(t){return'\n    <div class="overlay category-overlay hidden">\n      <div class="category-result">\n        <img class="category-result__img-over" src="'.concat(R,'" alt="icon"> \n        <h4 class="category-result__title-over">Game Over</h4>\n\n        <span class="category-result__subtitle-over">Play again?</span>\n\n        <div class="category-result__btn-wrap">\n          <a class="category-result__btn" href="/#/').concat(t.resource,'">No</a> \n          <a class="category-result__btn play-again" href="/#/').concat(t.resource,"/").concat(t.catNum,'">Yes</a> \n        </div>\n      </div>\n    </div>\n    ')},T=function(t){return'\n    <div class="overlay quit-overlay hidden">\n      <div class="quit-game">\n        '.concat(v("".concat(t.resource,"/").concat(t.catNum),"quit-game__img cancel-quit"),'\n        <p class="quit-game__title">Do you really want to quit the game?</p>\n        <div class="quit-game__btn-wrap">\n          <a class="quit-game__btn cancel-quit" href="/#/').concat(t.resource,"/").concat(t.catNum,'">Cancel</a> \n          <a class="quit-game__btn" href="/#/').concat(t.resource,'">Yes</a> \n        </div>\n      </div>\n    </div>\n    ')},Q={render:function(t){return'\n    <div class="question-artist page">\n      <header class="question-artist__header question-container">\n        '.concat(v("".concat(t.resource,"/").concat(t.catNum),"quit-btn"),"\n        ").concat(E(),'\n      </header>\n\n      <main class="question-artist question-container">\n        <p class="question-title">Who is the author of this picture?</p>\n        <div class="question-artist__img-block">\n          ').concat(S(),'\n        </div>\n\n        <div class="question-artist__options">\n          <button class="question-artist__option hover-bg">artist</button>\n          <button class="question-artist__option hover-bg">artist</button>\n          <button class="question-artist__option hover-bg">artist</button>\n          <button class="question-artist__option hover-bg">artist</button>\n        </div>\n        \n        ').concat(C(),"\n        \n        ").concat(F(t),"\n        ").concat(A(t),"\n        ").concat(O(t),"\n\n        ").concat(T(t),"\n      </main>\n\n      ").concat(l(),"\n    </div>")}},V={render:function(t){return'\n    <div class="question-pictures page">\n      <header class="question-pictures__header question-container">\n        '.concat(v("".concat(t.resource,"/").concat(t.catNum),"quit-btn"),"\n        ").concat(E(),'\n      </header>\n\n      <main class="question-pictures question-container">\n        <p class="question-title">Which is <span class="question-title__artist-name"></span> picture?</p>\n         \n        <div class="question-pictures__options">\n          <div class="question-pictures__option"></div>\n          <div class="question-pictures__option"></div>\n          <div class="question-pictures__option"></div>\n          <div class="question-pictures__option"></div>\n        </div>\n\n        ').concat(S(),"\n        ").concat(C(),"\n\n        ").concat(F(t),"\n        ").concat(A(t),"\n        ").concat(O(t),"\n\n        ").concat(T(t),"\n      </main>\n\n      ").concat(l(),"\n    </div>")}},D={render:function(){return'\n    <div class="error-page page">\n      <h1>404 Error</h1>\n    </div>\n    '}},B=function(){return'\n    <li class="score__item none">\n      <h4 class="score__item-title"></h4>\n      <div class="score__item-bg">\n        <div class="score__item-content">\n          <span class="score__item-name">name</span>\n          <div>\n            <span class="score__item-artist">author</span>,\n            <span class="score__item-year">year</span>\n          </div>\n        </div>\n      </div>\n    </li>'},G={render:function(t){var e=t.resource.split("_")[1];return'\n    <div class="score-page page">\n      <header class="header container">\n        '.concat(w(),"\n        ").concat(I(t,["hover-opacity","nav__link--active"]),"\n        ").concat(d("".concat(t.resource,"/").concat(t.score)),'\n      </header>\n\n      <main class="score container">\n        <h2 class="score__title">').concat(e,' quiz</h2>\n        <div class="score-content">\n          <p class="score__sub-title">Score Page</p>\n          <ul class="score__list">').concat(function(){for(var t="",e=0;e<10;e++)t+=B();return t}(),'</ul>\n        </div>\n\n        <div class="score-btns score-btns--margin"> \n          <button class="score-btns__btn hover-opacity" data-sign="0"></button>\n          <div class="score-btns__nums">\n            <span class="score-btns__num">0</span>\n            /\n            <span class="score-btns__num">0</span>\n          </div>\n          <button class="score-btns__btn hover-opacity" data-sign="1"></button>\n        </div>\n      </main>\n\n      ').concat(l(),"\n    </div>")}},U=function(){var t=(location.hash.slice(1).toLowerCase()||"/").split("/"),e={};return e.resource=t[1],isFinite(t[2])?e.catNum=t[2]:e.score=t[2],e};function z(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Y(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function H(t,e,n){return e&&Y(t.prototype,e),n&&Y(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function $(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var J=function(){function t(e,n,s){z(this,t),$(this,"qView",null),$(this,"qInfo",null),this.data=e,this.options=null,this.isRightAnswer=!1,this.isAnswered=!1,this.isCatPassed=!1,this.passedQuestns=[],this.catNum=s,this.current="categories_artist"===n?s*=10:120+(s*=10),this.last=this.current+10,this.type=n,this.catResBlock=0,this.numTrueAnsw=null,this.quit=!1}return H(t,[{key:"start",value:function(t,e){this.qView=t,this.qInfo=e}},{key:"updateView",value:function(){this.qView&&this.qView.update()}},{key:"createOptions",value:function(){var t=this,e=[],n=[],s=this.data[this.current].author;e.push(s),n.push(this.current),function t(s){for(;n.length<4;){var i=(0,r=s.length-1,Math.floor(Math.random()*(r-0+1))+0);if(n.includes(i)||e.includes(s[i].author))return t(s);e.push(s[i].author),n.push(i)}var r}(this.data),this.options=n.map((function(e){return e===t.current?t.data[e].isRight=!0:t.data[e].isRight=!1,t.data[e]})),this.updateView()}},{key:"checkAnswer",value:function(t){var e=t.target;if(e.hasAttribute("data-num")){var n=e.getAttribute("data-num");this.isRightAnswer=this.data[n].isRight,this.passedQuestns.push(this.isRightAnswer),this.isAnswered=!0,this.updateView()}}},{key:"nextQuestion",value:function(){var t,e;this.current++,this.isAnswered=!1,this.current===this.last&&(this.isCatPassed=!0,this.numTrueAnsw=this.passedQuestns.filter((function(t){return t})).length,this.catResBlock=(t=this.numTrueAnsw,e=this.passedQuestns.length,t&&t!==e?1:t&&t===e?2:0),this.updateView()),this.isCatPassed||this.createOptions(),this.isCatPassed&&this.sendInfo()}},{key:"sendInfo",value:function(){var t=this,e={type:null,num:null,questns:null,total:null,ready:null};e.type=this.type,e.num=this.catNum,e.questns=this.passedQuestns,e.total=this.passedQuestns.length,e.ready=this.passedQuestns.filter((function(t){return t})).length,this.qInfo.forEach((function(n,s){n.num===e.num&&n.type===e.type&&t.qInfo.splice(s,1)})),this.qInfo.push(e),this.qInfo.sort((function(t,e){return t.num-e.num}))}},{key:"playAgain",value:function(){this.current=this.last-10,this.isCatPassed=!1,this.passedQuestns=[],this.createOptions()}},{key:"quitGame",value:function(){this.quit=!0,this.updateView()}},{key:"cancelQuit",value:function(t){t.target.closest(".cancel-quit")&&(this.quit=!1,this.updateView())}}]),t}(),W=n(696),K=n(65),X=function(){function t(){z(this,t),$(this,"qModel",null),$(this,"qField",null),$(this,"questnEl",null),$(this,"options",null),$(this,"qIndicator",null),$(this,"questnResult",null),$(this,"catResult",null),$(this,"catResNums",null),$(this,"quitBlock",null),$(this,"grayDiv",null)}return H(t,[{key:"start",value:function(t,e){this.qModel=t,this.qField=e;var n=n="categories_artist"===this.qModel.type?".question-artist__img-block":".question-title__artist-name",s=s="categories_artist"===this.qModel.type?".question-artist__options":".question-pictures__options";this.questnEl=this.qField.querySelector(n),this.options=this.qField.querySelector(s),this.qIndicatorItems=this.qField.querySelectorAll(".questions-indicator__item"),this.questnResult=this.qField.querySelectorAll("[data-result]"),this.catResultArr=this.qField.querySelectorAll(".category-overlay"),this.catResNums=this.qField.querySelectorAll(".category-result__num"),this.quitBlock=this.qField.querySelector(".quit-overlay")}},{key:"update",value:function(){this.renderOptions(),this.renderIndicator(),this.renderResQuestion(),this.renderQuitBlock(),this.renderResultBlock()}},{key:"renderResQuestion",value:function(){var t,e;this.qModel.isAnswered?(this.questnResult[0].classList.remove("hidden"),t=this.qModel,e=this.questnResult,(0,this.getImg)(t.current,e[1]),e[3].textContent=t.data[t.current].name,e[4].textContent=t.data[t.current].author,e[5].textContent=t.data[t.current].year,t.isRightAnswer?e[2].style.backgroundImage="url(".concat(W,")"):e[2].style.backgroundImage="url(".concat(K,")"),"categories_artist"===this.qModel.type?this.grayDiv=this.questnEl:this.grayDiv=this.options,this.grayDiv.classList.add("gray")):(this.grayDiv&&this.grayDiv.classList.remove("gray"),this.questnResult[0].classList.add("hidden"))}},{key:"renderResultBlock",value:function(){this.qModel.isCatPassed?(1===this.qModel.catResBlock&&(this.catResNums[0].textContent=this.qModel.numTrueAnsw,this.catResNums[1].textContent=this.qModel.passedQuestns.length),this.catResultArr[this.qModel.catResBlock].classList.remove("hidden")):this.catResultArr[this.qModel.catResBlock].classList.add("hidden")}},{key:"renderQuitBlock",value:function(){this.qModel.quit?this.quitBlock.classList.remove("hidden"):this.quitBlock.classList.add("hidden")}},{key:"renderIndicator",value:function(){var t=this;this.qModel.passedQuestns.forEach((function(e,n){if(t.qModel.isCatPassed)t.qIndicatorItems[n].style.backgroundColor="#C4C4C4";else{var s=s=e?"#3dda69":"#ff7e7e";t.qIndicatorItems[n].style.backgroundColor=s}}))}},{key:"renderOptions",value:function(){var t=this;this.qModel.options.forEach((function(e,n){"categories_artist"===t.qModel.type?(t.options.children[n].textContent=e.author,e.isRight&&t.getImg(e.imageNum,t.questnEl)):(t.getImg(e.imageNum,t.options.children[n]),e.isRight&&(t.questnEl.textContent=e.author)),t.options.children[n].setAttribute("data-num",e.imageNum)}))}},{key:"getImg",value:function(t,e){var n=new Image;n.src="https://raw.githubusercontent.com/alexalehno/image-data/master/img/".concat(t,".jpg"),n.onload=function(){return e.style.backgroundImage="url(".concat(n.src,")")}}}]),t}(),Z=function(){function t(){var e=this;z(this,t),$(this,"qModel",null),$(this,"qField",null),$(this,"chooseOption",(function(t){return e.qModel.checkAnswer(t)})),$(this,"cancel",(function(t){return e.qModel.cancelQuit(t)})),$(this,"again",(function(){return e.qModel.playAgain()})),$(this,"quit",(function(){return e.qModel.quitGame()})),$(this,"next",(function(){return e.qModel.nextQuestion()}))}return H(t,[{key:"start",value:function(t,e){var n=this;this.qModel=t,this.qField=e;var s=s="categories_artist"===this.qModel.type?".question-artist__options":".question-pictures__options";this.qField.querySelector(s).addEventListener("click",(function(t){return n.chooseOption(t)})),this.qField.querySelector(".quit-game").addEventListener("click",(function(t){return n.cancel(t)})),this.qField.querySelector(".play-again").addEventListener("click",(function(){return n.again()})),this.qField.querySelector(".quit-btn").addEventListener("click",(function(){return n.quit()})),this.qField.querySelector(".question-result__btn").addEventListener("click",(function(){n.qModel.isAnswered&&n.next()}))}}]),t}(),tt=function(){function t(){z(this,t),$(this,"gView",null),$(this,"catType",null),this.data=null,this.qInfo=[],this.scoreItem=null,this.isItemShown=!1,this.numPage=null,this.count=null,this.pages=null,this.pagesLength=null}var n;return H(t,[{key:"switchPage",value:function(t){var e=t.target.closest(".score-btns__btn");if(e){var n=e.getAttribute("data-sign");+n?this.numPage++:this.numPage--,this.numPage>this.pagesLength&&(this.numPage=this.pagesLength),this.numPage<1&&(this.numPage=1),+n?this.count++:this.count--,this.count>this.pagesLength-1&&(this.count=this.pagesLength-1),this.count<0&&(this.count=0),console.log(this.count),console.log(this.pages),this.updateView()}}},{key:"setCount",value:function(){var t=this;this.numPage=1,this.pages=this.qInfo.filter((function(e){return e.type===t.catType})),this.pagesLength=this.pages.length,this.count=0}},{key:"getData",value:(n=e(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,fetch("https://raw.githubusercontent.com/alexalehno/image-data/master/data.json");case 3:return e=t.sent,t.next=6,e.json();case 6:this.data=t.sent;case 7:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"start",value:function(t,e){this.gView=t,this.catType=e,this.setCount()}},{key:"updateView",value:function(){this.gView&&this.gView.update()}},{key:"showScoreInfo",value:function(t){var e=t.target.closest(".score__item");e&&(this.scoreItem=e,this.isItemShown=!0,this.updateView(),this.isItemShown=!1)}}]),t}(),et=tt,nt=function(){function t(){z(this,t),$(this,"gModel",null),$(this,"gField",null),$(this,"categoryItems",null),$(this,"scoreItems",null)}return H(t,[{key:"start",value:function(t,e){this.gModel=t,this.gField=e,this.categoryItems=this.gField.querySelectorAll(".category-item"),this.scoreItems=this.gField.querySelectorAll(".score__item")}},{key:"update",value:function(){var t=this;this.categoryItems.length&&this.categoryCard();var e=this.gModel.data,n=this.gModel.count,s=this.gModel.catType,i=this.gModel.pages;if(this.scoreItems.length&&i.length){document.querySelector(".score__sub-title").classList.add("none"),this.scoreItems.forEach((function(r,a){r.classList.remove("none"),r.classList.remove("gray"),i[n].questns[a]||r.classList.add("gray"),function(t,n,s,i){var o=r.querySelectorAll(".score__item-title, .score__item-bg, .score__item-name, .score__item-artist, .score__item-year"),c=c="categories_artist"===t?a:a+120,u=10*s[n].num+c;o[0].textContent="Cat-".concat(s[n].num+1),o[2].textContent=e[u].name,o[3].textContent=e[u].author,o[4].textContent=e[u].year,i(e[u].imageNum,o[1])}(s,n,i,t.getImg)})),this.gModel.isItemShown&&this.gModel.scoreItem.querySelector(".score__item-content").classList.toggle("score__item-content--show");var r=this.gField.querySelectorAll(".score-btns__num");r[0].textContent=this.gModel.pagesLength?this.gModel.numPage:this.gModel.pagesLength,r[1].textContent=this.gModel.pagesLength}}},{key:"categoryCard",value:function(){var t=this;this.gModel.qInfo.forEach((function(e){if(t.gModel.catType===e.type){var n=t.categoryItems[e.num].querySelectorAll(".category-item__num");n[0].textContent=e.ready,n[1].textContent=e.total,t.categoryItems[e.num].classList.remove("not-played")}}))}},{key:"getImg",value:function(t,e){var n=new Image;n.src="https://raw.githubusercontent.com/alexalehno/image-data/master/img/".concat(t,".jpg"),n.onload=function(){return e.style.backgroundImage="url(".concat(n.src,")")}}}]),t}(),st=function(){function t(){var e=this;z(this,t),$(this,"gModel",null),$(this,"gField",null),$(this,"switch",(function(t){return e.gModel.switchPage(t)})),$(this,"show",(function(t){return e.gModel.showScoreInfo(t)}))}return H(t,[{key:"start",value:function(t,e){var n=this;this.gModel=t,this.gField=e,this.gField.querySelector(".score__list").addEventListener("click",(function(t){return n.show(t)})),this.gField.querySelector(".score-btns").addEventListener("click",(function(t){return n.switch(t)}))}}]),t}(),it=function(){function t(){z(this,t)}return H(t,[{key:"getData",value:function(t){if(localStorage.getItem(t))return JSON.parse(localStorage.getItem(t))}},{key:"setData",value:function(t,e){localStorage.setItem(t,JSON.stringify(e))}}]),t}(),rt={btnPath:null,questionType:null,qInfo:null},at={"/":p,"/settings":y,"/categories_artist":j,"/categories_pictures":j,"/categories_artist/cat_num":Q,"/categories_pictures/cat_num":V,"/categories_artist/score":G,"/categories_pictures/score":G},ot=document.querySelector(".app"),ct=new it,ut=new et,lt=new nt,ht=new st,dt=new X,gt=new Z;function pt(){return(pt=e(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=function(){var t=U(),e=(t.resource?"/"+t.resource:"/")+(t.catNum?"/cat_num":"")+(t.score?"/score":""),n=at[e]?at[e]:D;if(ot.innerHTML=n.render(t),t.score&&(ut.start(lt,t.resource),lt.start(ut,ot),ut.updateView(),ht.start(ut,ot)),"/categories_artist"!==e&&"/categories_pictures"!==e||(ut.start(lt,t.resource),lt.start(ut,ot),ut.updateView()),t.catNum){var s=new J(ut.data,t.resource,t.catNum-1);s.start(dt,ut.qInfo),dt.start(s,ot),s.createOptions(),gt.start(s,ot)}},t.next=3,ut.getData();case 3:e(),window.addEventListener("hashchange",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}rt.qInfo=ut.qInfo,window.addEventListener("load",(function(){rt=ct.getData("storage")||rt,ut.qInfo=rt.qInfo,function(){pt.apply(this,arguments)}()})),window.addEventListener("beforeunload",(function(){ct.setData("storage",rt)}))}()}();