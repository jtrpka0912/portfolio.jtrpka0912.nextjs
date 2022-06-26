import Contentful from 'contentful';

/**
 * @type
 * @name ContentfulProjectGalleryItem
 * @summary Contentful Project Gallery Item Content Type
 * @description The content type for the mobile, tablet, and desktop gallery items.
 * @author J. Trpka
 */
export type ContentfulProjectGalleryItem = {
  // omit the name unless needed
  image: Contentful.Asset;
  altText: Contentful.EntryFields.Text;
  description: Contentful.EntryFields.Text;
};