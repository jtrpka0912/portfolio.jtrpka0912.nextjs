import { Project } from "../../../models/project";

interface ProjectDetailMainAreaSidebarProps {
    project: Project
}

/**
 * @function ProjectDetailMainAreaSidebar
 * @summary Project detail main area sidebar component
 * @description The sidebar that contains more information of the project
 * @author J. Trpka
 * @param { ProjectDetailMainAreaSidebarProps } props 
 * @returns { JSX }
 */
const ProjectDetailMainAreaSidebar = (props: ProjectDetailMainAreaSidebarProps) => {
    return (
        <aside className="main-area__sidebar">

        </aside>
    );
};

export default ProjectDetailMainAreaSidebar;