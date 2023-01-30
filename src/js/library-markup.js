import { watchedFilms, queueFilms } from './local-storage';
import { markupTrending } from './markups';
import { getGenreByIdList, createMarkupModalWindow } from './markups';
import modalActions from './modal-servise';

const homeGallery = document.querySelector('.home-gallery');
homeGallery.addEventListener('click', onCardClick);

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
  defaultPage.firstElementChild.textContent =
    'There are no movies in your library yet..';
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

function onCardClick(event) {
  const filmBox = event.target.closest('.movies-images__item');
  console.log('работает');
  if (!filmBox) return;
  const filmBoxId = Number(filmBox.dataset.id);
  const movies = watchedFilms.getLocalStorage();
  const data = movies.find(film => film.id === filmBoxId);
  const filmGenres = getGenreByIdList(data.genre_ids);
  modalActions(event);
  createMarkupModalWindow(data, filmGenres);
}
