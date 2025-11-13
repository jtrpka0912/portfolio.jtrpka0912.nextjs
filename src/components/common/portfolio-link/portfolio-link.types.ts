import { LinkProps } from '@chakra-ui/react';

/**
 * @type {PortfolioLinkProps}
 * @summary Portfolio Link Component Props
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @prop {string} href - The URL the link will go to
 * @prop {React.ReactNode} children - The content of the link
 */
export type PortfolioLinkProps = LinkProps & {
  href: string;
  children: React.ReactNode;
};
