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
  (index) => {
    return {
      payload: index,
    };
  }
);

export const countTotalPrice = createAction('burger-constructor/countTotalPrice');

export const createOrder = createAction(
  'burger-constructor/createOrder',
  (ingredient) => {
    return {
      payload: ingredient,
    };
  }
);

export const returnToInitialState = createAction(
  'burger-constructor/returnToInitialState'
);
