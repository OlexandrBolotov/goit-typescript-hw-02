import styles from './LoadMoreBtn.module.css';

interface Props {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<Props> = ({ onClick }) => (
  <div className={styles.wrapper}>
    <button className={styles.button} onClick={onClick}>
      Load more
    </button>
  </div>
);

export default LoadMoreBtn;
