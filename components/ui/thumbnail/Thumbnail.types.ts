import { IImage } from "../../../models/IImage";

/**
 * @type 
 * @name ThumbnailProps
 * @summary Thumbnail component props
 * @author J. Trpka
 * @property { IImage } image
 * @property { string } altText
 * @property { string | undefined } title
 * @property { number } width
 * @property { number } height
 * @property { function } onClick
 */
export type ThumbnailProps = {
  image: IImage;
  title?: string;
  width: number;
  height: number;
  onClick: () => void;
}