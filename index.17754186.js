async function t(){try{const t=fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=e55542ecb6aab3d889d16953eac82937");return(await t).json()}catch(t){return console.log("error :>> ",t)}}async function e(t){try{const e=fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=e55542ecb6aab3d889d16953eac82937&page=${t}`);return(await e).json()}catch(t){return console.log("error :>> ",t)}}async function n(t){try{const e=await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=e55542ecb6aab3d889d16953eac82937&page=${t}`);return await e.json()}catch(t){return console.log("error :>> ",t)}}let o,s,i,a,c=9,r=1;function l(t,e,n){i=n,r=t,s=e,o=function(t,e){const n=[];let o,s;const i=Math.floor(c/2);t<1?t=1:t>e&&(t=e);e<=c?(o=1,s=e):t<=i?(o=1,s=c):t+i>=e?(o=e-2*i,s=e):(o=t-i,s=t+i);for(let t=o;t<=s;t+=1)n.push(t);c>=9&&(n.splice(0,1,1),n.splice(n.length-1,1,e),t-1>i&&e>c&&n.splice(1,1," ..."),t+1+i<e&&e>c&&n.splice(n.length-2,1,"... "));return n}(r,s),function(t,e){let n=t.reduce(((t,e)=>t+`<button type="button" ${e===r?'class="pagination-button pagination-button-current"':'class="pagination-button"'}>${e}</button>`),"");s>c&&(1!==r&&(n='<button type="button" class="pagination-button">&lt;</button>'+n),r!==s&&(n+='<button type="button" class="pagination-button">&gt;</button>'));e.innerHTML="",e.insertAdjacentHTML("beforeend",n)}(o,i)}function d(t){if("BUTTON"!==t.target.nodeName)return;const e=t.target.textContent;return isNaN(Number(e))||(a=Number(e)),">"===e&&(a=r===s?s:r+1),"<"===e&&(a=1===r?1:r-1)," ..."===e&&(a=r-(c-4)),"... "===e&&(a=r+(c-4)),r=a,r}function u(){const t=document.querySelectorAll(".js-modal-triger"),e=document.querySelector(".backdrop"),n=document.querySelectorAll(".modal"),o=document.querySelectorAll(".modal-close-btn");function s(t){t.preventDefault();const n=t.currentTarget.dataset.modal;document.querySelector("."+n).classList.add("active"),e.classList.add("active")}function i(t){t.preventDefault(),this.closest(".modal").classList.remove("active"),e.classList.remove("active")}document.addEventListener("keydown",(function(t){if("Escape"!==t.code)return;Array.from(n).forEach((t=>{t.classList.remove("active")})),e.classList.remove("active")})),e.addEventListener("click",(function(t){Array.from(n).forEach((t=>{t.classList.remove("active")})),e.classList.remove("active")})),Array.from(t).forEach((t=>{t.addEventListener("click",s)})),Array.from(o).forEach((t=>{t.addEventListener("click",i)}))}window.addEventListener("resize",(()=>{const t=window.matchMedia("(min-width: 768px)").matches;c=t?9:5,l(r,s,i)}));const m={genres:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]};function h(t,e){console.log(t);const n=new Date,o=t.map((({id:t,title:e,genre_ids:o,original_title:s,release_date:i,poster_path:a})=>`<li class="movies-images__item" data-id=${t}>\n            <img class="movie-image" src="https://image.tmdb.org/t/p/w500${a||"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}" \n            alt="Movie ${e||s}" />\n        <div class="box-description">\n            <h2 class="box-description__title">${e||s}</h2>\n            <p class="box-description__text">\n                <span class="box-description__span">${function(t,e=m.genres){let n=[];for(const o of t){const t=e.find((t=>t.id===o));n.push(t.name)}n.length>3&&(n=n.slice(0,2),n.push("Other"));return n.join(", ")}(o)}</span>${n.getFullYear(i)}\n            </p>\n        </div>\n    </li>`)).join("");e.innerHTML=o}u();function g(t,e=m.genres){let n=[];for(const o of t){const t=e.find((t=>t.id===o));n.push(t.name)}return n.join(", ")}function p(t,e){const{title:n,poster_path:o,vote_average:s,vote_count:i,popularity:a,original_title:c,overview:r}=t,l=document.querySelector(".modal-film-info"),d=`<div class="poster-block">\n        <img class="poster" src="https://image.tmdb.org/t/p/w500/${o}" />\n      </div>\n      <div class="film-information">\n        <h2 class="film-information-title">${n}</h2>\n        <table class="rating-table">\n          <tr>\n            <td class="table-subtitle">Vote / Votes</td>\n            <td class="table-inf"><span class="rating">${s.toFixed(1)}</span> / ${i}</td>\n          </tr>\n          <tr>\n            <td class="table-subtitle">Popularity</td>\n            <td class="table-inf">${a.toFixed(1)}</td>\n          </tr>\n          <tr>\n            <td class="table-subtitle">Original Title</td>\n            <td class="table-inf">${c}</td>\n          </tr>\n          <tr>\n            <td class="table-subtitle">Genre</td>\n            <td class="table-inf">${e}</td>\n          </tr>\n        </table>\n        <p class="about">About</p>\n        <p class="about-film">\n          ${r}\n        </p>\n        <div class="buttons-add">\n          <button type="button" class="btn-add">add to Watched</button>\n          <button type="button" class="btn-add">add to queue</button>\n        </div>\n      </div>`;l.innerHTML=d}const f=new class{getRefs(t){const e={};return e.spinner=document.querySelector(t),e}show(){this.refs.spinner.classList.remove("is-hidden")}hide(){this.refs.spinner.classList.add("is-hidden")}constructor({selector:t,hidden:e=!0}){this.refs=this.getRefs(t),e&&this.hide()}}({selector:".loading"});let b,v;console.log("🚀 ~ loadSpinner",f);let y=1,L=1;const w=document.querySelector(".pagination");w.addEventListener("click",(async function(t){f.show();const e=d(t);if(e===y)return;y=e,await _(),f.hide()}));const S=document.querySelector(".home-gallery");async function _(){f.show();const t=await e(y);v=t.results,L=t.total_pages,console.log("locStorageFilms :>> ",v),console.log("totalPages :>> ",L),h(v,S),l(y,L,w),f.hide()}!async function(){f.show();const e=await t();b=e.genres,console.log("locStorageGenres :>> ",b),await _(),f.hide()}(),S.addEventListener("click",(function(t){const e=t.target.closest(".movies-images__item");if(!e)return;const n=Number(e.dataset.id),o=v.find((t=>t.id===n)),s=g(o.genre_ids);u(),p(o,s)}));const k=" popularByWeek",E=" popularByDay",$="watched",q="queue",T="genres";class A{setLocalStorage(t){localStorage.setItem(this.key,JSON.stringify(t))}getLocalStorage(){try{const t=localStorage.getItem(this.key);if(t)return JSON.parse(t)}catch(t){console.log("Error",t)}}addFilmtoStorage(t){const e=this.getLocalStorage(this.key);e.push(t),this.value=e,this.setLocalStorage(this.value)}deleteFilmFromStorage(t){const e=this.getLocalStorage(this.key);if(e.length)if(e.find((e=>e.id===t.id))){console.log("I`m delete film from the collection!");const n=e.findIndex((e=>e.id===t.id));e.splice(n,1),this.value=currentFilms,this.setLocalStorage(this.value)}else console.log("Cannot find film in collection")}constructor(t,e=[]){this.key=t,this.value=e}}const x=new A(E),F=new A(k),M=new A($),j=new A(q),N=new A(T);x.setLocalStorage([]),F.setLocalStorage([]),M.setLocalStorage([]),j.setLocalStorage([]),N.setLocalStorage([]);({el:document.querySelector(".btn-up"),scrolling:!1,show(){this.el.classList.contains("btn-up_hide")&&!this.el.classList.contains("btn-up_hiding")&&(this.el.classList.remove("btn-up_hide"),this.el.classList.add("btn-up_hiding"),window.setTimeout((()=>{this.el.classList.remove("btn-up_hiding")}),300))},hide(){this.el.classList.contains("btn-up_hide")||this.el.classList.contains("btn-up_hiding")||(this.el.classList.add("btn-up_hiding"),window.setTimeout((()=>{this.el.classList.add("btn-up_hide"),this.el.classList.remove("btn-up_hiding")}),300))},addEventListener(){window.addEventListener("scroll",(()=>{const t=window.scrollY||document.documentElement.scrollTop;this.scrolling&&t>0||(this.scrolling=!1,t>400?this.show():this.hide())})),document.querySelector(".btn-up").onclick=()=>{this.scrolling=!0,this.hide(),window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener();const D=document.querySelector("#input-toggle");const H=document.querySelector(".home-gallery");D.addEventListener("change",(function(){if(D.checked){n(1).then((t=>{const e=t.results;x.setLocalStorage(e),h(e,H)}))}else{e(1).then((t=>{const e=t.results;F.setLocalStorage(e),h(e,H)}))}}));document.querySelector(".btn-add").addEventListener("click",(function(t){console.dir(t.target);const e=t.target,n=(e.closest(".film-information").children[0].textContent,F.getLocalStorage());console.log(n)}));
//# sourceMappingURL=index.17754186.js.map
