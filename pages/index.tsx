import type { NextPage } from 'next';

import HomeHero from '../components/home-page/home-hero/home-hero';
import SkeletonBase from '../components/ui/skeleton-base';

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

            <SkeletonBase type="textline" />
        </div>
    );
}

export default HomePage;