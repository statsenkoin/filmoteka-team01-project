!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function n(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}};var r={},o=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new T(r||[]);return i._invoke=function(t,e,n){var r=d;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return O()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?p:f,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",v={};function m(){}function g(){}function y(){}var b={};s(b,i,(function(){return this}));var w=Object.getPrototypeOf,L=w&&w(w(N([])));L&&L!==n&&r.call(L,i)&&(b=L);var _=y.prototype=m.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(d).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function N(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:O}}function O(){return{value:e,done:!0}}return g.prototype=y,s(_,"constructor",y),s(y,"constructor",g),g.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},x(S.prototype),s(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new S(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(_),s(_,c,"Generator"),s(_,i,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=N,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(r);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var i="e55542ecb6aab3d889d16953eac82937",a="https://api.themoviedb.org/3",c="/trending/movie/week",s="/trending/movie/day",l="/genre/movie/list";function u(){return d.apply(this,arguments)}function d(){return(d=t(e)(t(r).mark((function e(){var n;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=fetch("".concat(a).concat(l,"?api_key=").concat(i)),t.next=4,n;case 4:return t.abrupt("return",t.sent.json());case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",console.log("error :>> ",t.t0));case 10:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=t(e)(t(r).mark((function e(n){var o;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o=fetch("".concat(a).concat(c,"?api_key=").concat(i,"&page=").concat(n)),t.next=4,o;case 4:return t.abrupt("return",t.sent.json());case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",console.log("error :>> ",t.t0));case 10:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function p(t){return v.apply(this,arguments)}function v(){return(v=t(e)(t(r).mark((function e(n){var o;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(a).concat(s,"?api_key=").concat(i,"&page=").concat(n));case 3:return o=t.sent,t.next=6,o.json();case 6:return t.abrupt("return",t.sent);case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",console.log("error :>> ",t.t0));case 12:case"end":return t.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function m(t){return g.apply(this,arguments)}function g(){return(g=t(e)(t(r).mark((function e(n){var o;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o=fetch("".concat(a,"/movie/").concat(n,"/videos?api_key=").concat(i,"&language=en-US")),t.next=4,o;case 4:return t.abrupt("return",t.sent.json());case 7:t.prev=7,t.t0=t.catch(0);case 9:return t.abrupt("return",console.log("error :>> ",error));case 10:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var y,b,w,L=9,_=1;function x(t,e,n){b=n,function(t,e){var n=t.reduce((function(t,e){return t+'<button type="button" '.concat(e===_?'class="pagination-button pagination-button-current"':'class="pagination-button"',">").concat(e,"</button>")}),"");y>L&&(1!==_&&(n='<button type="button" class="pagination-button">&lt;</button>'+n),_!==y&&(n+='<button type="button" class="pagination-button">&gt;</button>'));e.innerHTML="",e.insertAdjacentHTML("beforeend",n)}(function(t,e){var n,r,o=[],i=Math.floor(L/2);t<1?t=1:t>e&&(t=e);e<=L?(n=1,r=e):t<=i?(n=1,r=L):t+i>=e?(n=e-2*i,r=e):(n=t-i,r=t+i);for(var a=n;a<=r;a+=1)o.push(a);L>=9&&(o.splice(0,1,1),o.splice(o.length-1,1,e),t-1>i&&e>L&&o.splice(1,1," ..."),t+1+i<e&&e>L&&o.splice(o.length-2,1,"... "));return o}(_=t,y=e),b)}function S(t){if("BUTTON"===t.target.nodeName){var e=t.target.textContent;return isNaN(Number(e))||(w=Number(e)),">"===e&&(w=_===y?y:_+1),"<"===e&&(w=1===_?1:_-1)," ..."===e&&(w=_-(L-4)),"... "===e&&(w=_+(L-4)),_=w}}window.addEventListener("resize",(function(){var t=window.matchMedia("(min-width: 768px)").matches;L=t?9:5,x(_,y,b)}));var E={scrollPosition:null,disabledScroll:function(){E.scrollPosition=window.scrollY,document.body.style.cssText="\n        overflow: hidden;\n        top: -".concat(E.scrollPosition,"px;\n        left: 0;\n        height: 100vh;\n        width: 100vw;\n        padding-right: ").concat(window.innerWidth-document.body.offsetWidth,"px;\n        ")},enabledScroll:function(){document.body.style.cssText="",window.scroll({top:E.scrollPosition})}},k=E;function j(){var t=document.querySelectorAll(".js-modal-triger"),e=document.querySelector(".backdrop"),n=document.querySelectorAll(".modal"),r=document.querySelectorAll(".modal-close-btn");function o(t){t.preventDefault();var n=t.currentTarget.dataset.modal;document.querySelector("."+n).classList.add("active"),e.classList.add("active"),k.disabledScroll()}function i(t){t.preventDefault(),this.closest(".modal").classList.remove("active"),e.classList.remove("active"),k.enabledScroll()}document.addEventListener("keydown",(function(t){if("Escape"!==t.code)return;Array.from(n).forEach((function(t){t.classList.remove("active"),k.enabledScroll()})),e.classList.remove("active"),k.enabledScroll()})),e.addEventListener("click",(function(t){Array.from(n).forEach((function(t){t.classList.remove("active"),k.enabledScroll()})),e.classList.remove("active"),k.enabledScroll()})),Array.from(t).forEach((function(t){t.addEventListener("click",o)})),Array.from(r).forEach((function(t){t.addEventListener("click",i)}))}var T={genres:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]};function N(t,e){console.log(t);var n=t.map((function(t){var e=t.id,n=t.title,r=t.genre_ids,o=t.original_title,i=t.release_date,a=t.poster_path;return'<li class="movies-images__item" data-id='.concat(e,'>\n            <img class="movie-image" src="').concat(function(t){var e="https://image.tmdb.org/t/p/w500".concat(t);null===t&&(e="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg");return e}(a),'" \n            alt="Movie ').concat(n||o,'" />\n        <div class="box-description">\n            <div class="title_wrraper"><h2 class="box-description__title">').concat(n||o,'</h2></div>\n            <p class="box-description__text">\n                <span class="box-description__span">').concat(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T.genres,n=[],r=!0,o=!1,i=void 0;try{for(var a,c=function(t,r){var o=r.value,i=e.find((function(t){return t.id===o}));n.push(i.name)},s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)c(s,a)}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}n.length>3&&(n=n.slice(0,2)).push("Other");return n.join(", ")}(r)||"There are no genres","</span>").concat(i.slice(0,4)||"No year","\n            </p>\n        </div>\n    </li>")})).join("");e.innerHTML=n}j();function O(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T.genres,n=[],r=!0,o=!1,i=void 0;try{for(var a,c=function(t,r){var o=r.value,i=e.find((function(t){return t.id===o}));n.push(i.name)},s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)c(s,a)}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n.join(", ")}var q=document.querySelector(".modal-film-info");function F(t,e){var n=t.id,r=t.title,o=t.poster_path,i=t.vote_average,a=t.vote_count,c=t.popularity,s=t.original_title,l=t.overview,u=document.querySelector(".modal-film-info"),d='<div class="poster-block">\n        <img class="poster" src="https://image.tmdb.org/t/p/w500/'.concat(o,'" />\n           <button type="button" data-modal-id=').concat(n,'  class="youtube__btn js__youtube__btn">\n        <span class="background-image"></span>\n           <i class="fa fa-youtube-play" aria-hidden="true"></i>\n           </button>\n      </div>\n      <div class="film-information" id=\'').concat(n,'\'>\n        <h2 class="film-information-title">').concat(r,'</h2>\n        <table class="rating-table">\n          <tr>\n            <td class="table-subtitle">Vote / Votes</td>\n            <td class="table-inf"><span class="rating">').concat(i.toFixed(1),"</span> / ").concat(a,'</td>\n          </tr>\n          <tr>\n            <td class="table-subtitle">Popularity</td>\n            <td class="table-inf">').concat(c.toFixed(1),'</td>\n          </tr>\n          <tr>\n            <td class="table-subtitle">Original Title</td>\n            <td class="table-inf">').concat(s,'</td>\n          </tr>\n          <tr>\n            <td class="table-subtitle">Genre</td>\n            <td class="table-inf">').concat(e,'</td>\n          </tr>\n        </table>\n        <p class="about">About</p>\n        <p class="about-film">\n          ').concat(l,'\n        </p>\n        <div class="buttons-add">\n          <button type="button" class="btn-add js-add-to-watched">add to Watched</button>\n          <button type="button" class="btn-add js-add-to-queue">add to queue</button>\n        </div>\n      </div>');u.innerHTML=d}var P={};Object.defineProperty(P,"__esModule",{value:!0}),P.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var M={};function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(M,"__esModule",{value:!0}),M.default=function(t,e,n){e&&A(t.prototype,e);n&&A(t,n);return t};var C,I,D=new(function(){"use strict";function e(n){var r=n.selector,o=n.hidden,i=void 0===o||o;t(P)(this,e),this.refs=this.getRefs(r),i&&this.hide()}return t(M)(e,[{key:"getRefs",value:function(t){var e={};return e.spinner=document.querySelector(t),e}},{key:"show",value:function(){this.refs.spinner.classList.remove("is-hidden")}},{key:"hide",value:function(){this.refs.spinner.classList.add("is-hidden")}}]),e}())({selector:".loading"});console.log("🚀 ~ loadSpinner",D);var G=1,H=1,R=document.querySelector(".pagination");function W(){return(W=t(e)(t(r).mark((function e(n){var o;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(D.show(),(o=S(n))!==G){t.next=4;break}return t.abrupt("return");case 4:return G=o,t.next=7,Y();case 7:D.hide();case 8:case"end":return t.stop()}}),e)})))).apply(this,arguments)}R.addEventListener("click",(function(t){return W.apply(this,arguments)}));var U=document.querySelector(".home-gallery");function V(){return(V=t(e)(t(r).mark((function e(){var n;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return D.show(),t.next=3,u();case 3:return n=t.sent,C=n.genres,console.log("locStorageGenres :>> ",C),t.next=8,Y();case 8:D.hide();case 9:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function Y(){return B.apply(this,arguments)}function B(){return(B=t(e)(t(r).mark((function e(){var n;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return D.show(),t.next=3,f(G);case 3:n=t.sent,I=n.results,H=n.total_pages,console.log("locStorageFilms :>> ",I),console.log("totalPages :>> ",H),N(I,U),x(G,H,R),D.hide();case 11:case"end":return t.stop()}}),e)})))).apply(this,arguments)}!function(){V.apply(this,arguments)}(),U.addEventListener("click",(function(t){var e=t.target.closest(".movies-images__item");if(!e)return;var n=Number(e.dataset.id),r=I.find((function(t){return t.id===n})),o=O(r.genre_ids);j(),F(r,o)}));var J=" popularByWeek",z=" popularByDay",K="watched",Q="queue",X="genres",Z=function(){"use strict";function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];t(P)(this,e),this.key=n,this.value=r}return t(M)(e,[{key:"setLocalStorage",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.value=t,localStorage.setItem(this.key,JSON.stringify(this.value))}},{key:"getLocalStorage",value:function(){try{var t=localStorage.getItem(this.key);if(t)return JSON.parse(t)}catch(t){console.log("Error",t)}}},{key:"addFilmtoStorage",value:function(t){var e=this.getLocalStorage(this.key);e.push(t),this.value=e,this.setLocalStorage(this.value)}},{key:"deleteFilmFromStorage",value:function(t){var e=this.getLocalStorage(this.key);if(e.length)if(e.find((function(e){return e.id===t.id}))){console.log("I`m delete film from the collection!");var n=e.findIndex((function(e){return e.id===t.id}));e.splice(n,1),this.value=currentFilms,this.setLocalStorage(this.value)}else console.log("Cannot find film in collection")}}]),e}(),$=new Z(z),tt=new Z(J),et=new Z(K),nt=new Z(Q);new Z(X);({el:document.querySelector(".btn-up"),scrolling:!1,show:function(){if(this.el.classList.contains("btn-up_hide")&&!this.el.classList.contains("btn-up_hiding")){var t=this;this.el.classList.remove("btn-up_hide"),this.el.classList.add("btn-up_hiding"),window.setTimeout((function(){t.el.classList.remove("btn-up_hiding")}),300)}},hide:function(){if(!this.el.classList.contains("btn-up_hide")&&!this.el.classList.contains("btn-up_hiding")){var t=this;this.el.classList.add("btn-up_hiding"),window.setTimeout((function(){t.el.classList.add("btn-up_hide"),t.el.classList.remove("btn-up_hiding")}),300)}},addEventListener:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY||document.documentElement.scrollTop;t.scrolling&&e>0||(t.scrolling=!1,e>400?t.show():t.hide())})),document.querySelector(".btn-up").onclick=function(){t.scrolling=!0,t.hide(),window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener();var rt=document.querySelector("#input-toggle"),ot=document.querySelector(".home-gallery");rt.addEventListener("change",(function(){if(rt.checked){p(1).then((function(t){var e=t.results;$.setLocalStorage(e),N(e,ot)}))}else{f(1).then((function(t){var e=t.results;tt.setLocalStorage(e),N(e,ot)}))}}));var it=document.querySelector(".js-filmInfoModal"),at=document.querySelector("#input-toggle");it.addEventListener("click",(function(t){var e=t.target;if(e.classList.contains("js-add-to-watched")||e.classList.contains("js-add-to-queue")){at.checked?(ct=$.getLocalStorage(),console.log("Day",ct)):(ct=tt.getLocalStorage(),console.log("Week",ct));var n=it.lastElementChild.lastElementChild.id,r=ct.filter((function(t){return t.id==n}));if(console.dir(e),e.classList.contains("js-add-to-watched"))et.getLocalStorage()||et.setLocalStorage(),et.addFilmtoStorage(r);else if(e.classList.contains("js-add-to-queue")){nt.getLocalStorage()||nt.setLocalStorage(),nt.addFilmtoStorage(r)}e.disabled="true",e.style.background="#FF7F50"}}));var ct=null;var st,lt={};function ut(){return(ut=t(e)(t(r).mark((function e(n){var o;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(n);case 2:o=t.sent,dt(o.results[0].key);case 5:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function dt(t){(st=lt.create('<iframe class="trailer-container" width="560" height="315" src="https://www.youtube.com/embed/'.concat(t,'" frameborder="0" allowfullscreen></iframe>'),{onShow:function(){return document.addEventListener("keydown",ft)}},{onClose:function(){return document.removeEventListener("keydown",ft)}})).show()}function ft(t){"Escape"===t.code&&st.close()}lt=function t(e,n,r){function o(a,c){if(!n[a]){if(!e[a]){var s=void 0;if(!c&&s)return s(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};e[a][0].call(u.exports,(function(t){return o(e[a][1][t]||t)}),u,u.exports,t,e,n,r)}return n[a].exports}for(var i=void 0,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=t.trim(),!0===e?n.children:n.firstChild},o=function(t,e){var n=t.children;return 1===n.length&&n[0].tagName===e},i=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};n.visible=i,n.create=function(t,e){var n=function(t,e){var n=r('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=n.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return i.appendChild(t)}));var a=o(i,"IMG"),c=o(i,"VIDEO"),s=o(i,"IFRAME");return!0===a&&n.classList.add("basicLightbox--img"),!0===c&&n.classList.add("basicLightbox--video"),!0===s&&n.classList.add("basicLightbox--iframe"),n}(t=function(t){var e="string"==typeof t,n=t instanceof HTMLElement==1;if(!1===e&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(r(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(e)),a=function(t){return!1!==e.onClose(c)&&function(t,e){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(t)||t.parentElement.removeChild(t),e()}),410),!0}(n,(function(){if("function"==typeof t)return t(c)}))};!0===e.closable&&n.addEventListener("click",(function(t){t.target===n&&a()}));var c={element:function(){return n},visible:function(){return i(n)},show:function(t){return!1!==e.onShow(c)&&function(t,e){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),e()}))}),10),!0}(n,(function(){if("function"==typeof t)return t(c)}))},close:a};return c}},{}]},{},[1])(1),q.addEventListener("click",(function(t){var e=t.target.closest(".js__youtube__btn");if(!e)return;var n=Number(e.dataset.modalId);e&&(!function(t){ut.apply(this,arguments)}(n),console.log(n))}))}();
//# sourceMappingURL=index.94b90dc6.js.map
