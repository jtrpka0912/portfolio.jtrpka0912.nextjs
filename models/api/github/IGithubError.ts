/**
 * @interface IGithubError
 * @summary Github error
 * @description A github error message
 * @author J. Trpka
 * @property { string } message
 * @property { string } documentation_url
 */
export interface IGithubError {
    message: string
    documentation_url: string
}