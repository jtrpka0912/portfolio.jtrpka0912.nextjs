import { Card } from "@chakra-ui/react";
import React from "react";
import { ProjectCardProps } from "./project-card.types";

/**
 * @function ProjectCard
 * @summary Project Card Component
 * @description An individual project display for the project listing page.
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @returns {React.ReactNode}
 */
const ProjectCard = ({
  id,
  name,
  thumbnail,
  featuredTechnologies
}: ProjectCardProps): React.ReactNode => {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Hello, World!</Card.Title>
      </Card.Header>
    </Card.Root>
  );
};

export default ProjectCard;