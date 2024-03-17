import MovieDetails from '../movie-details/MovieDetails';

export default {
    title: 'MovieDetails',
    component: MovieDetails,
    parameters: {
      layout: 'centered',
    },
};

export const movieDetails = {
  args: {
    movie: {
      Title: 'Some title here',
      Year: '2000',
      Runtime: '101 min',
      Plot: 'One upon a time...',
      Poster: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Daslook._Allium_ursinum%2C_zwellende_bloemknop._18-04-2022_%28actm.%29_04.jpg',
      Rated: '13PG',
    },
  },
};