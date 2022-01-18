import { Technology } from '../../../models/technology';

/**
 * @interface SearchProps
 * @summary Search component props
 * @author J. Trpka
 * @property { Technology[] } technologies
 */
interface SearchProps {
    technologies: Technology[]
}

/**
 * @function Search
 * @summary Search component
 * @description A search component to filter items and construct a query to the search result page.
 * @param { SearchProps } props 
 * @returns { JSX }
 */
const Search = (props: SearchProps) => {
    return (
        <div></div>
    );
};

export default Search;