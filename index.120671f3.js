!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};function n(e,t,n,r,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,a)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function s(e){n(i,a,o,s,l,"next",e)}function l(e){n(i,a,o,s,l,"throw",e)}s(void 0)}))}};var r={},a=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new T(r||[]);return o._invoke=function(e,t,n){var r=d;return function(a,o){if(r===p)throw new Error("Generator is already running");if(r===v){if("throw"===a)throw o;return S()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=x(i,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var l=u(e,t,n);if("normal"===l.type){if(r=n.done?v:h,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=v,n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var d="suspendedStart",h="suspendedYield",p="executing",v="completed",g={};function f(){}function m(){}function y(){}var _={};l(_,o,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(N([])));w&&w!==n&&r.call(w,o)&&(_=w);var k=y.prototype=f.prototype=Object.create(_);function L(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){function n(a,o,i,s){var l=u(e[a],e,o);if("throw"!==l.type){var c=l.arg,d=c.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,s)}),(function(e){n("throw",e,i,s)})):t.resolve(d).then((function(e){c.value=e,i(c)}),(function(e){return n("throw",e,i,s)}))}s(l.arg)}var a;this._invoke=function(e,r){function o(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(o,o):o()}}function x(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,x(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var a=u(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var o=a.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function N(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:S}}function S(){return{value:t,done:!0}}return m.prototype=y,l(k,"constructor",y),l(y,"constructor",m),m.displayName=l(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},L(j.prototype),l(j.prototype,i,(function(){return this})),e.AsyncIterator=j,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new j(c(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},L(k),l(k,s,"Generator"),l(k,o,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=N,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return s.type="throw",s.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;A(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}(r);try{regeneratorRuntime=a}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=a:Function("r","regeneratorRuntime = r")(a)}var o="e55542ecb6aab3d889d16953eac82937",i="https://api.themoviedb.org/3",s="/trending/movie/week",l="/trending/movie/day",c="/genre/movie/list";function u(){return d.apply(this,arguments)}function d(){return(d=e(t)(e(r).mark((function t(){var n;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=fetch("".concat(i).concat(c,"?api_key=").concat(o)),e.next=4,n;case 4:return e.abrupt("return",e.sent.json());case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",console.log("error :>> ",e.t0));case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function h(e){return p.apply(this,arguments)}function p(){return(p=e(t)(e(r).mark((function t(n){var a;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=fetch("".concat(i).concat(s,"?api_key=").concat(o,"&page=").concat(n)),e.next=4,a;case 4:return e.abrupt("return",e.sent.json());case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",console.log("error :>> ",e.t0));case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=e(t)(e(r).mark((function t(n){var a;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(i).concat(l,"?api_key=").concat(o,"&page=").concat(n));case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",console.log("error :>> ",e.t0));case 12:case"end":return e.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}var f,m,y,_=9,b=1;function w(e,t,n){m=n,function(e,t){var n=e.reduce((function(e,t){return e+'<button type="button" '.concat(t===b?'class="pagination-button pagination-button-current"':'class="pagination-button"',">").concat(t,"</button>")}),"");f>_&&(1!==b&&(n='<button type="button" class="pagination-button">&lt;</button>'+n),b!==f&&(n+='<button type="button" class="pagination-button">&gt;</button>'));t.innerHTML="",t.insertAdjacentHTML("beforeend",n)}(function(e,t){var n,r,a=[],o=Math.floor(_/2);e<1?e=1:e>t&&(e=t);t<=_?(n=1,r=t):e<=o?(n=1,r=_):e+o>=t?(n=t-2*o,r=t):(n=e-o,r=e+o);for(var i=n;i<=r;i+=1)a.push(i);_>=9&&(a.splice(0,1,1),a.splice(a.length-1,1,t),e-1>o&&t>_&&a.splice(1,1," ..."),e+1+o<t&&t>_&&a.splice(a.length-2,1,"... "));return a}(b=e,f=t),m)}function k(e){if("BUTTON"===e.target.nodeName){var t=e.target.textContent;return isNaN(Number(t))||(y=Number(t)),">"===t&&(y=b===f?f:b+1),"<"===t&&(y=1===b?1:b-1)," ..."===t&&(y=b-(_-4)),"... "===t&&(y=b+(_-4)),b=y}}function L(){var e=document.querySelectorAll(".js-modal-triger"),t=document.querySelector(".backdrop"),n=document.querySelectorAll(".modal"),r=document.querySelectorAll(".modal-close-btn");function a(e){e.preventDefault();var n=e.currentTarget.dataset.modal;document.querySelector("."+n).classList.add("active"),t.classList.add("active")}function o(e){e.preventDefault(),this.closest(".modal").classList.remove("active"),t.classList.remove("active")}document.addEventListener("keydown",(function(e){if("Escape"!==e.code)return;Array.from(n).forEach((function(e){e.classList.remove("active")})),t.classList.remove("active")})),t.addEventListener("click",(function(e){Array.from(n).forEach((function(e){e.classList.remove("active")})),t.classList.remove("active")})),Array.from(e).forEach((function(e){e.addEventListener("click",a)})),Array.from(r).forEach((function(e){e.addEventListener("click",o)}))}window.addEventListener("resize",(function(){var e=window.matchMedia("(min-width: 768px)").matches;_=e?9:5,w(b,f,m)}));var j={genres:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]};function x(e,t){console.log(e);var n=new Date,r=e.map((function(e){var t=e.id,r=e.title,a=e.genre_ids,o=e.original_title,i=e.release_date,s=e.poster_path;return'<li class="movies-images__item" data-id='.concat(t,'>\n            <img class="movie-image" src="https://image.tmdb.org/t/p/w500').concat(s||"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",'" \n            alt="Movie ').concat(r||o,'" />\n        <div class="box-description">\n            <h2 class="box-description__title">').concat(r||o,'</h2>\n            <p class="box-description__text">\n                <span class="box-description__span">').concat(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j.genres,n=[],r=!0,a=!1,o=void 0;try{for(var i,s=function(e,r){var a=r.value,o=t.find((function(e){return e.id===a}));n.push(o.name)},l=e[Symbol.iterator]();!(r=(i=l.next()).done);r=!0)s(l,i)}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}n.length>3&&(n=n.slice(0,2)).push("Other");return n.join(", ")}(a),"</span>").concat(n.getFullYear(i),"\n            </p>\n        </div>\n    </li>")})).join("");t.innerHTML=r}L();function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j.genres,n=[],r=!0,a=!1,o=void 0;try{for(var i,s=function(e,r){var a=r.value,o=t.find((function(e){return e.id===a}));n.push(o.name)},l=e[Symbol.iterator]();!(r=(i=l.next()).done);r=!0)s(l,i)}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n.join(", ")}function A(e,t){var n=e.title,r=e.poster_path,a=e.vote_average,o=e.vote_count,i=e.popularity,s=e.original_title,l=e.overview,c=document.querySelector(".modal-film-info"),u='<div class="poster-block">\n        <img class="poster" src="https://image.tmdb.org/t/p/w500/'.concat(r,'" />\n      </div>\n      <div class="film-information">\n        <h2 class="film-information-title">').concat(n,'</h2>\n        <table class="rating-table">\n          <tr>\n            <td class="table-subtitle">Vote / Votes</td>\n            <td class="table-inf"><span class="rating">').concat(a.toFixed(1),"</span> / ").concat(o,'</td>\n          </tr>\n          <tr>\n            <td class="table-subtitle">Popularity</td>\n            <td class="table-inf">').concat(i.toFixed(1),'</td>\n          </tr>\n          <tr>\n            <td class="table-subtitle">Original Title</td>\n            <td class="table-inf">').concat(s,'</td>\n          </tr>\n          <tr>\n            <td class="table-subtitle">Genre</td>\n            <td class="table-inf">').concat(t,'</td>\n          </tr>\n        </table>\n        <p class="about">About</p>\n        <p class="about-film">\n          ').concat(l,'\n        </p>\n        <div class="buttons-add">\n          <button type="button" class="btn-add">add to Watched</button>\n          <button type="button" class="btn-add">add to queue</button>\n        </div>\n      </div>');c.innerHTML=u}var T={};Object.defineProperty(T,"__esModule",{value:!0}),T.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var N={};function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(N,"__esModule",{value:!0}),N.default=function(e,t,n){t&&S(e.prototype,t);n&&S(e,n);return e};var P,W,q=new(function(){"use strict";function t(n){var r=n.selector,a=n.hidden,o=void 0===a||a;e(T)(this,t),this.refs=this.getRefs(r),o&&this.hide()}return e(N)(t,[{key:"getRefs",value:function(e){var t={};return t.spinner=document.querySelector(e),t}},{key:"show",value:function(){this.refs.spinner.classList.remove("is-hidden")}},{key:"hide",value:function(){this.refs.spinner.classList.add("is-hidden")}}]),t}())({selector:".loading"});console.log("🚀 ~ loadSpinner",q);var O=1,M=1,G=document.querySelector(".pagination");function D(){return(D=e(t)(e(r).mark((function t(n){var a;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q.show(),(a=k(n))!==O){e.next=4;break}return e.abrupt("return");case 4:return O=a,e.next=7,B();case 7:q.hide();case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}G.addEventListener("click",(function(e){return D.apply(this,arguments)}));var F=document.querySelector(".home-gallery");function z(){return(z=e(t)(e(r).mark((function t(){var n;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q.show(),e.next=3,u();case 3:return n=e.sent,P=n.genres,console.log("locStorageGenres :>> ",P),e.next=8,B();case 8:q.hide();case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function B(){return I.apply(this,arguments)}function I(){return(I=e(t)(e(r).mark((function t(){var n;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q.show(),e.next=3,h(O);case 3:n=e.sent,W=n.results,M=n.total_pages,console.log("locStorageFilms :>> ",W),console.log("totalPages :>> ",M),x(W,F),w(O,M,G),q.hide();case 11:case"end":return e.stop()}}),t)})))).apply(this,arguments)}!function(){z.apply(this,arguments)}(),F.addEventListener("click",(function(e){var t=e.target.closest(".movies-images__item");if(!t)return;var n=Number(t.dataset.id),r=W.find((function(e){return e.id===n})),a=E(r.genre_ids);L(),A(r,a)}));var C="popular",R="watched",H="queue",K="genres";var Q=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];e(T)(this,t),this.key=n,this.value=r}return e(N)(t,[{key:"setLocalStorage",value:function(){localStorage.setItem(this.key,JSON.stringify(this.value))}},{key:"getLocalStorage",value:function(){try{var e=localStorage.getItem(this.key);if(e)return JSON.parse(e)}catch(e){console.log("Error",e)}}},{key:"updateLocalStorage",value:function(e){var t=this.getLocalStorage(this.key);if(t.length){var n=t;if(console.log("Current",n),n.find((function(t){return t.title===e.title}))){console.log("I`m delete film from the collection!");var r=n.findIndex((function(t){return t.id===e.id}));n.splice(r,1),this.value=n,this.setLocalStorage()}else console.log("I`m add film to the collection!"),n.push(e),this.value=n,this.setLocalStorage()}else this.value.push(e),this.setLocalStorage()}}]),t}();new Q(C,{page:1,results:[{adult:!1,backdrop_path:"/5kAGbi9MFAobQTVfK4kWPnIfnP0.jpg",id:536554,title:"M3GAN",original_language:"en",original_title:"M3GAN",overview:"A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",poster_path:"/rxDPzExeovcBZY2IVWdYs87AzVE.jpg",media_type:"movie",genre_ids:[878,27,35],popularity:6474.848,release_date:"2022-12-28",video:!1,vote_average:7.327,vote_count:586},{adult:!1,backdrop_path:"/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",id:76600,title:"Avatar: The Way of Water",original_language:"en",original_title:"Avatar: The Way of Water",overview:"Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",poster_path:"/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",media_type:"movie",genre_ids:[878,12,28],popularity:2623.833,release_date:"2022-12-14",video:!1,vote_average:7.727,vote_count:4602},{adult:!1,backdrop_path:"/faXT8V80JRhnArTAeYXz0Eutpv9.jpg",id:315162,title:"Puss in Boots: The Last Wish",original_language:"en",original_title:"Puss in Boots: The Last Wish",overview:"Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",poster_path:"/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",media_type:"movie",genre_ids:[16,28,12,35,10751,14],popularity:6689.647,release_date:"2022-12-07",video:!1,vote_average:8.585,vote_count:2563},{adult:!1,backdrop_path:"/ge9goiznnnAchCUfsw9XQiR2jNt.jpg",id:843794,title:"JUNG_E",original_language:"ko",original_title:"정이",overview:"On an uninhabitable 22nd-century Earth, the outcome of a civil war hinges on cloning the brain of an elite soldier to create a robot mercenary.",poster_path:"/z2nfRxZCGFgAnVhb9pZO87TyTX5.jpg",media_type:"movie",genre_ids:[878,28,12],popularity:387.741,release_date:"2023-01-20",video:!1,vote_average:6.127,vote_count:122},{adult:!1,backdrop_path:"/mSyQoValhBsJdq3JNGXJww2Q5yL.jpg",id:593643,title:"The Menu",original_language:"en",original_title:"The Menu",overview:"A young couple travels to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises.",poster_path:"/fPtUgMcLIboqlTlPrq0bQpKK8eq.jpg",media_type:"movie",genre_ids:[35,27,53],popularity:349.138,release_date:"2022-11-18",video:!1,vote_average:7.304,vote_count:1893},{adult:!1,backdrop_path:"/dKqa850uvbNSCaQCV4Im1XlzEtQ.jpg",id:661374,title:"Glass Onion: A Knives Out Mystery",original_language:"en",original_title:"Glass Onion: A Knives Out Mystery",overview:"World-famous detective Benoit Blanc heads to Greece to peel back the layers of a mystery surrounding a tech billionaire and his eclectic crew of friends.",poster_path:"/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",media_type:"movie",genre_ids:[35,80,9648],popularity:1122.521,release_date:"2022-11-23",video:!1,vote_average:7.1,vote_count:2947},{adult:!1,backdrop_path:"/b08BDQPq42AoLMfhi7DtTOoYqVu.jpg",id:800815,title:"The Pale Blue Eye",original_language:"en",original_title:"The Pale Blue Eye",overview:"West Point, New York, 1830. When a cadet at the burgeoning military academy is found hanged with his heart cut out, the top brass summons former New York City constable Augustus Landor to investigate. While attempting to solve this grisly mystery, the reluctant detective engages the help of one of the cadets: a strange but brilliant young fellow by the name of Edgar Allan Poe",poster_path:"/9xkGlFRqrN8btTLU0KQvOfn2PHr.jpg",media_type:"movie",genre_ids:[9648,80,27],popularity:786.146,release_date:"2022-12-22",video:!1,vote_average:7.016,vote_count:829},{adult:!1,backdrop_path:"/5pMy5LF2JAleBNBtuzizfCMWM7k.jpg",id:653851,title:"Devotion",original_language:"en",original_title:"Devotion",overview:"The harrowing true story of two elite US Navy fighter pilots during the Korean War. Their heroic sacrifices would ultimately make them the Navy's most celebrated wingmen.",poster_path:"/26yQPXymbWeCLKwcmyL8dRjAzth.jpg",media_type:"movie",genre_ids:[10752,36,18],popularity:2092.857,release_date:"2022-11-23",video:!1,vote_average:7.231,vote_count:117},{adult:!1,backdrop_path:"/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",id:436270,title:"Black Adam",original_language:"en",original_title:"Black Adam",overview:"Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",poster_path:"/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",media_type:"movie",genre_ids:[14,28,878],popularity:1329.686,release_date:"2022-10-19",video:!1,vote_average:7.21,vote_count:3872},{adult:!1,backdrop_path:"/nAUpDd7iGfESDomaeAWKeNABw4I.jpg",id:545611,title:"Everything Everywhere All at Once",original_language:"en",original_title:"Everything Everywhere All at Once",overview:"An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led in other universes.",poster_path:"/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",media_type:"movie",genre_ids:[28,12,878],popularity:254.782,release_date:"2022-03-24",video:!1,vote_average:8.039,vote_count:2824},{adult:!1,backdrop_path:"/gwRMwljwHoNCyyJVgMA2XC4qPUU.jpg",id:615777,title:"Babylon",original_language:"en",original_title:"Babylon",overview:"A tale of outsized ambition and outrageous excess, tracing the rise and fall of multiple characters in an era of unbridled decadence and depravity during Hollywood's transition from silent films and to sound films in the late 1920s.",poster_path:"/wjOHjWCUE0YzDiEzKv8AfqHj3ir.jpg",media_type:"movie",genre_ids:[18,35],popularity:342.633,release_date:"2022-12-22",video:!1,vote_average:7.8,vote_count:381},{adult:!1,backdrop_path:"/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",id:361743,title:"Top Gun: Maverick",original_language:"en",original_title:"Top Gun: Maverick",overview:"After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",poster_path:"/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",media_type:"movie",genre_ids:[28,18],popularity:504.707,release_date:"2022-05-24",video:!1,vote_average:8.324,vote_count:5769},{adult:!1,backdrop_path:"/1vXD5HXqkhvsXFHE7KmCPZGPR1e.jpg",id:674324,title:"The Banshees of Inisherin",original_language:"en",original_title:"The Banshees of Inisherin",overview:"Two lifelong friends find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both of them.",poster_path:"/4yFG6cSPaCaPhyJ1vtGOtMD1lgh.jpg",media_type:"movie",genre_ids:[18,35],popularity:216.41,release_date:"2022-10-21",video:!1,vote_average:7.471,vote_count:602},{adult:!1,backdrop_path:"/3UpSDQnJ2WpYQqxbzat17D6j52m.jpg",id:640146,title:"Ant-Man and the Wasp: Quantumania",original_language:"en",original_title:"Ant-Man and the Wasp: Quantumania",overview:"Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",poster_path:"/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",media_type:"movie",genre_ids:[12,878,35],popularity:119.63,release_date:"2023-02-15",video:!1,vote_average:0,vote_count:0},{adult:!1,backdrop_path:"/ogFIG0fNXEYRQKrpnoRJcXQNX9n.jpg",id:619930,title:"Narvik",original_language:"no",original_title:"Kampen om Narvik",overview:"April, 1940. The eyes of the world are on Narvik, a small town in northern Norway, a source of the iron ore needed for Hitler's war machine. Through two months of fierce winter warfare, the German leader is dealt with his first defeat.",poster_path:"/gU4mmINWUF294Wzi8mqRvi6peMe.jpg",media_type:"movie",genre_ids:[10752,18,36,28],popularity:117.006,release_date:"2022-12-25",video:!0,vote_average:7.429,vote_count:28},{adult:!1,backdrop_path:"/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",id:505642,title:"Black Panther: Wakanda Forever",original_language:"en",original_title:"Black Panther: Wakanda Forever",overview:"Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",poster_path:"/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",media_type:"movie",genre_ids:[28,12,878],popularity:1219.176,release_date:"2022-11-09",video:!1,vote_average:7.482,vote_count:1691},{adult:!1,backdrop_path:"/8I37NtDffNV7AZlDa7uDvvqhovU.jpg",id:19995,title:"Avatar",original_language:"en",original_title:"Avatar",overview:"In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",poster_path:"/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",media_type:"movie",genre_ids:[28,12,14,878],popularity:1280.718,release_date:"2009-12-15",video:!1,vote_average:7.564,vote_count:28004},{adult:!1,backdrop_path:"/cJFNCdlWpmLTzHRqbmmOzKjXAjG.jpg",id:858408,title:"Dog Gone",original_language:"en",original_title:"Dog Gone",overview:"When his beloved dog goes missing, a young man embarks on an incredible search with his parents to find him and give him life-saving medication.",poster_path:"/eYWdLZCS9W1Xli9bynzFSddLx02.jpg",media_type:"movie",genre_ids:[10751,12,18],popularity:327.494,release_date:"2023-01-13",video:!1,vote_average:6.586,vote_count:76},{adult:!1,backdrop_path:"/jJbEKl69hgNdQ9vQISqQGEDx4Lh.jpg",id:632065,title:"House Party",original_language:"en",original_title:"House Party",overview:"Aspiring club promoters and best buds Damon and Kevin are barely keeping things together. Out of money, down on their luck and about to lose the roofs over their heads—and freshly fired from their low-lift jobs as house cleaners—the pair needs a huge windfall to make their problems go away. In a ‘what the hell?’ move, they decide to host the party of the year at an exclusive mansion, the site of their last cleaning job, which just happens to belong to none other than LeBron James. No permission? No problem. What could go wrong?",poster_path:"/KiyKR9m6h01eIvGObGmpt16U3F.jpg",media_type:"movie",genre_ids:[35],popularity:659.247,release_date:"2023-01-12",video:!1,vote_average:7.222,vote_count:18},{adult:!1,backdrop_path:"/6RCf9jzKxyjblYV4CseayK6bcJo.jpg",id:804095,title:"The Fabelmans",original_language:"en",original_title:"The Fabelmans",overview:"Growing up in post-World War II era Arizona, young Sammy Fabelman aspires to become a filmmaker as he reaches adolescence, but soon discovers a shattering family secret and explores how the power of films can help him see the truth.",poster_path:"/d2IywyOPS78vEnJvwVqkVRTiNC1.jpg",media_type:"movie",genre_ids:[18],popularity:179.214,release_date:"2022-11-11",video:!1,vote_average:8.041,vote_count:531}],total_pages:1e3,total_results:2e4}),new Q(R),new Q(H),new Q(K,j);({el:document.querySelector(".btn-up"),scrolling:!1,show:function(){if(this.el.classList.contains("btn-up_hide")&&!this.el.classList.contains("btn-up_hiding")){var e=this;this.el.classList.remove("btn-up_hide"),this.el.classList.add("btn-up_hiding"),window.setTimeout((function(){e.el.classList.remove("btn-up_hiding")}),300)}},hide:function(){if(!this.el.classList.contains("btn-up_hide")&&!this.el.classList.contains("btn-up_hiding")){var e=this;this.el.classList.add("btn-up_hiding"),window.setTimeout((function(){e.el.classList.add("btn-up_hide"),e.el.classList.remove("btn-up_hiding")}),300)}},addEventListener:function(){var e=this;window.addEventListener("scroll",(function(){var t=window.scrollY||document.documentElement.scrollTop;e.scrolling&&t>0||(e.scrolling=!1,t>400?e.show():e.hide())})),document.querySelector(".btn-up").onclick=function(){e.scrolling=!0,e.hide(),window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener();var Y=document.querySelector("#input-toggle");Y.addEventListener("change",(function(){if(Y.checked){v(1).then((function(e){return console.log("Day",e)}))}else{h(1).then((function(e){return console.log("Week",e)}))}}))}();
//# sourceMappingURL=index.120671f3.js.map
