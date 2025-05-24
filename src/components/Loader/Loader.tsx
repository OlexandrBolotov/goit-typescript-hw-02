import { ClipLoader } from 'react-spinners';
import styles from './Loader.module.css';

const Loader: React.FC = () => (
  <div className={styles.loader}>
    <ClipLoader size={40} color="#888" />
  </div>
);

export default Loader;
