import { useEffect, useState } from "react";
import { convertSlugsToTechnologies } from "../../../helpers/technology";
import { ITechnology } from "../../../models/ITechnology";
import Section from "../../ui/section";
import TechnologyListItem from "./technology-list-item";

/**
 * @interface TechnologyListProps
 * @summary Technology list component props
 * @author J. Trpka
 * @property { string[] } technologies
 */
interface TechnologyListProps {
    technologies: string[]
}

/**
 * @function TechnologyList
 * @summary Technology list component
 * @description List all of the technologies involved with the post.
 * @author J. Trpka
 * @param { TechnologyListProps } props 
 * @returns { JSX }
 */
const TechnologyList = (props: TechnologyListProps) => {
    const { technologies: technologySlugs } = props;

    const [technologyObjects, setTechnologyObjects] = useState<ITechnology[]>([]);

    useEffect(() => {
        if(technologySlugs.length > 0) {
            convertSlugsToTechnologies(technologySlugs)
                .then(setTechnologyObjects)
                .catch((error: Error) => {
                    // TODO: Handle errors better
                    console.error('Error', error);
                });
        }
    }, []);

    return (
        <Section title="Technologies Used">
            <div className="technology-list">
                { technologyObjects.length > 0 ? (
                    <div className="technology-list__list columns is-mobile is-multiline" role="list">
                        { technologyObjects.map((technology: ITechnology) => 
                            <TechnologyListItem 
                                key={ technology.slug } 
                                technology={ technology }/>
                        ) }
                    </div>
                ) : (
                    <div className="technology-list__empty">
                        <p>There are no listed technologies.</p>
                    </div>
                ) }
            </div>
        </Section>
    );
};

export default TechnologyList;