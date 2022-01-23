import Link from 'next/link';
import { useContext } from 'react';
import { UiContext } from '../../context/ui';

/**
 * @function HeaderMenu
 * @summary Header Menu component
 * @description Header menu with links for the application.
 * @author J. Trpka
 * @todo: Add is-active class to show the menu on mobile
 * @returns { JSX }
 */
const HeaderMenu = () => {
    const uiContext = useContext(UiContext);
    
    return (
        <div id="header-navigation" 
        className={ `navbar-menu${ uiContext.isHeaderMobileMenuOpen ? ' is-active' : '' }` }>
            <div className="navbar-end">
                <Link href="/contact">
                    <a className="navbar-item">Contact</a>
                </Link>
            </div>
        </div>
    )
}

export default HeaderMenu;