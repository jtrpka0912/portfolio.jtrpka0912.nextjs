import { IProjectPackage } from "../../../../models/IProject";
import ProjectDetailNpm from "./project-detail-npm";

/**
 * @interface ProjectDetailPackageProps
 * @summary Project detail package component props
 * @author J. Trpka
 * @property { IProjectPackage } package
 */
interface ProjectDetailPackageProps {
    package?: IProjectPackage
}

/**
 * @function ProjectDetailPackage
 * @summary Project detail sidebar package component
 * @description A sidebar component that list out all other miscellaneous packages used for the project.
 * @param { ProjectDetailPackageProps } props 
 * @returns { JSX }
 */
const ProjectDetailPackage = (props: ProjectDetailPackageProps) => {
    const { package: packages } = props;

    if(!packages) {
        return null;
    }

    return (
        <div className="project-detail-package" 
            role="note"
            aria-label="Project Packages"
        >
            { packages.npm && (
                <ProjectDetailNpm packages={ packages.npm } />
            ) }

            { packages.maven && (
                <p>Maven repositories coming soon</p>
            ) }

            { packages.go && (
                <p>Go packages coming soon</p>
            ) }
        </div>
    );
};

export default ProjectDetailPackage;