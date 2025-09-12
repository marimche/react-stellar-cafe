import { IngredientCard } from '@/components/ingredient-card/ingredient-card';
import { Tab } from '@krgaa/react-developer-burger-ui-components';
import { useEffect, useState } from 'react';

import styles from './burger-ingredients.module.css';

export const BurgerIngredients = () => {
  const url = 'https://norma.nomoreparties.space/api/ingredients ';

  const [ingredients, setIngredients] = useState([]);
  const [ingredientsByTypes, setIngredientsByTypes] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((ingredients) => {
        setIngredients(ingredients.data);
        setIngredientsByTypes(filterIngredientsByTypes(ingredients.data));
      })
      .catch((error) => {
        throw error;
      });
  }, []);

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

  return (
    <section className={styles.burger_ingredients}>
      <nav>
        <ul className={styles.menu}>
          <Tab
            value="bun"
            // active={true}
            onClick={(e, v) => {
              document.getElementById('bun').scrollIntoView({
                behavior: 'smooth',
                inline: 'nearest',
              });
              console.log(v);
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
                  <IngredientCard key={ingredient._id} ingredient={ingredient} />
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
                  />
                ))}
              </div>
            </li>
            <li id="sauce">
              <p className="text text_type_main-medium">Соусы</p>
              <div className={styles.items}>
                {ingredientsByTypes['sauce'].map((ingredient) => (
                  <IngredientCard key={ingredient._id} ingredient={ingredient} />
                ))}
              </div>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};
