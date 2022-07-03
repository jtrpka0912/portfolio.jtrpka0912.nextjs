import { ITechnology } from "../models/ITechnology";

/**
 * @deprecated
 * @async
 * @function getAllTechnologies
 * @summary Get all technologies
 * @description Get all technologies from the JSON data file.
 * @author J. Trpka
 * @returns { ITechnology[] }
 */
export const getAllTechnologies = async (): Promise<ITechnology[]> => {
    const response = await fetch('http://localhost:3000/data/technology.json');

    if(!response.ok) throw new Error('Unable to retrieve technologies.');

    return response.json();
}

/**
 * @deprecated
 * @async
 * @function convertSlugsToTechnologies
 * @summary Convert slug strings to technology objects
 * @description Take an array of string slugs and convert them by looking for the technology in the JSON data file.
 * @author J. Trpka
 * @param { string[] } slugs 
 * @returns { Promise<ITechnology[]> }
 */
export const convertSlugsToTechnologies = async (slugs: string[]): Promise<ITechnology[]> => {
    const allTechnologies = await getAllTechnologies();
    let technologies = [];

    for(const slug of slugs) {
        const found: ITechnology | undefined = allTechnologies.find((tech: ITechnology) => tech.slug === slug);

        if(found) technologies.push(found);
    }

    return technologies;
}