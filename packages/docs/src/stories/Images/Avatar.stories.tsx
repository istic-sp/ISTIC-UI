import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@stick-ui/lib';

Avatar.displayName = 'Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'STICK UI/Components/Core/Images/Avatar',
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
      'https://media.discordapp.net/attachments/1184833101445206120/1232003683160428607/image.png?ex=663903d7&is=66268ed7&hm=e40809dad8cc6ea1d2b2698b3886465d559c08bbccbfd1cf5073f5bdd05d99ba&=&format=webp&quality=lossless&width=144&height=144',
  },
};
