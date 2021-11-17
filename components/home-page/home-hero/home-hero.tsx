import HomeHeroTitle from "./hom-hero-title";

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
                    <HomeHeroTitle />
                </div>
            </div>
        </div>
    );
};

export default HomeHero;