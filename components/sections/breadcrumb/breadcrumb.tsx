import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { BreadcrumbLink } from '../../../models/breadcrumb-link';

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
    return (
        <div className="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><Link href="/">
                    <a><FontAwesomeIcon icon={ faHome } />Home</a>
                </Link></li>
            </ul>
        </div>
    );
};

export default Breadcrumb;