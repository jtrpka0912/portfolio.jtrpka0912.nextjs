import React, { useContext } from 'react';
import { UiContext } from '../../context/ui';
import NavigationLink from '../../ui/navigation-link/NavigationLink';

/**
 * @function HeaderMenu
 * @summary Header Menu component
 * @description Header menu with links for the application.
 * @author J. Trpka
 * @returns { JSX }
 */
const HeaderMenu = () => {
  const uiContext = useContext(UiContext);

  return (
    <div id="header-navigation"
      className={`navbar-menu${uiContext.isHeaderMobileMenuOpen ? ' is-active' : ''}`}>
      <div className="navbar-end">
        { /* eslint-disable-next-line @next/next/no-html-link-for-pages */ }
        <NavigationLink href="/project">
          <a className="navbar-item">Projects</a>
        </NavigationLink>
      </div>
    </div>
  )
}

export default HeaderMenu;