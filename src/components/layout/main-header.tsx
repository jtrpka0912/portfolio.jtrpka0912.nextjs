import { Link as ChakraLink, Flex } from '@chakra-ui/react';
import { faHouse } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

/**
 * @function MainHeader
 * @summary Main Header Component
 * @description The main header for the NextJS root layout
 * @author J. Trpka <jtrpka0912@gmail.com>
 * @returns { React.ReactNode }
 */
const MainHeader = () => {
  return (
    <Flex as="header" direction="row" justify="space-between" backgroundColor="teal.muted" p="2">
      <ChakraLink asChild>
        <Link href="/">
          <FontAwesomeIcon icon={faHouse} size="lg" widthAuto aria-label="Return to Home Page" />
        </Link>
      </ChakraLink>

      <React.Fragment></React.Fragment>
    </Flex>
  );
};

export default MainHeader;
