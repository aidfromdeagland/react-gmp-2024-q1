import Search from '../search/Search';

export default {
  title: 'Search',
  component: Search,
};

export const initialQuery = {
  args: {
    initialQuery: 'Wazzup',
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'centered',
  },
};
