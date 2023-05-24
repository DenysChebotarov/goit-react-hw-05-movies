import React from 'react';
import css from './ReviewsCard.module.css'

export default function CastReviews({ movieReviews }) {
  return (
    <div>
      <ul className={css.reviewsList}>
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
