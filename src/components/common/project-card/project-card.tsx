import { Box, Card, Flex } from "@chakra-ui/react";
import React from "react";
import { ProjectCardProps } from "./project-card.types";
import PortfolioImage from "../portfolio-image/portfolio-image";
import PortfolioLink from "../portfolio-link/portfolio-link";

/**
 * @const {string} PLACEHOLDER_PATH
 * @description A defined path to the placeholder thumbnail image
 * @author J. Trpka<jtrpka0912@gmail.com>
 */
const PLACEHOLDER_PATH: string = '/assets/images/placeholder-thumbnail.png';

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
  thumbnail = PLACEHOLDER_PATH,
  altThumbnail = `${name} Thumbnail`,
  featuredTechnologies
}: ProjectCardProps): React.ReactNode => {

  const technologyThumbnailSize: number = 35;

  return (
    <Card.Root w="300px" size="sm" variant="elevated">
      <Card.Header>
        <Card.Title>{name}</Card.Title>
      </Card.Header>

      <Box position="relative" height="250px">
        <PortfolioImage src={thumbnail} alt={altThumbnail} fill />
      </Box>

      <Card.Body>
        <Flex as="section" gap="3" width="100%" p="2" justify="center">
          {featuredTechnologies
            .slice(0, 5) // Only show up to 5 technologies
            .map((technology) => {
              const logo: string = technology.logo ? technology.logo : PLACEHOLDER_PATH;

              return (
                <PortfolioLink key={technology.name} href={technology.url} target="_blank">
                  <PortfolioImage src={logo} alt={`Logo of ${technology.name}`} width={technologyThumbnailSize} height={technologyThumbnailSize} display="inline-block" borderColor="black" borderWidth="1px" borderStyle="solid" shadow="lg" shadowColor="black" />
                </PortfolioLink>
              );
            })}
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};

export default ProjectCard;