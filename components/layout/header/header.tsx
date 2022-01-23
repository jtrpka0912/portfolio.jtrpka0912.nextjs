import { useState } from "react";
import HeaderBrand from "./header-brand";
import HeaderMenu from "./header-menu";

/**
 * @function Header
 * @summary Header component
 * @description The main header of the application
 * @returns JSX
 */
const Header = () => {
    return (
        <header>
            <nav className="navbar" role="navigation" aria-label="Header Navigation">
                <HeaderBrand />

                <HeaderMenu />
            </nav>
        </header>
    )
};

export default Header;