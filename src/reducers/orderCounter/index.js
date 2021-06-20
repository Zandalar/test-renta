import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    orderCounter: 0,
  },
  reducers: {
    setOrderCounter: (state, action) => {
      state.orderCounter = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setOrderCounter } = counterSlice.actions

export default counterSlice.reducer