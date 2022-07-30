import Contentful from 'contentful';

/**
 * @interface IContentfulGitRepoLink
 * @summary Contentful Git Repo Link
 * @author J. Trpka
 */
export interface IContentfulGitRepoLink {
  label: Contentful.EntryFields.Text;
  url: Contentful.EntryFields.Text;
}