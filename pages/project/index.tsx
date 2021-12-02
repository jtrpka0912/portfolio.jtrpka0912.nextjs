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
    console.info('Projects', props.projects);
    
    return (
        <div>Projects Page</div>
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