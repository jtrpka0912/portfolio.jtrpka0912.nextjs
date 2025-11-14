import PortfolioLink from "@/components/common/portfolio-link/portfolio-link";
import { Flex, List } from "@chakra-ui/react";
import { RootHeaderNavigationLink, RootHeaderNavigationProps } from "../root-header.types";

/**
 * @function NavigationDesktop
 * @summary Navigation Component for the Root Header on Desktop Screens
 * @description A simple horizontal list of navigation links for the portfolio website. This is only for large screens.
 * @author J. Trpka <jtrpka0912@gmail.com>
 * @returns {React.ReactNode}
 */
const NavigationDesktop = ({
  links
}: RootHeaderNavigationProps): React.ReactNode => {
  return (
    <Flex hideBelow="lg" direction="row-reverse" gap="3">
      {links.map((link: RootHeaderNavigationLink) => {
        return (
          <PortfolioLink key={link.id} color="blue.subtle" href={link.href}>{link.children}</PortfolioLink>
        );
      })}
    </Flex>

  );
};

export default NavigationDesktop;