import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Search from './Search';

describe('Search', () => {
  let initialValue;
  let changedValue;
  let onChangeMock;

  beforeEach(() => {
    initialValue = '';
    changedValue = 'changed';
    onChangeMock = jest.fn();
  });

  test('renders an input with the value equal to one passed in props', () => {
    render(<Search initialQuery={initialValue} />);
    expect(screen.getByDisplayValue(initialValue)).toBeInTheDocument();
  });

  test('the "onChange" callback is called with proper value on Submit button click event', async () => {
    render(<Search  initialQuery={initialValue} onSearch={onChangeMock} />);
    const inputElement = screen.getByRole('textbox');
    const submitButton = screen.getByText('Search');

    await userEvent.type(inputElement, changedValue);
    await userEvent.click(submitButton);

    expect(onChangeMock).toHaveBeenCalledWith(changedValue);
  });

  test('the "onChange" callback is called with proper value on Enter key press', async () => {
    render(<Search  initialQuery={initialValue} onSearch={onChangeMock} />);
    const inputElement = screen.getByRole('textbox');

    await userEvent.type(inputElement, changedValue);
    await userEvent.type(inputElement, '{enter}');

    expect(onChangeMock).toHaveBeenCalledWith(changedValue);
  });
});