import { Image as ChakraImage } from "@chakra-ui/react"
import NextImage from "next/image";
import { PortfolioImageProps } from "./portfolio-image.types";

/**
 * @function PortfolioImage
 * @summary A portfolio image component
 * @description A helper component that combines the styling of Chakra image with NextJS image components.
 * @link https://www.chakra-ui.com/docs/components/image
 * @link https://nextjs.org/docs/app/api-reference/components/image
 * @author J. Trpka <jtrpka0912@gmail.com>
 * @prop {PortfolioImageProps} props - Props for the component
 * @returns {React.ReactNode}
 */
const PortfolioImage = ({
  src,
  alt,
  width,
  height,
  fill = false, // Enforce the developer if image should fill
  ...chakraUI
}: PortfolioImageProps) => {
  return (
    <ChakraImage asChild {...chakraUI}>
      <NextImage src={src} alt={alt} width={width} height={height} fill={fill} />
    </ChakraImage>
  );
};

export default PortfolioImage;