import { render, screen } from '@testing-library/react';
import MovieDetails from './MovieDetails';

describe('MovieDetails', () => {
  const mockMovie = {
    id: 1,
    title: 'Movie 1',
    release_date: '2021',
    runtime: 120,
    overview: 'A great movie plot',
    poster_path: 'path/to/poster.jpg',
    vote_average: 8,
  };

  test('renders movie details correctly', () => {
    render(<MovieDetails movie={mockMovie} />);

    const titleElement = screen.getByText(mockMovie.title);
    const yearElement = screen.getByText(/2021/);
    const durationElement = screen.getByText(/120/);
    const descriptionElement = screen.getByText(`Description: ${mockMovie.overview}`);
    const ratingElement = screen.getByText(/8/);

    expect(titleElement).toBeInTheDocument();
    expect(yearElement).toBeInTheDocument();
    expect(durationElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(ratingElement).toBeInTheDocument();
  });

  test('renders fallback image when poster image fails to load', () => {
    const mockMovieWithInvalidPoster = { ...mockMovie, poster_path: 'initial url' };
    render(<MovieDetails movie={mockMovieWithInvalidPoster} />);

    const fallbackImage = screen.getByAltText('Movie 1 poster');
    expect(fallbackImage.src).not.toEqual('initial url');
  });
});