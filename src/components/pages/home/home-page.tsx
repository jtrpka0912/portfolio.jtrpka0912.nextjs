'use client'

import RootLayout from "@/components/layout/root-layout/root-layout";
import { Heading } from "@chakra-ui/react";

/**
 * @function HomePage
 * @summary Home Page UI Component
 * @description The home page UI component
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @returns {React.ReactNode}
 */
const HomePage = (): React.ReactNode => {
  return (
    <RootLayout>
      <Heading>Hello World</Heading>
    </RootLayout>
  );
};

export default HomePage;