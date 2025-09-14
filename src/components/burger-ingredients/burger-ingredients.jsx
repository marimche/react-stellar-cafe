import { IngredientCard } from '@/components/ingredient-card/ingredient-card';
import { Tab } from '@krgaa/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { IngredientDetails } from '../ingredient-details/ingredien-details';
import { Modal } from '../modals/modal';

import styles from './burger-ingredients.module.css';

export const BurgerIngredients = ({ ingredients }) => {
  const [visible, setVisible] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState({});

  const handleCloseIngredientDetails = () => {
    setVisible(false);
  };

  const handleOpenIngredientDetails = () => {
    setVisible(true);
  };

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
              document.getElementById('bun').scrollIntoView({
                behavior: 'smooth',
                inline: 'nearest',
              });
            }}
          >
            Булки
          </Tab>
          <Tab
            value="main"
            active={false}
            onClick={() => {
              document.getElementById('main').scrollIntoView({
                behavior: 'smooth',
                inline: 'nearest',
              });
            }}
          >
            Начинки
          </Tab>
          <Tab
            value="sauce"
            active={false}
            onClick={() => {
              document.getElementById('sauce').scrollIntoView({
                behavior: 'smooth',
                inline: 'nearest',
              });
            }}
          >
            Соусы
          </Tab>
        </ul>
      </nav>
      {ingredients?.length > 0 && (
        <div className={`${styles.items} mt-10`}>
          <ul className={styles.list}>
            <li id="bun">
              <p className="text text_type_main-medium">Булки</p>
              <div className={styles.items}>
                {ingredientsByTypes['bun'].map((ingredient) => (
                  <IngredientCard
                    key={ingredient._id}
                    ingredient={ingredient}
                    onClick={() => {
                      setCurrentIngredient(ingredient);
                      handleOpenIngredientDetails();
                    }}
                  />
                ))}
              </div>
            </li>
            <li id="main">
              <p className="text text_type_main-medium">Начинки</p>
              <div className={styles.items}>
                {ingredientsByTypes['main'].map((ingredient) => (
                  <IngredientCard
                    key={ingredient._id}
                    ingredient={ingredient}
                    count={1}
                    onClick={() => {
                      setCurrentIngredient(ingredient);
                      handleOpenIngredientDetails();
                    }}
                  />
                ))}
              </div>
            </li>
            <li id="sauce">
              <p className="text text_type_main-medium">Соусы</p>
              <div className={styles.items}>
                {ingredientsByTypes['sauce'].map((ingredient) => (
                  <IngredientCard
                    key={ingredient._id}
                    ingredient={ingredient}
                    onClick={() => {
                      setCurrentIngredient(ingredient);
                      handleOpenIngredientDetails();
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
