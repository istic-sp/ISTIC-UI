import { useState } from 'react';
import { Tabs } from '@stick-ui/lib';
import { Meta } from '@storybook/react';

Tabs.displayName = 'Tabs';
const meta: Meta<typeof Tabs> = {
  title: 'STICK UI/Components/Core/Tabs',
  component: Tabs,

  argTypes: {},
};
export const Default = () => {
  return (
    <>
      <Tabs
        tabs={[
          {
            title: 'Tab 1',
            iconProps: { iconName: 'add' },
            content: <div>Tab 1 Content</div>,
          },
          {
            title: 'Tab 2',
            iconProps: { iconName: 'add' },
            content: <div>Tab 2 Content</div>,
          },
          {
            title: 'Tab 3',
            iconProps: { iconName: 'add' },
            content: <div>Tab 3 Content</div>,
          },
        ]}
      />
    </>
  );
};

export default meta;
