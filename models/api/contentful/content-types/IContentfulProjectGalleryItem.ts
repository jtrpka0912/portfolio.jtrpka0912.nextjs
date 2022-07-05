import Contentful from 'contentful';

/**
 * @interface IContentfulProjectGalleryItem
 * @summary Contentful Project Gallery Item Content Type
 * @description The content type for the mobile, tablet, and desktop gallery items.
 * @author J. Trpka
 */
export interface IContentfulProjectGalleryItem {
  image: Contentful.Asset;
  description: Contentful.EntryFields.Text;
};