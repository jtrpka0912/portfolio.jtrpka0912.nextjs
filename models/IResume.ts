import { IPost } from './IPost';

/**
 * @interface IResume
 * @extends IPost
 * @description A single job experience resume post
 * @author J. Trpka
 * @property { string } employer Name of the company or employer
 * @property { IResumeJobTitle } jobtitle The job title that was given from the start and/or ended
 * @property { IResumeDate } date The first and/or last day working with the company/employer
 * @property { IResumeLocation } address The location of the company/employer
 * @property { IResumeContact } contact Different methods of contacting the company or employer
 * @property { string[] } technology Technologies that were used throughout the entire job experience
 * @property { boolean } featured List this job experience on the featured list
 */
export interface IResume extends IPost {
    employer: string,
    jobtitle: IResumeJobTitle,
    date: IResumeDate,
    address?: IResumeLocation,
    contact: IResumeContact,
    technology: string[]
    featured: boolean,
}

/**
 * @interface IResumeJobTitle
 * @description The job title that was given at the started and (if applicable) that was given when ended
 * @author J. Trpka
 * @property { string } started
 * @property { string } ended
 */
interface IResumeJobTitle {
    started?: string,
    ended?: string
}

/**
 * @interface IResumeDate
 * @description When the job experience started and (if applicable) ended
 * @author J. Trpka
 * @property { string } started
 * @property { string } ended
 */
interface IResumeDate {
    started?: string,
    ended?: string
}

/**
 * @interface IResumeLocation
 * @description The location of the office
 * @author J. Trpka
 * @property { string } street
 * @property { string } suite
 * @property { string } city
 * @property { string } region
 * @property { string } postal
 * @property { string } country
 */
interface IResumeLocation {
    street: string,
    suite?: string,
    city: string,
    region: string,
    postal: string,
    country: string
}

/**
 * @interface IResumeContact
 * @description The different methods to contact the job experience company/employer
 * @author J. Trpka
 * @property { string } phone
 * @property { string } email
 */
interface IResumeContact {
    phone?: string,
    email?: string
}