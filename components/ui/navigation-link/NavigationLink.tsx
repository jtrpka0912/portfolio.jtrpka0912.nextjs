import React from 'react';
import Link, { LinkProps } from 'next/link';

import { UiContext } from '../../context/ui';

/**
 * @function NavigationLink
 * @summary Navigation Link Component
 * @description A super-charged Link Next.JS component that will close the mobile menu.
 * @author J. Trpka
 * @param { React.PropsWithChildren<LinkProps> } props 
 * @returns { React.FC }
 */
const NavigationLink = (props: React.PropsWithChildren<LinkProps>) => {
  const uiContext = React.useContext(UiContext);
  
  const onClickHandler = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault()
    uiContext.setHeaderMobileMenu();
  };
  
  return (
    <span onClick={onClickHandler}>
      <Link {...props} />
    </span>
  );
};

export default NavigationLink;