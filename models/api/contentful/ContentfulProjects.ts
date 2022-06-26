import { EntryCollection } from "contentful";
import { ContentfulClient } from "./ContentfulClient";
import { ContentTypes } from "./ContentTypes";
import { ContentfulProject } from './content-types/contentful-project';

/**
 * @deprecated
 * @class
 * @name ContentfulProjects
 * @summary Contentful project class
 * @description Handle Contentful project functionality
 * @author J. Trpka
 */
export class ContentfulProjects {
  /**
   * @private
   * @property { ContentfulClient } client
   * @description Use the Contentful client to retrieve entries
   * @author J. Trpka
   */
  private client: ContentfulClient;

  /**
   * @constructor
   * @description Set the Contentful client
   * @author J. Trpka
   */
  public constructor() {
    this.client = new ContentfulClient();
  }

  /**
   * @function retrieveProjects
   * @summary Retrieve Projects from Contentful
   * @description Retrieve all projects from Contentful
   * @author J. Trpka
   * @returns { Promise<EntryCollection<ContentfulProject>> }
   */
  public retrieveProjects = async (): Promise<EntryCollection<ContentfulProject>> => {
    return this.client.retrieveEntries<ContentfulProject>(ContentTypes.Project);
  };
}