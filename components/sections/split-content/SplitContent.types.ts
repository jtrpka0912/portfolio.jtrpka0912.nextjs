/**
 * @type
 * @name SplitContentProps
 * @summary Split content component props
 * @author J. Trpka
 * @property { string | undefined } ariaLabel
 * @property { string } image
 * @property { string } altText
 * @property { boolean | undefined } flip - Swap the image and text the other way on non-mobile screens
 * @property { React.ReactNode } children
 */
export type SplitContentProps = {
  ariaLabel?: string;
  image: string;
  altText : string;
  flip?: boolean;
  children: React.ReactNode;
}