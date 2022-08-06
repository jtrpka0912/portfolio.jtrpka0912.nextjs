import { ITechnology } from "../../../models/ITechnology";
import Section from "../../ui/section/Section";
import TechnologyListItem from "./technology-list-item";

/**
 * @interface TechnologyListProps
 * @summary Technology list component props
 * @author J. Trpka
 * @property { string[] } technologies
 */
interface TechnologyListProps {
  technologies: ITechnology[]
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
  const { technologies } = props;

  return (
    <Section ariaLabel="Technology Listing" title="Technologies Used">
      <div className="technology-list">
        {technologies.length > 0 ?
          (
            <div className="technology-list__list columns is-mobile is-multiline" role="list">
              {technologies.map((technology: ITechnology) =>
                <TechnologyListItem
                  key={technology.id}
                  technology={technology} />
              )}
            </div>
          ) : (
            <div className="technology-list__empty">
              <p>There are no listed technologies.</p>
            </div>
          )}
      </div>
    </Section>
  );
};

export default TechnologyList;