import films from '../fakeData/films.json'
import MovieTile from '../movie-tile/MovieTile';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {films.map(film => (
          <li key={film.Title} className={styles.listItem}>
            <MovieTile
              title={film.Title}
              year={film.Year}
              genres={film.Genre}
              posterUrl={film.Poster}
              clickHandler={() => { console.log(film.Title) }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;