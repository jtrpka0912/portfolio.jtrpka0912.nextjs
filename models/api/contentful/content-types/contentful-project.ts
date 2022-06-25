import Contentful from 'contentful';
import { ContentfulProjectRepo } from './contentful-project-repo';

/**
 * @type
 * @name ContentfulProject
 * @summary Contentful Project Content Type
 * @author J. Trpka
 */
export type ContentfulProject = {
  title: Contentful.EntryFields.Text;
  type: Contentful.EntryFields.Text;
  content: Contentful.EntryFields.Text;
  startDate: Contentful.EntryFields.Date;
  endDate: Contentful.EntryFields.Date;
  repository: Contentful.Entry<ContentfulProjectRepo>;
  technologies: any;
  packages: any;
  thumbnail: Contentful.Asset;
  desktopProjectGallery: any;
  tabletProjectGallery: any;
  mobileProjectGallery: any;
};