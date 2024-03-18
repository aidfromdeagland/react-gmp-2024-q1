import MovieDetails from '../components/movie-details/MovieDetails';

export default {
  title: 'MovieDetails',
  component: MovieDetails,
  parameters: {
    layout: 'centered',
  },
};

export const DetailsFilled = {
  args: {
    movie: {
      title: 'Some title here',
      release_date: '2000',
      runtime: 101,
      overview: 'One upon a time...',
      poster_path: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Daslook._Allium_ursinum%2C_zwellende_bloemknop._18-04-2022_%28actm.%29_04.jpg',
      vote_average: 8,
    },
  },
};