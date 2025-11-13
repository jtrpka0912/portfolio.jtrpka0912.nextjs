import { Link as ChakraLink, Flex, Icon } from '@chakra-ui/react';
import { faHouse } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import NavigationMobile from './navigation-mobile/navigation-mobile';
import NavigationDesktop from './navigation-desktop/navigation-desktop';
import { RootHeaderNavigationLink } from './root-header.types';

/**
 * @function RootHeader
 * @summary Root Header Component
 * @description The header for the NextJS root layout
 * @author J. Trpka <jtrpka0912@gmail.com>
 * @returns { React.ReactNode }
 */
const RootHeader = (): React.ReactNode => {
  const navigationLinks: RootHeaderNavigationLink[] = [
    { id: 'home', href: '/', children: 'Home' }
  ];

  return (
    <Flex as="header" colorPalette="blue" bgColor="blue.solid" direction="row" justify="space-between" alignItems="center" py="2" px="3">
      <ChakraLink asChild color="blue.subtle">
        <Link href="/">
          <Icon color="blue.subtle">
            <FontAwesomeIcon icon={faHouse} size="lg" widthAuto aria-label="Return to Home Page" />
          </Icon>

        </Link>
      </ChakraLink>

      <React.Fragment>
        <NavigationDesktop />
        <NavigationMobile />
      </React.Fragment>
    </Flex>
  );
};

export default RootHeader;
