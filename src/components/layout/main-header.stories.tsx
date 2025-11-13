import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import MainHeader from './main-header';

const meta = {
  component: MainHeader,
  title: 'Portfolio/Layout/Main Header',
} satisfies Meta<typeof MainHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryMainHeader: Story = {};
