export type ProjectFields = {
  title: string;
  slug: string;
  type: string; // This is limited to a few choices
  content: string;
  startDate: string;
  endDate: string;
  technologies: EntryLink[];
  gitRepositories: EntryLink[];
  inDevelopment: boolean;
  featured: boolean;
};

/**
 * @type
 * @name EntryLink
 * @summary Entry link
 * @description Information of the entry link (likely another content type)
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @param {EntryLinkSystem} sys - Entry link system data
 */
type EntryLink = {
  sys: EntryLinkSystem;
};

/**
 * @type
 * @name EntryLinkSystem
 * @summary Entry link system data
 * @description Information about the entry link
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @param {string} type - The type of item (likely a Link)
 * @param {string} linkType - The type of link (likely an Entry)
 * @param {string} id - The entry's identifier
 */
type EntryLinkSystem = {
  type: string;
  linkType: string;
  id: string;
};
