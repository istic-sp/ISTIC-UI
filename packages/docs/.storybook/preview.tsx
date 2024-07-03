import type { Preview } from '@storybook/react';
import React from 'react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {},
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'STICK UI',
          ['Introduction', 'Getting Started', 'Components', 'Tokens'],
        ],
      },
    },
  },
};
export const decorators = [(Story) => <Story />];
export default preview;
