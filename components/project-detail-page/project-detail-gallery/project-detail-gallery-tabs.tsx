import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faTabletAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import { ProjectGallery } from "../../../models/project";

import { GalleryTabs } from '../../../models/enums/GalleryTabs';

/**
 * @interface ProjectDetailGalleryTabsProps
 * @summary Props for the project detail gallery tab component
 * @author J. Trpka
 * @todo Make handleActive required once I figure out how to work with it in unit testing.
 * @property { ProjectGallery } gallery
 * @property { GalleryTabs } active
 * @property { function } handleActive
 */
interface ProjectDetailGalleryTabsProps {
    gallery: ProjectGallery
    active: GalleryTabs
    handleActive: (activeTab: GalleryTabs) => void
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
    const { gallery, active, handleActive } = props;

    return (
        <div className="gallery__tabs tabs is-centered is-boxed" role="tablist" aria-label="Project Gallery by Screen Sizes">
            <ul>
                { gallery.desktop && gallery.desktop.length > 0 && (
                    <li role="tab" 
                        className={ active === GalleryTabs.Desktop ? 'is-active' : undefined } 
                        id="desktop-tab"
                        aria-selected={ active === GalleryTabs.Desktop ? 'true' : 'false' }
                        aria-controls="desktop-panel"
                        onClick={ () => handleActive(GalleryTabs.Desktop) }
                    >
                        <a>
                            <FontAwesomeIcon className="mr-2" icon={ faDesktop } /> Desktop
                        </a>
                    </li>
                ) }

                { gallery.tablet && gallery.tablet.length > 0 && (
                    <li role="tab"
                        className={ active === GalleryTabs.Tablet ? 'is-active' : undefined } 
                        id="tablet-tab"
                        aria-selected={ active === GalleryTabs.Tablet ? 'true' : 'false' } aria-controls="tablet-panel"
                        onClick={ () => handleActive(GalleryTabs.Tablet) }
                    >
                        <a>
                            <FontAwesomeIcon className="mr-2" icon={ faTabletAlt } /> Tablet
                        </a>
                    </li>
                ) }

                { gallery.mobile && gallery.mobile.length > 0 && (
                    <li role="tab"
                        className={ active === GalleryTabs.Mobile ? 'is-active' : undefined } 
                        id="mobile-tab"
                        aria-selected={ active === GalleryTabs.Mobile ? 'true' : 'false' } aria-controls="mobile-panel"
                        onClick={ () => handleActive(GalleryTabs.Mobile) }
                    >
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