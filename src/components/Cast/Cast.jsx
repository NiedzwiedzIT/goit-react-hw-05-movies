import { getMovieCast } from 'components/utils/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    getMovieCast(moviesId).then(resp => {
      setCast(resp);
    });
  }, [moviesId]);
  if (cast.length === 0) return;
  return (
    <CastList>
      {cast.slice(0, 8).map(e => {
        return (
          <li key={e.id}>
            <img
              src={
                e.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${e.profile_path}`
                  : `https://m.media-amazon.com/images/S/sash/9FayPGLPcrscMjU.png`
              }
              alt={e.name}
              height={200}
              width={150}
            />
            <p>{e.name}</p>
            <p>{e.character}</p>
          </li>
        );
      })}
    </CastList>
  );
};

export default Cast;
