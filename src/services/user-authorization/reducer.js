// import { recoverPassword } from '@/utils/service-api';
import { createSlice } from '@reduxjs/toolkit';

import { register, login, recoveryPassword } from './actions';

const initialState = {
  email: '',
  name: '',
  password: '',
};

export const userAuthorizationSlice = createSlice({
  name: 'user-authorization',
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
    builder.addCase(register, () => {
      console.log('register');
    });
    builder.addCase(login, () => {
      console.log('login');
    });
    builder.addCase(recoveryPassword, (state, action) => {
      // recoverPassword(email);
      console.log('recoveryPassword');
      return {
        ...state,
        email: action.payload,
      };
    });
  },
});

export const { getIngredientDetails, getVisibleOption } =
  userAuthorizationSlice.selectors;
