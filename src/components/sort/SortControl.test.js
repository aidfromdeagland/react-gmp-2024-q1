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
    await userEvent.selectOptions(selectElement, 'title asc');

    expect(mockOnSelect).toHaveBeenCalledWith('title asc');
  });

  test('displays the correct selected value', () => {
    render(<SortControl sortBy="release_date asc" />);
    const selectedOption = screen.getByDisplayValue('Release Date (asc)');
    expect(selectedOption).toBeInTheDocument();
  });
});