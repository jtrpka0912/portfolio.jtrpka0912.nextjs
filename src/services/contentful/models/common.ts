/**
 * @type
 * @name EntryItem
 * @summary Entry Item
 * @description The entries that were retrieved from the response.
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @param {ItemMetadata} metadata - Not sure what this does
 * @param {ItemSystem} sys - System information for the item
 * @param {object} fields - The fields for the entry
 */
export type EntryItem = {
  metadata: ItemMetadata;
  sys: ItemSystem;

  // Irrevelant to know at the moment until my system programmatically finds out the content type it is.
  fields: object;
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
 * @param {object} contentType - The type of item it is.
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
  contentType: ContentType;
  revision: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  firstPublishedAt: string;
  publishedVersion: number;
  locale: string;
};

/**
 * @type
 * @name ContentType
 * @summary Content type data
 * @description Information of the content type
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @param {LinkSystem} sys - Content type system data
 */
type ContentType = {
  sys: LinkSystem;
};

/**
 * @type
 * @name IncludedEntries
 * @summary Included entries
 * @description Items that were included due to being linked to other entries.
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @param {EntryItem[]} Entry - Entry linked items
 * @param {object[]} Asset - Asset (images) linked items
 */
export type IncludedEntries = {
  Entry: EntryItem[];
  Asset: object[];
};

/**
 * @type
 * @name Link
 * @summary Link data
 * @description Information of the link (Entry or Asset)
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @param {LinkSystem} sys - Link system data
 */
export type Link = {
  sys: LinkSystem;
};

/**
 * @type
 * @name System
 * @summary System data
 * @description System data about the item
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @param {string} type - The type of item
 * @param {string|undefined} linkType - The type of link
 * @param {string|undefined} id - The entry's identifier
 */
type System = {
  type: string;
  linkType?: string;
  id?: string;
};
