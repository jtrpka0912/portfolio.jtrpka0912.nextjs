// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

/**
 * @function SearchTextbox
 * @summary Search text box component
 * @description Use to search for items by title.
 * @author J. Trpka
 * @todo Wire this component to the search component
 * @todo Figure out how to use a label for accessibility without showing a label. May look at the Bulma screen-reader visibility class.
 * @returns { JSX }
 */
const SearchTextbox = () => {
    return (
        <div className="search__textbox field">
            <div className="control has-icons-left">
                <input type="text" className="input" placeholder="Search" />

                <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={ faSearch } />
                </span>
            </div>
        </div>
    );
};

export default SearchTextbox;