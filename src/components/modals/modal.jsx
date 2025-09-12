import { CloseIcon } from '@krgaa/react-developer-burger-ui-components';
import ReactDOM from 'react-dom';

import { ModalOverlay } from './modal-overlay';

import styles from './modal.module.css';

const modalRoot = document.getElementById('root');

export const Modal = ({ children, onClose, header }) => {
  console.log('modal', header);
  return ReactDOM.createPortal(
    <>
      <div className={styles.main}>
        <div className={`mt-15 mr-10 ${styles.modal_header}`}>
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
