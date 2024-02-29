const GenreFilter = ({ genres, selectedGenre, onSelect }) => {
  return (
    <ul
      style={{
        listStyle: 'none',
        padding: '0',
      }}>
      {
        genres.map((genre) => (
          <li
            key={genre}
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: '1 1 0'
            }}>
            <button
              onClick={() => {onSelect(genre)}}
              style={{
                backgroundColor: selectedGenre === genre ? 'gray' : 'white',
                color: selectedGenre === genre ? 'white' : 'gray',
              }}>
              {genre}
            </button>
          </li>
        ))
      }
    </ul>
  );
};
  
export default GenreFilter;