import { CloseIcon } from '@krgaa/react-developer-burger-ui-components';
import ReactDOM from 'react-dom';

import { ModalOverlay } from './modal-overlay';

import styles from './modal.module.css';

const modalRoot = document.getElementById('root');

export const Modal = ({ header, children, onClose }) => {
  console.log('modal', header);
  return ReactDOM.createPortal(
    <>
      <div className={styles.main}>
        <div className={`mt-15 mr-10 ${styles.modal_header}`}>
          <p className="text text_type_main-large">Заголовок</p>
          <CloseIcon type="primary" onClick={onClose} />
        </div>
        <div>{children}</div>
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    modalRoot
  );
};

// import { Button } from '@krgaa/react-developer-burger-ui-components';
// import ReactDOM from 'react-dom';

// const modalRoot = document.getElementById('react-modals');
// console.log('modal', modalRoot);

// export const Modal = (props) => {
//   const { children, header, onClose } = props;

//   // Возвращаем ReactDOM.createPortal,
//   // который поместит дочерние элементы в modalRoot
//   return ReactDOM.createPortal(
//     <>
//       <div className="Modal" style={{ backgroundColor: 'black' }}>
//         <h1>{header}</h1>
//         {children}
//       </div>
//       <Button htmlType="button" type="primary" size="large" onClick={onClose}>
//         Закрыть
//       </Button>
//     </>,
//     modalRoot
//   );
// };
