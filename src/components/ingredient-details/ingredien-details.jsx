import { CloseIcon } from '@krgaa/react-developer-burger-ui-components';

import styles from './ingredient.details.module.css';

export const IngredientDetails = ({ header, children }) => {
  return (
    <>
      {header && (
        <div className={`${styles.modal_header} m-10`}>
          <p className="text text_type_main-large">{header}</p>
          <CloseIcon type="primary" />
        </div>
      )}
      <div>
        <p>Данные</p>
        {children}
      </div>
    </>
  );
};
