import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faFacebook, 
    faTwitter, 
    faGithub, 
    faStackOverflow, 
    faLinkedin, 
    IconDefinition 
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

/**
 * @function FooterSocial
 * @summary Footer social media component
 * @description A list of social media links to my profiles.
 * @returns { JSX }
 */
const FooterSocial = () => {
    /**
     * @interface SocialMediaItem
     * @description A social media item that includes url and icon component.
     * @property { string } url - The URL hyperlink to the social media site or email
     * @property { IconDefinition } icon - The fontawesome icon component
     */
    interface SocialMediaItem {
        url: string,
        icon: IconDefinition
    }

    /**
     * @var socialMediaItems
     * @type { SocialMediaItem[] }
     * @description A list of all social media (and email) items.
     */
    const socialMediaItems: SocialMediaItem[] = [
        { url: 'mailto:jtrpka0912@gmail.com', icon: faEnvelope },
        { url: 'https://www.facebook.com/jeremy.trpka.77/', icon: faFacebook },
        { url: 'https://twitter.com/jtrpka0912', icon: faTwitter },
        { url: 'https://www.linkedin.com/in/jeremy-trpka/', icon: faLinkedin },
        { url: 'https://github.com/jtrpka0912', icon: faGithub },
        { url: 'https://stackoverflow.com/users/story/4008500', icon: faStackOverflow }
    ];

    /**
     * @var listItemClasses
     * @type { String }
     * @description A convenient way to apply the same style to the list item tag.
     */
    const listItemClasses: string = 'is-inline-block px-5';

    return (
        <nav className="mb-4">
            <ul>
                { socialMediaItems.map(( item: SocialMediaItem, index: number ) => {
                    return (
                        <li className={ listItemClasses } key={ index }>
                            <a href={ item.url } target="_blank">
                                <FontAwesomeIcon size="2x" icon={ item.icon } />
                            </a>
                        </li>
                    );
                }) }
            </ul>
        </nav>
    );
};

export default FooterSocial;