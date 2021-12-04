import { Project } from "../../../models/project";
import ProjectDetailMainAreaSidebar from "./project-detail-main-area-sidebar";

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
    const { project } = props;

    return (
        <section className="section">
            <div className="main-area container">
                <div></div>
                <ProjectDetailMainAreaSidebar project={ project } />
            </div>
        </section>
    );
};

export default ProjectDetailMainArea;