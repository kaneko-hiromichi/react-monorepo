// store.js
import { configureStore } from '@reduxjs/toolkit';
import changeReducer from './slice';

export const store = configureStore({
  reducer: {
    color: changeReducer, 
  },
});
