import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../reducers/categories';
import productsReducer from '../reducers/products';
import orderReducer from '../reducers/orderCounter';
import deliveryReducer from '../reducers/delivery';

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    orderCounter: orderReducer,
    delivery: deliveryReducer,
  },
})