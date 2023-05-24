import React from 'react';
import { Link } from 'react-router-dom';
import css from './TrendMovies.module.css'

export default function TrendMovies({ data }) {
  return (
    <div>
      <ul className={css.movieList}>
        {data.map(item => (
          <Link key={item.id} to={`movies/${item.id}`}>
            <li key={item.id}>{item.title ? item.title : item.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
