import Header from './header/header';
import Footer from './footer/footer';

/**
 * @interface LayoutProps
 * @description Props for the layout component
 * @property { React.ReactNode } children
 */
interface LayoutProps {
    children: React.ReactNode
}

/**
 * @function Layout
 * @summary Layout component
 * @description The main page layout component that houses the header, content, and footer.
 * @param { LayoutProps } props 
 * @returns { JSX }
 */
const Layout = (props: LayoutProps) => {
    const { children } = props;

    return (
        <div className="layout">
            <Header />
            <main className="layout__main">
                { children }
            </main>
            <Footer />
        </div>
    );
};

export default Layout;