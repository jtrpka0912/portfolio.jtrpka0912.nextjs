/**
 * @interface Technology
 * @description A major tool that was used for a project or job experience.
 * @author J. Trpka
 * @property { string } slug
 * @property { string } title
 * @property { string } url - The home page
 * @property { string } logo
 */
export interface ITechnology {
    slug: string
    title: string
    url: string
    logo?: string
}