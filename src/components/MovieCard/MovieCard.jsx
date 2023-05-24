import React from 'react'

export default function MovieCard({movie}) {
  return (
    <div>
<img src={`https://themoviedb.org/t/p/w342${movie.poster_path}`} width={250} height={300} alt="" />
<h1>{movie.title}</h1>
<p>{movie.popularity}</p>
<p>{movie.overview}</p>
    </div>
  )
}
