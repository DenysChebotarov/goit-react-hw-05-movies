// import { useEffect } from "react";
const { useParams } = require('react-router-dom')

const Reviews = ()=>{
    const {movieId} = useParams();

    // useEffect(()=>{

  // }, [])

    return  <div>Reviews: {movieId}</div>
}
export default Reviews;