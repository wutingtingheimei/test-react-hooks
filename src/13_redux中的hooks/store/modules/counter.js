import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 99,
    message: 'hello heimei'
  },
  reducers: {
    addNumberAction (state, {payload}) {
      state.count = state.count + payload
    },
    subNumberAction (state, {payload}) {
      console.log('state.count', state.count)
      state.count = state.count - payload
    },
    changeMessageAction (state, {payload}) {
      state.message = payload
    }
  }
})

export const { addNumberAction, subNumberAction, changeMessageAction} = counterSlice.actions
export default counterSlice.reducer