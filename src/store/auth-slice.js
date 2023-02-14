import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    userId: '',
    hasRegistered: false,
  },
  reducers: {
    setLogin(state, action) {
      state.isLoggedIn = true;
      state.userId = action.payload.userId;
    },
    setIsLoggedIn(state, action) {
      state.isLoggedIn = true;
    },
    setHasRegistered(state) {
      state.hasRegistered = true;
    },
    setLogout(state) {
      state.isLoggedIn = false;
      state.userId = '';
      state.hasRegistered = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
