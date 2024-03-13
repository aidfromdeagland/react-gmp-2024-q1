import GenreFilter from '../genre-filter/GenreFilter';

export default {
  title: 'GenreFilter',
  component: GenreFilter,
};

export const initialGenre = {
  args: {
    genres: ['Action', 'Adventure', 'Comedy', 'Drama', 'Horror'],
    selectedGenre: 'Action',
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'centered',
  },
};