async function t(){try{const t=fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=e55542ecb6aab3d889d16953eac82937");return(await t).json()}catch(t){return console.log("error :>> ",t)}}async function e(t){try{const e=fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=e55542ecb6aab3d889d16953eac82937&page=${t}`);return(await e).json()}catch(t){return console.log("error :>> ",t)}}let s,i,n=1;document.querySelector(".home-gallery");!async function(){const o=await t();s=o.genres,console.log("locStorageGenres :>> ",s),await async function(){const t=await e(1);i=t.results,n=t.total_pages,console.log("locStorageFilms :>> ",i),console.log("totalPages :>> ",n)}()}();({el:document.querySelector(".btn-up"),scrolling:!1,show(){this.el.classList.contains("btn-up_hide")&&!this.el.classList.contains("btn-up_hiding")&&(this.el.classList.remove("btn-up_hide"),this.el.classList.add("btn-up_hiding"),window.setTimeout((()=>{this.el.classList.remove("btn-up_hiding")}),300))},hide(){this.el.classList.contains("btn-up_hide")||this.el.classList.contains("btn-up_hiding")||(this.el.classList.add("btn-up_hiding"),window.setTimeout((()=>{this.el.classList.add("btn-up_hide"),this.el.classList.remove("btn-up_hiding")}),300))},addEventListener(){window.addEventListener("scroll",(()=>{const t=window.scrollY||document.documentElement.scrollTop;this.scrolling&&t>0||(this.scrolling=!1,t>400?this.show():this.hide())})),document.querySelector(".btn-up").onclick=()=>{this.scrolling=!0,this.hide(),window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener();
//# sourceMappingURL=index.afae81a0.js.map
