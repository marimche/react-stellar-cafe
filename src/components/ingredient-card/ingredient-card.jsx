import { CurrencyIcon, Counter } from '@krgaa/react-developer-burger-ui-components';

import styles from './ingredient-card.module.css';

export const IngredientCard = ({ ingredient, count }) => {
  return (
    <div key={ingredient._id} className={styles.igredient_details}>
      <img className={styles.image} src={ingredient.image}></img>
      <div className={styles.price}>
        <p className="text text_type_digits-default">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={styles.name}>
        <p className="text text_type_main-default">{ingredient.name}</p>
      </div>
      {count > 0 && (
        <Counter
          className={styles.counter}
          count={count}
          size="small"
          extraClass="m-1"
        />
      )}
    </div>
  );
};
