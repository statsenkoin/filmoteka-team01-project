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
// ==============================================
import { popularFilmsbyDay, popularFilmsbyWeek } from './local-storage';
// ==============================================

const loadSpinner = new LoadSpinner({
  selector: '.loading',
});

// емуляція locale stotage
let locStorageGenres;
let locStorageFilms;
// =======================

let currentPage = 1;
let totalPages = 1;

// ===== pagination =====================================
const paginationRef = document.querySelector('.pagination');
paginationRef.addEventListener('click', onPaginationButtonClick);

async function onPaginationButtonClick(event) {
  loadSpinner.show();
  const targetPage = getCurrentPage(event);
  if (targetPage === currentPage) return;
  currentPage = targetPage;

  await updateGallery();
  window.scrollTo(0, 0);
  loadSpinner.hide();
}
// ===== checkBox week/today ========================
let isTodayChecked = false;
let genreId;
let isGenreChoosen = false;
const toggle = document.querySelector('#input-toggle');
toggle.addEventListener('change', onCheckBox);
async function onCheckBox(event) {
  isTodayChecked = event.currentTarget.checked;
  isGenreChoosen = false;
  currentPage = 1;
  await updateGallery();
}
// ===== button genres ===============================
import { items } from './genres-btn';
items.addEventListener('click', onGanreClick);

async function onGanreClick(evt) {
  console.log('evt :>> ', evt);
  evt.preventDefault();
  isGenreChoosen = true;
  genreId = evt.target.id;
  currentPage = 1;
  console.log('genreId :>> ', genreId);
  console.log('isGenreChoosen :>> ', isGenreChoosen);
  await updateGallery();
}
// ====================================================

const homeGallery = document.querySelector('.home-gallery');

initGallery();
let data;
async function initGallery() {
  loadSpinner.show();
  data = await fetchGenre();
  locStorageGenres = data.genres;
  await updateGallery();
  loadSpinner.hide();
}

async function updateGallery() {
  loadSpinner.show();
  // =======================================================
  if (isGenreChoosen) {
    data = await fetchMoivesByGenre(genreId, currentPage);
  } else {
    data = isTodayChecked
      ? await fetchPopularDay(currentPage)
      : await fetchPopular(currentPage);
  }
  // ======================================================
  locStorageFilms = data.results;
  totalPages = data.total_pages;
  markupTrending(locStorageFilms, homeGallery);

  updatePagination(currentPage, totalPages, paginationRef);
  loadSpinner.hide();
}

homeGallery.addEventListener('click', onCardClick);

function onCardClick(event) {
  const filmBox = event.target.closest('.movies-images__item');
  if (!filmBox) return;
  const filmBoxId = Number(filmBox.dataset.id);
  const data = locStorageFilms.find(film => film.id === filmBoxId);
  const filmGenres = getGenreByIdList(data.genre_ids);
  modalActions(event);
  createMarkupModalWindow(data, filmGenres);
}
