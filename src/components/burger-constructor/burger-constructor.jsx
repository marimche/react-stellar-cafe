import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from '@krgaa/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';

import transparentImage from '../../images/transparent.png';
import { addIngredient } from '../../services/burger-constructor/actions';
import {
  getSelectedIngredients,
  getSelectedBun,
} from '../../services/burger-constructor/reducer';
import { BurgerConstructorItem } from '../burger-constructor-item/burger-constructor-item';
import { Modal } from '../modals/modal';
import { OrderDetails } from '../order-details/order-details';

import styles from './burger-constructor.module.css';

export const BurgerConstructor = ({ ingredients }) => {
  //список выбранных ингредиентов
  const selectedIngredients = useSelector(getSelectedIngredients);
  const bun = useSelector(getSelectedBun);

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const handleOpenOrderDetails = () => {
    setVisible(true);
  };

  const handleCloseOrderDetails = () => {
    setVisible(false);
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

  return (
    <section className={styles.burger_constructor} id="react-modals" ref={dropTarget}>
      {ingredients?.length > 0 && (
        <div>
          <div className={styles.burger_ingredients}>
            <div className="ml-6">
              {bun === null ? (
                <ConstructorElement
                  type="top"
                  text="Выберите булки"
                  isLocked={true}
                  thumbnail={transparentImage}
                />
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
                <ConstructorElement
                  text="Выберите начинку"
                  isLocked={undefined}
                  thumbnail={transparentImage}
                />
              )}
            </div>
            <div className="ml-6">
              {bun === null ? (
                <ConstructorElement
                  type="bottom"
                  text="Выберите булки"
                  isLocked={true}
                  thumbnail={transparentImage}
                />
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
              <p className="text text_type_main-large">610</p>
              <CurrencyIcon type="primary" />
            </div>
            <Button
              extraClass="mr-10"
              htmlType="button"
              type="primary"
              size="large"
              onClick={handleOpenOrderDetails}
            >
              Нажми на меня
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
