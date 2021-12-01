import Modal from "../ui/modal";

/**
 * @function ImageModal
 * @summary Image modal component
 * @description A modal to display a larger image on screen.
 * @author J. Trpka
 * @returns { JSX }
 */
const ImageModal = () => {
    const image: string = '';
    const altText: string = '';
    
    return (
        <Modal>
            <div className="modal-content">
                <img src={ image } alt={ altText } />
            </div>
        </Modal>
    );
};

export default ImageModal;