import React from 'react';
import { Link, useLocation } from 'react-router-dom';


export default function MovieSearch({ data }) {
  const location = useLocation()
  return (
    <div>
      <ul>
        {data.map(item => (
          <Link state={{from:location}} key={item.id} to={`${item.id}`}>
            <li key={item.id}>{item.title ? item.title : item.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
