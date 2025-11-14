import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

/**
 * @type {RootFooterSocialNetworkIconLink}
 * @summary Root Footer Social Network Link
 * @description These are links to my professional social networks
 * @author J.Trpka<jtrpka0912@gmail.com>
 * @prop {string} id - Used for key props for looping
 * @prop {string} href - The URL for the link
 * @prop {string} label - For the title and aria label purposes since these are icon links
 * @prop {IconDefinition} icon - The icon used for the link
 */
export type RootFooterSocialNetworkIconLink = {
  id: string;
  href: string;
  label: string;
  icon: IconDefinition;
};
