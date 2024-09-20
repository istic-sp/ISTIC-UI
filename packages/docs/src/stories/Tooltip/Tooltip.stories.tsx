import React from 'react';
import { Meta } from '@storybook/react';
import { Icon, Text, Tooltip, TooltipProps } from '@istic-ui/react';

const meta: Meta<TooltipProps> = {
  title: 'ISTIC UI/Components/Core/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'The main item that triggers the item to display.',
    },

    onHoverItem: {
      description: 'The displayed item on hover.',
    },

    position: {
      description:
        '"right" or "left", Position of the displayed item  relative to the main item.',
      defaultValue: { summary: 'left' },
    },
    align: {
      description:
        '"center", "top" or "bottom", Alignment of the displayed item relative to the main item.',
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
      height: '30vh',
    }}
  >
    <Tooltip
      onHoverItem={
        <div className="bg-black p-3">
          <Text color="text-white">Displayed item</Text>
        </div>
      }
      position="left"
      align="center"
    >
      <div>
        <Icon name="question" size={50} />
      </div>
    </Tooltip>
  </div>
);

export default meta;
