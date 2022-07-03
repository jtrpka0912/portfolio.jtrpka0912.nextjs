import Contentful from 'contentful';
import { IContentfulNPMPackage } from './IContentfulNPMPackage';

/**
 * @interface IContentfulProjectPackage
 * @summary Contentful Project Package Item
 * @author J. Trpka
 */
export interface IContentfulProjectPackage {
  // omit the name unless needed
  npm: Contentful.Entry<IContentfulNPMPackage>[];
}