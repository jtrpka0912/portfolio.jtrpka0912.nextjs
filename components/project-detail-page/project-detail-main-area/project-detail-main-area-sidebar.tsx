import { IProject } from "../../../models/IProject";

import Sidebar from "../../ui/sidebar";
import ProjectDetailRepo from "../sidebar/project-detail-repo/project-detail-repo";
import ProjectDetailPackage from '../sidebar/project-detail-package/project-detail-package';
import ProjectDetailDevelopmentTag from "../sidebar/project-detail-development-tag";
import ProjectDetailTypeTag from "../sidebar/project-detail-type-tag";
import ProjectPackage from "../../../models/ProjectPackage";

/**
 * @interface ProjectDetailMainAreaSidebarProps
 * @summary Project detail main area sidebar props
 * @author J. Trpka
 * @property { IProject } project
 */
interface ProjectDetailMainAreaSidebarProps {
  project: IProject
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

  const projectPackageObject: ProjectPackage = new ProjectPackage(project.packages);

  return (
    <aside className="main-area__sidebar column is-one-quarter-desktop is-half-tablet">
      <ProjectDetailDevelopmentTag inDevelopment={project.inDevelopment} />

      <ProjectDetailTypeTag type={project.type} />

      <Sidebar>
        <ProjectDetailRepo repositories={project.gitRepositories} />
      </Sidebar>

      { !projectPackageObject.isEmpty() ? (
        <Sidebar>
          <ProjectDetailPackage packages={project.packages} />
        </Sidebar>
      ) : null }
    </aside>
  );
};

export default ProjectDetailMainAreaSidebar;