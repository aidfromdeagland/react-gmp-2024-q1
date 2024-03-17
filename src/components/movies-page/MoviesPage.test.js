import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MoviesPage from './MoviesPage';
import App from '../../App';

describe('MoviesPage', () => {
  const mockMovies = [
    {
      id: 1,
      Title: 'Movie 1',
      Year: '2021',
      Genre: 'Action',
      Poster: 'path/to/poster1.jpg',
    },
    {
      id: 2,
      Title: 'Movie 2',
      Year: '2020',
      Genre: 'Comedy',
      Poster: 'path/to/poster2.jpg',
    },
  ];

  test('renders movie tiles correctly', () => {
    render(<MoviesPage movies={mockMovies} />);
    const movieTiles = screen.getAllByRole('listitem');

    expect(movieTiles).toHaveLength(mockMovies.length);
  });

  test('passes action to the parent modal when a movie tile is clicked', async () => {
    render(<App />);
    const movieTile = screen.getByText('Avatar');
    await userEvent.click(movieTile);

    await waitFor(() => {
      const movieDetails = screen.getAllByRole('heading', { level: 2 })[1];
      expect(movieDetails).toBeInTheDocument();
    });
  });

  test('closes movie details modal when closed', async () => {
    render(<App />);
    const movieTile = screen.getByText('Avatar');
    await userEvent.click(movieTile);

    expect(screen.queryAllByRole('heading', { level: 2 })).toHaveLength(2);
    const closeButton = screen.getByRole('button', { name: 'Close' });
    await userEvent.click(closeButton);
    await waitFor(() => {
      expect(screen.queryAllByRole('heading', { level: 2 })).toHaveLength(0);
    });
  });
});