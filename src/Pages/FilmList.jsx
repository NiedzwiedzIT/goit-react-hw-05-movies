import { Link } from 'react-router-dom';
import { FilmListEl, FilmItem } from './FilmList.styled';
function FilmList({ films }) {
  return (
    <FilmListEl>
      {films?.map(e => (
        <FilmItem key={e?.id}>
          <Link
            to={`movies/${e.id}`}
            id={e.id}
            cover={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
          >
            {e?.title}
          </Link>
        </FilmItem>
      ))}
    </FilmListEl>
  );
}

export default FilmList;
