import Contentful from 'contentful';
import { ContentfulProjectGalleryItem } from './contentful-project-gallery-item';
import { ContentfulProjectPackage } from './contentful-project-package';
import { ContentfulProjectRepo } from './contentful-project-repo';
import { ContentfulTechnology } from './contentful-technology';

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
  technologies: Contentful.Entry<ContentfulTechnology>[];
  packages: Contentful.Entry<ContentfulProjectPackage>;
  thumbnail: Contentful.Asset;
  desktopProjectGallery: Contentful.Entry<ContentfulProjectGalleryItem>[];
  tabletProjectGallery: Contentful.Entry<ContentfulProjectGalleryItem>[];
  mobileProjectGallery: Contentful.Entry<ContentfulProjectGalleryItem>[];
};