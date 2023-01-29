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
                <span class="box-description__span">${
                  getGenreById(genre_ids) || noGenre
                }</span>${release_date.slice(0, 4) || noYear}
            </p>
        </div>
            <img class="movie-image" src="${noImage(poster_path)}" 
            alt="Movie ${title || original_title}" />
        
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

  for (const genreId of genreIds) {
    const ganreObject = genreList.find(element => element.id === genreId);
    filmGenres.push(ganreObject.name);
  }
  return filmGenres.join(', ');
}
