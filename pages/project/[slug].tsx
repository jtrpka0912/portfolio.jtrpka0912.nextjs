import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { getSingleProject } from "../../helpers/project";
import { Project } from "../../models/project";

interface ProjectDetailPageProps {
    project: Project
}

const ProjectDetailPage = (props: ProjectDetailPageProps) => {
    return (
        <div>Project Detail Page</div>
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
        // TODO: Brings up unhandled runtime error with loading the 404.js file.
        return {
            notFound: true
        }
    }
}

export default ProjectDetailPage;