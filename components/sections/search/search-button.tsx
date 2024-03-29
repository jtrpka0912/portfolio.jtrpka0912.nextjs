// React
import { useState, useEffect } from 'react';

import NavigationLink from '../../ui/navigation-link/NavigationLink';

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
  const { query, technology } = props;

  const [queryString, setQueryString] = useState<string>('./project/search');

  useEffect(() => {
    const queryBuilder: string[] = [];

    // Start building the query
    if (query) {
      queryBuilder.push(`query=${query}`);
    }

    if (technology) {
      queryBuilder.push(`technology=${technology}`);
    }

    // If none found then set query string to just search
    if (queryBuilder.length === 0) {
      setQueryString('./project/search');
      return;
    }

    let queryURL = `./project/search?${queryBuilder[0]}`;

    if (queryBuilder.length === 2)
      queryURL = `${queryURL}&${queryBuilder[1]}`;

    setQueryString(queryURL);
  }, [query, technology]);

  return (
    <NavigationLink href={queryString}>
      <a className="search__button button is-link">Filter</a>
    </NavigationLink>
  );
};

export default SearchButton;