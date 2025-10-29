import { IngredientCard } from '@/components/ingredient-card/ingredient-card';
import { Tab } from '@krgaa/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadIngredients } from '../../services/burger-ingredients/actions';
import {
  getIngredients, // getIngredientsError, getIngredientsLoading,
} from '../../services/burger-ingredients/reducer';
import {
  getIngredient,
  closeIngredient,
} from '../../services/ingredient-details/actions';
import {
  getVisibleOption,
  getIngredientDetails,
} from '../../services/ingredient-details/reducer';
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import { Modal } from '../modals/modal';

import styles from './burger-ingredients.module.css';

export const BurgerIngredients = () => {
  //список ингредиентов
  const dispatch = useDispatch();
  const ingredients = useSelector(getIngredients);

  const visible = useSelector(getVisibleOption);
  const currentIngredient = useSelector(getIngredientDetails);

  useEffect(() => {
    dispatch(loadIngredients());
  }, []);

  const bunRef = useRef(null);
  const mainRef = useRef(null);
  const sauceRef = useRef(null);

  const handleOpenIngredientDetails = (ingredient) => {
    dispatch(getIngredient(ingredient));
  };

  const handleCloseIngredientDetails = () => {
    dispatch(closeIngredient());
  };

  //фильтрация ингредиентов по типам
  const filterIngredientsByTypes = (ingredients) => {
    const ingredientsByTypes = {};
    ingredients.forEach((ingredient) => {
      if (!(ingredient.type in ingredientsByTypes)) {
        ingredientsByTypes[ingredient.type] = [];
      }
      ingredientsByTypes[ingredient.type].push(ingredient);
    });
    return ingredientsByTypes;
  };

  const ingredientsByTypes = filterIngredientsByTypes(ingredients);

  return (
    <section className={styles.burger_ingredients}>
      <nav>
        <ul className={styles.menu}>
          <Tab
            value="bun"
            onClick={() => {
              bunRef.current.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Булки
          </Tab>
          <Tab
            value="main"
            active={false}
            onClick={() => {
              mainRef.current.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Начинки
          </Tab>
          <Tab
            value="sauce"
            active={false}
            onClick={() => {
              sauceRef.current.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Соусы
          </Tab>
        </ul>
      </nav>
      {ingredients?.length > 0 && (
        <div className={`${styles.items} mt-10`}>
          <ul className={styles.list}>
            <li id="bun" ref={bunRef}>
              <p className="text text_type_main-medium">Булки</p>
              <div className={styles.items}>
                {ingredientsByTypes['bun'].map((ingredient) => (
                  <IngredientCard
                    key={ingredient._id}
                    ingredient={ingredient}
                    onClick={() => {
                      handleOpenIngredientDetails(ingredient);
                    }}
                  />
                ))}
              </div>
            </li>
            <li id="main" ref={mainRef}>
              <p className="text text_type_main-medium">Начинки</p>
              <div className={styles.items}>
                {ingredientsByTypes['main'].map((ingredient) => (
                  <IngredientCard
                    key={ingredient._id}
                    ingredient={ingredient}
                    onClick={() => {
                      handleOpenIngredientDetails(ingredient);
                    }}
                  />
                ))}
              </div>
            </li>
            <li id="sauce" ref={sauceRef}>
              <p className="text text_type_main-medium">Соусы</p>
              <div className={styles.items}>
                {ingredientsByTypes['sauce'].map((ingredient) => (
                  <IngredientCard
                    key={ingredient._id}
                    ingredient={ingredient}
                    onClick={() => {
                      handleOpenIngredientDetails(ingredient);
                    }}
                  />
                ))}
              </div>
            </li>
          </ul>
        </div>
      )}
      <div className={styles.modal_container}>
        {visible && (
          <Modal header="Детали ингредиента" onClose={handleCloseIngredientDetails}>
            <IngredientDetails currentIngredient={currentIngredient} />
          </Modal>
        )}
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object),
};
