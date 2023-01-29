import { watchedFilms, queueFilms } from './local-storage';
import { markupTrending } from './markups';

const wachedBtn = document.querySelector('.js-watched');
const queueBtn = document.querySelector('.js-queue');
const gallery = document.querySelector('.home-gallery');
const defaultPage = document.querySelector('.default');
console.dir(defaultPage.firstElementChild);

wachedBtn.addEventListener('click', onWachedBtn);
queueBtn.addEventListener('click', onQueueBtn);

function onWachedBtn() {
  clearGallery();
  const movies = watchedFilms.getLocalStorage();
  if (!movies) {
    showDefaultPage();
    libraryError();
  } else {
    hiddenDefaultPage();
    markupTrending(movies, gallery);
  }
}

function onQueueBtn() {
  clearGallery();
  const movies = queueFilms.getLocalStorage();
  if (!movies) {
    showDefaultPage();
    libraryError();
  } else {
    hiddenDefaultPage();
    markupTrending(movies, gallery);
  }
}
function libraryError() {
  defaultPage.firstElementChild.textContent = 'There are no movies in your library yet..';
  defaultPage.firstElementChild.style.color = '#ff001b';
}
function hiddenDefaultPage() {
  defaultPage.classList.add('visually-hidden');
}
function showDefaultPage() {
  defaultPage.classList.remove('visually-hidden');
}
function clearGallery() {
  gallery.innerHTML = '';
}
