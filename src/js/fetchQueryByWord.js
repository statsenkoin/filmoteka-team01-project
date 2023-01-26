import { fetchQuery } from './api-service';

const searchForm = document.querySelector('.search-form');
const errorMessage = document.querySelector('.error-text');
errorMessage.style.opacity = '0';
let page = 1;

searchForm.addEventListener('submit', onSearchForm);

function onSearchForm(evt) {
  evt.preventDefault();
  searchQuery = evt.currentTarget.elements.searchQuery.value;

  resetPage();

  if (searchQuery === ' ') {
    warningMessage();
    return;
  }

  fetchQuery(searchQuery, page).then(data => {
    if (data.results.length === 0) {
      warningMessage();
      return;
    }
    // createMarkup(data.results);
  });
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

function resetPage() {
  page = 1;
}

// приклад розмітки, яка потрібна для пошуку по слову

// function createMarkup(results) {
//   const markup = results
//     .map(
//       ({ title, poster_path }) =>
//         `<li class="movies-images__item">
//           <img class="movie-image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" />
//           <div class="box-description">
//             <h2 class="box-description__title">${title}</h2>
//             <p class="box-description__text">
//               <span class="box-description__span">Drama, Action</span>2020
//             </p>
//           </div>
//         </li>`
//     )
//     .join('');
//   gallery.insertAdjacentHTML('beforeend', markup);
// }
