import { Project } from "../../../models/project";

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
    return (
        <div></div>
    );
};

export default ProjectDetailTitle;