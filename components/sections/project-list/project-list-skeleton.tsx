import BaseSkeleton from "../../ui/base-skeleton";

/**
 * @function ProjectListSkeleton
 * @summary Project list skeleton component
 * @description An astract version of this component for page loading.
 * @author J. Trpka
 * @returns { JSX }
 */
const ProjectListSkeleton = () => {

    /**
     * @var { string } columnClasses
     * @description The column classes for the component.
     * @author J. Trpka
     */
    const columnClasses: string = 'column is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-fifth-widescreen';

    return (
        <section className="section">
            <div className="container">
                <div className="skeleton__project-list columns is-mobile is-multiline">
                    <div className={ `${ columnClasses }` }>
                        <BaseSkeleton type="thumbnail" />
                    </div>

                    <div className={ `${ columnClasses }` }>
                        <BaseSkeleton type="thumbnail" />
                    </div>

                    <div className={ `${ columnClasses }` }>
                        <BaseSkeleton type="thumbnail" />
                    </div>

                    <div className={ `${ columnClasses }` }>
                        <BaseSkeleton type="thumbnail" />
                    </div>

                    <div className={ `${ columnClasses }  is-hidden-mobile` }>
                        <BaseSkeleton type="thumbnail" />
                    </div>

                    <div className={ `${ columnClasses }  is-hidden-mobile` }>
                        <BaseSkeleton type="thumbnail" />
                    </div>

                    <div className={ `${ columnClasses }  is-hidden-mobile` }>
                        <BaseSkeleton type="thumbnail" />
                    </div>

                    <div className={ `${ columnClasses }  is-hidden-mobile` }>
                        <BaseSkeleton type="thumbnail" />
                    </div>

                    <div className={ `${ columnClasses } is-hidden-desktop-only  is-hidden-mobile` }>
                        <BaseSkeleton type="thumbnail" />
                    </div>

                    <div className={ `${ columnClasses } is-hidden-desktop-only is-hidden-tablet-only is-hidden-mobile` }>
                        <BaseSkeleton type="thumbnail" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectListSkeleton;