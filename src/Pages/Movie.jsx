import { Link, Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { getSearchMovie } from 'components/utils/API';
import { DebounceInput } from 'react-debounce-input';
import { FilmListEl, FilmItem, FormEl } from './Movie.styled';

function Movie() {
  const [searchFilm, setSearchFilm] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    const search = searchParams.get('name');
    if (search === null) return;
    getSearchMovie(search).then(resp => {
      setSearchFilm(resp.results);
    });
  }, [searchParams]);

  const updateQueryString = query => {
    query.preventDefault();
    const name = query.target.value;
    const nextParams = name !== '' && { name };
    setSearchParams(nextParams);
  };
  return (
    <>
      <FormEl action="" onSubmit={event => event.preventDefault()}>
        <label htmlFor="">
          <p>Search</p>
        </label>
        <DebounceInput
          type="text"
          debounceTimeout={500}
          value={searchParams.get('name')}
          onChange={updateQueryString}
          placeholder="Search movies"
        />
      </FormEl>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      {searchFilm.length > 0 ? (
        <FilmListEl>
          {searchFilm?.map(e => (
            <FilmItem key={e?.id}>
              <Link
                to={`${e.id}`}
                id={e.id}
                cover={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
                state={{ from: location }}
              >
                {e?.title}
              </Link>
            </FilmItem>
          ))}
        </FilmListEl>
      ) : null}
    </>
  );
}

export default Movie;
