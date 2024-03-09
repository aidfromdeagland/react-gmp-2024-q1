import { useState } from 'react';
import styles from './App.module.css';
import Counter from './counter/Counter';
import GenreFilter from './genre-filter/GenreFilter';
import Search from './search/Search';
import MoviesPage from './movies-page/MoviesPage';

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
    <>
      <div className={styles.container}>
        <Counter initialCounter={42} />
        <Search initialQuery='initial' onSearch={console.log} />
        <GenreFilter genres={genres} selectedGenre={genre} onSelect={onSelect} />
        <MoviesPage />
      </div>
      <div id='modal' />
    </>

  )
}

export default App;
