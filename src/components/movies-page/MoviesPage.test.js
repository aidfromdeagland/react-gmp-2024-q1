import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MoviesPage from './MoviesPage';
import mockMovies from '../../fakeData/films.json';

jest.mock('../../services/movie-service', () => {
  return {
    service: {
      getMovies: jest.fn().mockResolvedValue(mockMovies),
      getById: jest.fn().mockResolvedValue(mockMovies[0]),
    },
  };
});

describe('MoviesPage', () => {
  test('renders movie tiles correctly', () => {
    render(<MemoryRouter><MoviesPage movies={mockMovies} /></MemoryRouter>);
    const movieTiles = screen.getAllByRole('listitem');

    expect(movieTiles).toHaveLength(mockMovies.length);
  });
});