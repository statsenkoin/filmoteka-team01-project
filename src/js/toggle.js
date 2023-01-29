// import { fetchPopular, fetchPopularDay } from './api-service';
// import { updatePagination, getCurrentPage } from './custom-pagination';
// import { markupTrending, getGenreByIdList } from './markups';
// import { popularFilmsbyDay, popularFilmsbyWeek } from './local-storage';

// const toggle = document.querySelector('#input-toggle');

// let currentPage = 1;
// let totalPages = 1;
// const homeGallery = document.querySelector('.home-gallery');

// toggle.addEventListener('change', onCheckBox);
// function onCheckBox() {
//   if (toggle.checked) {
//     const trendingInDay = fetchPopularDay(currentPage);
//     trendingInDay.then(data => {
//       const arrMovies = data.results;
//       popularFilmsbyDay.setLocalStorage(arrMovies);
//       markupTrending(arrMovies, homeGallery);
//     });
//     //add Pagination
//   } else {
//     const trendingInDWeek = fetchPopular(currentPage);
//     trendingInDWeek.then(data => {
//       const arrMovies = data.results;
//       popularFilmsbyWeek.setLocalStorage(arrMovies);
//       markupTrending(arrMovies, homeGallery);
//     });
//     //add Pagination
//   }
// }
