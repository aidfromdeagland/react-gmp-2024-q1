import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import MovieTile from '../movie-tile/MovieTile';
import MovieDetails from '../movie-details/MovieDetails';
import ModalPortal from '../atomics/ModalPortal';
import styles from './MoviesPage.module.css';

const MoviesPage = ({ movies = {} }) => {
  const [modalMovieData, setModalMovieData] = useState(null);
  const closeModal = useCallback(() => {
    setModalMovieData(null);
  }, []);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {movies.map(movie => (
          <li key={movie.Title} className={styles.listItem}>
            <MovieTile
              title={movie.Title}
              year={movie.Year}
              genres={movie.Genre}
              posterUrl={movie.Poster}
              clickHandler={() => setModalMovieData(movie)}
            />
          </li>
        ))}
      </ul>
      {modalMovieData && createPortal(
        <ModalPortal onClose={closeModal}>
          <MovieDetails movie={modalMovieData} />
        </ModalPortal>,
        document.getElementById('modal'),
      )}
    </div>
  );
};

MoviesPage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}

export default MoviesPage;