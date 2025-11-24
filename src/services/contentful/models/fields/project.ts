import { Link } from '../common';

/**
 * @type
 * @name ProjectFields
 * @summary Project content type fields
 * @description This represents a Project content type from Contentful.
 * @author J. Trpka<jtrpka0912@gmail.com>
 * Required Fields
 * @param {string} title - Name of the project
 * @param {string} slug - The URL friendly identifier
 * @param {string} type - The type of project, either Web, Mobile, or System
 * @param {string} content - The description of the project
 * @param {Link[]} technologies - Links to the technology items
 * @param {boolean} inDevelopment - Is the project currently in development
 * @param {boolean} featured - Is the project on the landing page listing
 * Optional Fields
 * @param {string|undefined} summary - A short summary of the project
 * @param {string|undefined} startDate - When the project first got started
 * @param {string|undefined} endDate - When the project was declared finished
 * @param {Link[]|undefined} gitRepositories - Links to the remote Git repositories
 * @param {Link[]|undefined} npmPackages - Links to minor NPM packages used for the project
 * @param {Link[]|undefined} thumbnail - Link to the thumbnail asset
 * @param {Link[]|undefined} desktopProjectGallery - Links to the desktop project gallery
 * @param {Link[]|undefined} tabletProjectGallery - Links to the tablet project gallery
 * @param {Link[]|undefined} mobileProjectGallery - Links to the mobile project gallery
 */
export type ProjectFields = {
  // Required Fields
  title: string;
  slug: string;
  type: 'Web Application' | 'Mobile Application' | 'System Application';
  content: string;
  technologies: Link[];
  inDevelopment: boolean;
  featured: boolean;

  // Optional Fields
  summary?: string;
  startDate?: string;
  endDate?: string;
  gitRepositories?: Link[];
  npmPackages?: Link[];
  thumbnail?: Link;
  desktopProjectGallery?: Link[];
  tabletProjectGallery?: Link[];
  mobileProjectGallery?: Link[];
};
