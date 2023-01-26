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
