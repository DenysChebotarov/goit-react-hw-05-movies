import React from 'react';

export default function CastCard({ movieCast }) {
  return (
    <div>
      <ul>
        {movieCast.map(item => (
          <li key={item.id}>
            <img
              src={`https://themoviedb.org/t/p/w342${item.profile_path}`}
              alt=""
            />
            <p>{item.name}</p>
            <p>{item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
