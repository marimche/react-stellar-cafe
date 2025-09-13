import PropTypes from 'prop-types';

import styles from './modal-overlay.module.css';

export const ModalOverlay = ({ children, onClose }) => {
  return (
    <div className={styles.back} onClick={onClose}>
      {children}
    </div>
  );
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.element.isRequired,
};
