import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieTile from './MovieTile';

describe('MovieTile', () => {
  const mockMovie = {
    title: 'Movie 1',
    year: '2021',
    genres: 'Action, Thriller',
    posterUrl: 'path/to/poster.jpg',
  };

  it('renders movie tile correctly', () => {
    render(<MovieTile {...mockMovie} />);

    const titleElement = screen.getByText(mockMovie.title);
    const yearElement = screen.getByText(`Released: ${mockMovie.year}`);
    const genresElement = screen.getByText(`Genres: ${mockMovie.genres}`);
    const posterElement = screen.getByAltText(mockMovie.title);

    expect(titleElement).toBeInTheDocument();
    expect(yearElement).toBeInTheDocument();
    expect(genresElement).toBeInTheDocument();
    expect(posterElement).toBeInTheDocument();
  });

  it('calls click handler when clicked', async () => {
    const mockClickHandler = jest.fn();
    render(<MovieTile {...mockMovie} clickHandler={mockClickHandler} />);

    const movieTileElement = screen.getByText(mockMovie.title);
    await userEvent.click(movieTileElement);

    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });
});