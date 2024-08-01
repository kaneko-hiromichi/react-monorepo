// slice.js
import { createSlice } from "@reduxjs/toolkit";

const colorChanger = createSlice({
  name: "color", 
  initialState: {
    color: "white", 
  },
  reducers: {
    changeBlue: (state) => {
      state.color = "blue";
    },
    changeRed: (state) => {
      state.color = "red";
    },
    changeWhite: (state) => {
        state.color = "White";
      },
  },
});

export const { changeBlue, changeRed , changeWhite} = colorChanger.actions; // アクションのエクスポート
export default colorChanger.reducer; // リデューサーのエクスポート
