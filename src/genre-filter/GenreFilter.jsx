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
            >
            {genre}
            </button>
          </li>
        ))
      }
    </ul>
  );
};
  
export default GenreFilter;