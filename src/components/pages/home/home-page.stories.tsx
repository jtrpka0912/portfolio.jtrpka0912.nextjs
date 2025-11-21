import type { Meta, StoryObj } from '@storybook/nextjs';

import HomePageComponent from './home-page';

const meta = {
  component: HomePageComponent,
  title: 'Portfolio/Page/Home'
} satisfies Meta<typeof HomePageComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HomePage: Story = {
  args: { projects: [] }
};