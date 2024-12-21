import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const fetchDatas = async (type: string) => {
  try {
    const response = await axiosInstance.get(
      `/trending/${type}/day?api_key=${API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.log('Failed to fetch data', error);
    return null;
  }
};

export const fetchMovies = async (status: string) => {
  try {
    const response = await axiosInstance.get(
      `/movie/${status}?api_key=${API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.log('Failed to fetch data', error);
    return null;
  }
};

export const fetchTVs = async (status: string) => {
  try {
    const response = await axiosInstance.get(
      `/tv/${status}?api_key=${API_KEY}`
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

export const fetchGenres = async (type: string) => {
  try {
    const response = await axiosInstance.get(
      `/genre/${type}/list?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log('Failed to fetch data', error);
    return null;
  }
};

export const fetchSearch = async (query: string) => {
  try {
    const response = await axiosInstance.get(
      `/search/multi?query=${query}&api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log('Failed to fetch data', error);
    return null;
  }
};

export const fetchDetail = async (type: string, id: string) => {
  try {
    const response = await axiosInstance.get(
      `/${type}/${id}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log('Failed to fetch data', error);
    return null;
  }
};

export const fetchCasts = async (type: string, id: string) => {
  try {
    const response = await axiosInstance.get(
      `/${type}/${id}/credits?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log('Failed to fetch data', error);
    return null;
  }
};

export const fetchRecommendations = async (type: string, id: string) => {
  try {
    const response = await axiosInstance.get(
      `/${type}/${id}/recommendations?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log('Failed to fetch data', error);
    return null;
  }
};
