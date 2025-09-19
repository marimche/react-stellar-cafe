import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

import { getIngredients } from '../../utils/service-api';

export const loadIngredients = createAsyncThunk(
  'ingredients/loadIngredients',
  async () => {
    return getIngredients();
  }
);

export const increaseIngredientCount = createAction(
  'ingredients/increaseIngredientCount',
  (ingredient) => {
    return {
      payload: ingredient,
    };
  }
);

export const decreaseIngredientCount = createAction(
  'ingredients/decreaseIngredientCount',
  (ingredient) => {
    return {
      payload: ingredient,
    };
  }
);
