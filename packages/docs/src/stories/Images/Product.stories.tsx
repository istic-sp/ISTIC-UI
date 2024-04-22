import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Product } from '@stick-ui/lib';

Product.displayName = 'Product';

const meta: Meta<typeof Product> = {
  title: 'STICK UI/Components/Core/Images/Product',
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
      'https://media.discordapp.net/attachments/1184833101445206120/1232007383753035858/image.png?ex=66390749&is=66269249&hm=92ff1600cd933152922551d608da98ff3b88c2833055f3f93611b1d9fc41cd25&=&format=webp&quality=lossless&width=72&height=72',
  },
};
