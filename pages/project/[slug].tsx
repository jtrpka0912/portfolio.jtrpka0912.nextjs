import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import { getSingleProject } from "../../helpers/project";
import { Project } from "../../models/project";
import ProjectDetailGallery from "../../components/project-detail-page/project-detail-gallery/project-detail-gallery";

/**
 * @interface ProjectDetailPageProps
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
    const { project } = props;
    console.info('Project', project);

    return (
        <div className="page project-detail">
            Project Detail Page
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

interface ProjectDetailStaticProps {
    project: Project
}

interface ProjectDetailParams extends ParsedUrlQuery {
    slug: string
}

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