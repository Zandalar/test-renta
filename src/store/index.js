import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../reducers/categories';

export default configureStore({
  reducer: {
    categories: categoriesReducer,
  },
})