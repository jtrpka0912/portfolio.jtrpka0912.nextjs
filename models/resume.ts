/**
 * @interface Resume
 * @description A single job experience resume post
 * @author J. Trpka
 * @property { string } slug The ID and URL slug for the post
 * @property { string } employer Name of the company or employer
 * @property { ResumeJobTitle } jobtitle The job title that was given from the start and/or ended
 * @property { ResumeDate } date The first and/or last day working with the company/employer
 * @property { ResumeLocation } address The location of the company/employer
 * @property { ResumeContact } contact Different methods of contacting the company or employer
 * @property { boolean } featured List this job experience on the featured list
 * @property { string } content The main content or description of the job experience
 */
export interface Resume {
    slug: string,
    employer: string,
    jobtitle: ResumeJobTitle,
    date: ResumeDate,
    address?: ResumeLocation,
    contact: ResumeContact,
    featured: boolean,
    content: string
}

/**
 * @interface ResumeJobTitle
 * @description The job title that was given at the started and (if applicable) that was given when ended
 * @author J. Trpka
 * @property { string } started
 * @property { string } ended
 */
interface ResumeJobTitle {
    started?: string,
    ended?: string
}

/**
 * @interface ResumeDate
 * @description When the job experience started and (if applicable) ended
 * @author J. Trpka
 * @property { string } started
 * @property { string } ended
 */
interface ResumeDate {
    started?: string,
    ended?: string
}

/**
 * @interface ResumeLocation
 * @description The location of the office
 * @author J. Trpka
 * @property { string } street
 * @property { string } suite
 * @property { string } city
 * @property { string } region
 * @property { string } postal
 * @property { string } country
 */
interface ResumeLocation {
    street: string,
    suite?: string,
    city: string,
    region: string,
    postal: string,
    country: string
}

/**
 * @interface ResumeContact
 * @description The different methods to contact the job experience company/employer
 * @author J. Trpka
 * @property { string } phone
 * @property { string } email
 */
interface ResumeContact {
    phone?: string,
    email?: string
}