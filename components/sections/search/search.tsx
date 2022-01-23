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

    // NOTE: Though the parent node is a section, do not add the section class from Bulma. Does not need the extra padding.

    return (
        <section>
            <div className="container">
                { /** Reduce the width of the search component */ }
                <div className="columns">
                    <div className="column is-10-desktop is-offset-1-desktop is-8-widescreen is-offset-2-widescreen is-6-fullhd is-offset-3-fullhd">
                        <div className="search px-5 columns is-multiline">
                            <div className="column is-half-tablet is-one-third-desktop">
                                <SearchTextbox onChange={ onQueryChange } />
                            </div>

                            <div className="column is-half-tablet is-one-third-desktop">
                                { technologies.length > 0 && (
                                    <SearchDropDown 
                                        onChange={ onTechnologyChange } 
                                        technologies={ technologies } 
                                    />
                                ) }
                            </div>
                            
                            <div className="column is-one-third-desktop">
                                <SearchButton 
                                    query={ query }
                                    technology={ technology }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Search;