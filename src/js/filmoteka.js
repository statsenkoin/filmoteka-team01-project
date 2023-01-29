import {
  fetchPopular,
  fetchPopularDay,
  fetchGenre,
  fetchMoivesByGenre,
} from './api-service';
import { updatePagination, getCurrentPage } from './custom-pagination';
import { markupTrending, getGenreByIdList } from './markups';
import createMarkupModalWindow from './modal-window-markup';
import modalActions from './modal-servise';
import LoadSpinner from './spinner';
import { genresFilm, LocalStorage } from './local-storage';
import { items } from './genres-btn';

const popularFilms = new LocalStorage('currentFilmsList');
const loadSpinner = new LoadSpinner({
  selector: '.loading',
});

const homeGallery = document.querySelector('.home-gallery');
const paginationRef = document.querySelector('.pagination');
const toggle = document.querySelector('#input-toggle');

homeGallery.addEventListener('click', onCardClick);
paginationRef.addEventListener('click', onPaginationButtonClick);
toggle.addEventListener('change', onCheckBox);
items.addEventListener('click', onGanreClick);

let receivedFilmList;
let currentGenres;
let currentFilmsList;
let currentPage = 1;
let totalPages = 1;
let isTodayChecked = false;
let isGenreChoosen = false;
let genreId;

initGallery();

async function initGallery() {
  loadSpinner.show();
  receivedFilmList = await fetchGenre();
  currentGenres = receivedFilmList.genres;
  genresFilm.setLocalStorage(currentGenres);
  await updateGallery();
  loadSpinner.hide();
}

async function updateGallery() {
  loadSpinner.show();
  // =======================================================
  if (isGenreChoosen) {
    receivedFilmList = await fetchMoivesByGenre(genreId, currentPage);
  } else {
    receivedFilmList = isTodayChecked
      ? await fetchPopularDay(currentPage)
      : await fetchPopular(currentPage);
  }
  // ======================================================
  currentFilmsList = receivedFilmList.results;
  popularFilms.setLocalStorage(currentFilmsList);
  console.log('currentFilmsList :>> ', currentFilmsList);
  totalPages = receivedFilmList.total_pages;
  markupTrending(currentFilmsList, homeGallery);

  updatePagination(currentPage, totalPages, paginationRef);
  loadSpinner.hide();
}

function onCardClick(event) {
  const filmBox = event.target.closest('.movies-images__item');
  if (!filmBox) return;
  const filmBoxId = Number(filmBox.dataset.id);
  const data = currentFilmsList.find(film => film.id === filmBoxId);
  const filmGenres = getGenreByIdList(data.genre_ids);
  modalActions(event);
  createMarkupModalWindow(data, filmGenres);
}

// ===== button genres ===============================
async function onGanreClick(evt) {
  evt.preventDefault();
  isGenreChoosen = true;
  genreId = evt.target.id;
  currentPage = 1;
  await updateGallery();
}

// ===== checkBox week/today ========================
async function onCheckBox(event) {
  isTodayChecked = event.currentTarget.checked;
  isGenreChoosen = false;
  currentPage = 1;
  await updateGallery();
}

// ===== pagination =====================================
async function onPaginationButtonClick(event) {
  if (event.target.nodeName !== 'BUTTON') return;
  loadSpinner.show();
  const targetPage = getCurrentPage(event);
  if (targetPage === currentPage) return;
  currentPage = targetPage;
  await updateGallery();
  window.scrollTo(0, 0);
  loadSpinner.hide();
}
