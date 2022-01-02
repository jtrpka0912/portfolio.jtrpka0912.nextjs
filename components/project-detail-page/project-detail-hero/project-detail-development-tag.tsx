/**
 * @interface ProjectDetailDevelopmentTagProps
 * @summary Project detail development tag props
 * @author J. Trpka
 * @property { boolean } inDevelopment
 */
interface ProjectDetailDevelopmentTagProps {
    inDevelopment: boolean
}

/**
 * @function ProjectDetailDevelopmentTag
 * @summary Project detail development tag component
 * @description This will show that the project is still in development.
 * @author J. Trpka
 * @param { ProjectDetailDevelopmentTagProps } props 
 * @returns { JSX }
 */
const ProjectDetailDevelopmentTag = (props: ProjectDetailDevelopmentTagProps) => {
    return (
        <div></div>
    );
};

export default ProjectDetailDevelopmentTag;