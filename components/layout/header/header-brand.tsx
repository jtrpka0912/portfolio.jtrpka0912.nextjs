import Link from 'next/link';

import HeaderBurger from './header-burger';

/**
 * @function HeaderBrand
 * @summary Header Brand component
 * @description The part of the navigation bar that shows the branding of the website and the hamburger button.
 * @returns JSX
 */
const HeaderBrand = () => {
  return (
    <div className="navbar-brand">
      <Link href="/">
        <a className="navbar-item">Portfolio</a>
      </Link>

      <HeaderBurger />
    </div>
  )
};

export default HeaderBrand;