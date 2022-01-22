import Section from "../../ui/section";
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
        <Section>
            <div className="columns">
                <ProjectDetailMainAreaContentSkeleton />
                <ProjectDetailMainAreaSidebarSkeleton />
            </div>
        </Section>
    );
};

export default ProjectDetailMainAreaSkeleton;