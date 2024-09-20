import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Product } from '@istic-ui/react';

Product.displayName = 'Product';

const meta: Meta<typeof Product> = {
  title: 'ISTIC UI/Componentes/Core/Images/Product',
  component: Product,
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
      'https://media.discordapp.net/attachments/1184833101445206120/1232007383753035858/image.png?ex=66b6ee89&is=66b59d09&hm=043564bd341116c1fc6d9e5fcc9c5ea2d0f3321ecf61578045e1b8649f4df3aa',
  },
};
