import { StoryObj, Meta } from '@storybook/react';

import { Loader } from '@stick-ui/lib';

const meta: Meta<typeof Loader> = {
  title: 'STICK UI/Components/Core/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    width: {
      options: ['slim', 'bold'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: '4' },
      },
    },
    color: {
      options: ['white', 'brand500'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'white' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
export const Default: StoryObj = {
  args: { size: 'md', color: '' },
};
