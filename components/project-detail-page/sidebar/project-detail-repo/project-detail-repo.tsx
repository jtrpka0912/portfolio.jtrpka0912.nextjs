import { IProjectGitRepository, IProjectRepo } from '../../../../models/IProject';
import ProjectDetailGithub from './project-detail-github';

/**
 * @interface ProjectDetailRepoProps
 * @summary Project detail repository props
 * @author J. Trpka
 * @property { IProjectRepo } repo
 */
interface ProjectDetailRepoProps {
  repo?: IProjectRepo
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
  if (!repo) {
    return null;
  }

  return (
    <div className="project-detail-repo"
      role="note"
      aria-label="Project Repository"
    >
      {repo.github && repo.github.length > 0 && (
        repo.github.map((repo: IProjectGitRepository) => <ProjectDetailGithub key={repo.label} github={repo} />)
      )}

      {repo.gitlab && repo.gitlab.length > 0 && (
        <p>Gitlab Coming Soon</p>
      )}

      {repo.bitbucket && repo.bitbucket.length > 0 && (
        <p>BitBucket Coming Soon</p>
      )}
    </div>
  );
};

export default ProjectDetailRepo;