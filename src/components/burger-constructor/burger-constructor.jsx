import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from '@krgaa/react-developer-burger-ui-components';

import styles from './burger-constructor.module.css';

export const BurgerConstructor = ({ ingredients }) => {
  console.log(ingredients);

  return (
    <section className={styles.burger_constructor}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={ingredients[0].image}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            overflow: 'auto',
            height: '480px',
          }}
        >
          {ingredients.map((ingredient) => {
            return (
              <ConstructorElement
                key={ingredient._id}
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
              />
            );
          })}
        </div>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={ingredients[0].image}
        />
      </div>
      <div className={styles.total_price}>
        <div className={styles.price}>
          <p className="text text_type_main-large">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Нажми на меня
        </Button>
      </div>
    </section>
  );
};
