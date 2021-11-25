import Modal from "../ui/modal";

/**
 * @interface ImageModalProps
 * @summary Image modal props
 * @author J. Trpka
 * @property { string } image
 * @property { string } altText
 */
interface ImageModalProps {
    image: string,
    altText: string
}

/**
 * @function ImageModal
 * @summary Image modal component
 * @description A modal to display a larger image on screen.
 * @author J. Trpka
 * @returns { JSX }
 */
const ImageModal = (props: ImageModalProps) => {
    const { image, altText } = props;
    
    return (
        <Modal>
            <div className="modal-content">
                <img src={ image } alt={ altText } />
            </div>
        </Modal>
    );
};

export default ImageModal;