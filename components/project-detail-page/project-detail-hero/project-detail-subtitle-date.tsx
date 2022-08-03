import { IProjectDate } from '../../../models/IProject';
import { humanReadableDate, validDateRange } from '../../../helpers/date';

/**
 * @interface ProjectDetailSubtitleDateProps
 * @summary Project detail subtitle date props
 * @author J. Trpka
 * @property { ProjectDate } dates
 */
interface ProjectDetailSubtitleDateProps {
    dates?: IProjectDate
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

    // If date range is invalid then return nothing.
    if(dates.ended) {
        if(!validDateRange(dates.started, dates.ended)) return null;
    }

    /**
     * @var { string } startedDate
     * @summary Started date
     * @description The full string starting date of a project
     * @author J. Trpka
     */
    let startedDate: string;

    /**
     * @var { string | null } endedDate
     * @summary Ended date
     * @description The full string ending date of a project
     * @author J. Trpka
     */
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
        <h3 className="subtitle is-6 has-text-dark">
            { startedDate }
            { endedDate ? ` to ${ endedDate }` : null }
        </h3>
    );
};

export default ProjectDetailSubtitleDate;