import { useEffect, useState } from "react";
import { searchCast } from "components/Api/ApiMovie";
import CastCard from "components/CastCard/CastCard";
const { useParams } = require('react-router-dom')


const Cast = ()=>{
    const {movieId} = useParams()
const [movieCast, setMovieCast] = useState(null)
useEffect(()=>{
  searchCast(movieId).then(res=>setMovieCast(res.cast))
  }, [movieId])
console.log(movieCast);
    return  <div>{movieCast && <CastCard movieCast = {movieCast}/>}</div>
}
export default Cast;