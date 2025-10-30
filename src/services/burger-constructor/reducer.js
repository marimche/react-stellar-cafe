import { createSlice } from '@reduxjs/toolkit';

import {
  addIngredient,
  sortIngredient,
  removeIngredient,
  countTotalPrice,
  returnToInitialState,
  createOrder,
} from './actions';

const initialState = {
  selectedBun: null,
  selectedIngredients: [],
  totalPrice: 0,
};

export const constructorSlice = createSlice({
  name: 'burger-constructor',
  initialState,
  reducers: {},
  selectors: {
    getSelectedBun: (state) => state.selectedBun,
    getSelectedIngredients: (state) => state.selectedIngredients,
    getTotalPrice: (state) => state.totalPrice,
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
      .addCase(createOrder, () => {
        return initialState;
      })
      .addCase(returnToInitialState, () => {
        return initialState;
      })
      .addCase(countTotalPrice, (state, action) => {
        console.log(action.payload);
        //посчитать стоимость товаров в selectedIngredients + selectedBun
      });
    // .addMatcher(isRejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error?.message || 'Unknown error';
    // });
  },
});

export const { getSelectedBun, getSelectedIngredients, getTotalPrice } =
  constructorSlice.selectors;
