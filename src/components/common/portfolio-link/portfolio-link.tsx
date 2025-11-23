'use client'

import { Link as ChakraLink } from "@chakra-ui/react"
import { PortfolioLinkProps } from "./portfolio-link.types";
import NextJSLink from "next/link";

/**
 * @function PortfolioLink
 * @summary A portfolio link component
 * @description A helper component that combines the styling of Chakra link with NextJS link components.
 * @link https://www.chakra-ui.com/docs/components/link
 * @link https://nextjs.org/docs/app/api-reference/components/link
 * @author J. Trpka <jtrpka0912@gmail.com>
 * @prop {PortfolioLinkProps} props - Props for the Component
 * @returns {React.ReactNode}
 */
const PortfolioLink = ({
  href,
  children,
  ...chakraUI
}: PortfolioLinkProps): React.ReactNode => {
  return (
    <ChakraLink asChild {...chakraUI}>
      <NextJSLink href={href}>{children}</NextJSLink>
    </ChakraLink>
  );
};

export default PortfolioLink;