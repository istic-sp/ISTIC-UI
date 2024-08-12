import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '@stick-ui/lib';

Tabs.displayName = 'Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'STICK UI/Components/Core/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    onChange: { description: 'Manipulador de valor das tabs (onClick)' },
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
    value: '1',

    tabs: [
      {
        id: '1',
        title: 'Tab 1',
        iconProps: { iconName: 'add' },
      },
      {
        id: '2',
        title: 'Tab 2',
        iconProps: { iconName: 'add' },
      },
      {
        id: '3',
        title: 'Tab 3',
        iconProps: { iconName: 'add' },
      },
    ],
  },
};
