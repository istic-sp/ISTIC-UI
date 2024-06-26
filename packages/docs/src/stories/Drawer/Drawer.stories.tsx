import React, { useState } from 'react';
import { Button, Drawer, TextInput } from '@stick-ui/lib';
import { Meta } from '@storybook/react';

Drawer.displayName = 'Drawer';
const meta: Meta<typeof Drawer> = {
  title: 'STICK UI/Components/Core/Drawer',
  component: Drawer,

  argTypes: {
    children: {
      description: 'Content to be displayed inside the drawer body.',
    },
    title: {
      description: 'Text to be displayed as the title of the drawer.',
    },
    isOpen: {
      description:
        'Controls the visibility of the drawer (true to open, false to close).',
    },
    onClose: {
      description:
        'Function to be called when the drawer is closed (e.g., clicking outside or close button).',
    },
    className: {
      description:
        'Optional string to add custom classes to the drawer container.',
    },
    overlayClassName: {
      description:
        'Optional string to add custom classes to the drawer overlay.',
    },
    contentClassName: {
      description:
        'Optional string to add custom classes to the drawer content area.',
    },
    ariaLabel: {
      description:
        'Optional string to describe the drawer content for accessibility.',
    },
  },
};
export const Default = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Button label="Open Drawer" onClick={() => setOpenDrawer(true)} />
      <Drawer
        isOpen={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
        title={'Pretty Drawer'}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            paddingBottom: 16,
            width: '100%',
          }}
        >
          <TextInput label="Name" placeholder="Type the name" grow />
          <TextInput
            label="Description"
            placeholder="Type the description"
            grow
          />
        </div>

        <Button size="xs" label="Continue" grow />
      </Drawer>
    </>
  );
};

export default meta;