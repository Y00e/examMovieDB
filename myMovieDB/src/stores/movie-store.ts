import { create } from 'zustand';
import axios from 'axios';
import MovieType from '../models/movieType';

type MovieStore = {
  movies: MovieType[];
  fetchMovies: () => void;
  addMovie: (movie: MovieType) => void;
  toggleFavorite: (imbid: string) => void;
  deleteMovie: (imbid: string) => void;
};

const apiKey = 'movieDB-hj64bh';

const useMovieStore = create<MovieStore>((set) => ({
  movies: [],
  
  fetchMovies: () => {
    axios.get(`http://localhost:8000/api/movies?key=${apiKey}`)
      .then(response => {
        set({ movies: response.data });
      });
  },

  addMovie: (movie) => {
    axios.post(`http://localhost:8000/api/movies?key=${apiKey}`, movie)
      .then(response => {
        set((state) => ({
          movies: [...state.movies, response.data]
        }));
      });
  },

  toggleFavorite: (imbid) => {
    axios.put(`http://localhost:8000/api/movies/${imbid}?key=${apiKey}`)
      .then(response => {
        set((state) => ({
          movies: state.movies.map((movie) =>
            movie.imbid === imbid ? { ...movie, is_favorite: !movie.is_favorite } : movie
          )
        }));
      });
  },

  deleteMovie: (imbid) => {
    axios.delete(`http://localhost:8000/api/movies/${imbid}?key=${apiKey}`)
      .then(response => {
        set((state) => ({
          movies: state.movies.filter((movie) => movie.imbid !== imbid)
        }));
      });
  },
}));

export default useMovieStore;