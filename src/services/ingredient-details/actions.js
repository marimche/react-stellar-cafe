import { createAction } from '@reduxjs/toolkit';

export const getIngredient = createAction(
  'ingredient-details/getIngredient',
  (ingredient) => {
    return {
      payload: ingredient,
    };
  }
);

export const setCurrentIngredient = createAction(
  'ingredient-details/setCurrentIngredient',
  (ingredient) => {
    return {
      payload: ingredient,
    };
  }
);

export const closeIngredient = createAction('ingredient-details/closeIngredient', () => {
  return {
    payload: {},
  };
});
