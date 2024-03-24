import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './MoviesPage.module.css';
import MovieTile from '../movie-tile/MovieTile';
import useMoviePortal from '../../hooks/useMoviePortal';

const MoviesPage = ({ movies = [] }) => {
  const [modalData, setModalData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const closeModal = useCallback(() => {
    setModalData(null);
  }, []);
  const handleClickAction = useCallback((type, data) => {
    if (!type) {
      setModalData(null);
    } else if (type === 'show' && location.pathname !== `/${data.id}`) {
      navigate(`${data.id}${location.search}`);
    } else {
      setModalData({ type, data });
    }
  }, [location.search, location.pathname]);

  const moviePortal = useMoviePortal(modalData, closeModal);

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => {handleClickAction('add', {})}}>Add movie</button>
      <ul className={styles.list}>
        {movies.map(movie => (
          <li key={movie.id} className={styles.listItem}>
            <MovieTile
              movie={movie}
              clickHandler={handleClickAction}
            />
          </li>
        ))}
      </ul>
      {moviePortal}
    </div>
  );
};

MoviesPage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}

export default MoviesPage;