import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './App.module.css';
import Counter from './counter/Counter';
import GenreFilter from './genre-filter/GenreFilter';
import Search from './search/Search';
import SortControl from './sort/SortControl';
import MoviesPage from './movies-page/MoviesPage';
import Dialog from './dialog/Dialog';
import MovieForm from './movie-form/MovieForm';
import moviesData from './fakeData/films.json';

const SortMap = new Map([
  ['releaseDate', ((a, b) => a.Year > b.Year ? 1 : -1)],
  ['title', ((a, b) => a.Title > b.Title ? 1 : -1)],
]);

const genres = Array.from(new Set(moviesData.map(film => film.Genre).join(', ').split(', ')));

function App() {
  const [genre, setGenre] = useState(genres[0]);
  const [sorting, setSorting] = useState('');
  const [movies, setMovies] = useState(moviesData);
  const [isModalShown, setIsModalShown] = useState(false);
  const addMovie = useCallback(() => setIsModalShown(true), []);

  const onGenreSelect = (selectedGenre) => {
    if (selectedGenre === genre) {
      setGenre('');
    } else if (genres.includes(selectedGenre)) {
      setGenre(selectedGenre);
    }
  };

  const onSortSelect = (selectedSorting) => {
    if (selectedSorting === sorting) {
      setSorting('');
    } else {
      setSorting(selectedSorting);
    }
  };

  useEffect(() => {
    const moviesFilteredByGenre = moviesData.filter((movie) => genre ? movie.Genre?.includes(genre) : true);
    const sorter = SortMap.get(sorting);
    const moviesOrdered = sorter ? moviesFilteredByGenre.sort(sorter) : moviesFilteredByGenre;
    setMovies(moviesOrdered);
  }, [genre, sorting]);

  return (
    <>
      <div className={styles.container}>
        <Counter initialCounter={42} />
        <button onClick={addMovie}>Add movie</button>
        <Search initialQuery='initial' onSearch={console.log} />
        <GenreFilter genres={genres} selectedGenre={genre} onSelect={onGenreSelect} />
        <SortControl sortBy={sorting} onSelect={onSortSelect} />
        <MoviesPage movies={movies} />
      </div>
      {isModalShown && createPortal(
        <Dialog title="Add movie" onClose={() => setIsModalShown(false)}>
          <MovieForm movieData={{}} onSubmit={(submitData) => { console.log(submitData); setIsModalShown(false); }} />
        </Dialog>,
        document.getElementById('modal'),
      )}
      <div id='modal' />
    </>
  )
}

export default App;
