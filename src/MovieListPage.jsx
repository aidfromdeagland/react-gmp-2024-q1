import { useEffect, useState } from 'react';
import { useSearchParams, Outlet } from 'react-router-dom';
import styles from './MovieListPage.module.css';
import GenreFilter from './components/genre-filter/GenreFilter';
import SortControl from './components/sort/SortControl';
import MoviesPage from './components/movies-page/MoviesPage';
import { service as MovieService } from './services/movie-service';

const genres = ['Action', 'Adventure', 'Animation', 'Comedy', 'Drama', 'Family', 'Fantasy', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'Thriller', 'War'];

function MovieListPage() {
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const fetchMovies = async () => {
      const genre = params.get('genre') || '';
      const sorting = params.get('sorting') || '';
      const searchQuery = params.get('query') || '';
      const movies = await MovieService.getMovies({ genre, sorting, searchQuery });
      setMovies(movies);
    };

    fetchMovies();
  }, [params]);

  const onGenreSelect = (selectedGenre) => {
    if (!selectedGenre || selectedGenre === params.get('genre')) {
      params.delete('genre');
    } else {
      params.set('genre', selectedGenre);
    }
    setParams(params);
  };

  const onSortSelect = (selectedSorting) => {
    if (!selectedSorting || selectedSorting === params.get('sorting')) {
      params.delete('sorting');
    } else {
      params.set('sorting', selectedSorting);
    }
    setParams(params);
  };

  return (
    <>
      <div className={styles.container}>
        
        <div className={styles.topWidget}>
          <Outlet />
        </div>
        <GenreFilter genres={genres} selectedGenre={params.get('genre') || ''} onSelect={onGenreSelect} />
        <SortControl sortBy={params.get('sorting') || ''} onSelect={onSortSelect} />
        <MoviesPage movies={movies} />
      </div>
      <div id='modal' />
    </>
  )
}

export default MovieListPage;
