!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequired7c6=i),i.register("LW3sO",(function(t,n){e(t.exports,"markupTrending",(function(){return r})),e(t.exports,"markupSearch",(function(){return a})),e(t.exports,"getGenreByIdList",(function(){return s})),e(t.exports,"modalWindow",(function(){return d})),e(t.exports,"createMarkupModalWindow",(function(){return u}));var o=i("8FeKp");function r(e,t){console.log("markupTrending-arrMovies :>> ",e);var n=e.map((function(e){var t=e.id,n=e.title,o=e.genre_ids,r=e.original_title,i=e.release_date,a=e.poster_path;return'<li class="movies-images__item" data-id='.concat(t,'>\n            <img class="movie-image" src="').concat(l(a),'" \n            alt="Movie ').concat(n||r,'" />\n        <div class="box-description">\n            <div class="title_wrraper"><h2 class="box-description__title">').concat(n||r,'</h2></div>\n            <p class="box-description__text">\n                <span class="box-description__span">').concat(c(o)||"There are no genres","</span>").concat(i.slice(0,4)||"No year","\n            </p>\n        </div>\n    </li>")})).join("");t.innerHTML=n}function a(e,t){console.log("markupTrending-arrMovies :>> ",e);var n=e.map((function(e){var t=e.id,n=e.title,o=e.genre_ids,r=e.original_title,i=e.release_date,a=e.poster_path;return'<li class="movies-images__item" data-id='.concat(t,'>\n            <img class="movie-image" src="').concat(l(a),'" \n            alt="Movie ').concat(n||r,'" />\n        <div class="box-description">\n            <div class="title_wrraper"><h2 class="box-description__title">').concat(n||r,'</h2></div>\n            <p class="box-description__text">\n                <span class="box-description__span">').concat(c(o)||"There are no genres","</span>").concat(i.slice(0,4)||"No year","\n            </p>\n        </div>\n    </li>")})).join("");t.innerHTML=n}function l(e){var t="https://image.tmdb.org/t/p/w500".concat(e);return null===e&&(t="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"),t}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.dataGenres.genres,n=[],r=!0,i=!1,a=void 0;try{for(var l,c=function(e,o){var r=o.value,i=t.find((function(e){return e.id===r}));n.push(i.name)},s=e[Symbol.iterator]();!(r=(l=s.next()).done);r=!0)c(s,l)}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n.length>3&&(n=n.slice(0,2)).push("Other"),n.join(", ")}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.dataGenres.genres,n=[];if(0===e.length)return n.push("There are no genres"),n;var r=!0,i=!1,a=void 0;try{for(var l,c=function(e,o){var r=o.value,i=t.find((function(e){return e.id===r}));n.push(i.name)},s=e[Symbol.iterator]();!(r=(l=s.next()).done);r=!0)c(s,l)}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n.join(", ")}var d=document.querySelector(".modal-film-info");function u(e,t){var n=e.id,o=e.title,r=e.poster_path,i=e.vote_average,a=e.vote_count,c=e.popularity,s=e.original_title,d=e.overview,u=document.querySelector(".modal-film-info"),f='<div class="poster-block">\n        <img class="poster" src="'.concat(l(r),'" alt="').concat(o,'" />\n           <button type="button" data-modal-id=').concat(n,'  class="youtube__btn js__youtube__btn">\n        <span class="background-image"></span>\n           <i class="fa fa-youtube-play" aria-hidden="true"></i>\n           </button>\n      </div>\n      <div class="film-information" id=\'').concat(n,'\'>\n        <h2 class="film-information-title">').concat(o,'</h2>\n        <table class="rating-table">\n          <tr>\n            <td class="table-subtitle">Vote / Votes</td>\n            <td class="table-inf"><span class="rating">').concat(i.toFixed(1),"</span> / ").concat(a,'</td>\n          </tr>\n          <tr>\n            <td class="table-subtitle">Popularity</td>\n            <td class="table-inf">').concat(c.toFixed(1),'</td>\n          </tr>\n          <tr>\n            <td class="table-subtitle">Original Title</td>\n            <td class="table-inf">').concat(s,'</td>\n          </tr>\n          <tr>\n            <td class="table-subtitle">Genre</td>\n            <td class="table-inf">').concat(t,'</td>\n          </tr>\n        </table>\n        <p class="about">About</p>\n        <p class="about-film">\n          ').concat(d,'\n        </p>\n        <div class="buttons-add">\n          <button type="button" class="btn-add js-add-to-watched">add to Watched</button>\n          <button type="button" class="btn-add js-add-to-queue">add to queue</button>\n        </div>\n      </div>');u.innerHTML=f}})),i.register("8FeKp",(function(t,n){e(t.exports,"dataGenres",(function(){return r}));var o=i("kf3wk"),r={genres:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]};(0,o.default)()})),i.register("kf3wk",(function(t,n){e(t.exports,"default",(function(){return r}));var o=i("eireD");function r(){var e=document.querySelectorAll(".js-modal-triger"),t=document.querySelector(".backdrop"),n=document.querySelectorAll(".modal"),r=document.querySelectorAll(".modal-close-btn");function i(e){e.preventDefault();var n=e.currentTarget.dataset.modal;document.querySelector("."+n).classList.add("active"),t.classList.add("active"),o.default.disabledScroll()}function a(e){e.preventDefault(),this.closest(".modal").classList.remove("active"),t.classList.remove("active"),o.default.enabledScroll()}document.addEventListener("keydown",(function(e){if("Escape"!==e.code)return;Array.from(n).forEach((function(e){e.classList.remove("active"),o.default.enabledScroll()})),t.classList.remove("active"),o.default.enabledScroll()})),t.addEventListener("click",(function(e){Array.from(n).forEach((function(e){e.classList.remove("active"),o.default.enabledScroll()})),t.classList.remove("active"),o.default.enabledScroll()})),Array.from(e).forEach((function(e){e.addEventListener("click",i)})),Array.from(r).forEach((function(e){e.addEventListener("click",a)}))}})),i.register("eireD",(function(t,n){e(t.exports,"default",(function(){return r}));var o={scrollPosition:null,disabledScroll:function(){o.scrollPosition=window.scrollY,document.body.style.cssText="\n        overflow: hidden;\n        top: -".concat(o.scrollPosition,"px;\n        left: 0;\n        height: 100vh;\n        width: 100vw;\n        padding-right: 10px;\n        ")},enabledScroll:function(){document.body.style.cssText="",window.scroll({top:o.scrollPosition})}},r=o})),i.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),i.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,o){t&&n(e.prototype,t);o&&n(e,o);return e}})),i.register("4LMMA",(function(n,o){e(n.exports,"LocalStorage",(function(){return d})),e(n.exports,"watchedFilms",(function(){return u})),e(n.exports,"queueFilms",(function(){return f})),e(n.exports,"genresFilm",(function(){return m}));var r=i("8MBJY"),a=i("a2hTj"),l="watched",c="queue",s="genres",d=function(){"use strict";function e(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];t(r)(this,e),this.key=n,this.value=o}return t(a)(e,[{key:"setLocalStorage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.value=e,localStorage.setItem(this.key,JSON.stringify(this.value))}},{key:"getLocalStorage",value:function(){try{var e=localStorage.getItem(this.key);if(e)return JSON.parse(e)}catch(e){console.log("Error",e)}}},{key:"addFilmtoStorage",value:function(e){var t=this.getLocalStorage(this.key);t.push(e),this.value=t,this.setLocalStorage(this.value)}},{key:"deleteFilmFromStorage",value:function(e){var t=this.getLocalStorage(this.key);if(t.length)if(t.find((function(t){return t.id===e.id}))){console.log("I`m delete film from the collection!");var n=t.findIndex((function(t){return t.id===e.id}));t.splice(n,1),this.value=currentFilms,this.setLocalStorage(this.value)}else console.log("Cannot find film in collection")}}]),e}(),u=new d(l),f=new d(c),m=new d(s)}))}();
//# sourceMappingURL=index.dee51be8.js.map
