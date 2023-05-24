import React from 'react';

export default function CastReviews({ movieReviews }) {
  return (
    <div>
      <ul>
        {movieReviews.map(item => (
          <li key={item.author}>
            <p>{item.author}</p>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
