import PropTypes from 'prop-types';
import styles from './MovieTile.module.css';
import ImageWithFallback from '../../atomics/ImageWithFallback';
import fallbackImageSrc from '../../fakeData/no-image-placeholder.svg'

const MovieTile = ({ movie = {}, clickHandler }) => {
  const handleTileClick = () => {
    clickHandler('show', movie);
  };
  const handleEditClick = (event) => {
    event.stopPropagation();
    clickHandler('edit', movie);
  };
  const handleDeleteClick = (event) => {
    event.stopPropagation();
    clickHandler('delete', movie);
  };

  return (
    <div className={styles.container} onClick={handleTileClick}>
      <ImageWithFallback
        className={styles.poster}
        src={movie.poster_path}
        fallback={fallbackImageSrc}
        alt={movie.title}
      />
      <div className={styles.overlay}>
        <div className={styles.info}>
          <p className={styles.year}>Released: {movie.release_date}</p>
          <p className={styles.genres}>Genres: {movie.genres.join(', ')}</p>
          <button type="button" onClick={handleEditClick} className={styles.button}>Edit</button>
          <button type="button" onClick={handleDeleteClick} className={`${styles.button} ${styles.delete}`}>Delete</button>
        </div>
      </div>
      <h3 className={styles.title}>{movie.title}</h3>
    </div>
  );
};

MovieTile.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    genre: PropTypes.string,
    poster_path: PropTypes.string,
  }),
  clickHandler: PropTypes.func,
};

export default MovieTile;