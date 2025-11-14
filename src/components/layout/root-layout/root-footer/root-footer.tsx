import { Center, Flex, Icon } from "@chakra-ui/react"
import { RootFooterSocialNetworkIconLink } from "./root-footer.types";
import { faFacebook, faGithub, faLinkedinIn, faXing, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import PortfolioLink from "@/components/common/portfolio-link/portfolio-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@/components/nextjs/ui/tooltip";

/**
 * @function RootFooter
 * @summary Root Layout Footer Component
 * @description The footer for the root layout.
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @returns {React.ReactNode}
 */
const RootFooter = (): React.ReactNode => {
  /**
   * @const {RootFooterSocialNetworkIconLink[]} socialNetworkLinks
   * @summary Array of Professional Social Network Links + Email
   * @author J. Trpka<jtrpka0912@gmail.com> 
   */
  const socialNetworkLinks: RootFooterSocialNetworkIconLink[] = [
    { id: 'GitHub', href: 'https://www.github.com/jtrpka0912', label: 'GitHub Profile', icon: faGithub },
    { id: 'LinkedIn', href: 'https://www.linkedin.com/in/jeremy-trpka', label: 'LinkedIn Profile', icon: faLinkedinIn },
    { id: 'Facebook', href: 'https://www.facebook.com/jeremy.trpka.77', label: 'Facebook Profile', icon: faFacebook },
    { id: 'X', href: 'https://www.x.com/jtrpka0912', label: 'X (formerly Twitter) Profile', icon: faXTwitter },
    { id: 'Email', href: 'mailto:jtrpka0912@gmail.com', label: 'Email to Contact Me', icon: faEnvelope }
  ];

  return (
    <Center as="footer" colorPalette="blue" bgColor="blue.solid" py="10" color="blue.subtle">
      <Flex direction={{ lgDown: 'column', lg: 'row' }} gap="5">
        {socialNetworkLinks.map((link: RootFooterSocialNetworkIconLink) => {
          return (
            <Tooltip key={link.id} showArrow content={link.label}>
              <PortfolioLink href={link.href} title={link.label} aria-label={link.label}>
                <Icon colorPalette="blue" color="blue.subtle">
                  <FontAwesomeIcon icon={link.icon} size="2xl" aria-label={link.label} />
                </Icon>
              </PortfolioLink>
            </Tooltip>
          );
        })}
      </Flex>
    </Center>
  );
};

export default RootFooter;