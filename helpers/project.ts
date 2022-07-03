import { IProject } from "../models/IProject";
import { getAllPosts, getSinglePost } from "./markdown";

/**
 * @deprecated
 * @var { string } category
 * @description The folder name that contains the project posts markdown files
 * @author J. Trpka
 */
const category: string = 'project';

/**
 * @deprecated
 * @var { string[] } exclude
 * @description A list of slugs to exclude when retrieving all project posts.
 * @author J. Trpka
 */
const exclude: string[] = ['test'];

/**
 * @deprecated
 * @function getSingleProject
 * @summary Get single project
 * @description Retrieve a single project.
 * @author J. Trpka
 * @param { string } postId 
 * @returns { Project }
 */
export const getSingleProject = (postId: string): IProject => {
    return getSinglePost<IProject>(postId, category);
};

/**
 * @deprecated
 * @function getAllProjects
 * @summary Get all projects
 * @description Retrieve all (non-excluded) projects
 * @author J. Trpka
 * @returns { Project[] }
 */
export const getAllProjects = (): IProject[] => {
    const allProjects = getAllPosts<IProject>(category);

    return filterProjectsByEnv(allProjects);
};

/**
 * @deprecated
 * @function filterProjectsByEnv
 * @summary Filter projects by environment
 * @description Filter projects that should be excluded if in production, otherwise display all projects in development.
 * @author J. Trpka
 * @param { Project[] } projects 
 * @returns { Project[] }
 */
const filterProjectsByEnv = (projects: IProject[]): IProject[] => {
    if(process.env.NODE_ENV === "production") {
        return projects.filter((project: IProject) => {
            return !exclude.includes(project.slug);
        });
    }

    return projects;
}