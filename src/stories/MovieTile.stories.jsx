import MovieTile from '../movie-tile/MovieTile';

export default {
  title: 'MovieTile',
  component: MovieTile,
};

export const movieTile = {
  args: {
    movie: {
      Title: 'Some title here',
      Year: '2000',
      Genre: 'Drama, Horror, Sci-Fi',
      Poster: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Daslook._Allium_ursinum%2C_zwellende_bloemknop._18-04-2022_%28actm.%29_04.jpg',
    }
  },
  parameters: {
    actions: { argTypesRegex: '^click.*' },
    layout: 'centered',
  },
};