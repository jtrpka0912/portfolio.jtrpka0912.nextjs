import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ProjectDetailGithubProps {
    github: string
}

/**
 * @function ProjectDetailGithub
 * @summary Project detail github repository component
 * @description Show information about the github repo for the project.
 * @author J. Trpka
 * @param props 
 * @returns { JSX }
 */
const ProjectDetailGithub = (props: ProjectDetailGithubProps) => {
    const { github } = props;

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