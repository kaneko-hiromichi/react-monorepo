// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    userList: [], // ユーザーリストを保持する配列
  },
  reducers: {
    addUser: (state, action) => {
      state.userList.push(action.payload); // payloadに新しいユーザー情報が含まれる
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
