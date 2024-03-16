import React from 'react'
import PropTypes from 'prop-types';
import styles from './MovieForm.module.css';

const inputsSchema = {
  Title: { title: 'Title', type: 'input', className: styles.movieFormInput },
  Rated: { title: 'Age rating', type: 'input', className: styles.movieFormInput },
  Year: { title: 'Release year', type: 'input', className: styles.movieFormInput },
  Genre: { title: 'Genres', type: 'input', className: styles.movieFormInput },
  Poster: { title: 'Poster URL', type: 'input', className: styles.movieFormInput },
  Runtime: { title: 'Duration', type: 'input', className: styles.movieFormInput },
  Plot: { title: 'Description', type: 'textarea', className: styles.movieFormInput },
};

const MovieForm = ({ movieData = {}, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.movieForm}>
      {Object.entries(inputsSchema)
        .map(([name, config]) => {
          return <label key={name} className={styles.movieFormLabel}>
            {name}:
            {React.createElement(config.type, {
              name,
              defaultValue: movieData[name] || '',
              className: config.className,
            })}
          </label>
        })
      };
      <button type="submit" className={styles.movieFormButton}>Submit</button>
    </form>
  );
};

MovieForm.propTypes = {
  movieInfo: PropTypes.shape({
    Title: PropTypes.string,
    Rated: PropTypes.string,
    Year: PropTypes.string,
    Genre: PropTypes.string,
    Poster: PropTypes.string,
    Runtime: PropTypes.string,
    Plot: PropTypes.string,
  }),
  onSubmit: PropTypes.func,
};

export default MovieForm;