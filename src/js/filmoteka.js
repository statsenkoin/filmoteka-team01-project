import { fetchPopular, fetchGenre } from './api-service';

// емуляція locale stotage
let locStorageGenres;
let locStorageFilms;
// =======================

let currentPage = 1;
let totalPages = 1;

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
  // markupTrending(locStorageFilms, homeGallery);
}
