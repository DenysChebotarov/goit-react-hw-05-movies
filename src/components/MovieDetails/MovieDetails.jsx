import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { searchMovieId } from 'components/Api/ApiMovie';
import MovieCard from 'components/MovieCard/MovieCard';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  
  useEffect(() => {
    searchMovieId(movieId).then(res => setMovie(res));
  }, [movie, movieId]);
  return (
    <>
      {movie && (
        <>
          <Link to={backLinkLocation.current}>Go Back</Link>
<MovieCard movie = {movie}/>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
