import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from '@krgaa/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { Modal } from '../modals/modal';
import { OrderDetails } from '../order-details/order-details';

import styles from './burger-constructor.module.css';

export const BurgerConstructor = ({ ingredients }) => {
  const [visible, setVisible] = useState(false);

  const handleOpenOrderDetails = () => {
    setVisible(true);
  };

  const handleCloseOrderDetails = () => {
    setVisible(false);
  };

  const getBun = (ingredients) => {
    const buns = ingredients.filter((ingredient) => ingredient.type === 'bun');
    return buns[0];
  };

  const bun = getBun(ingredients);
  const selectedIngredients = ingredients.filter(
    (ingredient) => ingredient.type !== 'bun'
  );

  return (
    <section className={styles.burger_constructor} id="react-modals">
      {ingredients?.length > 0 && (
        <div>
          <div className={styles.burger_ingredients}>
            <div className="ml-6">
              <ConstructorElement
                type="top"
                isLocked={true}
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image}
              />
            </div>
            <div className={styles.internal_ingredients}>
              {selectedIngredients.map((ingredient) => {
                return (
                  <div key={ingredient._id}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                      text={ingredient.name}
                      price={ingredient.price}
                      thumbnail={ingredient.image}
                    />
                  </div>
                );
              })}
            </div>
            <div className="ml-6">
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image}
              />
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
