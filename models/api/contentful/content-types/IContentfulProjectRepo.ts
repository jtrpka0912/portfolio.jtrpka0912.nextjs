import Contentful from 'contentful';
import { IContentfulGitRepoLink } from './IContentfulGitRepoLink';

/**
 * @interface ContentfulProjectRepo
 * @summary Contentful Project Repo Content Type
 * @author J. Trpka
 */
export interface IContentfulProjectRepo {
  // omit the name unless needed
  github: Contentful.Entry<IContentfulGitRepoLink>;
  gitlab: Contentful.Entry<IContentfulGitRepoLink>;
  bitBucket: Contentful.Entry<IContentfulGitRepoLink>; 
};