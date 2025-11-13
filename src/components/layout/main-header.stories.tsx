import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import MainHeaderComponent from './main-header';

const meta = {
    component: MainHeaderComponent,
    title: 'Portfolio/Layout/Main Header',
} satisfies Meta<typeof MainHeaderComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MainHeader: Story = {};
