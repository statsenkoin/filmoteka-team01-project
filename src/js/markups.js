export function markupTrending(arrMovies, homeGallery) {
  console.log(arrMovies)

  const date = new Date();
  const markup = arrMovies
    .map(
      ({ id, title, genre_ids, original_title, release_date, poster_path }) => {
        const genre = getGenreById(genre_ids);
        console.log(genre);
        `<li class="movies-images__item" data-id=${id}>
            <img class="movie-image" src="https://image.tmdb.org/t/p/w500${poster_path || "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}" 
            alt="Movie ${title || original_title}" />
        <div class="box-description">
            <h2 class="box-description__title">${title || original_title}</h2>
            <p class="box-description__text">
                <span class="box-description__span">${genre}</span>${date.getFullYear(release_date)}
            </p>
        </div>
    </li>`
      }).join('');
  
  homeGallery.innerHTML = markup;
}

import { dataGenres } from './test';

const GENRE_LIMIT = 3;

export function getGenreById(genreIds, genreList = dataGenres.genres) {
  let filmGenres = [];
  console.log(genreIds)
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

export function getGenreByIdList(genre_ids) {
  return genre_ids
    .filter(genre => genre_ids.includes(genre.id))
    .map(item => item.name)
    .join(', ');
}
