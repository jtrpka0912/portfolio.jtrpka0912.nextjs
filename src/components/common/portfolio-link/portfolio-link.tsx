import { Link as ChakraLink } from "@chakra-ui/react"
import { PortfolioLinkProps } from "./portfolio-link.types";
import NextJSLink from "next/link";

/**
 * @function PortfolioLink
 * @summary A portfolio link component
 * @description A helper component that combines the styling of Chakra link with NextJS link components.
 * @author J. Trpka <jtrpka0912@gmail.com>
 * @returns {React.ReactNode}
 */
const PortfolioLink = ({
  href,
  children
}: PortfolioLinkProps): React.ReactNode => {
  return (
    <ChakraLink asChild>
      <NextJSLink href={href}>{children}</NextJSLink>
    </ChakraLink>
  );
};

export default PortfolioLink;