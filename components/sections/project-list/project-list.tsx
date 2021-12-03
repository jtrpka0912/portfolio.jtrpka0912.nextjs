import router, { useRouter } from 'next/router';

import { Project } from "../../../models/project";
import Thumbnail from "../../ui/thumbnail";

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

    const onClickHandler = (project: Project) => {
        router.push(`/project/${ project.slug }`);
    }

    return (
        <section className="section">
            <div className="project-list container">
                { projects.length > 0 ? (
                    <div className="project-list__list columns is-mobile is-multiline">
                        { projects.map((project: Project) => {
                            return (
                                <div key={ project.slug }
                                    className="project-list__item column is-half-mobile is-one-third-tablet is-one-quarter-desktop is-clickable">
                                    <Thumbnail
                                        image={ project.thumbnail ? project.thumbnail : '' }
                                        altText={ `Image of ${ project.title } Project` }
                                        title={ project.title }
                                        onClick={ () => onClickHandler(project) }
                                    />
                                </div>
                            )
                        } ) }
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