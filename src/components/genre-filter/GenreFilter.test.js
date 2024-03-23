import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import GenreFilter from './GenreFilter';

describe('GenreFilter', () => {
  let genres;
  let selectedGenre;
  let onSelect;

  beforeEach(() => {
    genres = ['Action', 'Adventure', 'Comedy', 'Drama'];
    selectedGenre = genres[1];
    onSelect = jest.fn();
  });

  test('renders all genres passed in props', () => {
    render(<GenreFilter genres={genres} selectedGenre={selectedGenre} onSelect={onSelect} />);

    genres.forEach(genre => {
      const genreElement = screen.getByText(genre);
      expect(genreElement).toBeInTheDocument();
    });
  });

  test('calls "onChange" callback and passes correct genre in arguments on any genre button click', async () => {
    render(<GenreFilter genres={genres} selectedGenre={selectedGenre} onSelect={onSelect} />);

    const newSelectedGenre = genres[2];
    const genreButton = screen.getByText(newSelectedGenre);
    await userEvent.click(genreButton);

    expect(onSelect).toHaveBeenCalledWith(newSelectedGenre);
  });
});
