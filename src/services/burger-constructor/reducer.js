import { createSlice } from '@reduxjs/toolkit';

import {
  addIngredient,
  sortIngredient,
  removeIngredient,
  returnToInitialState,
} from './actions';

const initialState = {
  selectedBun: null,
  selectedIngredients: [],
};

export const constructorSlice = createSlice({
  name: 'burger-constructor',
  initialState,
  reducers: {},
  selectors: {
    getSelectedBun: (state) => state.selectedBun,
    getSelectedIngredients: (state) => state.selectedIngredients,
  },

  extraReducers: (builder) => {
    builder
      .addCase(addIngredient, (state, action) => {
        if (action.payload?.type !== 'bun') {
          return {
            ...state,
            selectedIngredients: [...state.selectedIngredients, action.payload],
          };
        } else {
          return {
            ...state,
            selectedBun: action.payload,
          };
        }
      })
      .addCase(sortIngredient, (state, action) => {
        const selectedIngredients = [...state.selectedIngredients];
        selectedIngredients.splice(
          action.payload.to,
          0,
          selectedIngredients.splice(action.payload.from, 1)[0]
        );
        return {
          ...state,
          selectedIngredients,
        };
      })
      .addCase(removeIngredient, (state, action) => {
        return {
          ...state,
          selectedIngredients: [
            ...state.selectedIngredients.slice(0, action.payload),
            ...state.selectedIngredients.slice(action.payload + 1),
          ],
        };
      })
      .addCase(returnToInitialState, () => {
        return initialState;
      });
  },
});

export const { getSelectedBun, getSelectedIngredients, getTotalPrice } =
  constructorSlice.selectors;
