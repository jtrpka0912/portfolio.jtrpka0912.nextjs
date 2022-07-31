import { useRouter } from 'next/router';

import { IProject } from "../../../models/IProject";

import Thumbnail from '../../ui/thumbnail/Thumbnail';

/**
 * @interface ProjectListItemProps
 * @summary Project list item props
 * @author J. Trpka
 * @property { Project } project
 */
interface ProjectListItemProps {
    project: IProject
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

    /**
     * @var { string } columnClasses
     * @description The column classes for the component.
     * @author J. Trpka
     */
    const columnClasses: string = 'column is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-fifth-widescreen';

    /**
     * @constant { number } imageSize
     * @description The size of the image both width and height
     * @author J. Trpka
     */
    const imageSize = 200;

    return (
        <div role="listitem" 
            className={ `project-list-item ${ columnClasses }` }
            style={{
                width: imageSize,
                height: imageSize
            }}
        >
            <Thumbnail
                image={ project.thumbnail || { path: '/assets/images/placeholder-thumbnail.png', altText: 'Placeholder Thumbnail Image' } }
                title={ project.title }
                onClick={ onClickHandler }
                width={imageSize}
                height={imageSize}
            />
        </div>
    );
};

export default ProjectListItem;