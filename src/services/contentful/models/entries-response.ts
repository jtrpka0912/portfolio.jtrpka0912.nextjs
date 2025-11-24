/**
 * @type
 * @name EntriesResponse
 * @summary Entries Response Body
 * @description The entries collection JSON response body.
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @see {@link https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/entries/entries-collection | Contentful REST API Documentation}
 * @param {number} total - Total number of entries (pagination)
 * @param {number} skip - Pagination skip index (pagination)
 * @param {number} limit - The amount of entries per page (pagination)
 * @param {T[]} items - The items (Entries) array
 */
export type EntriesResponse<T> = {
  total: number;
  skip: number;
  limit: number;
  items: EntriesItem<T>[];
};

/**
 * @type
 * @name EntriesItem
 * @summary Entries Individual Item
 * @description The entries that were retrieved from the response.
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @param {ItemMetadata} metadata - Not sure what this does
 * @param {ItemSystem} sys - System information for the item
 * @param {T} fields - The fields for the entry
 */
type EntriesItem<T> = {
  metadata: ItemMetadata;
  sys: ItemSystem;
  fields: T;
};

/**
 * @type
 * @name ItemMetadata
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @note Likely not to be used.
 * @param {string[]} tags - Not sure what this contains
 * @param {string[]} concepts - Not sure what this contains
 */
type ItemMetadata = {
  tags: string[];
  concepts: string[];
};

/**
 * @type
 * @name ItemSystem
 * @summary Item System Data
 * @description System information of the entry item including entry ID.
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @param {string} type - The type of item (likely an Entry)
 * @param {string} id - Entry Identifier
 * @param {number} revision - Not sure what this is
 * @param {string} createdAt - When the entry was first created
 * @param {string} updatedAt - When the entry was last updated
 * @param {string} publishedAt - When the entry was last published
 * @param {string} firstPublishedAt - When the entry was first published
 * @param {number} publishedVersion - Not sure what this is
 * @param {string} locale - Language used for the entry
 */
type ItemSystem = {
  // ... not everything is included
  type: string;
  id: string;
  revision: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  firstPublishedAt: string;
  publishedVersion: number;
  locale: string;
};
