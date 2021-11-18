import type { NextPage, GetStaticProps } from 'next';

import { getSinglePost } from '../helpers/markdown';

import HomeHero from '../components/home-page/home-hero/home-hero';
import { Project } from '../models/project';

/**
 * @function HomePage
 * @implements NextPage
 * @summary HomePage component
 * @description The home page.
 * @returns { JSX }
 */
const HomePage: NextPage = (props) => {
    console.info(props);
    return (
        <div>
            <HomeHero />
        </div>
    );
}

export default HomePage;