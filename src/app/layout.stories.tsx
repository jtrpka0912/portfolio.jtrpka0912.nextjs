import type { Meta, StoryObj } from '@storybook/nextjs';

import RootLayoutComponent from './layout';
import React from 'react';

const meta = {
  component: RootLayoutComponent,
  title: 'Portfolio/App/Root Layout',
} satisfies Meta<typeof RootLayoutComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RootLayout: Story = {
  args: {
    children: (
      <React.Fragment>
        <h1>Hello, World!</h1>
        <p>This is only demonstrating the root layout. Not an actual sample page.</p>
      </React.Fragment>
    )
  }
};