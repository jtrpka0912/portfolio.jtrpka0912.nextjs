'use client'

import RootLayout from "@/components/layout/root-layout/root-layout";
import { Center, EmptyState, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { ProjectListPageProps } from "./project-list-page.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "@/components/common/project-card/project-card";
import { TypeProjectSkeleton, TypeTechnologySkeleton } from "@/models/contentful/generated";
import { Entry } from "contentful";
import { ProjectCardFeaturedTechnology } from "@/components/common/project-card/project-card.types";

/**
 * @function NoProjectsEmptyState
 * @summary No projects empty state component
 * @description Show this empty state if no projects were found from the App Router page.
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @returns {React.ReactNode}
 */
const NoProjectsEmptyState = (): React.ReactNode => {
  return (
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
  );
};

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

          <Grid templateColumns="repeat(4, 1fr)">
            {projects.map((project: Entry<TypeProjectSkeleton>) => {
              const technologies: Entry<TypeTechnologySkeleton>[] = project.fields.technologies !== undefined ?
                project.fields.technologies as Entry<TypeTechnologySkeleton>[] : [];

              return (
                <ProjectCard
                  key={project.fields.slug}
                  name={project.fields.title}
                  slug={project.fields.slug}
                  inDevelopment={project.fields.inDevelopment}
                  featuredTechnologies={
                    technologies
                      .slice(0, 5)
                      .map((technology: Entry<TypeTechnologySkeleton>) => {
                        const featuredTechnology: ProjectCardFeaturedTechnology = {
                          name: technology.fields.name as string,
                          url: technology.fields.url as string,
                          // BUGFIX: The "fields" for logo DOES exist but the Contentful typing is broke.
                          // Its suggested to use `withoutUnresolvableLinks`, but no difference.
                          logo: technology.fields.logo ? `https:${technology.fields.logo.fields.file.url}` : undefined
                        }

                        return featuredTechnology;
                      })
                  }
                />
              );
            })}

          </Grid>
        </React.Fragment>
      ) : (
        <NoProjectsEmptyState />
      )}
    </RootLayout>
  );
};

export default ProjectListPage;