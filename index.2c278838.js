var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("9AkgD"),i=r("7me8F"),a=r("fA0uA");const d=document.querySelector(".dropdown"),l=document.querySelector(".items"),c=document.querySelector(".home-gallery");d.addEventListener("click",(function(e){e.preventDefault(),d.classList.toggle("active")})),l.addEventListener("click",(async function(e){e.preventDefault();const n=await(0,i.fetchMoivesByGenre)(e.target.id,1);(0,a.markupTrending)(n.results,c)})),function(){const e=o.dataGenres.genres.map(((e,n)=>`<a href="#" style="--i:${n+1}" id="${e.id}">\n           <span></span>${e.name}\n         </a>`)).join("");l.insertAdjacentHTML("beforeend",e)}();
//# sourceMappingURL=index.2c278838.js.map
