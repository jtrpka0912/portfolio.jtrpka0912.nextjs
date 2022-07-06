import { Entry, EntryCollection } from "contentful";
import { NextApiRequest, NextApiResponse } from "next";
import { retrieveProjects } from "../../../api/contentful/projects";
import { IContentfulProject } from "../../../models/api/contentful/content-types/IContentfulProject";
import { ContentfulFactory } from "../../../models/api/contentful/ContentfulFactory";
import { IErrorResponse } from "../../../models/IErrorResponse";
import { IProject } from "../../../models/IProject";

/**
 * @async
 * @function handler
 * @summary NextJS API Handler
 * @description Handle all API calls with just /api/projects
 * @author J. Trpka
 * @param { NextApiRequest } req 
 * @param { NextApiResponse } res 
 */
const handler = async (req: NextApiRequest, res: NextApiResponse< IProject[] | IErrorResponse>) => {
  if(req.method !== 'GET') res.status(405).json({
    status: 405,
    title: 'Projects Error',
    message: 'Pathway not allowed'
  });

  /**
   * @constant { ContentfulFactory } contentfulFactory
   * @summary Contentful Factory object
   * @description Convert Contentful entries to Portfolio objects
   * @author J. Trpka 
   */
  const contentfulFactory: ContentfulFactory = new ContentfulFactory();

  try {
    /**
     * @constant { Promise<Entry<IContentfulProject[]>> } contentfulProjectResponse
     * @summary Contentful projects response
     * @description Response from the Contentful API to retrieve all projects
     * @author J. Trpka
     */
    const contentfulProjectResponse: EntryCollection<IContentfulProject> = 
      await retrieveProjects();

    res.status(200).json(contentfulProjectResponse.items.map(
      (contentfulProject: Entry<IContentfulProject>) => contentfulFactory.createProject(contentfulProject)
    ));
  } catch(e: any) {
    res.status(400).json({
      status: 400,
      title: 'Projects Retrieval Error',
      message: e.message
    });
  }
}

export default handler;