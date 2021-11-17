import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { SocialMediaItem } from './footer-social';

/**
 * @interface FooterSocialItemProps
 * @description A social media item that includes url, title and icon component.
 * @property { SocialMediaItem } item
 */
interface FooterSocialItemProps {
    item: SocialMediaItem
}

/**
 * @function FooterSocialItem
 * @summary Footer Social Item component
 * @description A footer social list item that is displayed with an icon and links to a profile or email
 * @todo Adjust the horizontal padding for small screens.
 * @param { FooterSocialItemProps } props 
 * @returns { JSX }
 */
const FooterSocialItem = (props: FooterSocialItemProps) => {
    const { item } = props;

    return (
        <li className="is-inline-block px-5" title={ item.title }>
            <a href={ item.url } target="_blank">
                <FontAwesomeIcon size="2x" icon={ item.icon } />
            </a>
        </li>
    );
};

export default FooterSocialItem;