import BaseSkeleton from "../../ui/base-skeleton";

/**
 * @function ProjectDetailMainAreaSidebarSkeleton
 * @summary Project detail main area sidebar skeleton component
 * @description An abstract version of this component for page loading.
 * @author J. Trpka
 * @returns { JSX }
 */
const ProjectDetailMainAreaSidebarSkeleton = () => {
    return (
        <aside className="main-area__sidebar column is-one-quarter-desktop is-half-tablet">
            <BaseSkeleton type="tag" />
            <BaseSkeleton type="tag" />

            <BaseSkeleton type="sidebar" />
            <BaseSkeleton type="sidebar" />
        </aside>
    );
};

export default ProjectDetailMainAreaSidebarSkeleton;