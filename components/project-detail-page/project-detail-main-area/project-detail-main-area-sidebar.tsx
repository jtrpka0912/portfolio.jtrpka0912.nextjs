import { Project } from "../../../models/project";

/**
 * @interface ProjectDetailMainAreaSidebarProps
 * @summary Project detail main area sidebar props
 * @author J. Trpka
 * @property { Project } project
 */
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
        <aside className="main-area__sidebar column is-one-third-desktop is-half-tablet">
            Sidebar Here
        </aside>
    );
};

export default ProjectDetailMainAreaSidebar;