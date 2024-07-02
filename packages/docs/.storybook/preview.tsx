import type { Preview } from '@storybook/react';
import React from 'react';
import { Button, Toast, ToastProvider, useToast } from '@stick-ui/lib';

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
export const decorators = [
  (Story) => (
    <ToastProvider position="top-right">
      <Story />
    </ToastProvider>
  ),
];
export default preview;
