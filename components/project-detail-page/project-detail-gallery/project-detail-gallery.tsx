import { ProjectGallery } from "../../../models/project";

import ProjectDetailGalleryEmpty from './project-detail-gallery-empty';
import ProjectDetailGalleryTabs from "./project-detail-gallery-tabs";

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

    return (
        <section className="section">
            <div className="gallery container">
                { /** Might be overkill to add the gallery check with the function, but the components need to be sure that gallery is not undefined. */
                gallery && isGalleryAvailable() 
                    ? (
                        <ProjectDetailGalleryTabs gallery={ gallery } />
                    )
                    : <ProjectDetailGalleryEmpty />
                }
            </div>
        </section>
    );
};

export default ProjectDetailGallery;