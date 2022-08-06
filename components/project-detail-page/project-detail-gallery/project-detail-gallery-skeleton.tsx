import BaseSkeleton from "../../ui/base-skeleton";
import Section from "../../ui/section/Section";

/**
 * @function ProjectDetailGallerySkeleton
 * @summary Project detail gallery skeleton component
 * @description An abstract version of this component for page loading.
 * @author J. Trpka
 * @returns { JSX }
 */
const ProjectDetailGallerySkeleton = () => {
    /**
     * @var { string } columnClasses
     * @description The column classes for the component.
     * @author J. Trpka
     */
    const columnClasses: string = 'column is-half-mobile is-one-third-tablet is-one-quarter-desktop';

    return (
        <Section>
            <div className="skeleton__project-detail-gallery">
                <div className="columns is-mobile is-multiline">
                    <div className={ `${ columnClasses }` }>
                        <BaseSkeleton type="thumbnail" />
                    </div>

                    <div className={ `${ columnClasses }` }>
                        <BaseSkeleton type="thumbnail" />
                    </div>

                    <div className={ `${ columnClasses } is-hidden-mobile` }>
                        <BaseSkeleton type="thumbnail" />
                    </div>

                    <div className={ `${ columnClasses } is-hidden-tablet-only is-hidden-mobile` }>
                        <BaseSkeleton type="thumbnail" />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default ProjectDetailGallerySkeleton;