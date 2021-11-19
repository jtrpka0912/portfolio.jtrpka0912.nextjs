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
 * @param { ProjectDetailGalleryTabsProps } props
 * @returns { JSX }
 */
const ProjectDetailGalleryTabs = (props: ProjectDetailGalleryTabsProps) => {
    const { gallery } = props;

    return (
        <div className="gallery__tabs tabs is-centered is-boxed" role="tablist">
            <ul>
                { gallery.desktop && gallery.desktop.length > 0 && (
                    <li role="tab"><a>Desktop</a></li>
                ) }

                { gallery.tablet && gallery.tablet.length > 0 && (
                    <li role="tab"><a>Tablet</a></li>
                ) }

                { gallery.mobile && gallery.mobile.length > 0 && (
                    <li role="tab"><a>Mobile</a></li>
                ) }
            </ul>
        </div>
    );
};

export default ProjectDetailGalleryTabs;