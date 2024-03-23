import { action } from '@storybook/addon-actions';
import Dialog from '../atomics/Dialog';

export default {
  title: 'Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
};

const onCloseAction = action('Dialog closed');
const onCustomButtonClick = action('Custom button clicked');

export const DialogWithChildren = {
  args: {
    title: 'Sample Dialog',
    onClose: onCloseAction,
    children: <>
      <button onClick={onCustomButtonClick}>custom button</button>
      <p>This is a sample dialog content.</p>
    </>,
  },
}