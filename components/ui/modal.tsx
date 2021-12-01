import { useState } from "react";

/**
 * @interface ModalProps
 * @summary Modal component props
 * @author J. Trpka
 * @property { boolean } isActive
 * @property { string } ariaLabel
 * @property { string } ariaDescription
 * @property { func } onClose
 * @property { React.ReactNode } children
 */
interface ModalProps {
    isActive: boolean
    ariaLabel?: string
    ariaDescription?: string
    onClose: () => void
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
    const { isActive, ariaLabel, ariaDescription, onClose, children } = props;

    return (
        <div role="dialog" 
            className={ `modal${ isActive ? ' is-active' : '' }` }
            aria-label={ ariaLabel ? ariaLabel : 'A simple modal' }
            aria-description={ ariaDescription ? ariaDescription : 'A simple modal showing additional content to the user.'}
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