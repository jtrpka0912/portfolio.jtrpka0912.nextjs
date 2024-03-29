import { IProject } from "../../../models/IProject";
import ProjectDetailSubtitleDate from "./project-detail-subtitle-date";

/**
 * @interface ProjectDetailTitleProps
 * @summary Project detail title props
 * @author J. Trpka
 * @property { Project } project
 */
interface ProjectDetailTitleProps {
  project: IProject
}

/**
 * @function ProjectDetailTitle
 * @summary Project detail title component
 * @description Show the title, date of start and completion, and other attributes of the project.
 * @author J. Trpka
 * @param { ProjectDetailTitleProps } props 
 * @returns { JSX }
 */
const ProjectDetailTitle = (props: ProjectDetailTitleProps) => {
  const { project } = props;

  return (
    <section className="hero is-secondary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-3 has-text-dark">{project.title}</h1>
          <ProjectDetailSubtitleDate dates={project.date} />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailTitle;