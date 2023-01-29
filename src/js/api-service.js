import axios from "axios";  

const apiInstance = axios.create({
  URL : 'https://api.themoviedb.org/3',
})
const API_KEY = 'e55542ecb6aab3d889d16953eac82937';
const QUERY_TRENDING = '/trending/movie/week';
const QUERY_TRENDING_DAY = '/trending/movie/day';
const QUERY_GENRE = '/genre/movie/list';
const QUERY_MOVIE = '/movie';
const QUERY_MOVIE_BY_GENRE = '/discover/movie';

export async function fetchGenre() {
  try {
    apiInstance.get(`${QUERY_GENRE}?api_key=${API_KEY}`);
    return (await response).json();
  } catch (error) {
    return console.log('error :>> ', error);
  }
}

export async function fetchSingleMovie(movieId) {
  try {
    apiInstance.get(`${QUERY_MOVIE}/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return (await response).json();
  } catch (error) {
    return console.log('error :>> ', error);
  }
}

export async function fetchMoivesByGenre(genreId, page = 1) {
  try {
    apiInstance.get(`${QUERY_MOVIE_BY_GENRE}?api_key=${API_KEY}&page=${page}&with_genres=${genreId}`
    );
    return (await response).json();
  } catch (error) {
    return console.log('error :>> ', error);
  }
}

export async function fetchQuery(queryByWord, page) {
  try {
    apiInstance.get(`/search/movie?api_key=${API_KEY}&page=${page}&query=${queryByWord}`
    );
    return (await response).json();
  } catch (error) {
    return console.log('error :>> ', error);
  }
}

export async function fetchPopular(page) {
  try {
    apiInstance.get(`${QUERY_TRENDING}?api_key=${API_KEY}&page=${page}`
    );
    return (await response).json();
  } catch (error) {
    return console.log('error :>> ', error);
  }
}

export async function fetchPopularDay(page) {
  try {
    apiInstance.get(`${QUERY_TRENDING_DAY}?api_key=${API_KEY}&page=${page}`
    );
    return await response.json();
  } catch (error) {
    return console.log('error :>> ', error);
  }
}

export async function fetchTrailers(movie_id) {
  try {
    apiInstance.get(`/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`
    );
    return (await responce).json();
  } catch (error) {}
  return console.log('error :>> ', error);
}
