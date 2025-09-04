import { IngredientDetails } from '@/components/ingredient-detales/ingredient-detales';
import { Tab } from '@krgaa/react-developer-burger-ui-components';

import styles from './burger-ingredients.module.css';

export const BurgerIngredients = ({ ingredients }) => {
  // console.log(ingredients);

  return (
    <section className={styles.burger_ingredients}>
      <nav>
        <ul className={styles.menu}>
          <Tab
            value="bun"
            // active={true}
            onClick={() => {
              document.getElementById('bun').scrollIntoView({
                behavior: 'smooth',
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
              });
            }}
          >
            Соусы
          </Tab>
        </ul>
      </nav>
      <div className={styles.items}>
        <ul className={styles.list}>
          <li id="bun">
            Булки
            <IngredientDetails ingredient={ingredients[0]} />
          </li>
          <li id="main">
            Начинки
            <div className={styles.items}>
              <IngredientDetails ingredient={ingredients[3]} />
            </div>
          </li>
          <li id="sauce">
            Соусы
            <div className={styles.items}>
              {ingredients.map((ingredient) => (
                <IngredientDetails key={ingredient._id} ingredient={ingredient} />
              ))}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
