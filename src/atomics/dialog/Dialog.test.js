import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dialog from './Dialog';

describe('Dialog Component', () => {
  const onCloseMock = jest.fn();

  beforeEach(() => {
    onCloseMock.mockClear();
  });

  test('renders dialog with title and children', () => {
    render(
      <Dialog title="Dialog title" onClose={onCloseMock}>
        <div>Dialog Content</div>
      </Dialog>
    );

    expect(screen.getByText('Dialog title')).toBeInTheDocument();
    expect(screen.getByText('Dialog Content')).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', async () => {
    render(
      <Dialog title="Dialog title" onClose={onCloseMock}>
        <div>Dialog Content</div>
      </Dialog>
    );
    const closeButton = screen.getByRole('button', { name: 'Close' });
    await userEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalled();
  });
});