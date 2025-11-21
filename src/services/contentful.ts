import * as contentful from 'contentful';
import { env } from 'process';

/**
 * @function retrieveSpaceID
 * @summary Retrieve Contentful Space ID from environment variable
 * @description Attempt to retrieve the Contentful Space ID, via an environment variable, but if none then throw an error.
 * @author J.Trpka<jtrpka0912@gmail.com>
 * @throws {Error} Throw an error to halt the service.
 * @returns {string} Contentful Space ID
 */
const retrieveSpaceID = (): string => {
  if (!env.CONTENTFUL_SPACE_ID) throw Error('Space ID not set');

  return env.CONTENTFUL_SPACE_ID;
};

/**
 * @function retrieveAccessToken
 * @summary Retrieve API keys from environment variables
 * @description Attempt to retrieve Contentful API keys, via environment variables, but if any are not set then throw an error.
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @throws {Error} Throw an error to halt the service.
 * @returns {string} The API key depending on current Node environment
 */
const retrieveAccessToken = (): string => {
  if (!env.CONTENTFUL_CONTENT_API_KEY) throw new Error('Content API Key not set');

  return env.CONTENTFUL_CONTENT_API_KEY;
};

export default contentful.createClient({
  space: retrieveSpaceID(),
  accessToken: retrieveAccessToken(),
  environment: env.CONTENTFUL_ENVIRONMENT ?? 'master',
  host: env.NODE_ENV === 'production' ? 'cdn.contentful.com' : 'preview.contentful.com',
});
