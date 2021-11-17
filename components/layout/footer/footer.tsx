import FooterBulma from "./footer-bulma";

/**
 * @function Footer
 * @summary Footer component
 * @description The main footer component for the application
 * @returns { JSX }
 */
const Footer = () => {
    return (
        <footer>
            <div className="container py-6 has-background-primary has-text-centered">
                <FooterBulma />
            </div>
        </footer>
    );
};

export default Footer;