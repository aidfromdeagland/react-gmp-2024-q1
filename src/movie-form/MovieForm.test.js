import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieForm from './MovieForm';

describe('MovieForm Component', () => {
  const requiredFields = ['Title', 'Rated', 'Year', 'Genre', 'Poster', 'Runtime', 'Plot'];
  const onSubmitMock = jest.fn();

  beforeEach(() => {
    onSubmitMock.mockClear();
  });

  test('fills form fields with provided data', () => {
    const movieData = {
      Title: 'Movie Title',
      Rated: 'PG',
      Year: '2022',
      Genre: 'Action',
      Poster: 'https://example.com/poster.jpg',
      Runtime: '120 min',
      Plot: 'Lorem ipsum dolor sit amet',
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
      Title: '',
      Rated: '',
      Year: '',
      Genre: '',
      Poster: '',
      Runtime: '',
      Plot: 'kek',
    });
  });
});