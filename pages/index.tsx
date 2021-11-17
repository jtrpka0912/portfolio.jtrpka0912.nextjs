import type { NextPage } from 'next';
import Header from '../components/layout/header/header';

const HomePage: NextPage = () => {
    return (
        <div>
            { /** Temporary */ }
            <Header />
            <button className="button is-primary">Button</button>
        </div>
    );
}

export default HomePage;