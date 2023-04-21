import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'components/utils/API';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();
  useEffect(() => {
    getMovieReviews(moviesId).then(resp => {
      setReviews(resp);
    });
  }, [moviesId]);
  if (reviews.length === 0)
    return <p>We don't have any reviews for this movie.</p>;
  return (
    <ul>
      {reviews.map(e => {
        return (
          <li key={e.id}>
            <p>Author: {e.author}</p>
            <p>{e.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
