import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@istic-ui/react';

Avatar.displayName = 'Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'ISTIC UI/Components/Core/Images/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'sm' },
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
  args: {
    size: 'md',
    image:
      'https://media.discordapp.net/attachments/1184833101445206120/1232003683160428607/image.png?ex=66b6eb17&is=66b59997&hm=48e8eeef83dc0a033f2d59e58616b725796699f5bf4336d412644ec3798d196a',
  },
};
