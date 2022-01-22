// NextJS
import { GetStaticProps } from "next";

// Models
import { Project } from "../../models/project";
import { Technology } from "../../models/technology";

/**
 * @function ProjectSearchPage
 * @summary Project search page component
 * @description The search results page for filtering projects.
 * @author J. Trpka
 * @returns { JSX }
 */
const ProjectSearchPage = () => {
    return (
        <div></div>
    );
};

/**
 * @interface ProjectSearchPageProps
 * @summary Project search page static props
 * @author J. Trpka
 * @property { Project[] } projects
 * @property { Technology[] } technologies
 */
 interface ProjectSearchPageProps {
    projects: Project[]
    technologies: Technology[]
}

export const getStaticProps:GetStaticProps<ProjectSearchPageProps> = async () => {

    const projects: Project[] = [];
    const technologies: Technology[] = [];

    return {
        props: {
            projects,
            technologies
        }
    }
}

export default ProjectSearchPage;