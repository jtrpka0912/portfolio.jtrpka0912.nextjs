// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

// Components
import Section from '../../ui/section';
import NavigationLink from '../../ui/navigation-link/NavigationLink';

/**
 * @type 
 * @name BreadcrumbLink
 * @summary Breadcrumb Link
 * @description A breadcrumb link that will allow a user to navigate back a page.
 * @author J. Trpka
 * @property { string } text The display text
 * @property { string } url The relative url to a page
 */
export type BreadcrumbLink = {
    text: string,
    url?: string
}

/**
 * @interface BreadcrumbProps
 * @summary Breadcrumb props
 * @author J. Trpka
 * @property { BreadcrumbLink[] }
 */
interface BreadcrumbProps {
    links?: BreadcrumbLink[]
}

/**
 * @function Breadcrumb
 * @summary Breadcrumb component
 * @description A progressive list of links
 * @author J. Trpka
 * @param { BreadcrumbProps } props 
 * @returns { JSX }
 */
const Breadcrumb = (props: BreadcrumbProps) => {
    const { links } = props;

    return (
        <Section>
            <div className="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
                <ul>
                    <li><NavigationLink href="/">
                        <a><FontAwesomeIcon icon={ faHome } className="mr-1" />Home</a>
                    </NavigationLink></li>

                    { links && links.map((link: BreadcrumbLink, index: number) => {
                        return (
                            <li key={ index }
                                className={ (index === links.length - 1) 
                                    ? `is-active` 
                                    : undefined 
                                }
                            >
                                { link.url ? (
                                    <NavigationLink href={ link.url }><a>{ link.text }</a></NavigationLink>
                                ) : (
                                    <a href="#">{ link.text }</a>
                                ) }
                            </li>
                        );
                    }) }
                </ul>
            </div>
        </Section>  
    );
};

export default Breadcrumb;