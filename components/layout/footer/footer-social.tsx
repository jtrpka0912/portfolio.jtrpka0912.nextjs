import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGithub, faStackOverflow, faLinkedin } from "@fortawesome/free-brands-svg-icons";

/**
 * @function FooterSocial
 * @summary Footer social media component
 * @description A list of social media links to my profiles.
 * @returns { JSX }
 */
const FooterSocial = () => {
    /**
     * @var listItemClasses
     * @type { String }
     * @description A convenient way to apply the same style to the list item tag.
     */
    const listItemClasses: string = 'is-inline-block px-5';

    return (
        <nav className="mb-4">
            <ul>
                <li className={ listItemClasses }>
                    <a href="https://www.facebook.com/jeremy.trpka.77/" target="_blank">
                        <FontAwesomeIcon size="2x" icon={ faFacebook } />
                    </a>
                </li>

                <li className={ listItemClasses }>
                    <a href="https://twitter.com/jtrpka0912" target="_blank">
                        <FontAwesomeIcon size="2x" icon={ faTwitter } />
                    </a>
                </li>
                
                <li className={ listItemClasses }>
                    <a href="https://www.linkedin.com/in/jeremy-trpka/" target="_blank">
                        <FontAwesomeIcon size="2x" icon={ faLinkedin } />
                    </a>
                </li>
                
                <li className={ listItemClasses }>
                    <a href="https://github.com/jtrpka0912" target="_blank">
                        <FontAwesomeIcon size="2x" icon={ faGithub } />
                    </a>
                </li>
                
                <li className={ listItemClasses }>
                    <a href="https://stackoverflow.com/users/story/4008500" target="_blank">
                        <FontAwesomeIcon size="2x" icon={ faStackOverflow } />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default FooterSocial;