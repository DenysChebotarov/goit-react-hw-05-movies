// import { useEffect } from "react";
import { Suspense } from "react";
import { useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  
  const location = useLocation()
  const backLinkLocation = useRef(location.state?.from ?? '/movies')
  const { movieId } = useParams();
  // useEffect(()=>{

  // }, [])

  return (
    <>
      <h1>MovieDetails: {movieId}</h1>
      <Link to={backLinkLocation.current}>Go Back</Link>
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
  );
};

export default MovieDetails;
