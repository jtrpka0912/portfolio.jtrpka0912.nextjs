import { GetStaticProps } from "next";

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

const ProjectsPage = (props: ProjectsPageProps) => {
    const { projects } = props;
    
    return (
        <div className="page projects">
            Projects Page
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