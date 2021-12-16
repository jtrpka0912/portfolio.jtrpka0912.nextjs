import { Technology } from "../models/technology";

/**
 * @async
 * @function getAllTechnologies
 * @summary Get all technologies
 * @description Get all technologies from the JSON data file.
 * @author J. Trpka
 * @returns { Technology[] }
 */
export const getAllTechnologies = async (): Promise<Technology[]> => {
    const response = await fetch('/hello-world.json');

    if(!response.ok) throw new Error('Unable to retrieve technologies.');

    return response.json();
}