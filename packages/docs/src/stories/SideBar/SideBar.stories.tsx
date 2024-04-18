import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon, SideBar } from '@stick-ui/lib';

SideBar.displayName = 'SideBar';

const meta: Meta<typeof SideBar> = {
  title: 'STICK UI/Components/Core/SideBar',
  component: SideBar,
  tags: ['autodocs'],
  argTypes: {
    logo: { description: 'ReactNode' },
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
      <img src="https://seeklogo.com/images/G/generic-globe-logo-16C502EA47-seeklogo.com.png" />
    ),
    footer: <div>Footer</div>,
  },
};