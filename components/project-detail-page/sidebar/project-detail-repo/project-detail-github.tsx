import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useSWR from 'swr';

import { checkIfErrorMessageResponse, convertRepoURLToOwnerAndRepo } from '../../../../helpers/api/github';

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
    const githubRepoUrl = `https://api.github.com/repos/${ owner }/${ repo }`

    // TODO: For the useEffect, you may need fetch from here as fetch is not defined outside of components.
    // Might be better to integrate the loading overlay this way.

    const fetcher = async () => {
        const response: Response = await fetch(githubRepoUrl, {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if(!response.ok) throw new Error('Unable to retrieve repo data.');

        const responseJson = await response.json();

        // Todo: Not a good error message. :)
        if(checkIfErrorMessageResponse(responseJson)) throw new Error('This is an error');

        return responseJson;
    }

    const { data, error } = useSWR(githubRepoUrl, fetcher);

    console.info('SWR', data, error);

    return (
        <div className="project-detail-github">
            <div className="project-detail-github__link">
                <FontAwesomeIcon icon={ faGithub } />
                <a className="ml-1" 
                    href={ github } 
                    target="_blank"
                >Repository</a>
            </div>
        </div>
    );
};

export default ProjectDetailGithub;