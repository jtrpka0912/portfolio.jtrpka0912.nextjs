import Image from 'next/image';

/**
 * @function FooterBulma
 * @summary Made with Bulma Footer component
 * @description An image link component showcasing that the application used Bulma for its front-end components.
 * @returns { JSX }
 */
const FooterBulma = () => {
    return (
        <a href="https://www.bulma.io" target="_blank" rel="noreferrer">
            <Image src="/assets/images/made-with-bulma.png"
                alt="Made With Bulma White Logo"
                width={ 256 }
                height={ 48 } />
        </a>
    );
};

export default FooterBulma;