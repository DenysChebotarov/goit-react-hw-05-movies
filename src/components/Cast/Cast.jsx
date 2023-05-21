// import { useEffect } from "react";
const { useParams } = require('react-router-dom')

export const Cast = ()=>{
    const {movieId} = useParams()

// useEffect(()=>{

  // }, [])

    return  <div>Cast: {movieId}</div>
}