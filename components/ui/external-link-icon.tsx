// Font Awesome
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * @function ExternalLinkIcon
 * @summary External link icon component
 * @description An external link icon component that tells the user the link will bring up a new tab.
 * @author J. Trpka
 * @returns { JSX }
 */
const ExternalLinkIcon = () => {
    return (
        <FontAwesomeIcon 
            icon={ faExternalLinkAlt } 
            size="xs"
            className="ml-2" 
            title="External Link" 
        />
    );
};

export default ExternalLinkIcon;