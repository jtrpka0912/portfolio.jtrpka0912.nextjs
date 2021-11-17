import Link from 'next/link';

/**
 * @function HeaderMenu
 * @summary Header Menu component
 * @description Header menu with links for the application.
 * @todo: Add is-active class to show the menu on mobile
 * @returns JSX
 */
const HeaderMenu = () => {
    return (
        <div className="navbar-menu">
            <div className="navbar-end">
                <Link href="/contact">
                    <a className="navbar-item">Contact</a>
                </Link>
            </div>
        </div>
    )
}

export default HeaderMenu;