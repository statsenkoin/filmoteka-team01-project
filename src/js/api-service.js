const API_KEY = 'e55542ecb6aab3d889d16953eac82937';
const URL = 'https://api.themoviedb.org/3';
const QUERY_TRENDING = '/trending/movie/week';
const QUERY_GENRE = '/genre/movie/list';

async function fetchGenre() {
  try {
    const responce = fetch(`${URL}${QUERY_GENRE}?api_key=${API_KEY}`);
    return (await responce).json();
  } catch (error) {
    return console.log('error :>> ', error);
  }
}

async function fetchQuery(queryByWord, page) {
  try {
    const responce = fetch(
      `${URL}${queryByWord}?api_key=${API_KEY}&page=${page}`
    );
    return (await responce).json();
  } catch (error) {
    console.log(error);
  }
}
