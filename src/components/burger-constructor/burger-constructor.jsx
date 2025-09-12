import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from '@krgaa/react-developer-burger-ui-components';
import { useEffect, useState } from 'react';

import { Modal } from '../modals/modal';
import { OrderDetails } from '../order-details/order-details';

import styles from './burger-constructor.module.css';

export const BurgerConstructor = () => {
  const url = 'https://norma.nomoreparties.space/api/ingredients ';

  const [ingredients, setIngredients] = useState([]);
  const [bun, setBun] = useState({});
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((ingredients) => {
        setIngredients(ingredients.data);
        setBun(getBun(ingredients.data));
        setSelectedIngredients(getSelectedIngredients(ingredients.data));
      })
      .catch((error) => {
        throw error;
      });
  }, []);

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

  const getSelectedIngredients = (ingredients) => {
    return ingredients.filter((ingredient) => ingredient.type !== 'bun');
  };

  return (
    <section className={styles.burger_constructor} id="react-modals">
      {ingredients?.length > 0 && (
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ marginLeft: '24px' }}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                overflow: 'auto',
                height: '465px',
              }}
            >
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
            <div style={{ marginLeft: '24px' }}>
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
            <div style={{ overflow: 'hidden' }}>
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
