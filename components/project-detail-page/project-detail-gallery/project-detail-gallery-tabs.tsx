import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faTabletAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import { ProjectGallery } from "../../../models/project";

/**
 * @interface ProjectDetailGalleryTabsProps
 * @summary Props for the project detail gallery tab component
 * @author J. Trpka
 * @property { ProjectGallery } gallery
 */
interface ProjectDetailGalleryTabsProps {
    gallery: ProjectGallery
}

/**
 * @function ProjectDetailGalleryTabs
 * @summary Project detail gallery tabs component
 * @description Display the tabs for the gallery to switch the different sizes
 * @author J. Trpka
 * @todo Add 'is-active' and aria-selected functionality to the <li> tabs.
 * @param { ProjectDetailGalleryTabsProps } props
 * @returns { JSX }
 */
const ProjectDetailGalleryTabs = (props: ProjectDetailGalleryTabsProps) => {
    const { gallery } = props;

    return (
        <div className="gallery__tabs tabs is-centered is-boxed" role="tablist" aria-label="Project Gallery by Screen Sizes">
            <ul>
                { gallery.desktop && gallery.desktop.length > 0 && (
                    <li role="tab" aria-controls="desktop-panel">
                        <a>
                            <FontAwesomeIcon className="mr-2" icon={ faDesktop } /> Desktop
                        </a>
                    </li>
                ) }

                { gallery.tablet && gallery.tablet.length > 0 && (
                    <li role="tab" aria-controls="tablet-panel">
                        <a>
                            <FontAwesomeIcon className="mr-2" icon={ faTabletAlt } /> Tablet
                        </a>
                    </li>
                ) }

                { gallery.mobile && gallery.mobile.length > 0 && (
                    <li role="tab" aria-controls="mobile-panel">
                        <a>
                            <FontAwesomeIcon className="mr-2" icon={ faMobileAlt } /> Mobile
                        </a>
                    </li>
                ) }
            </ul>
        </div>
    );
};

export default ProjectDetailGalleryTabs;