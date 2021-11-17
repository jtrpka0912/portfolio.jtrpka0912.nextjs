import type { NextPage } from 'next';
import Header from '../components/layout/header/header';

/**
 * @function HomePage
 * @implements NextPage
 * @summary HomePage component
 * @description The home page.
 * @returns JSX
 */
const HomePage: NextPage = () => {
    return (
        <div>
            { /** Temporary */ }
            <Header />
        </div>
    );
}

export default HomePage;