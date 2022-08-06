import BaseSkeleton from "../../ui/base-skeleton";
import Section from "../../ui/section/Section";

/**
 * @function BreadcrumbSkeleton
 * @summary Breadcrumb skeleton
 * @description Show an abstraction of the breadcrumb when loading page data.
 * @author J. Trpka
 * @returns { JSX }
 */
const BreadcrumbSkeleton = () => {
    return (
        <Section>
            <div className="skeleton__breadcrumb is-flex is-flex-direction-row is-flex-wrap-nowrap">
                <BaseSkeleton type="tag" />
                <BaseSkeleton type="tag" />
                <BaseSkeleton type="tag" />
            </div>
        </Section>
    );
}

export default BreadcrumbSkeleton;