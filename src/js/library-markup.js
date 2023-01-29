import { watchedFilms, queueFilms } from './local-storage';
import { markupTrending } from './markups';

const wachedBtn = document.querySelector('.js-watched');
const queueBtn = document.querySelector('.js-queue');
const gallery = document.querySelector('.home-gallery');
console.log(wachedBtn);
console.log(queueBtn);
console.log(gallery);

wachedBtn.addEventListener('click', onWachedBtn);

function onWachedBtn() {
  const movies = watchedFilms.getLocalStorage();
  markupTrending(movies, gallery);
}
