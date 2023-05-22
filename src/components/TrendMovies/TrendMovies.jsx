import React from 'react';

export default function TrendMovies({data}) {
  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title ? item.title : item.name}</li>
        ))}
      </ul>
    </div>
  );
}
