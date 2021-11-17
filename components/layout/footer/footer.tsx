import FooterBulma from "./footer-bulma";
import FooterSocial from "./footer-social";

/**
 * @function Footer
 * @summary Footer component
 * @description The main footer component for the application
 * @returns { JSX }
 */
const Footer = () => {
    return (
        <footer className="footer has-background-primary has-text-centered">
            <div className="container">
                <FooterSocial />
                <FooterBulma />
            </div>
        </footer>
    );
};

export default Footer;