import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MoviesPage.module.css';
import MovieTile from '../movie-tile/MovieTile';
import useMoviePortal from '../../hooks/useMoviePortal';

const MoviesPage = ({ movies = [] }) => {
  const [modalData, setModalData] = useState(null);
  const navigate = useNavigate();
  const closeModal = useCallback(() => {
    setModalData(null);
  }, []);
  const handleClickAction = useCallback((type, data) => {
    if (!type) {
      setModalData(null);
    } else if (type === 'show') {
      navigate(`${data.id}`);
      // showDetails(data);
    } else {
      setModalData({ type, data });
    }
  }, [navigate]);

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
  showDetails: PropTypes.func,
}

export default MoviesPage;