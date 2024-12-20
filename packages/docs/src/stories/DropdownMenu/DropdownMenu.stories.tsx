import React from 'react';
import { Meta } from '@storybook/react';
import { ActionIcon, DropdownMenu, DropdownMenuProps } from '@istic-ui/react';

const meta: Meta<DropdownMenuProps> = {
  title: 'ISTIC UI/Componentes/Core/DropdownMenu',
  component: DropdownMenu,
  argTypes: {
    mainItem: {
      description: 'The main item that triggers the dropdown.',
    },
    items: {
      description: 'Array of dropdown menu items.',
    },
    position: {
      description:
        '"right" or "left", Position of the dropdown menu relative to the main item.',
      defaultValue: { summary: 'left' },
    },
    align: {
      description:
        '"center", "top" or "bottom", Alignment of the dropdown menu relative to the main item.',
      defaultValue: { summary: 'center' },
    },
  },
};

export const Default = () => (
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
      mainItem={
        <ActionIcon
          variant="filled"
          size="lg"
          iconName="more-2"
          color="text-brand-100"
        />
      }
      items={[
        {
          id: 'edit',
          iconName: 'edit-box',
          label: 'Edit',
          onClick: () => null,
          disabled: true,
        },
        {
          id: 'inactivate',
          iconName: 'lock',
          label: 'Inactivate',
          onClick: () => null,
        },
        {
          id: 'exclude',
          iconName: 'trash',
          label: 'Exclude',
          onClick: () => null,
        },
      ]}
      position="left"
      align="full-bottom"
    />
  </div>
);

export default meta;
