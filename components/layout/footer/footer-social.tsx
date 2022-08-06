import { 
    faFacebook, 
    faTwitter, 
    faGithub,
    faLinkedin, 
    IconDefinition 
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import FooterSocialItem from "./footer-social-item";

/**
 * @exports
 * @interface SocialMediaItem
 * @description A social media item that includes url and icon component.
 * @property { string } url - The URL hyperlink to the social media site or email.
 * @property { string } title - HTML popup to show where the link will go to.
 * @property { IconDefinition } icon - The fontawesome icon component.
 */
 export interface SocialMediaItem {
    url: string,
    title: string
    icon: IconDefinition
}

/**
 * @function FooterSocial
 * @summary Footer social media component
 * @description A list of social media links to my profiles.
 * @returns { JSX }
 */
const FooterSocial = () => {
    /**
     * @var socialMediaItems
     * @type { SocialMediaItem[] }
     * @description A list of all social media (and email) items.
     */
    const socialMediaItems: SocialMediaItem[] = [
        { url: 'mailto:jtrpka0912@gmail.com', title: 'Email', icon: faEnvelope },
        { url: 'https://www.facebook.com/jeremy.trpka.77/', title: 'Facebook Profile', icon: faFacebook },
        { url: 'https://twitter.com/jtrpka0912', title: 'Twitter Profile', icon: faTwitter },
        { url: 'https://www.linkedin.com/in/jeremy-trpka/', title: 'LinkedIn Profile', icon: faLinkedin },
        { url: 'https://github.com/jtrpka0912', title: 'GitHub Profile', icon: faGithub }
    ];

    return (
        <nav className="mb-4">
            <ul>
                { socialMediaItems.map(( item: SocialMediaItem, index: number ) => <FooterSocialItem item={ item } key={ index } /> ) }
            </ul>
        </nav>
    );
};

export default FooterSocial;