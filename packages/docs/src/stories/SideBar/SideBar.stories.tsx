import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Heading, Icon, SideBar } from '@istic-ui/react';

const meta: Meta<typeof SideBar> = {
  title: 'ISTIC UI/Components/Core/SideBar',
  component: SideBar,
  tags: ['autodocs'],
  argTypes: {
    logo: { description: 'ReactNode', control: { type: 'text' } },
    footer: {
      description: 'ReactNode',
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
    items: [
      {
        title: 'First Items',
        subItems: [
          {
            label: 'First Page',
            path: '/firstPage',
            icon: <Icon name="dashboard" />,
            notification: 4,
          },
          {
            label: 'Second Page',
            path: '/secondPage',
            icon: <Icon name="file-list" />,
            notification: 0,
          },
        ],
      },
      {
        title: 'Second Items',
        subItems: [
          {
            label: 'Third Page',
            path: '/thirdPage',
            icon: <Icon name="shake-hands" />,
            notification: 0,
          },
          {
            label: 'Fourth Page',
            path: '/fourthPage',
            icon: <Icon name="building" />,
            notification: 1,
          },
          {
            label: 'Fifth Page',
            path: '/fifthPage',
            icon: <Icon name="tools" />,
            notification: 0,
          },
        ],
      },
    ],
    logo: (
      <Heading level="h2" weight="bold">
        Company
      </Heading>
    ),
    footer: <div>Footer</div>,
  },
};
