import { action } from '@storybook/addon-actions';
import MovieForm from '../movie-form/MovieForm';

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
      Title: 'Inception',
      Rated: 'PG-13',
      Year: '2010',
      Genre: 'Sci-Fi, Action',
      Poster: 'https://example.com/inception.jpg',
      Runtime: '148 min',
      Plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    },
    onSubmit: onSubmitAction,
  },
};