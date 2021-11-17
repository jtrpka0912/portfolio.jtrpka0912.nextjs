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
     * @property { string } url - The URL hyperlink to the social media site or email.
     * @property { string } title - HTML popup to show where the link will go to.
     * @property { IconDefinition } icon - The fontawesome icon component.
     */
    interface SocialMediaItem {
        url: string,
        title: string
        icon: IconDefinition
    }

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
        { url: 'https://github.com/jtrpka0912', title: 'GitHub Profile', icon: faGithub },
        { url: 'https://stackoverflow.com/users/story/4008500', title: 'StackOverflow Developer Story', icon: faStackOverflow }
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
                        <li className={ listItemClasses } title={ item.title } key={ index }>
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