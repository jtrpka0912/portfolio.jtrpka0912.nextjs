import { IProject } from "../../../models/IProject";

/**
 * @interface ProjectListProps
 * @summary Project list props
 * @author J. Trpka
 * @property { Project[] } projects
 * @property { boolean | undefined } showAll - Reveal the show all projects link
 */
export interface ProjectListProps {
  projects: IProject[];
  showAll?: boolean;
}