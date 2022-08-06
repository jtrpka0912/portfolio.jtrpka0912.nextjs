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
  children
}: SplitContentProps) => {
  return (
    <Section ariaLabel={ ariaLabel }>
      <div className="split-content">
        <div className="split-content__text">
          { children }
        </div>

        <div className="split-content__image">
          <Image src={ image } alt={ altText } layout="fill" />
        </div>
      </div>
    </Section>
  );
};

export default SplitContent;