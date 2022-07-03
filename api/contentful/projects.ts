import { Entry } from "contentful";
import { retrieveEntry } from "../../helpers/api/contentful"
import { IContentfulProject } from "../../models/api/contentful/content-types/IContentfulProject"

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
  return retrieveEntry<IContentfulProject>(id);
};