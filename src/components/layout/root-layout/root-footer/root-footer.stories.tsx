import type { Meta, StoryObj } from '@storybook/nextjs';

import RootFooterComponent from './root-footer';

const meta = {
  component: RootFooterComponent,
  title: 'Portfolio/Layout/Root Layout/Root Footer',
} satisfies Meta<typeof RootFooterComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RootFooter: Story = {};