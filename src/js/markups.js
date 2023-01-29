export function markupTrending(arrMovies, homeGallery) {
  console.log('markupTrending-arrMovies :>> ', arrMovies);
  const noGenre = 'There are no genres';
  const noYear = 'No year';
  const markup = arrMovies
    .map(
      ({ id, title, genre_ids, original_title, release_date, poster_path }) =>
        `<li class="movies-images__item" data-id=${id}>
            <img class="movie-image" src="${noImage(poster_path)}" 
            alt="Movie ${title || original_title}" />
        <div class="box-description">
            <div class="title_wrraper"><h2 class="box-description__title">${
              title || original_title
            }</h2></div>
            <p class="box-description__text">
                <span class="box-description__span">${getGenreById(genre_ids) || noGenre}</span>${
          release_date.slice(0, 4) || noYear
        }
            </p>
        </div>
    </li>`
    )
    .join('');

  homeGallery.innerHTML = markup;
}

function noImage(image) {
  let url = `https://image.tmdb.org/t/p/w500${image}`;
  if (image === null) {
    url = 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg';
  }
  return url;
}

import { dataGenres } from './test';

const GENRE_LIMIT = 3;

export function getGenreById(genreIds, genreList = dataGenres.genres) {
  let filmGenres = [];

  for (const genreId of genreIds) {
    const ganreObject = genreList.find(element => element.id === genreId);
    filmGenres.push(ganreObject.name);
  }
  if (filmGenres.length > GENRE_LIMIT) {
    filmGenres = filmGenres.slice(0, 2);
    filmGenres.push('Other');
  }
  return filmGenres.join(', ');
}

// export function getGenreByIdList(genreIds) {
//   console.log(genreIds);
//   return genreIds
//     .filter(genre => genreIds.includes(genre.id))
//     .map(item => item.name)
//     .join(', ');
// }

export function getGenreByIdList(genreIds, genreList = dataGenres.genres) {
  let filmGenres = [];

  if (genreIds.length === 0) {
    filmGenres.push('There are no genres');
    return filmGenres;
  } else {
    for (const genreId of genreIds) {
      const ganreObject = genreList.find(element => element.id === genreId);
      filmGenres.push(ganreObject.name);
    }
    return filmGenres.join(', ');
  }
}

export const modalWindow = document.querySelector('.modal-film-info');

export function createMarkupModalWindow(data, filmGenres) {
  const {
    id,
    title,
    poster_path,
    vote_average,
    vote_count,
    popularity,
    original_title,
    overview,
  } = data;

  const modalWindow = document.querySelector('.modal-film-info');

  const markup = `<div class="poster-block">
        <img class="poster" src="${noImage(poster_path)}" alt="${title}" />
           <button type="button" data-modal-id=${id}  class="youtube__btn js__youtube__btn">
        <span class="background-image"></span>
           <i class="fa fa-youtube-play" aria-hidden="true"></i>
           </button>
      </div>
      <div class="film-information" id='${id}'>
        <h2 class="film-information-title">${title}</h2>
        <table class="rating-table">
          <tr>
            <td class="table-subtitle">Vote / Votes</td>
            <td class="table-inf"><span class="rating">${vote_average.toFixed(
              1
            )}</span> / ${vote_count}</td>
          </tr>
          <tr>
            <td class="table-subtitle">Popularity</td>
            <td class="table-inf">${popularity.toFixed(1)}</td>
          </tr>
          <tr>
            <td class="table-subtitle">Original Title</td>
            <td class="table-inf">${original_title}</td>
          </tr>
          <tr>
            <td class="table-subtitle">Genre</td>
            <td class="table-inf">${filmGenres}</td>
          </tr>
        </table>
        <p class="about">About</p>
        <p class="about-film">
          ${overview}
        </p>
        <div class="buttons-add">
          <button type="button" class="btn-add js-add-to-watched">add to Watched</button>
          <button type="button" class="btn-add js-add-to-queue">add to queue</button>
        </div>
      </div>`;

  modalWindow.innerHTML = markup;
}

export function createMarkupModalWindowMyLibrary(data, filmGenres) {
  const {
    id,
    title,
    poster_path,
    vote_average,
    vote_count,
    popularity,
    original_title,
    overview,
  } = data;

  const modalWindow = document.querySelector('.modal-film-info');

  const markup = `<div class="poster-block">
        <img class="poster" src="${noImage(poster_path)}" alt="${title}" />
           <button type="button" data-modal-id=${id}  class="youtube__btn js__youtube__btn">
        <span class="background-image"></span>
           <i class="fa fa-youtube-play" aria-hidden="true"></i>
           </button>
      </div>
      <div class="film-information" id='${id}'>
        <h2 class="film-information-title">${title}</h2>
        <table class="rating-table">
          <tr>
            <td class="table-subtitle">Vote / Votes</td>
            <td class="table-inf"><span class="rating">${vote_average.toFixed(
              1
            )}</span> / ${vote_count}</td>
          </tr>
          <tr>
            <td class="table-subtitle">Popularity</td>
            <td class="table-inf">${popularity.toFixed(1)}</td>
          </tr>
          <tr>
            <td class="table-subtitle">Original Title</td>
            <td class="table-inf">${original_title}</td>
          </tr>
          <tr>
            <td class="table-subtitle">Genre</td>
            <td class="table-inf">${filmGenres}</td>
          </tr>
        </table>
        <p class="about">About</p>
        <p class="about-film">
          ${overview}
        </p>
        <div class="buttons-add">
          <button type="button" class="btn-add js-add-to-watched">delete to Watched</button>
          <button type="button" class="btn-add js-add-to-queue">delete to queue</button>
        </div>
      </div>`;

  modalWindow.innerHTML = markup;
}
