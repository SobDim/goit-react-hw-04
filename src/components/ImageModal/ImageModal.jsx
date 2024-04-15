import Modal from 'react-modal';
import s from './ImageModal.module.css';

const ImageModal = ({ closeModal, isOpen, imgObject }) => {
  return (
    <Modal
      className={s.modal}
      overlayClassName={s.overlay}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      preventScroll={true}
      isOpen={isOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      contentLabel="Example Modal"
    >
      <div className={s.modal_wrapper}>
        <img className={s.img} src={imgObject.url} alt={imgObject.alt} />
        <button onClick={closeModal}>Close</button>
      </div>
    </Modal>
  );
};

export default ImageModal;
