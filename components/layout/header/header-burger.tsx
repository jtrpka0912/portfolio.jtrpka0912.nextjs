
/**
 * @function HeaderBurger
 * @summary Header Burger component
 * @description: The header button that expands the menu on mobile devices.
 * @todo Add the is-active class when the menu does expand.
 * @todo Change the aria expanded when it is open.
 * @returns JSX
 */
const HeaderBurger = () => {
    return (
        <a role="button" 
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    )
}

export default HeaderBurger;