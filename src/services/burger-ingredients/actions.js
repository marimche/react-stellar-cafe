import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

import { getIngredients } from '../../utils/service-api';

export const loadIngredients = createAsyncThunk(
  'ingredients/loadIngredients',
  async () => {
    return getIngredients();
  }
);

export const getIngredientCount = createAction(
  'ingredients/getIngredientCount',
  (ingredient) => {
    return {
      payload: ingredient._id,
    };
  }
);
