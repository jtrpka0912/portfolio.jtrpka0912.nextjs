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
 * @name LinkSystem
 * @summary Link system data
 * @description Information about the link
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @param {string} type - The type of item (likely a Link)
 * @param {string} linkType - The type of link
 * @param {string} id - The entry's identifier
 */
type LinkSystem = {
  type: 'Link'; // NOTE: Can this be anything else?
  linkType: 'Link' | 'Asset';
  id: string;
};
