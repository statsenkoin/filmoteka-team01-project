const API_KEY = 'e55542ecb6aab3d889d16953eac82937';
const URL = 'https://api.themoviedb.org/3';
const QUERY_TRENDING = '/trending/movie/week';
const QUERY_GENRE = '/genre/movie/list';
const QUERY_MOVIE = '/movie';

async function fetchGenre() {
  try {
    const responce = fetch(`${URL}${QUERY_GENRE}?api_key=${API_KEY}`);
    return (await responce).json();
  } catch (error) {
    return console.log('error :>> ', error);
  }
}

export async function fetchSingleMovie(movieId) {
  try {
    const responce = fetch(
      `${URL}${QUERY_MOVIE}/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return (await responce).json();
  } catch (error) {
    return console.log('error :>> ', error);
  }
}

async function fetchQuery(queryByWord, page) {
  try {
    const responce = fetch(
      `${URL}/search/movie?api_key=${API_KEY}&page=${page}&query=${queryByWord}`
    );
    return (await responce).json();
  } catch (error) {
    return console.log('error :>> ', error);
  }
}
