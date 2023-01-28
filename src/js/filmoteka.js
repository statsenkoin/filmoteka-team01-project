import { fetchPopular, fetchGenre } from './api-service';
import { updatePagination, getCurrentPage } from './custom-pagination';
import { markupTrending, getGenreByIdList } from './markups';
import createMarkupModalWindow from './modal-window-markup';
import modalActions from './modal-servise';

import LoadSpinner from './spinner';

const loadSpinner = new LoadSpinner({
  selector: '.loading',
});
console.log('🚀 ~ loadSpinner', loadSpinner);

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
  loadSpinner.hide();
}
// ======================================================

const homeGallery = document.querySelector('.home-gallery');

initGallery();

async function initGallery() {
  loadSpinner.show();
  const data = await fetchGenre();
  locStorageGenres = data.genres;
  console.log('locStorageGenres :>> ', locStorageGenres);
  await updateGallery();
  loadSpinner.hide();
}

async function updateGallery() {
  loadSpinner.show();
  const data = await fetchPopular(currentPage);
  locStorageFilms = data.results;
  totalPages = data.total_pages;
  console.log('locStorageFilms :>> ', locStorageFilms);
  console.log('totalPages :>> ', totalPages);
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
