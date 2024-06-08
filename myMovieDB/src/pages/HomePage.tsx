import React from 'react'
import AddMovieForm from '../components/AddMovieForm';

 type homePageProps = {
    apiKey : string; 
 }

function HomePage({ apiKey } : homePageProps) {
  return (
    <div>
      <AddMovieForm apiKey ={ apiKey }/>
    </div>
  )
}

export default HomePage; 
