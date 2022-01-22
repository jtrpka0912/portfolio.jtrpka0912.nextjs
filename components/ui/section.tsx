import { CSSProperties } from "react";

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
    const { children, title, backgroundColor } = props;

    /**
     * @var { string } colorClass
     * @summary Color class
     * @description If the background color is a Bulma color class then apply it to the class attribute.
     * @author J. Trpka
     */
    let colorClass: string = '';

    /**
     * @var { CSSProperties } style
     * @summary Style object
     * @description Apply styles, mainly background-color, to the section if backgroundColor is NOT a Bulma color class.
     * @author J. Trpka
     */
    let style: CSSProperties = {};

    // Check if the string starts with 'has' to recognize a Bulma color class
    if(backgroundColor && 
        backgroundColor.substring(0, 3) === 'has') {
            colorClass = backgroundColor;
    } else {
        style = { backgroundColor: backgroundColor };
    }

    
    return (
        <section className={`section ${ colorClass }`} style={ style }>
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