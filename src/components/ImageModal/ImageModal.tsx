import Modal from 'react-modal';
import type { ApiImage } from '../types/api';
import styles from './ImageModal.module.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  image: ApiImage;
}

Modal.setAppElement('#root');

const ImageModal: React.FC<Props> = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  const { urls, alt_description, user, likes } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
    >
      <img src={urls.regular || urls.full} alt={alt_description} className={styles.image} />
      <div className={styles.info}>
        {user && <p><strong>Author:</strong> {user.name}</p>}
        {likes !== undefined && <p><strong>Likes:</strong> ❤️ {likes}</p>}
        {alt_description && <p>{alt_description}</p>}
      </div>
    </Modal>
  );
};

export default ImageModal;
