import { useEffect, useState } from 'react';
import { Suspense } from 'react';
// import { useRef } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { searchMovieId } from 'components/Api/ApiMovie';
import { useNavigate } from "react-router-dom";
import MovieCard from 'components/MovieCard/MovieCard';
import css from './MovieDetails.module.css'

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  // const location = useLocation();
  // const backLinkLocation = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  const navigate = useNavigate();
  const goBack = ()=> navigate(-1)
  
  useEffect(() => {
    searchMovieId(movieId).then(res => setMovie(res));
  }, [movieId]);
  return (
    <>
      {movie && 
        <>
          <button onClick = {goBack}>Go Back</button>
          
<MovieCard movie = {movie}/>
          <ul className={css.movieList}>
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
      }
    </>
  );
};

export default MovieDetails;
