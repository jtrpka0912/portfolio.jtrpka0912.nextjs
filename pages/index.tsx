import type { NextPage } from 'next';
import Footer from '../components/layout/footer/footer';
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
            <Footer />
        </div>
    );
}

export default HomePage;