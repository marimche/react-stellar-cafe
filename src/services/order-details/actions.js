import { createAsyncThunk } from '@reduxjs/toolkit';

import { sendBurgerDetails } from '../../utils/service-api';

export const createOrder = createAsyncThunk(
  'order-details/createOrder',
  async (burgerIngredients) => {
    return sendBurgerDetails(burgerIngredients);
  }
);
