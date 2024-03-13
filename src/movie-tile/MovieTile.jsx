import PropTypes from 'prop-types';
import styles from './MovieTile.module.css';
import ImageWithFallback from '../atomics/ImageWithFallback';
import fallbackImageSrc from '../fakeData/no-image-placeholder.svg'

const MovieTile = ({ title, year, genres, posterUrl, clickHandler }) => {
  return (
    <div className={styles.container} onClick={clickHandler}>
      <ImageWithFallback
        className={styles.poster}
        src={posterUrl}
        fallback={fallbackImageSrc}
        alt={title}
      />
      <div className={styles.overlay}>
        <div className={styles.info}>
          <p className={styles.year}>Released: {year}</p>
          <p className={styles.genres}>Genres: {genres}</p>
        </div>
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

MovieTile.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
  genres: PropTypes.string,
  posterUrl: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default MovieTile;