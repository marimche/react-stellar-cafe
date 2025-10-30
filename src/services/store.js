import { combineSlices, configureStore as createStore } from '@reduxjs/toolkit';
import { compose } from 'redux';

import { constructorSlice } from './burger-constructor/reducer';
import { ingredientsSlice } from './burger-ingredients/reducer';
import { ingredientDetailsSlice } from './ingredient-details/reducer';
import { orderSlice } from './order-details/reducer';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers();

const rootReducer = combineSlices(
  ingredientsSlice,
  constructorSlice,
  ingredientDetailsSlice,
  orderSlice
);

export const configureStore = (initialState) => {
  return createStore(
    {
      reducer: rootReducer,
      preloadedState: initialState,
    },
    enhancer
  );
};
