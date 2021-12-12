import { ProjectRepo } from '../../../../models/project';
import ProjectDetailGithub from './project-detail-github';

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
        <div className="project-detail-repo" 
            role="note" 
            aria-label="Project Repository"
        >
            { repo.github && (
                <ProjectDetailGithub github={ repo.github } />
            ) }

            { repo.gitlab && (
                <p>Gitlab Coming Soon</p>
            ) }

            { repo.bitbucket && (
                <p>BitBucket Coming Soon</p>
            ) }
        </div>
    );
};

export default ProjectDetailRepo;