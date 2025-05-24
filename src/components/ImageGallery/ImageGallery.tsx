import type { ApiImage } from '../types/api';
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

interface Props {
  images: ApiImage[];
  onImageClick: (image: ApiImage) => void;
}

const ImageGallery: React.FC<Props> = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <li key={image.id} className={styles.item}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
