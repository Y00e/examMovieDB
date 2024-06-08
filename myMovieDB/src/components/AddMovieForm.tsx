import React, { useState } from 'react';
import axios from 'axios';
import useMovieStore from '../stores/movie-store';

type AddMovieFormProps = {
  apiKey: string; 
};

function AddMovieForm({ apiKey }: AddMovieFormProps) {
  const addMovie = useMovieStore((state) => state.addMovie);
  const[title, setTitle] = useState('');
  const[poster, setPoster] = useState('');
  const[trailer_Link, setTrailer_Link] = useState('');


  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const newMovie = {title, poster, trailer_link: trailer_Link };
    console.log('Adding new movie:', newMovie);
    
    axios.post(`http://localhost:8080/api/movies?key=${apiKey}`, newMovie)
    
        .then(response => {
            addMovie(response.data.data);
            setTitle('');
            setPoster('');
            setTrailer_Link('');

        })
        .catch(error => {
        // Hantera fel här
        console.error('Error adding movie:', error);
  });
  }

  

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Title'
       
      />
      <input 
        type="text" 
        name="poster" 
        value={poster} 
        onChange={(e) => setPoster(e.target.value)}
        placeholder='Poster URL'
        
      />
      <input 
        type="text" 
        name="trailer_link" 
        value={trailer_Link}
        onChange={(e) => setTrailer_Link(e.target.value)}
        placeholder='Trailer Link' 
         
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;