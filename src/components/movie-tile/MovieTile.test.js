import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieTile from './MovieTile';

describe('MovieTile', () => {
  const mockMovie = {
    id: 1,
    title: 'Movie 1',
    release_date: '2021',
    genres: ['Action', 'Thriller'],
    poster_path: 'path/to/poster.jpg',
  };

  test('renders movie tile correctly', () => {
    render(<MovieTile movie={mockMovie} />);

    const titleElement = screen.getByText(mockMovie.title);
    const yearElement = screen.getByText(`Released: ${mockMovie.release_date}`);
    const genresElement = screen.getByText(`Genres: ${mockMovie.genres.join(', ')}`);
    const posterElement = screen.getByAltText(mockMovie.title);

    expect(titleElement).toBeInTheDocument();
    expect(yearElement).toBeInTheDocument();
    expect(genresElement).toBeInTheDocument();
    expect(posterElement).toBeInTheDocument();
  });

  test('calls click handler when clicked', async () => {
    const mockClickHandler = jest.fn();
    render(<MovieTile movie={mockMovie} clickHandler={mockClickHandler} />);
    const movieTileElement = screen.getByText(mockMovie.title);
    await userEvent.click(movieTileElement);
    
    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });
});