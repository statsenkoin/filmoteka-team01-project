import { dataFilms, dataGenres } from './test';


// const TEST_FILM = {
//   adult: false,
//   backdrop_path: '/5kAGbi9MFAobQTVfK4kWPnIfnP0.jpg',
//   id: 536554,
//   title: 'MMIKI',
//   original_language: 'en',
//   original_title: 'M3GAN',
//   overview:
//     "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
//   poster_path: '/rxDPzExeovcBZY2IVWdYs87AzVE.jpg',
//   media_type: 'movie',
//   genre_ids: [878, 27, 35],
//   popularity: 6474.848,
//   release_date: '2022-12-28',
//   video: false,
//   vote_average: 7.327,
//   vote_count: 586,
// };




//keys for LocalStorage
const KEYS = {
  popular: 'popular',
  wacthed: 'wacthed',
  queue: 'queue',
  genres: 'genres',
};

/**
 * This function save data in LocalStorage
 * @param {*string} key
 * @param {*array} item
 */
function setLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
  console.log('OK!!!');
}
/**
 * This function return data from LocalStorage
 * @param {*string} key
 */
function getLocalStorage(key) {
  try {
    const responseLocalStorage = localStorage.getItem(key);
    console.log('I am get IT!');
    console.log(responseLocalStorage);
    if (responseLocalStorage) {
      return JSON.parse(responseLocalStorage);
    }
  } catch (error) {
    console.log('Error', error);
  }
}

/**
 * This function update new film to LocalStorage. If a film is in a collection, func delete it, otherwise - a film will be added to a collection
 * @param {*string} key
 * @param {*object} film
 */
function updateLocalStorage(key, film) {
  const response = getLocalStorage(key);
  const currentFilms = response.results;
  console.log('Current', currentFilms);
  if (currentFilms.find(item => item.title === film.title)) {
    console.log('I delete film from the collection!');
    const indexFilm = currentFilms.findIndex(item => item.title === film.title);
    currentFilms.splice(indexFilm, 1);
    setLocalStorage(key, response);
  } else {
    console.log('I add film to the collection!');
    currentFilms.push(film);
    setLocalStorage(key, response);
  }
}

//test
// setLocalStorage(KEYS.genres, dataGenres);
// setLocalStorage(KEYS.popular, dataFilms);
// getLocalStorage(KEYS.genres);
// getLocalStorage(KEYS.popular);
// updateLocalStorage(KEYS.popular, TEST_FILM);
// updateLocalStorage(KEYS.popular, TEST_FILM);
