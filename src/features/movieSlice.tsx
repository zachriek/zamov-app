import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

const initialState: any = {
  movies: [],
  movie: [],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getMovies: (state, action) => {
      state.movies = action.payload;
    },
    getMovie: (state, action) => {
      state.movie = action.payload;
    },
  },
});

export const selectMovies = (state: RootState) => state.movies.movies;
export const selectMovie = (state: RootState) => state.movies.movie;

export const { getMovies, getMovie } = movieSlice.actions;
export default movieSlice.reducer;
