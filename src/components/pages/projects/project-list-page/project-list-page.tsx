'use client'

import RootLayout from "@/components/layout/root-layout/root-layout";
import { Center, EmptyState, Grid, Heading, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { ProjectListPageProps } from "./project-list-page.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

/**
 * @function ProjectListPage
 * @summary Project List Page Component
 * @description Display a list of projects that I worked on.
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @returns {React.ReactNode}
 */
const ProjectListPage = ({
  projects
}: ProjectListPageProps): React.ReactNode => {
  return (
    <RootLayout>
      {projects.length > 0 ? (
        <React.Fragment>
          <Heading as="h1">Projects</Heading>

          <Grid templateColumns="repeat(3 1fr)">

          </Grid>
        </React.Fragment>
      ) : (
        <Center>
          <EmptyState.Root>
            <EmptyState.Content gap="4">
              <EmptyState.Indicator>
                <FontAwesomeIcon icon={faCircleXmark} />
              </EmptyState.Indicator>

              <EmptyState.Title>
                <Heading>No Projects Found</Heading>
              </EmptyState.Title>

              <EmptyState.Description textAlign="center">
                <Text mb="1">There are no projects found in my portfolio.</Text>
                <Text>This is likely an error and I suggest to contact me to troubleshoot the problem.</Text>
              </EmptyState.Description>
            </EmptyState.Content>
          </EmptyState.Root>
        </Center>
      )}


    </RootLayout>
  );
};

export default ProjectListPage;