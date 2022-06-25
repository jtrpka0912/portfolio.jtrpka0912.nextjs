import { createClient, ContentfulClientApi } from 'contentful';

/**
 * @class
 * @name Contentful
 * @summary Contentful wrapper class
 * @description Handle all contentful actions in this wrapper class.
 * @author J. Trpka
 */
export class Contentful {
  /**
   * @private 
   * @property { string | undefined } spaceID
   * @author J. Trpka
   */
  private spaceId: string | undefined = 
  process.env.CONTENTFUL_SPACE_ID;
  
  /**
   * @private
   * @property { string | undefined } contentDeliveryApi
   * @author J. Trpka
   */
  private contentDeliveryApi: string | undefined = 
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

  public retrieveEntries = async () => {
    console.info(await this.client.getEntries('projects'));
  };
}