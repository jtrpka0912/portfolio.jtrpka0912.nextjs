import { createClient, ContentfulClientApi, EntryCollection } from 'contentful';
import { ContentTypes } from './ContentTypes';

/**
 * @deprecated
 * @class
 * @name ContentfulClient
 * @summary Contentful Client Class
 * @description Handle the client connection to Contentful
 * @author J. Trpka
 */
export class ContentfulClient {
  
  private spaceId?: string = process.env.CONTENTFUL_SPACE_ID;
  
  /**
   * @private
   * @property { string | undefined } contentDeliveryApi
   * @author J. Trpka
   */
  private contentDeliveryApi?: string = process.env.CONTENTFUL_CONTENT_DELIVERY;

  /**
   * @private
   * @property { string | undefined } contentPreviewApi
   * @author J. Trpka
   */
  private contentPreviewApi?: string = process.env.CONTENTFUL_CONTENT_PREVIEW;

  
  /**
   * @private
   * @property { ContentfulClientApi } client
   * @author J. Trpka
   */
  private client: ContentfulClientApi;

  /**
   * @constructor
   * @description Construct the Contentful wrapper by initializing the client property.
   * @author J. Trpka
   * @argument { boolean } preview - Defaults to false
   */
  public constructor(preview: boolean = false) {
    if(preview) {
      if(!this.spaceId || !this.contentPreviewApi) 
        throw new Error('Please define your Contentful credentials.');

      this.client = createClient({
        space: this.spaceId,
        accessToken: this.contentPreviewApi
      });
    } else {
      if(!this.spaceId || !this.contentDeliveryApi) 
        throw new Error('Please define your Contentful credentials.');
      
      this.client = createClient({
        space: this.spaceId,
        accessToken: this.contentDeliveryApi
      });
    }
  }
  
  /**
   * @public
   * @function retrieveEntries
   * @summary Retrieve Contentful Entries
   * @description Retrieve Contentful entries based on content type
   * @author J. Trpka
   * @param { string } contentType 
   * @returns { Promise<EntryCollection<T>> }
   */
  public retrieveEntries = async <T>(contentType: ContentTypes): Promise<EntryCollection<T>> => {
    return this.client.getEntries({
      content_type: contentType
    });
  };
}