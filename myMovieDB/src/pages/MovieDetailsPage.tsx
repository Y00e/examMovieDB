import MovieDetails from '../components/MovieDetails';
import useMovieStore from '../stores/movie-store';
import { useParams } from 'react-router-dom';

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
        {selectedmovie && <MovieDetails movie={selectedmovie} apiKey={apiKey} />}
      
    </div>
  )
}

export default MovieDetailsPage;
