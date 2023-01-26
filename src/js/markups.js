export default function createMarkup(arrMovies) {
  return (markup = arrMovies
    .map(
      ({ name, first_air_date, poster_path }) =>
        `<li class="movies-images__item">
            <img class="movie-image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="Movie ${name}" />
        <div class="box-description">
            <h2 class="box-description__title">${name}</h2>
            <p class="box-description__text">
                <span class="box-description__span">!!!!!!!!!!!!!!!!!!</span>${date.getFullYear(
                  first_air_date
                )}
            </p>
        </div>
    </li>`
    )
    .join(''));
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

export function getGenreByIdList(genreIds) {
  return genreIds
    .filter(genre => genre_ids.includes(genre.id))
    .map(item => item.name)
    .join(', ');
}
