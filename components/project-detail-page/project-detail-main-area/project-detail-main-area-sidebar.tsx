import { Project } from "../../../models/project";

import Sidebar from "../../ui/sidebar";
import ProjectDetailRepo from "../sidebar/project-detail-repo/project-detail-repo";
import ProjectDetailPackage from '../sidebar/project-detail-package/project-detail-package';
import ProjectDetailDevelopmentTag from "../sidebar/project-detail-development-tag";

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
    const { project } = props;

    return (
        <aside className="main-area__sidebar column is-one-quarter-desktop is-half-tablet">
            <ProjectDetailDevelopmentTag inDevelopment={ project.inDevelopment } />
            
            <Sidebar>
                <ProjectDetailRepo repo={ project.repo } />
            </Sidebar>

            <Sidebar>
                <ProjectDetailPackage package={ project.package } />
            </Sidebar>
        </aside>
    );
};

export default ProjectDetailMainAreaSidebar;