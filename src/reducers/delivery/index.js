import { createSlice } from '@reduxjs/toolkit'

export const deliverySlice = createSlice({
  name: 'delivery',
  initialState: {
    isDelivery: false,
  },
  reducers: {
    setIsDelivery: (state, action) => {
      state.isDelivery = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setIsDelivery } = deliverySlice.actions

export default deliverySlice.reducer