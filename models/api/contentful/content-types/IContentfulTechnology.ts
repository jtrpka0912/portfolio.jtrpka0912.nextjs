import Contentful from 'contentful';

/**
 * @interface IContentfulTechnology
 * @summary Contentful Technology Content Type
 * @author J. Trpka
 */
export type IContentfulTechnology = {
  // omit the name unless needed
  url: Contentful.EntryFields.Text;
  logo: Contentful.Asset;
};