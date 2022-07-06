import { Asset, Entry, EntryCollection } from "contentful";
import { ProjectType } from "../../enums/ProjectType";
import { IImage } from "../../IImage";
import { INpmPackage, IProject, IProjectGalleryItem, IProjectPackage, IProjectRepo } from "../../IProject";
import { ITechnology } from "../../ITechnology";
import { IContentfulNPMPackage as IContentfulNpmPackage } from "./content-types/IContentfulNPMPackage";
import { IContentfulProject } from "./content-types/IContentfulProject";
import { IContentfulProjectGalleryItem } from "./content-types/IContentfulProjectGalleryItem";
import { IContentfulProjectRepo } from "./content-types/IContentfulProjectRepo";
import { IContentfulTechnology } from "./content-types/IContentfulTechnology";

/**
 * @class
 * @name ContentfulFactory
 * @summary Contentful Factory
 * @description Convert the Contentful Entries to Portfolio Objects
 * @author J. Trpka
 */
export class ContentfulFactory {
  /**
   * @public
   * @function createProject
   * @summary Create Project from Contentful
   * @description Convert a Contentful Project entry to an IProject object
   * @author J. Trpka
   * @todo Figure out how to deal with project type
   * @param { Entry<IContentfulProject> } contentfulProject
   * @returns { IProject }
   */
  public createProject(contentfulProject: Entry<IContentfulProject>): IProject {
    return this.sanitizeObject<IProject>({
      title: contentfulProject.fields.title,
      slug: contentfulProject.fields.slug,
      content: contentfulProject.fields.content,
      package: {
        npm: this.doesExist<IContentfulNpmPackage>(contentfulProject.fields.npmPackages) ?
          contentfulProject.fields.npmPackages.map(
            (contentfulNpmPackage: Entry<IContentfulNpmPackage>) => this.createNpmPackage(contentfulNpmPackage)
          )
        : []
      },
      repo: this.createProjectRepo(contentfulProject.fields.repository),
      technology: contentfulProject.fields.technologies.map(
        (contentfulTechnology) => this.createTechnology(contentfulTechnology)
      ),
      date: {
        started: contentfulProject.fields.startDate,
        ended: contentfulProject.fields.endDate
      },
      thumbnail: contentfulProject.fields.thumbnail ? 
        this.createImage(contentfulProject.fields.thumbnail) :
        undefined,
      gallery: {
        desktop: this.doesExist<IContentfulProjectGalleryItem>(contentfulProject.fields.desktopProjectGallery) ? 
          contentfulProject.fields.desktopProjectGallery.map(
            (contentfulGalleryItem: Entry<IContentfulProjectGalleryItem>) => this.createProjectGalleryItem(contentfulGalleryItem)
          ) : [],
        tablet: this.doesExist<IContentfulProjectGalleryItem>(contentfulProject.fields.tabletProjectGallery) ? 
          contentfulProject.fields.tabletProjectGallery.map(
            (contentfulGalleryItem: Entry<IContentfulProjectGalleryItem>) => this.createProjectGalleryItem(contentfulGalleryItem)
          ) : [],
        mobile: this.doesExist<IContentfulProjectGalleryItem>(contentfulProject.fields.mobileProjectGallery) ?
          contentfulProject.fields.mobileProjectGallery.map(
            (contentfulGalleryItem: Entry<IContentfulProjectGalleryItem>) => this.createProjectGalleryItem(contentfulGalleryItem)
          ): []
      },
      type: contentfulProject.fields.type as ProjectType,
      resume: '',
      inDevelopment: contentfulProject.fields.inDevelopment,
      featured: contentfulProject.fields.featured
    });
  }

