import { useEffect, useState } from 'react'
import axios from 'axios';
import './styles/index.css';
import useMovieStore from '../src/stores/movie-store';
import MovieType from './models/movieType';
import MovieList from './components/MovieList';
import HomePage from './pages/HomePage';


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
    <div> 
      <h1>Movie App</h1>
      <HomePage apiKey={ apiKey }/>
    </div>
  )
}

export default App;
