import { render, screen } from '@testing-library/react';
import MovieDetails from './MovieDetails';

describe('MovieDetails', () => {
  const mockMovie = {
    id: 1,
    Title: 'Movie 1',
    Year: '2021',
    Runtime: '120 min',
    Plot: 'A great movie plot',
    Poster: 'path/to/poster.jpg',
    Rated: 'PG-13',
  };

  it('renders movie details correctly', () => {
    render(<MovieDetails movie={mockMovie} />);

    const titleElement = screen.getByText(mockMovie.Title);
    const yearElement = screen.getByText(/2021/);
    const durationElement = screen.getByText(/120 min/);
    const descriptionElement = screen.getByText(`Description: ${mockMovie.Plot}`);
    const ratingElement = screen.getByText(/PG-13/);

    expect(titleElement).toBeInTheDocument();
    expect(yearElement).toBeInTheDocument();
    expect(durationElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(ratingElement).toBeInTheDocument();
  });

  it('renders fallback image when poster image fails to load', () => {
    const mockMovieWithInvalidPoster = { ...mockMovie, Poster: 'initial url' };
    render(<MovieDetails movie={mockMovieWithInvalidPoster} />);

    const fallbackImage = screen.getByAltText('Movie 1 poster');
    expect(fallbackImage.src).not.toEqual('initial url');
  });
});