import React from 'react'
import MovieType from '../models/movieType';
import useMovieStore from '../stores/movie-store';
import axios from 'axios';
import '../styles/pageStylse/movieDetailsPage.css'

type MovieDetailsProps = {
    movie: MovieType;
    apiKey: string;

}

function MovieDetails({ movie, apiKey } : MovieDetailsProps) {

    const { toggleFavorite,} = useMovieStore((state) => ({
        toggleFavorite: state.toggleFavorite,
    
    }));

    const handleToggleFavorite = () => {
        if (movie.imdbid && apiKey) {
             axios.put(`http://localhost:8080/api/movies/${movie.imdbid}?key=${apiKey}`, {
              is_favorite: !movie.is_favorite,
            });
            toggleFavorite(movie.imdbid);
        
        }
      };
    
  return (
    <article className="page-moviedetails">
      <div className=" moviedetails content-wrapper">
        <label>
          <input
            type="checkbox"
              checked={movie.is_favorite}
              onChange={handleToggleFavorite}
          />
          Mark as Favorite
        </label>
        <h2>{movie.title}</h2>
        <img src={movie.poster} alt={movie.title} />
        <iframe src={ movie.trailer_link } ></iframe>
           
      </div>
    </article>
  )
}

export default MovieDetails;
