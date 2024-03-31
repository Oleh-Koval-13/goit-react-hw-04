import Modal from "react-modal";
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, closeModal, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      className={`${css.modalContent} ${css.imageContainer}`}
      overlayClassName={css.modalOverlay}

    >
    <div>
        <img src={imageUrl} alt="Large Image" />
    </div>
    </Modal>
  );
};

export default ImageModal;