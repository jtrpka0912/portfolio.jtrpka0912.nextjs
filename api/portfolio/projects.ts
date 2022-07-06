import { IProject } from "../../models/IProject";

/**
 * @constant { string } baseApi
 * @summary Projects Base API
 * @author J. Trpka
 */
const baseApi = `${process.env.PORTFOLIO_API_URL}/projects`;

/**
 * @async
 * @function retrieveProjects
 * @summary Retrieve projects
 * @description Call the portfolio API to retrieve all projects.
 * @author J. Trpka
 * @returns { Promise<IProject[]> }
 */
export const retrieveProjects = async (): Promise<IProject[]> => {
  const fetchResponse: Response = await fetch(`${baseApi}`);

  if(fetchResponse.status !== 200 || !fetchResponse.ok) throw new Error('Unable to retrieve projects');

  return fetchResponse.json();
}

/**
 * @async
 * @function retrieveProjectBySlug
 * @summary Retrieve project by slug
 * @description Call the portfolio API to retrieve a project by its slug.
 * @author J. Trpka
 * @param { string } slug 
 * @returns { Promise<IProject> }
 */
export const retrieveProjectBySlug = async (slug: string): Promise<IProject> => {
  const fetchResponse: Response = await fetch(`${baseApi}/${slug}`);
    
  if(fetchResponse.status !== 200 || !fetchResponse.ok) throw new Error('Unable to retrieve project with URL: ' + slug);

  return fetchResponse.json();
}