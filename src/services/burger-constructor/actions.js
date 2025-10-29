import { createAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export const addIngredient = createAction(
  'burger-constructor/addIngredient',
  (ingredient) => {
    return {
      payload: {
        ...ingredient,
        id: uuid(),
      },
    };
  }
);

export const sortIngredient = createAction(
  'burger-constructor/sortIngredient',
  (dragIndex, hoverIndex) => {
    return {
      payload: {
        from: dragIndex,
        to: hoverIndex,
      },
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

export const returnToInitialState = createAction(
  'burger-constructor/returnToInitialState'
);
