import LoadSpinner from './spinner';
// import { updatePagination, getCurrentPage } from './custom-pagination';
// import {
//   markupTrending,
//   getGenreByIdList,
//   createMarkupModalWindow,
// } from './markups';
// import modalActions from './modal-servise';
// import {
//   // watchedFilms,
//   // queueFilms,
//   // genresFilm,
//   LocalStorage,
// } from './local-storage';

// export const currentFilmsOnPage = new LocalStorage('currentFilmsList');
const loadSpinner = new LoadSpinner({
  selector: '.loading',
});

// import modalActions from './modal-servise';
// modalActions();
// const gallery = document.querySelector('.movies-images__list');
// const paginationRef = document.querySelector('.pagination');
// paginationRef.addEventListener('click', onPaginationButtonClick);

// let receivedFilmList;

// let currentPage = 1;
// let totalPages = 1;

// initLibrary();
// function initLibrary() {
//   loadSpinner.show();
//   receivedFilmList = watchedFilms.getLocalStorage();

//   currentGenres = genresFilm.getLocalStorage();
//   updateGallery();
//   loadSpinner.hide();
// }

// function updateGallery() {
//   loadSpinner.show();
//   //  totalPages

//   // markupTrending(receivedFilmList, gallery);
//   updatePagination(currentPage, totalPages, paginationRef);

//   loadSpinner.hide();
// }

// async function onPaginationButtonClick(event) {
//   if (event.target.nodeName !== 'BUTTON') return;
//   loadSpinner.show();
//   const targetPage = getCurrentPage(event);
//   if (targetPage === currentPage) return;
//   currentPage = targetPage;
//   updateGallery();
//   // window.scrollTo(0, 0);
//   loadSpinner.hide();
// }
