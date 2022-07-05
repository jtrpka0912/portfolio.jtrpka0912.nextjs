/**
 * @interface IPost
 * @description A generic post interface
 * @author J. Trpka
 * @property { string } slug - The ID and URL slug for the post
 * @property { string } content - The main content or description of the post
 * @property { boolean } featured - Should it be seen on the home page
 */
 export interface IPost {
    slug: string;
    content: string;
    featured: boolean;
}