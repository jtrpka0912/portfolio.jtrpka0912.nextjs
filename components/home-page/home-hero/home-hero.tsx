import HomeHeroImage from "./home-hero-image";
import HomeHeroTitle from "./home-hero-title";

/**
 * @function HomeHero
 * @summary Home Page Hero component
 * @description A big hero banner for the home page
 * @returns { JSX }
 */
const HomeHero = () => {
    return (
        <div className="hero is-primary is-halfheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <HomeHeroImage />
                    <HomeHeroTitle />
                </div>
            </div>
        </div>
    );
};

export default HomeHero;