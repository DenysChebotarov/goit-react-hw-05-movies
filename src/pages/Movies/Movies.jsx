import { useEffect } from "react";
import { useState } from 'react'
import { useSearchParams } from "react-router-dom";


import { searchMovie } from "components/Api/ApiMovie";
import SearchBar from "components/searchForm/searchForm";
import MovieSearch from "components/MovieSearch/MovieSearch"


const Movies = () => {
  const [movies, setMovies] = useState([]);
 
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get('movie') || '';
 
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
  
  const onSubmit = (query)=> {
setMovies([])
setSearchParams({ movie: query });
  }

  
  return (
    <div>
      <SearchBar onSubmit={onSubmit}/>
      {movies.length >0 && <MovieSearch data={movies}/>}
     
    </div>
  );
};

export default Movies;
