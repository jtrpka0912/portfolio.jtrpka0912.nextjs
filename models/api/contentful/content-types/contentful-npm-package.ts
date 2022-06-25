import Contentful from 'contentful';

/**
 * @type
 * @name ContentfulNPMPackage
 * @summary Contentful NPM Package Content Type
 * @author J. Trpka
 */
export type ContentfulNPMPackage = {
  name: Contentful.EntryFields.Text;
  slug: Contentful.EntryFields.Text;
};