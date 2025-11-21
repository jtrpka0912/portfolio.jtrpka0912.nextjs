import type { ProjectCardProps } from '@/components/common/project-card/project-card.types';

/**
 * @type {ProjectListPageProps}
 * @summary Project List Page Component Props
 * @description The props for the project list page component.
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @prop {ProjectSummary[]} projects - An array of projects
 */
export type ProjectListPageProps = {
  projects: ProjectSummary[];
};

/**
 * @type {ProjectSummary}
 * @summary Project Summary Type
 * @description A summary of the project from Contentful.
 * @implements {ProjectCardProps} Its basically the same as the Project Card props
 * @author J. Trpka<jtrpka0912@gmail.com>
 */
export type ProjectSummary = ProjectCardProps;
