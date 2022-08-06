/**
 * @interface ModalProps
 * @summary Modal component props
 * @author J. Trpka
 * @property { boolean } isActive
 * @property { string } ariaLabel
 * @property { func } onClose
 * @property { React.ReactNode } children
 */
interface ModalProps {
  isActive: boolean
  ariaLabel?: string
  onClose: () => void
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
  const { isActive, ariaLabel, onClose, children } = props;

  return (
    <div role="dialog"
      className={`modal${isActive ? ' is-active' : ''}`}
      aria-label={ariaLabel ? ariaLabel : 'A simple modal'}
    >
      <div className="modal-background" onClick={onClose}></div>
      {children}
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Modal;