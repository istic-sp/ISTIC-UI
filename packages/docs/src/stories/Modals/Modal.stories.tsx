import React, { useState } from 'react';
import { Button, Modal, TextInput } from '@stick-ui/lib';
import { Meta } from '@storybook/react';

Modal.displayName = 'Modal';
const meta: Meta<typeof Modal> = {
  title: 'STICK UI/Components/Core/Modals/Modal',
  component: Modal,

  argTypes: {
    children: {
      description: 'Content to be displayed inside the modal body.',
    },
    contentWidth: {
      description:
        'Sets the initial width of the modal content area. Can be a string value like "600px" or a unitless number representing pixels.',
    },
    title: {
      description: 'Text to be displayed as the title of the modal.',
    },
    isOpen: {
      description:
        'Controls the visibility of the modal (true to open, false to close).',
    },
    onClose: {
      description:
        'Function to be called when the modal is closed (e.g., clicking outside or close button).',
    },
    className: {
      description:
        'Optional string to add custom classes to the modal container.',
    },
    overlayClassName: {
      description:
        'Optional string to add custom classes to the modal overlay.',
    },
    contentClassName: {
      description:
        'Optional string to add custom classes to the modal content area.',
    },
    ariaLabel: {
      description:
        'Optional string to describe the modal content for accessibility.',
    },
  },
};
export const Default = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button label="Open Modal" onClick={() => setOpenModal(true)} />

      <Modal
        contentWidth={300}
        isOpen={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        title={'Pretty Modal'}
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
      </Modal>
    </>
  );
};

export default meta;
