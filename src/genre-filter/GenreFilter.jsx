import PropTypes from 'prop-types';
import './GenreFilter.css';

const GenreFilter = ({ genres, selectedGenre, onSelect }) => {
  return (
    <ul className="genre-list">
      {
        genres.map((genre) => (
          <li key={genre} className="genre-item">
            <button
              onClick={() => {onSelect(genre)}}
              className={selectedGenre === genre ? 'selected' : ''}
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