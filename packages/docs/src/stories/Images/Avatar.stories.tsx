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
        defaultValue: { summary: 'md' },
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
      'https://media.discordapp.net/attachments/1184833101445206120/1230156939481059458/image.png?ex=6627bfed&is=66266e6d&hm=5b352b6741fb2ef94b1b9b4ec7024bf7a9d65c296571d8f84a8f4afc6d01d0de&=&format=webp&quality=lossless&width=120&height=99',
  },
};
