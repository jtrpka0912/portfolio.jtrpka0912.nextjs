import type { Meta, StoryObj } from '@storybook/nextjs';

import RootHeaderComponent from './root-header';

const meta = {
    component: RootHeaderComponent,
    title: 'Portfolio/Layout/Root Layout/Root Header',
} satisfies Meta<typeof RootHeaderComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RootHeader: Story = {};
