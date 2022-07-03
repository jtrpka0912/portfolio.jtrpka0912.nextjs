import { IProject } from "../../../models/IProject";
import Thumbnail from "../../ui/thumbnail";

/**
 * @interface ProjectDetailMainAreaContentProps
 * @summary Project detail main area content props
 * @author J. Trpka
 * @property { Project } project
 */
interface ProjectDetailMainAreaContentProps {
    project: IProject
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
        <div className="main-area__content column is-three-quarters-desktop is-half-tablet">
            { project.thumbnail && (
                <div className="main-area__thumbnail pr-4 is-pulled-left">
                    <Thumbnail image={ project.thumbnail }
                        altText={ `Image of ${ project.title }` }
                        onClick={ () => console.log(project) } 
                    />
                </div>
            ) }
            
            { project.content }
        </div>
    );
};

export default ProjectDetailMainAreaContent;