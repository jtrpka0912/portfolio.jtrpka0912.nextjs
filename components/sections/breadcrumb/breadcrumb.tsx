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
        <div></div>
    );
};

export default Breadcrumb;