/**
 * @interface TechnologyListProps
 * @summary Technology list component props
 * @author J. Trpka
 * @property { string[] } technology
 */
interface TechnologyListProps {
    technology: string[]
}

/**
 * @function TechnologyList
 * @summary Technology list component
 * @description List all of the technologies involved with the post.
 * @author J. Trpka
 * @param { TechnologyListProps } props 
 * @returns { JSX }
 */
const TechnologyList = (props: TechnologyListProps) => {
    const { technology } = props;

    return (
        <div>
            <ul>
                { technology.map((techItem: string) => {
                    return (
                        <li key={ techItem }>{ techItem }</li>
                    )
                }) }
            </ul>
        </div>
    );
};

export default TechnologyList;