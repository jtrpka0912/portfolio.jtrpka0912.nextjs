import type { Meta, StoryObj } from '@storybook/nextjs';

import ProjectCardComponent from './project-card';
import { ProjectCardFeaturedTechnology, ProjectCardProps } from './project-card.types';

const meta = {
  component: ProjectCardComponent,
  title: 'Portfolio/Common/Project Card',
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof ProjectCardComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

// Sample Data
// Thumbnails are from Contentful

/**
 * @const {ProjectCardFeaturedTechnology} JAVASCRIPT_TECHNOLOGY
 * @description An example technology with all fields.
 * @author J.Trpka<jtrpka0912@gmail.com>
 */
const JAVASCRIPT_TECHNOLOGY: ProjectCardFeaturedTechnology = {
  name: 'JavaScript',
  logo: 'https://images.ctfassets.net/1ea5gpr70vv1/6E9sBDRvlfzqXuUIdLZte2/50f20fb642200b0b92a4f978fd371b28/JavaScript_Logo.png',
  url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-262/'
};

/**
 * @const {ProjectCardFeaturedTechnology} TYPESCRIPT_TECHNOLOGY
 * @description This is an example technology with no logo.
 * @author J. Trpka<jtrpka0912@gmail.com>
 */
const TYPESCRIPT_TECHNOLOGY: ProjectCardFeaturedTechnology = {
  name: 'TypeScript',
  logo: '',
  url: 'https://storybook.js.org/'
}

/**
 * @const {ProjectCardFeaturedTechnology} REACT_TECHNOLOGY
 * @description An example technology with all fields.
 * @author J. Trpka<jtrpka0912@gmail.com>
 */
const REACT_TECHNOLOGY: ProjectCardFeaturedTechnology = {
  name: 'React',
  logo: 'https://images.ctfassets.net/1ea5gpr70vv1/6zSfNMsOB1YgCAGKbvwkZz/315d9cba510ade4afe46eef07533fdac/react.png',
  url: 'https://react.dev/'
};

/**
 * @const {ProjectCardFeaturedTechnology} NEXTJS_TECHNOLOGY
 * @description An example technology with all fields.
 * @author J. Trpka<jtrpka0912@gmail.com>
 */
const NEXTJS_TECHNOLOGY: ProjectCardFeaturedTechnology = {
  name: 'NextJS',
  logo: 'https://images.ctfassets.net/1ea5gpr70vv1/5JJmg6RcJLT2Y2MszDD5DR/7ea82bc496623eec09223d475e3dea7b/nextjs.png',
  url: 'https://nextjs.org'
};

/**
 * @const {ProjectCardFeaturedTechnology} STORYBOOK_TECHNOLOGY
 * @description This is an example technology with no logo.
 * @author J. Trpka<jtrpka0912@gmail.com>
 */
const STORYBOOK_TECHNOLOGY: ProjectCardFeaturedTechnology = {
  name: 'Storybook',
  logo: '',
  url: 'https://storybook.js.org/'
}

/**
 * @const {ProjectCardFeaturedTechnology} CYPRESS_TECHNOLOGY
 * @description An example technology with all fields.
 * @author J. Trpka<jtrpka0912@gmail.com>
 */
const CYPRESS_TECHNOLOGY: ProjectCardFeaturedTechnology = {
  name: 'Cypress',
  logo: 'https://images.ctfassets.net/1ea5gpr70vv1/8qnOeWlBbNvuFJH1juGOG/f81becd4573805b87a3c48a736abec29/cypress.png',
  url: 'https://www.cypress.io'
}

/**
 * @const {ProjectCardProps} PROJECT_CARD_PROPS_WITH_TECHNOLOGIES
 * @description An example of a card with some technologies.
 * @author J. Trpka<jtrpka0912@gmail.com>
 */
const PROJECT_CARD_PROPS_WITH_TECHNOLOGIES: ProjectCardProps = {
  id: 'something-something',
  name: 'New Portfolio Project',
  thumbnail: 'https://images.ctfassets.net/1ea5gpr70vv1/3Oo0gL52cTeq6TVmhy6Ob1/b84e2286fee2262f325a2e35299d5305/portfolio-thumbnail.png',
  featuredTechnologies: [
    REACT_TECHNOLOGY,
    NEXTJS_TECHNOLOGY,
    STORYBOOK_TECHNOLOGY
  ]
};

/**
 * @const {ProjectCardProps} PROJECT_CARD_PROPS_WITH_NO_THUMBNAIL
 * @description An example of a card with no thumbnail.
 * @author J. Trpka<jtrpka0912@gmail.com>
 */
const PROJECT_CARD_PROPS_WITH_NO_THUMBNAIL: ProjectCardProps = {
  id: 'something-something',
  name: 'Developing Project',
  thumbnail: undefined,
  featuredTechnologies: [
    JAVASCRIPT_TECHNOLOGY,
    TYPESCRIPT_TECHNOLOGY
  ]
};

/**
 * @const {ProjectCardProps} PROJECT_CARD_PROPS_WITH_TOO_MANY_TECHNOLOGIES
 * @description An example of a card with too many technologies.
 * @author J. Trpka<jtrpka0912@gmail.com>
 */
const PROJECT_CARD_PROPS_WITH_TOO_MANY_TECHNOLOGIES: ProjectCardProps = {
  id: 'something-something',
  name: 'Overloaded Project',
  thumbnail: 'https://images.ctfassets.net/1ea5gpr70vv1/etEmLWXWUDqIIJ5NjiJYr/c9f35e7f554c24cd5a2a8abcc5fc726e/thumbnail.png',
  featuredTechnologies: [
    JAVASCRIPT_TECHNOLOGY,
    TYPESCRIPT_TECHNOLOGY,
    REACT_TECHNOLOGY,
    NEXTJS_TECHNOLOGY,
    CYPRESS_TECHNOLOGY,
    STORYBOOK_TECHNOLOGY // Ignored
  ]
};

export const ProjectCardWithTechnologies: Story = {
  args: PROJECT_CARD_PROPS_WITH_TECHNOLOGIES
};

export const ProjectCardWithNoThumbnail: Story = {
  args: PROJECT_CARD_PROPS_WITH_NO_THUMBNAIL
};

export const ProjectCardWithIgnoredTechnologies: Story = {
  args: PROJECT_CARD_PROPS_WITH_TOO_MANY_TECHNOLOGIES,
  decorators: [
    (Story) => (
      <div>
        <Story />
        <p style={{
          paddingTop: '1rem',
          fontStyle: 'italic',
          textAlign: 'center'
        }}>There are {PROJECT_CARD_PROPS_WITH_TOO_MANY_TECHNOLOGIES.featuredTechnologies.length} technologies which only five are going to show.</p>
      </div>
    )
  ]
};