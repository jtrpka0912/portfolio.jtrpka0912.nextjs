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

/**
 * @interface ProjectDetailGithubProps
 * @summary Project detail github component props
 * @author J. Trpka
 * @property { string } github - URL to the Github Repo page
 */
interface ProjectDetailGithubProps {
    github: string
}

/**
 * @function ProjectDetailGithub
 * @summary Project detail github repository component
 * @description Show information about the github repo for the project.
 * @author J. Trpka
 * @param { ProjectDetailGithubProps } props 
 * @returns { JSX }
 */
const ProjectDetailGithub = (props: ProjectDetailGithubProps) => {
    const { github } = props;
    const [owner, repo] = convertRepoURLToOwnerAndRepo(github);

    /**
     * @var { string } githubRepoUrl
     * @description Generate the API URL for the sake of the useSWR key.
     */
    const githubRepoUrl = `https://api.github.com/repos/${ owner }/${ repo }`;

    const { data: repoData, error } = useSWR(githubRepoUrl, () => getRepo(github));

    return (
        <div className="project-detail-github">
            { // Loader content with spinning icon.
            !error && !repoData && (
                <FontAwesomeIcon icon={ faGithub } spin={ true } />
            )}

            { // Display some of the repo data.
            !error && repoData && (
                <div className="project-detail-github__repo">
                    <h5 className="project-detail-github__link">
                        <FontAwesomeIcon icon={ faGithub } />
                        <a className="ml-1" 
                            href={ github } 
                            target="_blank"
                        >Repository <ExternalLinkIcon /></a>
                    </h5>

                    <div className="project-detail-github__stats tags mt-1">
                        <li title="Forks" className="tag is-primary is-light">
                            <FontAwesomeIcon icon={ faCodeBranch } />
                            <span className="ml-1">{ repoData.forks_count }</span>
                        </li>
                        <li title="Stargazers" className="tag is-primary is-light">
                            <FontAwesomeIcon icon={ faStar } />
                            <span className="ml-1">{ repoData.stargazers_count }</span>
                        </li>
                    </div>
                </div>
            )}

            { // Display message for invalid or private repo.
            error && (
                <div className="project-detail-github__error">
                    <FontAwesomeIcon icon={ faGithub } /> Repo may be invalid or private.
                </div>
            )}
        </div>
    );
};

export default ProjectDetailGithub;