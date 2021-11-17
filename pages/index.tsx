import type { NextPage } from 'next';
import HomeHero from '../components/home-page/home-hero/home-hero';

/**
 * @function HomePage
 * @implements NextPage
 * @summary HomePage component
 * @description The home page.
 * @returns { JSX }
 */
const HomePage: NextPage = () => {
    return (
        <div>
            <HomeHero />
        </div>
    );
}

export default HomePage;