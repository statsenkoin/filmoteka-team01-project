var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in i){var s=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,s.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},e.parcelRequired7c6=s);var a=s("7me8F");let n,c,r,o,d=9,l=1;function u(e,t,i){r=i,l=e,c=t,n=function(e,t){const i=[];let s,a;const n=Math.floor(d/2);e<1?e=1:e>t&&(e=t);t<=d?(s=1,a=t):e<=n?(s=1,a=d):e+n>=t?(s=t-2*n,a=t):(s=e-n,a=e+n);for(let e=s;e<=a;e+=1)i.push(e);d>=9&&(i.splice(0,1,1),i.splice(i.length-1,1,t),e-1>n&&t>d&&i.splice(1,1," ..."),e+1+n<t&&t>d&&i.splice(i.length-2,1,"... "));return i}(l,c),function(e,t){let i=e.reduce(((e,t)=>e+`<button type="button" ${t===l?'class="pagination-button pagination-button-current"':'class="pagination-button"'}>${t}</button>`),"");c>d&&(1!==l&&(i='<button type="button" class="pagination-button">&lt;</button>'+i),l!==c&&(i+='<button type="button" class="pagination-button">&gt;</button>'));t.innerHTML="",t.insertAdjacentHTML("beforeend",i)}(n,r)}function m(e){const t=e.target.textContent;return isNaN(Number(t))||(o=Number(t)),">"===t&&(o=l===c?c:l+1),"<"===t&&(o=1===l?1:l-1)," ..."===t&&(o=l-(d-4)),"... "===t&&(o=l+(d-4)),l=o,l}window.addEventListener("resize",(()=>{const e=window.matchMedia("(min-width: 768px)").matches;d=e?9:5,u(l,c,r)}));var v=s("fA0uA");s("7TcCz");var f=s("b5rV1"),g=s("9AkgD");const L=document.querySelector(".dropdown"),y=document.querySelector(".items");L.addEventListener("click",(function(e){e.preventDefault(),L.classList.toggle("active")})),function(){const e=g.dataGenres.genres.map(((e,t)=>`<a href="#" style="--i:${t+1}" id="${e.id}">\n           <span></span>${e.name}\n         </a>`)).join("");y.insertAdjacentHTML("beforeend",e)}();const _=new(0,f.LocalStorage)("currentFilmsList"),p=new class{getRefs(e){const t={};return t.spinner=document.querySelector(e),t}show(){this.refs.spinner.classList.remove("is-hidden")}hide(){this.refs.spinner.classList.add("is-hidden")}constructor({selector:e,hidden:t=!0}){this.refs=this.getRefs(e),t&&this.hide()}}({selector:".loading"}),h=document.querySelector(".home-gallery"),b=document.querySelector(".pagination"),k=document.querySelector("#input-toggle"),w=document.querySelector(".search-form"),S=document.querySelector(".error-text"),q=document.querySelector("#week-btn"),E=document.querySelector("#today-btn");let T,A,F;h.addEventListener("click",(function(e){const t=e.target.closest(".movies-images__item");if(!t)return;const i=Number(t.dataset.id),s=F.find((e=>e.id===i)),a=(0,v.getGenreByIdList)(s.genre_ids);(0,v.createMarkupModalWindow)(s,a)})),b.addEventListener("click",(async function(e){if("BUTTON"!==e.target.nodeName)return;p.show();const t=m(e);if(t===M)return;M=t,await W(),window.scrollTo(0,0),p.hide()})),k.addEventListener("change",(async function(e){C=e.currentTarget.checked,V=!1,R=!1,M=1,C?(E.classList.add("line-after"),q.classList.remove("line-after")):(E.classList.remove("line-after"),q.classList.add("line-after"));await W()})),y.addEventListener("click",(async function(e){e.preventDefault(),V=!0,R=!1,x=e.target.id,M=1,await W()})),w.addEventListener("submit",(async function(e){if(e.preventDefault(),N=e.target.elements.searchQuery.value.trim(),w.reset(),!N)return void $();R=!0,V=!1,D=M,M=1,await W()}));let x,N="",D=1,M=1,j=1,C=!1,V=!1,R=!1;async function W(){p.show(),await async function(){if(R){const e=await(0,a.fetchQuery)(N,M);if(!e.results.length)return M=D,p.hide(),void $();T=e}else T=V?await(0,a.fetchMoivesByGenre)(x,M):C?await(0,a.fetchPopularDay)(M):await(0,a.fetchPopular)(M)}(),j=V?300:T.total_pages,F=T.results,_.setLocalStorage(F),(0,v.markupTrending)(F,h),u(M,j,b),p.hide()}function $(){S.style.opacity="1",setTimeout((()=>{S.style.opacity="0"}),2e3)}S.style.opacity="0",async function(){p.show(),T=await(0,a.fetchGenre)(),A=T.genres,f.genresFilm.setLocalStorage(A),await W(),p.hide()}(),s("b5rV1"),s("6gB84"),s("7TcCz");const z=document.querySelector(".footer__link"),B=(document.querySelector(".teams_desk"),document.querySelector(".fon")),G=document.querySelector(".line1"),O=document.querySelector(".line11"),U=document.querySelector(".line12"),H=document.querySelector(".line13"),I=document.querySelector(".line2"),Q=document.querySelector(".line21"),P=document.querySelector(".line3"),J=document.querySelector("#p1"),K=document.querySelector("#p2"),X=document.querySelector("#p3"),Y=document.querySelector("#p4"),Z=document.querySelector("#p5"),ee=document.querySelector("#p6"),te=document.querySelector("#p7"),ie=document.querySelector("#p8"),se=document.querySelector("#p9"),ae=document.querySelector("#p10"),ne=document.querySelector("#p11");function ce(e){e.preventDefault(),oe(),re(),function(e){"t1"===e.target.getAttribute("id")&&J.classList.add("teams_desk_active");"t2"===e.target.getAttribute("id")&&K.classList.add("teams_desk_active");"t3"===e.target.getAttribute("id")&&X.classList.add("teams_desk_active");"t4"===e.target.getAttribute("id")&&Y.classList.add("teams_desk_active");"t5"===e.target.getAttribute("id")&&Z.classList.add("teams_desk_active");"t6"===e.target.getAttribute("id")&&ee.classList.add("teams_desk_active");"t7"===e.target.getAttribute("id")&&te.classList.add("teams_desk_active");"t8"===e.target.getAttribute("id")&&ie.classList.add("teams_desk_active");"t9"===e.target.getAttribute("id")&&se.classList.add("teams_desk_active");"t10"===e.target.getAttribute("id")&&ae.classList.add("teams_desk_active");"t11"===e.target.getAttribute("id")&&ne.classList.add("teams_desk_active")}(e)}function re(){J.classList.remove("teams_desk_active"),K.classList.remove("teams_desk_active"),X.classList.remove("teams_desk_active"),Y.classList.remove("teams_desk_active"),Z.classList.remove("teams_desk_active"),ee.classList.remove("teams_desk_active"),te.classList.remove("teams_desk_active"),ie.classList.remove("teams_desk_active"),se.classList.remove("teams_desk_active"),ae.classList.remove("teams_desk_active"),ne.classList.remove("teams_desk_active")}function oe(){G.classList.remove("line_active"),O.classList.remove("line_active"),U.classList.remove("line_active"),H.classList.remove("line_active"),I.classList.remove("line_active"),Q.classList.remove("line_active"),P.classList.remove("line_active")}B.addEventListener("click",(function(e){oe(),re(),B.classList.remove("fon_active")})),z.addEventListener("click",(function(e){e.preventDefault(),document.defaultView.innerWidth<768&&(G.classList.add("line_active"),O.classList.add("line_active"),U.classList.add("line_active"),H.classList.add("line_active"));document.defaultView.innerWidth<1280&&(I.classList.add("line_active"),Q.classList.add("line_active"));document.defaultView.innerWidth>1280&&P.classList.add("line_active");B.classList.add("fon_active")})),G.addEventListener("click",ce),O.addEventListener("click",ce),U.addEventListener("click",ce),H.addEventListener("click",ce),I.addEventListener("click",ce),Q.addEventListener("click",ce),P.addEventListener("click",ce),s("9AkgD");f=s("b5rV1");var de=s("iQIUW");const le={width:"280px",borderRadius:"30px",position:"center-bottom",distance:"25px",fontSize:"18px",timeout:2e3},ue=document.querySelector(".js-filmInfoModal");ue.addEventListener("click",(function(e){const t=e.target;if(t.classList.contains("js-add-to-watched")||t.classList.contains("js-add-to-queue")){me=_.getLocalStorage();const e=ue.lastElementChild.lastElementChild.id,i=me.filter((t=>t.id==e));if(t.classList.contains("js-add-to-watched")){f.watchedFilms.getLocalStorage()||f.watchedFilms.setLocalStorage();const t=f.watchedFilms.getLocalStorage();t.filter((t=>t.id==e)).length?de.Notify.warning("The movie has already been added to my library",le):(f.watchedFilms.addFilmtoStorage(...i),de.Notify.success("The movie has been added to my library",le))}else if(t.classList.contains("js-add-to-queue")){f.queueFilms.getLocalStorage()||f.queueFilms.setLocalStorage();const t=f.queueFilms.getLocalStorage();t.filter((t=>t.id==e)).length?de.Notify.warning("The movie has already been added to my library",le):(f.queueFilms.addFilmtoStorage(...i),de.Notify.success("The movie has been added to my library",le))}t.disabled="true",t.style.background="#FF7F50"}}));let me=null;s("37v9V"),s("2ix2C");
//# sourceMappingURL=index.8ad8fe0f.js.map
