const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = 'd01cb14d078d274ba849b0abb493e2d5'
// async function ApiMovie(url = '', config = {}, key = '') {
//     const response = await fetch(url,config,key);
//     return response.ok ? await response.json() : Promise.reject(new Error('not found'))
// }

// export function movieTrends() {
//     return ApiMovie(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
// }

export async function trendsMovie() {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDFjYjE0ZDA3OGQyNzRiYTg0OWIwYWJiNDkzZTJkNSIsInN1YiI6IjY0NmExYzAwMzNhMzc2MDExZWM0NDJlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a9YOBIa9NeyE2BW4snt3drWEbpKOMZG2b7EkSguIrHQ'
        }
      };
      
      return await fetch(`${BASE_URL}/trending/all/day?language=en-US`, options)
        .then(response => response.json())
        .catch(err => console.error(err));
}

export async function searchMovie(query){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDFjYjE0ZDA3OGQyNzRiYTg0OWIwYWJiNDkzZTJkNSIsInN1YiI6IjY0NmExYzAwMzNhMzc2MDExZWM0NDJlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a9YOBIa9NeyE2BW4snt3drWEbpKOMZG2b7EkSguIrHQ'
    }
  };
  
  return await  fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
    .then(response => response.json())
    
    .catch(err => console.error(err));
}

export async function searchMovieId(movieId){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDFjYjE0ZDA3OGQyNzRiYTg0OWIwYWJiNDkzZTJkNSIsInN1YiI6IjY0NmExYzAwMzNhMzc2MDExZWM0NDJlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a9YOBIa9NeyE2BW4snt3drWEbpKOMZG2b7EkSguIrHQ'
    }
  };
  
  return await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
    .then(response => response.json())
    // .catch(err => console.error(err));
}