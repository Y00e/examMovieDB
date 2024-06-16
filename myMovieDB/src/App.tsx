import { useEffect, useState } from 'react'
import axios from 'axios';
import './styles/index.css';
import useMovieStore from '../src/stores/movie-store';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import './styles/index.css';
import LoginPage from './pages/loginPage';


const isLoggedIn = () => {
  const user = sessionStorage.getItem('user');
  return user !== null;
}



function App() {
  const [apiKey, setApiKey] = useState('');
  const [loggedIn, setIsLoggedIn] = useState(isLoggedIn());



  useEffect (() => {
    axios.get(`http://localhost:8080/api/keys`)
    .then(response => {
      setApiKey(response.data.data);
    });
  }, []);
  
  
  useEffect (() => {
    if(apiKey) {
      console.log('API Key:', apiKey);
    axios.get(`http://localhost:8080/api/movies?key=${apiKey}`)
    .then(response => {
      console.log('Movies Response:', response.data.data);
      useMovieStore.getState().setMovies(response.data.data);
    });
  }

  }, [apiKey]);




  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={isLoggedIn() ? <HomePage apiKey={apiKey} /> : <Navigate to="/" replace />} />
        <Route path="/movie/:imdbid" element={isLoggedIn() ? <MovieDetailsPage apiKey={apiKey} /> : <Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
