import { createSlice } from '@reduxjs/toolkit'

export const orderBasketSlice = createSlice({
  name: 'order',
  initialState: {
    productsList: [],
  },
  reducers: {
    setProductsList: (state, action) => {
      state.productsList.push(action.payload);
    },
    increaseProductCount: (state, action) => {
      state.productsList.map((product) => {
        if (product.name === action.payload) {
          product.count++;
        }
      })
    },
    decreaseProductCount: (state, action) => {
      state.productsList.map((product) => {
        if (product.name === action.payload) {
          product.count--;
        }
      })
    },
  },
})

export const { setProductsList, increaseProductCount, decreaseProductCount } = orderBasketSlice.actions;

export default orderBasketSlice.reducer;