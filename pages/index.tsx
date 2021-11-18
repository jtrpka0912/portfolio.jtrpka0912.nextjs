import type { NextPage, GetStaticProps } from 'next';

import { getSinglePost } from '../helpers/markdown';

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

export const getStaticProps: GetStaticProps = async() => {
    try {
        getSinglePost('portfolio.md', 'project');
    } catch(error) {
        console.error(error);
    }

    return {
        props: {}
    };
}

export default HomePage;