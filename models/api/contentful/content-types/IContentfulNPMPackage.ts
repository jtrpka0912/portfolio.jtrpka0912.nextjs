import Contentful from 'contentful';

/**
 * @type
 * @name IContentfulNPMPackage
 * @summary Contentful NPM Package Content Type
 * @author J. Trpka
 */
export interface IContentfulNPMPackage {
  name: Contentful.EntryFields.Text;
  slug: Contentful.EntryFields.Text;
};