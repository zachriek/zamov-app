const baseURL = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;

export const getMovieList = async () => {
  const response = await fetch(`${baseURL}/movie/popular?api_key=${apiKey}`);
  const data = await response.json();
  return data;
};

export const getMovieDetails = async (movieId: number) => {
  const response = await fetch(`${baseURL}/movie/${movieId}?api_key=${apiKey}`);
  const data = await response.json();
  return data;
};

export const searchMovies = async (query: any) => {
  const response = await fetch(`${baseURL}/search/movie?api_key=${apiKey}&query=${query}&page=1`);
  const data = await response.json();
  return data;
};
