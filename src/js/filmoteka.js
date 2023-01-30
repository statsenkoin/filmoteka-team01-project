import {
  fetchPopular,
  fetchPopularDay,
  fetchGenre,
  fetchMoivesByGenre,
  fetchQuery,
} from './api-service';
import { updatePagination, getCurrentPage } from './custom-pagination';
import {
  markupTrending,
  getGenreByIdList,
  createMarkupModalWindow,
} from './markups';
import modalActions from './modal-servise';
import LoadSpinner from './spinner';
import { genresFilm, LocalStorage } from './local-storage';
import { items } from './genres-btn';

export const popularFilms = new LocalStorage('currentFilmsList');
const loadSpinner = new LoadSpinner({
  selector: '.loading',
});

const homeGallery = document.querySelector('.home-gallery');
const paginationRef = document.querySelector('.pagination');
const toggle = document.querySelector('#input-toggle');
const searchForm = document.querySelector('.search-form');
const errorMessage = document.querySelector('.error-text');

homeGallery.addEventListener('click', onCardClick);
paginationRef.addEventListener('click', onPaginationButtonClick);
toggle.addEventListener('change', onCheckBox);
items.addEventListener('click', onGanreClick);
searchForm.addEventListener('submit', onSearchForm);

let receivedFilmList;
let currentGenres;
let currentFilmsList;
let searchQuery = '';
let tempPage = 1;
let currentPage = 1;
let totalPages = 1;
let genreId;
let isTodayChecked = false;
let isGenreChoosen = false;
let isSearchChoosen = false;
errorMessage.style.opacity = '0';

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
  await chooseSearchQuery();
  // ======================================================
  totalPages = isGenreChoosen ? 300 : receivedFilmList.total_pages;
  // ======================================================
  currentFilmsList = receivedFilmList.results;
  popularFilms.setLocalStorage(currentFilmsList);
  markupTrending(currentFilmsList, homeGallery);
  updatePagination(currentPage, totalPages, paginationRef);
  loadSpinner.hide();
}

async function chooseSearchQuery() {
  if (isSearchChoosen) {
    const searchFilmList = await fetchQuery(searchQuery, currentPage);
    if (!searchFilmList.results.length) {
      currentPage = tempPage;
      loadSpinner.hide();
      return;
    }
    receivedFilmList = searchFilmList;
  } else if (isGenreChoosen) {
    receivedFilmList = await fetchMoivesByGenre(genreId, currentPage);
  } else {
    receivedFilmList = isTodayChecked
      ? await fetchPopularDay(currentPage)
      : await fetchPopular(currentPage);
  }
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
  isSearchChoosen = false;
  genreId = evt.target.id;
  currentPage = 1;
  await updateGallery();
}

// ===== checkBox week/today ========================
async function onCheckBox(event) {
  isTodayChecked = event.currentTarget.checked;
  isGenreChoosen = false;
  isSearchChoosen = false;
  currentPage = 1;
  await updateGallery();
}

// ===== search input =================================
async function onSearchForm(evt) {
  evt.preventDefault();
  searchQuery = evt.target.elements.searchQuery.value.trim();
  searchForm.reset();
  if (!searchQuery) {
    warningMessage();
    return;
  }
  isSearchChoosen = true;
  isGenreChoosen = false;
  tempPage = currentPage;
  currentPage = 1;
  await updateGallery();
}
function warningMessage() {
  errorMessage.style.opacity = '1';
  timeoutRemoveErrorMessage();
}
function timeoutRemoveErrorMessage() {
  setTimeout(() => {
    errorMessage.style.opacity = '0';
  }, 2000);
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
