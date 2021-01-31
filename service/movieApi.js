import axios from 'axios';

export const getPopularMovieList = async () => {
  return await axios.get(
    'https://api.themoviedb.org/3/movie/popular?api_key=80e1e0cc028987e0d21cf6e36ce54037&language=en-US&page=1',
  );
};

export const getCreditsFromMovie = async (movieId) => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=80e1e0cc028987e0d21cf6e36ce54037&language=en-US`,
  );
};
