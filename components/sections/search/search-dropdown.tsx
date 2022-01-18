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
 * @param { SearchDropDownProps } props 
 * @returns { JSX }
 */
const SearchDropDown = (props: SearchDropDownProps) => {
    return (
        <div></div>
    );
};

export default SearchDropDown;