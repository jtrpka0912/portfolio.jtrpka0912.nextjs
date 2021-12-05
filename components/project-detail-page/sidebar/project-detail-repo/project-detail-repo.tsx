import { ProjectRepo } from '../../../../models/project';

/**
 * @interface ProjectDetailRepoProps
 * @summary Project detail repository props
 * @author J. Trpka
 * @property { ProjectRepo } repo
 */
interface ProjectDetailRepoProps {
    repo?: ProjectRepo
}

/**
 * @function ProjectDetailRepo
 * @summary Project detail repository component
 * @description A small detail about the repository where the project is kept.
 * @author J. Trpka
 * @param { ProjectDetailRepoProps } props 
 * @returns { JSX }
 */
const ProjectDetailRepo = (props: ProjectDetailRepoProps) => {
    const { repo } = props;

    // If repo is empty
    if(!repo) {
        return null;
    }

    return (
        <div role="note" aria-label="Project Repository"></div>
    );
};

export default ProjectDetailRepo;