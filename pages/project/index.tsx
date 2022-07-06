// NextJS
import { GetStaticProps } from "next";

// Components
import ProjectList from "../../components/sections/project-list/project-list";
import Breadcrumb from "../../components/sections/breadcrumb/breadcrumb";
import ProjectListSkeleton from "../../components/sections/project-list/project-list-skeleton";
import BreadcrumbSkeleton from "../../components/sections/breadcrumb/breadcrumb-skeleton";

// Models
import { IProject } from "../../models/IProject";
import { BreadcrumbLink } from "../../components/sections/breadcrumb/breadcrumb";
import { fetchProjects } from "../../api/portfolio/projects";

/**
 * @interface ProjectsPageProps
 * @summary Project page props
 * @author J. Trpka
 * @property { Project[] } projects
 * @property { Technology[] } technologies
 */
interface ProjectsPageProps {
  projects: IProject[]
}

/**
 * @function ProjectsPage
 * @summary Projects page component
 * @description The page that lists all projects.
 * @author J. Trpka
 * @param { ProjectsPageProps } props 
 * @returns 
 */
const ProjectsPage = (props: ProjectsPageProps) => {
  const { projects } = props;

  if (!projects) {
    return (
      <div className="page projects">
        <BreadcrumbSkeleton />
        <ProjectListSkeleton />
      </div>
    );
  }

  /**
   * @var { BreadcrumbLink[] } links
   * @description An array of breadcrumb links to build the breadcrumb component
   * @author J. Trpka
   */
  const links: BreadcrumbLink[] = [
    { text: 'Projects', url: '/project' }
  ];

  return (
    <div className="page projects">
      <Breadcrumb links={links} />
      <ProjectList projects={projects} />
    </div>
  );
};

/**
 * @interface ProjectStaticProps
 * @summary Project page static props
 * @description The props sent to the project list page.
 * @author J. Trpka
 * @property { Project[] } projects
 */
interface ProjectsStaticProps {
  projects: IProject[]
}

/**
 * @async
 * @function getStaticProps
 * @summary Props for the static generated page
 * @description Send the page props to the static generated page
 * @author J. Trpka
 * @todo Figure out the return type
 * @returns 
 */
export const getStaticProps: GetStaticProps<ProjectsStaticProps> = async () => {
  /**
   * @async
   * @constant { IProject[] } projects
   * @summary Fetched projects
   * @description Take the fetched projects and list them on this page.
   * @author J. Trpka
   */
  const projects: IProject[] = await fetchProjects();

  return {
    props: {
      projects,
    }
  };
}

export default ProjectsPage;