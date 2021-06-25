import { createSlice } from '@reduxjs/toolkit'

export const validationSlice = createSlice({
  name: 'validation',
  initialState: {
    isValid: false,
  },
  reducers: {
    setIsValid: (state, action) => {
      state.isValid = action.payload
    },
  },
})

export const { setIsValid } = validationSlice.actions

export default validationSlice.reducer