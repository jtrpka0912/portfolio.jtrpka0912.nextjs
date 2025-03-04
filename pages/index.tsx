import { Entry, EntryCollection } from 'contentful';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { retrieveFeaturedProjects } from '../api/contentful/projects';

import HomeHero from '../components/home-page/home-hero/home-hero';
import ProjectList from '../components/sections/project-list/ProjectList';
import SplitContent from '../components/sections/split-content/SplitContent';
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
  return (
    <div>
      <Head>
        <title>J. Trpka Portfolio</title>
        <meta name="description" content="The portfolio of Jeremy Lee Trpka which includes his projects as a software developer." />
        <meta property="og:url" content="https://jeremy.trpka.me" />
        <meta property="og:description" content="The portfolio of Jeremy Lee Trpka which includes his projects as a software developer." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="J. Trpka Portfolio" />
      </Head>

      <HomeHero />
      <SplitContent 
        ariaLabel="Introduction of Portfolio"
        image="/assets/images/homepage/detroit-skyline.jpg"
        altText="Photo of the Detroit skyline from across the shoreline. Photo by Anon from Pexels."
      >
        <p>Hello, my name is Jeremy Trpka, as you might had guessed from my domain name. I am a full-stack developer, currently residing in the Detroit area, with around 10 years of experience. My previous experience had been a PHP programming developing WordPress websites by creating themes by scratch and developing extra features for the admin dashboard. Nowadays, I might consider myself a polyglot developer, and like to work with various technologies. Lately, my focus with hobby projects is working in the .NET ecosystem.</p>
      </SplitContent>

      <ProjectList projects={ featuredProjects } showAll />
      
      <SplitContent 
        ariaLabel="Job and Personal Hobby"
        image="/assets/images/homepage/technical-consulting.jpg"
        altText="A group of people with laptops sitting around a wooden table. Photo by fauxels from Pexels."
        flip
      >
        <p>I mainly like to work as a Full-Stack Developer as I enjoy working on both front-end and back-end work. Though I do tend to focus a little more on the front-end development, I really do not mind delving into the back-end code making API with the MVC (model view controller) pattern with different frameworks from different languages. Please enjoy this simple, but detailed portfolio.</p>
      </SplitContent>
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