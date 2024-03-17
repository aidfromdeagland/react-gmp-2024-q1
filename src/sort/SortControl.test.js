import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import SortControl from './SortControl';

describe('SortControl', () => {
  test('renders correctly with default props', () => {
    render(<SortControl />);
    const optionElement = screen.getByDisplayValue('No sorting');
    expect(optionElement).toBeInTheDocument();
  });

  test('calls onSelect callback with correct value when selection changes', async () => {
    const mockOnSelect = jest.fn();
    render(<SortControl sortBy="" onSelect={mockOnSelect} />);
    const selectElement = screen.getByDisplayValue('No sorting');
    await userEvent.selectOptions(selectElement, 'title');

    expect(mockOnSelect).toHaveBeenCalledWith('title');
  });

  test('displays the correct selected value', () => {
    render(<SortControl sortBy="releaseDate" />);
    const selectedOption = screen.getByDisplayValue('Release Date');
    expect(selectedOption).toBeInTheDocument();
  });
});