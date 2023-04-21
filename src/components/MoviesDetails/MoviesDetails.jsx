import { Link, useParams, Outlet, useLocation } from 'react-router-dom';

import { useEffect, useState, Suspense } from 'react';

import { getMovieById } from 'components/utils/API';
import { Container, LinkContainer, LinkEl } from './MoviesDetails.styled';

function MoviesDetails() {
  const [film, setFilm] = useState([]);
  const { moviesId } = useParams();
  const location = useLocation();
  useEffect(() => {
    getMovieById(moviesId).then(resp => {
      setFilm(resp);
    });
  }, [moviesId]);
  const lastPage = location.state?.from ?? '/';
  console.log(location.state);
  if (film.length === 0) return null;

  return (
    <>
      <LinkEl to={lastPage} state={{ from: location }}>
        Go back
      </LinkEl>
      <Container>
        <img
          src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
          alt={film.title}
          width="300"
        />
        <div>
          <h1>
            {film.title} ({film.release_date.slice(0, 4)})
          </h1>
          <p>
            <span>User score:</span> {film.vote_average}
          </p>
          <h2>Overview</h2>
          <p>{film.overview}</p>
          <p>
            <span>Genres: </span>
            {film.genres
              .map(e => {
                return e.name;
              })
              .join(', ')}
          </p>
        </div>
      </Container>
      <LinkContainer>
        <Link to={'cast'} id={moviesId} state={{ from: lastPage }}>
          Cast
        </Link>
        <Link to={'reviews'} id={moviesId} state={{ from: lastPage }}>
          Reviews
        </Link>
      </LinkContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
export default MoviesDetails;
