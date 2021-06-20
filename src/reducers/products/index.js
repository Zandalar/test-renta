import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    productsArr: [],
  },
  reducers: {
    setProductsArr: (state, action) => {
      state.productsArr = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProductsArr } = productsSlice.actions

export default productsSlice.reducer