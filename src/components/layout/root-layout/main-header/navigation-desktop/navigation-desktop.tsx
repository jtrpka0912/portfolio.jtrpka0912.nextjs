import PortfolioLink from "@/components/common/portfolio-link/portfolio-link";
import { List } from "@chakra-ui/react";

/**
 * @function NavigationDesktop
 * @summary Navigation Component for the Root Header on Desktop Screens
 * @description A simple horizontal list of navigation links for the portfolio website. This is only for large screens.
 * @author J. Trpka <jtrpka0912@gmail.com>
 * @returns {React.ReactNode}
 */
const NavigationDesktop = (): React.ReactNode => {
  return (
    <List.Root hideBelow="lg" variant="plain" colorPalette="blue">
      <List.Item>
        <PortfolioLink color="blue.subtle" href="/">Home</PortfolioLink>
      </List.Item>
    </List.Root>
  );
};

export default NavigationDesktop;