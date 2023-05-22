// import { useEffect } from "react";
import { useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom';
// import { searchMovie } from "components/Api/ApiMovie";

const Movies = () => {
  const [movies, setMovies] = useState([
    'movie-1',
    'movie-2',
    'movie-3',
    'movie-4',
    'movie-5',
  ]);
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';
  // useEffect(()=>{
  //   searchMovie().then(movies=>setMovies(movies));
  // }, [])
  const updateQueryString = evt => {
    if(evt.target.value === ''){
      return setSearchParams({})
    }
    setSearchParams({ movieId: evt.target.value });
  }

  const visibleMovies = movies.filter(movie => movie.includes(movieId));
  return (
    <div>
      <input
        type="text"
        value={movieId}
        onChange={updateQueryString}
      />
      <ul>
        {visibleMovies.map(movie => {
          return (
            <Link key={movie} to={`${movie}`} state={{ from: location}}>
              {movie}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
