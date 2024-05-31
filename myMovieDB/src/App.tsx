import { useEffect, useState } from 'react'
import axios from 'axios';
import './styles/index.css';

function App() {
  //const [count, setCount] = useState(0)

  const key = 'movieDB-hj64bh';

  useEffect (() => {
    axios.get(`http://localhost:8080/api/movies?key=${key}`)
    .then(response => {
      console.log(response.data);
    })

  });

  return (
   <div>Test</div>
  )
}

export default App
