import { Project } from "../models/project";
import { getSinglePost } from "./markdown";

const category: string = 'project';

export const getSingleProject = (postId: string): Project => {
    return getSinglePost<Project>(postId, category);
}