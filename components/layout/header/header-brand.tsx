import Link from 'next/link';

const HeaderBrand = () => {
    return (
        <div className="navbar-brand">
            <Link href="/">
                <a className="navbar-item">Portfolio</a>
            </Link>
        </div>
    )
};

export default HeaderBrand;