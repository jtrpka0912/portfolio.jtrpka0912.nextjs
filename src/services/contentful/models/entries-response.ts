import { EntryItem, IncludedEntries } from './common';

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
 * @param {EntryItem[]} items - The items (Entries) array
 * @param {IncludedEntries} includes - Items that were included like linked Entry and Assets
 */
export type EntriesResponse<T> = {
  total: number;
  skip: number;
  limit: number;
  items: EntryItem[];
  includes: IncludedEntries;
};
