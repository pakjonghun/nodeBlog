(()=>{var t={760:(t,r,n)=>{function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=function(t){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,n){return t[r]=n}}function l(t,r,n,e){var o=r&&r.prototype instanceof g?r:g,i=Object.create(o.prototype),a=new G(e||[]);return i._invoke=function(t,r,n){var e=h;return function(o,i){if(e===d)throw new Error("Generator is already running");if(e===y){if("throw"===o)throw i;return P()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(e===h)throw e=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);e=d;var u=f(t,r,n);if("normal"===u.type){if(e=n.done?y:p,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(e=y,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function f(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h="suspendedStart",p="suspendedYield",d="executing",y="completed",v={};function g(){}function m(){}function w(){}var b={};b[a]=function(){return this};var _=Object.getPrototypeOf,x=_&&_(_(N([])));x&&x!==n&&o.call(x,a)&&(b=x);var L=w.prototype=g.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function j(t,r){function n(i,a,c,u){var s=f(t[i],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"===e(h)&&o.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function k(t,n){var e=t.iterator[n.method];if(e===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=r,k(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(e,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function S(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function N(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,i=function n(){for(;++e<t.length;)if(o.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=r,n.done=!0,n};return i.next=i}}return{next:P}}function P(){return{value:r,done:!0}}return m.prototype=L.constructor=w,w.constructor=m,m.displayName=s(w,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(j.prototype),j.prototype[c]=function(){return this},t.AsyncIterator=j,t.async=function(r,n,e,o,i){void 0===i&&(i=Promise);var a=new j(l(r,n,e,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),s(L,u,"Generator"),L[a]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var n in t)r.push(n);return r.reverse(),function n(){for(;r.length;){var e=r.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,o){return c.type="throw",c.arg=t,n.next=e,o&&(n.method="next",n.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return e("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return e(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc<=this.prev&&o.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var i=e;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:N(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=r),v}},t}("object"===e(t=n.nmd(t))?t.exports:{});try{regeneratorRuntime=o}catch(t){Function("r","regeneratorRuntime = r")(o)}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={id:e,loaded:!1,exports:{}};return t[e](i,i.exports,n),i.loaded=!0,i.exports}n.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),(()=>{"use strict";function t(t,r,n,e,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?r(u):Promise.resolve(u).then(e,o)}n(760);var r=function(t){try{return fetch(t,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}})}catch(t){console.log(t),alert("통신오류 입니다.")}};(function(){var n,e=(n=regeneratorRuntime.mark((function t(n){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r(n);case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(o,i){var a=n.apply(r,e);function c(r){t(a,o,i,c,u,"next",r)}function u(r){t(a,o,i,c,u,"throw",r)}c(void 0)}))});return function(t){return e.apply(this,arguments)}})()("/api").then((function(t){var r,n=t.data,o=n.post,i=n.user,a=t.error;a&&alert(a),function(t){var r=document.getElementById("menu"),n=t?'<button\n        onclick="window.location.href=\'/post/add\'"\n        class="post_btn"\n        id="post_btn" onclick="/post/add">\n        글쓰기\n      </button>\n      <button class="logout" id="logout">\n        로그아웃\n      </button>':'<button class="login_btn" id="login_btn",\n        onclick="window.location.href=\'/login\'">\n        로그인\n      </button>\n      <button class="join_btn" id="join_btn" onclick="window.location.href=\'/join\'">\n        회원가입\n      </button>';r.innerHTML=n;var e=r.querySelector("#logout");e&&e.addEventListener("click",(function(){localStorage.removeItem("token"),window.location.href="/"}))}(i),r=o.map((function(t){return' <li class="posts__list">\n          <a class="list__info" href="/post/'.concat(t._id,'">\n            <h3 class="info__title">').concat(t.title,'</h3>\n            <span class="info__date">').concat(t.createdAt&&t.createdAt.substring(0,10),'</span>\n            <span class="info__date">').concat(t.description&&t.description.substring(0,10),"</span>\n          </a>\n        </li>\n        ")})).join(""),e.innerHTML=r}));var e=document.getElementById("posts__lists")})()})();