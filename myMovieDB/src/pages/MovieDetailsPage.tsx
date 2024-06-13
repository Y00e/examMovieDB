import MovieDetails from '../components/MovieDetails';
import useMovieStore from '../stores/movie-store';
import { Link, useParams } from 'react-router-dom';
import logo from '../assets/logo.png';

type MovieDetailsProps = {
    apiKey: string;
}

function MovieDetailsPage({ apiKey } : MovieDetailsProps) {

    const { imdbid } = useParams<{imdbid: string}>();
    const { movieItems } = useMovieStore((state) => ({
        movieItems: state.movieItems,
    }));

    const selectedmovie = movieItems.find((m) => m.imdbid === imdbid);


  return (
    <div>
      <Link to="/home">
        <img src={ logo } alt="Logo" />
      </Link>
      {selectedmovie && <MovieDetails movie={selectedmovie} apiKey={apiKey} />}
      
    </div>
  )
}

export default MovieDetailsPage;
