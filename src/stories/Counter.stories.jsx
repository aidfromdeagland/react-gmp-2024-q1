import { within, userEvent, expect } from '@storybook/test';
import Counter from '../components/counter/Counter';

export default {
  title: 'Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
};

export const InitialCounter = {
  args: {
    initialCounter: 42
  },
};

export const IncrementInteraction = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const incrementButton = canvas.getByText('+');
    const textNode = canvas.getByText((content, element) => element.tagName.toLowerCase() === 'span');
    const currentValue = Number(textNode.textContent);
    await expect(incrementButton).toBeInTheDocument();
    await userEvent.click(incrementButton);
    await expect(canvas.getByText(`${currentValue + 1}`)).toBeInTheDocument();
  },
};

export const DecrementInteraction = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const decrementButton = canvas.getByText('-');
    const textNode = canvas.getByText((content, element) => element.tagName.toLowerCase() === 'span');
    const currentValue = Number(textNode.textContent);
    await expect(decrementButton).toBeInTheDocument();
    await userEvent.click(decrementButton);
    await expect(canvas.getByText(`${currentValue - 1}`)).toBeInTheDocument();
  },
};