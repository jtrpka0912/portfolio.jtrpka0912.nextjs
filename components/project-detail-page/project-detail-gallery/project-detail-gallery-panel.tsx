import { ProjectGallery } from "../../../models/project";
import { GalleryTabs } from "../../../models/enums/GalleryTabs";

/**
 * @interface ProjectDetailGalleryPanelProps
 * @summary The project detail gallery panel props
 * @author J. Trpka
 * @property { ProjectGallery } gallery
 * @property { GalleryTabs } active
 */
interface ProjectDetailGalleryPanelProps {
    gallery: ProjectGallery
    active: GalleryTabs
}

/**
 * @function ProjectDetailGalleryPanel
 * @summary Project detail gallery panel component
 * @description Reveal the different tab panels to show the image gallery for the project.
 * @author J. Trpka
 * @param { ProjectDetailGalleryPanelProps } props 
 * @returns { JSX }
 */
const ProjectDetailGalleryPanel = (props: ProjectDetailGalleryPanelProps) => {
    const { gallery, active } = props;

    return (
        <div className="gallery__panel">
            { active === GalleryTabs.Desktop && (
                <div role="tabpanel">
                </div>
            )}

            { active === GalleryTabs.Tablet && (
                <div role="tabpanel">
                </div>
            )}

            { active === GalleryTabs.Mobile && (
                <div role="tabpanel">
                </div>
            )}
        </div>
    );
};

export default ProjectDetailGalleryPanel;