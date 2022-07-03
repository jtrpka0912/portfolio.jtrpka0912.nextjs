import { useContext } from "react";

import { IProjectGallery, IProjectGalleryItem } from "../../../models/IProject";
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
    gallery: IProjectGallery
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
    const onClickHandler = (galleryItem: IProjectGalleryItem): void => {
        uiContext.setImageModal(galleryItem);
    }

    /**
     * @function renderThumbnailColumn
     * @summary Render the thumbnail inside a Bulma column
     * @description Render the thumbnail image, inside of a Bulma column, for the three panels.
     * @author J. Trpka
     * @param { ProjectGalleryItem } galleryItem 
     * @param { number } index Only used for the key
     * @returns { JSX }
     */
    const renderThumbnailColumn = (galleryItem: IProjectGalleryItem, index: number): React.ReactNode => {
        return (
            <div key={ index } className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
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
                    <div className="columns is-mobile is-multiline">
                        { gallery.desktop && gallery.desktop.map((galleryItem: IProjectGalleryItem, index: number) => renderThumbnailColumn(galleryItem, index)) }
                    </div>
                </div>
            )}

            { active === GalleryTabs.Tablet && (
                <div role="tabpanel" id="tablet-panel" aria-labelledby="tablet-tab">
                    <div className="columns is-mobile is-multiline">
                        { gallery.tablet && gallery.tablet.map((galleryItem: IProjectGalleryItem, index: number) => renderThumbnailColumn(galleryItem, index)) }
                    </div>
                </div>
            )}

            { active === GalleryTabs.Mobile && (
                <div role="tabpanel" id="mobile-panel" aria-labelledby="mobile-tab">
                    <div className="columns is-mobile is-multiline">
                        { gallery.mobile && gallery.mobile.map((galleryItem: IProjectGalleryItem, index: number) => renderThumbnailColumn(galleryItem, index)) }
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetailGalleryPanel;