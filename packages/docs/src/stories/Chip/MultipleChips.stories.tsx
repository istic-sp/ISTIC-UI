import type { Meta, StoryObj } from '@storybook/react';
import { Chip, Text } from '@stick-ui/lib';

Chip.displayName = 'Chips Example';

const meta: Meta<typeof Chip> = {
  id: 'chips',
  title: 'STICK UI/Components/Core/Chip/Multiple Chips in Layout',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['filled', 'outline'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'filled' },
      },
    },
    badge: {
      control: { type: 'number' },
      table: {
        defaultValue: { summary: 0 },
      },
    },
    checkIcon: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: true },
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-2">
        <Text size="lg" color="text-brand500">
          Layout example with multiple chips
        </Text>
        <Text size="sm" color="text-brand500">
          The container div must have "flex grow", in order for the behaviour
          below to be present (element growing to the right)
        </Text>
        <div className="flex gap-2 grow">
          <Story label="Chip" value="a" />
          <Chip label="Chip 2" value="b" badge={6} variant="outline" />
          <Chip
            label="Chip 3"
            value="c"
            questionTooltip={{
              title: 'Example',
              children: <p>Text Placeholder</p>,
            }}
            checkIcon={false}
          />
          <Chip
            label="Chip 4"
            value="d"
            variant="outline"
            badge={3}
            questionTooltip={{
              title: 'Example',
              children: <p>Text Placeholder</p>,
            }}
            checkIcon={false}
          />
        </div>
      </div>
    ),
  ],
};

export default meta;
export const Default: StoryObj = {
  args: {
    label: 'Chip Label Placeholder',
    questionTooltip: { title: 'Title Example', children: <p>Text Example</p> },
  },
};
