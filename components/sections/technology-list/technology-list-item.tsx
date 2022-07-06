import Image from "next/image";
import { ITechnology } from "../../../models/ITechnology";

/**
 * @interface TechnologyListItemProps
 * @summary Technology list item component props
 * @author J. Trpka
 * @property { Technology } technology
 */
interface TechnologyListItemProps {
  technology: ITechnology;
}

/**
 * @function TechnologyListItem
 * @summary Technology list item component
 * @description A linkable item that shows a single piece of technology with logo.
 * @author J. Trpka
 * @param { TechnologyListItemProps } props 
 * @returns { JSX }
 */
const TechnologyListItem = (props: TechnologyListItemProps) => {
  const { technology } = props;
  
  /**
   * @constant { string } columnClasses
   * @description All of the Bulma column classes in one variable.
   * @author J. Trpka
   */
  const columnClasses: string = 'column is-full-mobile is-one-third-tablet is-one-quarter-desktop';

  /**
   * @constant { string } flexClasses
   * @description All of the Bulma flex classes in one variable
   * @author J. Trpka
   */
  const mediaFlexClasses: string = 'is-flex is-flex-direction-row is-flex-wrap-nowrap is-align-items-center';

  return (
    <div
      role="listitem"
      className={`technology-list-item ${columnClasses}`}>
      <a href={technology.url} target="_blank" rel="noreferrer">
        <article
          className={`media has-background-white-ter ${mediaFlexClasses}`}
          title={technology.name}
        >
          <figure className="media-left has-background-grey-lighter">
            <p className="image is-64x64">
              <Image
                src={ technology.logo.path }
                alt={ technology.logo.altText }
                width="64"
                height="64"
              />
            </p>
          </figure>

          <div className="media-content pr-1">
            <h4 className="subtitle is-6">{technology.name}</h4>
          </div>
        </article>
      </a>
    </div>
  );
};

export default TechnologyListItem;