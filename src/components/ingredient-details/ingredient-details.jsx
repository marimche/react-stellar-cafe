import PropTypes from 'prop-types';
// import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getIngredients } from '../../services/burger-ingredients/reducer';

import styles from './ingredient-details.module.css';

export const IngredientDetails = () => {
  // const [currentIngredient, setCurrentIngredient] = useState({});
  let { id } = useParams();
  const ingredients = useSelector(getIngredients);
  console.log('ingredients', ingredients);

  // const getCurrentIngredient = (ingredients, ingredientId) => {
  //   const ingredient = ingredients.find((e) => {
  //     return e._id === ingredientId;
  //   });
  //   return ingredient;
  // };

  // useEffect(() => {
  //   setCurrentIngredient(getCurrentIngredient(ingredients, id));
  // }, [ingredients, id]);

  const currentIngredient = ingredients.find((e) => e._id === id);
  console.log('currentIngredient', currentIngredient);

  return (
    <>
      <div className={styles.image_container}>
        <img className={`${styles.image} mt-20`} src={currentIngredient?.image}></img>
      </div>
      <div className={`${styles.name_container} mt-20`}>
        <p className="text text_type_main-medium">{currentIngredient?.name}</p>
      </div>
      <div className={`${styles.composition_container} mt-20`}>
        <div className={styles.composition_item}>
          <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
          <p className="text text_type_main-default text_color_inactive">
            {currentIngredient?.calories}
          </p>
        </div>
        <div className={styles.composition_item}>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_main-default text_color_inactive">
            {currentIngredient?.proteins}
          </p>
        </div>
        <div className={styles.composition_item}>
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_main-default text_color_inactive">
            {currentIngredient?.fat}
          </p>
        </div>
        <div className={styles.composition_item}>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_main-default text_color_inactive">
            {currentIngredient?.carbohydrates}
          </p>
        </div>
      </div>
    </>
  );
};

IngredientDetails.propTypes = {
  currentIngredient: PropTypes.object,
};
