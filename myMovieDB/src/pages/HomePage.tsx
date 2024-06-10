import React from 'react'
import AddMovieForm from '../components/AddMovieForm';
import MovieList from '../components/MovieList';

 type homePageProps = {
    apiKey : string; 
 }

function HomePage({ apiKey } : homePageProps) {
  return (
    <div>
        <h1>Welcome to HomePage</h1>
      <AddMovieForm apiKey ={ apiKey }/>
      <MovieList apiKey={apiKey} />
    </div>
  )
}

export default HomePage; 
