import { createClient, ContentfulClientApi, EntryCollection, Entry } from "contentful"
import { ContentTypes } from "../../models/api/contentful/enums/ContentTypes";

export const client = (preview: boolean = false): ContentfulClientApi => {

  /**
   * @constant { string | undefined } spaceId
   * @summary Contentful Space ID
   * @author J. Trpka
   */
  const spaceId: string | undefined = process.env.CONTENTFUL_SPACE_ID;
  
  /**
   * @constant { string | undefined } contentDeliveryApi
   * @summary Contentful Delivery API Key
   * @description The API key to allow to retrieve published content
   * @author J. Trpka
   */
  const contentDeliveryApi: string | undefined = process.env.CONTENTFUL_CONTENT_DELIVERY;

  /**
   * @constant { string | undefined } contentPreviewApi
   * @summary Contentful Preview API Key
   * @description The API key to allow to retrieve published and draft content
   * @author J. Trpka
   */
  const contentPreviewApi: string | undefined = process.env.CONTENTFUL_CONTENT_PREVIEW;

  if(preview) {
    if(!spaceId || !contentPreviewApi) 
      throw new Error('Please define your Contentful credentials.');

    return createClient({
      space: spaceId,
      accessToken: contentPreviewApi
    });
  } else {
    if(!spaceId || !contentDeliveryApi) 
      throw new Error('Please define your Contentful credentials.');
    
    return createClient({
      space: spaceId,
      accessToken: contentDeliveryApi
    });
  }
}

/**
 * @async
 * @function retrieveEntries
 * @summary Retrieve Contentful Entries
 * @description Retrieve Contentful entries based on content type
 * @author J. Trpka
 * @returns { Promise<EntryCollection<T>> }
 */
export const retrieveEntries = async <T>(): Promise<EntryCollection<T>> => {
  return client().getEntries<T>();
};

/**
 * @async
 * @function retrieveEntry
 * @summary Retrieve a Contentful Entry by ID
 * @description Retrieve a single Contentful Entry by ID
 * @author J. Trpka
 * @param { string } id 
 * @returns { Promise<Entry<T>> }
 */
export const retrieveEntry = async <T>(id: string): Promise<Entry<T>> => {
  return client().getEntry<T>(id);
}