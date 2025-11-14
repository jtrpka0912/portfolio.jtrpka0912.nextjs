import type { Meta, StoryObj } from '@storybook/nextjs';

import RootLayoutComponent from './root-layout';
import React from 'react';

const meta = {
  component: RootLayoutComponent,
  title: 'Portfolio/Layout/Root Layout',
} satisfies Meta<typeof RootLayoutComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RootLayout: Story = {
  args: {
    children: (
      <React.Fragment>
        <h1>A sample, <em>sample</em> page</h1>
        <p>This story is mainly to show how the Root Layout looks.</p>
      </React.Fragment>
    )
  }
};