import React from 'react';
import useSWR from 'swr';

// Font Awesome
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  convertRepoURLToOwnerAndRepo
} from '../../../../helpers/api/github';

import {
  getRepo
} from '../../../../api/github';
import ExternalLinkIcon from '../../../ui/external-link-icon';
import { IProjectGitRepository } from '../../../../models/IProject';

/**
 * @interface ProjectDetailGithubProps
 * @summary Project detail github component props
 * @author J. Trpka
 * @property { IProjectGitRepository[] } github
 */
interface ProjectDetailGithubProps {
  github: IProjectGitRepository
}

/**
 * @function ProjectDetailGithub
 * @summary Project detail github repository component
 * @description Show information about the github repo for the project.
 * @author J. Trpka
 * @param { ProjectDetailGithubProps } props 
 * @returns { JSX }
 */
const ProjectDetailGithub = ({
  github
}: ProjectDetailGithubProps) => {
  const [owner, repo] = convertRepoURLToOwnerAndRepo(github.url);

  /**
   * @var { string } githubRepoUrl
   * @description Generate the API URL for the sake of the useSWR key.
   */
  const githubRepoUrl = `https://api.github.com/repos/${owner}/${repo}`;

  const { data: repoData, error } = useSWR(githubRepoUrl, () => getRepo(github.url));

  return (
    <div className="project-detail-github">
      { // Loader content with spinning icon.
        !error && !repoData && (
          <FontAwesomeIcon icon={faGithub} spin={true} />
        )}

      { // Display some of the repo data.
        !error && repoData && (
          <div className="project-detail-github__repo">
            <h5 className="project-detail-github__link">
              <FontAwesomeIcon icon={faGithub} />
              <a className="ml-1"
                href={github.url}
                target="_blank"
                rel="noreferrer"
              >{github.label} <ExternalLinkIcon /></a>
            </h5>

            <div className="project-detail-github__stats tags mt-1">
              <li title="Forks" className="tag is-primary is-light">
                <FontAwesomeIcon icon={faCodeBranch} />
                <span className="ml-1">{repoData.forks_count}</span>
              </li>
              <li title="Stargazers" className="tag is-primary is-light">
                <FontAwesomeIcon icon={faStar} />
                <span className="ml-1">{repoData.stargazers_count}</span>
              </li>
            </div>
          </div>
        )}

      { // Display message for invalid or private repo.
        error && (
          <div className="project-detail-github__error">
            <FontAwesomeIcon icon={faGithub} /> Repo may be invalid or private.
          </div>
        )}
    </div>
  );
};

export default ProjectDetailGithub;