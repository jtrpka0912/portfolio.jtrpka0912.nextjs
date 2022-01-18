/**
 * @interface SearchButtonProps
 * @summary Search button component props
 * @author J. Trpka
 * @property { string } query
 * @property { string } technology - Slug of the technology
 */
interface SearchButtonProps {
    query?: string
    technology?: string
}

/**
 * @function SearchButton
 * @summary Search button component
 * @description Perform a search with either query and/or technology
 * @author J. Trpka
 * @param { SearchButtonProps } props 
 * @returns { JSX }
 */
const SearchButton = (props: SearchButtonProps) => {
    return (
        <div></div>
    );
};

export default SearchButton;