import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    token: '',
    userId: '',
    isRegistered: false,
  },
  reducers: {
    setLogin(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },
    setIsRegistered(state) {
      state.isRegistered = true;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
