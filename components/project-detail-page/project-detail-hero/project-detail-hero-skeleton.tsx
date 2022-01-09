import BaseSkeleton from "../../ui/base-skeleton";

/**
 * @function ProjectDetailHeroSkeleton
 * @summary Project detail hero skeleton component
 * @description An abstract version of this component for page loading.
 * @author J. Trpka
 * @returns { JSX }
 */
const ProjectDetailHeroSkeleton = () => {
    return (
        <section className="hero-title hero is-info">
            <div className="hero-body">
                <div className="container">
                    <BaseSkeleton type="title" />
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailHeroSkeleton;