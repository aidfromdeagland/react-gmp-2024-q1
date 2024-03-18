import MovieTile from '../components/movie-tile/MovieTile';

export default {
  title: 'MovieTile',
  component: MovieTile,
};

export const MovieTileFilled = {
  args: {
    movie: {
      title: 'Some title here',
      release_date: '2000',
      genres: ['Drama', 'Horror', 'Sci-Fi'],
      poster_path: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Daslook._Allium_ursinum%2C_zwellende_bloemknop._18-04-2022_%28actm.%29_04.jpg',
    }
  },
  parameters: {
    actions: { argTypesRegex: '^click.*' },
    layout: 'centered',
  },
};