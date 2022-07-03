import { IPost } from './IPost';
import { ProjectType } from './enums/ProjectType';

/**
 * @interface IProject
 * @extends IPost
 * @description A single portfolio project post
 * @author J. Trpka
 * @property { string } title Name of the project
 * @property { string[] } technology List of technologies used for project
 * @property { IProjectPackage } package List of other packages used for the project
 * @property { IProjectRepo } repo A repository URL link based on which repo its located
 * @property { IProjectDate } date A date when the project started and/if ended
 * @property { string } thumbnail A small image for the post listing
 * @property { IProjectGallery } gallery A list of images based on screen sizes
 * @property { ProjectType } type Is the project front-end, back-end, or fullstack
 * @property { string } resume If the project relates to a job experience. If it does, then add the job experience slug.
 * @property { boolean } inDevelopment If the project is still in development
 * @property { boolean } featured List this project on the featured list
 */
export interface IProject extends IPost {
    title: string,
    technology: string[],
    package?: IProjectPackage,
    repo?: IProjectRepo,
    date: IProjectDate,
    thumbnail?: string,
    gallery?: IProjectGallery,
    type: ProjectType
    resume: string,
    inDevelopment: boolean,
    featured: boolean,
}

/**
 * @interface IProjectPackage
 * @description A listing of packages from package managers.
 * @author J. Trpka
 * @property { IProjectNPMPackage[] } npm Names of packages from Node Package Manager.
 * @property { string[] } maven Names of packages from Maven repository.
 * @property { string[] } go Names of packages from the Go Package repository.
 * @property { string[] } nuget Names of packages for the .NET (Core) environement.
 */
export interface IProjectPackage {
    npm?: IProjectNPMPackage[],
    maven?: string[],
    go?: string[],
    nuget?: string[]
}

/**
 * @interface IProjectNPMPackages
 * @description A single NPM package and determine if its a dev dependency.
 * @author J. Trpka
 * @property { string } name
 * @property { boolean } isDevDependency A dependency package only suitable in the dev environment and never compiled for production
 */
export interface IProjectNPMPackage {
    name: string,
    isDevDependency: boolean
}

/**
 * @interface IProjectRepo
 * @description The location where the project's git repository
 * @author J. Trpka
 * @todo Create a new interface to construct the git repo array objects
 * @property { string } github
 * @property { string } gitlab
 * @property { string } bitbucket
 */
export interface IProjectRepo {
    github?: string,
    gitlab?: string,
    bitbucket?: string
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
 * @property { IProjectGalleryItem[] } desktop 1980x1080 (1080p)
 * @property { IProjectGalleryItem[] } tablet 768x1024 (iPad)
 * @property { IProjectGalleryItem[] } mobile 411x731 (Pixel 2)
 */
export interface IProjectGallery {
    desktop?: IProjectGalleryItem[],
    tablet?: IProjectGalleryItem[],
    mobile?: IProjectGalleryItem[]
}

/**
 * @interface IProjectGalleryItem
 * @description A detail description of a project image
 * @author J. Trpka
 * @property { string } image Path of the image
 * @property { string } altText
 * @property { string } description
 */
export interface IProjectGalleryItem {
    image: string,
    altText: string
    description?: string
}