import Contentful from 'contentful';
import { IContentfulNPMPackage } from './IContentfulNPMPackage';
import { IContentfulProjectGalleryItem } from './IContentfulProjectGalleryItem';
import { IContentfulProjectRepo } from './IContentfulProjectRepo';
import { IContentfulTechnology } from './IContentfulTechnology';

/**
 * @interface ContentfulProject
 * @summary Contentful Project Content Type
 * @author J. Trpka
 * @todo Add Resume field between mobileProjectGallery and inDevelopment and when content type is created
 */
export interface IContentfulProject {
  slug: Contentful.EntryFields.Text;
  title: Contentful.EntryFields.Text;
  type: Contentful.EntryFields.Text;
  content: Contentful.EntryFields.Text;
  startDate: Contentful.EntryFields.Date;
  endDate: Contentful.EntryFields.Date;
  repository: Contentful.Entry<IContentfulProjectRepo>;
  technologies: Contentful.Entry<IContentfulTechnology>[];
  npmPackages: Contentful.Entry<IContentfulNPMPackage>[];
  thumbnail: Contentful.Asset;
  desktopProjectGallery: Contentful.Entry<IContentfulProjectGalleryItem>[];
  tabletProjectGallery: Contentful.Entry<IContentfulProjectGalleryItem>[];
  mobileProjectGallery: Contentful.Entry<IContentfulProjectGalleryItem>[];
  inDevelopment: Contentful.EntryFields.Boolean;
  featured: Contentful.EntryFields.Boolean;
};