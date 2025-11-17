import { Card, Heading } from "@chakra-ui/react";

/**
 * @function ProjectCard
 * @summary Project Card Component
 * @description An individual project display for the project listing page.
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @returns {React.ReactNode}
 */
const ProjectCard = (): React.ReactNode => {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Hello, World!</Card.Title>
      </Card.Header>
    </Card.Root>
  );
};

export default ProjectCard;