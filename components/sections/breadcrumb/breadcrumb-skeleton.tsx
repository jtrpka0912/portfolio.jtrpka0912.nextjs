import BaseSkeleton from "../../ui/base-skeleton";

/**
 * @function BreadcrumbSkeleton
 * @summary Breadcrumb skeleton
 * @description Show an abstraction of the breadcrumb when loading page data.
 * @author J. Trpka
 * @returns { JSX }
 */
const BreadcrumbSkeleton = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="skeleton__breadcrumb is-flex is-flex-direction-row is-flex-wrap-nowrap">
                    <BaseSkeleton type="tag" />
                    <BaseSkeleton type="tag" />
                    <BaseSkeleton type="tag" />
                </div>
            </div>
        </section>
        
    );
}

export default BreadcrumbSkeleton;