import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useSWR from 'swr';

import {
    convertRepoURLToOwnerAndRepo 
} from '../../../../helpers/api/github';

import {
    getRepo
} from '../../../../api/github';

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

    const { data, error } = useSWR(githubRepoUrl, () => getRepo(github));

    console.info('SWR', data, error);

    return (
        <div className="project-detail-github">
            { !error && !data && (
                <FontAwesomeIcon icon={ faGithub } spin={ true } />
            )}

            { !error && data && (
                <div className="project-detail-github__link">
                    <FontAwesomeIcon icon={ faGithub } />
                    <a className="ml-1" 
                        href={ github } 
                        target="_blank"
                    >Repository</a>
                </div>
            )}

            { error && (
                <div className="project-detail-github__error">
                    <FontAwesomeIcon icon={ faGithub } /> Repo may be invalid or private.
                </div>
            )}
        </div>
    );
};

export default ProjectDetailGithub;