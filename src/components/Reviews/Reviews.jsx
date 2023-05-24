import { useEffect, useState } from 'react';
import { searchReviews } from 'components/Api/ApiMovie';
import CastReviews from 'components/ReviewsCard/ReviewsCard';
const { useParams } = require('react-router-dom');

const Reviews = () => {
  const { movieId } = useParams();

  const [movieReviews, setMovieReviews] = useState([]);
  useEffect(() => {
    searchReviews(movieId).then(res => setMovieReviews(res.results));
  }, [movieId]);
  console.log(movieReviews);
  return (
    <div>
      {movieReviews.length > 0 ? (
        <CastReviews movieReviews={movieReviews} />
      ) : (
        <h3>We dont have any reviews for this movie</h3>
      )}
    </div>
  );
};
export default Reviews;
