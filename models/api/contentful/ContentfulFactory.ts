import { Entry } from "contentful";
import { INpmPackage, IProject, IProjectPackage } from "../../IProject";
import { IContentfulNPMPackage as IContentfulNpmPackage } from "./content-types/IContentfulNPMPackage";
import { IContentfulProject } from "./content-types/IContentfulProject";
import { IContentfulProjectPackage } from "./content-types/IContentfulProjectPackage";

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
   * @param { Entry<IContentfulProject> } contentfulProject
   * @returns { IProject }
   */
  public createProject(contentfulProject: Entry<IContentfulProject>): IProject {
    return {
      title: contentfulProject.fields.title,
      slug: contentfulProject.fields.slug,
      package: this.createProjectPackage(contentfulProject.fields.packages),
      repo: contentfulProject.fields.repository,
      date: contentfulProject.fields.startDate,
      thumbnail: contentfulProject.fields.thumbnail,
      gallery: contentfulProject.fields.desktopProjectGallery,
      type: contentfulProject.fields.type,
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
}