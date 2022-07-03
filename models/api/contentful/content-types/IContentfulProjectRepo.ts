import Contentful from 'contentful';

/**
 * @interface ContentfulProjectRepo
 * @summary Contentful Project Repo Content Type
 * @author J. Trpka
 */
export interface IContentfulProjectRepo {
  // omit the name unless needed
  github: Contentful.EntryFields.Text;
  gitlab: Contentful.EntryFields.Text;
  bitBucket: Contentful.EntryFields.Text; 
};