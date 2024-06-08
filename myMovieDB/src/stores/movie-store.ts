import { create } from 'zustand';
import MovieType from '../models/movieType';

type MovieStore = {
    movieItems: MovieType[],
    setMovies: (movies : MovieType[]) => void,
    addMovie: (movie : MovieType) => void,
    toggleFavorite: (imbid : string) => void,
    deleteMovie: (imbid: string) => void

}

const useMovieStore = create<MovieStore>((set) => ({
    movieItems: [],
    setMovies: (movies) => set({ movieItems: movies }),
    addMovie: (movie) =>
      set((state) => ({
        movieItems: [...state.movieItems, movie],
    })),
    toggleFavorite: (imbid) =>
        set((state) => ({
          movieItems: state.movieItems.map((movie) =>
            movie.imbid === imbid ? { ...movie, is_favorite: !movie.is_favorite } : movie,
        ),
    })),
    deleteMovie: (imbid) =>
        set((state) => ({
          movieItems: state.movieItems.filter((movie) => movie.imbid !== imbid),
    })),


}));



export default useMovieStore;