import React from 'react'
import MovieType from '../models/movieType';
import useMovieStore from '../stores/movie-store';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/componentStylse/movieItem.css'


type MovieProps = {
    movie : MovieType;
    apiKey: string;
}; 

function MovieItem({ movie, apiKey }: MovieProps ) {

  const { toggleFavorite, deleteMovie } = useMovieStore((state) => ({
    toggleFavorite: state.toggleFavorite,
    deleteMovie: state.deleteMovie,

  }));

  const handleToggleFavorite = async () => {
    if (movie.imdbid && apiKey) {
        await axios.put(`http://localhost:8080/api/movies/${movie.imdbid}?key=${apiKey}`, {
          is_favorite: !movie.is_favorite,
        });
        toggleFavorite(movie.imdbid);
    
    }
  };


    
  const handleDeleteMovie = async () => {
    if (movie.imdbid && apiKey) {
        await axios.delete(`http://localhost:8080/api/movies/${movie.imdbid}?key=${apiKey}`);
        deleteMovie(movie.imdbid);
        
    }
  };

  return (
    <article className="movie">
      <h2 className="movie-title">{ movie.title }</h2>
      <Link to={`/movie/${movie.imdbid}`}>
      <img className='movie-poster' src={movie.poster} />
      </Link>
      <div className="movie-actions">
      <label className="favorite">
          <input
            type="checkbox"
            checked={movie.is_favorite}
            onChange={handleToggleFavorite}
          />
            Mark as Favorite
        </label>
        <button onClick= {handleDeleteMovie}>Delete</button>
      </div>
    </article>
  )
}



export default MovieItem;
