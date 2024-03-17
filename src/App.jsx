import { useCallback, useEffect, useState } from 'react';
import styles from './App.module.css';
import Counter from './components/counter/Counter';
import GenreFilter from './components/genre-filter/GenreFilter';
import Search from './components/search/Search';
import SortControl from './components/sort/SortControl';
import MoviesPage from './components/movies-page/MoviesPage';
import moviesData from './fakeData/films.json';

let movieId = moviesData.length;

const SortMap = new Map([
  ['releaseDate', ((a, b) => a.Year > b.Year ? 1 : -1)],
  ['title', ((a, b) => a.Title > b.Title ? 1 : -1)],
]);

const genres = Array.from(new Set(moviesData.map(film => film.Genre).join(', ').split(', ')));

function App() {
  const [genre, setGenre] = useState(genres[0]);
  const [sorting, setSorting] = useState('');
  const [movies, setMovies] = useState(moviesData);
  const [matchedMovies, setMatchedMovies] = useState(movies);
  const applyMovieAction = useCallback((type, movieData) => {
    switch (type) {
    case 'add':
      setMovies([...movies, { ...movieData, id: ++movieId }]);
      break;
    case 'edit': {
      setMovies(movies.map((movie) => {
        return movie.id === movieData.id
          ? { ...movieData }
          : movie;
      }));
      break;
    }
    case 'delete':
      setMovies(movies.filter(movie => movie.Title !== movieData.Title));
      break;
    default:
      break;
    }
  }, [movies]);

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
    const moviesFilteredByGenre = movies.filter((movie) => genre ? movie.Genre?.includes(genre) : true);
    const sorter = SortMap.get(sorting);
    const moviesOrdered = sorter ? moviesFilteredByGenre.sort(sorter) : moviesFilteredByGenre;
    setMatchedMovies(moviesOrdered);
  }, [movies, genre, sorting]);

  return (
    <>
      <div className={styles.container}>
        <Counter initialCounter={42} />
        <Search initialQuery='initial' onSearch={console.log} />
        <GenreFilter genres={genres} selectedGenre={genre} onSelect={onGenreSelect} />
        <SortControl sortBy={sorting} onSelect={onSortSelect} />
        <MoviesPage movies={matchedMovies} applyAction={applyMovieAction} />
      </div>
      <div id='modal' />
    </>
  )
}

export default App;
