import { Entry, EntryCollection } from 'contentful';
import type { GetStaticProps, NextPage } from 'next';
import { retrieveFeaturedProjects } from '../api/contentful/projects';

import HomeHero from '../components/home-page/home-hero/home-hero';
import ProjectList from '../components/sections/project-list/project-list';
import { IContentfulProject } from '../models/api/contentful/content-types/IContentfulProject';
import { ContentfulFactory } from '../models/api/contentful/ContentfulFactory';
import { IProject } from '../models/IProject';

/**
 * @interface HomePageProps
 * @summary Home page props
 * @author J. Trpka
 * @property { IProject[] } featuredProjects
 */
interface HomePageProps {
  featuredProjects: IProject[]
}

/**
 * @function HomePage
 * @implements NextPage
 * @summary HomePage component
 * @description The home page component
 * @author J. Trpka
 * @returns { JSX }
 */
const HomePage: NextPage<HomePageProps> = ({
  featuredProjects
}: HomePageProps) => {
  console.info('projects', featuredProjects);
  
  return (
    <div>
      <HomeHero />
      <ProjectList projects={ featuredProjects } />
    </div>
  );
}

/**
 * @interface HomeStaticProps
 * @summary Home page static props
 * @description The props sent to the home page.
 * @author J. Trpka
 * @property { Project[] } projects
 */
interface HomeStaticProps {
  featuredProjects: IProject[]
}

/**
 * @async
 * @function getStaticProps
 * @summary Props for the static generated page
 * @description Send the page props to the static generated page
 * @author J. Trpka
 * @todo Figure out the return type
 * @returns 
 */
export const getStaticProps: GetStaticProps<HomeStaticProps> = async () => {
  try {
    /**
     * @constant { ContentfulFactory } contentfulFactory
     * @summary Contentful Factory object
     * @description Convert Contentful entries to Portfolio objects
     * @author J. Trpka 
     */
    const contentfulFactory: ContentfulFactory = new ContentfulFactory();
    
    /**
     * @constant { Promise<Entry<IContentfulProject[]>> } contentfulProjectResponse
     * @summary Contentful projects response
     * @description Response from the Contentful API to retrieve all featured projects
     * @author J. Trpka
     */
    const contentfulProjectResponse: EntryCollection<IContentfulProject> = await retrieveFeaturedProjects();

    return {
      props: {
        featuredProjects: contentfulProjectResponse.items.map(
          (contentfulProject: Entry<IContentfulProject>) => contentfulFactory.createProject(contentfulProject)
        )
      }
    };
  } catch(error) {
    // ERROR: Brings up unhandled runtime error with loading the 404.js file.
    return {
      notFound: true
    }
  }
}

export default HomePage;