import { CloseIcon } from '@krgaa/react-developer-burger-ui-components';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { ModalOverlay } from './modal-overlay';

import styles from './modal.module.css';

const modalRoot = document.getElementById('root');

export const Modal = ({ children, onClose, header }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousemove', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <>
      <div className={styles.main}>
        <div
          className={`mt-15 mr-10 ml-10 ${styles.modal_header}`}
          style={{ justifyContent: header ? 'space-between' : 'end' }}
        >
          {header && <p className="text text_type_main-large">{header}</p>}
          <CloseIcon type="primary" onClick={onClose} />
        </div>
        <div>{children}</div>
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    modalRoot
  );
};
