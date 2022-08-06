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
  children
}: SplitContentProps) => {
  return (
    <Section ariaLabel={ ariaLabel }>
      { children }
    </Section>
  );
};

export default SplitContent;