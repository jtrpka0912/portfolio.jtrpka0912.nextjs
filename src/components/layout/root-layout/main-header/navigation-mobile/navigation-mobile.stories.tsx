import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import NavigationMobileComponent from './navigation-mobile';

const meta = {
    component: NavigationMobileComponent,
    title: 'Portfolio/Layout/Root Layout/Root Header/Navigation - Mobile'
} satisfies Meta<typeof NavigationMobileComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

// TODO: May need to override the `hideFrom` prop to show on all screens in storybook.
export const NavigationMobile: Story = {};