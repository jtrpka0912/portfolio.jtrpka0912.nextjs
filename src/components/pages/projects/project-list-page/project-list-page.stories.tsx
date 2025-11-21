import type { Meta, StoryObj } from '@storybook/nextjs';

import ProjectListPageComponent from './project-list-page';

const meta = {
  component: ProjectListPageComponent,
  title: 'Portfolio/Page/Projects/Project List'
} satisfies Meta<typeof ProjectListPageComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EmptyProjectListPage: Story = {
  args: { projects: [] }
};