  /**
   * @public
   * @function createProjectRepo
   * @summary Create Project Repos from Contentful
   * @description Convert Contentful Project Repositories entry to an IProjectRepo object
   * @author J. Trpka
   * @param { Entry<IContentfulProjectRepo> } contentfulProjectPackage 
   * @returns { IProjectRepo }
   */
  public createProjectRepo(
    contentfulRepo: Entry<IContentfulProjectRepo>
  ): IProjectRepo {
    return this.sanitizeObject<IProjectRepo>({
      github: contentfulRepo.fields.github,
      gitlab: contentfulRepo.fields.gitlab,
      bitbucket: contentfulRepo.fields.bitBucket
    });
  }

  /**
   * @public
   * @function createProjectGalleryItem
   * @summary Create Project Gallery Item from Contentful
   * @description Convert a Contentful project gallery item to an IProjectGalleryItem object
   * @author J. Trpka
   * @param { Entry<IContentfulProjectGalleryItem> } contentfulPackageGalleryItem 
   * @returns { IProjectGalleryItem }
   */
  public createProjectGalleryItem(
    contentfulPackageGalleryItem: Entry<IContentfulProjectGalleryItem>
  ): IProjectGalleryItem {
    return this.sanitizeObject<IProjectGalleryItem>({
      image: this.createImage(contentfulPackageGalleryItem.fields.image),
      description: contentfulPackageGalleryItem.fields.description
    });
  }

  /**
   * @public
   * @function createNpmPackage
   * @summary Create NPM Packages from Contentful
   * @description Convert an array of Contentful NPM Package entry to an array of INpmPackage objects
   * @author J. Trpka
   * @param { Entry<IContentfulNpmPackage> } contentfulProjectPackage 
   * @returns { INpmPackage }
   */
   public createNpmPackage(
    contentfulNpmPackage: Entry<IContentfulNpmPackage>
  ): INpmPackage {
    return this.sanitizeObject<INpmPackage>({
      name: contentfulNpmPackage.fields.name,
      slug: contentfulNpmPackage.fields.slug
    });
  }

  /**
   * @public
   * @function createTechnology
   * @summary Create Technology from Contentful
   * @description Convert a technology from Contentful to an ITechnology object
   * @author J. Trpka
   * @param { Entry<IContentfulTechnology> } contentfulTechnology 
   * @returns { ITechnology }
   */
  public createTechnology(
    contentfulTechnology: Entry<IContentfulTechnology>
  ): ITechnology {
    return this.sanitizeObject<ITechnology>({
      id: contentfulTechnology.sys.id,
      name: contentfulTechnology.fields.name,
      url: contentfulTechnology.fields.url,
      logo: contentfulTechnology.fields.logo ? 
        this.createImage(contentfulTechnology.fields.logo) : 
        undefined
    });
  }

  /**
   * @public
   * @function createImage
   * @summary Create Image from Contentful Asset
   * @description Convert Contentful Asset to an IImage object
   * @author J. Trpka
   * @param { Asset } contentfulAsset 
   * @returns { IImage }
   * @throws
   */
   public createImage(contentfulAsset: Asset): IImage {
    if(!contentfulAsset.fields.file.contentType.includes('image'))
      throw new Error('Unable to convert Contentful media asset image since it is not an image file.');

    return this.sanitizeObject<IImage>({
      path: `https:${contentfulAsset.fields.file.url}`,
      altText: contentfulAsset.fields.description
    });
  }

  /**
   * @private
   * @function doesExist
   * @summary Does Contentful Entry exist?
   * @description Check if the Entry exists
   * @author J. Trpka
   * @param { Entry<T> | Entry<T>[] } entry
   * @returns { boolean }
   */
  private doesExist<T>(entry: Entry<T> | Entry<T>[]): boolean {
    return !!entry;
  }

  /**
   * @function sanitizeObject
   * @summary Sanitize Object
   * @description Take a Portfolio object and remove any properties that are undefined
   * @author J. Trpka
   * @note This is only necessary due to the NextJS serializations not allowing undefined
   * @see https://github.com/vercel/next.js/discussions/11209
   * @param { T } unsanitizedObject 
   * @returns { T }
   */
  private sanitizeObject<T>(unsanitizedObject: T): T {
    return JSON.parse(JSON.stringify(unsanitizedObject));
  }
}