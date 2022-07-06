import { IImage } from "./IImage"

/**
 * @interface Technology
 * @description A major tool that was used for a project or job experience.
 * @author J. Trpka
 * @property { string } id - Contentful ID
 * @property { string } name
 * @property { string } url - The home page
 * @property { IImage } logo
 */
export interface ITechnology {
    id: string;
    name: string;
    url: string;
    logo?: IImage;
}