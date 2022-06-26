import Contentful from 'contentful';
import { ContentfulNPMPackage } from './contentful-npm-package';

export type ContentfulProjectPackage = {
  // omit the name unless needed
  npm: Contentful.Entry<ContentfulNPMPackage>[];
}