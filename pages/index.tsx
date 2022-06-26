import type { NextPage } from 'next';

import HomeHero from '../components/home-page/home-hero/home-hero';
import { ContentfulClient } from '../models/api/contentful/ContentfulClient';

/**
 * @function HomePage
 * @implements NextPage
 * @summary HomePage component
 * @description The home page component
 * @author J. Trpka
 * @returns { JSX }
 */
const HomePage: NextPage = () => {
    const contentful = new ContentfulClient();

    contentful.retrieveProjects().then((something) => console.info(something));

    return (
        <div>
            <HomeHero />
        </div>
    );
}

export default HomePage;