import React from 'react'
import PropTypes from 'prop-types';
import styles from './MovieForm.module.css';

const inputsSchema = {
  title: { title: 'title', type: 'input', className: styles.input },
  vote_average: { title: 'Age rating', type: 'input', className: styles.input },
  release_date: { title: 'Release year', type: 'input', className: styles.input },
  genres: { title: 'Genres', type: 'input', className: styles.input },
  poster_path: { title: 'poster_path URL', type: 'input', className: styles.input },
  runtime: { title: 'Duration', type: 'input', className: styles.input },
  overview: { title: 'Description', type: 'textarea', className: styles.input },
};

const MovieForm = ({ movieData = {}, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));

    onSubmit({
      ...formData,
      genres: formData.genres || [],
      runtime: formData.runtime || 0,
      vote_average: formData.vote_average || 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {Object.entries(inputsSchema)
        .map(([name, config]) => {
          return <label key={name} className={styles.label}>
            {config.title}:
            {React.createElement(config.type, {
              name,
              defaultValue: movieData[name] || '',
              className: config.className,
            })}
          </label>
        })
      }
      <button type="submit" className={styles.button}>Submit</button>
    </form>
  );
};

MovieForm.propTypes = {
  movieData: PropTypes.shape({
    title: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    poster_path: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
  }),
  onSubmit: PropTypes.func,
};

export default MovieForm;