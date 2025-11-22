import type { ProjectCardProps } from '@/components/common/project-card/project-card.types';
import { TypeProject, TypeProjectSkeleton } from '@/models/contentful/generated';
import { Entry } from 'contentful';

/**
 * @type {ProjectListPageProps}
 * @summary Project List Page Component Props
 * @description The props for the project list page component.
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @prop {Entry<TypeProjectSkeleton>} projects - An array of projects
 */
export type ProjectListPageProps = {
  projects: Entry<TypeProjectSkeleton>[];
};
