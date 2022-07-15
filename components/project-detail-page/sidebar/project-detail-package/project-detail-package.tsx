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
 * @author J. Trpka
 * @param { ProjectDetailPackageProps } props 
 * @returns { JSX }
 */
const ProjectDetailPackage = (props: ProjectDetailPackageProps) => {
    const { package: packages } = props;

    /**
     * @function isEmptyPackages
     * @summary Any packages contained in IProjectPackage
     * @description Check if any of the type of IProjectPackage has any packages. If empty then return true.
     * @author J. Trpka
     * @todo Would prefer to loop through IProjectPackage instead of manually add each package type.
     * @returns { boolean }
     */
    const isEmptyPackages = (arrayOfPackages?: Array<any>): boolean => {
        if(!arrayOfPackages || arrayOfPackages.length === 0) return true;
        return false;
    }

    if(!packages || (
        isEmptyPackages(packages.npm) 
        && isEmptyPackages(packages.maven) 
        && isEmptyPackages(packages.go)
        && isEmptyPackages(packages.nuget)
    )) {
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