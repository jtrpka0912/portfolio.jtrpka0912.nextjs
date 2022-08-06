/**
 * @type
 * @name SplitContentProps
 * @summary Split content component props
 * @author J. Trpka
 * @property { string | undefined } ariaLabel
 * @property { string } image
 * @property { string } altText
 * @property { React.ReactNode } children
 */
export type SplitContentProps = {
  ariaLabel?: string;
  image: string;
  altText : string;
  children: React.ReactNode;
}