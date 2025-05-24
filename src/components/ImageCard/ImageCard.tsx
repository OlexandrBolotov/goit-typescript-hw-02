import type { ApiImage } from '../types/api';
import styles from './ImageCard.module.css';

interface Props {
  image: ApiImage;
  onClick: (image: ApiImage) => void;
}

const ImageCard: React.FC<Props> = ({ image, onClick }) => {
  const { urls, alt_description } = image;

  return (
    <div className={styles.card} onClick={() => onClick(image)}>
      <img
        src={urls.small}
        alt={alt_description}
        className={styles.image}
        loading="lazy"
      />
    </div>
  );
};

export default ImageCard;
