import { Entry, EntryCollection } from "contentful";
import { retrieveEntries, retrieveEntryById } from "../../helpers/api/contentful"
import { IContentfulProject } from "../../models/api/contentful/content-types/IContentfulProject"
import { ContentTypes } from "../../models/api/contentful/enums/ContentTypes";

/**
 * @async
 * @function retrieveProjects
 * @summary Retreive Contentful Projects
 * @description Retrieve all projects from Contentful
 * @author J. Trpka
 * @returns { Promise<EntryCollection<IContentfulProject>> }
 */
export const retrieveProjects = async (): Promise<EntryCollection<IContentfulProject>> => {
  return retrieveEntries<IContentfulProject>(ContentTypes.Project);
}

/**
 * @async
 * @function retrieveProjectById
 * @summary Retrieve Contentful Project By ID
 * @description Retrieve a single Contentful project by system ID
 * @author J. Trpka
 * @param { string } id 
 * @returns { Promise<Entry<IContentfulProject>>}
 */
export const retrieveProjectById = async (id: string): Promise<Entry<IContentfulProject>> => {
  return retrieveEntryById<IContentfulProject>(id);
};

/**
 * @async
 * @function retrieveProjectBySlug
 * @summary Retrieve Contentful project by slug
 * @description Retrieve a single, possible Contentful project by the slug field
 * @author J. Trpka
 * @param { string } slug 
 * @throws
 * @returns { Promise<Entry<IContentfulProject>> }
 */
export const retrieveProjectBySlug = async (slug: string): Promise<Entry<IContentfulProject>> => {
  /**
   * @constant { Promise<EntryCollection<IContentfulProject>> } retrievedProjects
   * @summary Retrieved projects
   * @description Retrieve all of the projects so that it can be filtered to just one item
   * @author J. Trpka
   */
  const retrievedProjects: EntryCollection<IContentfulProject> = await retrieveProjects();

  retrievedProjects.items = retrievedProjects.items.filter((project: Entry<IContentfulProject>) => project.fields.slug === slug);

  if(retrievedProjects.items.length <= 0) throw new Error('There are no projects with URL: ' + slug);
  if(retrievedProjects.items.length > 1) throw new Error('Found more than one project with URL: ' + slug);

  return retrievedProjects.items[0];
}