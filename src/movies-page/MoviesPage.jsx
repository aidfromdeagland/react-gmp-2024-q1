import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import MovieTile from '../movie-tile/MovieTile';
import useMoviePortal from '../hooks/useMoviePortal';
import styles from './MoviesPage.module.css';

const MoviesPage = ({ movies = [] }) => {
  const [modalData, setModalData] = useState();
  const closeModal = useCallback(() => {
    setModalData(null);
  }, []);
  const showModal = useCallback((type, data) => {
    setModalData(type ? { type, data } : null );
  }, []);

  const moviePortal = useMoviePortal(modalData, closeModal, closeModal);

  return (
    <div className={styles.container}>
      <button onClick={() => {showModal('add', {})}}>Add movie</button>
      <ul className={styles.list}>
        {movies.map(movie => (
          <li key={movie.Title} className={styles.listItem}>
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
}

export default MoviesPage;