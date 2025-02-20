import icons from '../../assets/icons.svg';
import style from './ImageModal.module.css';

const ImageModal = ({ image, closeModal }) => {
  return (
    <div className={style.modalOverlay} onClick={closeModal}>
      <div className={style.modalContainer} onClick={closeModal}>
        <img
          className={style.modalImage}
          src={image}
          alt="Original size image"
        />
        <button
          className={style.closeModalBtn}
          type="button"
          onClick={closeModal}
        >
          <svg className={style.modalSvg} width={16} height={16}>
            <use href={icons + '#close'}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
