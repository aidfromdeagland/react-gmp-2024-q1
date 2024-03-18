import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieForm from './MovieForm';

describe('MovieForm Component', () => {
  const onSubmitMock = jest.fn();

  beforeEach(() => {
    onSubmitMock.mockClear();
  });

  test('fills form fields with provided data', () => {
    const movieData = {
      title: 'Movie title',
      vote_average: 8,
      release_date: '2022',
      genres: ['Action'],
      poster_path: 'https://example.com/poster.jpg',
      runtime: 120,
      overview: 'Lorem ipsum dolor sit amet',
    };
    render(<MovieForm movieData={movieData} />);

    Object.keys(movieData).forEach((fieldName) => {
      expect(screen.getByDisplayValue(movieData[fieldName])).toBeInTheDocument();
    });
  });

  test('calls onSubmit with form data when submitted', async () => {
    render(<MovieForm movieData={{}} onSubmit={onSubmitMock} />);
    const plotDescriptionElement = screen.getByLabelText('Description:');
    await userEvent.type(plotDescriptionElement, 'kek')
    await userEvent.click(screen.getByText('Submit'));

    expect(onSubmitMock).toHaveBeenCalledWith({
      title: '',
      vote_average: 0,
      release_date: '',
      genres: [],
      poster_path: '',
      runtime: 0,
      overview: 'kek',
    });
  });
});