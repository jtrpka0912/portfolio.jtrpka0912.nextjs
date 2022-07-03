import { ITechnology } from "../../../models/ITechnology";

/**
 * @interface SearchDropDownProps
 * @summary Search drop down component props
 * @author J. Trpka
 * @property { Technology[] } technologies
 * @property { function } onChange
 */
interface SearchDropDownProps {
    technologies: ITechnology[]
    onChange: (technologySlug: string) => void
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
    const { onChange, technologies } = props;

    return (
        <div className="search__technologies select">
            <label 
                htmlFor="search-technologies"
                className="is-sr-only"
            >Search by technologies</label>

            <select 
                name="technologies"
                id="search-technologies" 
                onChange={ (event) => onChange(event.target.value) }
            >
                <option value="">Select Technology</option>
                { technologies.map((technology: ITechnology) => 
                    <option 
                        key={ technology.slug } 
                        value={ technology.slug }>{ technology.title }
                    </option>
                ) }
            </select>
        </div>
    );
};

export default SearchDropDown;