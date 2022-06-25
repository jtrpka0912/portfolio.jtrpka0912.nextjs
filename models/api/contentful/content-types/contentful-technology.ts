import Contentful from 'contentful';

/**
 * @type
 * @name ContentfulTechnology
 * @summary Contentful Technology Content Type
 * @author J. Trpka
 */
export type ContentfulTechnology = {
  // omit the name unless needed
  url: Contentful.EntryFields.Text;
  logo: Contentful.Asset;
};