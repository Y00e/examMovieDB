import { useEffect, useState } from 'react'
import axios from 'axios';
import './styles/index.css';

function App() {
  const [key, setKey] = useState('');
  const [movies, setMovies] = useState([]);

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
      setMovies(response.data);
    });
  }

  }, [key]);

  return (
    <div> 
      <h1>Movie App</h1>
    </div>
  )
}

export default App;
