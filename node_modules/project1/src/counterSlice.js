// src/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    setStatusBusy: (state) => {
      state.status = "busy";
    },
    setStatusIdle: (state) => {
      state.status = "idle";
    },
    multiplication: (state) => {
        state.value *= 2;
      },
  },
});

export const { increment, decrement,reset,setStatusBusy,setStatusIdle,multiplication} = counterSlice.actions;

export default counterSlice.reducer;
