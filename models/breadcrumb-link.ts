/**
 * @interface BreadcrumbLink
 * @summary Breadcrumb Link
 * @description A breadcrumb link that will allow a user to navigate back a page.
 * @author J. Trpka
 * @property { string } text The display text
 * @property { string } url The relative url to a page
 */
export interface BreadcrumbLink {
    text: string,
    url: string
}