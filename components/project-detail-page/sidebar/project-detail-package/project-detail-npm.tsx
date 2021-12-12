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
    return (
        <div></div>
    );
};

export default ProjectDetailNpm;