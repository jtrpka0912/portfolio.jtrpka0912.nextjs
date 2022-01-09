import BaseSkeleton from "../../ui/base-skeleton";

/**
 * @function ProjectDetailMainAreaContentSkeleton
 * @summary Project detail main area content skeleton component
 * @description An abstract version of this component for page loading.
 * @author J. Trpka
 * @returns { JSX }
 */
const ProjectDetailMainAreaContentSkeleton = () => {
    return (
        <div className="skeleton__main-area-content column is-three-quarters-desktop is-half-tablet">
            <div className="is-flex is-flex-direction-row is-flex-wrap-nowrap">
                <BaseSkeleton type="thumbnail" />

                <div className="is-flex-grow-1">
                    { [...Array(6)].map(e => <BaseSkeleton type="textline" />) }
                </div>
            </div>
            

            <div>
                { [...Array(9)].map(e => <BaseSkeleton type="textline" />) }
            </div>
            
        </div>
    );
};

export default ProjectDetailMainAreaContentSkeleton;