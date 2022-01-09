import { GetStaticProps } from "next";
import ProjectList from "../../components/sections/project-list/project-list";

import { getAllProjects } from "../../helpers/project";

import { Project } from "../../models/project";
import { BreadcrumbLink } from '../../models/breadcrumb-link';

import Breadcrumb from "../../components/sections/breadcrumb/breadcrumb";

import ProjectListSkeleton from "../../components/sections/project-list/project-list-skeleton";
import BreadcrumbSkeleton from "../../components/sections/breadcrumb/breadcrumb-skeleton";

/**
 * @interface ProjectsPageProps
 * @summary Project page props
 * @author J. Trpka
 * @property { Project[] } projects
 */
interface ProjectsPageProps {
    projects: Project[]
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
            Projects Page
            <Breadcrumb links={ links } />
            <ProjectList projects={ projects } />
        </div>
    );
};

interface ProjectsStaticProps {
    projects: Project[]
}

export const getStaticProps:GetStaticProps<ProjectsStaticProps> = async() => {
    const projects: Project[] = getAllProjects();

    return {
        props: {
            projects
        }
    };
}

export default ProjectsPage;