import { createSlice } from '@reduxjs/toolkit';

import { createOrder } from './actions';

const initialState = {
  orderNumber: null,
  loading: false,
  error: null,
};

export const ingredientsSlice = createSlice({
  name: 'order-details',
  initialState,
  reducers: {},
  selectors: {
    getOrderNumber: (state) => state.orderNumber,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => { 
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || 'Unknown error';
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.ingredients = action.payload?.data?.map((ingredient) => {
          return { ...ingredient, count: 0 };
        });
        state.loading = false;
      });
  },
});

export const { getOrederNumber } = ingredientsSlice.selectors;
