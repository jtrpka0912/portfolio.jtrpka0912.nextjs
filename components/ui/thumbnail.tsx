/**
 * @interface ThumbnailProps
 * @summary Thumbnail component props
 * @author J. Trpka
 * @property { string } image
 * @property { string } altText
 * @property { string } title
 * @property { function } onClick
 */
interface ThumbnailProps {
    image: string,
    altText: string,
    title?: string,
    onClick: () => void
}

/**
 * @function Thumbnail
 * @summary Thumbnail component
 * @description A thumbnail component that can be used to list items with an image and a CTA.
 * @author J. Trpka
 * @param { ThumbnailProps } props
 * @returns { JSX }
 */
const Thumbnail = (props: ThumbnailProps) => {
    const { image, altText, title, onClick } = props;

    return (
        <div role="link" className="thumbnail card" onClick={ onClick }>
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={ image } alt={ altText } />
                </figure>
            </div>

            { title && (
                <div className="card-header">
                    <div className="card-header-title is-centered">
                        <h5 className="title is-5">{ title }</h5>
                    </div>
                </div>
            ) }
        </div>
    );
};

export default Thumbnail;