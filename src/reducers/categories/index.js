import { createSlice } from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categoriesArr: [],
  },
  reducers: {
    setCategoriesArr: (state, action) => {
      state.categoriesArr = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCategoriesArr } = categoriesSlice.actions

export default categoriesSlice.reducer