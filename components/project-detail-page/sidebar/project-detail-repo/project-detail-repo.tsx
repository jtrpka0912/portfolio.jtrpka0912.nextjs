import { IProjectGitRepository } from '../../../../models/IProject';
import ProjectDetailGithub from './project-detail-github';

/**
 * @interface ProjectDetailRepoProps
 * @summary Project detail repository props
 * @author J. Trpka
 * @property { IProjectRepo } repo
 */
interface ProjectDetailRepoProps {
  repositories?: IProjectGitRepository[]
}

/**
 * @function ProjectDetailRepo
 * @summary Project detail repository component
 * @description A small detail about the repository where the project is kept.
 * @author J. Trpka
 * @param { ProjectDetailRepoProps } props 
 * @returns { JSX }
 */
const ProjectDetailRepo = ({
  repositories
}: ProjectDetailRepoProps) => {
  
  if (!repositories) {
    return null;
  }

  return (
    <div className="project-detail-repo"
      role="note"
      aria-label="Project Repository"
    >
      { repositories.map((repository: IProjectGitRepository, index: number) => {
          switch(repository.type) {
            case 'GitHub':
              return <ProjectDetailGithub key={index} github={repository} />
            default:
              return <p key={index}>Coming Soon for { repository.type }</p>
          }
        })
      }
    </div>
  );
};

export default ProjectDetailRepo;