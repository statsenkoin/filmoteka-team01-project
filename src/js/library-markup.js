import { watchedFilms, queueFilms } from './local-storage';
import {
  markupTrending,
  createMarkupModalWindowMyLibrary,
  getGenreByIdList,
} from './markups';
import modalActions from './modal-servise';
import { Notify } from 'notiflix';

const options = {
  width: '280px',
  borderRadius: '30px',
  position: 'center-bottom',
  distance: '25px',
  fontSize: '18px',
  timeout: 2000,
};

const homeGallery = document.querySelector('.home-gallery');
homeGallery.addEventListener('click', onCardClick);

const watchedBtn = document.querySelector('.js-watched');
const queueBtn = document.querySelector('.js-queue');
const gallery = document.querySelector('.home-gallery');
const defaultPage = document.querySelector('.default');
const modalWindow = document.querySelector('.js-filmInfoModal');

watchedBtn.classList.add('library_current');
hiddenDefaultPage();
let movies = watchedFilms.getLocalStorage() || [];
if (watchedBtn.classList.contains('library_current')) {
  const defaultMarkup = watchedFilms.getLocalStorage();
  // console.log(defaultMarkup);
  if (!defaultMarkup || !defaultMarkup.length) {
    libraryError();
    showDefaultPage();
  } else {
    markupTrending(defaultMarkup, gallery);
  }
}

watchedBtn.addEventListener('click', onWatchedBtn);
queueBtn.addEventListener('click', onQueueBtn);
modalWindow.addEventListener('click', onBtnDelete);

window.scrollTo(0, 0);

function onBtnDelete(event) {
  const element = event.target;
  if (element.classList.contains('js-delete')) {
    if (watchedBtn.classList.contains('library_current')) {
      movies = watchedFilms.getLocalStorage();

      const filmID = modalWindow.lastElementChild.lastElementChild.id;

      const currentFilm = movies.find(film => film.id == filmID);
      watchedFilms.deleteFilmFromStorage(currentFilm);
      Notify.success('The movie has been removed from the collection', options);
      const currentResponse = watchedFilms.getLocalStorage();

      if (!currentResponse.length) {
        clearGallery();
        libraryError();
        showDefaultPage();
      } else {
        markupTrending(currentResponse, gallery);
      }
    }
    if (queueBtn.classList.contains('library_current')) {
      movies = queueFilms.getLocalStorage();
      const filmID = modalWindow.lastElementChild.lastElementChild.id;
      const currentFilm = movies.find(film => film.id == filmID);
      queueFilms.deleteFilmFromStorage(currentFilm);
      Notify.success('The movie has been removed from the collection', options);

      const currentResponse = queueFilms.getLocalStorage();
      if (!currentResponse.length) {
        clearGallery();
        libraryError();
        showDefaultPage();
      } else {
        markupTrending(currentResponse, gallery);
      }
    }
  }
}

function onWatchedBtn() {
  clearGallery();
  queueBtn.classList.remove('library_current');
  watchedBtn.classList.add('library_current');
  movies = watchedFilms.getLocalStorage();
  if (!movies || !movies.length) {
    showDefaultPage();
    libraryError();
  } else {
    hiddenDefaultPage();
    markupTrending(movies, gallery);
  }
}

function onQueueBtn() {
  clearGallery();
  watchedBtn.classList.remove('library_current');
  queueBtn.classList.add('library_current');
  movies = queueFilms.getLocalStorage();
  if (!movies || !movies.length) {
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
