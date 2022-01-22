// NextJS
import Link from 'next/link';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

// Components
import { BreadcrumbLink } from '../../../models/breadcrumb-link';
import Section from '../../ui/section';

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
                    <li><Link href="/">
                        <a><FontAwesomeIcon icon={ faHome } className="mr-1" />Home</a>
                    </Link></li>

                    { links && links.map((link: BreadcrumbLink, index: number) => {
                        return (
                            <li key={ index }
                                className={ (index === links.length - 1) 
                                    ? `is-active` 
                                    : undefined 
                                }
                            >
                                { link.url ? (
                                    <Link href={ link.url }><a>{ link.text }</a></Link>
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