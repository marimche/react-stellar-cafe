import { createSlice } from '@reduxjs/toolkit';

// import { loadIngredients, updateBunCount } from './actions';
import { loadIngredients } from './actions';

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
          return { ...ingredient };
        });
        state.loading = false;
      });
  },
});

export const {
  getIngredients,
  getIngredientsError,
  getIngredientsLoading,
  getIngredientCount,
} = ingredientsSlice.selectors;
