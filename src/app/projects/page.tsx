import { ProjectCardFeaturedTechnology } from "@/components/common/project-card/project-card.types";
import ProjectListPage from "@/components/pages/projects/project-list-page/project-list-page";
import { ProjectSummary } from "@/components/pages/projects/project-list-page/project-list-page.types";
import { TypeProjectSkeleton, TypeTechnologyFields, TypeTechnologySkeleton } from "@/models/contentful/generated";
import contentful from "@/services/contentful";
import { EntryCollection } from "contentful";

/**
 * @function ProjectListPageRenderer
 * @summary Project List Page Renderer Server-Side Component
 * @description Retrieve and list out the projects for the project list page component
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @returns {React.ReactNode}
 */
const ProjectListPageRenderer = async (): Promise<React.ReactNode> => {
  const contentfulProjects: EntryCollection<TypeProjectSkeleton> = await contentful.getEntries<TypeProjectSkeleton>({
    content_type: 'project'
  });

  return (
    <ProjectListPage projects={[]} />
  );
};

export default ProjectListPageRenderer;