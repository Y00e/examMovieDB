import React from 'react'
import AddMovieForm from '../components/AddMovieForm';
import MovieList from '../components/MovieList';
import logo from '../assets/logo.png';
import LogoutForm from '../components/LogoutForm';

 type homePageProps = {
    apiKey : string; 
 }

function HomePage({ apiKey } : homePageProps) {
  return (
    <div>
       <img src={logo} alt="Logo" />
       <LogoutForm />
        <h1>Welcome to HomePage</h1>
      <AddMovieForm apiKey ={ apiKey }/>
      <MovieList apiKey={apiKey} />
    </div>
  )
}

export default HomePage; 
