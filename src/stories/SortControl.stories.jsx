import { within, userEvent, expect } from '@storybook/test';
import SortControl from '../components/sort/SortControl';

export default {
  title: 'SortControl',
  component: SortControl,
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
  },
};

export const InitialSortControl = {
  args: {
    sortBy: '',
  },
};

export const SortSelectInteraction = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selectElement = canvas.getByDisplayValue('No sorting');
    await userEvent.selectOptions(selectElement, 'title asc')
    await expect(canvas.getByText('title (asc)')).toBeInTheDocument();
  },
};