import { create } from 'zustand';
import MovieType from '../models/movieType';

type MovieStore = {
    movieItems: MovieType[],
    setMovies: (movies : MovieType[]) => void,
    addMovie: (movie : MovieType) => void,
    toggleFavorite: (imdbid : string) => void,
    deleteMovie: (imdbid: string) => void

}

const useMovieStore = create<MovieStore>((set) => ({
    movieItems: [],
    setMovies: (movies) => set({ movieItems: movies }),
    addMovie: (movie) =>
      set((state) => ({
        movieItems: [...state.movieItems, movie],
    })),
    toggleFavorite: (imdbid) =>
        set((state) => ({
          movieItems: state.movieItems.map((movie) =>
            movie.imdbid === imdbid ? { ...movie, is_favorite: !movie.is_favorite } : movie,
        ),
    })),
    deleteMovie: (imdbid) =>
        set((state) => ({
          movieItems: state.movieItems.filter((movie) => movie.imdbid !== imdbid),
    })),


}));



export default useMovieStore;