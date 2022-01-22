// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

/**
 * @interface SearchTextboxProps
 * @summary Search textbox props
 * @author J. Trpka
 * @property { function } onChange
 */
interface SearchTextboxProps {
    onChange: (queryString: string) => void
}

/**
 * @function SearchTextbox
 * @summary Search text box component
 * @description Use to search for items by title.
 * @author J. Trpka
 * @returns { JSX }
 */
const SearchTextbox = (props: SearchTextboxProps) => {
    const { onChange } = props;

    return (
        <div className="search__textbox field">
            <div className="control has-icons-left">
                <label 
                    htmlFor="search-query" 
                    className="is-sr-only"
                >Query by title</label>

                <input 
                    type="text" 
                    name="query"
                    id="search-query"
                    className="input" 
                    placeholder="Search"
                    onChange={ (event) => onChange(event.target.value) } 
                />

                <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={ faSearch } />
                </span>
            </div>
        </div>
    );
};

export default SearchTextbox;