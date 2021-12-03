

import { Project } from "../../../models/project";

import ProjectListItem from './project-list-item';

/**
 * @interface ProjectListProps
 * @summary Project list props
 * @author J. Trpka
 * @property { Project[] } projects
 */
interface ProjectListProps {
    projects: Project[]
}

/**
 * @function ProjectList
 * @summary Project list component
 * @description A list of projects for the user to navigate
 * @author J. Trpka
 * @todo Select a default thumbnail if a project does not have one.
 * @param { ProjectListProps } props 
 * @returns { JSX } 
 */
const ProjectList = (props: ProjectListProps) => {
    const { projects } = props;

    return (
        <section className="section">
            <div className="project-list container">
                { projects.length > 0 ? (
                    <div className="project-list__list columns is-mobile is-multiline">
                        { projects.map((project: Project) => <ProjectListItem key={ project.slug } project={ project } /> ) }
                    </div>
                ) : (
                    <div className="project-list__empty">
                        <p>Unable to find any projects.</p>
                    </div>
                ) }
            </div>
        </section>
    );
};

export default ProjectList;