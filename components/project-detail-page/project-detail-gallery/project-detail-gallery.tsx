import React, { useEffect, useState } from 'react';

import { GalleryTabs } from '../../../models/enums/GalleryTabs';
import { IProjectGallery } from "../../../models/IProject";

import ProjectDetailGalleryEmpty from './project-detail-gallery-empty';
import ProjectDetailGalleryTabs from "./project-detail-gallery-tabs";
import ProjectDetailGalleryPanel from './project-detail-gallery-panel';
import Section from '../../ui/section/Section';

/**
 * @interface ProjectDetailGalleryProps
 * @summary Project detail gallery props
 * @author J. Trpka
 * @property { ProjectGallery } gallery
 */
interface ProjectDetailGalleryProps {
    gallery?: IProjectGallery
}

/**
 * @function ProjectDetailGallery
 * @summary Project detail gallery component
 * @description A tabular section to showcase images of the project in different sizes.
 * @author J. Trpka
 * @param { ProjectDetailGalleryProps } props
 * @returns { JSX }
 */
const ProjectDetailGallery = ({
    gallery
}: ProjectDetailGalleryProps) => {
    const [ active, setActive ] = useState<GalleryTabs>(GalleryTabs.Desktop);

    useEffect(() => {
        // Set the default tab if desktop or tablet is not available
        if(gallery) {
            if(!gallery.desktop || gallery.desktop.length === 0) {
                setActive(GalleryTabs.Tablet);
            }

            if(!gallery.tablet || gallery.tablet.length === 0) {
                setActive(GalleryTabs.Mobile);
            }
        }     
    }, [gallery]);

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
        <Section>
            <div className="gallery">
                { gallery && isGalleryAvailable() 
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
        </Section>
    );
};

export default ProjectDetailGallery;