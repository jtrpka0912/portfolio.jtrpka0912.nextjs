import { Technology } from "../../../models/technology";

/**
 * @interface SearchDropDownProps
 * @summary Search drop down component props
 * @author J. Trpka
 * @property { Technology[] } technologies
 */
interface SearchDropDownProps {
    technologies: Technology[]
};

/**
 * @function SearchDropDown
 * @summary Search drop down component
 * @description A drop down that lists all of the technologies available to filter.
 * @author J. Trpka
 * @todo Will need to wire this component to the search when the select drop down makes a change.
 * @todo Figure out how to use a label for accessibility without showing a label. May look at the Bulma screen-reader visibility class.
 * @param { SearchDropDownProps } props 
 * @returns { JSX }
 */
const SearchDropDown = (props: SearchDropDownProps) => {
    const { technologies } = props;

    return (
        <div className="search__technologies select">
            <select name="technologies">
                { technologies.map((technology: Technology) => 
                    <option key={ technology.slug } value={ technology.slug }>{ technology.title }</option>
                ) }
            </select>
        </div>
    );
};

export default SearchDropDown;