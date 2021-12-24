import { Technology } from "../../../models/technology";

/**
 * @interface TechnologyListItemProps
 * @summary Technology list item component props
 * @author J. Trpka
 * @property { Technology } technology
 */
interface TechnologyListItemProps {
    technology: Technology;
}

/**
 * @function TechnologyListItem
 * @summary Technology list item component
 * @description A linkable item that shows a single piece of technology with logo.
 * @author J. Trpka
 * @param { TechnologyListItemProps } props 
 * @returns { JSX }
 */
const TechnologyListItem = (props: TechnologyListItemProps) => {
    const { technology } = props;
    let technologyAltText: string = technology.title + 'logo';

    if(!technology.logo) {
        technologyAltText = 'Placeholder logo';
        technology.logo = '/assets/images/placeholder-technology.png';
    }

    return (
        <a href={ technology.url }>
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                        <img 
                            src={ technology.logo }
                            alt={ technologyAltText } 
                            width="64" 
                            height="64" 
                        />
                    </p>
                </figure>

                <div className="media-content">
                    <h3 className="title is-3">{ technology.title }</h3>
                </div>
            </article>
        </a>
    );
};

export default TechnologyListItem;