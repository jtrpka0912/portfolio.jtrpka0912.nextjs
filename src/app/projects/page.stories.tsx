import type { Meta, StoryObj } from '@storybook/nextjs';

import ProjectListPageComponent from './page';

const meta = {
  component: ProjectListPageComponent,
  title: 'Portfolio/Page/ProjectList'
} satisfies Meta<typeof ProjectListPageComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProjectListPage: Story = {};