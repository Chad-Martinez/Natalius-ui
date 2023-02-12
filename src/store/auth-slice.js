import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    accessToken: '',
    refreshToken: '',
    user: {},
    hasRegistered: false,
  },
  reducers: {
    setLogin(state, action) {
      state.isLoggedIn = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
    },
    setHasRegistered(state) {
      state.hasRegistered = true;
    },
    setLogout(state) {
      state.isLoggedIn = false;
      state.token = '';
      state.userId = '';
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
