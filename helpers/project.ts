import { Project } from "../models/project";
import { getSinglePost } from "./markdown";

const category: string = 'project';

export const getSingleProject = (postId: string): Project => {
    return getSinglePost<Project>(postId, category);
}

// TODO: When coding to retrieve all projects. Make sure to exclude the test project.