'use client'

import { Box } from "@chakra-ui/react"
import { RootLayoutProps } from "./root-layout.types";
import React from "react";
import RootHeader from "./root-header/root-header";
import RootFooter from "./root-footer/root-footer";

/**
 * @function RootLayout
 * @summary Root Layout Component
 * @description This is the HTML markup structure of the root layout component.
 * @author J.Trpka<jtrpka0912@gmail.com>
 * @prop {RootLayoutProps} props
 * @returns {React.ReactNode}
 */
const RootLayout = ({
  children
}: RootLayoutProps): React.ReactNode => {
  return (
    <React.Fragment>
      <RootHeader />
      <Box as="main">
        {children}
      </Box>
      <RootFooter />
    </React.Fragment>

  );
};

export default RootLayout;