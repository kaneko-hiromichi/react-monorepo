// slice.js
import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter", // スライスの名前
  initialState: {
    value: 0, // 初期状態
  },
  reducers: {
    countUp: (state, action) => {
      state.value += action.payload;
    },
    countDown: (state, action) => {
      state.value -= action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { countUp, countDown, reset } = counter.actions; // アクションのエクスポート
export default counter.reducer; // リデューサーのエクスポート
