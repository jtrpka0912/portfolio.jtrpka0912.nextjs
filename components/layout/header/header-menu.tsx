import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import { UiContext } from '../../context/ui';

/**
 * @function HeaderMenu
 * @summary Header Menu component
 * @description Header menu with links for the application.
 * @author J. Trpka
 * @returns { JSX }
 */
const HeaderMenu = () => {
  const uiContext = useContext(UiContext);
  const router = useRouter();

  const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault()
    router.push(link);
    uiContext.setHeaderMobileMenu();
  };

  return (
    <div id="header-navigation"
      className={`navbar-menu${uiContext.isHeaderMobileMenuOpen ? ' is-active' : ''}`}>
      <div className="navbar-end">
        { /* eslint-disable-next-line @next/next/no-html-link-for-pages */ }
        <a className="navbar-item" 
          href="/project" 
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => onClickHandler(e, '/project')}
        >Projects</a>
      </div>
    </div>
  )
}

export default HeaderMenu;