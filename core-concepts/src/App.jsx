import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import GenreFilter from './GenreFIlter';
import Search from './Search';

const genres = [
  'Lorem',
  'ipsum',
  'dolor',
  'sit',
  'amet,',
  'consectetur',
  'adipiscing',
  'elit',
]

function App() {
  const [genre, setGenre] = useState(genres[0]);

  const onSelect = (selectedGenre) => {
    if (genres.includes(selectedGenre) && selectedGenre !== genre) {
      setGenre(selectedGenre);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1 1 0',
        gap: '1em',
      }}>
      <Counter initialCounter={42}/>
      <Search initialQuery='initial' onSearch={console.log} />
      <GenreFilter genres={genres} selectedGenre={genre} onSelect={onSelect} />
    </div>
  )
}

export default App;
