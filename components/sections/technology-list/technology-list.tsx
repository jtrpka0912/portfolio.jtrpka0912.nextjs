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
        <section className="section">
            <div className="technology-list container">

                { technology.length > 0 ? (
                    <div className="technology-list__list columns is-mobile is-multiline">
                        { technology.map((techItem: string) => <div key={ techItem }>{ techItem }</div>) }
                    </div>
                ) : (
                    <div className="technology-list__empty">
                        <p>There are no listed technologies.</p>
                    </div>
                ) }
            </div>
        </section>
    );
};

export default TechnologyList;