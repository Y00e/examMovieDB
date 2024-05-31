import React from 'react'
import useMovieStore from '../stores/movie-store';
import MovieType from '../models/movieType';

type MovieItemProps = {
    movie: MovieType;
};

function MovieItem({ movie }: MovieItemProps) {
    const toggleFavorite = useMovieStore((state) => state.toggleFavorite);
    const deleteMovie = useMovieStore((state) => state.deleteMovie);
    

  
    return (
    <div className='movie-item'>
        <h2>{ movie.title }</h2>
        
      
    </div>
  )
}

export default MovieItem;
