import { useEffect } from "react";
import { useState } from 'react'
import { useSearchParams } from "react-router-dom";


import { searchMovie } from "components/Api/ApiMovie";
import SearchBar from "components/searchForm/searchForm";
import MovieSearch from "components/MovieSearch/MovieSearch"


const Movies = () => {
  const [movies, setMovies] = useState([]);
  // const [movieName, setMovieName] = useState('')
  

  // const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get('movie') || '';
  console.log(movies);
  useEffect(()=>{
    if(postQuery === ''){
      return;
    }
    searchMovie(postQuery).then(res=>{
      if(res.results.length === 0){
console.log('error');
      }
      setMovies(state=>[...res.results])
    });
  }, [postQuery])
  // const updateQueryString = evt => {
  //   if(evt.target.value === ''){
  //     return setSearchParams({})
  //   }
 
  // }
  const onSubmit = (query)=> {
setMovies([])
setSearchParams({ movie: query });
  }

  // const visibleMovies = movies.filter(movie => movie.includes(movieId));
  return (
    <div>
      <SearchBar onSubmit={onSubmit}/>
      {movies.length >0 && <MovieSearch data={movies}/>}
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
