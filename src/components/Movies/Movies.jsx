import { useEffect } from "react";
import { useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovie } from "components/Api/ApiMovie";
import SearchBar from "components/searchForm/searchForm";
import TrendMovies from "components/TrendMovies/TrendMovies";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState('')
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';
  
  useEffect(()=>{
    if(movieName === ''){
      return;
    }
    searchMovie(movieName).then(res=>{
      if(res.results.length === 0){
console.log('error');
      }
      setMovies(state=>[...res.results])
    });
  }, [movieName])
  const updateQueryString = evt => {
    if(evt.target.value === ''){
      return setSearchParams({})
    }
    setSearchParams({ movieId: evt.target.value });
  }
  const onSubmit = (query)=> {
setMovies([])
setMovieName(query)
  }

  // const visibleMovies = movies.filter(movie => movie.includes(movieId));
  return (
    <div>
      <SearchBar onSubmit={onSubmit}/>
      {movies.length >0 && <TrendMovies data={movies}/>}
      {/* <ul>
        {visibleMovies.map(movie => {
          return (
            <Link key={movie} to={`${movie}`} state={{ from: location}}>
              {movie}
            </Link>
          );
        })}
      </ul> */}
    </div>
  );
};

export default Movies;
