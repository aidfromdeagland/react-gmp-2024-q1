import { useCallback, useEffect, useState } from 'react';
import styles from './App.module.css';
import GenreFilter from './components/genre-filter/GenreFilter';
import Search from './components/search/Search';
import SortControl from './components/sort/SortControl';
import MoviesPage from './components/movies-page/MoviesPage';
import moviesData from './fakeData/films.json';
import { service as MovieService } from './services/movie-service';

const genres = ['Action', 'Adventure', 'Animation', 'Comedy', 'Drama', 'Family', 'Fantasy', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'Thriller', 'War'];

function App() {
  const [genre, setGenre] = useState('');
  const [sorting, setSorting] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState(moviesData);
  const [matchedMovies, setMatchedMovies] = useState(movies);
  const applyMovieAction = useCallback((type, movieData) => {
    switch (type) {
    case 'add':
      setMovies([...movies, { ...movieData }]);
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
      setMovies(movies.filter(movie => movie.title !== movieData.title));
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
    const fetchMovies = async (genre, sorting, searchQuery) => {
      const movies = await MovieService.getAll();
      setMatchedMovies(movies);
    }

    fetchMovies();

  }, [movies, genre, sorting, searchQuery]);

  return (
    <>
      <div className={styles.container}>
        <Search initialQuery={searchQuery} onSearch={(query) => {setSearchQuery(query)}} />
        <GenreFilter genres={genres} selectedGenre={genre} onSelect={onGenreSelect} />
        <SortControl sortBy={sorting} onSelect={onSortSelect} />
        <MoviesPage movies={matchedMovies} applyAction={applyMovieAction} />
      </div>
      <div id='modal' />
    </>
  )
}

export default App;
