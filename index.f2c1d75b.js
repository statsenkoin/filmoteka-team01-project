function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i),i.register("7me8F",(function(t,n){e(t.exports,"fetchGenre",(function(){return o})),e(t.exports,"fetchMoivesByGenre",(function(){return i})),e(t.exports,"fetchPopular",(function(){return s})),e(t.exports,"fetchPopularDay",(function(){return r})),e(t.exports,"fetchTrailers",(function(){return a}));async function o(){try{const e=fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=e55542ecb6aab3d889d16953eac82937");return(await e).json()}catch(e){return console.log("error :>> ",e)}}async function i(e,t=1){try{const n=fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e55542ecb6aab3d889d16953eac82937&page=${t}&with_genres=${e}`);return(await n).json()}catch(e){return console.log("error :>> ",e)}}async function s(e){try{fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=e55542ecb6aab3d889d16953eac82937&page=${e}`);return(await response).json()}catch(e){return console.log("error :>> ",e)}}async function r(e){try{const t=await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=e55542ecb6aab3d889d16953eac82937&page=${e}`);return await t.json()}catch(e){return console.log("error :>> ",e)}}async function a(e){try{const t=fetch(`https://api.themoviedb.org/3/movie/${e}/videos?api_key=e55542ecb6aab3d889d16953eac82937&language=en-US`);return(await t).json()}catch(e){}return console.log("error :>> ",error)}})),i.register("fA0uA",(function(t,n){e(t.exports,"markupTrending",(function(){return s})),e(t.exports,"getGenreByIdList",(function(){return r}));var o=i("9AkgD");function s(e,t){console.log(e);const n=e.map((({id:e,title:t,genre_ids:n,original_title:i,release_date:s,poster_path:r})=>`<li class="movies-images__item" data-id=${e}>\n            <img class="movie-image" src="${function(e){let t=`https://image.tmdb.org/t/p/w500${e}`;null===e&&(t="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg");return t}(r)}" \n            alt="Movie ${t||i}" />\n        <div class="box-description">\n            <div class="title_wrraper"><h2 class="box-description__title">${t||i}</h2></div>\n            <p class="box-description__text">\n                <span class="box-description__span">${function(e,t=o.dataGenres.genres){let n=[];for(const o of e){const e=t.find((e=>e.id===o));n.push(e.name)}n.length>3&&(n=n.slice(0,2),n.push("Other"));return n.join(", ")}(n)||"There are no genres"}</span>${s.slice(0,4)||"No year"}\n            </p>\n        </div>\n    </li>`)).join("");t.innerHTML=n}function r(e,t=o.dataGenres.genres){let n=[];for(const o of e){const e=t.find((e=>e.id===o));n.push(e.name)}return n.join(", ")}})),i.register("9AkgD",(function(t,n){e(t.exports,"dataGenres",(function(){return s}));var o=i("7TcCz");const s={genres:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]};(0,o.default)()})),i.register("7TcCz",(function(t,n){e(t.exports,"default",(function(){return s}));var o=i("0RSjA");function s(){const e=document.querySelectorAll(".js-modal-triger"),t=document.querySelector(".backdrop"),n=document.querySelectorAll(".modal"),i=document.querySelectorAll(".modal-close-btn");function s(e){e.preventDefault();const n=e.currentTarget.dataset.modal;document.querySelector("."+n).classList.add("active"),t.classList.add("active"),o.default.disabledScroll()}function r(e){e.preventDefault(),this.closest(".modal").classList.remove("active"),t.classList.remove("active"),o.default.enabledScroll()}document.addEventListener("keydown",(function(e){if("Escape"!==e.code)return;Array.from(n).forEach((e=>{e.classList.remove("active"),o.default.enabledScroll()})),t.classList.remove("active"),o.default.enabledScroll()})),t.addEventListener("click",(function(e){Array.from(n).forEach((e=>{e.classList.remove("active"),o.default.enabledScroll()})),t.classList.remove("active"),o.default.enabledScroll()})),Array.from(e).forEach((e=>{e.addEventListener("click",s)})),Array.from(i).forEach((e=>{e.addEventListener("click",r)}))}})),i.register("0RSjA",(function(t,n){e(t.exports,"default",(function(){return i}));const o={scrollPosition:null,disabledScroll(){o.scrollPosition=window.scrollY,document.body.style.cssText=`\n        overflow: hidden;\n        top: -${o.scrollPosition}px;\n        left: 0;\n        height: 100vh;\n        width: 100vw;\n        padding-right: ${window.innerWidth-document.body.offsetWidth}px;\n        `},enabledScroll(){document.body.style.cssText="",window.scroll({top:o.scrollPosition})}};var i=o}));var s=i("7me8F");let r,a,c,l,d=9,u=1;function m(e,t,n){c=n,u=e,a=t,r=function(e,t){const n=[];let o,i;const s=Math.floor(d/2);e<1?e=1:e>t&&(e=t);t<=d?(o=1,i=t):e<=s?(o=1,i=d):e+s>=t?(o=t-2*s,i=t):(o=e-s,i=e+s);for(let e=o;e<=i;e+=1)n.push(e);d>=9&&(n.splice(0,1,1),n.splice(n.length-1,1,t),e-1>s&&t>d&&n.splice(1,1," ..."),e+1+s<t&&t>d&&n.splice(n.length-2,1,"... "));return n}(u,a),function(e,t){let n=e.reduce(((e,t)=>e+`<button type="button" ${t===u?'class="pagination-button pagination-button-current"':'class="pagination-button"'}>${t}</button>`),"");a>d&&(1!==u&&(n='<button type="button" class="pagination-button">&lt;</button>'+n),u!==a&&(n+='<button type="button" class="pagination-button">&gt;</button>'));t.innerHTML="",t.insertAdjacentHTML("beforeend",n)}(r,c)}function f(e){if("BUTTON"!==e.target.nodeName)return;const t=e.target.textContent;return isNaN(Number(t))||(l=Number(t)),">"===t&&(l=u===a?a:u+1),"<"===t&&(l=1===u?1:u-1)," ..."===t&&(l=u-(d-4)),"... "===t&&(l=u+(d-4)),u=l,u}window.addEventListener("resize",(()=>{const e=window.matchMedia("(min-width: 768px)").matches;d=e?9:5,m(u,a,c)}));var g=i("fA0uA");const h=document.querySelector(".modal-film-info");function p(e,t){const{id:n,title:o,poster_path:i,vote_average:s,vote_count:r,popularity:a,original_title:c,overview:l}=e,d=document.querySelector(".modal-film-info"),u=`<div class="poster-block">\n        <img class="poster" src="https://image.tmdb.org/t/p/w500/${i}" />\n           <button type="button" data-modal-id=${n}  class="youtube__btn js__youtube__btn">\n        <span class="background-image"></span>\n           <i class="fa fa-youtube-play" aria-hidden="true"></i>\n           </button>\n      </div>\n      <div class="film-information" id='${n}'>\n        <h2 class="film-information-title">${o}</h2>\n        <table class="rating-table">\n          <tr>\n            <td class="table-subtitle">Vote / Votes</td>\n            <td class="table-inf"><span class="rating">${s.toFixed(1)}</span> / ${r}</td>\n          </tr>\n          <tr>\n            <td class="table-subtitle">Popularity</td>\n            <td class="table-inf">${a.toFixed(1)}</td>\n          </tr>\n          <tr>\n            <td class="table-subtitle">Original Title</td>\n            <td class="table-inf">${c}</td>\n          </tr>\n          <tr>\n            <td class="table-subtitle">Genre</td>\n            <td class="table-inf">${t}</td>\n          </tr>\n        </table>\n        <p class="about">About</p>\n        <p class="about-film">\n          ${l}\n        </p>\n        <div class="buttons-add">\n          <button type="button" class="btn-add js-add-to-watched">add to Watched</button>\n          <button type="button" class="btn-add js-add-to-queue">add to queue</button>\n        </div>\n      </div>`;d.innerHTML=u}var b=i("7TcCz");const v=new class{getRefs(e){const t={};return t.spinner=document.querySelector(e),t}show(){this.refs.spinner.classList.remove("is-hidden")}hide(){this.refs.spinner.classList.add("is-hidden")}constructor({selector:e,hidden:t=!0}){this.refs=this.getRefs(e),t&&this.hide()}}({selector:".loading"});let y,L;console.log("🚀 ~ loadSpinner",v);let _=1,w=1;const S=document.querySelector(".pagination");S.addEventListener("click",(async function(e){v.show();const t=f(e);if(t===_)return;_=t,await E(),v.hide()}));const k=document.querySelector(".home-gallery");async function E(){v.show();const e=await(0,s.fetchPopular)(_);L=e.results,w=e.total_pages,console.log("locStorageFilms :>> ",L),console.log("totalPages :>> ",w),(0,g.markupTrending)(L,k),m(_,w,S),v.hide()}!async function(){v.show();const e=await(0,s.fetchGenre)();y=e.genres,console.log("locStorageGenres :>> ",y),await E(),v.hide()}(),k.addEventListener("click",(function(e){const t=e.target.closest(".movies-images__item");if(!t)return;const n=Number(t.dataset.id),o=L.find((e=>e.id===n)),i=(0,g.getGenreByIdList)(o.genre_ids);(0,b.default)(e),p(o,i)}));const x=" popularByWeek",q=" popularByDay",A="watched",T="queue",$="genres";class j{setLocalStorage(e=[]){this.value=e,localStorage.setItem(this.key,JSON.stringify(this.value))}getLocalStorage(){try{const e=localStorage.getItem(this.key);if(e)return JSON.parse(e)}catch(e){console.log("Error",e)}}addFilmtoStorage(e){const t=this.getLocalStorage(this.key);t.push(e),this.value=t,this.setLocalStorage(this.value)}deleteFilmFromStorage(e){const t=this.getLocalStorage(this.key);if(t.length)if(t.find((t=>t.id===e.id))){console.log("I`m delete film from the collection!");const n=t.findIndex((t=>t.id===e.id));t.splice(n,1),this.value=currentFilms,this.setLocalStorage(this.value)}else console.log("Cannot find film in collection")}constructor(e,t=[]){this.key=e,this.value=t}}const C=new j(q),F=new j(x),N=new j(A),M=new j(T);new j($);({el:document.querySelector(".btn-up"),scrolling:!1,show(){this.el.classList.contains("btn-up_hide")&&!this.el.classList.contains("btn-up_hiding")&&(this.el.classList.remove("btn-up_hide"),this.el.classList.add("btn-up_hiding"),window.setTimeout((()=>{this.el.classList.remove("btn-up_hiding")}),300))},hide(){this.el.classList.contains("btn-up_hide")||this.el.classList.contains("btn-up_hiding")||(this.el.classList.add("btn-up_hiding"),window.setTimeout((()=>{this.el.classList.add("btn-up_hide"),this.el.classList.remove("btn-up_hiding")}),300))},addEventListener(){window.addEventListener("scroll",(()=>{const e=window.scrollY||document.documentElement.scrollTop;this.scrolling&&e>0||(this.scrolling=!1,e>400?this.show():this.hide())})),document.querySelector(".btn-up").onclick=()=>{this.scrolling=!0,this.hide(),window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener(),i("7TcCz");const D=document.querySelector(".footer__link"),P=document.querySelector(".box"),O=(document.querySelector(".teams_desk"),document.querySelector(".fon")),G=document.querySelector("#p1"),I=document.querySelector("#p2"),H=document.querySelector("#p3"),R=document.querySelector("#p4"),W=document.querySelector("#p5"),B=document.querySelector("#p6"),U=document.querySelector("#p7"),z=document.querySelector("#p8"),V=document.querySelector("#p9");function J(){G.classList.remove("teams_desk_active"),I.classList.remove("teams_desk_active"),H.classList.remove("teams_desk_active"),R.classList.remove("teams_desk_active"),W.classList.remove("teams_desk_active"),B.classList.remove("teams_desk_active"),U.classList.remove("teams_desk_active"),z.classList.remove("teams_desk_active"),V.classList.remove("teams_desk_active")}D.addEventListener("click",(function(e){e.preventDefault(),P.classList.toggle("box_active"),O.classList.add("fon_active")})),P.addEventListener("click",(function(e){e.preventDefault(),J(),function(e){"t1"===e.target.getAttribute("id")&&G.classList.add("teams_desk_active");"t2"===e.target.getAttribute("id")&&I.classList.add("teams_desk_active");"t3"===e.target.getAttribute("id")&&H.classList.add("teams_desk_active");"t4"===e.target.getAttribute("id")&&R.classList.add("teams_desk_active");"t5"===e.target.getAttribute("id")&&W.classList.add("teams_desk_active");"t6"===e.target.getAttribute("id")&&B.classList.add("teams_desk_active");"t7"===e.target.getAttribute("id")&&U.classList.add("teams_desk_active");"t8"===e.target.getAttribute("id")&&z.classList.add("teams_desk_active");"t9"===e.target.getAttribute("id")&&V.classList.add("teams_desk_active")}(e)})),O.addEventListener("click",(function(e){O.classList.toggle("fon_active"),P.classList.toggle("box_active"),J()})),i("9AkgD");s=i("7me8F"),g=i("fA0uA");const Y=document.querySelector("#input-toggle");const K=document.querySelector(".home-gallery");Y.addEventListener("change",(function(){if(Y.checked){(0,s.fetchPopularDay)(1).then((e=>{const t=e.results;C.setLocalStorage(t),(0,g.markupTrending)(t,K)}))}else{(0,s.fetchPopular)(1).then((e=>{const t=e.results;F.setLocalStorage(t),(0,g.markupTrending)(t,K)}))}}));const Q=document.querySelector(".js-filmInfoModal"),X=document.querySelector("#input-toggle");Q.addEventListener("click",(function(e){const t=e.target;if(t.classList.contains("js-add-to-watched")||t.classList.contains("js-add-to-queue")){X.checked?(Z=C.getLocalStorage(),console.log("Day",Z)):(Z=F.getLocalStorage(),console.log("Week",Z));const e=Q.lastElementChild.lastElementChild.id,n=Z.filter((t=>t.id==e));if(console.dir(t),t.classList.contains("js-add-to-watched")){N.getLocalStorage()||N.setLocalStorage(),N.addFilmtoStorage(n)}else if(t.classList.contains("js-add-to-queue")){M.getLocalStorage()||M.setLocalStorage(),M.addFilmtoStorage(n)}t.disabled="true",t.style.background="#FF7F50"}}));let Z=null;var ee={};ee=function e(t,n,o){function i(r,a){if(!n[r]){if(!t[r]){var c=void 0;if(!a&&c)return c(r,!0);if(s)return s(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[r]={exports:{}};t[r][0].call(d.exports,(function(e){return i(t[r][1][e]||e)}),d,d.exports,e,t,n,o)}return n[r].exports}for(var s=void 0,r=0;r<o.length;r++)i(o[r]);return i}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},i=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},s=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=s,n.create=function(e,t){var n=function(e,t){var n=o('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),s=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return s.appendChild(e)}));var r=i(s,"IMG"),a=i(s,"VIDEO"),c=i(s,"IFRAME");return!0===r&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===c&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),r=function(e){return!1!==t.onClose(a)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===s(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(a)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&r()}));var a={element:function(){return n},visible:function(){return s(n)},show:function(e){return!1!==t.onShow(a)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(a)}))},close:r};return a}},{}]},{},[1])(1);s=i("7me8F");let te;function ne(e){"Escape"===e.code&&te.close()}h.addEventListener("click",(function(e){const t=e.target.closest(".js__youtube__btn");if(!t)return;const n=Number(t.dataset.modalId);t&&(!async function(e){const t=await(0,s.fetchTrailers)(e);!function(e){te=ee.create(`<iframe class="trailer-container" width="560" height="315" src="https://www.youtube.com/embed/${e}" frameborder="0" allowfullscreen></iframe>`,{onShow:()=>document.addEventListener("keydown",ne)},{onClose:()=>document.removeEventListener("keydown",ne)}),te.show()}(t.results[0].key)}(n),console.log(n))}));
//# sourceMappingURL=index.f2c1d75b.js.map
