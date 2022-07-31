// NextJS
import { GetStaticProps } from "next";

// Components
import ProjectList from "../../components/sections/project-list/ProjectList";
import Breadcrumb from "../../components/sections/breadcrumb/breadcrumb";
import ProjectListSkeleton from "../../components/sections/project-list/ProjectList.skeleton";
import BreadcrumbSkeleton from "../../components/sections/breadcrumb/breadcrumb-skeleton";

// Models
import { IProject } from "../../models/IProject";
import { BreadcrumbLink } from "../../components/sections/breadcrumb/breadcrumb";
import { fetchProjects } from "../../api/portfolio/projects";
import { ContentfulFactory } from "../../models/api/contentful/ContentfulFactory";
import { retrieveProjects } from "../../api/contentful/projects";
import { Entry, EntryCollection } from "contentful";
import { IContentfulProject } from "../../models/api/contentful/content-types/IContentfulProject";

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
  try {
    /**
     * @constant { ContentfulFactory } contentfulFactory
     * @summary Contentful Factory object
     * @description Convert Contentful entries to Portfolio objects
     * @author J. Trpka 
     */
    const contentfulFactory: ContentfulFactory = new ContentfulFactory();
    
    /**
     * @constant { Promise<Entry<IContentfulProject[]>> } contentfulProjectResponse
     * @summary Contentful projects response
     * @description Response from the Contentful API to retrieve all projects
     * @author J. Trpka
     */
    const contentfulProjectResponse: EntryCollection<IContentfulProject> = await retrieveProjects();

    return {
      props: {
        projects: contentfulProjectResponse.items.map(
          (contentfulProject: Entry<IContentfulProject>) => contentfulFactory.createProject(contentfulProject)
        )
      }
    };
  } catch(error) {
    // ERROR: Brings up unhandled runtime error with loading the 404.js file.
    return {
      notFound: true
    }
  }
}

export default ProjectsPage;