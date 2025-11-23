/**
 * @type {ProjectCardProps}
 * @summary Project Card Component Props
 * @description These props are taken from Contentful to show a list item of a project.
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @prop {string} name - Name of the project
 * @prop {string} slug - A URL friendly string for the project
 * @prop {string} thumbnail - URL of the project thumbnail
 * @default thumbnail - Static Image Placeholder
 * @prop {string} altThumbnail - The alt text for the project thumbnail
 * @default altThumbnail - {Project Name} Thumbnail
 * @prop {boolean} inDevelopment - Is the project still being developed
 * @prop {ProjectCardFeaturedTechnology[]} featuredTechnologies - A list of one to five technologies (six or more will be ignored) that was used to build the project.
 */
export type ProjectCardProps = {
  name: string;
  slug: string;
  thumbnail?: string;
  altThumbnail?: string;
  inDevelopment: boolean;
  featuredTechnologies: ProjectCardFeaturedTechnology[];
};

/**
 * @type {ProjectCardFeaturedTechnology}
 * @summary Project Card Featured Technology
 * @description Data of the featured technologies used to build the project
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @prop {string} name - Name of the technology
 * @prop {string|undefined} logo - URL of the technology logo
 * @default logo - Static Image Placeholder
 * @prop {string} url - URL to the technology website
 */
export type ProjectCardFeaturedTechnology = {
  name: string;
  logo?: string;
  url: string;
};
