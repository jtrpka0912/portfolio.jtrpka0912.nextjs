import Image from "next/image";
import { ThumbnailProps } from "./Thumbnail.types";

/**
 * @function Thumbnail
 * @summary Thumbnail component
 * @description A thumbnail component that can be used to list items with an image and a CTA.
 * @author J. Trpka
 * @param { ThumbnailProps } props
 * @returns { JSX }
 */
const Thumbnail = ({
  image,
  title,
  width,
  height,
  onClick
}: ThumbnailProps) => {
  return (
    <div role="link" title={title} className="thumbnail card is-clickable" onClick={onClick}>
      <div className="card-image">
        <figure>
          <Image 
            src={image.path} 
            alt={image.altText}
            width={ width }
            height={ height }
            layout="responsive"
          />
        </figure>
      </div>

      {title && (
        <div className="card-header">
          <div className="card-header-title is-centered">
            <h5 className="title is-5">{title}</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default Thumbnail;