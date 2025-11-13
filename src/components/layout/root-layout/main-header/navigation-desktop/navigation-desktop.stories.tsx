import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import NavigationDesktopComponent from './navigation-desktop';

const meta = {
  component: NavigationDesktopComponent,
  title: 'Portfolio/Layout/Root Layout/Root Header/Navigation - Desktop'
} satisfies Meta<typeof NavigationDesktopComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

// TODO: May need to override the `hideFrom` prop to show on all screens in storybook.
export const NavigationDesktop: Story = {};