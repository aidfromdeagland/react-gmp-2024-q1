import Search from '../search/Search';

export default {
  title: 'Search',
  component: Search,
};

export const InitialQuery = {
  args: {
    initialQuery: 'Wazzup',
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'centered',
  },
};
