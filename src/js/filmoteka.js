import { fetchPopular, fetchGenre } from './api-service';
import { updatePagination, getCurrentPage } from './custom-pagination';
import { markupTrending } from './markups';

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
  const targetPage = getCurrentPage(event);
  if (targetPage === currentPage) return;
  currentPage = targetPage;

  await updateGallery();
}
// ======================================================

const homeGallery = document.querySelector('.home-gallery');

initGallery();

async function initGallery() {
  const data = await fetchGenre();
  locStorageGenres = data.genres;
  console.log('locStorageGenres :>> ', locStorageGenres);
  await updateGallery();
}

async function updateGallery() {
  const data = await fetchPopular(currentPage);
  locStorageFilms = data.results;
  totalPages = data.total_pages;
  console.log('locStorageFilms :>> ', locStorageFilms);
  console.log('totalPages :>> ', totalPages);
  markupTrending(locStorageFilms, homeGallery);

  updatePagination(currentPage, totalPages, paginationRef);
}

//
// import modalActions from './modal-servise';
// modalActions();
