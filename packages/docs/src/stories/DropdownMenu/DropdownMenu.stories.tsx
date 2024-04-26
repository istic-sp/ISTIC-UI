import React from 'react';
import { ActionIcon, DropdownMenu } from '@stick-ui/lib';
import { Meta } from '@storybook/react';

DropdownMenu.displayName = 'DropdownMenu';

const meta: Meta<typeof DropdownMenu> = {
  title: 'STICK UI/Components/Core/DropdownMenu',
  component: DropdownMenu,

  argTypes: {},
};
export const Default = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <DropdownMenu
        mainItem={<ActionIcon variant="filled" size="lg" iconName="more-2" />}
        items={[
          {
            iconName: 'edit-box',
            label: 'Edit',
            onClick: () => null,
            disabled: true,
          },
          {
            iconName: 'lock',
            label: 'Inactivate',
            onClick: () => null,
          },
          {
            iconName: 'trash',
            label: 'Exclude',
            onClick: () => null,
          },
        ]}
      />
    </div>
  );
};

export default meta;
