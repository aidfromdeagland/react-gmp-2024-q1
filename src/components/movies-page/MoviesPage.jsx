import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import styles from './MoviesPage.module.css';
import MovieTile from '../movie-tile/MovieTile';
import useMoviePortal from '../../hooks/useMoviePortal';

const MoviesPage = ({ movies = [], applyAction }) => {
  const [modalData, setModalData] = useState(null);
  const closeModal = useCallback(() => {
    setModalData(null);
  }, []);
  const showModal = useCallback((type, data) => {
    setModalData(type ? { type, data } : null);
  }, []);

  const moviePortal = useMoviePortal(modalData, closeModal, applyAction);

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => {showModal('add', {})}}>Add movie</button>
      <ul className={styles.list}>
        {movies.map(movie => (
          <li key={movie.id} className={styles.listItem}>
            <MovieTile
              movie={movie}
              clickHandler={showModal}
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
  applyAction: PropTypes.func,
}

export default MoviesPage;