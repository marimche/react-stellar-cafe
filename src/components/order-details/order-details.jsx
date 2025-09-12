import doneImage from '../../images/done.svg';

export const OrderDetails = () => {
  return (
    <>
      <div className="mt-15">
        <p style={{ textAlign: 'center' }} className="text text_type_digits-large">
          034536
        </p>
      </div>
      <div className="mt-8">
        <p style={{ textAlign: 'center' }} className="text text_type_main-medium">
          идентификатор заказа
        </p>
      </div>
      <div className="mt-10 mb-10" style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={doneImage} alt="done" />
      </div>
      <div>
        <p className="text text_type_main-small" style={{ textAlign: 'center' }}>
          Ваш заказ начали готовить
        </p>
        <p
          className="text text_type_main-default text_color_inactive"
          style={{ textAlign: 'center' }}
        >
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </>
  );
};
