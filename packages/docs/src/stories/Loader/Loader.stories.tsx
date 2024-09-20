import { StoryObj, Meta } from '@storybook/react';

import { Loader } from '@istic-ui/react';

const meta: Meta<typeof Loader> = {
  title: 'ISTIC UI/Components/Core/Loader',
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
        defaultValue: { summary: 'bold' },
      },
    },
    color: {
      options: ['border-slate-100', 'border-brand500'],
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
  name: 'Loader',
  args: { size: 'md', color: 'border-slate-100' },
};
