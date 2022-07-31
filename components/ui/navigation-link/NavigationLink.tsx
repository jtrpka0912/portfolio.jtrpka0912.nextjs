import React, { useContext } from 'react';
import Link, { LinkProps } from 'next/link';

import { UiContext } from '../../context/ui';

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