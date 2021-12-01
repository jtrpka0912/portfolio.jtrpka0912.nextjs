import { useContext } from "react";

import { ProjectGallery, ProjectGalleryItem } from "../../../models/project";
import { GalleryTabs } from "../../../models/enums/GalleryTabs";

import Thumbnail from "../../ui/thumbnail";

import { UiContext } from "../../context/ui";

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
    const uiContext = useContext(UiContext);

    const { gallery, active } = props;

    /**
     * @function onClickHandler
     * @event onClick
     * @description Click the thumbnail to display the image modal of the gallery item
     * @author J. Trpka
     * @param { ProjectGalleryItem } galleryItem This will still work with the ImageModalData type since they both share the same properties.
     */
    const onClickHandler = (galleryItem: ProjectGalleryItem): void => {
        uiContext.setImageModal(galleryItem);
    }

    /**
     * @function renderThumbnailColumn
     * @summary Render the thumbnail inside a Bulma column
     * @description Render the thumbnail image, inside of a Bulma column, for the three panels.
     * @author J. Trpka
     * @todo Since I can not use JSX for the return type, figure out what should be returned instead of any.
     * @param { ProjectGalleryItem } galleryItem 
     * @param { number } index Only used for the key
     * @returns { any }
     */
    const renderThumbnailColumn = (galleryItem: ProjectGalleryItem, index: number) => {
        return (
            <div key={ index } className="column is-half-tablet is-one-quarter-desktop">
                <Thumbnail 
                    image={ galleryItem.image } 
                    altText={ galleryItem.altText } 
                    onClick={ () => onClickHandler(galleryItem) }
                />
            </div>
        )
    } 

    return (
        <div className="gallery__panel">
            { active === GalleryTabs.Desktop && (
                <div role="tabpanel" id="desktop-panel" aria-labelledby="desktop-tab">
                    <div className="columns is-multiline">
                        { gallery.desktop && gallery.desktop.map((galleryItem: ProjectGalleryItem, index: number) => renderThumbnailColumn(galleryItem, index)) }
                    </div>
                </div>
            )}

            { active === GalleryTabs.Tablet && (
                <div role="tabpanel" id="tablet-panel" aria-labelledby="tablet-tab">
                    <div className="columns is-multiline">
                        { gallery.tablet && gallery.tablet.map((galleryItem: ProjectGalleryItem, index: number) => renderThumbnailColumn(galleryItem, index)) }
                    </div>
                </div>
            )}

            { active === GalleryTabs.Mobile && (
                <div role="tabpanel" id="mobile-panel" aria-labelledby="mobile-tab">
                    <div className="columns is-multiline">
                        { gallery.mobile && gallery.mobile.map((galleryItem: ProjectGalleryItem, index: number) => renderThumbnailColumn(galleryItem, index)) }
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetailGalleryPanel;