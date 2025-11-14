import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import NavigationDesktopComponent from './navigation-desktop';

const meta = {
  component: NavigationDesktopComponent,
  title: 'Portfolio/Layout/Root Layout/Root Header/Navigation - Desktop'
} satisfies Meta<typeof NavigationDesktopComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NavigationDesktop: Story = {
  decorators: [
    (Story) => {
      return (
        <div style={{ display: 'inline-block', padding: '1em', backgroundColor: 'gray' }}>
          <Story />
        </div>
      )
    }
  ]
};