// NextJS
import { GetStaticProps } from "next";

// Components
import ProjectList from "../../components/sections/project-list/project-list";
import Breadcrumb from "../../components/sections/breadcrumb/breadcrumb";
import ProjectListSkeleton from "../../components/sections/project-list/project-list-skeleton";
import BreadcrumbSkeleton from "../../components/sections/breadcrumb/breadcrumb-skeleton";

// Models
import { Technology } from "../../models/technology";
import { IProject } from "../../models/IProject";
import { BreadcrumbLink } from "../../components/sections/breadcrumb/breadcrumb";

// Helpers
import { getAllTechnologies } from "../../helpers/technology";
import { getAllProjects } from "../../helpers/project";

/**
 * @interface ProjectsPageProps
 * @summary Project page props
 * @author J. Trpka
 * @property { Project[] } projects
 * @property { Technology[] } technologies
 */
interface ProjectsPageProps {
    projects: IProject[]
    technologies: Technology[]
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

    if(!projects) {
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
            <Breadcrumb links={ links } />
            <ProjectList projects={ projects } />
        </div>
    );
};

/**
 * @interface ProjectStaticProps
 * @summary Project page static props
 * @description The props sent to the project list page.
 * @author J. Trpka
 * @property { Project[] } projects
 * @property { Technology[] } technologies
 */
interface ProjectsStaticProps {
    projects: IProject[]
    technologies: Technology[]
}

export const getStaticProps:GetStaticProps<ProjectsStaticProps> = async() => {
    const projects: IProject[] = getAllProjects();
    // TODO: Maybe order alphabetically by title
    const technologies: Technology[] = await getAllTechnologies();

    return {
        props: {
            projects,
            technologies
        }
    };
}

export default ProjectsPage;