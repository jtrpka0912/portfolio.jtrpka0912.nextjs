import { Project } from "../../../models/project";

/**
 * @interface ProjectDetailMainAreaContentProps
 * @summary Project detail main area content props
 * @author J. Trpka
 * @property { Project } project
 */
interface ProjectDetailMainAreaContentProps {
    project: Project
}

/**
 * @function ProjectDetailMainAreaContent
 * @summary Project detail main area content component
 * @description This is where users can read about the project.
 * @author J. Trpka
 * @param { ProjectDetailMainAreaContentProps } props 
 * @returns { JSX }
 */
const ProjectDetailMainAreaContent = (props: ProjectDetailMainAreaContentProps) => {
    const { project } = props;
    return (
        <div className="main-area__content">
            { project.thumbnail && (
                <img src={ project.thumbnail } alt={ `Image of ${ project.title }` } />
            ) }
            
            { project.content }
        </div>
    );
};

export default ProjectDetailMainAreaContent;