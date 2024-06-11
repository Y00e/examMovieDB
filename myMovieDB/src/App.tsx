import { useEffect, useState } from 'react'
import axios from 'axios';
import './styles/index.css';
import useMovieStore from '../src/stores/movie-store';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieDetailsPage from './pages/MovieDetailsPage';
import logo from './assets/logo.png'


function App() {
  const [apiKey, setApiKey] = useState('');
  

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
    <Router>
      <>
        <Link to="/">
        <img src={ logo } alt="Logo" />
        </Link>
        
        <Routes>
          <Route path="/movie/:imdbid" element={<MovieDetailsPage apiKey={apiKey} />} />
          <Route path="/" element={<HomePage apiKey={ apiKey }/>} />
        </Routes>
      </>
      </Router>
    
  )
}

export default App;
