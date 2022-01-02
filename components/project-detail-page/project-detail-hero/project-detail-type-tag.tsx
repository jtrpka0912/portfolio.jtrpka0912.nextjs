import { ProjectType } from "../../../models/project";

/**
 * @interface ProjectDetailTypeTagProps
 * @summary Project detail type tag props
 * @author J. Trpka
 * @property { ProjectType } type
 */
interface ProjectDetailTypeTagProps {
    type: ProjectType
}

/**
 * @function ProjectDetailTypeTag
 * @summary Project detail type tag component
 * @description Display the type of project
 * @author J. Trpka
 * @param { ProjectDetailTypeTagProps } props 
 * @returns { JSX }
 */
const ProjectDetailTypeTag = (props: ProjectDetailTypeTagProps) => {
    return (
        <div></div>
    );
};

export default ProjectDetailTypeTag;