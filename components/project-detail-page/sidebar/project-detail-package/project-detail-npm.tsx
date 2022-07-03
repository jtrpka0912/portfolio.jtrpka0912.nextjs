// Font Awesome
import { faNpm } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Models
import { IProjectNPMPackage } from "../../../../models/IProject";
import ExternalLinkIcon from "../../../ui/external-link-icon";

/**
 * @interface ProjectDetailNpmProps
 * @summary Project detail NPM component props
 * @author J. Trpka
 * @property { IProjectNPMPackage[] } packages
 */
interface ProjectDetailNpmProps {
    packages: IProjectNPMPackage[]
}

/**
 * @function ProjectDetailNpm
 * @summary Project detail NPM sidebar component
 * @description List of all of the node package manager packages used for a project
 * @author J. Trpka
 * @param { ProjectDetailNpmProps } props 
 * @returns { JSX }
 */
const ProjectDetailNpm = (props: ProjectDetailNpmProps) => {
    const { packages } = props;

    return (
        <div className="project-detail-npm">
            <h5 className="project-detail-npm__header mb-1">
                <a href="https://www.npmjs.org" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={ faNpm } className="mr-2" />Packages <ExternalLinkIcon />
                </a>
            </h5>

            <ul className="project-detail-npm__packages ml-4">
                { packages.map((packageItem: IProjectNPMPackage) => {
                    return (
                        <li key={ packageItem.name }>
                            <a 
                                href={ `https://npmjs.org/package/${ packageItem.name }` } 
                                target="_blank" 
                                title={ packageItem.isDevDependency ? 'Dev Dependency' : undefined } 
                                rel="noreferrer"
                            >
                                { packageItem.isDevDependency 
                                    ? <FontAwesomeIcon 
                                        icon={ faTools } 
                                        size="xs" 
                                        className="mr-2"
                                    /> 
                                    : null 
                                }
                                { packageItem.name }
                                
                                <ExternalLinkIcon />
                            </a>
                        </li>
                    );
                }) }
            </ul>
        </div>
    );
};

export default ProjectDetailNpm;