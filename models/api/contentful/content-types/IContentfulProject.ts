import Contentful from 'contentful';
import { IContentfulProjectGalleryItem } from './IContentfulProjectGalleryItem';
import { IContentfulProjectPackage } from './IContentfulProjectPackage';
import { IContentfulProjectRepo } from './IContentfulProjectRepo';
import { IContentfulTechnology } from './IContentfulTechnology';

/**
 * @interface ContentfulProject
 * @summary Contentful Project Content Type
 * @author J. Trpka
 */
export interface IContentfulProject {
  title: Contentful.EntryFields.Text;
  type: Contentful.EntryFields.Text;
  content: Contentful.EntryFields.Text;
  startDate: Contentful.EntryFields.Date;
  endDate: Contentful.EntryFields.Date;
  repository: Contentful.Entry<IContentfulProjectRepo>;
  technologies: Contentful.Entry<IContentfulTechnology>[];
  packages: Contentful.Entry<IContentfulProjectPackage>;
  thumbnail: Contentful.Asset;
  desktopProjectGallery: Contentful.Entry<IContentfulProjectGalleryItem>[];
  tabletProjectGallery: Contentful.Entry<IContentfulProjectGalleryItem>[];
  mobileProjectGallery: Contentful.Entry<IContentfulProjectGalleryItem>[];
};