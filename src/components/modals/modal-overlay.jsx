import styles from './modal-overlay.module.css';

export const ModalOverlay = ({ children, onClose }) => {
  console.log('modalOverlay');
  return (
    <div className={styles.back} onClick={onClose}>
      {children}
    </div>
  );
};
