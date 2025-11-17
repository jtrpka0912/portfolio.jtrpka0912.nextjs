import type { ImageProps as ChakraImageProps } from '@chakra-ui/react';

/**
 * @type {PortfolioImageProps}
 * @extends {ChakraImageProps}
 * @summary Portfolio Image Component Props
 * @author J. Trpka<jtrpka0912@gmail.com>
 * @prop {string} src - The URL to the image file
 * @prop {string} alt - The alt text for the image
 * @prop {number?} width - Width of the image (required if not filled or statically imported)
 * @prop {number?} height - Height of the image (required if not filled or statically imported)
 * @prop {boolean} fill - Expand the image to the size of its parent
 */
export type PortfolioImageProps = ChakraImageProps & {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
};
