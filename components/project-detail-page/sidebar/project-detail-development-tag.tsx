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
    const { inDevelopment } = props;

    if(!inDevelopment) return null;

    return (
        <div className="development-tag mb-3">
            <span className="tag is-warning is-light">In Development</span>
        </div>
    );
};

export default ProjectDetailDevelopmentTag;