import type { NextPage } from 'next';

import HomeHero from '../components/home-page/home-hero/home-hero';
import BreadcrumbSkeleton from '../components/sections/breadcrumb/breadcrumb-skeleton';

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
            <BreadcrumbSkeleton />
        </div>
    );
}

export default HomePage;