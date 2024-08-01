// store.js
import { configureStore } from '@reduxjs/toolkit';
import counter from './slice';

export const store = configureStore({
  reducer: {
    counter: counter, // 状態名と対応するリデューサー
  },
});
