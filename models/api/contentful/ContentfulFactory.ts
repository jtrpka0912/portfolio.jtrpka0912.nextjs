import { Entry } from "contentful";
import { IProject } from "../../IProject";
import { IContentfulProject } from "./content-types/IContentfulProject";

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
   * @returns { IProject }
   */
  public createProject(contentfulProject: Entry<IContentfulProject>): IProject {
    return {
      title: contentfulProject.fields.title,
      slug: contentfulProject.fields.slug,
      package: contentfulProject.fields.packages,
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
}