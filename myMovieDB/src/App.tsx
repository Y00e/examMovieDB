import { useEffect, useState } from 'react'
import axios from 'axios';
import './styles/index.css';
import useMovieStore from '../src/stores/movie-store';
import MovieType from './models/movieType';


function App() {
  const [key, setKey] = useState('');

  useEffect (() => {
    axios.get(`http://localhost:8080/api/keys`)
    .then(response => {
      console.log('API Key Response:', response.data);
      setKey(response.data.data);
    });
  }, []);

  useEffect (() => {
    if(key) {
      console.log('API Key:', key);
    axios.get(`http://localhost:8080/api/movies?key=${key}`)
    .then(response => {
      console.log('Movies Response:', response.data);
      useMovieStore.getState().setMovies(response.data);
    });
  }

  }, [key]);

    const handleAddMovie = (movie: MovieType) => {
      axios.post(`http://localhost:8080/api/movies?key=${key}`, movie)
      .then(response => {
        useMovieStore.getState().addMovie(response.data)
      });
    
    };



  return (
    <div> 
      <h1>Movie App</h1>
    </div>
  )
}

export default App;
