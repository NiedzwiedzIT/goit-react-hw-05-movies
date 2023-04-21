import axios from 'axios';
const KEY = '7764495d47c469eb0f2443468cdf124c';
const BASE_URL = 'https://api.themoviedb.org/3/';
async function getPopularMovie() {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getSearchMovie(search) {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${KEY}&query=${search}&page=1`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieById(search) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${search}?api_key=${KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieCast(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieReviews(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
export {
  getPopularMovie,
  getSearchMovie,
  getMovieById,
  getMovieCast,
  getMovieReviews,
};
