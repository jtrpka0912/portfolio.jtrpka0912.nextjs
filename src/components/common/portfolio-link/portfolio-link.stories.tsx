import type { Meta, StoryObj } from '@storybook/nextjs';

import PortfolioLinkComponent from './portfolio-link';

const meta = {
  component: PortfolioLinkComponent,
  title: 'Portfolio/Common/Portfolio Link'
} satisfies Meta<typeof PortfolioLinkComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PortfolioLink: Story = {
  args: {
    href: 'https://jeremy.trpka.me',
    children: 'My Portfolio'
  }
};