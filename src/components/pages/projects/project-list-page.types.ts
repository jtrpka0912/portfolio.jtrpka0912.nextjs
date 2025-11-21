import { TypeProject } from '@/models/contentful';

/**
 * @type {ProjectListPageProps}
 * @summary Project List Page Component Props
 * @description The props for the project list page component.
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @prop {object[]} projects - An array of projects
 */
export type ProjectListPageProps = {
  projects: TypeProject[];
};
