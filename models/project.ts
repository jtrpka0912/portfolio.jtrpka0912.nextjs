/**
 * @interface Project
 * @description A single portfolio project post
 * @author J. Trpka
 * @property { string } slug The ID and URL slug for the post
 * @property { string } title Name of the project
 * @property { string[] } technology List of technologies used for project
 * @property { ProjectPackage } package List of other packages used for the project
 * @property { ProjectRepo } repo A repository URL link based on which repo its located
 * @property { ProjectDate } date A date when the project started and/if ended
 * @property { string } thumbnail A small image for the post listing
 * @property { ProjectGallery } gallery A list of images based on screen sizes
 * @property { boolean } resume If the project relates to a job experience.
 * @property { boolean } development If the project is still in development
 * @property { boolean } featured List this project on the featured list
 * @property { string } content The main content or description of the project
 */
export interface Project {
    slug: string,
    title: string,
    technology: string[],
    package?: ProjectPackage,
    repo?: ProjectRepo,
    date: ProjectDate,
    thumbnail?: string,
    gallery?: ProjectGallery,
    resume: boolean,
    development: boolean,
    featured: boolean,
    content?: string
}

/**
 * @interface ProjectPackage
 * @description A listing of packages from package managers.
 * @author J. Trpka
 * @property { string[] } npm Names of packages from Node Package Manager
 * @property { string[] } maven Names of packages from Maven repository
 */
interface ProjectPackage {
    npm?: string[],
    maven?: string[]
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
interface ProjectRepo {
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
interface ProjectDate {
    started?: string,
    ended?: string
}

/**
 * @interface ProjectGallery
 * @description A gallery of images with different screen sizes
 * @author J. Trpka
 * @property { string[] } desktop 1980x1080 (1080p)
 * @property { string[] } tablet 768x1024 (iPad)
 * @property { string[] } mobile 411x731 (Pixel 2)
 */
interface ProjectGallery {
    desktop?: string[],
    tablet?: string[],
    mobile?: string[]
}