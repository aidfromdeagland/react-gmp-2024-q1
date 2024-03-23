import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MoviesPage from './MoviesPage';
import mockMovies from '../../fakeData/films.json';

jest.mock('../../services/movie-service', () => {
  return {
    service: {
      getMovies: jest.fn().mockResolvedValue(mockMovies),
    },
  };
});

describe('MoviesPage', () => {
  test('renders movie tiles correctly', () => {
    render(<MoviesPage movies={mockMovies} />);
    const movieTiles = screen.getAllByRole('listitem');

    expect(movieTiles).toHaveLength(mockMovies.length);
  });

  test('passes action to the parent modal when a movie tile is clicked', async () => {
    const { default: App } = await import('../../App');
    render(<App />);
    const movieTile = screen.getByText(mockMovies[0].title);
    await userEvent.click(movieTile);

    await waitFor(() => {
      const movieDetails = screen.getAllByRole('heading', { level: 2 })[1];
      expect(movieDetails).toBeInTheDocument();
    });
  });

  test('closes movie details modal when closed', async () => {
    const { default: App } = await import('../../App');
    render(<App />);
    const movieTile = screen.getByText(mockMovies[0].title);
    await userEvent.click(movieTile);

    expect(screen.queryAllByRole('heading', { level: 2 })).toHaveLength(2);
    const closeButton = screen.getByRole('button', { name: 'Close' });
    await userEvent.click(closeButton);
    await waitFor(() => {
      expect(screen.queryAllByRole('heading', { level: 2 })).toHaveLength(0);
    });
  });
});