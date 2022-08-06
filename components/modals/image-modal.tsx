import { useContext, useEffect, useState } from "react";
import Modal from "../ui/modal";
import { UiContext } from "../context/ui";

/**
 * @function ImageModal
 * @summary Image modal component
 * @description A modal to display a larger image on screen.
 * @author J. Trpka
 * @returns { JSX }
 */
const ImageModal = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const uiContext = useContext(UiContext);

  // Check if the image modal data is not null
  useEffect(() => {
    if (uiContext.imageModalData) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [uiContext.imageModalData]);

  const onCloseHandler = (): void => {
    uiContext.setImageModal(null);
  }

  return (
    <Modal
      isActive={isActive}
      ariaLabel="Image Preview Modal"
      onClose={onCloseHandler}
    >
      <div className="modal-content has-text-centered">
        { uiContext.imageModalData ? (
          <picture>
            <source srcSet={uiContext.imageModalData.image} type="image/png" />
            { /* eslint-disable-next-line @next/next/no-img-element*/ }
            <img src={uiContext.imageModalData.image} alt={uiContext.imageModalData.altText} />
          </picture>
        ) : null }
      </div>
    </Modal>
  );
};

export default ImageModal;