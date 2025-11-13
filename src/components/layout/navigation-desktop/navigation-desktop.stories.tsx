import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import NavigationDesktopComponent from './navigation-desktop';

const meta = {
  component: NavigationDesktopComponent,
  title: 'Portfolio/Layout/Main Header/Navigation - Desktop'
} satisfies Meta<typeof NavigationDesktopComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NavigationMobile: Story = {};