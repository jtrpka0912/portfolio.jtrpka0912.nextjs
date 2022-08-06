import Image from "next/image";
import React from "react";
import Section from "../../ui/section/Section"
import { SplitContentProps } from "./SplitContent.types";

/**
 * @function SplitContent
 * @summary Split text and image section component.
 * @description A content section that shows textual content and an image.
 * @author J. Trpka
 * @returns { React.FC }
 */
const SplitContent: React.FC<SplitContentProps> = ({
  ariaLabel,
  image,
  altText,
  flip = false,
  children
}: SplitContentProps) => {
  return (
    <section 
      aria-label={ ariaLabel ?? `A split content section` } 
      className={ `split-content${ flip ? ' split-content--flipped' : null }` }
    >
      <div className="split-content__columns columns is-multiline is-mobile">
        <div className="split-content__text column is-full-mobile is-half-tablet">
          <div className="split-content__text-container">
            { children }
          </div>
        </div>

        <div className="split-content__image column is-full-mobile is-half-tablet">
          <div className="split-content__image-container">
            <Image src={ image } alt={ altText } layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitContent;