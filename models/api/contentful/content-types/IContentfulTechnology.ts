import Contentful from 'contentful';

/**
 * @interface IContentfulTechnology
 * @summary Contentful Technology Content Type
 * @author J. Trpka
 */
export interface IContentfulTechnology {
  name: Contentful.EntryFields.Text;
  url: Contentful.EntryFields.Text;
  logo: Contentful.Asset;
};