import RootLayout from "@/components/layout/root-layout/root-layout";
import { Heading } from "@chakra-ui/react";
import React from "react";

/**
 * @function ProjectListPage
 * @summary Project List Page Component
 * @description Display a list of projects that I worked on.
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @returns {React.ReactNode}
 */
const ProjectListPage = (): React.ReactNode => {
  return (
    <RootLayout>
      <Heading as="h1">Projects</Heading>
    </RootLayout>
  );
};

export default ProjectListPage;