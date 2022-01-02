import { useRouter } from 'next/router';

import { Project } from "../../../models/project";

import Thumbnail from '../../ui/thumbnail';

/**
 * @interface ProjectListItemProps
 * @summary Project list item props
 * @author J. Trpka
 * @property { Project } project
 */
interface ProjectListItemProps {
    project: Project
}

/**
 * @function ProjectListItem
 * @summary Project list item component
 * @description A single project list item which contains a thumbnail
 * @author J. Trpka
 * @param { ProjectListItemProps } props 
 * @returns { JSX }
 */
const ProjectListItem = (props: ProjectListItemProps) => {
    const router = useRouter();
    const { project } = props;

    /**
     * @function onClickHandler
     * @summary Handle clicks for thumbnail
     * @description Direct the user to the project detail page.
     * @author J. Trpka
     */
    const onClickHandler = (): void => {
        router.push(`/project/${ project.slug }`);
    }

    return (
        <div role="listitem" className="project-list-item column is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-fifth-widescreen">
            <Thumbnail
                image={ project.thumbnail ? project.thumbnail : '' }
                altText={ `Image of ${ project.title } Project` }
                title={ project.title }
                onClick={ onClickHandler }
            />
        </div>
    );
};

export default ProjectListItem;