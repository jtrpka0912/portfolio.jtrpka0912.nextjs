// React
import { useState } from 'react';

// Models
import { Technology } from '../../../models/technology';

// Child components
import SearchButton from './search-button';
import SearchDropDown from './search-dropdown';
import SearchTextbox from './search-textbox';

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
 * @author J. Trpka
 * @todo Might want to separate the drop down, input field, and button as their own components.
 * @param { SearchProps } props 
 * @returns { JSX }
 */
const Search = (props: SearchProps) => {
    const { technologies } = props;

    const [query, setQuery] = useState<string>('');
    const [technology, setTechnology] = useState<string>('');

    /**
     * @function onQueryChange
     * @summary On query change
     * @description Set the query, for the search component, from the textbox.
     * @author J. Trpka
     * @param { string } queryString 
     */
    const onQueryChange = (queryString: string): void => {
        setQuery(queryString);
    }

    /**
     * @function onTechnologyChange
     * @summary On technology change
     * @description Set the technology slug, for the search component, from the drop down.
     * @author J. Trpka
     * @param { string } technologySlug 
     */
    const onTechnologyChange = (technologySlug: string): void => {
        setTechnology(technologySlug);
    }

    return (
        <section className="section">
            <div className="container">
                <div className="search">
                    <SearchTextbox onChange={ onQueryChange } />

                    { technologies.length > 0 && (
                        <SearchDropDown 
                            onChange={ onTechnologyChange } 
                            technologies={ technologies } 
                        />
                    ) }

                    <SearchButton 
                        query={ query }
                        technology={ technology }
                    />
                </div>
            </div>
        </section>
    );
};

export default Search;