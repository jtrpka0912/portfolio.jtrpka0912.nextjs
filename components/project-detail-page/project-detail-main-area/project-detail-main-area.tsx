import { IProject } from "../../../models/IProject";
import Section from "../../ui/section/Section";
import ProjectDetailMainAreaContent from "./project-detail-main-area-content";
import ProjectDetailMainAreaSidebar from "./project-detail-main-area-sidebar";

interface ProjectDetailMainAreaProps {
    project: IProject
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
        <Section>
            <div className="main-area">
                <div className="columns">
                    <ProjectDetailMainAreaContent project={ project } />
                    <ProjectDetailMainAreaSidebar project={ project } />
                </div>
            </div>
        </Section>
    );
};

export default ProjectDetailMainArea;