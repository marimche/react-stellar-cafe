import { createSlice } from '@reduxjs/toolkit';

import { getIngredient, closeIngredient, setCurrentIngredient } from './actions';

const initialState = {
  currentIngredient: {},
  visible: false,
};

export const ingredientDetailsSlice = createSlice({
  name: 'ingredient-details',
  initialState,
  reducers: {},
  selectors: {
    getIngredientDetails: (state) => {
      return state.currentIngredient;
    },
    getVisibleOption: (state) => {
      return state.visible;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getIngredient, (state, action) => {
      state.currentIngredient = action.payload;
      state.visible = true;
    });
    builder.addCase(closeIngredient, (state) => {
      state.currentIngredient = {};
      state.visible = false;
    });
    builder.addCase(setCurrentIngredient, (state, action) => {
      console.log('ingredient, ', action.payload);
      state.currentIngredient = action.payload;
      state.visible = true;
    });
  },
});

export const { getIngredientDetails, getVisibleOption } =
  ingredientDetailsSlice.selectors;
