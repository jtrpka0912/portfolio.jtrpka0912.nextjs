import { ProjectPackage } from "../../../../models/project";

/**
 * @interface ProjectDetailPackageProps
 * @summary Project detail package component props
 * @author J. Trpka
 * @property { ProjectPackage } package
 */
interface ProjectDetailPackageProps {
    package?: ProjectPackage
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
        <div className="project-detail-package"></div>
    );
};

export default ProjectDetailPackage;