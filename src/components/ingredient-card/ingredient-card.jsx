import { CurrencyIcon, Counter } from '@krgaa/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

import styles from './ingredient-card.module.css';

export const IngredientCard = ({ ingredient, onClick }) => {
  return (
    <div key={ingredient._id} className={styles.igredient_details} onClick={onClick}>
      <img className={styles.image} src={ingredient.image} alt={ingredient.name}></img>
      <div className={styles.price}>
        <p className="text text_type_digits-default">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={styles.name}>
        <p className="text text_type_main-default">{ingredient.name}</p>
      </div>
      {ingredient.count > 0 && (
        <Counter
          className={styles.counter}
          count={ingredient.count}
          size="small"
          extraClass="m-1"
        />
      )}
    </div>
  );
};

IngredientCard.propTypes = {
  ingredient: PropTypes.object,
  count: PropTypes.number,
  onClick: PropTypes.func,
};
