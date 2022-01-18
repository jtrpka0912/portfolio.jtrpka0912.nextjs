import { GetStaticProps } from "next";
import ProjectList from "../../components/sections/project-list/project-list";

import { getAllProjects } from "../../helpers/project";

import { Project } from "../../models/project";
import { BreadcrumbLink } from '../../models/breadcrumb-link';

import Breadcrumb from "../../components/sections/breadcrumb/breadcrumb";

import ProjectListSkeleton from "../../components/sections/project-list/project-list-skeleton";
import BreadcrumbSkeleton from "../../components/sections/breadcrumb/breadcrumb-skeleton";
import Search from "../../components/sections/search/search";
import { Technology } from "../../models/technology";
import { getAllTechnologies } from "../../helpers/technology";

/**
 * @interface ProjectsPageProps
 * @summary Project page props
 * @author J. Trpka
 * @property { Project[] } projects
 * @property { Technology[] } technologies
 */
interface ProjectsPageProps {
    projects: Project[]
    technologies: Technology[]
}

/**
 * @function ProjectsPage
 * @summary Projects page component
 * @description The page that lists all projects.
 * @author J. Trpka
 * @todo Create search skeleton
 * @param { ProjectsPageProps } props 
 * @returns 
 */
const ProjectsPage = (props: ProjectsPageProps) => {
    const { projects, technologies } = props;

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
            <Search technologies={ technologies } />
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
    projects: Project[]
    technologies: Technology[]
}

export const getStaticProps:GetStaticProps<ProjectsStaticProps> = async() => {
    const projects: Project[] = getAllProjects();
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