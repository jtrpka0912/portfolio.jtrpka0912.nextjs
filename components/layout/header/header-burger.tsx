// React
import { useContext } from "react";

// Context
import { UiContext } from "../../context/ui";

/**
 * @function HeaderBurger
 * @summary Header Burger component
 * @description: The header button that expands the menu on mobile devices.
 * @author J. Trpka
 * @returns { JSX }
 */
const HeaderBurger = () => {
    const uiContext = useContext(UiContext);

    return (
        <a role="button" 
            className={ `navbar-burger${ uiContext.isHeaderMobileMenuOpen ? ' is-active' : '' }` }
            aria-label="menu"
            aria-expanded={ uiContext.isHeaderMobileMenuOpen ? 'true' : 'false' }
            data-target="header-navigation"
            onClick={ uiContext.setHeaderMobileMenu }
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    )
}

export default HeaderBurger;