import { Asset, Entry } from "contentful";
import { ProjectType } from "../../enums/ProjectType";
import { IImage } from "../../IImage";
import { INpmPackage, IProject, IProjectGalleryItem, IProjectPackage, IProjectRepo } from "../../IProject";
import { IContentfulNPMPackage as IContentfulNpmPackage } from "./content-types/IContentfulNPMPackage";
import { IContentfulProject } from "./content-types/IContentfulProject";
import { IContentfulProjectGalleryItem } from "./content-types/IContentfulProjectGalleryItem";
import { IContentfulProjectPackage } from "./content-types/IContentfulProjectPackage";
import { IContentfulProjectRepo } from "./content-types/IContentfulProjectRepo";

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
    return {
      title: contentfulProject.fields.title,
      slug: contentfulProject.fields.slug,
      package: this.createProjectPackage(contentfulProject.fields.packages),
      repo: this.createProjectRepo(contentfulProject.fields.repository),
      date: {
        started: contentfulProject.fields.startDate,
        ended: contentfulProject.fields.endDate
      },
      thumbnail: this.createImage(contentfulProject.fields.thumbnail),
      gallery: {
        desktop: this.createPackageGalleryItems(contentfulProject.fields.desktopProjectGallery),
        tablet: this.createPackageGalleryItems(contentfulProject.fields.tabletProjectGallery),
        mobile: this.createPackageGalleryItems(contentfulProject.fields.mobileProjectGallery)
      },
      type: ProjectType.FULLSTACK,
      resume: '',
      inDevelopment: contentfulProject.fields.inDevelopment,
      featured: contentfulProject.fields.featured
    }
  }

  /**
   * @public
   * @function createProjectPackage
   * @summary Create Project Package from Contentful
   * @description Convert a Contentful Project Package entry to an IProjectPackage object
   * @author J. Trpka
   * @param { Entry<IContentfulProjectPackage> } contentfulProjectPackage 
   * @returns { IProjectPackage }
   */
  public createProjectPackage(
    contentfulProjectPackage: Entry<IContentfulProjectPackage>
  ): IProjectPackage {
    return {
      npm: this.createNpmPackages(contentfulProjectPackage.fields.npm),
      maven: [],
      go: [],
      nuget: []
    }
  }

  /**
   * @public
   * @function createNpmPackage
   * @summary Create NPM Packages from Contentful
   * @description Convert an array of Contentful NPM Package entry to an array of INpmPackage objects
   * @author J. Trpka
   * @param { Entry<IContentfulNpmPackage>[] } contentfulProjectPackage 
   * @returns { IProjectPackage[] }
   */
  public createNpmPackages(
    contentfulNpmPackages: Entry<IContentfulNpmPackage>[]
  ): INpmPackage[] {
    return contentfulNpmPackages.map(
      (contentfulNpmPackage: Entry<IContentfulNpmPackage>) => (
        {
          name: contentfulNpmPackage.fields.name,
          slug: contentfulNpmPackage.fields.slug
        }
      )
    );
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
    return {
      github: contentfulRepo.fields.github,
      gitlab: contentfulRepo.fields.gitlab,
      bitbucket: contentfulRepo.fields.bitBucket
    }
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

    return {
      path: contentfulAsset.fields.file.url,
      altText: contentfulAsset.fields.description
    }
  }

  /**
   * @public
   * @function createPackageGalleryItems
   * @summary Create Package Gallery Items from Contentful
   * @description Convert an array of Contentful project gallery items to an array of IProjectGalleryItem objects 
   * @author J. Trpka
   * @param { Asset } contentfulAsset 
   * @returns { IProjectGalleryItem[] }
   * @throws
   */
  public createPackageGalleryItems(
    contentfulPackageGalleryItems: Entry<IContentfulProjectGalleryItem>[]
  ): IProjectGalleryItem[] {
    return contentfulPackageGalleryItems.map(
      (contentfulPackageGalleryItem: Entry<IContentfulProjectGalleryItem>) => (
        {
          image: this.createImage(contentfulPackageGalleryItem.fields.image),
          description: contentfulPackageGalleryItem.fields.description
        }
      )
    );
  }
}