import { Project } from "../../../models/project";

interface ProjectDetailMainAreaProps {
    project: Project
}

/**
 * @function ProjectDetailMainArea
 * @summary Project detail main area component
 * @description The main area of content for the project detail page.
 * @author J. Trpka
 * @param { ProjectDetailMainAreaProps } props 
 * @returns { JSX }
 */
const ProjectDetailMainArea = (props: ProjectDetailMainAreaProps) => {
    return (
        <section className="section">
            <div className="main-area container">
                <div></div>
                <aside></aside>
            </div>
        </section>
    );
};

export default ProjectDetailMainArea;