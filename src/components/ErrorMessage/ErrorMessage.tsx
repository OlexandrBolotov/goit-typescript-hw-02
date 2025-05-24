import styles from './ErrorMessage.module.css';

interface Props {
  message?: string;
}

const ErrorMessage: React.FC<Props> = ({ message = 'Something went wrong. Please try again.' }) => {
  return <p className={styles.error}>{message}</p>;
};

export default ErrorMessage;
