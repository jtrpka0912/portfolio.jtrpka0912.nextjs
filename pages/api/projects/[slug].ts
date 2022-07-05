import { NextApiRequest, NextApiResponse } from "next";
import { Entry } from "contentful";

import { retrieveProjectBySlug } from "../../../api/contentful/projects";
import { ContentfulFactory } from "../../../models/api/contentful/ContentfulFactory";

import { IContentfulProject } from "../../../models/api/contentful/content-types/IContentfulProject";
import { IProject } from "../../../models/IProject";
import { IErrorResponse } from "../../../models/IErrorResponse";

const handler = async (req: NextApiRequest, res: NextApiResponse<IProject | IErrorResponse>) => {
  const contentfulFactory: ContentfulFactory = new ContentfulFactory();

  try {
    /**
     * @constant { Promise<Entry<IContentfulProject>> } contentfulProjectResponse
     * @summary Contentful project response
     * @description Response from the Contentful API to retrieve a project by slug
     * @author J. Trpka
     * @note Because a single value of query can either be string or string[]; need to check if slug is an array or not
     */
    const contentfulProjectResponse: Entry<IContentfulProject> = 
      await retrieveProjectBySlug(Array.isArray(req.query.slug) ? req.query.slug[0] : req.query.slug);
    
    res.status(200).json(contentfulFactory.createProject(contentfulProjectResponse));
  } catch(e: any) {
    console.trace(e);
    res.status(400).json({
      status: 400,
      title: 'Project Retrieval Error',
      message: e.message
    });
  }
}

export default handler;