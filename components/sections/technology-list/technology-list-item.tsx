import { Technology } from "../../../models/technology";

/**
 * @interface TechnologyListItemProps
 * @summary Technology list item component props
 * @author J. Trpka
 * @property { Technology } technology
 */
interface TechnologyListItemProps {
    technology: Technology;
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
    return (
        <div></div>
    );
};

export default TechnologyListItem;