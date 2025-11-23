/**
 * @class
 * @name ContentfulRestApi
 * @summary Contentful REST API Service Class
 * @author J. Trpka<jtrpka0912@gmail.com>
 */
export default class ContentfulRestApi {
  /**
   * @private
   * @static
   * @const {string} BASE_URL
   * @summary Base URL for Contentful
   * @description The base URL for the Contentful REST API depending on application environment
   * @author J. Trpka<jtrpka0912@gmail.com>
   */
  private static BASE_URL: string =
    process.env.NODE_ENV === 'production'
      ? 'https://cdn.contentful.com'
      : 'https://preview.contentful.com';

  private spaceID: string;
  private environment: string;
  private apiKey: string;

  /**
   * @function @constructor
   * @summary Contentful REST API Constructor
   * @description Check and initialize the needed information to make request calls to Contentful
   * @author J. Trpka<jtrpka0912@gmail.com>
   * @throws {Error} - Throw an error if configuration was not set.
   */
  public constructor() {
    if (!process.env.CONTENTFUL_SPACE_ID)
      throw new Error('Contentful Space ID is not set or configured correctly.');

    if (!process.env.CONTENTFUL_ENVIRONMENT)
      throw new Error('Contentful Environment is not set or configured correctly.');

    if (!process.env.CONTENTFUL_CONTENT_API_KEY)
      throw new Error('Contentful Content API Key is not set or configured correctly.');

    this.spaceID = process.env.CONTENTFUL_SPACE_ID;
    this.environment = process.env.CONTENTFUL_ENVIRONMENT;
    this.apiKey = process.env.CONTENTFUL_CONTENT_API_KEY;
  }

  /**
   * @private
   * @async
   * @function getEntries
   * @summary Generic Get Entries
   * @description Get content entries from Contentful. For public usage, use the specific `get{ContentType}Entries` functions.
   * @author J. Trpka<jtrpka0912@gmail.com>
   * @returns {Promise<object>} Contentful Entries Response
   */
  private getEntries = async (): Promise<object> => {
    const endpoint = `/spaces/${this.spaceID}/environments/${this.environment}/entries`;

    const searchParams: string[][] = [['access_token', this.apiKey]];

    const url: URL = ContentfulRestApi.buildURL(endpoint, searchParams);

    return ContentfulRestApi.sendRequest<object>(url);
  };

  /**
   * @private
   * @static
   * @function sendRequest
   * @summary Send REST API Request
   * @description Send a (GET) REST API request to Contentful and retrieve an expected JSON response.
   * @author J. Trpka<jtrpka0912@gmail.com>
   * @type {T} The expected JSON response content
   * @param {URL} url - The URL to send a request
   * @throws {Error} - If the response is not 200 or "ok" then throw an error.
   * @returns {Promise<T>}
   */
  private static sendRequest = async <T>(url: URL): Promise<T> => {
    const response: Response = await fetch(url);

    if (response.status !== 200 || response.ok)
      throw new Error(`Error: ${response.status} - ${response.statusText}, response failed.`);

    const json: T = await response.json();

    return json;
  };

  /**
   * @private
   * @static
   * @function buildURL
   * @summary A URL Builder
   * @description Build the URL endpoint for the Contentful REST API.
   * @author J. Trpka<jtrpka0912@gmail.com>
   * @param {string} endpoint - The endpoint for the REST API request.
   * @returns {URL}
   */
  private static buildURL = (endpoint: string, searchParams: string[][] = []): URL => {
    const urlSearchParams: URLSearchParams = new URLSearchParams(searchParams);

    const url = new URL(`${ContentfulRestApi.BASE_URL}/${endpoint}${urlSearchParams.toString()}`);

    return url;
  };
}
