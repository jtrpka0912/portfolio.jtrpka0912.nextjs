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
            <HeaderBrand />

            <HeaderMenu />
        </header>
    )
};

export default Header;