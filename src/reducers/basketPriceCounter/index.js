import { createSlice } from '@reduxjs/toolkit'

export const basketPriceSlice = createSlice({
  name: 'price',
  initialState: {
    basketPriceCounter: 0,
  },
  reducers: {
    setBasketPriceCounter: (state, action) => {
      state.basketPriceCounter = action.payload
    },
  },
})

export const { setBasketPriceCounter } = basketPriceSlice.actions;

export default basketPriceSlice.reducer;