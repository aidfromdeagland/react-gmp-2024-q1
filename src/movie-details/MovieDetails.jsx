import PropTypes from 'prop-types';
import styles from './MovieDetails.module.css';
import ImageWithFallback from '../atomics/ImageWithFallback';
import fallbackImageSrc from '../fakeData/no-image-placeholder.svg';

const MovieDetails = ({ movie: {
  Title,
  Year,
  Runtime,
  Plot,
  Poster,
  Rated,
} }) => {
  return (
    <div className={styles.container}>
      <div className={styles.poster}>
        <ImageWithFallback
          src={Poster}
          fallback={fallbackImageSrc}
        />
      </div>
      <div className={styles.details}>
        <h2>{Title}</h2>
        <p>Release Year: <span>{Year}</span></p>
        <p>Rating: <span>{Rated}</span></p>
        <p>Duration: <span>{Runtime}</span></p>
        <p>Description: {Plot}</p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.object,
};

export default MovieDetails;