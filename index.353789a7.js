async function e(){try{const e=fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=e55542ecb6aab3d889d16953eac82937");return(await e).json()}catch(e){return console.log("error :>> ",e)}}async function t(e,t=1){try{const n=fetch(`https://api.themoviedb.org/3/discover/movie?api_key=e55542ecb6aab3d889d16953eac82937&page=${t}&with_genres=${e}`);return(await n).json()}catch(e){return console.log("error :>> ",e)}}async function n(e){try{const t=fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=e55542ecb6aab3d889d16953eac82937&page=${e}`);return(await t).json()}catch(e){return console.log("error :>> ",e)}}async function o(e){try{const t=await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=e55542ecb6aab3d889d16953eac82937&page=${e}`);return await t.json()}catch(e){return console.log("error :>> ",e)}}async function i(e){try{const t=fetch(`https://api.themoviedb.org/3/movie/${e}/videos?api_key=e55542ecb6aab3d889d16953eac82937&language=en-US`);return(await t).json()}catch(e){}return console.log("error :>> ",error)}let s,a,c,r,l=9,d=1;function u(e,t,n){c=n,d=e,a=t,s=function(e,t){const n=[];let o,i;const s=Math.floor(l/2);e<1?e=1:e>t&&(e=t);t<=l?(o=1,i=t):e<=s?(o=1,i=l):e+s>=t?(o=t-2*s,i=t):(o=e-s,i=e+s);for(let e=o;e<=i;e+=1)n.push(e);l>=9&&(n.splice(0,1,1),n.splice(n.length-1,1,t),e-1>s&&t>l&&n.splice(1,1," ..."),e+1+s<t&&t>l&&n.splice(n.length-2,1,"... "));return n}(d,a),function(e,t){let n=e.reduce(((e,t)=>e+`<button type="button" ${t===d?'class="pagination-button pagination-button-current"':'class="pagination-button"'}>${t}</button>`),"");a>l&&(1!==d&&(n='<button type="button" class="pagination-button">&lt;</button>'+n),d!==a&&(n+='<button type="button" class="pagination-button">&gt;</button>'));t.innerHTML="",t.insertAdjacentHTML("beforeend",n)}(s,c)}function m(e){const t=e.target.textContent;return isNaN(Number(t))||(r=Number(t)),">"===t&&(r=d===a?a:d+1),"<"===t&&(r=1===d?1:d-1)," ..."===t&&(r=d-(l-4)),"... "===t&&(r=d+(l-4)),d=r,d}window.addEventListener("resize",(()=>{const e=window.matchMedia("(min-width: 768px)").matches;l=e?9:5,u(d,a,c)}));const g={scrollPosition:null,disabledScroll(){g.scrollPosition=window.scrollY,document.body.style.cssText=`\n        overflow: hidden;\n        top: -${g.scrollPosition}px;\n        left: 0;\n        height: 100vh;\n        width: 100vw;\n        padding-right: ${window.innerWidth-document.body.offsetWidth}px;\n        `},enabledScroll(){document.body.style.cssText="",window.scroll({top:g.scrollPosition})}};var h=g;function f(){const e=document.querySelectorAll(".js-modal-triger"),t=document.querySelector(".backdrop"),n=document.querySelectorAll(".modal"),o=document.querySelectorAll(".modal-close-btn");function i(e){e.preventDefault();const n=e.currentTarget.dataset.modal;document.querySelector("."+n).classList.add("active"),t.classList.add("active"),h.disabledScroll()}function s(e){e.preventDefault(),this.closest(".modal").classList.remove("active"),t.classList.remove("active"),h.enabledScroll()}document.addEventListener("keydown",(function(e){if("Escape"!==e.code)return;Array.from(n).forEach((e=>{e.classList.remove("active"),h.enabledScroll()})),t.classList.remove("active"),h.enabledScroll()})),t.addEventListener("click",(function(e){Array.from(n).forEach((e=>{e.classList.remove("active"),h.enabledScroll()})),t.classList.remove("active"),h.enabledScroll()})),Array.from(e).forEach((e=>{e.addEventListener("click",i)})),Array.from(o).forEach((e=>{e.addEventListener("click",s)}))}const b={genres:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]};function v(e,t){console.log("markupTrending-arrMovies :>> ",e);const n=e.map((({id:e,title:t,genre_ids:n,original_title:o,release_date:i,poster_path:s})=>`<li class="movies-images__item" data-id=${e}>\n            <img class="movie-image" src="${function(e){let t=`https://image.tmdb.org/t/p/w500${e}`;null===e&&(t="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg");return t}(s)}" \n            alt="Movie ${t||o}" />\n        <div class="box-description">\n            <div class="title_wrraper"><h2 class="box-description__title">${t||o}</h2></div>\n            <p class="box-description__text">\n                <span class="box-description__span">${function(e,t=b.genres){let n=[];for(const o of e){const e=t.find((e=>e.id===o));n.push(e.name)}n.length>3&&(n=n.slice(0,2),n.push("Other"));return n.join(", ")}(n)||"There are no genres"}</span>${i.slice(0,4)||"No year"}\n            </p>\n        </div>\n    </li>`)).join("");t.innerHTML=n}f();function p(e,t=b.genres){let n=[];for(const o of e){const e=t.find((e=>e.id===o));n.push(e.name)}return n.join(", ")}const y=document.querySelector(".modal-film-info");function L(e,t){const{id:n,title:o,poster_path:i,vote_average:s,vote_count:a,popularity:c,original_title:r,overview:l}=e,d=document.querySelector(".modal-film-info"),u=`<div class="poster-block">\n        <img class="poster" src="https://image.tmdb.org/t/p/w500/${i}" alt="${o}" />\n           <button type="button" data-modal-id=${n}  class="youtube__btn js__youtube__btn">\n        <span class="background-image"></span>\n           <i class="fa fa-youtube-play" aria-hidden="true"></i>\n           </button>\n      </div>\n      <div class="film-information" id='${n}'>\n        <h2 class="film-information-title">${o}</h2>\n        <table class="rating-table">\n          <tr>\n            <td class="table-subtitle">Vote / Votes</td>\n            <td class="table-inf"><span class="rating">${s.toFixed(1)}</span> / ${a}</td>\n          </tr>\n          <tr>\n            <td class="table-subtitle">Popularity</td>\n            <td class="table-inf">${c.toFixed(1)}</td>\n          </tr>\n          <tr>\n            <td class="table-subtitle">Original Title</td>\n            <td class="table-inf">${r}</td>\n          </tr>\n          <tr>\n            <td class="table-subtitle">Genre</td>\n            <td class="table-inf">${t}</td>\n          </tr>\n        </table>\n        <p class="about">About</p>\n        <p class="about-film">\n          ${l}\n        </p>\n        <div class="buttons-add">\n          <button type="button" class="btn-add js-add-to-watched">add to Watched</button>\n          <button type="button" class="btn-add js-add-to-queue">add to queue</button>\n        </div>\n      </div>`;d.innerHTML=u}const _=" popularByWeek",w=" popularByDay",S="watched",k="queue",E="genres";class q{setLocalStorage(e=[]){this.value=e,localStorage.setItem(this.key,JSON.stringify(this.value))}getLocalStorage(){try{const e=localStorage.getItem(this.key);if(e)return JSON.parse(e)}catch(e){console.log("Error",e)}}addFilmtoStorage(e){const t=this.getLocalStorage(this.key);t.push(e),this.value=t,this.setLocalStorage(this.value)}deleteFilmFromStorage(e){const t=this.getLocalStorage(this.key);if(t.length)if(t.find((t=>t.id===e.id))){console.log("I`m delete film from the collection!");const n=t.findIndex((t=>t.id===e.id));t.splice(n,1),this.value=currentFilms,this.setLocalStorage(this.value)}else console.log("Cannot find film in collection")}constructor(e,t=[]){this.key=e,this.value=t}}const $=new q(w),x=new q(_),T=new q(S),A=new q(k);new q(E);const j=document.querySelector(".dropdown"),M=document.querySelector(".items");j.addEventListener("click",(function(e){e.preventDefault(),j.classList.toggle("active")})),function(){const e=b.genres.map(((e,t)=>`<a href="#" style="--i:${t+1}" id="${e.id}">\n           <span></span>${e.name}\n         </a>`)).join("");M.insertAdjacentHTML("beforeend",e)}();const N=new class{getRefs(e){const t={};return t.spinner=document.querySelector(e),t}show(){this.refs.spinner.classList.remove("is-hidden")}hide(){this.refs.spinner.classList.add("is-hidden")}constructor({selector:e,hidden:t=!0}){this.refs=this.getRefs(e),t&&this.hide()}}({selector:".loading"});let C,F,D=1,O=1;const P=document.querySelector(".pagination");P.addEventListener("click",(async function(e){if("BUTTON"!==e.target.nodeName)return;N.show();const t=m(e);if(t===D)return;D=t,await V(),window.scrollTo(0,0),N.hide()}));let I,H=!1,W=!1;document.querySelector("#input-toggle").addEventListener("change",(async function(e){H=e.currentTarget.checked,W=!1,D=1,await V()})),M.addEventListener("click",(async function(e){console.log("evt :>> ",e),e.preventDefault(),W=!0,I=e.target.id,D=1,console.log("genreId :>> ",I),console.log("isGenreChoosen :>> ",W),await V()}));const R=document.querySelector(".home-gallery");let U;async function V(){N.show(),U=W?await t(I,D):H?await o(D):await n(D),F=U.results,O=U.total_pages,v(F,R),u(D,O,P),N.hide()}!async function(){N.show(),U=await e(),C=U.genres,await V(),N.hide()}(),R.addEventListener("click",(function(e){const t=e.target.closest(".movies-images__item");if(!t)return;const n=Number(t.dataset.id),o=F.find((e=>e.id===n)),i=p(o.genre_ids);f(),L(o,i)}));({el:document.querySelector(".btn-up"),scrolling:!1,show(){this.el.classList.contains("btn-up_hide")&&!this.el.classList.contains("btn-up_hiding")&&(this.el.classList.remove("btn-up_hide"),this.el.classList.add("btn-up_hiding"),window.setTimeout((()=>{this.el.classList.remove("btn-up_hiding")}),300))},hide(){this.el.classList.contains("btn-up_hide")||this.el.classList.contains("btn-up_hiding")||(this.el.classList.add("btn-up_hiding"),window.setTimeout((()=>{this.el.classList.add("btn-up_hide"),this.el.classList.remove("btn-up_hiding")}),300))},addEventListener(){window.addEventListener("scroll",(()=>{const e=window.scrollY||document.documentElement.scrollTop;this.scrolling&&e>0||(this.scrolling=!1,e>400?this.show():this.hide())})),document.querySelector(".btn-up").onclick=()=>{this.scrolling=!0,this.hide(),window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener();const B=document.querySelector(".footer__link"),G=document.querySelector(".box"),J=(document.querySelector(".teams_desk"),document.querySelector(".fon")),Y=document.querySelector("#p1"),z=document.querySelector("#p2"),K=document.querySelector("#p3"),Q=document.querySelector("#p4"),X=document.querySelector("#p5"),Z=document.querySelector("#p6"),ee=document.querySelector("#p7"),te=document.querySelector("#p8"),ne=document.querySelector("#p9");function oe(){Y.classList.remove("teams_desk_active"),z.classList.remove("teams_desk_active"),K.classList.remove("teams_desk_active"),Q.classList.remove("teams_desk_active"),X.classList.remove("teams_desk_active"),Z.classList.remove("teams_desk_active"),ee.classList.remove("teams_desk_active"),te.classList.remove("teams_desk_active"),ne.classList.remove("teams_desk_active")}B.addEventListener("click",(function(e){e.preventDefault(),G.classList.toggle("box_active"),J.classList.add("fon_active")})),G.addEventListener("click",(function(e){e.preventDefault(),oe(),function(e){"t1"===e.target.getAttribute("id")&&Y.classList.add("teams_desk_active");"t2"===e.target.getAttribute("id")&&z.classList.add("teams_desk_active");"t3"===e.target.getAttribute("id")&&K.classList.add("teams_desk_active");"t4"===e.target.getAttribute("id")&&Q.classList.add("teams_desk_active");"t5"===e.target.getAttribute("id")&&X.classList.add("teams_desk_active");"t6"===e.target.getAttribute("id")&&Z.classList.add("teams_desk_active");"t7"===e.target.getAttribute("id")&&ee.classList.add("teams_desk_active");"t8"===e.target.getAttribute("id")&&te.classList.add("teams_desk_active");"t9"===e.target.getAttribute("id")&&ne.classList.add("teams_desk_active")}(e)})),J.addEventListener("click",(function(e){J.classList.toggle("fon_active"),G.classList.toggle("box_active"),oe()}));const ie=document.querySelector(".js-filmInfoModal"),se=document.querySelector("#input-toggle");ie.addEventListener("click",(function(e){const t=e.target;if(t.classList.contains("js-add-to-watched")||t.classList.contains("js-add-to-queue")){se.checked?(ae=$.getLocalStorage(),console.log("Day",ae)):(ae=x.getLocalStorage(),console.log("Week",ae));const e=ie.lastElementChild.lastElementChild.id,n=ae.filter((t=>t.id==e));if(console.dir(t),t.classList.contains("js-add-to-watched")){T.getLocalStorage()||T.setLocalStorage(),T.addFilmtoStorage(n)}else if(t.classList.contains("js-add-to-queue")){A.getLocalStorage()||A.setLocalStorage(),A.addFilmtoStorage(n)}t.disabled="true",t.style.background="#FF7F50"}}));let ae=null;var ce={};let re;function le(e){"Escape"===e.code&&re.close()}ce=function e(t,n,o){function i(a,c){if(!n[a]){if(!t[a]){var r=void 0;if(!c&&r)return r(a,!0);if(s)return s(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[a]={exports:{}};t[a][0].call(d.exports,(function(e){return i(t[a][1][e]||e)}),d,d.exports,e,t,n,o)}return n[a].exports}for(var s=void 0,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},i=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},s=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=s,n.create=function(e,t){var n=function(e,t){var n=o('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),s=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return s.appendChild(e)}));var a=i(s,"IMG"),c=i(s,"VIDEO"),r=i(s,"IFRAME");return!0===a&&n.classList.add("basicLightbox--img"),!0===c&&n.classList.add("basicLightbox--video"),!0===r&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),a=function(e){return!1!==t.onClose(c)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===s(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(c)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&a()}));var c={element:function(){return n},visible:function(){return s(n)},show:function(e){return!1!==t.onShow(c)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(c)}))},close:a};return c}},{}]},{},[1])(1),y.addEventListener("click",(function(e){const t=e.target.closest(".js__youtube__btn");if(!t)return;const n=Number(t.dataset.modalId);t&&(!async function(e){const t=await i(e);!function(e){re=ce.create(`<iframe class="trailer-container" width="560" height="315" src="https://www.youtube.com/embed/${e}" frameborder="0" allowfullscreen></iframe>`,{onShow:()=>document.addEventListener("keydown",le)},{onClose:()=>document.removeEventListener("keydown",le)}),re.show()}(t.results[0].key)}(n),console.log(n))}));
//# sourceMappingURL=index.353789a7.js.map
