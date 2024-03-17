import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieTile from './MovieTile';

describe('MovieTile', () => {
  const mockMovie = {
    id: 1,
    Title: 'Movie 1',
    Year: '2021',
    Genre: 'Action, Thriller',
    Poster: 'path/to/poster.jpg',
  };

  it('renders movie tile correctly', () => {
    render(<MovieTile movie={mockMovie} />);

    const titleElement = screen.getByText(mockMovie.Title);
    const yearElement = screen.getByText(`Released: ${mockMovie.Year}`);
    const genresElement = screen.getByText(`Genres: ${mockMovie.Genre}`);
    const posterElement = screen.getByAltText(mockMovie.Title);

    expect(titleElement).toBeInTheDocument();
    expect(yearElement).toBeInTheDocument();
    expect(genresElement).toBeInTheDocument();
    expect(posterElement).toBeInTheDocument();
  });

  it('calls click handler when clicked', async () => {
    const mockClickHandler = jest.fn();
    render(<MovieTile movie={mockMovie} clickHandler={mockClickHandler} />);

    const movieTileElement = screen.getByText(mockMovie.Title);
    await userEvent.click(movieTileElement);

    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });
});