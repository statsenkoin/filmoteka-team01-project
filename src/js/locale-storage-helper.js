// currentFilmsOnPage = class LocalStorage instance key currentFilmsList
import { currentFilmsOnPage } from './filmoteka';
import { watchedFilms, queueFilms } from './local-storage';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { homeGallery } from './filmoteka';
import { getGenreByIdList, createMarkupModalWindow } from './markups';

//options for notiflix
const options = {
  width: '280px',
  borderRadius: '30px',
  position: 'center-bottom',
  distance: '25px',
  fontSize: '18px',
  timeout: 2000,
};
//  =======================================================

homeGallery.addEventListener('click', onCardClick);
const filmModalRef = document.querySelector('.js-filmInfoModal');
filmModalRef.addEventListener('click', updateDataBase);

// ====================================================

let isInWatched = false;
let isInQueue = false;

let filmsInWatched;
let filmsInQueue;

let filmCollection;
let currentFilm;
let idFilm;

initLocaleStorage();
function initLocaleStorage() {
  if (!watchedFilms.getLocalStorage()) {
    watchedFilms.setLocalStorage();
  }
  if (!queueFilms.getLocalStorage()) {
    queueFilms.setLocalStorage();
  }
}

// ======================================================
export function updateDataBase(event) {
  const element = event.target;
  currentFilm = filmCollection.filter(film => film.id == idFilm);

  if (
    element.classList.contains('js-add-to-watched') ||
    element.classList.contains('js-add-to-queue')
  ) {
    if (element.classList.contains('js-add-to-watched')) {
      if (isInWatched) {
        watchedFilms.deleteFilmFromStorage(currentFilm[0]);
        event.target.textContent = 'add to watched';
        Notify.success('The movie is deleted from to my library', options);
        isInWatched = false;
      } else {
        watchedFilms.addFilmtoStorage(...currentFilm);
        event.target.textContent = 'remove from watched';
        Notify.success('The movie has been added to my library', options);
        isInWatched = true;
      }
    } else if (element.classList.contains('js-add-to-queue')) {
      if (isInQueue) {
        queueFilms.deleteFilmFromStorage(currentFilm[0]);
        event.target.textContent = 'add to queue';
        Notify.success('The movie is deleted from queue', options);
        isInQueue = false;
      } else {
        queueFilms.addFilmtoStorage(...currentFilm);
        event.target.textContent = 'remove from queue';
        Notify.success('The movie has been added to queue', options);
        isInQueue = true;
      }
    }
  }
}

/**
 * Checks if library (watched or queue) includes choosen film
 */
function checkIfInLibrary() {
  filmsInWatched = watchedFilms.getLocalStorage();
  isInWatched = filmsInWatched.length
    ? filmsInWatched.find(item => item.id == idFilm)
    : false;

  filmsInQueue = queueFilms.getLocalStorage();
  isInQueue = filmsInQueue.length
    ? filmsInQueue.find(item => item.id == idFilm)
    : false;
}

/**
 * Prepares data and calls to markup modal window
 * @param {DOM Element} onClick event
 * @returns nothing
 */
function onCardClick(event) {
  const filmBox = event.target.closest('.movies-images__item');
  if (!filmBox) return;
  idFilm = Number(filmBox.dataset.id);

  filmCollection = currentFilmsOnPage.getLocalStorage();
  const data = filmCollection.find(film => film.id === idFilm);
  const filmGenres = getGenreByIdList(data.genre_ids);

  checkIfInLibrary();
  createMarkupModalWindow(data, filmGenres, isInWatched, isInQueue);
}
