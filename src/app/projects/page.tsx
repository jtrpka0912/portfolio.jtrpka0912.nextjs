import ProjectListPage from "@/components/pages/projects/project-list-page";

/**
 * @function ProjectListPageRenderer
 * @summary Project List Page Renderer Server-Side Component
 * @description Retrieve and list out the projects for the project list page component
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @returns {React.ReactNode}
 */
const ProjectListPageRenderer = async (): Promise<React.ReactNode> => {
  return (
    <ProjectListPage projects={[]} />
  );
};

export default ProjectListPageRenderer;