import { GetStaticProps } from "next";
import ProjectList from "../../components/sections/project-list/project-list";

import { getAllProjects } from "../../helpers/project";

import { Project } from "../../models/project";

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

    return (
        <div className="page projects">
            Projects Page
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