import { createClient, ContentfulClientApi, EntryCollection } from 'contentful';
import { ContentTypes } from './ContentTypes';

/**
 * @class
 * @name ContentfulClient
 * @summary Contentful Client Class
 * @description Handle the client connection to Contentful
 * @author J. Trpka
 */
export class ContentfulClient {
  /**
   * @private 
   * @property { string | undefined } spaceID
   * @author J. Trpka
   */
  private spaceId?: string = 
  process.env.CONTENTFUL_SPACE_ID;
  
  /**
   * @private
   * @property { string | undefined } contentDeliveryApi
   * @author J. Trpka
   */
  private contentDeliveryApi?: string = 
  process.env.CONTENTFUL_CONTENT_DELIVERY;
  
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
   * @todo Might want to pass a preview check arg
   */
  public constructor() {
    if(!this.spaceId || !this.contentDeliveryApi) throw new Error('Please define your Contentful credentials.');

    this.client = createClient({
      space: this.spaceId,
      accessToken: this.contentDeliveryApi
    });
  }
  
  /**
   * @public
   * @function retrieveEntries
   * @summary Retrieve Contentful Entries
   * @description Retrieve Contentful entries based on content type
   * @author J. Trpka <jeremy.trpka@perficient.com>
   * @param { string } contentType 
   * @returns { Promise<EntryCollection<T>> }
   */
  public retrieveEntries = async <T>(contentType: ContentTypes): Promise<EntryCollection<T>> => {
    return this.client.getEntries({
      content_type: contentType
    });
  };
}