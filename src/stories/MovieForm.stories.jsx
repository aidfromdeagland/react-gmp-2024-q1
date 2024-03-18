import { action } from '@storybook/addon-actions';
import MovieForm from '../components/movie-form/MovieForm';

export default {
  title: 'MovieForm',
  component: MovieForm,
  parameters: {
    layout: 'centered',
  },
};

const onSubmitAction = action('Form submitted');

export const EmptyForm = {
  args: {
    movieData: {},
    onSubmit: onSubmitAction,
  },
};

export const FilledForm = {
  args: {
    movieData: {
      title: 'Inception',
      vote_average: 8,
      release_date: '2010',
      genres: ['Sci-Fi', 'Action'],
      poster_path: 'https://example.com/inception.jpg',
      runtime: 148,
      overview: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    },
    onSubmit: onSubmitAction,
  },
};