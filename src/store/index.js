import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../reducers/categories';
import productsReducer from '../reducers/products';
import basketPriceReducer from '../reducers/basketPriceCounter';
import deliveryReducer from '../reducers/delivery';
import orderBasketReducer from '../reducers/orderBasket';

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    basketPriceCounter: basketPriceReducer,
    delivery: deliveryReducer,
    orderBasket: orderBasketReducer,
  },
})