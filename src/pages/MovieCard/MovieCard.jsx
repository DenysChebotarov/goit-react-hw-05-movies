import React from 'react';
import css from './MovieCard.module.css'
export default function MovieCard({ movie }) {
  const popularity = Math.round(movie.vote_average * 10);
  return (
    <div>
      <ul className={css.movieList}>
        <li>
          <img
            src={`https://themoviedb.org/t/p/w342${movie.poster_path}`}
            width={250}
            height={300}
            alt=""
          />
        </li>
        <li>
          <h1>{movie.title}</h1>
          <p>{popularity}%</p>
          <p>{movie.overview}</p>
        </li>
      </ul>
    </div>
  );
}
