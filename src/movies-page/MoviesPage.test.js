import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MoviesPage from './MoviesPage';

describe('MoviesPage', () => {
  const mockMovies = [
    {
      Title: 'Movie 1',
      Year: '2021',
      Genre: 'Action',
      Poster: 'path/to/poster1.jpg',
    },
    {
      Title: 'Movie 2',
      Year: '2020',
      Genre: 'Comedy',
      Poster: 'path/to/poster2.jpg',
    },
  ];

  it('renders movie tiles correctly', () => {
    render(<MoviesPage movies={mockMovies} />);
    const movieTiles = screen.getAllByRole('listitem');
    expect(movieTiles).toHaveLength(mockMovies.length);
  });

  it('opens movie details modal when a movie tile is clicked', async () => {
    render(
      <div>
        <MoviesPage movies={mockMovies} />
        <div id="modal"></div>
      </div>
    );
    const movieTile = screen.getByText('Movie 1');
    await userEvent.click(movieTile);
    await waitFor(() => {
      const movieDetails = screen.getByRole('heading', { level: 2 });
      expect(movieDetails).toBeInTheDocument();
    });
  });

  it('closes movie details modal when closed', async () => {
    render(
      <div>
        <MoviesPage movies={mockMovies} />
        <div id="modal"></div>
      </div>
    );
    const movieTile = screen.getByText('Movie 1');
    await userEvent.click(movieTile);
    const closeButton = screen.getByRole('button', { name: 'Close' });
    await userEvent.click(closeButton);
    await waitFor(() => {
      expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument();
    });
  });
});