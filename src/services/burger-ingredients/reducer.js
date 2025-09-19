import { createSlice } from '@reduxjs/toolkit';

import {
  loadIngredients,
  increaseIngredientCount,
  decreaseIngredientCount,
} from './actions';

const initialState = {
  ingredients: [],
  loading: false,
  error: null,
};

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  selectors: {
    getIngredients: (state) => state.ingredients,
    getIngredientsLoading: (state) => state.loading,
    getIngredientsError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadIngredients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadIngredients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || 'Unknown error';
      })
      .addCase(loadIngredients.fulfilled, (state, action) => {
        state.ingredients = action.payload?.data?.map((ingredient) => {
          return { ...ingredient, count: 0 };
        });
        state.loading = false;
      })
      .addCase(increaseIngredientCount, (state, action) => {
        state.ingredients = state.ingredients.map((ingredient) => {
          if (ingredient._id === action.payload._id) {
            return { ...ingredient, count: action.payload.count + 1 };
          }
          return ingredient;
        });
      })
      .addCase(decreaseIngredientCount, (state, action) => {
        state.ingredients = state.ingredients.map((ingredient) => {
          if (ingredient.id === action.payload.id) {
            return { ...ingredient, count: action.payload.count - 1 };
          }
          return ingredient;
        });
      });
  },
});

export const { getIngredients, getIngredientsError, getIngredientsLoading } =
  ingredientsSlice.selectors;
