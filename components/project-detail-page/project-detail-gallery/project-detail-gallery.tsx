import { ProjectGallery } from "../../../models/project";

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

    return (
        <section className="section">

        </section>
    );
};

export default ProjectDetailGallery;