import { faNpm } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * @interface ProjectDetailNpmProps
 * @summary Project detail NPM component props
 * @author J. Trpka
 * @property { string[] } packages
 */
interface ProjectDetailNpmProps {
    packages: string[]
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
                <a href="https://www.npmjs.org" target="_blank">NPM Packages</a>
            </h5>

            <ul className="project-detail-npm__packages">
                { packages.map((packageItem: string) => {
                    return (
                        <li key={ packageItem }>
                            <FontAwesomeIcon icon={ faNpm } className="mr-2" />
                            <a href={ `https://npmjs.org/package/${ packageItem }` } target="_blank">{ packageItem }</a>
                        </li>
                    );
                }) }
            </ul>
        </div>
    );
};

export default ProjectDetailNpm;