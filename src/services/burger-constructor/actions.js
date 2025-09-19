import { createAction } from '@reduxjs/toolkit';

export const addIngredient = createAction(
  'burger-constructor/addIngredient',
  (ingredient) => {
    return {
      payload: ingredient,
    };
  }
);

export const removeIngredient = createAction(
  'burger-constructor/removeIngredient',
  (ingredient) => {
    return {
      payload: ingredient,
    };
  }
);

export const updateBun = createAction('burger-constructor/updateBun', (newBun) => {
  return {
    payload: newBun,
  };
});

export const countTotalPrice = createAction('burger-constructor/countTotalPrice');
