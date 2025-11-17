import type { Meta, StoryObj } from '@storybook/nextjs';

import ProjectCardComponent from './project-card';

const meta = {
  component: ProjectCardComponent,
  title: 'Portfolio/Common/Project Card'
} satisfies Meta<typeof ProjectCardComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProjectCard: Story = {
  args: {
    href: 'https://jeremy.trpka.me',
    children: 'My Portfolio'
  }
};