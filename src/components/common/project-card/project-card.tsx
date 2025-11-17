import { Box, Card } from "@chakra-ui/react";
import React from "react";
import { ProjectCardProps } from "./project-card.types";
import PortfolioImage from "../portfolio-image/portfolio-image";

/**
 * @function ProjectCard
 * @summary Project Card Component
 * @description An individual project display for the project listing page.
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @prop {ProjectCardProps} props - Props for the component
 * @returns {React.ReactNode}
 */
const ProjectCard = ({
  id,
  name,
  thumbnail = '/assets/images/placeholder-thumbnail.png',
  altThumbnail = `${name} Thumbnail`,
  featuredTechnologies
}: ProjectCardProps): React.ReactNode => {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>{name}</Card.Title>
        <Box position="relative" height="250px">
          <PortfolioImage src={thumbnail} alt={altThumbnail} fill />
        </Box>
      </Card.Header>
    </Card.Root>
  );
};

export default ProjectCard;