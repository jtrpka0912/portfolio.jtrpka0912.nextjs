import { ProjectRepo } from '../../../../models/project';

/**
 * @interface ProjectRepo
 * @summary Project detail sidebar repository props
 * @author J. Trpka
 * @property { ProjectRepo } repo
 */
interface ProjectDetailSidebarRepoProps {
    repo?: ProjectRepo
}

/**
 * @function ProjectDetailSidebarRepo
 * @summary Project detail sidebar repository component
 * @description A small detail about the repository where the project is kept.
 * @author J. Trpka
 * @param { ProjectDetailSidebarRepoProps } props 
 * @returns { JSX }
 */
const ProjectDetailSidebarRepo = (props: ProjectDetailSidebarRepoProps) => {
    const { repo } = props;

    // If repo is empty
    if(!repo) {
        return null;
    }

    return (
        <div role="note" aria-label="Project Repository"></div>
    );
};

export default ProjectDetailSidebarRepo;