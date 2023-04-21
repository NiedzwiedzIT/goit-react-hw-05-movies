import { getPopularMovie } from './utils/API';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import NotFound from '../Pages/NotFound';

export const App = () => {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getPopularMovie().then(resp => {
      setFilms(resp.results);
    });
  }, []);

  const Layout = lazy(() => import('components/Layout/Layout'));
  const Home = lazy(() => import('Pages/FilmList'));
  const Movie = lazy(() => import('Pages/Movie'));
  const MoviesDetails = lazy(() =>
    import('components/MoviesDetails/MoviesDetails')
  );
  const Cast = lazy(() => import('components/Cast/Cast'));
  const Reviews = lazy(() => import('components/Reviews/Reviews'));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home films={films} />} />
          <Route
            path="movies"
            element={<Movie search={search} setSearch={setSearch} />}
          />
          <Route path="movies/:moviesId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
