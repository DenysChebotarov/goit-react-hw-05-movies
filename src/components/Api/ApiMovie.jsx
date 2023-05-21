export default function ApiMovie() {
    return fetch(`https://api.themoviedb.org/3/movie/550?api_key=d01cb14d078d274ba849b0abb493e2d5`)
            .then(res => res.json())
    
  }