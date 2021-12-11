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

    // TODO: Apparently the reason fetch was not working outside of the component was because Jest uses NodeJS which fetch wouldn't be recognized. Sigh...

    // TODO: The best approach is take most of what is inside fetcher and create a new file under {root}/api/github.ts, but still keep the other helper functions like "convertRepoURLToOwnerAndRepo()" still inside the helper file.

    // https://www.leighhalliday.com/mock-fetch-jest

    const fetcher = async () => {
        const response: Response = await fetch(githubRepoUrl, {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if(!response.ok) throw new Error('Unable to retrieve repo data.');

        const responseJson = await response.json();

        // Might be redundant at this point since it throws a 404 anyway with a bad repo link or a private repo.

        if(checkIfErrorMessageResponse(responseJson)) throw new Error('Unable to retrieve repo data.');

        return responseJson;
    }

    const { data, error } = useSWR(githubRepoUrl, fetcher);

    console.info('SWR', data, error);

    return (
        <div className="project-detail-github">
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