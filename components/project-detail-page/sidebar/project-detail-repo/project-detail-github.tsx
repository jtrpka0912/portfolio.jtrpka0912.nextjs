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
        <div className="project-detail-repo__github">
            <a href={ github } target="_blank">Repository</a>
        </div>
    );
};

export default ProjectDetailGithub;