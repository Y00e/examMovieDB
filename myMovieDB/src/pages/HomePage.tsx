import React from 'react'
import AddMovieForm from '../components/AddMovieForm';
import MovieList from '../components/MovieList';
import logo from '../assets/logo.png';
import LogoutForm from '../components/LogoutForm';
import '../styles/pageStylse/homePage.css'

 type homePageProps = {
    apiKey : string; 
 }

function HomePage({ apiKey } : homePageProps) {
  return (
    <div className="home-page">
        <img src={logo} alt="Logo" />
        <LogoutForm />
        <AddMovieForm apiKey ={ apiKey }/>
        <h1>Movie List</h1>
        <MovieList apiKey={apiKey} />
    </div>
  )
}

export default HomePage; 
