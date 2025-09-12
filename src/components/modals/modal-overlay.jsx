import styles from './modal-overlay.module.css';

export const ModalOverlay = ({ children, onClose }) => {
  return (
    <div className={styles.back} onClick={onClose}>
      {children}
    </div>
  );
};
