import { StoryObj, Meta } from '@storybook/react';

import { Loader } from '@stick-ui/lib';

const meta: Meta<typeof Loader> = {
    title: 'STICK UI/Components/Core/Loader',
    component: Loader,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [
        (Story) => (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Story />
            </div>
        )
    ]
}

export default meta;
export const Default: StoryObj = {
    args: { ize: 'md', color: '' }
}
