import { Post } from './post';

/**
 * @interface Project
 * @extends Post
 * @description A single portfolio project post
 * @author J. Trpka
 * @property { string } title Name of the project
 * @property { string[] } technology List of technologies used for project
 * @property { ProjectPackage } package List of other packages used for the project
 * @property { ProjectRepo } repo A repository URL link based on which repo its located
 * @property { ProjectDate } date A date when the project started and/if ended
 * @property { string } thumbnail A small image for the post listing
 * @property { ProjectGallery } gallery A list of images based on screen sizes
 * @property { ProjectType } type Is the project front-end, back-end, or fullstack
 * @property { string } resume If the project relates to a job experience. If it does, then add the job experience slug.
 * @property { boolean } inDevelopment If the project is still in development
 * @property { boolean } featured List this project on the featured list
 */
export interface Project extends Post {
    title: string,
    technology: string[],
    package?: ProjectPackage,
    repo?: ProjectRepo,
    date: ProjectDate,
    thumbnail?: string,
    gallery?: ProjectGallery,
    type: ProjectType
    resume: string,
    inDevelopment: boolean,
    featured: boolean,
}

/**
 * @interface ProjectPackage
 * @description A listing of packages from package managers.
 * @author J. Trpka
 * @property { ProjectNPMPackages[] } npm Names of packages from Node Package Manager.
 * @property { string[] } maven Names of packages from Maven repository.
 * @property { string[] } go Names of packages from the Go Package repository.
 * @property { string[] } nuget Names of packages for the .NET (Core) environement.
 */
export interface ProjectPackage {
    npm?: ProjectNPMPackages[],
    maven?: string[],
    go?: string[],
    nuget?: string[]
}

/**
 * @interface ProjectNPMPackages
 * @description A single NPM package and determine if its a dev dependency.
 * @author J. Trpka
 * @property { string } name
 * @property { boolean } isDevDependency A dependency package only suitable in the dev environment and never compiled for production
 */
export interface ProjectNPMPackages {
    name: string,
    isDevDependency: boolean
}

/**
 * @interface ProjectRepo
 * @description The location where the project's git repository
 * @author J. Trpka
 * @note Only one of the properties will be used.
 * @property { string } github
 * @property { string } gitlab
 * @property { string } bitbucket
 */
export interface ProjectRepo {
    github?: string,
    gitlab?: string,
    bitbucket?: string
}

/**
 * @interface ProjectDate
 * @description The times when the project started and/or ended
 * @author J. Trpka
 * @property { string } started
 * @property { string } ended
 */
export interface ProjectDate {
    started?: string,
    ended?: string
}

/**
 * @interface ProjectGallery
 * @description A gallery of images with different screen sizes
 * @author J. Trpka
 * @property { ProjectGalleryItem[] } desktop 1980x1080 (1080p)
 * @property { ProjectGalleryItem[] } tablet 768x1024 (iPad)
 * @property { ProjectGalleryItem[] } mobile 411x731 (Pixel 2)
 */
export interface ProjectGallery {
    desktop?: ProjectGalleryItem[],
    tablet?: ProjectGalleryItem[],
    mobile?: ProjectGalleryItem[]
}

/**
 * @interface ProjectGalleryItem
 * @description A detail description of a project image
 * @author J. Trpka
 * @property { string } image Path of the image
 * @property { string } altText
 * @property { string } description
 */
export interface ProjectGalleryItem {
    image: string,
    altText: string
    description?: string
}

/**
 * @enum ProjectType
 * @description The type of project
 * @author J. Trpka
 */
export enum ProjectType {
    FRONTEND = 'frontend',
    BACKEND = 'backend',
    FULLSTACK = 'fullstack'
}