import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const fetchMovies = async () => {
  try {
    const response = await axiosInstance.get(
      `/trending/movie/day?api_key=${API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.log('Failed to fetch data', error);
    return null;
  }
};

export const fetchTVs = async () => {
  try {
    const response = await axiosInstance.get(
      `/trending/tv/day?api_key=${API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.log('Failed to fetch data', error);
    return null;
  }
};

export const fetchMoviesByGenre = async (genreId: number) => {
  try {
    const response = await axiosInstance.get(
      `/discover/movie?with_genres=${genreId}&api_key=${API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.log('Failed to fetch data', error);
    return null;
  }
};

export const fetchGenres = async () => {
  try {
    const response = await axiosInstance.get(
      `/genre/movie/list?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log('Failed to fetch data', error);
    return null;
  }
};
