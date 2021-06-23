import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    orderCounter: 0,
    orderProductsList: []
  },
  reducers: {
    setOrderCounter: (state, action) => {
      state.orderCounter = action.payload
    },
    setOrderProductsList: (state, action) => {
      state.orderProductsList.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { setOrderCounter, setOrderProductsList } = counterSlice.actions

export default counterSlice.reducer