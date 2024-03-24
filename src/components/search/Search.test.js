import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Search from './Search';

describe('Search', () => {
  test('renders an input with value equal to one passed to router', () => {
    render(<MemoryRouter initialEntries={['/?query=Lorem']}><Search /></MemoryRouter>);

    expect(screen.getByDisplayValue('Lorem')).toBeInTheDocument();
  });
});