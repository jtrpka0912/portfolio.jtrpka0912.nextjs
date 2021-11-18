/**
 * @interface Post
 * @description A generic post interface
 * @author J. Trpka
 * @property { string } slug The ID and URL slug for the post
 * @property { string } content The main content or description of the post
 */
 export interface Post {
    slug: string,
    content: string
}