import { createSlice } from '@reduxjs/toolkit';

import { addIngredient, removeIngredient, updateBun, countTotalPrice } from './actions';

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

  //действия (actions):
  //добавление ингредиента
  //удаление ингредиента
  //замена булки
  extraReducers: (builder) => {
    builder
      .addCase(addIngredient, (state, action) => {
        state.selectedIngredients.push(action.payload);
        // добавить ингредиент в массив
        // обновить в state.ingredients поле count
      })
      .addCase(removeIngredient, (state, action) => {
        console.log(action.payload);
        // удалить из списка ингредиент один (если несколько)
        // обновить в state.ingredients поле count
      })
      .addCase(updateBun, (state, action) => {
        state.selectedBun = action.payload;
        //присвоить selectedBun новное значение
        // обновить в state.ingredients.ingredient поле count
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
