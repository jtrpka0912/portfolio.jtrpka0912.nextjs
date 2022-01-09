import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

// Helpers
import { getSingleProject } from "../../helpers/project";

// Models
import { Project } from "../../models/project";
import { BreadcrumbLink } from "../../models/breadcrumb-link";

// Components
import ProjectDetailGallery from "../../components/project-detail-page/project-detail-gallery/project-detail-gallery";
import ProjectDetailMainArea from "../../components/project-detail-page/project-detail-main-area/project-detail-main-area";
import TechnologyList from "../../components/sections/technology-list/technology-list";
import ProjectDetailHero from "../../components/project-detail-page/project-detail-hero/project-detail-hero";
import Breadcrumb from "../../components/sections/breadcrumb/breadcrumb";

// Skeleton Components
import BreadcrumbSkeleton from "../../components/sections/breadcrumb/breadcrumb-skeleton";
import TechnologyListSkeleton from "../../components/sections/technology-list/technology-list-skeleton";
import ProjectDetailHeroSkeleton from "../../components/project-detail-page/project-detail-hero/project-detail-hero-skeleton";
import ProjectDetailMainAreaSkeleton from "../../components/project-detail-page/project-detail-main-area/project-detail-main-area-skeleton";
import ProjectDetailGallerySkeleton from "../../components/project-detail-page/project-detail-gallery/project-detail-gallery-skeleton";

/**
 * @interface ProjectDetailPageProps
 * @summary Project detail page props
 * @description The props for the project detail page
 * @author J. Trpka
 * @property { Project } project
 */
interface ProjectDetailPageProps {
    project: Project
}

/**
 * @function ProjectDetailPage
 * @summary Project detail page component
 * @description The detail page for a project
 * @author J. Trpka
 * @param { ProjectDetailPageProps } props 
 * @returns { JSX }
 */
const ProjectDetailPage = (props: ProjectDetailPageProps) => {
    const { project } = props;project

    if(!project) {
        return (
            <div className="page project-detail">
                <ProjectDetailHeroSkeleton />
                <BreadcrumbSkeleton />
                <ProjectDetailMainAreaSkeleton />
                <TechnologyListSkeleton />
                <ProjectDetailGallerySkeleton />
            </div>
        );        
    }

    /**
     * @var { BreadcrumbLink[] } links
     * @description An array of breadcrumb links to build the breadcrumb component
     * @author J. Trpka
     */
    const links: BreadcrumbLink[] = [
        { text: 'Projects', url: '/project' },
        { text: project.title, url: `/project/${ project.slug }` }
    ];

    return (
        <div className="page project-detail">
            <ProjectDetailHero project={ project } />
            <Breadcrumb links={ links } />
            <ProjectDetailMainArea project={ project } />
            <TechnologyList technologies={ project.technology } />
            <ProjectDetailGallery gallery={ project.gallery } />
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true
    };
}

/**
 * @interface ProjectDetailStaticProps
 * @summary Project detail static props
 * @description The return value, of props, for the statically generated page
 * @author J. Trpka
 * @property { Project } project
 */
interface ProjectDetailStaticProps {
    project: Project
}

/**
 * @interface ProjectDetailParams
 * @extends ParsedUrlQuery
 * @summary Project detail params
 * @description The parameters passed into the statically generated page
 * @author J. Trpka
 * @property { string } slug
 */
interface ProjectDetailParams extends ParsedUrlQuery {
    slug: string
}

/**
 * @function getStaticProps
 * @param { any } context 
 * @returns { ProjectDetailStaticProps }
 */
export const getStaticProps: GetStaticProps<ProjectDetailStaticProps, ProjectDetailParams> = async (context) => {
    try {
        const { slug } = context.params!;
        if(!slug) throw new Error('Unable to find project.');

        const project = getSingleProject(`${ slug }.md`);

        return {
            props: {
                project
            }
        }
    } catch(error) {
        // ERROR: Brings up unhandled runtime error with loading the 404.js file.
        return {
            notFound: true
        }
    }
}

export default ProjectDetailPage;