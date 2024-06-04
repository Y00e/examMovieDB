import { create } from 'zustand';
import MovieType from '../models/movieType';

type MovieStore = {
    MovieItem : MovieType[],
    setMovies : (movies : MovieType[]) => void,
    addMovie : (movie : MovieType) => void

}

const useMovieStore = create <MovieStore>((set) => ({
    MovieItem : [],
    setMovies : (MovieItem) => set({MovieItem}),
    addMovie : (movie) => {
        set((state) => ({MovieItem: [...state.MovieItem, movie] }));
    }, 
 
     
}));




export default useMovieStore;