/**
 * @interface SectionProps
 * @summary Section component props
 * @author J. Trpka
 * @property { string } title
 * @property { string } backgroundColor
 * @property { React.ReactNode } children
 */
interface SectionProps {
    title?: string;
    backgroundColor?: string;
    children: React.ReactNode;
}

/**
 * @function Section
 * @summary Section component
 * @description A simple section component that can provide an optional title prior to content and background color. It is advised if there are special needs for the typical section component then do not use this component and just stick with .section > .container elements.
 * @author J. Trpka
 * @param { SectionProps } props
 * @return { JSX }
 */
const Section = (props: SectionProps) => {
    const { children, title } = props;
    
    return (
        <section className="section">
            { title && (
                <h3 className="title is-3">{ title }</h3>
            ) }
            
            <div className="container">
                { children }
            </div>
        </section>
    );
};

export default Section;