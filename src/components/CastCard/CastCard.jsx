import React from 'react';
import css from './CastCard.module.css'

export default function CastCard({ movieCast }) {
  return (
    <div>
      <ul className={css.castList}>
        {movieCast.map(item => (
          <li key={item.id}>
            <img
              src={`https://themoviedb.org/t/p/w342${item.profile_path}`}
              alt=""
              width={250}
              height={300}
            />
            <p>{item.name}</p>
            <p>{item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
