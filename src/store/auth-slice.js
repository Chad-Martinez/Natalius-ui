import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: null,
    token: '',
    userId: '',
  },
  reducers: {
    setLogin(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
