import { dataFilms, dataGenres } from './test';

// const TEST_FILM = {
//   adult: false,
//   backdrop_path: '/5kAGbi9MFAobQTVfK4kWPnIfnP0.jpg',
//   id: 536558,
//   title: 'IAMMY',
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
// const TEST_FILM_1 = {
//   adult: false,
//   backdrop_path: '/5kAGbi9MFAobQTVfK4kWPnIfnP0.jpg',
//   id: 53659,
//   title: 'MAMMY',
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
// const TEST_FILM_2 = {
//   adult: false,
//   backdrop_path: '/5kAGbi9MFAobQTVfK4kWPnIfnP0.jpg',
//   id: 53660,
//   title: 'FIFTY',
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
export const KEYS = {
  popular: 'popular',
  watched: 'watched',
  queue: 'queue',
  genres: 'genres',
};

/**
 * This function save data in LocalStorage
 * @param {*string} key
 * @param {*array} item
 */
export function setLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
  // console.log('OK!!!');
}
/**
 * This function return data from LocalStorage
 * @param {*string} key
 */
export function getLocalStorage(key) {
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
export function updateLocalStorage(key, film) {
  const response = getLocalStorage(key);
  if (!response.length) {
    console.log('STORAGE was empty!');

    response.push(film);
    setLocalStorage(key, response);
  } else {
    const currentFilms = response;

    if (currentFilms.find(item => item.id === film.id)) {
      console.log('I`m delete film from the collection!');

      const indexFilm = currentFilms.findIndex(item => item.title === film.title);
      currentFilms.splice(indexFilm, 1);
      setLocalStorage(key, response);
    } else {
      console.log('I`m add film to the collection!');

      currentFilms.push(film);
      setLocalStorage(key, response);
    }
  }
}

//test
// setLocalStorage(KEYS.genres, dataGenres);
// setLocalStorage(KEYS.popular, dataFilms);
// setLocalStorage(KEYS.watched, []);
// updateLocalStorage(KEYS.watched, TEST_FILM);
// updateLocalStorage(KEYS.watched, TEST_FILM_1);
// updateLocalStorage(KEYS.watched, TEST_FILM_2);
// updateLocalStorage(KEYS.watched, TEST_FILM);

//LocalStorage is implemented here through the class

export class LocalStorage {
  constructor(key, value = []) {
    this.key = key;
    this.value = value;
  }
  //This function save data in LocalStorage
  setLocalStorage(dataFilms) {
    localStorage.setItem(this.key, JSON.stringify(dataFilms));
  }

  //This function return data from LocalStorage
  getLocalStorage() {
    try {
      const responseLocalStorage = localStorage.getItem(this.key);

      if (responseLocalStorage) {
        return JSON.parse(responseLocalStorage);
      }
    } catch (error) {
      console.log('Error', error);
    }
  }

  //This function update new film to LocalStorage. If a film is in a collection, func delete it, otherwise - a film will be added to a collection
  updateLocalStorage(film) {
    const response = this.getLocalStorage(this.key);

    if (!response.length) {
      this.value.push(film);
      this.setLocalStorage(this.value);
    } else {
      const currentFilms = response;
      // console.log('Current', currentFilms);
      if (currentFilms.find(item => item.id === film.id)) {
        console.log('I`m delete film from the collection!');
        const indexFilm = currentFilms.findIndex(item => item.id === film.id);

        currentFilms.splice(indexFilm, 1);

        this.value = currentFilms;
        this.setLocalStorage(this.value);
      } else {
        console.log('I`m add film to the collection!');
        currentFilms.push(film);
        this.value = currentFilms;
        this.setLocalStorage(this.value);
      }
    }
  }
}

///tests for Class
// const popularFilms = new LocalStorage(KEYS.popular);
// const watchedFilms = new LocalStorage(KEYS.watched);
// const queueFilms = new LocalStorage(KEYS.queue);
// const genres = new LocalStorage(KEYS.genres);

//inicialization storage
// popularFilms.setLocalStorage(dataFilms);
// watchedFilms.setLocalStorage([]);
// queueFilms.setLocalStorage([]);
// genres.setLocalStorage(dataGenres);

// watchedFilms.updateLocalStorage(TEST_FILM);

// watchedFilms.updateLocalStorage(TEST_FILM_1);
// watchedFilms.updateLocalStorage(TEST_FILM_2);

// watchedFilms.updateLocalStorage(TEST_FILM_1);
// watchedFilms.updateLocalStorage(TEST_FILM_1);
// const Watched = watchedFilms.getLocalStorage();

// // watchedFilms.updateLocalStorage(TEST_FILM_1);
// console.log('Watched', Watched);
