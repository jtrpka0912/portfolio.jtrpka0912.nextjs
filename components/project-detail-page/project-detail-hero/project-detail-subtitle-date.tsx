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

    // Either no dates or no starting date will return nothing.
    if(!dates || !dates.started) return null;

    let startedDate: string;
    let endedDate: string | null;

    try {
        startedDate = humanReadableDate(dates.started);
    } catch(err) {
        return null;
    }

    try {
        endedDate = dates.ended ? humanReadableDate(dates.ended) : null;
    } catch(err) {
        endedDate = null;
    }

    return (
        <h3 className="subtitle is-6">
            { startedDate }
            { endedDate ? ` to ${ endedDate }` : null }
        </h3>
    );
};

export default ProjectDetailSubtitleDate;