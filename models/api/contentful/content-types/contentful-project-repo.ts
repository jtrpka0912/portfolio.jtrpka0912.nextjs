import Contentful from 'contentful';

/**
 * @type
 * @name ContentfulProjectRepo
 * @summary Contentful Project Repo Content Type
 * @author J. Trpka
 */
export type ContentfulProjectRepo = {
  // omit the name unless needed
  github: Contentful.EntryFields.Text;
  gitlab: Contentful.EntryFields.Text;
  bitBucket: Contentful.EntryFields.Text; 
};