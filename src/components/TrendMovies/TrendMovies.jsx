import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './TrendMovies.module.css'

export default function TrendMovies({ data }) {
  const location = useLocation()
  return (
    <div>
      <ul className={css.movieList}>
        {data.map(item => (
          <Link state={{from:location}} key={item.id} to={`movies/${item.id}`}>
            <li key={item.id}>{item.title ? item.title : item.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
