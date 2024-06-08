import React from 'react'
import MovieType from '../models/movieType';
import useMovieStore from '../stores/movie-store';

type MovieProps = {
    movie : MovieType;
    apiKey: string;
}; 

function MovieItem({ movie, apiKey }: MovieProps ) {

  const { toggleFavorite, deleteMovie } = useMovieStore((state) => ({
    toggleFavorite: state.toggleFavorite,
    deleteMovie: state.deleteMovie,

  }));

  return (
    <article className="movie">
      <h2 className="movie-title">{ movie.title }</h2>
      <img className='movie-poster' src={movie.poster} />
      <a className='movie-trailer-link' href={ movie.trailer_link }></a>
      <div className="movie-actions">
        <input 
          type="checkbox"
          checked={movie.is_favorite}
          onChange={() => movie.imbid && toggleFavorite(movie.imbid)}
         />
        <button onClick= {() => movie.imbid && deleteMovie(movie.imbid)}>Delete</button>
      </div>
    </article>
  )
}


export default MovieItem;
