import { useState } from "react";

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
 * @todo Need to check if the active status will still work once state management is implemented.
 * @todo https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role
 * @returns { JSX }
 */
const Modal = (props: ModalProps) => {
    const [isModalActive, setIsModalActive] = useState<boolean>(props.isActive ? true : false);
    
    const { children } = props;

    /**
     * @function onClose
     * @summary Close the modal
     * @description Close the modal with either the background or the close button
     * @author J. Trpka
     */
    const onClose = (): void => {
        setIsModalActive(!isModalActive);
    }

    return (
        <div role="dialog" 
            className={ `modal${ isModalActive ? ' is-active' : '' }` }
        >    
            <div className="modal-background" onClick={ onClose }></div>
            { children }
            <button 
                className="modal-close is-large" 
                aria-label="close"
                onClick={ onClose }
            ></button>
        </div>
    );
};

export default Modal;