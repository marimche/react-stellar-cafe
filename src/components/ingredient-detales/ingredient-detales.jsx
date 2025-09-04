import { CurrencyIcon, Counter } from '@krgaa/react-developer-burger-ui-components';

import styles from './ingredient-detales.module.css';

export const IngredientDetails = ({ ingredient }) => {
  return (
    <div key={ingredient._id} className={styles.igredient_detales}>
      <img className={styles.image} src={ingredient.image}></img>
      <div className={styles.price}>
        <p className="text text_type_digits-default">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={styles.name}>
        <p className="text text_type_main-default">{ingredient.name}</p>
      </div>
      <Counter className={styles.counter} count={1} size="small" extraClass="m-1" />
    </div>
  );
};
