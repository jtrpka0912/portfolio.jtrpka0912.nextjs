/**
 * @interface IImage
 * @description An image with alt text and an optional description
 * @author J. Trpka
 * @property { string } path - Path of the image
 * @property { string } altText - Alt text for the image
 */
export interface IImage {
  path: string;
  altText: string;
}