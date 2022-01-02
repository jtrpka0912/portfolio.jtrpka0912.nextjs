import { ProjectDate } from '../../../models/project';
import { humanReadableDate } from '../../../helpers/date';

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
    const { dates } = props;

    if(!dates) return null;

    const startedDate: string | null = dates.started ? humanReadableDate(dates.started) : null;

    return (
        <h3 className="subtitle is-6">{ startedDate }</h3>
    );
};

export default ProjectDetailSubtitleDate;