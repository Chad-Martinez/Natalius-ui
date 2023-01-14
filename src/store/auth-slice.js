import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    token: '',
    userId: '',
    hasRegistered: false,
  },
  reducers: {
    setLogin(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },
    setHasRegistered(state) {
      state.hasRegistered = true;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
