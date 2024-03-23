import { useEffect, useState } from 'react';
import styles from './App.module.css';
import GenreFilter from './components/genre-filter/GenreFilter';
import Search from './components/search/Search';
import SortControl from './components/sort/SortControl';
import MoviesPage from './components/movies-page/MoviesPage';
import { service as MovieService } from './services/movie-service';

const genres = ['Action', 'Adventure', 'Animation', 'Comedy', 'Drama', 'Family', 'Fantasy', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'Thriller', 'War'];

function App() {
  const [genre, setGenre] = useState('');
  const [sorting, setSorting] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

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
      const movies = await MovieService.getMovies({ genre, sorting, searchQuery });
      setMovies(movies);
    }

    fetchMovies(genre, sorting, searchQuery);

  }, [genre, sorting, searchQuery]);

  return (
    <>
      <div className={styles.container}>
        <Search initialQuery={searchQuery} onSearch={(query) => { setSearchQuery(query) }} />
        <GenreFilter genres={genres} selectedGenre={genre} onSelect={onGenreSelect} />
        <SortControl sortBy={sorting} onSelect={onSortSelect} />
        <MoviesPage movies={movies} applyAction={console.log} />
      </div>
      <div id='modal' />
    </>
  )
}

export default App;
