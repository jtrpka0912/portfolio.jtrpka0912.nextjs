import NavigationLink from '../../ui/navigation-link/NavigationLink';

import HeaderBurger from './header-burger';

/**
 * @function HeaderBrand
 * @summary Header Brand component
 * @description The part of the navigation bar that shows the branding of the website and the hamburger button.
 * @returns JSX
 */
const HeaderBrand = () => {
  return (
    <div className="navbar-brand is-align-items-center">
      <NavigationLink href="/">
        <a className="navbar-item">Portfolio</a>
      </NavigationLink>

      <HeaderBurger />
    </div>
  )
};

export default HeaderBrand;