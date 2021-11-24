import { ProjectGallery, ProjectGalleryItem } from "../../../models/project";
import { GalleryTabs } from "../../../models/enums/GalleryTabs";

import Thumbnail from "../../ui/thumbnail";

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
                    { gallery.desktop && gallery.desktop.map((galleryItem: ProjectGalleryItem, index: number) => (
                        <Thumbnail 
                            key={ index }
                            image={ galleryItem.image } 
                            altText={ galleryItem.altText } 
                            onClick={ () => console.info(galleryItem) }
                        />
                    )) }
                </div>
            )}

            { active === GalleryTabs.Tablet && (
                <div role="tabpanel">
                    { gallery.tablet && gallery.tablet.map((galleryItem: ProjectGalleryItem, index: number) => (
                        <Thumbnail 
                            key={ index }
                            image={ galleryItem.image } 
                            altText={ galleryItem.altText }
                            title="Sample Title" 
                            onClick={ () => console.info(galleryItem) }
                        />
                    )) }
                </div>
            )}

            { active === GalleryTabs.Mobile && (
                <div role="tabpanel">
                    { gallery.mobile && gallery.mobile.map((galleryItem: ProjectGalleryItem, index: number) => (
                        <Thumbnail 
                            key={ index }
                            image={ galleryItem.image } 
                            altText={ galleryItem.altText } 
                            onClick={ () => console.info(galleryItem) }
                        />
                    )) }
                </div>
            )}
        </div>
    );
};

export default ProjectDetailGalleryPanel;