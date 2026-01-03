import { CurrencyIcon, Counter } from '@krgaa/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
// import { Link } from 'react-router-dom';

import styles from './ingredient-card.module.css';

export const IngredientCard = ({ ingredient, onClick, count }) => {
  const [, dragRef] = useDrag({
    type: 'container',
    item: ingredient,
  });
  return (
    // <Link
    //   key={ingredient._id}
    //   to={`/ingredients/${ingredient._id}`}
    //   className={styles.ingredient_details}
    // >
    <div onClick={onClick} ref={dragRef}>
      <img className={styles.image} src={ingredient.image} alt={ingredient.name}></img>
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
    // </Link>
  );
};

IngredientCard.propTypes = {
  ingredient: PropTypes.object.isRequired,
  count: PropTypes.number,
  onClick: PropTypes.func,
};
