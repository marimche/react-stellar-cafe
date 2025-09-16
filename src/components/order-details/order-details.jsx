import doneImage from '../../images/done.svg';

import styles from './order-details.module.css';

export const OrderDetails = () => {
  return (
    <>
      <div className="mt-15">
        <p className={`${styles.text} text text_type_digits-large`}>034536</p>
      </div>
      <div className="mt-8">
        <p className={`${styles.text} text text_type_main-medium`}>
          идентификатор заказа
        </p>
      </div>
      <div className={`${styles.img_container} mt-10 mb-10`}>
        <img src={doneImage} alt="done" />
      </div>
      <div>
        <p className={`${styles.text} text text_type_main-small`}>
          Ваш заказ начали готовить
        </p>
        <p className={`${styles.text} text text_type_main-default text_color_inactive`}>
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </>
  );
};
