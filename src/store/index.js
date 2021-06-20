import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../reducers/categories';
import productsReducer from '../reducers/products';
import orderReducer from '../reducers/orderCounter';

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    orderCounter: orderReducer,
  },
})