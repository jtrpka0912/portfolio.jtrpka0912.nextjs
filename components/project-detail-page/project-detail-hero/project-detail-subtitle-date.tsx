import { ProjectDate } from '../../../models/project';

/**
 * @interface ProjectDetailSubtitleDateProps
 * @summary Project detail subtitle date props
 * @author J. Trpka
 * @property { ProjectDate } dates
 */
interface ProjectDetailSubtitleDateProps {
    dates?: ProjectDate
}

/**
 * @function ProjectDetailSubtitleDate
 * @summary Project detail subtitle date component
 * @description Show the starting and ending dates of a project.
 * @author J. Trpka
 * @param { ProjectDetailSubtitleDateProps } props 
 * @returns { JSX }
 */
const ProjectDetailSubtitleDate = (props: ProjectDetailSubtitleDateProps) => {
    return (
        <div></div>
    );
};

export default ProjectDetailSubtitleDate;