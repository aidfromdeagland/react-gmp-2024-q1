import PropTypes from 'prop-types';
import styles from './MovieTile.module.css';
import ImageWithFallback from '../atomics/ImageWithFallback';
import fallbackImageSrc from '../fakeData/no-image-placeholder.svg'

const MovieTile = ({ movie = {}, clickHandler }) => {
  const handleTileClick = () => {
    clickHandler('show', movie);
  };
  const handleEditClick = (event) => {
    event.stopPropagation();
    clickHandler('edit', movie);
  };

  return (
    <div className={styles.container} onClick={handleTileClick}>
      <ImageWithFallback
        className={styles.poster}
        src={movie.Poster}
        fallback={fallbackImageSrc}
        alt={movie.Title}
      />
      <div className={styles.overlay}>
        <div className={styles.info}>
          <p className={styles.year}>Released: {movie.Year}</p>
          <p className={styles.genres}>Genres: {movie.Genre}</p>
          <button type="button" onClick={handleEditClick}>Edit</button>
        </div>
      </div>
      <h3 className={styles.title}>{movie.title}</h3>
    </div>
  );
};

MovieTile.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    Year: PropTypes.string,
    genre: PropTypes.string,
    Poster: PropTypes.string,
  }),
  clickHandler: PropTypes.func,
};

export default MovieTile;