import { Project } from "../models/project";
import { getAllPosts, getSinglePost } from "./markdown";

/**
 * @var { string } category
 * @description The folder name that contains the project posts markdown files
 * @author J. Trpka
 */
const category: string = 'project';

/**
 * @var { string[] } exclude
 * @description A list of slugs to exclude when retrieving all project posts.
 * @author J. Trpka
 */
const exclude: string[] = ['test'];

/**
 * @function getSingleProject
 * @summary Get single project
 * @description Retrieve a single project.
 * @author J. Trpka
 * @param { string } postId 
 * @returns { Project }
 */
export const getSingleProject = (postId: string): Project => {
    return getSinglePost<Project>(postId, category);
};

/**
 * @function getAllProjects
 * @summary Get all projects
 * @description Retrieve all (non-excluded) projects
 * @author J. Trpka
 * @returns { Project[] }
 */
export const getAllProjects = (): Project[] => {
    const allProjects = getAllPosts<Project>(category);

    return filterProjectsByEnv(allProjects);
};

/**
 * @function filterProjectsByEnv
 * @summary Filter projects by environment
 * @description Filter projects that should be excluded if in production, otherwise display all projects in development.
 * @author J. Trpka
 * @param { Project[] } projects 
 * @returns { Project[] }
 */
const filterProjectsByEnv = (projects: Project[]): Project[] => {
    if(process.env.NODE_ENV === "production") {
        return projects.filter((project: Project) => !exclude.includes(project.slug));
    }

    return projects;
}

/**
 * @function filterProjectsByTitle
 * @summary Filter projects by title
 * @description Filter projects that have a query string in its title.
 * @author J. Trpka
 * @param { Project[] } projects
 * @param { string } query 
 * @returns { Project[] }
 */
export const filterProjectsByTitle = (projects: Project[], query: string): Project[] => {
    return projects.filter((project: Project) => 
        project.title.toLowerCase().includes(query.toLowerCase()));
}