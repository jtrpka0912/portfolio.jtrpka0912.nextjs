/**
 * @interface ModalProps
 * @summary Modal component props
 * @author J. Trpka
 * @property { boolean } isActive
 * @property { React.ReactNode } children
 */
interface ModalProps {
    isActive?: boolean
    children: React.ReactNode
}

/**
 * @function Modal
 * @summary Modal component
 * @description A basic modal layout for multiple purposes
 * @author J. Trpka
 * @returns { JSX }
 */
const Modal = (props: ModalProps) => {
    const { isActive, children } = props;

    return (
        <div role="dialog" 
            className={ `modal${ isActive ? ' is-active' : '' }` }
        >    
            <div className="modal-background"></div>
            { children }
            <button className="modal-close is-large" aria-label="close"></button>
        </div>
    );
};

export default Modal;