import PropTypes from 'prop-types';
import styles from './MovieDetails.module.css';
import ImageWithFallback from '../../atomics/ImageWithFallback';
import fallbackImageSrc from '../../fakeData/no-image-placeholder.svg';

const MovieDetails = ({ movie: {
  title,
  release_date,
  runtime,
  overview,
  poster_path,
  vote_average,
} }) => {
  return (
    <div className={styles.container} data-testid='movie-details'>
      <div className={styles.poster}>
        <ImageWithFallback
          src={poster_path}
          fallback={fallbackImageSrc}
          alt={`${title} poster`}
        />
      </div>
      <div className={styles.details}>
        <h2>{title}</h2>
        <p>Release release_date: <span>{release_date}</span></p>
        <p>Rating: <span>{vote_average}</span></p>
        <p>Duration: <span>{runtime}</span></p>
        <p>Description: {overview}</p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.object,
};

export default MovieDetails;