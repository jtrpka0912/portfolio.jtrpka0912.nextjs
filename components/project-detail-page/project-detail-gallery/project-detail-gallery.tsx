import React, { useEffect, useState } from 'react';

import { GalleryTabs } from '../../../models/enums/GalleryTabs';
import { ProjectGallery } from "../../../models/project";

import ProjectDetailGalleryEmpty from './project-detail-gallery-empty';
import ProjectDetailGalleryTabs from "./project-detail-gallery-tabs";
import ProjectDetailGalleryPanel from './project-detail-gallery-panel';

/**
 * @interface ProjectDetailGalleryProps
 * @summary Project detail gallery props
 * @author J. Trpka
 * @property { ProjectGallery } gallery
 */
interface ProjectDetailGalleryProps {
    gallery?: ProjectGallery
}

/**
 * @function ProjectDetailGallery
 * @summary Project detail gallery component
 * @description A tabular section to showcase images of the project in different sizes.
 * @author J. Trpka
 * @param { ProjectDetailGalleryProps } props
 * @returns { JSX }
 */
const ProjectDetailGallery = (props: ProjectDetailGalleryProps) => {
    const [ active, setActive ] = useState<GalleryTabs>(GalleryTabs.Desktop);

    useEffect(() => {
        console.log('UseEffect');
        // Set the default tab if desktop or tablet is not available
        if(gallery) {
            if(!gallery.desktop || gallery.desktop.length === 0) {
                setActive(GalleryTabs.Tablet);
            }

            if(!gallery.tablet || gallery.tablet.length === 0) {
                setActive(GalleryTabs.Mobile);
            }
        }     
    }, []);

    const { gallery } = props;

    /**
     * @function isGalleryAvailable
     * @summary Is the gallery available
     * @description Check if the gallery exists or empty then render the appropiate component
     * @author J. Trpka
     * @returns { boolean }
     */
    const isGalleryAvailable = (): boolean => {
        // Check if there is a gallery
        if(!gallery) {
            return false;
        }

        // Check if all three galleries are empty
        if( 
            ( !gallery.desktop || gallery.desktop.length === 0 ) &&
            ( !gallery.tablet || gallery.tablet.length === 0 ) &&
            ( !gallery.mobile || gallery.mobile.length === 0 )
        ) {
            return false;
        }

        return true;
    };

    /**
     * @function handleActive
     * @summary Change the active value
     * @description Change the active view when a tab is clicked.
     * @author J. Trpka 
     * @param { GalleryTabs } activeTab 
     * @returns { void }
     */
    const handleActive = (activeTab: GalleryTabs): void => {
        setActive(activeTab);
    }

    return (
        <section className="section">
            <div className="gallery container">
                { /** Might be overkill to add the gallery check with the function, but the components need to be sure that gallery is not undefined. */
                gallery && isGalleryAvailable() 
                    ? (
                        <React.Fragment>
                            <ProjectDetailGalleryTabs 
                                gallery={ gallery } 
                                active={ active } 
                                handleActive={ handleActive } 
                            />
                            <ProjectDetailGalleryPanel 
                                gallery={ gallery }
                                active={ active }
                            />
                        </React.Fragment>
                    )
                    : <ProjectDetailGalleryEmpty />
                }
            </div>
        </section>
    );
};

export default ProjectDetailGallery;