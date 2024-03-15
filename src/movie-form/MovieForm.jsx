import PropTypes from 'prop-types';
import styles from './MovieForm.module.css';

const MovieForm = ({ movieData = {}, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target))
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.movieForm}>
      <label className={styles.movieFormLabel}>
        Title:
        <input type="text" name="Title" defaultValue={movieData.Title || ''} className={styles.movieFormInput} />
      </label>
      <label className={styles.movieFormLabel}>
        Year:
        <input type="text" name="Year" defaultValue={movieData.Year || ''} className={styles.movieFormInput} />
      </label>
      <label className={styles.movieFormLabel}>
        Genre:
        <input type="text" name="Genre" defaultValue={movieData.Genre || ''} className={styles.movieFormInput} />
      </label>
      <label className={styles.movieFormLabel}>
        Runtime:
        <input type="text" name="Runtime" defaultValue={movieData.Runtime || ''} className={styles.movieFormInput} />
      </label>
      <label className={styles.movieFormLabel}>
        Plot:
        <textarea name="Plot" defaultValue={movieData.Plot || ''} className={styles.movieFormTextarea} />
      </label>
      <button type="submit" className={styles.movieFormButton}>Submit</button>
    </form>
  );
};

MovieForm.propTypes = {
  movieInfo: PropTypes.shape({
    Title: PropTypes.string,
    Year: PropTypes.string,
    Genre: PropTypes.string,
    Runtime: PropTypes.string,
    Plot: PropTypes.string,
  }),
  onSubmit: PropTypes.func,
};

export default MovieForm;