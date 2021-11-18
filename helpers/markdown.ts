import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { Post } from '../models/Post';

/**
 * @function getAllPostFiles
 * @description Retrieve all post files based on post category
 * @author J. Trpka
 * @param { string } category 
 * @throws
 * @returns { string[] }
 */
const getAllPostFiles = (category: string): string[] => {
    if(!category) throw new Error('You need to supply a post path.');

    const folderPath: string = path.join(process.cwd(), 'posts', category);

    return fs.readdirSync(folderPath);
}

/**
 * @function getAllPosts
 * @description Retrieve all posts from a single post category
 * @author J. Trpka
 * @param { string } category 
 * @returns { T[] }
 */
export const getAllPosts = <T extends Post>(category: string): T[] => {
    const files = getAllPostFiles(category);

    return files.map((file: string) => {
        return getSinglePost<T>(file, category);
    });
};

/**
 * @function getSinglePost
 * @description Retrieve a single post based on postID and post category
 * @author J. Trpka
 * @param { string } postId - Filename of the markdown post
 * @param { string } category
 * @returns { T }
 */
export const getSinglePost = <T extends Post>(postId: string, category: string): T => {
    const filePath: string = path.join(process.cwd(), 'posts', category, postId);
    const fileContent: string = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return <T>{
        ...data,
        content
    };
}