import React from 'react'
import MovieItem from './MovieItem';
import useMovieStore from '../stores/movie-store';
import { Link } from 'react-router-dom';

type MovieListProps = {
  apiKey: string;
}

function MovieList({ apiKey }: MovieListProps) {
  const { movieItems } = useMovieStore((state) => ({
    movieItems: state.movieItems,
  })); 

  return (
    <section className="page-movielist">
      <div className="movielist content-wrapper">
        {movieItems.map((movie) => (
          
          <MovieItem key={movie.imdbid} movie={movie} apiKey={apiKey} />
          
        ))}
      </div>
    </section>
  )
}

export default MovieList;
