import { IPost } from './IPost';
import { ProjectType } from './enums/ProjectType';
import { IImage } from './IImage';
import { ITechnology } from './ITechnology';
import { GitRepoTypes } from './enums/GitRepoTypes';

/**
 * @interface IProject
 * @extends IPost
 * @description A single portfolio project post
 * @author J. Trpka
 * @property { string } title Name of the project
 * @property { ITechnology[] } technology List of technologies used for project
 * @property { IProjectPackage } package List of other packages used for the project
 * @property { IProjectGitRepository[] } gitRepositories A list of repository URL links
 * @property { IProjectDate } date A date when the project started and/if ended
 * @property { IImage } thumbnail A small image for the post listing
 * @property { IProjectGallery } gallery A list of images based on screen sizes
 * @property { ProjectType } type Is the project front-end, back-end, or fullstack
 * @property { string } resume If the project relates to a job experience. If it does, then add the job experience slug.
 * @property { boolean } inDevelopment If the project is still in development
 */
export interface IProject extends IPost {
    title: string,
    technology: ITechnology[];
    packages?: IProjectPackages;
    gitRepositories?: IProjectGitRepository[];
    date: IProjectDate;
    thumbnail?: IImage;
    gallery?: IProjectGallery;
    type: ProjectType;
    resume: string;
    inDevelopment: boolean;
}

/**
 * @interface IProjectPackages
 * @description A listing of packages from package managers.
 * @author J. Trpka
 * @property { IProjectPackage[] } npm Packages from Node Package Manager.
 * @property { string[] } maven Names of packages from Maven repository.
 * @property { string[] } go Names of packages from the Go Package repository.
 * @property { string[] } nuget Names of packages for the .NET (Core) environement.
 */
export interface IProjectPackages {
    npm?: INpmPackage[],
    maven?: string[],
    go?: string[],
    nuget?: string[]
}

/**
 * @interface INpmPackage
 * @description A single NPM package
 * @author J. Trpka
 * @property { string } name - Full name of package
 * @property { string } slug - NPM URL friendly slug
 */
export interface INpmPackage {
    name: string;
    slug: string;
}

/**
 * @interface IProjectGitRepository
 * @description A single repository for a project.
 * @author J. Trpka
 * @property { string } label
 * @property { string } url
 * @property { GitRepoTypes } type
 */
export interface IProjectGitRepository {
    label: string;
    url: string;
    type: GitRepoTypes;
}

/**
 * @interface IProjectDate
 * @description The times when the project started and/or ended
 * @author J. Trpka
 * @property { string } started
 * @property { string } ended
 */
export interface IProjectDate {
    started?: string,
    ended?: string
}

/**
 * @interface IProjectGallery
 * @description A gallery of images with different screen sizes
 * @author J. Trpka
 * @property { IImage[] } desktop 1980x1080 (1080p)
 * @property { IImage[] } tablet 768x1024 (iPad)
 * @property { IImage[] } mobile 411x731 (Pixel 2)
 */
export interface IProjectGallery {
    desktop?: IProjectGalleryItem[],
    tablet?: IProjectGalleryItem[],
    mobile?: IProjectGalleryItem[]
}

/**
 * @interface IProjectGalleryItem
 * @description A single project gallery media item
 * @author J. Trpka
 * @property { IImage } image
 * @property { string | undefined } description
 */
export interface IProjectGalleryItem {
    image: IImage;
    description?: string;   
}