import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Counter from './Counter';


describe('Counter', () => {
  test('renders initial value provided in props', () => {
    const initialValue = 99;
    render(<Counter initialCounter={initialValue} />);
    expect(screen.getByText(initialValue.toString())).toBeInTheDocument();
  });
  
  test('click event on decrement button decreases value by 1', async () => {
    const initialValue = 99;
    const expectedValue = (initialValue - 1).toString();
    render(<Counter initialCounter={initialValue} />);
    const decrementButton = screen.getByText('-');
    await userEvent.click(decrementButton);
    expect(screen.getByText(expectedValue)).toBeInTheDocument();
  });
  
  test('click event on increment button increases value by 1', async () => {
    const initialValue = 99;
    const expectedValue = (initialValue + 1).toString();
    render(<Counter initialCounter={initialValue} />);
    const incrementButton = screen.getByText('+');
    await userEvent.click(incrementButton);
    expect(screen.getByText(expectedValue)).toBeInTheDocument();
  });
})


