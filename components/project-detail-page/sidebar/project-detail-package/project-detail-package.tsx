import { IProjectPackages } from "../../../../models/IProject";
import ProjectPackage from "../../../../models/ProjectPackage";
import ProjectDetailNpm from "./project-detail-npm";

/**
 * @interface ProjectDetailPackageProps
 * @summary Project detail package component props
 * @author J. Trpka
 * @property { IProjectPackage } package
 */
interface ProjectDetailPackageProps {
    packages?: IProjectPackages
}

/**
 * @function ProjectDetailPackage
 * @summary Project detail sidebar package component
 * @description A sidebar component that list out all other miscellaneous packages used for the project.
 * @author J. Trpka
 * @todo Change the name of the package property, from IProject, to packages
 * @param { ProjectDetailPackageProps } props 
 * @returns { JSX }
 */
const ProjectDetailPackage = (props: ProjectDetailPackageProps) => {
    const { packages } = props;

    const projectPackageObject: ProjectPackage = new ProjectPackage(packages);

    if(!packages || projectPackageObject.isEmpty()) return null;

    return (
        <div className="project-detail-package" 
            role="note"
            aria-label="Project Packages"
        >
            { projectPackageObject.npm && (
                <ProjectDetailNpm packages={ projectPackageObject.npm } />
            ) }

            { projectPackageObject.maven && (
                <p>Maven repositories coming soon</p>
            ) }

            { projectPackageObject.go && (
                <p>Go packages coming soon</p>
            ) }
        </div>
    );
};

export default ProjectDetailPackage;