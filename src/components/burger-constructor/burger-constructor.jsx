import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from '@krgaa/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';

import {
  addIngredient,
  returnToInitialState,
} from '../../services/burger-constructor/actions';
import {
  getSelectedIngredients,
  getSelectedBun,
} from '../../services/burger-constructor/reducer';
import { createOrder } from '../../services/order-details/actions';
import { getOrderNumber } from '../../services/order-details/reducer';
import { BurgerConstructorItem } from '../burger-constructor-item/burger-constructor-item';
import { Modal } from '../modals/modal';
import { OrderDetails } from '../order-details/order-details';

import styles from './burger-constructor.module.css';

export const BurgerConstructor = ({ ingredients }) => {
  const selectedIngredients = useSelector(getSelectedIngredients);
  const bun = useSelector(getSelectedBun);

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const handleOpenOrderDetails = () => {
    const ingredienLIdList = selectedIngredients.map((ingredient) => ingredient._id);
    dispatch(createOrder([bun._id, ...ingredienLIdList, bun._id]));
    setVisible(true);
  };

  const order = useSelector(getOrderNumber);
  const handleCloseOrderDetails = () => {
    setVisible(false);
    if (order) {
      dispatch(returnToInitialState());
    }
  };

  const handleDrop = (itemId) => {
    dispatch(addIngredient(itemId));
  };

  const [, dropTarget] = useDrop({
    accept: 'container',
    drop(item) {
      handleDrop(item);
    },
  });

  const price = useMemo(() => {
    return (
      (bun ? bun.price * 2 : 0) +
      selectedIngredients.reduce((sum, value) => sum + value.price, 0)
    );
  }, [bun, selectedIngredients]);

  return (
    <section className={styles.burger_constructor} id="react-modals" ref={dropTarget}>
      {ingredients?.length > 0 && (
        <div>
          <div className={styles.burger_ingredients}>
            <div className="ml-6">
              {bun === null ? (
                <div
                  className={`${styles.temporary_element_top} text text_type_main-default`}
                >
                  Выберите булки
                </div>
              ) : (
                <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={bun.name}
                  price={bun.price}
                  thumbnail={bun.image}
                />
              )}
            </div>
            <div className={styles.internal_ingredients}>
              {selectedIngredients.length > 0 ? (
                selectedIngredients.map((ingredient, index) => {
                  return (
                    <BurgerConstructorItem
                      ingredient={ingredient}
                      index={index}
                      key={ingredient.id}
                    />
                  );
                })
              ) : (
                <div
                  className={`${styles.temporary_element_middle} ml-5 text text_type_main-default`}
                >
                  Выберите начинку
                </div>
              )}
            </div>
            <div className="ml-6">
              {bun === null ? (
                <div
                  className={`${styles.temporary_element_bottom} text text_type_main-default`}
                >
                  Выберите булки
                </div>
              ) : (
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={bun.name}
                  price={bun.price}
                  thumbnail={bun.image}
                />
              )}
            </div>
          </div>
          <div className={`${styles.total_price} mt-10`}>
            <div className={styles.price}>
              <p className="text text_type_main-large">{price}</p>
              <CurrencyIcon type="primary" />
            </div>
            <Button
              extraClass="mr-10"
              htmlType="button"
              type="primary"
              size="large"
              onClick={handleOpenOrderDetails}
            >
              Создать заказ
            </Button>
            <div className={styles.modal_container}>
              {visible && (
                <Modal onClose={handleCloseOrderDetails}>
                  <OrderDetails />
                </Modal>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object),
};
