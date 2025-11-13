/**
 * @type {RootHeaderNavigationLink}
 * @summary Root Header Navigation Link
 * @description The composition of a navigation link for the root header.
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @prop {string} id - This is also used for the label property for the <Menu.Item> component
 * @prop {string} href - The URL for the Link
 * @prop {React.ReactNode} children - The content of the link
 */
export type RootHeaderNavigationLink = {
  id: string;
  href: string;
  children: React.ReactNode;
};
