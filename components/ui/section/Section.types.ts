import React from "react";

/**
 * @interface SectionProps
 * @summary Section component props
 * @author J. Trpka
 * @property { string } title
 * @property { string } backgroundColor
 * @property { string } ariaLabel
 * @property { React.ReactNode } children
 */
export type SectionProps = {
  title?: string;
  backgroundColor?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}