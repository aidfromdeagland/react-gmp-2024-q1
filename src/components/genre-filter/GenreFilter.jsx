import PropTypes from 'prop-types';
import styles from './GenreFilter.module.css';

const GenreFilter = ({ genres, selectedGenre, onSelect }) => {
  return (
    <ul className={styles.list} data-testid='genre-filter'>
      {
        genres.map((genre) => (
          <li key={genre} className={styles.listItem}>
            <button
              onClick={() => { onSelect(genre) }}
              className={selectedGenre === genre ? styles.selected : ''}
              type='button'
            >
              {genre}
            </button>
          </li>
        ))
      }
    </ul>
  );
};

GenreFilter.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  selectedGenre: PropTypes.string,
  onSelect: PropTypes.func,
};

export default GenreFilter;