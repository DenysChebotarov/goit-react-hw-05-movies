import React from 'react';
import { Link } from 'react-router-dom';


export default function MovieSearch({ data }) {
  return (
    <div>
      <ul>
        {data.map(item => (
          <Link key={item.id} to={`${item.id}`}>
            <li key={item.id}>{item.title ? item.title : item.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
