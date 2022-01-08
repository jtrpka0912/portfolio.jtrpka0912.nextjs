import type { NextPage } from 'next';

import HomeHero from '../components/home-page/home-hero/home-hero';
import TechnologyListSkeleton from '../components/sections/technology-list/technology-list-skeleton';

/**
 * @function HomePage
 * @implements NextPage
 * @summary HomePage component
 * @description The home page component
 * @author J. Trpka
 * @description The home page.
 * @returns { JSX }
 */
const HomePage: NextPage = () => {
    return (
        <div>
            <HomeHero />
            <TechnologyListSkeleton />
        </div>
    );
}

export default HomePage;