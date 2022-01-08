import BaseSkeleton from "../../ui/base-skeleton";

/**
 * @function TechnologyListSkeleton
 * @summary Technology list skeleton component
 * @description An astract version of this component for page loading.
 * @author J. Trpka
 * @returns { JSX }
 */
const TechnologyListSkeleton = () => {
    /**
     * @var { string } columnClasses
     * @description All of the Bulma column classes in one variable.
     * @author J. Trpka
     */
    const columnClasses = 'column is-full-mobile is-one-third-tablet is-one-quarter-desktop';

    return (
        <section className="section">
            <div className="container">
                <div className="columns is-mobile is-multiline">
                    <div className={ `${ columnClasses } ` }>
                        <BaseSkeleton type="long-item" />
                    </div>

                    <div className={ `${ columnClasses } ` }>
                        <BaseSkeleton type="long-item" />
                    </div>

                    <div className={ `${ columnClasses } is-hidden-mobile` }>
                        <BaseSkeleton type="long-item" />
                    </div>

                    <div className={ `${ columnClasses } is-hidden-mobile` }>
                        <BaseSkeleton type="long-item" />
                    </div>

                    <div className={ `${ columnClasses } is-hidden-mobile` }>
                        <BaseSkeleton type="long-item" />
                    </div>

                    <div className={ `${ columnClasses } is-hidden-mobile` }>
                        <BaseSkeleton type="long-item" />
                    </div>

                    <div className={ `${ columnClasses } is-hidden-mobile is-hidden-tablet-only` }>
                        <BaseSkeleton type="long-item" />
                    </div>

                    <div className={ `${ columnClasses } is-hidden-mobile is-hidden-tablet-only` }>
                        <BaseSkeleton type="long-item" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologyListSkeleton;