import ProjectDetailMainAreaContentSkeleton from "./project-detail-main-area-content-skeleton";
import ProjectDetailMainAreaSidebarSkeleton from "./project-detail-main-area-sidebar-skeleton";

/**
 * @function ProjectDetailMainAreaSkeleton
 * @summary Project detail main area skeleton component
 * @description An abstract version of this component for page loading.
 * @author J. Trpka
 * @returns { JSX }
 */
const ProjectDetailMainAreaSkeleton = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <ProjectDetailMainAreaContentSkeleton />
                    <ProjectDetailMainAreaSidebarSkeleton />
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailMainAreaSkeleton;