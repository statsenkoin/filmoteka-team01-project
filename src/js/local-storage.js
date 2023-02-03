export const KEYS = {
  watched: 'watched',
  queue: 'queue',
  genres: 'genres',
};
export class LocalStorage {
  constructor(key, value = []) {
    this.key = key;
    this.value = value;
  }
  setLocalStorage(dataFilms = []) {
    this.value = dataFilms;
    localStorage.setItem(this.key, JSON.stringify(this.value));
  }

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

  addFilmtoStorage(film) {
    const response = this.getLocalStorage(this.key);

    response.push(film);
    this.value = response;
    this.setLocalStorage(this.value);
  }
  deleteFilmFromStorage(film) {
    const response = this.getLocalStorage(this.key);
    if (!response.length) {
      return;
    }

    if (response.find(item => item.id === film.id)) {
      const indexFilm = response.findIndex(item => item.id === film.id);
      response.splice(indexFilm, 1);

      this.value = response;
      this.setLocalStorage(this.value);
    }
  }
}

export const watchedFilms = new LocalStorage(KEYS.watched);
export const queueFilms = new LocalStorage(KEYS.queue);
export const genresFilm = new LocalStorage(KEYS.genres);

/**
 * This function save data in LocalStorage
 * @param {*string} key
 * @param {*array} item
 */
export function setLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
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

    if (currentFilms.find(item => item.title === film.title)) {
      console.log('I`m delete film from the collection!');

      const indexFilm = currentFilms.findIndex(
        item => item.title === film.title
      );
      currentFilms.splice(indexFilm, 1);
      setLocalStorage(key, response);
    } else {
      console.log('I`m add film to the collection!');

      currentFilms.push(film);
      setLocalStorage(key, response);
    }
  }
}
