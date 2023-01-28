const API_KEY = 'e55542ecb6aab3d889d16953eac82937';
const URL = 'https://api.themoviedb.org/3';
const QUERY_TRENDING = '/trending/movie/week';
const QUERY_TRENDING_DAY = '/trending/movie/day';
const QUERY_GENRE = '/genre/movie/list';
const QUERY_MOVIE = '/movie';
const QUERY_MOVIE_BY_GENRE = '/discover/movie';
export async function fetchGenre() {
  try {
    const response = fetch(`${URL}${QUERY_GENRE}?api_key=${API_KEY}`);
    return (await response).json();
  } catch (error) {
    return console.log('error :>> ', error);
  }
}

export async function fetchSingleMovie(movieId) {
  try {
    const response = fetch(
      `${URL}${QUERY_MOVIE}/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return (await response).json();
  } catch (error) {
    return console.log('error :>> ', error);
  }
}

export async function fetchMoivesByGenre(genreId, page = 1) {
  try {
    const response = fetch(
      `${URL}${QUERY_MOVIE_BY_GENRE}?api_key=${API_KEY}&page=${page}&with_genres=${genreId}`
    );
    return (await response).json();
  } catch (error) {
    return console.log('error :>> ', error);
  }
}

export async function fetchQuery(queryByWord, page) {
  try {
    const response = fetch(
      `${URL}/search/movie?api_key=${API_KEY}&page=${page}&query=${queryByWord}`
    );
    return (await response).json();
  } catch (error) {
    return console.log('error :>> ', error);
  }
}

export async function fetchPopular(page) {
  try {
    const responce = fetch(
      `${URL}${QUERY_TRENDING}?api_key=${API_KEY}&page=${page}`
    );

    return (await response).json();
  } catch (error) {
    return console.log('error :>> ', error);
  }
}
// //for DAY
export async function fetchPopularDay(page) {
  try {
    const response = await fetch(
      `${URL}${QUERY_TRENDING_DAY}?api_key=${API_KEY}&page=${page}`
    );
    return await response.json();

  } catch (error) {
    return console.log('error :>> ', error);
  }
}

export async function fetchTrailers(movie_id) {
  try {
    const responce = fetch(
      `${URL}/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`
    );
    return (await responce).json();
  } catch (error) {}
  return console.log('error :>> ', error);
}
