import { Project } from "../../../models/project";
import ProjectDetailSubtitleDate from "./project-detail-subtitle-date";

/**
 * @interface ProjectDetailTitleProps
 * @summary Project detail title props
 * @author J. Trpka
 * @property { Project } project
 */
interface ProjectDetailTitleProps {
    project: Project
}

/**
 * @function ProjectDetailTitle
 * @summary Project detail title component
 * @description Show the title, date of start and completion, and other attributes of the project.
 * @author J. Trpka
 * @param { ProjectDetailTitleProps } props 
 * @returns { JSX }
 */
const ProjectDetailTitle = (props: ProjectDetailTitleProps) => {
    const { project } = props;

    return (
        <section className="hero-title hero is-info">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-3">{ project.title }</h1>
                    <ProjectDetailSubtitleDate dates={ project.date } />
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailTitle;