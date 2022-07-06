import { IImage } from "../../../models/IImage";

/**
 * @type 
 * @name ThumbnailProps
 * @summary Thumbnail component props
 * @author J. Trpka
 * @property { IImage } image
 * @property { string } altText
 * @property { string } title
 * @property { function } onClick
 */
export type ThumbnailProps = {
  image: IImage,
  title?: string,
  onClick: () => void
}