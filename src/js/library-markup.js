import { watchedFilms, queueFilms } from './local-storage';
import { markupTrending, createMarkupModalWindowMyLibrary } from './markups';
import { getGenreByIdList, createMarkupModalWindow } from './markups';
import modalActions from './modal-servise';

const homeGallery = document.querySelector('.home-gallery');
homeGallery.addEventListener('click', onCardClick);

const wachedBtn = document.querySelector('.js-watched');
const queueBtn = document.querySelector('.js-queue');
const gallery = document.querySelector('.home-gallery');
const defaultPage = document.querySelector('.default');
console.dir(defaultPage.firstElementChild);
let movies;

wachedBtn.addEventListener('click', onWachedBtn);
queueBtn.addEventListener('click', onQueueBtn);

function onWachedBtn() {
  clearGallery();
  movies = watchedFilms.getLocalStorage();
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
  movies = queueFilms.getLocalStorage();
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
  defaultPage.firstElementChild.style.boxShadow = '0px 0px 9px 0px #ff001b';
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

function onCardClick(event) {
  const filmBox = event.target.closest('.movies-images__item');
  if (!filmBox) return;
  const filmBoxId = Number(filmBox.dataset.id);
  const data = movies.find(film => film.id === filmBoxId);
  const filmGenres = getGenreByIdList(data.genre_ids);
  modalActions(event);
  createMarkupModalWindowMyLibrary(data, filmGenres);
}
