import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import MainHeaderNavigationMobileComponent from './navigation-mobile';

const meta = {
    component: MainHeaderNavigationMobileComponent,
    title: 'Portfolio/Layout/Main Header/Navigation Mobile'
} satisfies Meta<typeof MainHeaderNavigationMobileComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NavigationMobile: Story = {};