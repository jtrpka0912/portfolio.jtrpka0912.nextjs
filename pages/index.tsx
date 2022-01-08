import type { NextPage } from 'next';

import HomeHero from '../components/home-page/home-hero/home-hero';
import ProjectListSkeleton from '../components/sections/project-list/project-list-skeleton';

/**
 * @function HomePage
 * @implements NextPage
 * @summary HomePage component
 * @description The home page component
 * @author J. Trpka
 * @returns { JSX }
 */
const HomePage: NextPage = () => {
    return (
        <div>
            <HomeHero />
            <ProjectListSkeleton />
        </div>
    );
}

export default HomePage;