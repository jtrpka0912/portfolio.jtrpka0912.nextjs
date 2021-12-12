/**
 * @interface SidebarProps
 * @summary Sidebar component props
 * @author J. Trpka
 * @property { React.ReactNode } children
 */
interface SidebarProps {
    children: React.ReactNode
}

/**
 * @function Sidebar
 * @summary Sidebar wrapper component
 * @author J. Trpka
 * @param props 
 * @returns { JSX }
 */
const Sidebar = (props: SidebarProps) => {
    return (
        <div className="sidebar mb-3 px-5 py-4 has-background-white-ter">
            { props.children }
        </div>
    );
};

export default Sidebar;