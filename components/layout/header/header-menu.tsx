import Link from 'next/link';
import { useContext, useEffect } from 'react';
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

    // When the links are clicked then close the menu.
    useEffect(() => {
        const linkElement = document.querySelector('#header-navigation .navbar-item');

        if(linkElement) {
            linkElement.addEventListener('click', e => {
                uiContext.setHeaderMobileMenu();
            });
        }
    }, [])
    
    return (
        <div id="header-navigation" 
        className={ `navbar-menu${ uiContext.isHeaderMobileMenuOpen ? ' is-active' : '' }` }>
            <div className="navbar-end">
                <Link href="/project">
                    <a className="navbar-item">Projects</a>
                </Link>

                <Link href="/contact">
                    <a className="navbar-item">Contact</a>
                </Link>
            </div>
        </div>
    )
}

export default HeaderMenu;