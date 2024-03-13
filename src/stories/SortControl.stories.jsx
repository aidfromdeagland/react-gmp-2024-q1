import { within, userEvent, expect } from '@storybook/test';
import SortControl from '../sort/SortControl';

export default {
    title: 'SortControl',
    component: SortControl,
    parameters: {
      layout: 'centered',
      actions: { argTypesRegex: '^on.*' },
    },
};

export const initialSortControl = {
  args: {
    sortBy: ''
  },
};

export const sortSelectInteraction = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selectElement = canvas.getByDisplayValue('');
    await userEvent.selectOptions(selectElement, 'title')
    await expect(canvas.getByText('Title')).toBeInTheDocument();
  },
};