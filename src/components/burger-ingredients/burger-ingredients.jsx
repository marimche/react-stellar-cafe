import { IngredientCard } from '@/components/ingredient-card/ingredient-card';
import { Tab } from '@krgaa/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useEffect, useRef, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getSelectedIngredients,
  getSelectedBun,
} from '../../services/burger-constructor/reducer';
import { loadIngredients } from '../../services/burger-ingredients/actions';
import { getIngredients } from '../../services/burger-ingredients/reducer';
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
  const dispatch = useDispatch();
  const ingredients = useSelector(getIngredients);

  const visible = useSelector(getVisibleOption);
  const currentIngredient = useSelector(getIngredientDetails);

  useEffect(() => {
    dispatch(loadIngredients());
  }, []);

  const listRef = useRef(null);
  const bunRef = useRef(null);
  const mainRef = useRef(null);
  const sauceRef = useRef(null);

  const [currentTab, setCurrentTab] = useState('bun');

  const handleScroll = () => {
    const topList = listRef.current.getBoundingClientRect();
    const topBun = bunRef.current.getBoundingClientRect();
    const topMain = mainRef.current.getBoundingClientRect();
    const topSauce = sauceRef.current.getBoundingClientRect();

    const diff = {
      [bunRef.current.id]: Math.abs(topBun.top - topList.top),
      [mainRef.current.id]: Math.abs(topMain.top - topList.top),
      [sauceRef.current.id]: Math.abs(topSauce.top - topList.top),
    };

    let key = '';
    let minDiff = Math.abs(topSauce.bottom - topList.top);
    for (let item in diff) {
      if (diff[item] < minDiff) {
        minDiff = diff[item];
        key = item;
      }
    }
    if (key && key !== currentTab) {
      setCurrentTab(key);
    }
  };

  const handleOpenIngredientDetails = (ingredient) => {
    dispatch(getIngredient(ingredient));
  };

  const handleCloseIngredientDetails = () => {
    dispatch(closeIngredient());
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

  const selectedIngredients = useSelector(getSelectedIngredients);
  const bun = useSelector(getSelectedBun);

  const counters = useMemo(() => {
    const countById = {};
    selectedIngredients.forEach((ingredient) => {
      if (!countById[ingredient._id]) {
        countById[ingredient._id] = 1;
      } else {
        countById[ingredient._id]++;
      }
    });
    if (bun) {
      countById[bun._id] = 2;
    }
    return countById;
  }, [bun, selectedIngredients]);

  return (
    <section className={styles.burger_ingredients}>
      <nav>
        <ul className={styles.menu}>
          <Tab
            value="bun"
            active={currentTab === 'bun'}
            onClick={() => {
              bunRef.current.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Булки
          </Tab>
          <Tab
            value="main"
            active={currentTab === 'main'}
            onClick={() => {
              mainRef.current.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Начинки
          </Tab>
          <Tab
            value="sauce"
            active={currentTab === 'sauce'}
            onClick={() => {
              sauceRef.current.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Соусы
          </Tab>
        </ul>
      </nav>
      {ingredients?.length > 0 && (
        <div className={`${styles.items} mt-10`} onScroll={handleScroll} ref={listRef}>
          <ul className={styles.list}>
            <li id="bun" ref={bunRef}>
              <p className="text text_type_main-medium">Булки</p>
              <div className={styles.items}>
                {ingredientsByTypes['bun'].map((ingredient) => (
                  <IngredientCard
                    key={ingredient._id}
                    ingredient={ingredient}
                    count={counters[ingredient._id]}
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
                    count={counters[ingredient._id]}
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
                    count={counters[ingredient._id]}
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
