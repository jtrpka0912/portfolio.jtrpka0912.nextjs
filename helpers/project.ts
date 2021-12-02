import { Project } from "../models/project";
import { getAllPosts, getSinglePost } from "./markdown";

/**
 * @var { string } category
 * @description The folder name that contains the project posts markdown files
 * @author J. Trpka
 */
const category: string = 'project';

/**
 * @var { string[] }
 * @description A list of slugs to exclude when retrieving all project posts.
 * @author J. Trpka
 */
const exclude: string[] = ['test'];

/**
 * @function getSingleProject
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
 * @description Retrieve all (non-excluded) projects
 * @author J. Trpka
 * @returns { Project[] }
 */
export const getAllProjects = (): Project[] => {
    const allProjects = getAllPosts<Project>(category);

    return allProjects.filter((project: Project) => {
        return !exclude.includes(project.slug);
    });
};