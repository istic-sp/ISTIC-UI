import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '@stick-ui/lib';

Tabs.displayName = 'Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'STICK UI/Components/Core/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    onChange: { description: 'Tabs value handler (onClick)' },
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
    grow: true,
    value: 1,

    tabs: [
      {
        title: 'Tab 1',
        iconProps: { iconName: 'add' },
      },
      {
        title: 'Tab 2',
        iconProps: { iconName: 'add' },
      },
      {
        title: 'Tab 3',
        iconProps: { iconName: 'add' },
      },
    ],
  },
};
